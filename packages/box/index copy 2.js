'use strict '

import React, { forwardRef } from 'react'
import { transformEmotion, transformClassname } from 'css-in-props'
import { useGlobalTheme, useSymbols } from '@symbo.ls/react-provider'
import { isArray } from '@domql/utils'
import { filterAttributesByTagName } from 'attrs-in-props'
import { create } from '@symbo.ls/create'

export const Box = forwardRef((props, ref) => {
  const context = useSymbolsContext()
  const [theme, setTheme] = useGlobalTheme() // eslint-disable-line no-unused-vars

  const domqlElement = props.domqlElementObject || create({
    context
  }, { domqlOptions: { onlyResolveExtends: true } })

  const element = {
    ...domqlElement,
    context,
    node: ref,
    class: {}
  }
  const excludedProps = {}

  const transformedProps = transformClassname(props, context, undefined, excludedProps, element)
  const propsClass = transformEmotion(transformedProps)

  let {
    children,
    tag,
    className,
    text,
    innerRef,
    domqlElementObject,
    ...rest
  } = excludedProps

  const allowedAttributes = filterAttributesByTagName(tag, rest)

  if (props.text) {
    if (isArray(children)) children = children.concat(text)
    else children = [text]
  }

  return React.createElement(
    tag || 'div',
    {
      ...allowedAttributes,
      className: `${className ?? ''} ${propsClass}`,
      ref
    },
    children
  )
})
