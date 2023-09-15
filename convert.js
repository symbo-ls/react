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

  // We have our own React Box implementation
  'Box',

  // These are not domql objects
  'keySetters',
  'getSystemTheme',
  'splitTransition',
  'transformDuration',
  'transformShadow',
  'transformTransition',

  // FIXME: Temporary list of components we want to skip
  'DatePicker',
  'DatePickerDay',
  'DatePickerTwoColumns',
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

  const dirs = []
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

    const convertedModuleStr = convert(dobj, 'react', {
      verbose: false
    })

    // Write file
    const d = path.join(destPath, key)
    const f = path.join(d, 'index.js')
    await mkdirp(d)
    if (convertedModuleStr && convertedModuleStr.length > 0) {
      const fh = await fs.promises.open(f, 'w')
      await fh.writeFile(convertedModuleStr, 'utf8')
      await fh.close()
    }

    // Collect dir names
    dirs.push(key)
  }

  // TODO: generate top package.json file
  // Generate top index.js file
  if (dirs.length > 0) {
    const importLines = dirs.map(d => `import ${d} from './${d}'`).join('\n') + '\n'
    const exportLines = 'export {\n' + dirs.map(d => `  ${d}`).join(',\n') + '\n}\n'
    const fileContent = importLines + '\n' + exportLines
    const indexFilePath = path.join(destPath, 'index.js')
      const fh = await fs.promises.open(indexFilePath, 'w')
      await fh.writeFile(fileContent, 'utf8')
      await fh.close()
  }
}

main(DEST_PATH, smbls, { whiteList:  process.argv.slice(2),
                         excludeMap: EXCLUDE_EXPORTS_MAP    })
