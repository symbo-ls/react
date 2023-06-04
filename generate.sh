#! /bin/bash
# Generate react components from smbls uikit

GEN_DIR="src/uikit"
SRC_DIR="domql-smbls-components"

echo smbls convert "$SRC_DIR" "$GEN_DIR" --react --internal-uikit "${@:1}"

rimraf -I "$GEN_DIR" && \
    smbls convert "$SRC_DIR" "$GEN_DIR" --react --internal-uikit "${@:1}"
