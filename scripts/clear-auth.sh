#!/usr/bin/env bash
set -euo pipefail

AUTH_DIR=".auth"

# If the directory exists, remove it entirely (including hidden items), then recreate.
if [ -d "$AUTH_DIR" ]; then
  # Clear macOS immutable/system flags if present; ignore errors on other OSes
  if command -v chflags >/dev/null 2>&1; then
    chflags -R nouchg,noschg "$AUTH_DIR" 2>/dev/null || true
  fi
  rm -rf -- "$AUTH_DIR"
fi

mkdir -p -- "$AUTH_DIR"
echo "$AUTH_DIR reset (all contents removed)."
