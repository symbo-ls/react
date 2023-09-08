#! /bin/bash
set -xe

src="${1:-../smbls/uikit/domql/}"
dest="./src/uikit"
tmp="./.smbls_convert_tmp/"

rm -rf ./src/uikit

smbls convert --internal-uikit -t "$tmp" "$src" "$dest"
npx lerna exec -- yarn link
npx lerna link --force-local
