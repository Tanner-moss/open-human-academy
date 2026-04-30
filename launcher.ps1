$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$indexPath = Join-Path $scriptDir "index.html"

if (Test-Path $indexPath) {
    Start-Process $indexPath
    exit 0
}

Add-Type -AssemblyName System.Windows.Forms
[System.Windows.Forms.MessageBox]::Show(
    "Could not find index.html next to HumanAcademy.exe.",
    "Open Human Academy Launcher",
    [System.Windows.Forms.MessageBoxButtons]::OK,
    [System.Windows.Forms.MessageBoxIcon]::Error
) | Out-Null
exit 1
