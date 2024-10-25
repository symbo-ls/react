'use strict '

import React, { forwardRef } from 'react'
import { jsx } from 'react/jsx-runtime'
// import { transformEmotion, transformClassname } from 'css-in-props'
// import { useGlobalTheme, useSymbols } from '@symbo.ls/react-provider'
// import { isArray } from '@domql/utils'
// import { filterAttributesByTagName } from 'attrs-in-props'
// import { createSkeleton } from '@symbo.ls/create'

import { useSymbols, createComponent } from '../Provider'

export const Box = forwardRef((...args) => {
  let [ props, ref, key ] = args
  const element = useSymbols({}, { props, ref, key })
  const { update, __element, tag, text, ...restProps } = element

  // console.warn('restProps in Box')
  // console.log(restProps)
  return jsx(tag || 'div', restProps, key)
  // return createComponent(Orig, { props, ref, key })
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