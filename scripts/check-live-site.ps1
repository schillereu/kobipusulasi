$ErrorActionPreference = "Stop"

$siteUrl = "https://schillereu.github.io/kobi-solutions/"
$repo = "schillereu/kobi-solutions"
$gh = "C:\Program Files\GitHub CLI\gh.exe"

Write-Host "Canli site kontrol ediliyor: $siteUrl"
$response = Invoke-WebRequest -Uri $siteUrl -UseBasicParsing -TimeoutSec 30

if ($response.StatusCode -ne 200) {
    throw "Canli site beklenen 200 yanitini vermedi. Durum: $($response.StatusCode)"
}

if ($response.Content -notmatch "KOBI Solutions") {
    throw "Canli sayfa iceriginde KOBI Solutions metni bulunamadi."
}

$pagesStatus = & $gh api "repos/$repo/pages" --jq .status
Write-Host "GitHub Pages durumu: $pagesStatus"
Write-Host "Canli site saglikli gorunuyor."
