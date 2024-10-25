import * as React from 'react'
import { jsx } from 'react/jsx-runtime'
import { useRef, useContext } from 'react'
import { SymbolsProvider, Icon, Flex } from '@symbo.ls/react'
import { createSkeleton } from 'smbls'
const orig = {
  extend: 'Flex',
  props: {
    align: 'center center',
    lineHeight: 1
  },
  Icon: {
    props: ({ parent }) => {
      return ({
        icon: parent.props.icon
      })
    },
    if: ({ parent, props }) => {
      const doesExist = parent.props.icon || parent.props.Icon || props.name || props.icon
      return doesExist
    }
  },
  text: ({ props }) => {
    return props.text
  }
}
export const IconText = React.forwardRef((defProps, defRef) => {
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
  const ref_Icon = defRef || useRef(null)
  const dobj_Icon = dobj.Icon
  dobj_Icon.node = ref_Icon.current
  return jsx(Flex, {
    ref,
    domqlElementObject: dobj,
    ...dobj.props,
    align: 'center center',
    lineHeight: 1,
    children: jsx(Icon, {
      ref: ref_Icon,
      domqlElementObject: dobj_Icon,
      ...dobj_Icon.props
    })
  })
})
