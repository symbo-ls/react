'use strict'

import React, { useRef } from 'react'
import { Box } from '@symbo.ls/react-box'

export const Svg = (props) => {
  const ref = useRef(null)
  return (
    <Box tag='svg' ref={ref} {...props}>
      {props.children}
    </Box>
  )
}

Svg.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  style: { '*': { fill: 'currentColor' } }
}
