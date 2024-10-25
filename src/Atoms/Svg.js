'use strict'

import React, { useRef } from 'react'
import { Box } from '../Box'

export const Svg = (p) => {
  const ref = useRef(null)
  const { spriteId, ...props } = p
  return (
    <Box tag='svg' ref={ref} {...props}>
      {props.children}
    </Box>
  )
}

Svg.default = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  style: { '*': { fill: 'currentColor' } }
}
