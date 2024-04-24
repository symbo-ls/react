// Original: DOMQL
const original = {
  extend: ['IconText', 'FocusableComponent'],
  tag: 'button',

  props: {
    fontSize: 'A',
    type: 'button',
    borderStyle: 'none',
    display: 'inline-flex',
    align: 'center center',
    textDecoration: 'none',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    padding: 'Z B2',
    fontWeight: '500',
    fontFamily: 'inherit',
    round: 'C2'
  },

  attr: {
    type: ({ props }) => props.type
  }
}

// Converted: React
import * as React from "react"
import { useRef, useContext } from "react"
import { createSkeleton } from "@symbo.ls/create"
import { SymbolsProvider } from "@symbo.ls/react"

import { IconText } from "./2. IconText"

export function Button (props) {
  const context = useContext(SymbolsProvider);
  const ref = useRef(null);
  const ref_Svg = useRef(null);
  
  const { domqlElementObject, ...props } = props
  const dobj = createSkeleton({
    extend: [{ props }, original],
    context
  })

  dobj.node = ref.current

  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  return (
    <IconText
      // inherit from FocusableComponent
      {...FocusableComponent.props}
      // ...
      // fontSize="A"
      // type="button"
      // border="none"
      // textDecoration="none"
      // lineHeight="1"
      // whiteSpace="nowrap"
      // fontFamily="inherit"
      // 

      ref={ref}
      domqlElementObject={dobj}
      {...dobj.props}
      type={original.attr.type(dobj)}

      // inherit attrs from FocusableComponent
      {...FocusableComponent.attr}
      // ...
      // placeholder={FocusableComponent.attr.placeholder(dobj)}
      // tabIndex={FocusableComponent.attr.tabIndex(dobj)}
      // 
    />
  );
}
