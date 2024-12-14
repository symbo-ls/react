'use strict'

import React, { useRef } from 'react'
import { Flex as smbmsFlex } from '@symbo.ls/atoms'
import { Box } from '@symbo.ls/react-box'
import { transformEmotion, transformClassname } from 'css-in-props'
import { useSymbols } from '@symbo.ls/react-provider'

export const Flex = (props) => {
  const ref = useRef(null)
  const context = useSymbols()

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

Flex.defaultProps = smbmsFlex.props
