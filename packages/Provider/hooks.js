'use strict'

import { Box } from '@symbo.ls/react'

import React, { useContext, useRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { createSkeleton } from 'smbls'

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

export function getCapitalCaseKeys (obj) {
  return Object.keys(obj).filter(key => /^[A-Z]/.test(key))
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

export const useSymbolsContext = () => {
  return useContext(SymbolsContext)
}

// export const createComponent = React.forwardRef((...args) => {
//   const element = useSymbols(args, Orig)
//   console.log({element})
//   return jsx(Box, element)
// })

export function createComponent (orig, args = {}) {
  let { props, ref, key } = args
  // console.log('==========')
  // console.log(0, args)
  // console.log(key)
  // console.log(args)
  const element = useSymbols(orig, args)
  key = key || orig.key || element.key
  console.log('element', element)
  return jsx(Box, element, key)
}

export function useSymbols (orig, args = {}) {
  let { props, ref } = args

  props = props || {}
  ref = ref || useRef(null)
  const node = ref.current
  const element = props?.element || createSkeleton({
    extend: orig,
    context: useSymbolsContext(),
    props
  })

  element.node = node

  const childElems = getCapitalCaseKeys(element)
  const children = childElems.map(k => {
    const childElem = element[k]
    const key = k || childElem.key
    const ref = props.ref || useRef(null)
    if (childElem?.if?.(childElem, childElem.state, childElem.context)) return
    return createComponent(childElem.parseDeep(), { ref, key })
  }).concat(props.children).concat([orig?.text]).filter(v => v)
  
  return {
    ...element.props,
    // ...element.attr,
    ref,
    children,
  }
}
