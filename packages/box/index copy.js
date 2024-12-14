import _extends from '@babel/runtime/helpers/esm/extends'
import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2'
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties'
import * as React from 'react'
import { useRef, useImperativeHandle, forwardRef } from 'react'
import { transformClassname, transformEmotion } from 'css-in-props'

function B (props, ref) {
  const className = props.className
  const href = props.href
  const target = props.target
  const ariaLabel = props.ariaLabel
  const src = props.src
  const alt = props.alt
  const title = props.title
  const type = props.type
  const name = props.name
  const checked = props.checked
  const id = props.id
  const onClick = props.onClick
  const restProps = _objectWithoutProperties(props, ['tag', 'className'])

  const domRef = useRef(null)
  useImperativeHandle(ref, function () {
    return domRef.current
  })

  const extraProps = _objectSpread({}, restProps, restProps.props)

  const tag = props.tag || extraProps.tag || 'div'

  const children = props.text ? props.text : props.children

  const propsClass = transformEmotion(transformClassname(props))

  const style = { ...props.style }

  return /* #DOMQL GOES HERE */ React.createElement(
    tag,
    _extends({
      className: `${className ?? ''} ${propsClass}`,
      ref: domRef,
      style,
      href,
      target,
      src,
      alt,
      type,
      name,
      checked,
      id,
      onClick,
      title,
      'aria-label': ariaLabel
    }),
    children
  )
};

export const Box = forwardRef(B)
