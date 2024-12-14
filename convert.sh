#! /bin/bash
set -xe

src="${1:-../smbls/packages/uikit/}"
mrg="${2:-./packages/custom/}"
dest="./packages/generated"
tmp="./.smbls_convert_tmp/"

rm -rf ./packages/generated

smbls convert "$src" "$dest" --internal-uikit -t "$tmp" -m "$mrg"

set +e
npx lerna exec --no-bail -- yarn unlink
npx lerna exec --no-bail -- yarn link
set -e
npx lerna link --force-local

cp symbols.json ./packages/generated/Provider/.
