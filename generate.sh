#! /bin/bash
# Generate react components from smbls uikit

GEN_DIR="src/uikit"
SRC_DIR="${1:-domql-smbls-components}"

echo smbls convert "$SRC_DIR" "$GEN_DIR" --react --internal-uikit "${@:2}"

rimraf -I "$GEN_DIR" && \
    smbls convert "$SRC_DIR" "$GEN_DIR" --react --internal-uikit "${@:2}"
