'use strict';
/**
 * setup.js - M&C AS9100D reference.docx 템플릿 생성기
 * 실행: node setup.js
 * 결과: 06_산출물_문서/Reference Doc/reference.docx
 */

const { execFileSync } = require('child_process');
const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const PANDOC = 'C:\\Program Files\\Pandoc\\pandoc.exe';
const BASE_DIR = path.resolve(__dirname, '..');
const LOGO_PATH = path.join(BASE_DIR, 'reference', 'logo.jpg');
const REF_DIR = path.join(BASE_DIR, '06_산출물_문서', 'Reference Doc');
const REF_FILE = path.join(REF_DIR, 'reference.docx');

// A4 기준 탭 위치 (twips): 좌여백 3cm, 우여백 2.5cm → 텍스트폭 ≈ 8788
const TAB_CENTER = 4394;
const TAB_RIGHT = 8788;

async function main() {
  console.log('[1/5] Pandoc 기본 reference.docx 로드...');
  fs.mkdirSync(REF_DIR, { recursive: true });

  const defaultDocxBuf = execFileSync(PANDOC, ['--print-default-data-file', 'reference.docx']);
  const zip = await JSZip.loadAsync(defaultDocxBuf);

  console.log('[2/5] 로고 이미지 추가...');
  if (!fs.existsSync(LOGO_PATH)) {
    console.error(`  ⚠ 로고 파일 없음: ${LOGO_PATH}`);
    console.error('  reference/logo.jpg 파일을 확인하세요.');
    process.exit(1);
  }
  const logoData = fs.readFileSync(LOGO_PATH);
  zip.file('word/media/logo.jpg', logoData);

  console.log('[3/5] 헤더/푸터 XML 생성...');
  zip.file('word/header1.xml', buildHeaderXml());
  zip.file('word/_rels/header1.xml.rels', buildHeaderRels());
  zip.file('word/footer1.xml', buildFooterXml());

  console.log('[4/5] 문서 메타 파일 업데이트...');
  // [Content_Types].xml
  let ct = await zip.file('[Content_Types].xml').async('string');
  ct = injectContentTypes(ct);
  zip.file('[Content_Types].xml', ct);

  // word/_rels/document.xml.rels
  let docRels = await zip.file('word/_rels/document.xml.rels').async('string');
  docRels = injectDocRels(docRels);
  zip.file('word/_rels/document.xml.rels', docRels);

  // word/document.xml  - sectPr에 header/footer 참조 + A4 용지 설정
  let docXml = await zip.file('word/document.xml').async('string');
  docXml = injectSectPr(docXml);
  zip.file('word/document.xml', docXml);

  // word/styles.xml - 기본 폰트를 맑은 고딕으로 변경
  let stylesXml = await zip.file('word/styles.xml').async('string');
  stylesXml = patchFonts(stylesXml);
  stylesXml = addCenteredLogoStyle(stylesXml);
  zip.file('word/styles.xml', stylesXml);

  console.log('[5/5] reference.docx 저장...');
  const outBuf = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 }
  });
  fs.writeFileSync(REF_FILE, outBuf);
  console.log(`\n✅ 완료: ${REF_FILE}`);
  console.log('   이제 node convert.js 를 실행하세요.\n');
}

// ─── 헤더 XML (로고 좌 | {{TITLE}} 중앙 | {{DOC_NUMBER}} 우) ────────────────
// 변환 후 convert.js가 {{TITLE}}, {{DOC_NUMBER}} 를 실제 값으로 치환함
function buildHeaderXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:hdr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
       xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
       xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
       xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
       xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"
       xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
       xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
       mc:Ignorable="w14">
  <w:p>
    <w:pPr>
      <w:pStyle w:val="Header"/>
      <w:tabs>
        <w:tab w:val="center" w:pos="${TAB_CENTER}"/>
        <w:tab w:val="right" w:pos="${TAB_RIGHT}"/>
      </w:tabs>
    </w:pPr>
    <w:r>
      <w:drawing>
        <wp:inline distT="0" distB="0" distL="0" distR="114300">
          <wp:extent cx="1143000" cy="457200"/>
          <wp:effectExtent l="0" t="0" r="0" b="0"/>
          <wp:docPr id="1" name="CompanyLogo" descr="M&amp;C Logo"/>
          <wp:cNvGraphicFramePr>
            <a:graphicFrameLocks noChangeAspect="1"/>
          </wp:cNvGraphicFramePr>
          <a:graphic>
            <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">
              <pic:pic>
                <pic:nvPicPr>
                  <pic:cNvPr id="1" name="CompanyLogo"/>
                  <pic:cNvPicPr><a:picLocks noChangeAspect="1"/></pic:cNvPicPr>
                </pic:nvPicPr>
                <pic:blipFill>
                  <a:blip r:embed="rId1"/>
                  <a:stretch><a:fillRect/></a:stretch>
                </pic:blipFill>
                <pic:spPr>
                  <a:xfrm><a:off x="0" y="0"/><a:ext cx="1143000" cy="457200"/></a:xfrm>
                  <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
                </pic:spPr>
              </pic:pic>
            </a:graphicData>
          </a:graphic>
        </wp:inline>
      </w:drawing>
    </w:r>
    <w:r><w:tab/></w:r>
    <w:r><w:rPr><w:b/><w:sz w:val="20"/></w:rPr><w:t>{{TITLE}}</w:t></w:r>
    <w:r><w:tab/></w:r>
    <w:r><w:rPr><w:sz w:val="18"/></w:rPr><w:t>{{DOC_NUMBER}}</w:t></w:r>
  </w:p>
</w:hdr>`;
}

function buildHeaderRels() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image"
    Target="media/logo.jpg"/>
</Relationships>`;
}

// ─── 푸터 XML (대외비 좌 | 문서제목 중앙 | 개정일 우 | 페이지) ────────────
function buildFooterXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:p>
    <w:pPr>
      <w:pStyle w:val="Footer"/>
      <w:tabs>
        <w:tab w:val="center" w:pos="${TAB_CENTER}"/>
        <w:tab w:val="right" w:pos="${TAB_RIGHT}"/>
      </w:tabs>
    </w:pPr>
    <w:r><w:t>대외비</w:t></w:r>
    <w:r><w:tab/></w:r>
    <w:r><w:t>{{TITLE}}</w:t></w:r>
    <w:r><w:tab/></w:r>
    <w:r><w:t>{{DOC_DATE}}</w:t></w:r>
    <w:r><w:t xml:space="preserve">  |  </w:t></w:r>
    <w:fldSimple w:instr=" PAGE "><w:r><w:t>1</w:t></w:r></w:fldSimple>
    <w:r><w:t xml:space="preserve"> / </w:t></w:r>
    <w:fldSimple w:instr=" NUMPAGES "><w:r><w:t>1</w:t></w:r></w:fldSimple>
  </w:p>
</w:ftr>`;
}

// ─── [Content_Types].xml 업데이트 ────────────────────────────────────────────
function injectContentTypes(xml) {
  const entries = [
    '<Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>',
    '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>',
    '<Override PartName="/docProps/custom.xml" ContentType="application/vnd.openxmlformats-officedocument.custom-properties+xml"/>'
  ];
  for (const entry of entries) {
    const key = entry.match(/PartName="([^"]+)"/)[1].split('/').pop().replace('.xml', '');
    if (!xml.includes(key)) {
      xml = xml.replace('</Types>', `  ${entry}\n</Types>`);
    }
  }
  return xml;
}

// ─── word/_rels/document.xml.rels 업데이트 ───────────────────────────────────
function injectDocRels(xml) {
  const rels = [
    { id: 'rId_hdr1', type: 'header', target: 'header1.xml' },
    { id: 'rId_ftr1', type: 'footer', target: 'footer1.xml' }
  ];
  for (const rel of rels) {
    if (!xml.includes(rel.target)) {
      const entry = `  <Relationship Id="${rel.id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/${rel.type}" Target="${rel.target}"/>`;
      xml = xml.replace('</Relationships>', `${entry}\n</Relationships>`);
    }
  }
  return xml;
}

// ─── word/document.xml sectPr 업데이트 (A4 용지 + 헤더/푸터 참조) ───────────
function injectSectPr(xml) {
  // 기존 headerReference / footerReference 제거
  xml = xml.replace(/<w:headerReference[^>]*\/>/g, '');
  xml = xml.replace(/<w:footerReference[^>]*\/>/g, '');
  // 기존 pgSz 제거 (A4로 교체)
  xml = xml.replace(/<w:pgSz[^>]*\/>/g, '');
  xml = xml.replace(/<w:pgMar[^>]*\/>/g, '');

  const inject = [
    '<w:pgSz w:w="11907" w:h="16840"/>',
    '<w:pgMar w:top="1418" w:right="1418" w:bottom="1418" w:left="1701" w:header="709" w:footer="709" w:gutter="0"/>',
    '<w:headerReference w:type="default" r:id="rId_hdr1"/>',
    '<w:footerReference w:type="default" r:id="rId_ftr1"/>'
  ].join('\n    ');

  // 마지막 </w:sectPr> 앞에 삽입
  const lastIdx = xml.lastIndexOf('</w:sectPr>');
  if (lastIdx !== -1) {
    xml = xml.slice(0, lastIdx) + `    ${inject}\n  ` + xml.slice(lastIdx);
  }
  return xml;
}

// ─── styles.xml: 폰트 변경 + CenteredLogo 커스텀 스타일 추가 ──────────────────
function addCenteredLogoStyle(xml) {
  // 이미 있으면 건너뜀
  if (xml.includes('CenteredLogo')) return xml;
  const style = `
  <w:style w:type="paragraph" w:customStyle="1" w:styleId="CenteredLogo">
    <w:name w:val="CenteredLogo"/>
    <w:basedOn w:val="Normal"/>
    <w:pPr>
      <w:jc w:val="center"/>
      <w:spacing w:before="0" w:after="0"/>
    </w:pPr>
  </w:style>`;
  return xml.replace('</w:styles>', style + '\n</w:styles>');
}

function patchFonts(xml) {
  // docDefaults의 ascii/hAnsi 폰트 교체
  xml = xml.replace(
    /<w:rFonts([^>]*?)w:ascii="[^"]*"([^>]*?)w:hAnsi="[^"]*"([^>]*?)\/>/g,
    '<w:rFonts$1w:ascii="맑은 고딕"$2w:hAnsi="맑은 고딕"$3/>'
  );
  // 못 찾은 경우를 위해 docDefaults rPr에 직접 삽입 시도
  if (!xml.includes('맑은 고딕')) {
    xml = xml.replace(
      '<w:rPrDefault>',
      '<w:rPrDefault><w:rPr><w:rFonts w:ascii="맑은 고딕" w:hAnsi="맑은 고딕" w:cs="맑은 고딕"/></w:rPr>'
    );
  }
  return xml;
}

main().catch(err => {
  console.error('\n❌ 오류:', err.message);
  process.exit(1);
});
