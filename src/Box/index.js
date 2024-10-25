'use strict '

import React, { forwardRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { useSymbols, useRoot } from '../Provider'

export const Box = forwardRef((...args) => {
  let [ props, ref, key ] = args

  // Create element using your useSymbols hook
  const smbls = useSymbols(ref?.element || props.orig || {}, { props, ref })
  const element = smbls.ref.element
  const elementState = element?.state
  key = key || element.key

  console.log(key, smbls)
  const { update, __element, tag, text, ...reactElement } = smbls
  const [state, setState] = React.useState(elementState)

  const rootData = useRoot().data
  const { listeners } = rootData
  listeners.push((_, el, s) => setState({ ...s }))
  elementState.__element.on.stateUpdate = (...args) => {
    listeners.forEach(fn => fn(...args))
  }

  React.useEffect(() => element.update(), [state])

  return jsx(tag || 'div', reactElement, key)
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