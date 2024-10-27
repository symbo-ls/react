'use strict'

import React, { useEffect, useState } from 'react'
import process from 'process'
import DEFAULT_CONFIG from '@symbo.ls/default-config'
import { init } from '@symbo.ls/init'
import { fetchProjectAsync } from '@symbo.ls/fetch'
import { SyncProvider } from './sync'
import { PROVIDER_DEFAULT_PROPS, SymbolsContext, useSymbolsContext } from './hooks'

const SYMBOLSRC = process.cwd() + '/symbols.json'

export const SymbolsProvider = (props) => {
  const ctx = useSymbolsContext()
  const { children } = props
  const { appKey, editor } = ctx
  const key = (SYMBOLSRC || ctx || {}).key

  const initialDesignSystem = ctx.designSystem || DEFAULT_CONFIG

  if (ctx.globalTheme) initialDesignSystem.globalTheme = ctx.globalTheme

  const scratchInit = init(initialDesignSystem)
  const [designSystem, setDesignSystem] = useState(scratchInit)
  const [state, setState] = useState(ctx.state)
  const [globalTheme, setGlobalTheme] = useState(designSystem.globalTheme)
  const { Provider } = SymbolsContext

  // useEffect(() => {
  //   if (appKey && editor) {
  //     try {
  //       if (editor.async) {
  //         fetchProjectAsync(appKey, ctx, (data) => {
  //           if (data.state) setState(data.state)
  //           if (data.designsystem) init(data.designsystem)
  //         })
  //       }
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }
  // }, [Object.values[state]])

  // if (editor && editor.liveSync) SyncProvider({ key, ...ctx })

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
