'use strict '

import React, { forwardRef } from 'react'
import { useSymbols, useRoot, useSymbolsContext, pairStateUpdates } from '@symbo.ls/react-provider'
import { jsx } from 'react/jsx-runtime'

export const Box = forwardRef((...args) => {
  let [ props, ref, key ] = args
  const smbls = useSymbols(props, ref, key)
  ref = smbls.ref
  const element = ref.element
  const elementState = element?.state
  key = key || element.key

  const [state, setState] = React.useState(elementState)

  const context = useSymbolsContext()
  // console.log('context')
  // console.log(key, ref, context)
  // console.log(smbls)
  // console.log(reactElement)
  // console.log('')

  pairStateUpdates(elementState, setState)
  
  React.useEffect(() => { element.update() }, [state])

  const { tag,...reactElement } = smbls
  const reactElem = jsx(tag || 'div', reactElement, key)

  // if (!ref.element) context

  return reactElem
})


  // console.log('element', element)
  // return jsx(element.tag || 'div', element, key)
  // const css = transformClassname(
  //   props,
  //   element.class,
  //   excludedProps,
  //   {
  //   ...element,
  //   context,
  //   node: ref,
  //   class: {}
  // })
  // const className = transformEmotion(css)
  // console.log(className)

  
  // return React.createElement(
  //   tag || 'div',
  //   {
  //     // ...allowedAttributes,
  //     className: `${className ?? ''} ${propsClass}`,
  //     ref
  //   },
  //   // children
  // )

  // const context = useSymbolsContext()
  // const [theme, setTheme] = useGlobalTheme() // eslint-disable-line no-unused-vars

  // const element = props.element || createSkeleton({ context })

  // const excludedProps = {}

  // console.log('element.class')
  // console.log(element.class)
  // const transformedProps = transformClassname(props, context, element.class, excludedProps, {
  //   ...element,
  //   context,
  //   node: ref,
  //   class: {}
  // })
  // const propsClass = transformEmotion(transformedProps)

  // let {
  //   children,
  //   tag,
  //   className,
  //   text,
  //   // element,
  //   ...rest
  // } = excludedProps

  // const allowedAttributes = filterAttributesByTagName(tag, rest)

  // if (props.text) {
  //   if (isArray(children)) children = children.concat(text)
  //   else children = [text]
  // }