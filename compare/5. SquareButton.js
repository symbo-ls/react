// Original: DOMQL
const original = {
  extend: 'Button',
  props: {
    fontSize: 'A',
    width: 'A',
    padding: 'Z',
    aspectRatio: '1 / 1',
    icon: 'smile',
    boxSize: 'fit-content fit-content',
    justifyContent: 'center',
    round: 'Z',
    boxSizing: 'content-box'
  }
}

// Converted: React
import * as React from "react"
import { useRef, useContext } from "react"
import { createSkeleton } from "@symbo.ls/create"
import { SymbolsProvider } from "@symbo.ls/react"

import { Button } from "./4. Button"

export function SquareButton (props) {
  const context = useContext(SymbolsProvider);
  const ref = useRef(null);
  
  const { domqlElementObject, ...props } = props
  const dobj = createSkeleton({
    extend: [{ props }, original],
    context
  })

  dobj.node = ref.current
  
  return (
    <Button
      fontSize="A"
      width="A"
      padding="Z"
      aspectRatio="1 / 1"
      icon="smile"
      boxSize="fit-content fit-content"
      justifyContent="center"
      round="Z"
      boxSizing="content-box"
      ref={ref}
      domqlElementObject={dobj}
      {...dobj.props}
    />
  );
}
