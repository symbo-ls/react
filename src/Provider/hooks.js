'use strict'

import React, { useContext, useRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import DOM from 'domql'
import { createSkeleton } from 'smbls'
import { transformEmotion, transformClassname } from 'css-in-props'
import { Box } from '../Box'
import { Icon } from '../Icon'

export const PROVIDER_DEFAULT_PROPS = {
  editor: {
    remote: true,
    async: true,
    sync: true,
    serviceRoute: 'state',
    endpoint: 'https://api.symbols.app/'
  },
  state: {
    name: 'jora'
  },
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

export const getClassFromProps = (element, restProps = {}) => {
  const css = transformClassname(element, restProps)
  const className = transformEmotion(css)
  return className
}

let domqlRoot
export function useRoot () {
  return domqlRoot || (domqlRoot = createSkeleton({
    data: {
      listeners: []
    },
    context: useSymbolsContext()
  }, { key: 'react-root', state: useGlobalState()[0] }))
}

export function applyEvents (props, element) {
  for (let func in props) {
    if (!func.startsWith('on')) continue
    const event = props[func]
    props[func] = (ev) => event(ev, element, element.state, element.context)
  }
}

export function applyChildren (element, reactElem) {
  let { props, text } = element
  const { text: propText } = props
  const childElems = getCapitalCaseKeys(element)
  text = text || propText
  return childElems.map(k => {
    const childElem = element[k]
    const key = k || childElem.key
    const ref = useRef(null)
    ref.element = childElem
    delete reactElem[key]
    if (childElem?.if?.(childElem, childElem.state, childElem.context)) return
    return <Box ref={ref} key={key} />
  }).concat(props.children).concat([text]).filter(v => v)
}

export function useSymbols (orig, args = {}) {
  let { props, ref, key} = args

  props = props || {}
  ref = ref || useRef(null)
  let node = ref.current

  const element = ref.element || (orig?.__ref ? orig : props?.__element) || DOM.create({
    extend: orig,
    node,
    props
  }, useRoot(), Math.random() + '', { onlyResolveExtends: true })

  ref.element = element

  React.useEffect(() => {
    node = element.node = element.node || ref.current
    if (node) node.ref = element
  }, [ref]); // Empty dependency array - runs once on mount
  
  const reactElem = {}
  const propsClassName = getClassFromProps(element, reactElem)
  element.scope = reactElem
  
  reactElem.className = `${propsClassName ?? ''} ${reactElem.class ?? ''} ${reactElem.className ?? ''}`.trim()
  reactElem.ref = ref
  if (element.html) reactElem.dangerouslySetInnerHTML = { __html: element.html }
  reactElem.tag = reactElem.tag || element.tag
  const children = applyChildren(element, reactElem)
  reactElem.children = children.length ? children : null
  applyEvents(reactElem, element)

  return reactElem
}

// export const createComponent = React.forwardRef((...args) => {
//   const element = useSymbols(args, Orig)
//   console.log({element})
//   return jsx(Box, element)
// })
