$ErrorActionPreference = "Stop"

param(
    [Parameter(Mandatory = $true)]
    [string]$Domain
)

$root = Split-Path -Parent $PSScriptRoot
$gh = "C:\Program Files\GitHub CLI\gh.exe"
$repo = "kobi-solutions"
$owner = (& $gh api user --jq .login).Trim()
$fullRepo = "$owner/$repo"

if ($Domain -match "[^\x00-\x7F]") {
    throw "Turkce karakterli domain yerine ASCII yazim kullanin. Ornek: teknolojidunyasi.com"
}

$cnamePath = Join-Path $root "CNAME"
[System.IO.File]::WriteAllText($cnamePath, $Domain.Trim(), [System.Text.UTF8Encoding]::new($false))

$body = @{
    cname = $Domain.Trim()
    source = @{
        branch = "main"
        path = "/"
    }
} | ConvertTo-Json -Depth 5

$temp = New-TemporaryFile
[System.IO.File]::WriteAllText($temp, $body, [System.Text.UTF8Encoding]::new($false))
& $gh api "repos/$fullRepo/pages" -X PUT --input $temp *> $null
Remove-Item -LiteralPath $temp -Force

Write-Host "CNAME dosyasi hazirlandi: $Domain"
Write-Host "Simdi DNS kayitlarini domain panelinden girin ve sonra sync-github.ps1 calistirin."
