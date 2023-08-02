// Convert all DOMQL components in our UI Kit to React using Kalduna and Globusa.
// This script MUST be run from the root of the smbls repository.
// Usage:
//   Passing no arguments just builds everything from the smbls uikit.
//   Arguments that are passed will go into the whitelist:
//       node built.js Img Button DatePicker
//   This command will convert only the Img, Button and DatePicker components.

import { convert } from 'kalduna'
import { parse } from 'globusa'

import * as smbls from '@symbo.ls/uikit'

const EXCLUDE_EXPORTS_LIST = [
  'Svg',
  'keySetters',
  'getSystemTheme',
  'splitTransition',
  'transformDuration',
  'transformShadow',
  'transformTransition',
  // 'DatePickerDay',
  // 'DatePickerGrid',
]
const EXCLUDE_EXPORTS_MAP = EXCLUDE_EXPORTS_LIST
      .reduce((acc, x) => (acc[x] = true, acc), {})

const whitelist = process.argv.slice(2)

for (const key in smbls) {
  if (whitelist && whitelist.length > 0) {
    if (!whitelist.includes(key)) continue

  } else if (EXCLUDE_EXPORTS_MAP[key]) {
    continue
  }
  console.log(key)
}
