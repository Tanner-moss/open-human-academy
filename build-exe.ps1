$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$code = @"
using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

public static class Program
{
    [STAThread]
    public static int Main()
    {
        var exeDir = AppDomain.CurrentDomain.BaseDirectory;
        var indexPath = Path.Combine(exeDir, "index.html");

        if (File.Exists(indexPath))
        {
            Process.Start(indexPath);
            return 0;
        }

        MessageBox.Show(
            "Could not find index.html next to HumanAcademy.exe.",
            "Open Human Academy Launcher",
            MessageBoxButtons.OK,
            MessageBoxIcon.Error
        );
        return 1;
    }
}
"@

Add-Type -AssemblyName System.Windows.Forms
$provider = New-Object Microsoft.CSharp.CSharpCodeProvider
$params = New-Object System.CodeDom.Compiler.CompilerParameters
$params.GenerateExecutable = $true
$params.OutputAssembly = "HumanAcademy.exe"
$params.GenerateInMemory = $false
$params.CompilerOptions = "/target:winexe /optimize"
[void]$params.ReferencedAssemblies.Add("System.dll")
[void]$params.ReferencedAssemblies.Add("System.Windows.Forms.dll")

$result = $provider.CompileAssemblyFromSource($params, $code)
if ($result.Errors.Count -gt 0) {
    $result.Errors | ForEach-Object { $_.ToString() }
    exit 1
}

Get-Item ".\HumanAcademy.exe" | Select-Object FullName, Length, LastWriteTime
