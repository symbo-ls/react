'use strict'

import React from 'react'
import * as D from '@symbo.ls/avatar'
import { Img } from '@symbo.ls/react-atoms'
import { forwardRef } from 'react'

export const Avatar = forwardRef((props, ref) => {
  const { name, avatarType, ...restProps } = props
  return (
    <Img {...restProps} orig={ D.Avatar } ref={ref} />
  )
})

Avatar.default = {
  iconModifier: '',
  width: 'A',
  height: 'A',
  display: 'inline-block',
  style: { fill: 'currentColor' }
}
