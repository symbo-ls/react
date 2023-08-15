// Convert all DOMQL components in our UI Kit to React using Kalduna and Globusa.
// This script MUST be run from the root of the smbls repository.
// Usage:
//   Passing no arguments just builds everything from the smbls uikit.
//   Arguments that are passed will go into the whitelist:
//       node built.js Img Button DatePicker
//   This command will convert only the Img, Button and DatePicker components.

import fs from 'fs'
import path from 'path'
import { convert } from 'kalduna'

import * as smbls from '@symbo.ls/uikit'

const DEST_PATH = path.join('src', 'uikit')

const EXCLUDE_EXPORTS_LIST = [
  // We have our own React Svg implementation
  'Svg',

  // These are not domql objects
  'keySetters',
  'getSystemTheme',
  'splitTransition',
  'transformDuration',
  'transformShadow',
  'transformTransition',

  // DatePickerDay can't be built independently of the root DatePicker component
  'DatePickerDay',

  // These two depend on DatePickerDay and therefore can't be built without the
  // root DatePicker component as well.
  'DatePickerGrid',
  'DatePickerGridContainer',

  // Not a domql object (headless-datepicker)
  'calendar',
]
const EXCLUDE_EXPORTS_MAP = EXCLUDE_EXPORTS_LIST
      .reduce((acc, x) => (acc[x] = true, acc), {})

// Essentially does 'mkdir -P'
async function mkdirp (dir) {
  try {
    return await fs.promises.mkdir(dir)
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err
    }
  }
  return null
}

async function main(destPath, smbls, opts) {
  const { whiteList, excludeMap } = opts
  await mkdirp(destPath)

  for (const key in smbls) {
    if (whiteList && whiteList.length > 0) {
      if (!whiteList.includes(key))
        continue
    } else if (excludeMap[key]) {
      continue
    }

    console.log(key)

    const dobj = smbls[key]
    if (!dobj.__name) {
      dobj.__name = key
    }

    const destFile = path.join(destPath, `${key}.js`)
    const convertedModuleStr = convert(dobj, 'react', {
      verbose: false
    })

    // Write file
    if (convertedModuleStr && convertedModuleStr.length > 0) {
      const fh = await fs.promises.open(destFile, 'w')
      await fh.writeFile(convertedModuleStr, 'utf8')
      await fh.close()
    }
  }
}

main(DEST_PATH, smbls, { whiteList:  process.argv.slice(2),
                         excludeMap: EXCLUDE_EXPORTS_MAP    })
