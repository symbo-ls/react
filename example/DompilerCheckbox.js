import * as React from 'react'
import { jsx } from 'react/jsx-runtime'
import { useRef, useContext } from 'react'
import { SymbolsProvider, useSymbolsContext, Input, Icon, Focusable } from '@symbo.ls/react'
import { createSkeleton } from 'smbls'
const orig = {
  extend: 'Focusable',
  tag: 'label',
  props: {
    boxSize: 'fit-content fit-content',
    cursor: 'pointer',
    round: 'Y'
  },
  Input: {
    props: {
      type: 'checkbox',
      display: 'none',
      ':checked + div': {
        theme: 'primary'
      },
      ':checked + div > svg': {
        transform: 'none',
        opacity: '1'
      }
    },
    attr: {
      checked: ({ parent }) => {
        return parent.props.checked
      }
    }
  },
  Icon: {
    props: {
      align: 'center center',
      fontSize: 'B1',
      padding: 'V',
      theme: 'field',
      round: 'X2',
      transition: 'background A defaultBezier'
    },
    Icon: {
      props: {
        icon: 'check',
        opacity: '0',
        transform: 'scale(0.9) rotate(-15deg)',
        transition: 'opacity B defaultBezier'
      }
    }
  }
}
export const Checkbox = React.forwardRef((defProps, defRef) => {
  const context = useSymbolsContext()
  const ref = defRef || useRef(null)
  const { domqlElementObject, ...props } = defProps
  let dobj
  try {
    dobj = domqlElementObject || createSkeleton({
      extend: [{
        props
      }, orig],
      context
    })
  } catch (e) {
    console.log(e)
  }
  dobj.node = ref.current
  const ref_Input = defRef || useRef(null)
  const dobj_Input = dobj.Input
  dobj_Input.node = ref_Input.current
  const ref_Icon = defRef || useRef(null)
  const dobj_Icon = dobj.Icon
  dobj_Icon.node = ref_Icon.current

  return jsx(Focusable, {
    ref,
    domqlElementObject: dobj,
    ...dobj.props,
    children: [
      // ...
      // ...
      jsx(Icon, {
        ref: ref_Icon,
        domqlElementObject: dobj_Icon,
        ...dobj_Icon.props,

        // ...
        // ...

        children: [
          // ...
          // ...
          jsx(Icon, {
            ref: ref_Icon,
            domqlElementObject: dobj_Icon,
            ...dobj_Icon.props
          })
        ]
      })
    ],
    boxSize: 'fit-content fit-content',
    cursor: 'pointer',
    round: 'Y'
  })
})
