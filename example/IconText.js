// Original: DOMQL
// Converted: React
import * as React from 'react'
import { useRef, useContext } from 'react'
import { createSkeleton } from '@symbo.ls/create'
import { Box, Flex, SymbolsProvider, Icon } from '@symbo.ls/react'

const original = {
  extend: 'Flex',

  props: {
    align: 'center center',
    lineHeight: 1
  },

  Icon: {
    props: ({ parent }) => ({ icon: parent.props.icon }),
    if: ({ parent, props }) => {
      const doesExist = parent.props.icon || parent.props.Icon || props.name || props.icon
      return doesExist
    }
  },

  text: ({ props }) => props.text
}

export const IconText = React.forwardRef((defProps, defRef) => {
  const context = useContext(SymbolsProvider)
  const ref = useRef(null)
  const ref_Icon = useRef(null)

  const { domqlElementObject, ...props } = defProps
  const dobj = domqlElementObject || createSkeleton({
    extend: [{ props }, original],
    context
  })

  dobj.node = ref.current

  const dobj_Icon = dobj.Icon
  dobj_Icon.node = ref_Icon.current

  return (
    <Flex
      align='center center'
      lineHeight={1}
      innerRef={ref}
      domqlElementObject={dobj}
      {...dobj.props}
    >
      {original.Icon.if(dobj_Icon)
        ? (
          <Icon
            ref={ref_Icon}
            domqlElementObject={dobj_Icon}
            {...dobj_Icon.props}
          />
          )
        : null}
    </Flex>
  )
})
