#!/bin/bash
# NeoLog Local Preview Server
# Serves the website locally on port 8080
# Usage: bash preview.sh (then open http://localhost:8080 in browser)

PORT=${1:-8080}
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "═══════════════════════════════════════"
echo "  ⚡ NeoLog — Local Preview Server"
echo "  📍 ${SCRIPT_DIR}"
echo "  🌐 http://localhost:${PORT}"
echo "  🔧 Admin: http://localhost:${PORT}/admin/"
echo "  ⌨️  Ctrl+C to stop"
echo "═══════════════════════════════════════"

# Use Python's built-in HTTP server (zero dependencies)
cd "$SCRIPT_DIR"
python3 -m http.server ${PORT}
