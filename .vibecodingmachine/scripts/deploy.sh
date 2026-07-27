#!/bin/bash
# VCM deploy script — deploys the project to production.
# Edit this file to configure your deployment target.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
cd "$PROJECT_ROOT"

# Prefer a project-level deploy script if one exists
if [ -f "scripts/deploy-prod.sh" ]; then exec bash scripts/deploy-prod.sh; fi
if [ -f "scripts/deploy.sh" ]; then       exec bash scripts/deploy.sh;      fi

# Fall back to npm deploy/build scripts
if [ -f "package.json" ]; then
  SCRIPTS="$(node -e "const s=require('./package.json').scripts||{};console.log(Object.keys(s).join(','))" 2>/dev/null || echo '')"
  if echo ",$SCRIPTS," | grep -q ',deploy,'; then exec npm run deploy; fi
  if echo ",$SCRIPTS," | grep -q ',build,';  then exec npm run build;  fi
fi

echo "⚠️  No deploy script configured."
echo "Edit .vibecodingmachine/scripts/deploy.sh for AWS S3, Netlify, Vercel, etc."
exit 1
