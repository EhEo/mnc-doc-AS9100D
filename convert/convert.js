'use strict';
/**
 * convert.js - M&C AS9100D MD → DOCX 일괄 변환기
 * 실행: node convert.js
 *
 * 입력: 05_산출물/**\/*.md
 * 출력: 06_산출물_문서/**\/*.docx (동일 폴더 구조)
 * 템플릿: 06_산출물_문서/Reference Doc/reference.docx
 */

const { execFileSync } = require('child_process');
const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const PANDOC     = 'C:\\Program Files\\Pandoc\\pandoc.exe';
const BASE_DIR   = path.resolve(__dirname, '..');
const SRC_DIR    = path.join(BASE_DIR, '05_산출물');
const OUT_DIR    = path.join(BASE_DIR, '06_산출물_문서');
const REF_DOCX   = path.join(OUT_DIR, 'Reference Doc', 'reference.docx');
const LUA_FILTER = path.join(__dirname, 'filters', 'title-page.lua');
const LOGO_PATH  = path.join(BASE_DIR, 'reference', 'logo.jpg').replace(/\\/g, '/');

// ─── MD 파일 목록 수집 (재귀) ────────────────────────────────────────────────
function collectMdFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectMdFiles(full, results);
    } else if (entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

// ─── MD 메타데이터 추출 (문서번호, 개정번호, 제정일) ─────────────────────────
function extractMeta(content, filePath) {
  const get = (pattern) => {
    const m = content.match(pattern);
    return m ? m[1].trim() : '';
  };

  // 첫 번째 H1 제목
  const titleMatch = content.match(/^#\s+(.+?)(?:\s*\n|$)/m);
  const title = titleMatch ? titleMatch[1].trim() : path.basename(filePath, '.md');

  const doc_number = get(/\|\s*문서번호\s*\|\s*([^|\n]+?)\s*\|/);
  const revision   = get(/\|\s*개정번호\s*\|\s*([^|\n]+?)\s*\|/) || 'Rev. 0';
  const doc_date   = get(/\|\s*제정일\s*\|\s*([^|\n]+?)\s*\|/);

  return { title, doc_number, revision, doc_date };
}

// ─── 출력 경로 계산 ───────────────────────────────────────────────────────────
function getOutPath(srcPath) {
  const rel = path.relative(SRC_DIR, srcPath);
  const outRel = rel.replace(/\.md$/, '.docx');
  return path.join(OUT_DIR, outRel);
}

// ─── 개별 파일 변환 ───────────────────────────────────────────────────────────
async function convertFile(srcPath) {
  const content = fs.readFileSync(srcPath, 'utf-8');
  const meta = extractMeta(content, srcPath);
  const outPath = getOutPath(srcPath);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const args = [
    srcPath,
    '-o', outPath,
    '--reference-doc', REF_DOCX,
    '--lua-filter', LUA_FILTER,
    '-M', `title=${meta.title}`,
    '-M', `doc_number=${meta.doc_number}`,
    '-M', `revision=${meta.revision}`,
    '-M', `doc_date=${meta.doc_date}`,
    '-M', `logo_path=${LOGO_PATH}`,
    '--wrap=none',
    '--standalone'
  ];

  try {
    execFileSync(PANDOC, args, { stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (err) {
    const stderr = err.stderr ? err.stderr.toString() : err.message;
    throw new Error(`Pandoc 오류:\n${stderr}`);
  }

  // 변환 후 DOCX 후처리 (헤더/푸터 값 치환)
  await postProcessDocx(outPath, meta);

  return outPath;
}

// ─── DOCX 후처리: 헤더/푸터 플레이스홀더 치환 ───────────────────────────────
// setup.js의 reference.docx에 {{TITLE}}, {{DOC_NUMBER}}, {{DOC_DATE}} 가 있음
// Pandoc이 이를 복사하므로 변환 후 실제 값으로 치환
function escapeXml(s) {
  return (s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function postProcessDocx(docxPath, meta) {
  const buf = fs.readFileSync(docxPath);
  const zip = await JSZip.loadAsync(buf);

  // ── 헤더/푸터 플레이스홀더 치환 ──────────────────────────────────────────
  const safeTitle   = escapeXml(meta.title);
  const safeDocNum  = escapeXml(meta.doc_number);
  const safeDocDate = escapeXml(meta.doc_date);

  for (const part of ['word/header1.xml', 'word/footer1.xml']) {
    const file = zip.file(part);
    if (!file) continue;
    let xml = await file.async('string');
    xml = xml.replace(/\{\{TITLE\}\}/g,      safeTitle);
    xml = xml.replace(/\{\{DOC_NUMBER\}\}/g, safeDocNum);
    xml = xml.replace(/\{\{DOC_DATE\}\}/g,   safeDocDate);
    zip.file(part, xml);
  }

  const out = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 }
  });
  fs.writeFileSync(docxPath, out);
}

function buildCustomPropsXml(doc_number, doc_date) {
  const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/custom-properties"
            xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <property fmtid="{D5CDD505-2E9C-101B-9397-08002B2CF9AE}" pid="2" name="doc_number">
    <vt:lpwstr>${escape(doc_number)}</vt:lpwstr>
  </property>
  <property fmtid="{D5CDD505-2E9C-101B-9397-08002B2CF9AE}" pid="3" name="doc_date">
    <vt:lpwstr>${escape(doc_date)}</vt:lpwstr>
  </property>
</Properties>`;
}

// ─── 메인 ─────────────────────────────────────────────────────────────────────
async function main() {
  // 사전 검사
  if (!fs.existsSync(REF_DOCX)) {
    console.error('❌ reference.docx 없음. 먼저 node setup.js 를 실행하세요.');
    process.exit(1);
  }
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`❌ 입력 폴더 없음: ${SRC_DIR}`);
    process.exit(1);
  }

  const files = collectMdFiles(SRC_DIR);
  if (files.length === 0) {
    console.log('변환할 MD 파일이 없습니다.');
    return;
  }

  console.log(`\n🔄 M&C AS9100D 문서 변환 시작`);
  console.log(`   입력: ${SRC_DIR}`);
  console.log(`   출력: ${OUT_DIR}`);
  console.log(`   파일: ${files.length}건\n`);

  let success = 0;
  let fail = 0;
  const errors = [];

  for (let i = 0; i < files.length; i++) {
    const src = files[i];
    const rel = path.relative(BASE_DIR, src);
    const label = `[${String(i + 1).padStart(2)}/${files.length}]`;

    process.stdout.write(`${label} ${rel} ... `);
    try {
      const out = await convertFile(src);
      const outRel = path.relative(BASE_DIR, out);
      console.log(`✅  → ${outRel}`);
      success++;
    } catch (err) {
      console.log('❌ 실패');
      errors.push({ file: rel, error: err.message });
      fail++;
    }
  }

  console.log(`\n${'─'.repeat(60)}`);
  console.log(`✅ 성공: ${success}건  ❌ 실패: ${fail}건`);

  if (errors.length > 0) {
    console.log('\n실패 목록:');
    for (const e of errors) {
      console.log(`  - ${e.file}`);
      console.log(`    ${e.error.split('\n')[0]}`);
    }
  }
  console.log(`\n출력 폴더: ${OUT_DIR}\n`);
}

main().catch(err => {
  console.error('\n❌ 예상치 못한 오류:', err.message);
  process.exit(1);
});
