#!/bin/bash
# VCM launch script — starts the project dev server.
# Auto-detects project type; edit this file for project-specific overrides.
# VCM polls the URL in .vibecodingmachine/config.json → launch.url (default: http://localhost:8000).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
cd "$PROJECT_ROOT"

PORT="${PORT:-8000}"

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
