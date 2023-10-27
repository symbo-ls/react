'use strict'

import React, { useContext } from 'react'

export const PROVIDER_DEFAULT_PROPS = {
  editor: {
    remote: true,
    async: true,
    sync: true,
    serviceRoute: 'state',
    endpoint: 'https://api.symbols.app/'
  },
  state: {},
  pages: {},
  designSystem: {
    useReset: true,
    useVariable: true,
    useIconSprite: true,
    useSvgSprite: true,
    useDocumentTheme: true,
    useFontImport: true
  },
  components: {},
  snippets: {}
}

export const SymbolsContext = React.createContext(PROVIDER_DEFAULT_PROPS)

export const useGlobalState = () => {
  const { state, setState } = useContext(SymbolsContext)
  return [state, setState]
}

export const useGlobalTheme = (prop) => {
  const { designSystem, globalTheme, setGlobalTheme } = useContext(SymbolsContext)
  designSystem.globalTheme = globalTheme
  return [globalTheme, setGlobalTheme]
}

export const useDesignSystem = () => {
  const { designSystem, setDesignSystem } = useContext(SymbolsContext)
  return [designSystem, setDesignSystem]
}

export const useSymbols = () => useContext(SymbolsContext)
