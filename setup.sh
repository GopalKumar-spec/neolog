#!/bin/bash
# NeoLog - Git Setup & First Push
# Run this after creating your GitHub account

echo "═══════════════════════════════════════"
echo "  ⚡ NeoLog — GitHub Pages Setup"
echo "═══════════════════════════════════════"

# Ask for GitHub username
read -p "Enter your GitHub username: " GITHUB_USER

# Configure git
git config --global user.name "$GITHUB_USER"
git config --global user.email "${GITHUB_USER}@users.noreply.github.com"

# Navigate to website directory
cd "$(dirname "$0")"

# Initialize repo
git init
git branch -M main
git add .

# Commit
git commit -m "🚀 Initial launch: NeoLog commercial blog - $(date +%Y-%m-%d)"

# Create GitHub repo via gh CLI
echo ""
echo "Creating GitHub repository..."
gh repo create neolog --public --description "NeoLog — Future of Tech, Sci-Fi & Storytelling" --push --source=.

echo ""
echo "═══════════════════════════════════════"
echo "  ✅ DONE!"
echo ""
echo "  Your website is now live at:"
echo "  https://${GITHUB_USER}.github.io/neolog/"
echo ""
echo "  Admin panel:"
echo "  https://${GITHUB_USER}.github.io/neolog/admin/"
echo ""
echo "  Next: Enable GitHub Pages"
echo "  1. Go to https://github.com/${GITHUB_USER}/neolog"
echo "  2. Settings → Pages → Branch: main → / (root) → Save"
echo "═══════════════════════════════════════"
