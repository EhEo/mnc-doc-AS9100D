--[[
  title-page.lua - M&C AS9100D 제목 페이지 생성 Pandoc Lua 필터 v2
  Pandoc 3.x 호환

  동작:
    1. 원본 MD의 제목 섹션 (H1/H2/표/서명란/HR) 을 제거
    2. 생성된 제목 페이지 삽입 (로고·문서정보·결재란·페이지나누기)
    3. 개정이력 → 페이지나누기 → 목차 → 페이지나누기 → 본문 구조 생성
    4. 본문 내 HR 제거

  메타데이터 (-M 플래그로 전달):
    title, doc_number, revision, doc_date, logo_path
]]

local stringify = pandoc.utils.stringify

-- ─── XML 이스케이프 ─────────────────────────────────────────────────────────
local function escape_xml(s)
  if not s then return '' end
  s = s:gsub('&',  '&amp;')
  s = s:gsub('<',  '&lt;')
  s = s:gsub('>',  '&gt;')
  s = s:gsub('"',  '&quot;')
  return s
end

-- ─── 유틸리티 ───────────────────────────────────────────────────────────────

local function page_break()
  return pandoc.RawBlock('openxml',
    '<w:p><w:r><w:br w:type="page"/></w:r></w:p>')
end

local function empty_para(spacing_before, spacing_after)
  local before = spacing_before or 0
  local after  = spacing_after  or 0
  return pandoc.RawBlock('openxml', string.format(
    '<w:p><w:pPr><w:spacing w:before="%d" w:after="%d"/></w:pPr></w:p>',
    before, after))
end

local function heading_text(block)
  if block.t ~= 'Header' then return nil end
  return stringify(block.content):lower():gsub('%s+', ' '):match('^%s*(.-)%s*$')
end

-- ─── 제목 섹션 제거 ─────────────────────────────────────────────────────────
-- 전략: "개정이력" / "목차" / 기타 본문 첫 헤딩 직전까지 모두 제거
-- 건너뛸 헤딩 텍스트 (소문자 매칭)
local SKIP_HEADINGS = {
  "승인", "approval",
  "문서 정보", "문서정보", "document information", "document info",
}

local function is_skip_heading(text)
  if not text then return false end
  for _, p in ipairs(SKIP_HEADINGS) do
    if text == p then return true end
  end
  return false
end

local function is_revision_heading(text)
  if not text then return false end
  return text:find('개정') ~= nil
end

local function is_toc_heading(text)
  if not text then return false end
  return text == '목차' or text == '목  차' or
         text:find('table of contents') ~= nil
end

-- 원본 블록에서 "콘텐츠 시작 인덱스" 탐색
-- 조건: HR을 하나 이상 지난 뒤, SKIP 대상이 아닌 첫 헤딩
local function find_content_start(blocks)
  local seen_hr    = false
  local first_h1   = true   -- 첫 H1은 문서 제목 → 건너뜀
  local first_h2_before_hr = true

  for i, b in ipairs(blocks) do
    if b.t == 'HorizontalRule' then
      seen_hr = true

    elseif b.t == 'Header' then
      local text = heading_text(b)

      if b.level == 1 and first_h1 then
        first_h1 = false  -- 첫 H1(문서 제목) 건너뜀

      elseif b.level == 2 and first_h2_before_hr and not seen_hr then
        first_h2_before_hr = false  -- HR 이전의 첫 H2 (영문 부제목) 건너뜀

      elseif seen_hr and not is_skip_heading(text) then
        return i  -- 콘텐츠 시작!
      end
    end
  end
  return nil
end

-- ─── 콘텐츠 블록 처리 (상태 기계) ──────────────────────────────────────────
-- 상태: revision → toc → body
-- HR 처리: revision/toc 상태에서 HR → page_break; body에서 HR → 제거
local function process_content(blocks, start_idx)
  local result = {}
  local state  = 'init'   -- init: 첫 헤딩 보기 전

  for i = start_idx, #blocks do
    local b = blocks[i]

    if b.t == 'HorizontalRule' then
      if state == 'revision' then
        result[#result+1] = page_break()
        -- 다음 헤딩에서 상태 전환
      elseif state == 'toc' then
        result[#result+1] = page_break()
      end
      -- body / init: HR 제거 (아무것도 안 함)

    elseif b.t == 'Header' then
      local text = heading_text(b)

      if is_revision_heading(text) then
        state = 'revision'
      elseif is_toc_heading(text) then
        state = 'toc'
      else
        if state == 'init' or state == 'revision' or state == 'toc' then
          state = 'body'
        end
      end
      result[#result+1] = b

    else
      result[#result+1] = b
    end
  end

  return result
end

-- ─── 결재란 테이블 OpenXML ──────────────────────────────────────────────────
local function approval_table_xml()
  local B = 'w:val="single" w:sz="4" w:space="0" w:color="000000"'
  local borders = string.format(
    '<w:tblBorders><w:top %s/><w:left %s/><w:bottom %s/>' ..
    '<w:right %s/><w:insideH %s/><w:insideV %s/></w:tblBorders>',
    B, B, B, B, B, B)

  local function hcell(w, txt)
    return string.format(
      '<w:tc><w:tcPr><w:tcW w:w="%d" w:type="dxa"/>' ..
      '<w:shd w:val="clear" w:color="auto" w:fill="D9D9D9"/></w:tcPr>' ..
      '<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="60" w:after="60"/></w:pPr>' ..
      '<w:r><w:rPr><w:b/><w:sz w:val="20"/></w:rPr><w:t>%s</w:t></w:r></w:p></w:tc>', w, txt)
  end
  local function dcell(w, txt, align)
    align = align or 'left'
    return string.format(
      '<w:tc><w:tcPr><w:tcW w:w="%d" w:type="dxa"/></w:tcPr>' ..
      '<w:p><w:pPr><w:jc w:val="%s"/><w:spacing w:before="200" w:after="200"/></w:pPr>' ..
      '<w:r><w:rPr><w:sz w:val="20"/></w:rPr>' ..
      '<w:t xml:space="preserve">%s</w:t></w:r></w:p></w:tc>', w, align, txt)
  end
  local function row(cells)
    return '<w:tr>' .. table.concat(cells) .. '</w:tr>'
  end

  return '<w:tbl>' ..
    '<w:tblPr><w:tblW w:w="8788" w:type="dxa"/>' .. borders ..
    '<w:tblCellMar><w:left w:w="108" w:type="dxa"/><w:right w:w="108" w:type="dxa"/></w:tblCellMar>' ..
    '</w:tblPr>' ..
    '<w:tblGrid>' ..
    '<w:gridCol w:w="1500"/><w:gridCol w:w="2800"/>' ..
    '<w:gridCol w:w="2000"/><w:gridCol w:w="2488"/>' ..
    '</w:tblGrid>' ..
    row({ hcell(1500,'구분'), hcell(2800,'직위'), hcell(2000,'성명'), hcell(2488,'서명 / 일자') }) ..
    row({ dcell(1500,'작성','center'), dcell(2800,''), dcell(2000,''), dcell(2488,'') }) ..
    row({ dcell(1500,'검토','center'), dcell(2800,''), dcell(2000,''), dcell(2488,'') }) ..
    row({ dcell(1500,'승인 (등인)','center'), dcell(2800,''), dcell(2000,''), dcell(2488,'') }) ..
    '</w:tbl>'
end

-- ─── 문서정보 테이블 OpenXML ────────────────────────────────────────────────
local function info_table_xml(doc_number, title, revision, doc_date)
  -- XML 특수문자 이스케이프 (& < > " 처리)
  doc_number = escape_xml(doc_number)
  title      = escape_xml(title)
  revision   = escape_xml(revision)
  doc_date   = escape_xml(doc_date)

  local B = 'w:val="single" w:sz="4" w:space="0" w:color="000000"'
  local borders = string.format(
    '<w:tblBorders><w:top %s/><w:left %s/><w:bottom %s/>' ..
    '<w:right %s/><w:insideH %s/><w:insideV %s/></w:tblBorders>',
    B, B, B, B, B, B)

  local function row(label, value)
    return string.format(
      '<w:tr>' ..
      '<w:tc><w:tcPr><w:tcW w:w="2200" w:type="dxa"/>' ..
      '<w:shd w:val="clear" w:color="auto" w:fill="E8E8E8"/></w:tcPr>' ..
      '<w:p><w:pPr><w:spacing w:before="80" w:after="80"/></w:pPr>' ..
      '<w:r><w:rPr><w:b/><w:sz w:val="22"/></w:rPr><w:t>  %s</w:t></w:r></w:p></w:tc>' ..
      '<w:tc><w:tcPr><w:tcW w:w="6588" w:type="dxa"/></w:tcPr>' ..
      '<w:p><w:pPr><w:spacing w:before="80" w:after="80"/></w:pPr>' ..
      '<w:r><w:rPr><w:sz w:val="22"/></w:rPr><w:t xml:space="preserve">  %s</w:t></w:r></w:p></w:tc>' ..
      '</w:tr>', label, value)
  end

  return '<w:tbl>' ..
    '<w:tblPr><w:tblW w:w="8788" w:type="dxa"/>' .. borders .. '</w:tblPr>' ..
    '<w:tblGrid><w:gridCol w:w="2200"/><w:gridCol w:w="6588"/></w:tblGrid>' ..
    row('문서번호', doc_number) ..
    row('문서제목', title) ..
    row('개정번호', revision) ..
    row('제  정  일', doc_date) ..
    '</w:tbl>'
end

-- ─── 제목 페이지 생성 ───────────────────────────────────────────────────────
local function make_title_page(meta)
  local title     = meta.title      and stringify(meta.title)      or '제목 없음'
  local doc_num   = meta.doc_number and stringify(meta.doc_number) or ''
  local revision  = meta.revision   and stringify(meta.revision)   or 'Rev. 0'
  local doc_date  = meta.doc_date   and stringify(meta.doc_date)   or ''
  local logo_path = meta.logo_path  and stringify(meta.logo_path)  or ''

  local blocks = {}

  -- 상단 여백
  blocks[#blocks+1] = empty_para(0, 0)
  blocks[#blocks+1] = empty_para(0, 0)

  -- 로고 이미지 (Pandoc Image AST → DOCX에 임베드, CenteredLogo 스타일 적용)
  if logo_path ~= '' then
    local f = io.open(logo_path, 'rb')
    if f then
      f:close()
      local img = pandoc.Image(
        {pandoc.Str('M&C Logo')},
        logo_path,
        'M&C Logo',
        pandoc.Attr('', {}, {{'width', '5cm'}})
      )
      local img_div = pandoc.Div(
        { pandoc.Para({img}) },
        pandoc.Attr('', {}, { {'custom-style', 'CenteredLogo'} })
      )
      blocks[#blocks+1] = img_div
    end
  end

  blocks[#blocks+1] = empty_para(0, 0)

  -- 회사명
  blocks[#blocks+1] = pandoc.RawBlock('openxml',
    '<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="120" w:after="60"/></w:pPr>' ..
    '<w:r><w:rPr><w:b/><w:sz w:val="40"/><w:szCs w:val="40"/>' ..
    '<w:color w:val="1F4E79"/></w:rPr><w:t>M&amp;C</w:t></w:r></w:p>')

  -- 부제: AS9100D
  blocks[#blocks+1] = pandoc.RawBlock('openxml',
    '<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="40" w:after="280"/></w:pPr>' ..
    '<w:r><w:rPr><w:sz w:val="22"/><w:color w:val="595959"/></w:rPr>' ..
    '<w:t>AS9100D Rev D 품질경영시스템</w:t></w:r></w:p>')

  -- 구분선 (파란색)
  blocks[#blocks+1] = pandoc.RawBlock('openxml',
    '<w:p><w:pPr><w:pBdr>' ..
    '<w:bottom w:val="single" w:sz="8" w:space="1" w:color="1F4E79"/>' ..
    '</w:pBdr><w:spacing w:before="0" w:after="280"/></w:pPr></w:p>')

  -- 문서정보 테이블
  blocks[#blocks+1] = pandoc.RawBlock('openxml',
    info_table_xml(doc_num, title, revision, doc_date))

  blocks[#blocks+1] = empty_para(160, 0)

  -- 결재 헤더
  blocks[#blocks+1] = pandoc.RawBlock('openxml',
    '<w:p><w:pPr><w:spacing w:before="200" w:after="80"/></w:pPr>' ..
    '<w:r><w:rPr><w:b/><w:sz w:val="22"/><w:color w:val="1F4E79"/></w:rPr>' ..
    '<w:t>■  결재</w:t></w:r></w:p>')

  -- 결재란 테이블
  blocks[#blocks+1] = pandoc.RawBlock('openxml', approval_table_xml())

  -- 페이지 나누기
  blocks[#blocks+1] = page_break()

  return blocks
end

-- ─── 메인 필터 ──────────────────────────────────────────────────────────────
function Pandoc(doc)
  local content_start = find_content_start(doc.blocks)

  -- 제목 페이지 생성
  local new_blocks = make_title_page(doc.meta)

  -- 콘텐츠 처리
  if content_start then
    local content = process_content(doc.blocks, content_start)
    for _, b in ipairs(content) do
      new_blocks[#new_blocks+1] = b
    end
  end

  return pandoc.Pandoc(new_blocks, doc.meta)
end
