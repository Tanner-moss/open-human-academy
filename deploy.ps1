$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force

$project = "open-human-academy"
$deployDir = "deploy"

# Create clean deploy directory
if (Test-Path $deployDir) { Remove-Item -Recurse -Force $deployDir }
New-Item -ItemType Directory -Path $deployDir | Out-Null

# Copy the current web app and its runtime assets.
$files = @("index.html", "schools-of-thought.md", "og-image.png", "og-image.svg", "404.html", "_headers", "_redirects")
$directories = @("data", "content")

foreach ($f in $files) {
    if (Test-Path $f) {
        Copy-Item $f -Destination "$deployDir\"
    }
}

foreach ($dir in $directories) {
    if (Test-Path $dir) {
        Copy-Item $dir -Destination "$deployDir\$dir" -Recurse
    }
}

Write-Host "Deploying to Cloudflare Pages..." -ForegroundColor Cyan
wrangler pages deploy $deployDir --project-name $project --commit-dirty=true

# Cleanup
Remove-Item -Recurse -Force $deployDir
Write-Host "Done!" -ForegroundColor Green
