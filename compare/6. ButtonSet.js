// Original: DOMQL
const original = {
  tag: 'nav',
  extend: 'Flex',
  childExtend: 'SquareButton',
  
  ok: {},
  cancel: {}
}

// Converted: React
import * as React from "react";
import { useRef, useContext } from "react";
import { Flex, SymbolsProvider } from "@symbo.ls/react";
import { createSkeleton } from "@symbo.ls/create"

import { SquareButton } from "./5. SquareButton";

export default function ComponentName (props) {
  const context = useContext(SymbolsProvider);
  const ref = useRef(null);
  const ref_ok = useRef(null);
  const ref_cancel = useRef(null);
  
  const { domqlElementObject, ...props } = props
  const dobj = domqlElementObject || createSkeleton({
    extend: [{ props }, original],
    context
  })

  dobj.node = ref.current

  const dobj_ok = dobj["ok"]
  dobj_ok.node = ref_ok.current

  const dobj_cancel = dobj["cancel"]
  dobj_cancel.node = ref_cancel.current

  return (
    <Flex
      ref={ref}
      domqlElementObject={dobj}
      {...dobj.props}
    >
      <SquareButton
        ref={ref_ok}
        domqlElementObject={dobj_ok}
        {...dobj_ok.props}
      />
      <SquareButton
        ref={ref_calcel}
        domqlElementObject={dobj_calcel}
        {...dobj_calcel.props}
      />
    </Flex>
  );
}
