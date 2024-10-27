import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { create } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
import { css } from "@emotion/css";

const orig = {
  extend: {
    props: {display: 'flex'},
    class: {
      flow: ({ props }) => props.flow && { flexFlow: props.flow },
      wrap: ({ props }) => props.wrap && { flexWrap: props.wrap },
      align: ({ props }) => {
      if (typeof props.align !== "string")
        return;
      const [alignItems, justifyContent] = props.align.split(" ");
      return { alignItems, justifyContent };
    }
    }
  },
  props: {
    gap: 'Y2',
    childProps: {
      boxSize: 'Y2',
      round: 'A',
      theme: 'tertiary',
      '!active': {theme: 'tertiary'},
      '.active': {theme: 'primary'}
    }
  },
  childExtend: {
    props: ({ key, state, parent }) => ({
      active: parseInt(key) === parseInt(state.active || parent.props.active)
    }),
    on: {
      click: (e, el) => {
        el.state.update({ active: parseInt(el.key) });
      }
    }
  },
  $setPropsCollection: ({ props, state }) => new Array(props.qty).fill({}),
  __name: 'Pills'
};

export function Pills(props) {
  const ref_Box = useRef(null);
  function flow({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function props_filter({ props, state }) {
    return new Array(props.qty).fill({});
  }

  function setPropsCollection(parent2, childExtend, childrenOverrides) {
    if (!childrenOverrides || childrenOverrides.length === 0) return [];
    return childrenOverrides
      .map((value2) => ({
        props:
          value2 !== null && typeof value2 === "object"
            ? value2
            : {
                value: value2,
              },
      }))
      .map((ovr, idx) => ({
        key: idx.toString(),
        tag: childExtend.tag ?? "div",
        context: childExtend.context ?? parent2.context,
        state: childExtend.state,
        // NOTE: props skipped deliberately
        parent: parent2,
        ...ovr,
      }));
  }

  function Box_onClick(e, el) {
    setActive(parseInt(el.key));
    return;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="Y2"
      display="flex"
      tag="div"
      ref={ref_Box}
      childProps={{
        boxSize: "Y2",
        round: "A",
        theme: "tertiary",
        "!active": {
          theme: "tertiary",
        },
        ".active": {
          theme: "primary",
        },
      }}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      {setPropsCollection(dobj, dobj["childExtend"], props_filter(dobj))?.map(
        (item) => (
          <Box
            boxSize="Y2"
            round="A"
            theme="tertiary"
            tag="div"
            onClick={(ev) => Box_onClick(e, dobj)}
            {...dobj.props}
            domqlElementObject={dobj}
          />
        )
      )}
    </Box>
  );
}
