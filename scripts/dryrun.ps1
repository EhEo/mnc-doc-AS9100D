# dryrun.ps1 - 삭제 대상 사전 확인 (실제 삭제 없음)
$targetFolder = "C:\Users\MISTOP\Documents\02_AI디지털전환\AS9100D문서관리\AS9100 컨설팅 자료"

function Test-DryRun($ext, $newExt) {
    $files = Get-ChildItem -Path $targetFolder -Recurse |
        Where-Object { $_.Extension -eq $ext -and $_.Name -notlike "~`$*" }
    $toDelete = @($files | Where-Object { Test-Path ([System.IO.Path]::ChangeExtension($_.FullName, $newExt)) })
    $toKeep   = @($files | Where-Object { -not (Test-Path ([System.IO.Path]::ChangeExtension($_.FullName, $newExt))) })

    Write-Host ""
    Write-Host ("=== " + $ext + " → " + $newExt + " : 삭제예정 " + $toDelete.Count + "건 / 신형없어 보존 " + $toKeep.Count + "건 ===") -ForegroundColor Cyan
    $toDelete | ForEach-Object { Write-Host ("  [삭제예정] " + $_.Name) -ForegroundColor DarkGray }
    if ($toKeep.Count -gt 0) {
        $toKeep | ForEach-Object { Write-Host ("  [보존]    " + $_.Name) -ForegroundColor Yellow }
    }
}

Test-DryRun ".doc" ".docx"
Test-DryRun ".xls" ".xlsx"
Test-DryRun ".ppt" ".pptx"

Write-Host ""
Write-Host "※ 위 내용은 미리보기입니다. 실제 삭제는 delete_old_format.ps1 을 실행하세요." -ForegroundColor Green
