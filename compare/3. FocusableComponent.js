// 
export const Focusable = {
  props: {
    border: 'none',
    outline: 'solid, 0, blue .3',
    ':focus-visible': {
      opacity: 1,
      outline: 'solid, X, blue .3'
    }
  },

  attr: {
    placeholder: ({ props }) => props.placeholder,
    tabIndex: ({ props }) => props.tabIndex
  }
}

// Original: DOMQL
export const original = {
  extend: 'Focusable',
  tag: 'button',
  props: {
    fontSize: 'A',
    type: 'button',
    border: 'none',
    textDecoration: 'none',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
    appearance: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit'
  },
  attr: {
    type: ({ props }) => props.type
  }
}

// Converted: React
import * as React from "react";
import { useRef, useContext } from "react";
import { createSkeleton } from "@symbo.ls/create"
import { Focusable, SymbolsProvider } from "@symbo.ls/react";

export function FocusableComponent (props) {
  const context = useContext(SymbolsProvider);
  const ref = useRef(null);

  function attr_type({ props }) {
    return props.type;
  }
  
  const { domqlElementObject, ...props } = props
  const dobj = createSkeleton({
    extend: [{ props }, original],
    context
  })

  dobj.node = ref.current

  if (props.logElement)
    console.log(dobj)

  return (
    <Focusable
      fontSize="A"
      type="button"
      border="none"
      textDecoration="none"
      lineHeight="1"
      whiteSpace="nowrap"
      fontFamily="inherit"
      ref={ref}
      type={attr_type(dobj)}
      domqlElementObject={dobj}
      {...dobj.props}
    />
  );
}
