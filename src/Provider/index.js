'use strict'

import React, { useEffect, useState } from 'react'
import process from 'process'
import DEFAULT_CONFIG from '@symbo.ls/default-config'
import { init } from '@symbo.ls/init'
import { fetchProjectAsync } from '@symbo.ls/fetch'
import { SyncProvider } from './sync'
import { PROVIDER_DEFAULT_PROPS, SymbolsContext } from './hooks'

const SYMBOLSRC = process.cwd() + '/symbols.json'

export const SymbolsProvider = (options = PROVIDER_DEFAULT_PROPS) => {
  const { appKey, children, editor } = options
  const key = (SYMBOLSRC || options || {}).key

  const initialDesignSystem = options.designSystem || DEFAULT_CONFIG

  if (options.globalTheme) initialDesignSystem.globalTheme = options.globalTheme

  const scratchInit = init(initialDesignSystem)
  const [designSystem, setDesignSystem] = useState(scratchInit)
  const [state, setState] = useState(options.state)
  const [globalTheme, setGlobalTheme] = useState(designSystem.globalTheme)
  const { Provider } = SymbolsContext

  useEffect(() => {
    if (appKey && editor) {
      try {
        if (editor.async) {
          fetchProjectAsync(appKey, options, (data) => {
            if (data.state) setState(data.state)
            if (data.designsystem) init(data.designsystem)
          })
        }
      } catch (e) {
        console.error(e)
      }
    }
  }, [Object.values[state]])

  if (editor && editor.liveSync) SyncProvider({ key, ...options })

  return React.createElement(
    Provider,
    {
      value: {
        designSystem,
        setDesignSystem,

        state,
        setState,

        globalTheme,
        setGlobalTheme
      }
    },
    children
  )
}

export * from './hooks'
