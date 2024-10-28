'use strict'

import React, { useEffect, useState } from 'react'
import process from 'process'
import DEFAULT_CONFIG from '@symbo.ls/default-config'
import { init } from '@symbo.ls/init'
import { fetchProjectAsync } from '@symbo.ls/fetch'
import { SyncProvider } from './sync'
import { SymbolsContext, useRoot, useSymbolsContext } from './hooks'
import { overwriteDeep } from 'smbls'

const SYMBOLSRC = process.cwd() + '/symbols.json'

export * from './hooks'

export const SymbolsProvider = (props) => {
  const { Provider } = SymbolsContext
  const { children, ...restProps } = props

  const ctx = useSymbolsContext()

  const [designSystem, setDesignSystem] = useState(props.designSystem || ctx.designSystem)
  const [state, setState] = useState(props.state)
  const [globalTheme, setGlobalTheme] = useState(designSystem.globalTheme)

  overwriteDeep(ctx, {
    ...restProps,
    designSystem,
    state
  })

  ctx.app = useRoot(ctx)

  return <Provider value={{
    ...ctx,

    designSystem,
    setDesignSystem,

    state,
    setState,

    globalTheme,
    setGlobalTheme,
  }}>{children}</Provider>
}


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