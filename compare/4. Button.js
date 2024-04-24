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

  function attr_type({ props }) {
    return props.type;
  }

  // inherited from FocusableComponent
  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
  }
  // 
  
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
      // inherited from FocusableComponent
      fontSize="A"
      type="button"
      border="none"
      textDecoration="none"
      lineHeight="1"
      whiteSpace="nowrap"
      fontFamily="inherit"
      // 

      ref={ref}
      domqlElementObject={dobj}
      {...dobj.props}
      type={attr_type(dobj)}

      // inherited from FocusableComponent
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      // 
    />
  );
}
