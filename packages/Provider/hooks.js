'use strict'

import React, { useContext, useRef } from 'react'
import DOM from 'domql'
import { createSkeleton, checkIfSugar } from 'smbls'
import { transformEmotion, extractCSSfromProps } from 'css-in-props'
import { Box } from '@symbo.ls/react-box'
import { Icon } from '@symbo.ls/react-icon'
import { Avatar } from '@symbo.ls/react-avatar'
import { filterAttributesByTagName } from 'attrs-in-props'

const ENV = process.env.NODE_ENV

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
  snippets: {},
  cached: {}
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

export const getClassnameFromProps = (element) => {
  const css = extractCSSfromProps(element).css
  return transformEmotion(css)
}

let domqlRoot
export function useRoot () {
  return domqlRoot || (domqlRoot = createSkeleton({
    data: {
      listeners: []
    },
    context: {
      ...useSymbolsContext(),
      initOptions: {
        preventEmotion: true
      }
    }
  }, { key: 'react-root', state: useGlobalState()[0] }))
}

export function extractEvents (element) {
  let { props } = element
  const events = {}
  for (let func in props) {
    if (!func.startsWith('on')) continue
    const event = props[func]
    events[func] = (ev) => event(ev, element, element.state, element.context)
  }
  return events
}

export function applyChildren (element, reactElem) {
  let { props, text } = element
  const { text: propText } = props
  const childElems = getCapitalCaseKeys(element)
  text = text || propText
  return childElems.map(k => {
    const childElem = element[k]
    const childProps = childElem.props
    const key = k || childElem.key
    const ref = useRef(null)
    ref.element = childElem
    delete reactElem[key]
    if (childElem?.if?.(childElem, childElem.state, childElem.context)) return
    const Base = childProps.spriteId ? Icon : childProps.avatarType ? Avatar : Box
    return <Base ref={ref} key={key} />
  }).concat(props.children).concat([text]).filter(v => v)
}

export function useSymbols (props, ref, key) {
  ref = ref || useRef(null)
  let node = ref.current

  const elem = checkIfSugar(props) ? { props, node } : { extend: props, node }
  const hasRefElem = ref.element || props?.__element
  const elemKey = key || `${Math.random()}`
  const element = hasRefElem || DOM.create(elem, useRoot(), elemKey, { 
    onlyResolveExtends: true
  })

  if (ENV === 'test' || ENV === 'development' || options.alowRefReference) {
    ref.element = element
  }

  React.useEffect(() => {
    node = element.node = element.node || ref.current
    if (node) node.ref = element
  }, [ref]); // Empty dependency array - runs once on mount
  
  const tag = element.tag
  const attrs = filterAttributesByTagName(tag, element.props)
  const propsClassname = getClassnameFromProps(element)
  const className = `${propsClassname ?? ''} ${element.props.class ?? ''} ${props.className ?? ''}`.trim()
  const events = extractEvents(element)
  
  const reactElem = { tag, ref, ...attrs, ...events, className }
  if (element.html) reactElem.dangerouslySetInnerHTML = { __html: element.html }
  const children = applyChildren(element, reactElem)
  if (children.length) reactElem.children = children

  return reactElem
}

export function createSymbols () {

}

export function pairStateUpdates (state, setState) {
  const rootData = useRoot().data
  const { listeners } = rootData
  listeners.push((_, el, s) => setState({ ...s }))
  state.__element.on.stateUpdate = (...args) => {
    listeners.forEach(fn => fn(...args))
  }
}

// export const createComponent = React.forwardRef((...args) => {
//   const element = useSymbols(args, Orig)
//   console.log({element})
//   return jsx(Box, element)
// })
