# ============================================================
# Convert-OfficeToModern.ps1
# 구버전 Office 파일(.doc/.xls)을 최신 형식(.docx/.xlsx)으로 일괄 변환
# - 하위 폴더 포함 재귀 탐색
# - 베트남어 파일명(Unicode) 지원
# - 변환 완료 후 원본은 _backup 폴더로 이동 (삭제 아님)
# ============================================================

param(
    [string]$TargetFolder = "ISO. IATF 문서",
    [switch]$DeleteOriginal  # 원본 삭제 원할 때 -DeleteOriginal 플래그 사용
)

# ── 인코딩 설정 (베트남어 콘솔 출력 및 로그 파일) ──────────────
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001 | Out-Null

# ── 경로 설정 ────────────────────────────────────────────────
$ScriptDir   = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$SourcePath  = Join-Path $ProjectRoot $TargetFolder
$BackupRoot  = Join-Path $SourcePath "_backup_originals"
$LogFile     = Join-Path $ScriptDir "convert_log_$(Get-Date -Format 'yyyyMMdd_HHmmss').txt"

if (-not (Test-Path $SourcePath)) {
    Write-Error "대상 폴더를 찾을 수 없습니다: $SourcePath"
    exit 1
}

# ── 로그 함수 ────────────────────────────────────────────────
function Write-Log {
    param([string]$Message, [string]$Level = "INFO")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $line = "[$timestamp][$Level] $Message"
    Write-Host $line
    Add-Content -Path $LogFile -Value $line -Encoding UTF8
}

# ── 통계 변수 ─────────────────────────────────────────────────
$stats = @{ Total=0; Success=0; Skipped=0; Failed=0 }

Write-Log "====== 변환 시작 ======"
Write-Log "대상 폴더: $SourcePath"
Write-Log "로그 파일: $LogFile"

# ── 변환 대상 파일 수집 ──────────────────────────────────────
$docFiles = Get-ChildItem -Path $SourcePath -Recurse -Include "*.doc"  -File |
            Where-Object { $_.Name -notlike "~$*" }  # 임시파일 제외
$xlsFiles = Get-ChildItem -Path $SourcePath -Recurse -Include "*.xls"  -File |
            Where-Object { $_.Name -notlike "~$*" }

$stats.Total = $docFiles.Count + $xlsFiles.Count
Write-Log ".doc 파일: $($docFiles.Count)건  /  .xls 파일: $($xlsFiles.Count)건  /  합계: $($stats.Total)건"

if ($stats.Total -eq 0) {
    Write-Log "변환할 파일이 없습니다." "WARN"
    exit 0
}

# ── Word 변환 함수 ───────────────────────────────────────────
function Convert-DocToDocx {
    param([System.IO.FileInfo]$File, [object]$WordApp)

    $srcPath  = $File.FullName
    $destPath = [System.IO.Path]::ChangeExtension($srcPath, ".docx")

    # 이미 .docx가 존재하면 건너뜀
    if (Test-Path $destPath) {
        Write-Log "건너뜀(이미 존재): $($File.Name)" "SKIP"
        return "skipped"
    }

    try {
        $doc = $WordApp.Documents.Open(
            $srcPath,          # FileName
            $false,            # ConfirmConversions
            $true,             # ReadOnly
            $false,            # AddToRecentFiles
            [Type]::Missing,   # PasswordDocument
            [Type]::Missing,   # PasswordTemplate
            $true              # Revert
        )
        # 16 = wdFormatDocumentDefault (.docx)
        $doc.SaveAs2([ref]$destPath, [ref]16)
        $doc.Close([ref]$false)

        Write-Log "변환 성공: $($File.Name) → $(Split-Path $destPath -Leaf)"
        return "success"
    }
    catch {
        Write-Log "변환 실패: $($File.Name) | 오류: $_" "ERROR"
        return "failed"
    }
}

# ── Excel 변환 함수 ──────────────────────────────────────────
function Convert-XlsToXlsx {
    param([System.IO.FileInfo]$File, [object]$ExcelApp)

    $srcPath  = $File.FullName
    $destPath = [System.IO.Path]::ChangeExtension($srcPath, ".xlsx")

    if (Test-Path $destPath) {
        Write-Log "건너뜀(이미 존재): $($File.Name)" "SKIP"
        return "skipped"
    }

    try {
        $wb = $ExcelApp.Workbooks.Open(
            $srcPath,   # Filename
            0,          # UpdateLinks
            $true       # ReadOnly
        )
        # 51 = xlOpenXMLWorkbook (.xlsx)
        $wb.SaveAs($destPath, 51)
        $wb.Close($false)

        Write-Log "변환 성공: $($File.Name) → $(Split-Path $destPath -Leaf)"
        return "success"
    }
    catch {
        Write-Log "변환 실패: $($File.Name) | 오류: $_" "ERROR"
        return "failed"
    }
}

# ── Word 처리 ────────────────────────────────────────────────
if ($docFiles.Count -gt 0) {
    Write-Log "── Word(.doc → .docx) 변환 시작 ──"
    $wordApp = $null
    try {
        $wordApp = New-Object -ComObject Word.Application
        $wordApp.Visible = $false
        $wordApp.DisplayAlerts = 0  # wdAlertsNone

        $i = 0
        foreach ($file in $docFiles) {
            $i++
            Write-Host "[$i/$($docFiles.Count)] " -NoNewline
            $result = Convert-DocToDocx -File $file -WordApp $wordApp
            switch ($result) {
                "success" { $stats.Success++ }
                "skipped" { $stats.Skipped++ }
                "failed"  { $stats.Failed++  }
            }
        }
    }
    finally {
        if ($wordApp) {
            $wordApp.Quit()
            [System.Runtime.InteropServices.Marshal]::ReleaseComObject($wordApp) | Out-Null
        }
    }
}

# ── Excel 처리 ───────────────────────────────────────────────
if ($xlsFiles.Count -gt 0) {
    Write-Log "── Excel(.xls → .xlsx) 변환 시작 ──"
    $excelApp = $null
    try {
        $excelApp = New-Object -ComObject Excel.Application
        $excelApp.Visible = $false
        $excelApp.DisplayAlerts = $false
        $excelApp.AskToUpdateLinks = $false

        $i = 0
        foreach ($file in $xlsFiles) {
            $i++
            Write-Host "[$i/$($xlsFiles.Count)] " -NoNewline
            $result = Convert-XlsToXlsx -File $file -ExcelApp $excelApp
            switch ($result) {
                "success" { $stats.Success++ }
                "skipped" { $stats.Skipped++ }
                "failed"  { $stats.Failed++  }
            }
        }
    }
    finally {
        if ($excelApp) {
            $excelApp.Quit()
            [System.Runtime.InteropServices.Marshal]::ReleaseComObject($excelApp) | Out-Null
        }
    }
}

# ── 원본 파일 처리 (백업 이동 또는 삭제) ───────────────────────
if ($stats.Success -gt 0) {
    Write-Log "── 원본 파일 처리 시작 ──"

    if ($DeleteOriginal) {
        # -DeleteOriginal 플래그 시 원본 삭제
        $docFiles + $xlsFiles | Where-Object {
            Test-Path ([System.IO.Path]::ChangeExtension($_.FullName, $(if($_.Extension -eq ".doc"){".docx"}else{".xlsx"})))
        } | ForEach-Object {
            Remove-Item $_.FullName -Force
            Write-Log "원본 삭제: $($_.Name)"
        }
    }
    else {
        # 기본: _backup_originals 폴더로 이동 (폴더 구조 유지)
        New-Item -ItemType Directory -Path $BackupRoot -Force | Out-Null

        $allOriginals = @($docFiles) + @($xlsFiles)
        foreach ($file in $allOriginals) {
            $newExt     = if ($file.Extension -eq ".doc") { ".docx" } else { ".xlsx" }
            $convertedPath = [System.IO.Path]::ChangeExtension($file.FullName, $newExt)

            if (Test-Path $convertedPath) {
                # 원본의 상대 경로를 유지하여 백업 폴더에 이동
                $relativePath = $file.FullName.Substring($SourcePath.Length).TrimStart('\','/')
                $backupDest   = Join-Path $BackupRoot $relativePath
                $backupDir    = Split-Path $backupDest -Parent

                New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
                Move-Item -Path $file.FullName -Destination $backupDest -Force
                Write-Log "원본 이동: $relativePath → _backup_originals\"
            }
        }
    }
}

# ── 최종 결과 출력 ────────────────────────────────────────────
Write-Log "====== 변환 완료 ======"
Write-Log "성공: $($stats.Success)건  |  건너뜀: $($stats.Skipped)건  |  실패: $($stats.Failed)건  |  합계: $($stats.Total)건"
Write-Log "로그 파일: $LogFile"

if ($stats.Failed -gt 0) {
    Write-Log "실패한 파일은 위 로그에서 [ERROR] 항목을 확인하세요." "WARN"
}
