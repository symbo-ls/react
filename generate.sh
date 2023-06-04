#! /bin/bash
# Generate react components from smbls uikit

GEN_DIR="src/uikit"
SRC_DIR="${1:-smbls-domql-uikit}"

rimraf -I "$GEN_DIR" && \
    smbls convert "$SRC_DIR" "$GEN_DIR" --react --internal-uikit "${@:2}"
