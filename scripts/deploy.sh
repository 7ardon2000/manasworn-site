#!/usr/bin/env bash
# Build locally and publish out/ to the gh-pages branch (Pages source: gh-pages / root).
# Used instead of .github/workflows/pages.yml while GitHub Actions is unavailable on the account.
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
sha=$(git rev-parse --short HEAD)
tmp=$(mktemp -d)
cp -r out/. "$tmp/"
cd "$tmp"
git init -q -b gh-pages
git config core.autocrlf false
git add -A
git commit -q -m "Static export of main $sha"
git push -q -f https://github.com/7ardon2000/manasworn-site.git gh-pages
echo "published $sha to gh-pages; Pages rebuilds in ~1 min"
