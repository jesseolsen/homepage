# VCM launch script — starts the project dev server.
# Auto-detects project type; edit this file for project-specific overrides.
# VCM polls the URL in .vibecodingmachine/config.json -> launch.url (default: http://localhost:8000).

$ErrorActionPreference = 'Stop'
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $ProjectRoot

$Port = if ($env:PORT) { $env:PORT } else { '8000' }

if (Test-Path 'package.json') {
  try {
    $pkg = Get-Content 'package.json' -Raw | ConvertFrom-Json
    if ($pkg.scripts.dev)   { npm run dev;  exit $LASTEXITCODE }
    if ($pkg.scripts.start) { npm start;    exit $LASTEXITCODE }
  } catch {}
}

# Fallback: cross-platform static file server
npx --yes http-server -p $Port -c-1 --cors
exit $LASTEXITCODE
