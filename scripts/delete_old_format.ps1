# delete_old_format.ps1 - 변환 완료된 구형 포맷 원본 삭제
# 신형 파일(.docx/.xlsx/.pptx)이 존재하는 경우에만 원본 삭제

$targetFolder = "C:\Users\MISTOP\Documents\02_AI디지털전환\AS9100D문서관리\AS9100 컨설팅 자료"

$deletedCount = 0
$skippedCount = 0

function Remove-IfConverted($ext, $newExt) {
    $files = Get-ChildItem -Path $targetFolder -Recurse -Filter "*$ext" |
        Where-Object { $_.Name -notlike "~$*" }

    Write-Host ""
    Write-Host "====== $ext 원본 삭제 ($($files.Count)건 검사) ======" -ForegroundColor Cyan

    foreach ($file in $files) {
        $newPath = [System.IO.Path]::ChangeExtension($file.FullName, $newExt)
        if (Test-Path $newPath) {
            Remove-Item $file.FullName -Force
            Write-Host ("  [삭제] " + $file.Name) -ForegroundColor DarkGray
            $script:deletedCount++
        } else {
            Write-Host ("  [보존] " + $file.Name + " (신형 파일 없음)") -ForegroundColor Yellow
            $script:skippedCount++
        }
    }
}

Remove-IfConverted ".doc" ".docx"
Remove-IfConverted ".xls" ".xlsx"
Remove-IfConverted ".ppt" ".pptx"

Write-Host ""
Write-Host "========================================" -ForegroundColor Yellow
Write-Host ("삭제 완료: $deletedCount 건") -ForegroundColor Green
Write-Host ("보존(신형 없음): $skippedCount 건") -ForegroundColor Yellow
