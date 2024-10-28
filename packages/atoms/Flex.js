'use strict'

import React from 'react'
import { Flex as smbmsFlex } from '@symbo.ls/atoms'
import { Box } from '@symbo.ls/react-box'
import { transformEmotion, transformClassname } from 'css-in-props'

import { useRef } from 'react'
import { useSymbolsContext } from '@symbo.ls/react-provider'

export const Flex = (props) => {
  const ref = useRef(null)
  const context = useSymbolsContext()

  const element = {
    context,
    class: {}
  }
  const excludedProps = {}

  const transformedProps = transformClassname(props, undefined, smbmsFlex.class, excludedProps, element)
  const propsClass = transformEmotion(transformedProps)

  return (
    <Box tag={props.tag} className={propsClass} ref={ref} {...excludedProps}>
      {props.children}
    </Box>
  )
}

Flex.default = smbmsFlex.props
