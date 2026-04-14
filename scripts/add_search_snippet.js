const fs = require('fs');

const cssAddition = `
.search-snippet {
  display: none;
  font-size: 11px;
  color: var(--text-muted);
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding-left: 24px;
  margin-top: 1px;
}
.search-snippet mark {
  background: #fef3c7;
  color: #92400e;
  font-weight: 600;
  border-radius: 2px;
  padding: 0 1px;
}
.sidebar-item.has-snippet {
  white-space: normal;
  flex-wrap: wrap;
  align-items: center;
}`;

const newFilterBlock = `    // Remove existing snippet
    const existingSnippet = el.querySelector('.search-snippet');
    if (existingSnippet) existingSnippet.remove();
    el.classList.remove('has-snippet');

    // Search filter with content snippet
    if (query && visible) {
      const titleAndNum = (doc.title + ' ' + doc.docNumber).toLowerCase();
      const contentLower = doc.content.toLowerCase();
      const titleMatch = titleAndNum.includes(query);
      const contentMatchIdx = contentLower.indexOf(query);

      if (!titleMatch && contentMatchIdx === -1) {
        visible = false;
      } else if (visible && contentMatchIdx !== -1 && !titleMatch) {
        // Show content snippet for content-only matches
        const snStart = Math.max(0, contentMatchIdx - 35);
        const snEnd = Math.min(doc.content.length, contentMatchIdx + query.length + 55);
        let snippet = doc.content.substring(snStart, snEnd)
          .replace(/[#*[\]|]/g, '').replace(/\x60/g, '').trim();
        if (snStart > 0) snippet = '\u2026' + snippet;
        if (snEnd < doc.content.length) snippet = snippet + '\u2026';
        // Highlight match in snippet
        const mIdx = snippet.toLowerCase().indexOf(query);
        if (mIdx !== -1) {
          snippet = snippet.substring(0, mIdx) +
            '<mark>' + snippet.substring(mIdx, mIdx + query.length) + '</mark>' +
            snippet.substring(mIdx + query.length);
        }
        const snEl = document.createElement('div');
        snEl.className = 'search-snippet';
        snEl.innerHTML = snippet;
        snEl.style.display = 'block';
        el.appendChild(snEl);
        el.classList.add('has-snippet');
      }
    }

    el.classList.toggle('hidden', !visible);
  });`;

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const useCRLF = content.includes('\r\n');

  // --- 1. Add CSS after .sidebar-item-text block ---
  const cssMarker = '.sidebar-item-text {';
  const cssEndMarker = '}';
  const cssStart = content.indexOf(cssMarker);
  if (cssStart === -1) { console.log(filePath + ': CSS marker not found'); return false; }
  const cssEnd = content.indexOf(cssEndMarker, cssStart) + 1;

  // Check if already patched
  if (content.includes('.search-snippet {')) {
    console.log(filePath + ': CSS already patched, skipping CSS');
  } else {
    const insertAt = cssEnd;
    const nl = useCRLF ? '\r\n' : '\n';
    const cssToInsert = cssAddition.replace(/\n/g, nl);
    content = content.substring(0, insertAt) + cssToInsert + content.substring(insertAt);
    console.log(filePath + ': CSS added');
  }

  // --- 2. Replace filterDocs search block ---
  if (content.includes('search-snippet')) {
    // Already has our new code - check if filterDocs is old style
  }

  const oldPatterns = [
    // docs/index.html style (with // Search filter comment, braces on if)
    "    // Search filter\r\n    if (query && visible) {\r\n      const searchTarget = (doc.title + ' ' + doc.docNumber + ' ' + doc.content).toLowerCase();\r\n      if (!searchTarget.includes(query)) {\r\n        visible = false;\r\n      }\r\n    }\r\n\r\n    el.classList.toggle('hidden', !visible);\r\n  });",
    "    // Search filter\n    if (query && visible) {\n      const searchTarget = (doc.title + ' ' + doc.docNumber + ' ' + doc.content).toLowerCase();\n      if (!searchTarget.includes(query)) {\n        visible = false;\n      }\n    }\n\n    el.classList.toggle('hidden', !visible);\n  });",
    // docs_vn/index.html style (no comment, no braces on inner if, no blank line before toggle)
    "    if (query && visible) {\r\n      const searchTarget = (doc.title + ' ' + doc.docNumber + ' ' + doc.content).toLowerCase();\r\n      if (!searchTarget.includes(query)) visible = false;\r\n    }\r\n    el.classList.toggle('hidden', !visible);\r\n  });",
    "    if (query && visible) {\n      const searchTarget = (doc.title + ' ' + doc.docNumber + ' ' + doc.content).toLowerCase();\n      if (!searchTarget.includes(query)) visible = false;\n    }\n    el.classList.toggle('hidden', !visible);\n  });"
  ];

  let replaced = false;
  for (const old of oldPatterns) {
    if (content.includes(old)) {
      const nl = old.includes('\r\n') ? '\r\n' : '\n';
      content = content.replace(old, newFilterBlock.replace(/\n/g, nl));
      console.log(filePath + ': filterDocs updated');
      replaced = true;
      break;
    }
  }
  if (!replaced) {
    console.log(filePath + ': filterDocs target not found - may already be updated');
  }

  fs.writeFileSync(filePath, content);
  return true;
}

const base = 'c:/Users/MISTOP/Documents/02_AI디지털전환/AS9100D문서관리/';
patchFile(base + 'docs/index.html');
patchFile(base + 'docs_vn/index.html');
console.log('Done.');
