# convert_all.ps1 - AS9100 컨설팅 자료 구형 Office 포맷 일괄 변환
# .doc -> .docx / .xls -> .xlsx / .ppt -> .pptx
# 핵심: -Filter 대신 $_.Extension -eq 로 정확히 비교 (Windows 8.3 버그 방지)
# 원본 파일은 삭제하지 않음 / 이미 변환된 파일은 건너뜀

$targetFolder = "C:\Users\MISTOP\Documents\02_AI디지털전환\AS9100D문서관리\AS9100 컨설팅 자료"
$logPath = "C:\Users\MISTOP\Documents\02_AI디지털전환\AS9100D문서관리\scripts\convert_log.csv"

$successCount = 0
$skipCount = 0
$failCount = 0
$logEntries = @("시각,파일명,원본포맷,결과,크기(KB),비고")

function Write-Log($fileName, $srcExt, $result, $sizeKB, $note) {
    $time = Get-Date -Format "HH:mm:ss"
    $script:logEntries += "$time,$fileName,$srcExt,$result,$sizeKB,$note"
}

# ===================== PowerPoint: ppt -> pptx =====================
$pptFiles = Get-ChildItem -Path $targetFolder -Recurse |
    Where-Object { $_.Extension -eq ".ppt" -and $_.Name -notlike "~`$*" }

Write-Host ""
Write-Host "====== PPT 변환 시작 ($($pptFiles.Count)건) ======" -ForegroundColor Cyan

if ($pptFiles.Count -gt 0) {
    $pptApp = $null
    try {
        $pptApp = New-Object -ComObject PowerPoint.Application
        foreach ($file in $pptFiles) {
            $srcPath = $file.FullName
            $dstPath = [System.IO.Path]::ChangeExtension($srcPath, ".pptx")
            if (Test-Path $dstPath) {
                Write-Host ("  [건너뜀] " + $file.Name) -ForegroundColor DarkGray
                Write-Log $file.Name ".ppt" "건너뜀" "" "이미 변환됨"
                $skipCount++
                continue
            }
            try {
                $prs = $pptApp.Presentations.Open($srcPath, $true, $false, $false)
                $prs.SaveAs($dstPath, 24)
                $prs.Close()
                $size = [math]::Round((Get-Item $dstPath).Length / 1KB, 1)
                Write-Host ("  [완료] " + $file.Name + " -> .pptx ($size KB)") -ForegroundColor Green
                Write-Log $file.Name ".ppt" "성공" $size ""
                $successCount++
            } catch {
                Write-Host ("  [실패] " + $file.Name + ": " + $_.Exception.Message) -ForegroundColor Red
                Write-Log $file.Name ".ppt" "실패" "" $_.Exception.Message
                $failCount++
            }
        }
    } finally {
        if ($pptApp) {
            $pptApp.Quit()
            [System.Runtime.Interopservices.Marshal]::ReleaseComObject($pptApp) | Out-Null
        }
    }
}

# ===================== Word: doc -> docx =====================
$docFiles = Get-ChildItem -Path $targetFolder -Recurse |
    Where-Object { $_.Extension -eq ".doc" -and $_.Name -notlike "~`$*" }

Write-Host ""
Write-Host "====== DOC 변환 시작 ($($docFiles.Count)건) ======" -ForegroundColor Cyan

if ($docFiles.Count -gt 0) {
    $wordApp = $null
    try {
        $wordApp = New-Object -ComObject Word.Application
        $wordApp.Visible = $false
        foreach ($file in $docFiles) {
            $srcPath = $file.FullName
            $dstPath = [System.IO.Path]::ChangeExtension($srcPath, ".docx")
            if (Test-Path $dstPath) {
                Write-Host ("  [건너뜀] " + $file.Name) -ForegroundColor DarkGray
                Write-Log $file.Name ".doc" "건너뜀" "" "이미 변환됨"
                $skipCount++
                continue
            }
            try {
                $doc = $wordApp.Documents.Open($srcPath, $false, $true)
                $doc.SaveAs2($dstPath, 16)
                $doc.Close($false)
                $size = [math]::Round((Get-Item $dstPath).Length / 1KB, 1)
                Write-Host ("  [완료] " + $file.Name + " -> .docx ($size KB)") -ForegroundColor Green
                Write-Log $file.Name ".doc" "성공" $size ""
                $successCount++
            } catch {
                Write-Host ("  [실패] " + $file.Name + ": " + $_.Exception.Message) -ForegroundColor Red
                Write-Log $file.Name ".doc" "실패" "" $_.Exception.Message
                $failCount++
            }
        }
    } finally {
        if ($wordApp) {
            $wordApp.Quit()
            [System.Runtime.Interopservices.Marshal]::ReleaseComObject($wordApp) | Out-Null
        }
    }
}

# ===================== Excel: xls -> xlsx =====================
$xlsFiles = Get-ChildItem -Path $targetFolder -Recurse |
    Where-Object { $_.Extension -eq ".xls" -and $_.Name -notlike "~`$*" }

Write-Host ""
Write-Host "====== XLS 변환 시작 ($($xlsFiles.Count)건) ======" -ForegroundColor Cyan

if ($xlsFiles.Count -gt 0) {
    $xlApp = $null
    try {
        $xlApp = New-Object -ComObject Excel.Application
        $xlApp.Visible = $false
        $xlApp.DisplayAlerts = $false
        foreach ($file in $xlsFiles) {
            $srcPath = $file.FullName
            $dstPath = [System.IO.Path]::ChangeExtension($srcPath, ".xlsx")
            if (Test-Path $dstPath) {
                Write-Host ("  [건너뜀] " + $file.Name) -ForegroundColor DarkGray
                Write-Log $file.Name ".xls" "건너뜀" "" "이미 변환됨"
                $skipCount++
                continue
            }
            try {
                $wb = $xlApp.Workbooks.Open($srcPath, 0, $true)
                $wb.SaveAs($dstPath, 51)
                $wb.Close($false)
                $size = [math]::Round((Get-Item $dstPath).Length / 1KB, 1)
                Write-Host ("  [완료] " + $file.Name + " -> .xlsx ($size KB)") -ForegroundColor Green
                Write-Log $file.Name ".xls" "성공" $size ""
                $successCount++
            } catch {
                Write-Host ("  [실패] " + $file.Name + ": " + $_.Exception.Message) -ForegroundColor Red
                Write-Log $file.Name ".xls" "실패" "" $_.Exception.Message
                $failCount++
            }
        }
    } finally {
        if ($xlApp) {
            $xlApp.Quit()
            [System.Runtime.Interopservices.Marshal]::ReleaseComObject($xlApp) | Out-Null
        }
    }
}

# ===================== 결과 요약 =====================
$logEntries | Out-File -FilePath $logPath -Encoding UTF8

Write-Host ""
Write-Host "========================================" -ForegroundColor Yellow
Write-Host "변환 완료" -ForegroundColor Yellow
Write-Host ("  성공: $successCount 건") -ForegroundColor Green
Write-Host ("  건너뜀(이미 변환됨): $skipCount 건") -ForegroundColor DarkGray
Write-Host ("  실패: $failCount 건") -ForegroundColor $(if ($failCount -gt 0) { "Red" } else { "Green" })
Write-Host ("  로그: $logPath") -ForegroundColor Yellow
Write-Host "원본 파일은 그대로 보존되었습니다." -ForegroundColor Yellow
