#!/bin/bash
# VCM launch script — starts the project dev server.
# Auto-detects project type; edit this file for project-specific overrides.
# VCM polls the URL in .vibecodingmachine/config.json → launch.url (this project: http://localhost:3000).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
cd "$PROJECT_ROOT"

# Serve on the port VCM polls (launch.url in config.json), so the two can't
# drift apart. Exported so `npm start` (react-scripts) actually sees it.
PORT="$(node -e "try{const u=new URL(require('./.vibecodingmachine/config.json').launch.url);console.log(u.port||'')}catch(e){}" 2>/dev/null || true)"
PORT="${PORT:-3000}"
export PORT
# Never open a browser window from an automated launch.
export BROWSER=none

if [ -f "package.json" ]; then
  SCRIPTS="$(node -e "const s=require('./package.json').scripts||{};console.log(Object.keys(s).join(','))" 2>/dev/null || echo '')"
  if echo ",$SCRIPTS," | grep -q ',dev,'; then
    exec npm run dev
  elif echo ",$SCRIPTS," | grep -q ',start,'; then
    exec npm start
  fi
fi

# Fallback: cross-platform static file server
exec npx --yes http-server -p "$PORT" -c-1 --cors
