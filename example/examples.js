import * as React from 'react'
import { jsx } from 'react/jsx-runtime'
import { useSymbols, useSymbolsChildren, Box } from '@symbo.ls/react'

const OrigRow = { /* ... */ }

export const Row = React.forwardRef((...args) => {
  const element = useSymbols(args, OrigRow)
  return jsx(Box, element)
})

// 
// ================================================
// 

import { Column } from './Column'

const OrigRowChildren = { 
  Column: {},
}

export const RowChildren = React.forwardRef((...args) => {
  const element = useSymbols(args, OrigRowChildren)

  // children
  // {
  //  Column
  // }
  // const mapChildren = useSymbolsChildren(children)
  
  return jsx(Box, {
    ...element,
    children: [jsx(Column, element.Column)]
    // [useSymbolsChild(children.Column, Column)]
  })
})

// 
// ================================================
// 

import { useEffect } from 'react'
import { Button } from './Button'

const OrigRowWithState = { 
  state: { active: true },

  Button: {
    onClick: (ev, el, s) => {
      // ...
      s.update({ active: !s.active })
      // ...
      s.update({
        1: true,
        2: false
      })
      // ...
    }
  }
}

export const RowWithState = React.forwardRef((...args) => {
  const element = useSymbols(args, OrigRowWithState)
  useEffect(() => {}, [element])
  return jsx(Box, {
    ...element,
    children: [
      element.Button.if(element.Button, element.Button.state) && jsx(Button, element.Button)
    ]
  })
})

// const { props } = args
// useEffect(() => { element.setProps({ props }) }, [element])

// 
// ================================================
// 

export const RowStateHooks = React.forwardRef((props, ref) => {
  const [state, setState] = useState(OrigRowState.state)
  const element = useSymbols({ props, state, ref }, OrigRowState)

  const updateState = (newState) => {
    setState((prevState) => deepMerge({}, prevState, newState));
  };

  // const element_Button = element.Button
  const RowState_Button = jsx(Button, deepMerge({
    onClick: (ev) => {
      // element_Button.onClick(ev, element_Button, element_Button.state)
      // ...
      setState({ active: !state.active })
      // ...
      setState({
        1: true,
        2: false
      })
      // ...
    }
  }, element.Button))
  
  return jsx(Box, {
    ...element,
    children: [RowState_Button]
  })
})