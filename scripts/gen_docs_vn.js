const fs = require('fs');
const path = require('path');

const BASE = 'c:/Users/MISTOP/Documents/02_AI디지털전환/AS9100D문서관리';
const VN_DIR = path.join(BASE, '05_산출물_vn');
const OUT_DIR = path.join(BASE, 'docs_vn');

// Risk mapping from Korean source (by document number prefix)
const riskMap = {
  'QM-001': 'Rủi ro TB',
  'QP-401': 'Rủi ro TB', 'QP-402': 'Rủi ro thấp', 'QP-403': 'Rủi ro TB',
  'QP-501': 'Rủi ro thấp', 'QP-502': 'Rủi ro thấp',
  'QP-601': 'Rủi ro cao', 'QP-602': 'Rủi ro thấp', 'QP-603': 'Rủi ro TB',
  'QP-701': 'Rủi ro thấp', 'QP-702': 'Rủi ro TB', 'QP-703': 'Rủi ro thấp',
  'QP-704': 'Rủi ro thấp', 'QP-705': 'Rủi ro thấp', 'QP-706': 'Rủi ro TB',
  'QP-801': 'Rủi ro TB', 'QP-802': 'Rủi ro cao', 'QP-803': 'Rủi ro cao',
  'QP-804': 'Rủi ro cao', 'QP-805': 'Rủi ro TB', 'QP-806': 'Rủi ro TB',
  'QP-807': 'Rủi ro cao', 'QP-808': 'Rủi ro cao', 'QP-809': 'Rủi ro cao',
  'QP-810': 'Rủi ro TB', 'QP-811': 'Rủi ro cao', 'QP-812': 'Rủi ro cao',
  'QP-813': 'Rủi ro thấp', 'QP-814': 'Rủi ro thấp', 'QP-815': 'Rủi ro thấp',
  'QP-816': 'Rủi ro TB', 'QP-817': 'Rủi ro TB', 'QP-818': 'Rủi ro thấp',
  'QP-819': 'Rủi ro cao',
  'QP-901': 'Rủi ro thấp', 'QP-902': 'Rủi ro thấp', 'QP-903': 'Rủi ro TB',
  'QP-904': 'Rủi ro thấp',
  'QP-1001': 'Rủi ro thấp', 'QP-1002': 'Rủi ro thấp',
  'F-801': 'Rủi ro cao', 'F-802': 'Rủi ro cao', 'F-803': 'Rủi ro TB',
  'F-804': 'Rủi ro TB', 'F-805': 'Rủi ro TB', 'F-806': 'Rủi ro TB',
  'F-807': 'Rủi ro thấp', 'F-808': 'Rủi ro thấp', 'F-809': 'Rủi ro thấp',
  'F-810': 'Rủi ro thấp', 'F-811': 'Rủi ro TB', 'F-812': 'Rủi ro thấp',
  'F-813': 'Rủi ro thấp', 'F-814': 'Rủi ro cao', 'F-815': 'Rủi ro cao',
  'F-816': 'Rủi ro cao', 'F-817': 'Rủi ro TB', 'F-818': 'Rủi ro thấp',
  'F-819': 'Rủi ro cao', 'F-820': 'Rủi ro cao', 'F-821': 'Rủi ro TB',
  'WI-801': 'Rủi ro TB', 'WI-802': 'Rủi ro cao', 'WI-803': 'Rủi ro cao',
  'WI-804': 'Rủi ro cao', 'WI-805': 'Rủi ro TB', 'WI-806': 'Rủi ro TB',
  'WI-807': 'Rủi ro TB', 'WI-808': 'Rủi ro TB', 'WI-809': 'Rủi ro TB',
  'WI-810': 'Rủi ro cao', 'WI-811': 'Rủi ro thấp', 'WI-812': 'Rủi ro thấp',
  'WI-813': 'Rủi ro TB', 'WI-814': 'Rủi ro TB', 'WI-815': 'Rủi ro TB',
};

function getRisk(filename) {
  const m = filename.match(/^((?:QM|QP|WI|F)-\d+)/);
  if (!m) return 'Thông thường';
  return riskMap[m[1]] || 'Thông thường';
}

function getDocNumber(filename) {
  const m = filename.match(/^((?:QM|QP|WI|F)-[\d-]+)/);
  return m ? m[1] : '';
}

function getTitleFromContent(content) {
  const m = content.match(/^#\s+(.+)/m);
  return m ? m[1].trim() : '';
}

function getLayerLabel(folder) {
  if (folder.includes('Tang1')) return 'Tầng 1: Sổ tay chất lượng';
  if (folder.includes('Tang2')) return 'Tầng 2: Quy trình';
  if (folder.includes('Tang3_Huong')) return 'Tầng 3: Hướng dẫn công việc';
  if (folder.includes('Tang3_Bieu')) return 'Tầng 3: Biểu mẫu / Hồ sơ';
  return folder;
}

function getSortKey(filename) {
  const m = filename.match(/(?:QM|QP|WI|F)-(\d+)/);
  return m ? m[1].padStart(6, '0') : '999999';
}

// Collect all vn docs grouped by folder
const folderOrder = ['Tang1_So_Tay_Chat_Luong', 'Tang2_Quy_Trinh', 'Tang3_Huong_Dan', 'Tang3_Bieu_Mau_Ho_So'];
const sections = {};

for (const folder of folderOrder) {
  const folderPath = path.join(VN_DIR, folder);
  if (!fs.existsSync(folderPath)) continue;
  const files = fs.readdirSync(folderPath)
    .filter(f => f.endsWith('.md'))
    .sort((a, b) => getSortKey(a).localeCompare(getSortKey(b)));
  sections[folder] = files.map(filename => {
    const filePath = path.join(folderPath, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const relPath = `05_산출물_vn/${folder}/${filename}`;
    const stat = fs.statSync(filePath);
    const modified = stat.mtimeMs;
    const d = new Date(stat.mtime);
    const modifiedStr = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    const risk = getRisk(filename);
    const docNumber = getDocNumber(filename);
    const title = getTitleFromContent(content) || filename.replace('.md','');
    return { path: relPath, name: filename, title, docNumber, layer: getLayerLabel(folder), risk, category: folder, modified, modifiedStr, content };
  });
}

// Build docs array JSON
let docsJson = '[';
let first = true;
for (const folder of folderOrder) {
  if (!sections[folder]) continue;
  for (const doc of sections[folder]) {
    if (!first) docsJson += ',';
    first = false;
    docsJson += JSON.stringify({
      path: doc.path, name: doc.name, title: doc.title, docNumber: doc.docNumber,
      layer: doc.layer, clause: '', risk: doc.risk, category: doc.category,
      modified: doc.modified, modifiedStr: doc.modifiedStr, content: doc.content
    });
  }
}
docsJson += ']';

// Build sidebar HTML
let sidebarHtml = '';
for (const folder of folderOrder) {
  if (!sections[folder] || sections[folder].length === 0) continue;
  const label = getLayerLabel(folder);
  const count = sections[folder].length;
  sidebarHtml += `<div class="sidebar-section"><div class="sidebar-section-title" onclick="toggleSection(this)">${label} (${count})</div><ul class="sidebar-list">`;
  for (const doc of sections[folder]) {
    const riskClass = doc.risk === 'Rủi ro cao' ? 'risk-high' : doc.risk === 'Rủi ro TB' ? 'risk-medium' : doc.risk === 'Rủi ro thấp' ? 'risk-low' : '';
    const riskChar = doc.risk === 'Rủi ro cao' ? 'C' : doc.risk === 'Rủi ro TB' ? 'TB' : doc.risk === 'Rủi ro thấp' ? 'T' : '-';
    const safePath = doc.path.replace(/\\/g, '/').replace(/'/g, "\\'");
    sidebarHtml += `<li class="sidebar-item" data-path="${doc.path}" data-risk="${doc.risk}" onclick="loadDoc('${safePath}')"><span class="risk-badge ${riskClass}">${riskChar}</span><span class="sidebar-item-text">${doc.docNumber ? doc.docNumber + ' ' : ''}${doc.title.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</span></li>`;
  }
  sidebarHtml += '</ul></div>';
}

const totalDocs = folderOrder.reduce((sum, f) => sum + (sections[f] ? sections[f].length : 0), 0);

// Read Korean index.html to reuse CSS
const koContent = fs.readFileSync(path.join(BASE, 'docs/index.html'), 'utf8');
const koLines = koContent.split('\n');
// CSS is from line 15 (index 14) to line 457 (index 456)
const cssBlock = koLines.slice(14, 457).join('\n')
  .replace(/Noto Sans KR/g, 'Noto Sans');

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AS9100D - Trình xem tài liệu (Tiếng Việt)</title>
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github.min.css">
<script src="https://cdn.jsdelivr.net/npm/marked@12.0.0/marked.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/highlight.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
<style>
${cssBlock}
</style>
</head>
<body>

<div class="header">
  <h1>AS9100D - Trình xem tài liệu chứng nhận</h1>
  <span class="subtitle">M&amp;C Electronics VINA</span>
  <div class="spacer"></div>
  <span class="info">Cập nhật: 2026-04-14 | Tổng cộng ${totalDocs} tài liệu</span>
</div>

<div class="layout">
  <div class="sidebar">
    <div class="sidebar-search">
      <input type="text" id="searchInput" placeholder="Tìm kiếm tài liệu..." oninput="filterDocs()">
    </div>
    <div class="sidebar-filters">
      <button class="filter-btn active" data-filter="all" onclick="setFilter('all', this)">Tất cả</button>
      <button class="filter-btn" data-filter="Rủi ro cao" onclick="setFilter('Rủi ro cao', this)">Rủi ro cao</button>
      <button class="filter-btn" data-filter="Rủi ro TB" onclick="setFilter('Rủi ro TB', this)">Rủi ro TB</button>
      <button class="filter-btn" data-filter="Rủi ro thấp" onclick="setFilter('Rủi ro thấp', this)">Rủi ro thấp</button>
    </div>
    <div class="sidebar-nav" id="sidebarNav">
      ${sidebarHtml}
    </div>
  </div>

  <div class="main" id="mainContent">
    <div class="welcome" id="welcomeMsg">
      <h2>AS9100D - Trình xem tài liệu (Tiếng Việt)</h2>
      <p>Chọn tài liệu từ thanh bên trái.<br>
      Tổng cộng ${totalDocs} tài liệu | Phiên bản tiếng Việt</p>
    </div>
  </div>
</div>

<button class="back-to-top" id="backToTop" onclick="scrollToTop()">&#8593;</button>

<script>
const docs = ${docsJson};

let currentFilter = 'all';
let currentDoc = null;

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.sidebar-section-title');
  if (sections.length > 0) {
    sections[0].classList.add('open');
    const list = sections[0].parentElement.querySelector('.sidebar-list');
    if (list) list.classList.add('open');
  }
  const hash = window.location.hash;
  if (hash && hash.startsWith('#doc=')) {
    loadDoc(decodeURIComponent(hash.substring(5)));
  }
});

function toggleSection(el) {
  el.classList.toggle('open');
  const list = el.parentElement.querySelector('.sidebar-list');
  if (list) list.classList.toggle('open');
}

function loadDoc(docPath) {
  const doc = docs.find(d => d.path === docPath);
  if (!doc) return;
  currentDoc = doc;
  window.location.hash = 'doc=' + encodeURIComponent(docPath);

  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
  const activeItem = document.querySelector('.sidebar-item[data-path="' + CSS.escape(docPath) + '"]');
  if (activeItem) {
    activeItem.classList.add('active');
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

  const main = document.getElementById('mainContent');
  const riskBadge = (doc.risk !== 'Thong thuong')
    ? '<span class="risk-badge ' + getRiskClass(doc.risk) + '" style="display:inline-block;margin-right:8px;">' + doc.risk + '</span>'
    : '';

  let html = '<div class="doc-header">';
  html += '<div class="doc-path">' + escapeHtml(doc.path) + '</div>';
  html += '<h1 style="border:none;margin:0;padding:0;">' + riskBadge + escapeHtml(doc.title) + '</h1>';
  html += '<div class="doc-meta">';
  if (doc.docNumber) html += '<span>So tai lieu: ' + escapeHtml(doc.docNumber) + '</span>';
  if (doc.layer) html += '<span>Tang: ' + escapeHtml(doc.layer) + '</span>';
  if (doc.risk !== 'Thong thuong') html += '<span>Muc rui ro: ' + escapeHtml(doc.risk) + '</span>';
  html += '<span>Ngay sua: ' + escapeHtml(doc.modifiedStr) + '</span>';
  html += '</div></div>';
  html += '<div class="markdown-body">' + marked.parse(doc.content) + '</div>';

  main.innerHTML = html;
  main.querySelectorAll('pre code').forEach(block => { hljs.highlightElement(block); });
  const mermaidNodes = main.querySelectorAll('.mermaid');
  if (mermaidNodes.length > 0) { mermaid.run({ nodes: mermaidNodes }); }
  main.scrollTop = 0;
}

function setFilter(risk, btn) {
  currentFilter = risk;
  document.querySelectorAll('.filter-btn').forEach(b => b.className = 'filter-btn');
  if (risk === 'all') {
    btn.classList.add('active');
  } else if (risk === 'Rui ro cao') {
    btn.classList.add('active', 'active-high');
  } else if (risk === 'Rui ro TB') {
    btn.classList.add('active-medium');
  } else if (risk === 'Rui ro thap') {
    btn.classList.add('active-low');
  } else {
    btn.classList.add('active');
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
    if (currentFilter !== 'all' && risk !== currentFilter) visible = false;
    if (query && visible) {
      const searchTarget = (doc.title + ' ' + doc.docNumber + ' ' + doc.content).toLowerCase();
      if (!searchTarget.includes(query)) visible = false;
    }
    el.classList.toggle('hidden', !visible);
  });
  document.querySelectorAll('.sidebar-section').forEach(section => {
    const items = section.querySelectorAll('.sidebar-item');
    const hasVisible = Array.from(items).some(el => !el.classList.contains('hidden'));
    section.style.display = hasVisible ? '' : 'none';
    if (hasVisible && (query || currentFilter !== 'all')) {
      const title = section.querySelector('.sidebar-section-title');
      const list = section.querySelector('.sidebar-list');
      if (title) title.classList.add('open');
      if (list) list.classList.add('open');
    }
  });
}

function getRiskClass(risk) {
  if (risk === 'Rui ro cao' || risk === 'R\u1ee7i ro cao') return 'risk-high';
  if (risk === 'Rui ro TB' || risk === 'R\u1ee7i ro TB') return 'risk-medium';
  if (risk === 'Rui ro thap' || risk === 'R\u1ee7i ro th\u1ea5p') return 'risk-low';
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

document.getElementById('mainContent').addEventListener('scroll', function() {
  const btn = document.getElementById('backToTop');
  btn.classList.toggle('show', this.scrollTop > 300);
});

mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' });
marked.use({
  renderer: {
    code({ text, lang }) {
      if (lang === 'mermaid') { return '<div class="mermaid">' + text + '</div>'; }
      return false;
    }
  }
});
</script>

</body>
</html>`;

fs.writeFileSync(path.join(OUT_DIR, 'index.html'), html, 'utf8');
const size = fs.statSync(path.join(OUT_DIR, 'index.html')).size;
console.log('Generated docs_vn/index.html');
console.log('File size: ' + (size/1024).toFixed(0) + ' KB');
console.log('Total documents: ' + totalDocs);
for (const folder of folderOrder) {
  if (sections[folder]) console.log('  ' + getLayerLabel(folder) + ': ' + sections[folder].length + ' files');
}
