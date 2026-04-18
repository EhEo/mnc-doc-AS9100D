# test_convert.ps1 - 구형 Office 포맷 변환 테스트 (파일 3개)
# 원본 파일은 삭제하지 않고 같은 폴더에 새 파일 생성

$basePath = "C:\Users\MISTOP\Documents\02_AI디지털전환\AS9100D문서관리\AS9100 컨설팅 자료"

$testFiles = @(
    @{
        Path = "$basePath\교육 자료\03-QMS.ppt"
        Type = "ppt"
    },
    @{
        Path = "$basePath\절차서-form -AS9100\WA-1020 QP(시정및예방조치관리 절차서)\WA-1020 QP( 시정및예방조치관리 절차서).doc"
        Type = "doc"
    },
    @{
        Path = "$basePath\절차서-form -AS9100\WA-1020-1 QI(고객불만족 관리지침서)\WA-1020-1 QIF-01(고객불만족접수대장).xls"
        Type = "xls"
    }
)

$successCount = 0
$failCount = 0

# --- PowerPoint: ppt -> pptx ---
Write-Host ""
Write-Host "[PPT 변환 테스트]" -ForegroundColor Cyan
$pptApp = $null
try {
    $pptApp = New-Object -ComObject PowerPoint.Application
    $file = $testFiles | Where-Object { $_.Type -eq "ppt" } | Select-Object -First 1
    $srcPath = $file.Path
    $dstPath = [System.IO.Path]::ChangeExtension($srcPath, ".pptx")
    Write-Host ("  변환 중: " + [System.IO.Path]::GetFileName($srcPath))
    $prs = $pptApp.Presentations.Open($srcPath, $true, $false, $false)
    $prs.SaveAs($dstPath, 24)
    $prs.Close()
    $size = [math]::Round((Get-Item $dstPath).Length / 1KB, 1)
    Write-Host ("  완료: " + [System.IO.Path]::GetFileName($dstPath) + " ($size KB)") -ForegroundColor Green
    $successCount++
} catch {
    Write-Host ("  실패: " + $_) -ForegroundColor Red
    $failCount++
} finally {
    if ($pptApp) {
        $pptApp.Quit()
        [System.Runtime.Interopservices.Marshal]::ReleaseComObject($pptApp) | Out-Null
    }
}

# --- Word: doc -> docx ---
Write-Host ""
Write-Host "[DOC 변환 테스트]" -ForegroundColor Cyan
$wordApp = $null
try {
    $wordApp = New-Object -ComObject Word.Application
    $wordApp.Visible = $false
    $file = $testFiles | Where-Object { $_.Type -eq "doc" } | Select-Object -First 1
    $srcPath = $file.Path
    $dstPath = [System.IO.Path]::ChangeExtension($srcPath, ".docx")
    Write-Host ("  변환 중: " + [System.IO.Path]::GetFileName($srcPath))
    $doc = $wordApp.Documents.Open($srcPath, $false, $true)
    $doc.SaveAs2($dstPath, 16)
    $doc.Close($false)
    $size = [math]::Round((Get-Item $dstPath).Length / 1KB, 1)
    Write-Host ("  완료: " + [System.IO.Path]::GetFileName($dstPath) + " ($size KB)") -ForegroundColor Green
    $successCount++
} catch {
    Write-Host ("  실패: " + $_) -ForegroundColor Red
    $failCount++
} finally {
    if ($wordApp) {
        $wordApp.Quit()
        [System.Runtime.Interopservices.Marshal]::ReleaseComObject($wordApp) | Out-Null
    }
}

# --- Excel: xls -> xlsx ---
Write-Host ""
Write-Host "[XLS 변환 테스트]" -ForegroundColor Cyan
$xlApp = $null
try {
    $xlApp = New-Object -ComObject Excel.Application
    $xlApp.Visible = $false
    $xlApp.DisplayAlerts = $false
    $file = $testFiles | Where-Object { $_.Type -eq "xls" } | Select-Object -First 1
    $srcPath = $file.Path
    $dstPath = [System.IO.Path]::ChangeExtension($srcPath, ".xlsx")
    Write-Host ("  변환 중: " + [System.IO.Path]::GetFileName($srcPath))
    $wb = $xlApp.Workbooks.Open($srcPath, 0, $true)
    $wb.SaveAs($dstPath, 51)
    $wb.Close($false)
    $size = [math]::Round((Get-Item $dstPath).Length / 1KB, 1)
    Write-Host ("  완료: " + [System.IO.Path]::GetFileName($dstPath) + " ($size KB)") -ForegroundColor Green
    $successCount++
} catch {
    Write-Host ("  실패: " + $_) -ForegroundColor Red
    $failCount++
} finally {
    if ($xlApp) {
        $xlApp.Quit()
        [System.Runtime.Interopservices.Marshal]::ReleaseComObject($xlApp) | Out-Null
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Yellow
Write-Host ("테스트 결과: 성공 $successCount / 실패 $failCount (총 3건)") -ForegroundColor Yellow
Write-Host "원본 파일은 그대로 보존되었습니다." -ForegroundColor Yellow
