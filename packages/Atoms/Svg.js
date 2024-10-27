'use strict'

import { forwardRef } from 'react'
import { Box } from '@symbo.ls/react-box'

export const Svg = forwardRef((p, ref) => {
  const { spriteId, ...props } = p
  return (
    <Box tag='svg' ref={ref} {...props}>
      {props.children}
    </Box>
  )
})

Svg.default = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  style: { '*': { fill: 'currentColor' } }
}
