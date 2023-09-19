#! /bin/bash
set -xe

src="${1:-../smbls/uikit/domql/}"
mrg="${2:-../smbls/uikit/react/}"
dest="./src/uikit"
tmp="./.smbls_convert_tmp/"

rm -rf ./src/uikit

smbls convert "$src" "$dest" --internal-uikit -t "$tmp" -m "$mrg"

set +e
npx lerna exec --no-bail -- yarn unlink
npx lerna exec --no-bail -- yarn link
set -e
npx lerna link --force-local
