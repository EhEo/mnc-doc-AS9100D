$ErrorActionPreference = "Stop"

# 파라미터 및 경로 설정
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Definition
$projectPath = Split-Path -Parent $scriptPath

$sourceDir = Join-Path $projectPath "05_산출물"
$destDir = Join-Path $projectPath "06_산출물_문서"
$refDir = Join-Path $destDir "Reference Doc"

Write-Host "=========================================="
Write-Host "      Markdown to DOCX 자동 변환기       "
Write-Host "=========================================="
Write-Host "소스 경로: $sourceDir"
Write-Host "대상 경로: $destDir"
Write-Host "참조 양식: $refDir"
Write-Host "------------------------------------------"

# 1. 대상 폴더가 없으면 생성
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}

# 2. Reference Doc 디렉토리 확인 및 양식 파일 찾기
$referenceOption = ""
if (Test-Path $refDir) {
    $refFiles = Get-ChildItem -Path $refDir -Filter *.docx
    if ($refFiles.Count -gt 0) {
        $referenceDocPath = $refFiles[0].FullName
        Write-Host "적용할 템플릿(Reference Doc) 발견: "$refFiles[0].Name"" -ForegroundColor Green
        $referenceOption = "--reference-doc=""$referenceDocPath"""
    } else {
        Write-Host "경고: '$refDir' 디렉토리에 .docx 파일이 없습니다." -ForegroundColor Yellow
        Write-Host "기본 양식으로 변환을 진행합니다." -ForegroundColor Yellow
    }
} else {
    Write-Host "경고: '$refDir' 디렉토리가 존재하지 않습니다." -ForegroundColor Yellow
    Write-Host "기본 양식으로 변환을 진행합니다." -ForegroundColor Yellow
}

# 3. 소스 경로의 모든 .md 파일 검색
$mdFiles = Get-ChildItem -Path $sourceDir -Filter *.md -Recurse

if ($mdFiles.Count -eq 0) {
    Write-Host "변환할 .md 파일을 찾을 수 없습니다 ($sourceDir)." -ForegroundColor Red
    Exit
}

Write-Host "`n총 $($mdFiles.Count)개의 마크다운 파일을 변환합니다...`n"

$successCount = 0
$failCount = 0

foreach ($file in $mdFiles) {
    # 상대 경로 계산 (폴더 구조 유지를 위해)
    $relativePath = $file.FullName.Substring($sourceDir.Length + 1)
    $targetFilePath = Join-Path $destDir $relativePath
    
    # 확장자를 .docx로 변경
    $targetFilePath = [io.path]::ChangeExtension($targetFilePath, '.docx')
    $targetFileDir = Split-Path $targetFilePath -Parent

    # 대상 폴더(하위 구조 포함)가 없으면 생성
    if (-not (Test-Path $targetFileDir)) {
        New-Item -ItemType Directory -Force -Path $targetFileDir | Out-Null
    }

    Write-Host "변환 중: $relativePath ..." -NoNewline
    
    # Pandoc 명령어 문자열 생성 (Invoke-Expression 대신 보안이 더 나은 방법 사용)
    try {
        if ($referenceOption) {
            pandoc "$($file.FullName)" -o "$targetFilePath" --reference-doc="$referenceDocPath"
        } else {
            pandoc "$($file.FullName)" -o "$targetFilePath"
        }
        Write-Host " [완료]" -ForegroundColor Cyan
        $successCount++
    } catch {
        Write-Host " [실패] - $_" -ForegroundColor Red
        $failCount++
    }
}

Write-Host "------------------------------------------"
Write-Host "변환 작업이 끝났습니다."
Write-Host "성공: $successCount 건" -ForegroundColor Green
if ($failCount -gt 0) {
    Write-Host "실패: $failCount 건" -ForegroundColor Red
}
Write-Host "=========================================="
Pause
