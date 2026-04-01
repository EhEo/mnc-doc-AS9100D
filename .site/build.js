const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.resolve(__dirname, '..', 'docs'); // GitHub Pages: serve from /docs folder

// Build risk lookup from Document_Master_List
function buildRiskLookup(root) {
  const lookup = {};
  const masterPath = path.join(root, '02_문서관리', 'Document_Master_List.md');
  if (!fs.existsSync(masterPath)) return lookup;

  const content = fs.readFileSync(masterPath, 'utf-8');
  // Match table rows with document numbers and risk levels
  const rowRegex = /\|\s*(\w+-\d+(?:-\d+)?)\s*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|\s*(고위험|중위험|저위험|일반)\s*\|/g;
  let match;
  while ((match = rowRegex.exec(content)) !== null) {
    const docNum = match[1].trim();
    const risk = match[2].trim();
    lookup[docNum] = risk;
  }

  // Also match forms: F-xxx-xx pattern (already handled above with (?:-\d+)?)
  // Also match entries with different column counts
  const rowRegex2 = /\|\s*(\w+-\d+(?:-\d+)?)\s*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|\s*(고위험|중위험|저위험|일반)\s*\|/g;
  while ((match = rowRegex2.exec(content)) !== null) {
    const docNum = match[1].trim();
    const risk = match[2].trim();
    if (!lookup[docNum]) lookup[docNum] = risk;
  }

  console.log(`   리스크 매핑 ${Object.keys(lookup).length}건 로드`);
  return lookup;
}

// Scan directories for markdown files
function scanMarkdownFiles(dir, baseDir, riskLookup) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath);

    // Skip .site, .git, .claude directories
    if (entry.isDirectory()) {
      if (['.site', '.git', '.claude', 'node_modules'].includes(entry.name)) continue;
      results.push(...scanMarkdownFiles(fullPath, baseDir, riskLookup));
      continue;
    }

    if (!entry.name.endsWith('.md')) continue;

    try {
      const stat = fs.statSync(fullPath);
      const content = fs.readFileSync(fullPath, 'utf-8');
      const meta = extractMeta(relPath, entry.name, content, riskLookup);

      results.push({
        path: relPath.replace(/\\/g, '/'),
        name: entry.name,
        title: meta.title,
        docNumber: meta.docNumber,
        layer: meta.layer,
        clause: meta.clause,
        risk: meta.risk,
        category: meta.category,
        modified: stat.mtimeMs,
        modifiedStr: formatDate(stat.mtime),
        content: content,
      });
    } catch (e) {
      console.warn(`  [SKIP] ${relPath}: ${e.message}`);
    }
  }

  return results;
}

function extractMeta(relPath, filename, content, riskLookup) {
  const meta = { title: '', docNumber: '', layer: '', clause: '', risk: '일반', category: '' };

  // Extract title from first heading
  const titleMatch = content.match(/^#\s+(.+)/m);
  if (titleMatch) meta.title = titleMatch[1].trim();

  // Extract doc number from filename or content
  const docMatch = filename.match(/^((?:QM|QP|WI|F)-\d+(?:-\d+)?)/);
  if (docMatch) {
    meta.docNumber = docMatch[1];
  }

  // Determine layer and category from path
  if (relPath.includes('1계층') || filename.startsWith('QM-')) {
    meta.layer = '1계층';
    meta.category = '품질매뉴얼';
  } else if (relPath.includes('2계층') || filename.startsWith('QP-')) {
    meta.layer = '2계층';
    meta.category = '절차서';
  } else if (relPath.includes('3계층_지침서') || filename.startsWith('WI-')) {
    meta.layer = '3계층';
    meta.category = '지침서';
  } else if (relPath.includes('03_실행계획')) {
    meta.layer = '실행계획';
    meta.category = '실행계획';
  } else if (relPath.includes('04_대시보드')) {
    meta.layer = '대시보드';
    meta.category = '대시보드';
  } else if (relPath.includes('01_마스터일정')) {
    meta.layer = '마스터일정';
    meta.category = '마스터일정';
  } else if (relPath.includes('02_문서관리')) {
    meta.layer = '문서관리';
    meta.category = '문서관리';
  } else {
    meta.layer = '기타';
    meta.category = '기타';
  }

  // Extract clause from content
  const clauseMatch = content.match(/적용\s*규격.*?(\d+\.\d+(?:\.\d+)?)|관련조항.*?(\d+\.\d+(?:\.\d+)?)/);
  if (clauseMatch) meta.clause = clauseMatch[1] || clauseMatch[2] || '';

  // Extract risk from Document_Master_List lookup (primary) or content (fallback)
  if (meta.docNumber && riskLookup[meta.docNumber]) {
    meta.risk = riskLookup[meta.docNumber];
  } else if (relPath.includes('고위험')) {
    meta.risk = '고위험';
  } else if (relPath.includes('중위험')) {
    meta.risk = '중위험';
  } else if (relPath.includes('저위험')) {
    meta.risk = '저위험';
  }

  // Override title if empty
  if (!meta.title) {
    meta.title = filename.replace(/\.md$/, '').replace(/_/g, ' ');
  }

  return meta;
}

function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const h = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${y}-${m}-${d} ${h}:${min}`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Main build
console.log('=== AS9100D 정적 매뉴얼 사이트 빌드 ===\n');

console.log('1. 리스크 매핑 로드 및 마크다운 파일 스캔 중...');
const riskLookup = buildRiskLookup(ROOT);
const files = scanMarkdownFiles(ROOT, ROOT, riskLookup);
console.log(`   ${files.length}개 파일 발견\n`);

// Sort by modified time (recent first)
const recentFiles = [...files].sort((a, b) => b.modified - a.modified);

console.log('2. HTML 생성 중...');

// Build document data JSON
const docData = files.map(f => ({
  path: f.path,
  name: f.name,
  title: f.title,
  docNumber: f.docNumber,
  layer: f.layer,
  clause: f.clause,
  risk: f.risk,
  category: f.category,
  modified: f.modified,
  modifiedStr: f.modifiedStr,
  content: f.content,
}));

// Group by layer for sidebar
const grouped = {};
for (const doc of docData) {
  if (!grouped[doc.layer]) grouped[doc.layer] = [];
  grouped[doc.layer].push(doc);
}

// Sort each group: high risk first, then by doc number
for (const layer of Object.keys(grouped)) {
  grouped[layer].sort((a, b) => {
    const riskOrder = { '고위험': 0, '중위험': 1, '저위험': 2, '일반': 3 };
    const ra = riskOrder[a.risk] ?? 3;
    const rb = riskOrder[b.risk] ?? 3;
    if (ra !== rb) return ra - rb;
    return (a.docNumber || '').localeCompare(b.docNumber || '', 'ko');
  });
}

const dataJson = JSON.stringify(docData);

// Generate HTML
const html = generateHTML(dataJson, grouped, recentFiles.slice(0, 15));

// Write output
if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true });
const outPath = path.join(DIST, 'index.html');
fs.writeFileSync(outPath, html, 'utf-8');

console.log(`   출력: ${outPath}`);
console.log(`   크기: ${(Buffer.byteLength(html) / 1024).toFixed(1)} KB\n`);
console.log('3. 빌드 완료!');
console.log(`   파일 열기: start ${outPath}`);

function generateHTML(dataJson, grouped, recentFiles) {
  const layerOrder = ['품질매뉴얼', '1계층', '2계층', '3계층', '마스터일정', '문서관리', '실행계획', '대시보드', '기타'];
  const layerLabels = {
    '품질매뉴얼': '1계층: 품질매뉴얼',
    '1계층': '1계층: 품질매뉴얼',
    '2계층': '2계층: 절차서',
    '3계층': '3계층: 지침서',
    '마스터일정': '마스터일정',
    '문서관리': '문서관리',
    '실행계획': '실행계획',
    '대시보드': '대시보드',
    '기타': '기타',
  };

  // Build sidebar HTML
  let sidebarHtml = '';

  // Recent updates section
  sidebarHtml += `<div class="sidebar-section"><div class="sidebar-section-title clickable" onclick="showRecent()">최근 수정 (${recentFiles.length}건)</div></div>`;

  for (const layerKey of layerOrder) {
    const docs = grouped[layerKey];
    if (!docs || docs.length === 0) continue;
    const label = layerLabels[layerKey] || layerKey;

    sidebarHtml += `<div class="sidebar-section">`;
    sidebarHtml += `<div class="sidebar-section-title" onclick="toggleSection(this)">${label} (${docs.length})</div>`;
    sidebarHtml += `<ul class="sidebar-list">`;

    for (const doc of docs) {
      const riskClass = doc.risk === '고위험' ? 'risk-high' : doc.risk === '중위험' ? 'risk-medium' : doc.risk === '저위험' ? 'risk-low' : '';
      const riskBadge = doc.risk !== '일반' ? `<span class="risk-badge ${riskClass}">${doc.risk.charAt(0)}</span>` : '';
      const shortTitle = doc.title.length > 30 ? doc.title.substring(0, 30) + '...' : doc.title;
      const docLabel = doc.docNumber ? `${doc.docNumber} ${shortTitle}` : shortTitle;
      sidebarHtml += `<li class="sidebar-item" data-path="${escapeHtml(doc.path)}" data-risk="${doc.risk}" onclick="loadDoc('${escapeHtml(doc.path)}')">${riskBadge}<span class="sidebar-item-text">${escapeHtml(docLabel)}</span></li>`;
    }

    sidebarHtml += `</ul></div>`;
  }

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AS9100D 인증 준비 문서 뷰어</title>
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github.min.css">
<script src="https://cdn.jsdelivr.net/npm/marked@12.0.0/marked.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/highlight.min.js"><\/script>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #ffffff;
  --bg-sidebar: #f8f9fa;
  --bg-header: #1a365d;
  --text: #1a202c;
  --text-sidebar: #2d3748;
  --text-muted: #718096;
  --border: #e2e8f0;
  --accent: #2b6cb0;
  --accent-light: #ebf4ff;
  --risk-high: #e53e3e;
  --risk-medium: #dd6b20;
  --risk-low: #38a169;
  --code-bg: #f7fafc;
  --table-stripe: #f7fafc;
  --link: #2b6cb0;
  --hover-bg: #edf2f7;
  --shadow: 0 1px 3px rgba(0,0,0,0.08);
  --font: 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  font-family: var(--font);
  font-size: 14px;
  line-height: 1.6;
  color: var(--text);
  background: var(--bg);
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

/* Header */
.header {
  background: var(--bg-header);
  color: #fff;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  z-index: 100;
}
.header h1 {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
}
.header .subtitle {
  font-size: 12px;
  opacity: 0.8;
}
.header .spacer { flex: 1; }
.header .info {
  font-size: 11px;
  opacity: 0.7;
}

/* Layout */
.layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Sidebar */
.sidebar {
  width: 300px;
  min-width: 260px;
  max-width: 400px;
  background: var(--bg-sidebar);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
  resize: horizontal;
}

.sidebar-search {
  padding: 12px;
  border-bottom: 1px solid var(--border);
}
.sidebar-search input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  font-family: var(--font);
  outline: none;
  background: #fff;
}
.sidebar-search input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(43,108,176,0.1);
}

.sidebar-filters {
  padding: 8px 12px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--border);
}
.filter-btn {
  padding: 3px 10px;
  border: 1px solid var(--border);
  border-radius: 12px;
  font-size: 11px;
  cursor: pointer;
  background: #fff;
  color: var(--text-muted);
  font-family: var(--font);
  transition: all 0.15s;
}
.filter-btn:hover { background: var(--hover-bg); }
.filter-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); }
.filter-btn.active-high { background: var(--risk-high); color: #fff; border-color: var(--risk-high); }
.filter-btn.active-medium { background: var(--risk-medium); color: #fff; border-color: var(--risk-medium); }
.filter-btn.active-low { background: var(--risk-low); color: #fff; border-color: var(--risk-low); }

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.sidebar-section {
  margin-bottom: 4px;
}
.sidebar-section-title {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 6px;
}
.sidebar-section-title::before {
  content: '▶';
  font-size: 8px;
  transition: transform 0.15s;
}
.sidebar-section-title.open::before {
  transform: rotate(90deg);
}
.sidebar-section-title.clickable {
  cursor: pointer;
}

.sidebar-list {
  list-style: none;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}
.sidebar-list.open {
  max-height: 2000px;
}

.sidebar-item {
  padding: 6px 16px 6px 24px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.1s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sidebar-item:hover {
  background: var(--hover-bg);
}
.sidebar-item.active {
  background: var(--accent-light);
  color: var(--accent);
  font-weight: 500;
  border-right: 3px solid var(--accent);
}
.sidebar-item.hidden {
  display: none;
}

.sidebar-item-text {
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Risk badges */
.risk-badge {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  line-height: 18px;
  flex-shrink: 0;
}
.risk-high { background: var(--risk-high); color: #fff; }
.risk-medium { background: var(--risk-medium); color: #fff; }
.risk-low { background: var(--risk-low); color: #fff; }

/* Main content */
.main {
  flex: 1;
  overflow-y: auto;
  padding: 32px 48px;
  max-width: 960px;
}

.welcome {
  text-align: center;
  padding: 80px 40px;
  color: var(--text-muted);
}
.welcome h2 {
  font-size: 24px;
  color: var(--text);
  margin-bottom: 16px;
}
.welcome p {
  font-size: 14px;
  line-height: 1.8;
}

.doc-header {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--border);
}
.doc-header .doc-path {
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 4px;
}
.doc-header .doc-meta {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 8px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Markdown rendered content */
.markdown-body {
  font-size: 14px;
  line-height: 1.75;
}
.markdown-body h1 {
  font-size: 24px;
  font-weight: 700;
  margin: 32px 0 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--border);
  color: var(--text);
}
.markdown-body h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 28px 0 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--border);
  color: var(--text);
}
.markdown-body h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 8px;
  color: var(--text);
}
.markdown-body h4 {
  font-size: 14px;
  font-weight: 700;
  margin: 20px 0 8px;
}
.markdown-body p {
  margin: 0 0 12px;
}
.markdown-body a {
  color: var(--link);
  text-decoration: none;
}
.markdown-body a:hover {
  text-decoration: underline;
}
.markdown-body strong {
  font-weight: 700;
}
.markdown-body em {
  font-style: italic;
}
.markdown-body ul, .markdown-body ol {
  margin: 0 0 12px;
  padding-left: 24px;
}
.markdown-body li {
  margin: 4px 0;
}
.markdown-body blockquote {
  margin: 0 0 12px;
  padding: 8px 16px;
  border-left: 4px solid var(--accent);
  background: var(--accent-light);
  color: var(--text);
  border-radius: 0 4px 4px 0;
}
.markdown-body code {
  background: var(--code-bg);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 13px;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
}
.markdown-body pre {
  background: var(--code-bg);
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 0 0 16px;
  border: 1px solid var(--border);
}
.markdown-body pre code {
  background: none;
  padding: 0;
  font-size: 13px;
  line-height: 1.5;
}
.markdown-body hr {
  border: none;
  border-top: 1px solid var(--border);
  margin: 24px 0;
}
.markdown-body img {
  max-width: 100%;
  height: auto;
}

/* Tables */
.markdown-body table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 0 16px;
  font-size: 13px;
}
.markdown-body th, .markdown-body td {
  border: 1px solid var(--border);
  padding: 8px 12px;
  text-align: left;
}
.markdown-body th {
  background: var(--bg-sidebar);
  font-weight: 700;
  white-space: nowrap;
}
.markdown-body tr:nth-child(even) {
  background: var(--table-stripe);
}

/* Recent list */
.recent-list {
  list-style: none;
  padding: 0;
}
.recent-list li {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background 0.1s;
}
.recent-list li:hover {
  background: var(--hover-bg);
}
.recent-list .recent-date {
  font-size: 11px;
  color: var(--text-muted);
  white-space: nowrap;
  min-width: 110px;
}
.recent-list .recent-title {
  font-size: 13px;
  flex: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar { width: 240px; min-width: 200px; }
  .main { padding: 20px; }
}

/* Scrollbar styling */
.sidebar-nav::-webkit-scrollbar,
.main::-webkit-scrollbar {
  width: 6px;
}
.sidebar-nav::-webkit-scrollbar-thumb,
.main::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 3px;
}
.sidebar-nav::-webkit-scrollbar-thumb:hover,
.main::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

/* Back to top */
.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 18px;
  display: none;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
  z-index: 50;
}
.back-to-top.show { display: flex; }
</style>
</head>
<body>

<div class="header">
  <h1>AS9100D 인증 준비 문서 뷰어</h1>
  <span class="subtitle">(주)에이로텍</span>
  <div class="spacer"></div>
  <span class="info">기준일: 2026-04-01 | 문서 ${docData.length}건</span>
</div>

<div class="layout">
  <div class="sidebar">
    <div class="sidebar-search">
      <input type="text" id="searchInput" placeholder="문서 검색..." oninput="filterDocs()">
    </div>
    <div class="sidebar-filters">
      <button class="filter-btn active" data-filter="all" onclick="setFilter('all', this)">전체</button>
      <button class="filter-btn" data-filter="고위험" onclick="setFilter('고위험', this)">고위험</button>
      <button class="filter-btn" data-filter="중위험" onclick="setFilter('중위험', this)">중위험</button>
      <button class="filter-btn" data-filter="저위험" onclick="setFilter('저위험', this)">저위험</button>
    </div>
    <div class="sidebar-nav" id="sidebarNav">
      ${sidebarHtml}
    </div>
  </div>

  <div class="main" id="mainContent">
    <div class="welcome" id="welcomeMsg">
      <h2>AS9100D 인증 준비 문서 뷰어</h2>
      <p>왼쪽 사이드바에서 문서를 선택하세요.<br>
      문서 ${docData.length}건 | 최근 수정 ${recentFiles.length}건</p>
    </div>
  </div>
</div>

<button class="back-to-top" id="backToTop" onclick="scrollToTop()">↑</button>

<script>
// Document data
const docs = ${dataJson};

// State
let currentFilter = 'all';
let currentDoc = null;

// Initialize: open first section
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.sidebar-section-title');
  if (sections.length > 0) {
    sections[0].classList.add('open');
    const list = sections[0].parentElement.querySelector('.sidebar-list');
    if (list) list.classList.add('open');
  }

  // Check hash for direct link
  const hash = window.location.hash;
  if (hash && hash.startsWith('#doc=')) {
    const docPath = decodeURIComponent(hash.substring(5));
    loadDoc(docPath);
  }
});

// Toggle sidebar section
function toggleSection(el) {
  el.classList.toggle('open');
  const list = el.parentElement.querySelector('.sidebar-list');
  if (list) list.classList.toggle('open');
}

// Load document
function loadDoc(docPath) {
  const doc = docs.find(d => d.path === docPath);
  if (!doc) return;

  currentDoc = doc;
  window.location.hash = 'doc=' + encodeURIComponent(docPath);

  // Update active state
  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
  const activeItem = document.querySelector('.sidebar-item[data-path="' + CSS.escape(docPath) + '"]');
  if (activeItem) {
    activeItem.classList.add('active');
    // Open parent section
    const section = activeItem.closest('.sidebar-section');
    if (section) {
      const title = section.querySelector('.sidebar-section-title');
      const list = section.querySelector('.sidebar-list');
      if (title && !title.classList.contains('open')) {
        title.classList.add('open');
        if (list) list.classList.add('open');
      }
    }
  }

  // Render content
  const main = document.getElementById('mainContent');
  const riskBadge = doc.risk !== '일반'
    ? '<span class="risk-badge ' + getRiskClass(doc.risk) + '" style="display:inline-block;margin-right:8px;">' + doc.risk + '</span>'
    : '';

  let html = '<div class="doc-header">';
  html += '<div class="doc-path">' + escapeHtml(doc.path) + '</div>';
  html += '<h1 style="border:none;margin:0;padding:0;">' + riskBadge + escapeHtml(doc.title) + '</h1>';
  html += '<div class="doc-meta">';
  if (doc.docNumber) html += '<span>문서번호: ' + escapeHtml(doc.docNumber) + '</span>';
  if (doc.layer) html += '<span>계층: ' + escapeHtml(doc.layer) + '</span>';
  if (doc.risk !== '일반') html += '<span>위험등급: ' + escapeHtml(doc.risk) + '</span>';
  html += '<span>수정일: ' + escapeHtml(doc.modifiedStr) + '</span>';
  html += '</div>';
  html += '</div>';

  html += '<div class="markdown-body">' + marked.parse(doc.content) + '</div>';

  main.innerHTML = html;

  // Highlight code blocks
  main.querySelectorAll('pre code').forEach(block => {
    hljs.highlightElement(block);
  });

  // Scroll to top
  main.scrollTop = 0;
}

// Show recent updates
function showRecent() {
  const sorted = [...docs].sort((a, b) => b.modified - a.modified).slice(0, 15);

  let html = '<h2 style="margin-bottom:16px;">최근 수정 문서</h2>';
  html += '<p style="color:var(--text-muted);margin-bottom:16px;font-size:13px;">파일 수정 시간 기준 상위 15건</p>';
  html += '<div class="recent-list">';
  for (const doc of sorted) {
    const riskBadge = doc.risk !== '일반'
      ? '<span class="risk-badge ' + getRiskClass(doc.risk) + '">' + doc.risk.charAt(0) + '</span>'
      : '<span class="risk-badge" style="background:#e2e8f0;">-</span>';
    html += '<li onclick="loadDoc(\\'' + escapeHtml(doc.path) + '\\')">';
    html += '<span class="recent-date">' + escapeHtml(doc.modifiedStr) + '</span>';
    html += riskBadge;
    html += '<span class="recent-title">' + escapeHtml(doc.title) + '</span>';
    html += '</li>';
  }
  html += '</div>';

  document.getElementById('mainContent').innerHTML = html;
}

// Filter docs
function setFilter(risk, btn) {
  currentFilter = risk;
  document.querySelectorAll('.filter-btn').forEach(b => b.className = 'filter-btn');
  if (risk === 'all') {
    btn.classList.add('active');
  } else if (risk === '고위험') {
    btn.classList.add('active', 'active-high');
    btn.classList.add('active-high');
  } else if (risk === '중위험') {
    btn.classList.add('active-medium');
  } else if (risk === '저위험') {
    btn.classList.add('active-low');
  }
  filterDocs();
}

function filterDocs() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();

  document.querySelectorAll('.sidebar-item').forEach(el => {
    const path = el.dataset.path;
    const risk = el.dataset.risk;
    const doc = docs.find(d => d.path === path);
    if (!doc) return;

    let visible = true;

    // Risk filter
    if (currentFilter !== 'all' && risk !== currentFilter) {
      visible = false;
    }

    // Search filter
    if (query && visible) {
      const searchTarget = (doc.title + ' ' + doc.docNumber + ' ' + doc.content).toLowerCase();
      if (!searchTarget.includes(query)) {
        visible = false;
      }
    }

    el.classList.toggle('hidden', !visible);
  });

  // Show sections with visible items, hide empty ones
  document.querySelectorAll('.sidebar-section').forEach(section => {
    const items = section.querySelectorAll('.sidebar-item');
    const hasVisible = Array.from(items).some(el => !el.classList.contains('hidden'));
    section.style.display = hasVisible ? '' : 'none';
    // Auto-open sections with matches
    if (hasVisible && (query || currentFilter !== 'all')) {
      const title = section.querySelector('.sidebar-section-title');
      const list = section.querySelector('.sidebar-list');
      if (title) title.classList.add('open');
      if (list) list.classList.add('open');
    }
  });
}

// Utility functions
function getRiskClass(risk) {
  if (risk === '고위험') return 'risk-high';
  if (risk === '중위험') return 'risk-medium';
  if (risk === '저위험') return 'risk-low';
  return '';
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function scrollToTop() {
  document.getElementById('mainContent').scrollTop = 0;
}

// Back to top button
document.getElementById('mainContent').addEventListener('scroll', function() {
  const btn = document.getElementById('backToTop');
  btn.classList.toggle('show', this.scrollTop > 300);
});
</script>

</body>
</html>`;
}
