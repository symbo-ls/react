'use strict'

import * as D from '@symbo.ls/avatar'

import React, { forwardRef } from 'react'
import { Img } from '../Atoms/Img'

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
