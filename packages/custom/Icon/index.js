'use strict'

import { isString } from '@domql/utils'
import { Svg, Text, Flex } from '@symbo.ls/react-atoms'

import * as D from '@symbo.ls/icon'

import React from 'react'

export const Icon = (props) => {
  const { name, iconModifier, ...restProps } = props
  return (
    <Svg {...restProps}>
      {name ? <use xlinkHref={`#${name}${iconModifier}`} /> : props.children}
    </Svg>
  )
}

Icon.defaultProps = {
  iconModifier: '',
  width: 'A',
  height: 'A',
  display: 'inline-block',
  style: { fill: 'currentColor' }
}

export const IconText = (props) => {
  const iconName = props.icon || props.name
  const iconModifier = props.iconModifier || ''
  const iconPosition = props.iconPosition || 'start'
  const IconComponent = <Icon name={iconName} iconModifier={iconModifier} />

  return (
    <Flex tag={props.tag} alignItems='center' {...props}>
      {iconName && iconPosition === 'start' ? IconComponent : null}
      {props.children}
      {iconName && iconPosition === 'end' ? IconComponent : null}
    </Flex>
  )
}

IconText.defaultProps = D.IconText.props
