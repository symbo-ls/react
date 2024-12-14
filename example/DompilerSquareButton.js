import * as React from 'react'
import { jsx } from 'react/jsx-runtime'
import { useRef, useContext } from 'react'
import { SymbolsProvider } from '@symbo.ls/react'
import { createSkeleton } from 'smbls'
import { Button } from './DompilerButton'
const orig = {
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
export const SquareButton = React.forwardRef((defProps, defRef) => {
  const defcontext = useContext(SymbolsProvider)
  const ref = defRef || useRef(null)
  const { domqlElementObject, ...props } = defProps
  let dobj
  try {
    dobj = domqlElementObject || createSkeleton({
      extend: [{
        props
      }, orig],
      context: defcontext
    })
  } catch (e) {
    console.log(e)
  }
  dobj.node = ref.current
  return jsx(Button, {
    ref,
    domqlElementObject: dobj,
    ...dobj.props,
    fontSize: 'A',
    width: 'A',
    padding: 'Z',
    aspectRatio: '1 / 1',
    icon: 'smile',
    boxSize: 'fit-content fit-content',
    justifyContent: 'center',
    round: 'Z',
    boxSizing: 'content-box'
  })
})
