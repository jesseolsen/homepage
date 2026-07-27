# VCM deploy script — deploys the project to production.
# Edit this file to configure your deployment target.

$ErrorActionPreference = 'Stop'
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $ProjectRoot

# Prefer a project-level deploy script if one exists
if (Test-Path 'scripts\deploy-prod.ps1') { & '.\scripts\deploy-prod.ps1'; exit $LASTEXITCODE }
if (Test-Path 'scripts\deploy.ps1')      { & '.\scripts\deploy.ps1';      exit $LASTEXITCODE }

# Fall back to npm deploy/build scripts
if (Test-Path 'package.json') {
  try {
    $pkg = Get-Content 'package.json' -Raw | ConvertFrom-Json
    if ($pkg.scripts.deploy) { npm run deploy; exit $LASTEXITCODE }
    if ($pkg.scripts.build)  { npm run build;  exit $LASTEXITCODE }
  } catch {}
}

Write-Host '⚠️  No deploy script configured.'
Write-Host 'Edit .vibecodingmachine\scripts\deploy.ps1 for AWS S3, Netlify, Vercel, etc.'
exit 1
