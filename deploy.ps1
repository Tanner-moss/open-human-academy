$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force

$project = "open-human-academy"
$deployDir = "deploy"

# Create clean deploy directory
if (Test-Path $deployDir) { Remove-Item -Recurse -Force $deployDir }
New-Item -ItemType Directory -Path $deployDir | Out-Null

# Copy only web-servable files
$files = @("index.html", "schools-of-thought.md", "og-image.png", "og-image.svg", "404.html", "_headers", "_redirects")
foreach ($f in $files) {
    if (Test-Path $f) { Copy-Item $f -Destination "$deployDir\" }
}

Write-Host "Deploying to Cloudflare Pages..." -ForegroundColor Cyan
wrangler pages deploy $deployDir --project-name $project --commit-dirty=true

# Cleanup
Remove-Item -Recurse -Force $deployDir
Write-Host "Done!" -ForegroundColor Green
