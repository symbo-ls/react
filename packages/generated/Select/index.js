import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";

const orig = {
  extend: {
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
  },
  tag: 'select',
  props: {
    fontSize: 'A',
    border: 'none',
    boxSizing: 'border-box',
    theme: 'field',
    cursor: 'pointer'
  },
  childExtend: {
    tag: 'option',
    props: {
      value: '',
      selected: '',
      disabled: ''
    },
    attr: {
      value: ({ props }) => props.value,
      selected: ({ props }) => props.selected,
      disabled: ({ props }) => props.disabled
    }
  },
  attr: {
    name: ({ props }) => props.name,
    disabled: ({ props }) => props.disabled
  },
  __name: 'Select'
};

export function Select(props) {
  const ref_Box = useRef(null);
  function attr_name({ props }) {
    return props.name;
  }

  function attr_disabled({ props }) {
    return props.disabled;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...createSync({
      ...deepMerge(cleanProps, orig),
      context
    }, { 
      domqlOptions: { onlyResolveExtends: true } 
    })
  }

  dobj.node = ref_Box.current

  dobj.props = {
    ...dobj.props,
    ...props
  }
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      fontSize="A"
      border="none"
      boxSizing="border-box"
      theme="field"
      cursor="pointer"
      outline="solid, 0, blue .3"
      tag="select"
      ref={ref_Box}
      {...dobj.props}
      name={attr_name(dobj)}
      disabled={attr_disabled(dobj)}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    />
  );
}
