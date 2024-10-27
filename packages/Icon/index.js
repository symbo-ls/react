'use strict'

import { Svg, Flex } from '@symbo.ls/react-atoms'
import * as D from '@symbo.ls/icon'
import { forwardRef } from 'react'

export const Icon = forwardRef((props, ref) => {
  const { name, iconModifier, ...restProps } = props
  return (
    <Svg {...restProps} ref={ref}>
      {name ? <use xlinkHref={`#${name}${iconModifier}`} /> : props.children}
    </Svg>
  )
})

Icon.default = {
  iconModifier: '',
  width: 'A',
  height: 'A',
  display: 'inline-block',
  style: { fill: 'currentColor' }
}

export const IconText = forwardRef((props, ref) => {
  const iconName = props.icon || props.name
  const iconModifier = props.iconModifier || ''
  const iconPosition = props.iconPosition || 'start'
  const IconComponent = <Icon {...props.Icon} name={iconName} iconModifier={iconModifier} />

  return (
    <Flex tag={props.tag} alignItems='center' ref={ref} {...props}>
      {iconName && iconPosition === 'start' ? IconComponent : null}
      {props.children}
      {iconName && iconPosition === 'end' ? IconComponent : null}
    </Flex>
  )
})

IconText.default = D.IconText.props
