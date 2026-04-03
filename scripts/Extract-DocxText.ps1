# Extract-DocxText.ps1
param(
    [string]$SourcePath,
    [string]$OutputPath
)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Web

New-Item -ItemType Directory -Path $OutputPath -Force | Out-Null

function ConvertTo-SafeFileName {
    param([string]$name)
    $chars = [System.IO.Path]::GetInvalidFileNameChars()
    foreach ($c in $chars) { $name = $name.Replace([string]$c, "_") }
    return $name
}

function Get-DocxText {
    param([string]$DocxPath)
    try {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($DocxPath)
        $entry = $zip.Entries | Where-Object { $_.FullName -eq "word/document.xml" }
        if (-not $entry) { $zip.Dispose(); return "" }
        $stream = $entry.Open()
        $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
        $xml = $reader.ReadToEnd()
        $reader.Close(); $stream.Close(); $zip.Dispose()

        $xml = [System.Text.RegularExpressions.Regex]::Replace($xml, "<w:p[ >][^>]*>", "`n")
        $xml = [System.Text.RegularExpressions.Regex]::Replace($xml, "<[^>]+>", "")
        $xml = [System.Web.HttpUtility]::HtmlDecode($xml)
        $xml = [System.Text.RegularExpressions.Regex]::Replace($xml, "\n{3,}", "`n`n")
        return $xml.Trim()
    } catch { return "" }
}

$files = Get-ChildItem -LiteralPath $SourcePath -Recurse -Include "*.docx" -File |
         Where-Object {
             $_.Name -notlike "~`$*" -and
             $_.FullName -notmatch "\\[Oo]ld\\" -and
             $_.FullName -notmatch "cu old"
         }

Write-Host "Target files: $($files.Count)"

$i = 0
foreach ($file in $files) {
    $i++
    $safeName = ConvertTo-SafeFileName -name $file.Name
    $outPath = Join-Path $OutputPath ($safeName + ".txt")
    $text = Get-DocxText -DocxPath $file.FullName
    if ($text.Length -gt 100) {
        [System.IO.File]::WriteAllText($outPath, $text, [System.Text.Encoding]::UTF8)
        Write-Host "[$i/$($files.Count)] OK: $($file.Name)"
    } else {
        Write-Host "[$i/$($files.Count)] SKIP (empty): $($file.Name)"
    }
}
Write-Host "Done. Output: $OutputPath"
