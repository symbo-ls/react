// Original: DOMQL
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

// Converted: React
import * as React from "react"
import { useRef, useContext } from "react"
import { createSkeleton } from "@symbo.ls/create"
import { Flex, SymbolsProvider } from "@symbo.ls/react"

import { Icon } from "./1. Icon"

export function IconText (props) {
  const context = useContext(SymbolsProvider)
  const ref = useRef(null)
  const ref_Icon = useRef(null)

  function Icon_if({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon
    return doesExist
  }

  const { domqlElementObject, ...props } = props
  const dobj = createSkeleton({
    extend: [{ props }, original],
    context
  })

  dobj.node = ref.current

  const dobj_Icon = dobj["Icon"]
  dobj_Icon.node = ref_Icon.current

  return (
    <Flex
      align="center center"
      lineHeight={1}
      ref={ref}
      domqlElementObject={dobj}
      {...dobj.props}
    >
      {Icon_if(dobj_Icon) ? (
        <Icon
          ref={ref_Icon}
          domqlElementObject={dobj_Icon}
          {...dobj_Icon.props}
        />
      ) : null}
    </Flex>
  )
}
