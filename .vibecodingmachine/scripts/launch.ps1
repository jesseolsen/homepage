# VCM launch script — starts the project dev server.
# Auto-detects project type; edit this file for project-specific overrides.
# VCM polls the URL in .vibecodingmachine/config.json -> launch.url (this project: http://localhost:3000).

$ErrorActionPreference = 'Stop'
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $ProjectRoot

# Serve on the port VCM polls (launch.url in config.json), so the two can't
# drift apart. Exported so `npm start` (react-scripts) actually sees it.
$Port = '3000'
try {
  $url = [Uri](Get-Content '.vibecodingmachine/config.json' -Raw | ConvertFrom-Json).launch.url
  if (-not $url.IsDefaultPort) { $Port = [string]$url.Port }
} catch {}
$env:PORT = $Port
# Never open a browser window from an automated launch.
$env:BROWSER = 'none'

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
