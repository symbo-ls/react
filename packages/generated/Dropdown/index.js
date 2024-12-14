import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
import { Svg } from "@symbo.ls/react-atoms";
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
    padding: '0 Y',
    maxHeight: 'G',
    flow: 'column',
    theme: 'quaternary',
    overflow: 'hidden auto',
    style: {listStyleType: 'none'}
  },
  childExtend: {
    extend: {
      extend: [
        {
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
            align: 'center center',
            lineHeight: 1
          },
          Icon: {
            props: ({ parent, props }) => ({ icon: parent.props.icon }),
            if: ({ parent, props }) => {
      const doesExist = parent.props.icon || parent.props.Icon || props.name || props.icon;
      return doesExist;
    }
          },
          text: ({ props }) => props.text,
          '.reversed': {
            props: {flow: 'row-reverse'}
          },
          '.vertical': {
            props: {flow: 'column'}
          }
        },
        {
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
          tag: 'button',
          props: {
            fontSize: 'A',
            type: 'button',
            border: 'none',
            textDecoration: 'none',
            lineHeight: '1',
            whiteSpace: 'nowrap',
            fontFamily: 'inherit',
            style: {
              appearance: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }
          },
          attr: {
            type: ({ props }) => props.type
          }
        }
      ],
      tag: 'button',
      props: {
        fontSize: 'A',
        type: 'button',
        border: 'none',
        display: 'inline-flex',
        align: 'center center',
        textDecoration: 'none',
        lineHeight: '1',
        whiteSpace: 'nowrap',
        padding: 'Z A1',
        fontFamily: 'inherit',
        round: 'C2'
      },
      attr: {
        type: ({ props }) => props.type
      }
    },
    state: {},
    props: ({ key, state }) => ({
      active: state.active === key,
      position: "relative",
      round: "0",
      align: "center flex-end",
      flow: "row-reverse",
      padding: "Z2 C Z2 Y2",
      margin: "0",
      gap: "Y2",
      theme: "quaternary .child",
      ":hover": {
        style: {
          svg: { opacity: "0.5" }
        }
      },
      Icon: {
        active: state.active === key,
        name: "checkmark",
        opacity: "0.1",
        ".active": { opacity: "1" }
      },
      ":not(:first-child)": {
        "@dark": { border: "gray4 .65, solid" },
        "@light": { border: "gray11, solid" },
        borderWidth: "1px 0 0"
      }
    })
  },
  $setPropsCollection: ({ props }) => props.options,
  __name: 'DropdownList'
};

export function DropdownList(props) {
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

  function props_filter({ props }) {
    return props.options;
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

  function flow_2({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_2({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_2({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type({ props }) {
    return props.type;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
  }

  function show_Svg({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
  }

  function html({ key, props: props4, context, deps, ...el2 }) {
    const { designSystem } = context;
    const SVG = designSystem && designSystem.SVG;
    const useSvgSprite =
      props4.spriteId ||
      (context.designSystem && context.designSystem.useSvgSprite);
    if (!useSvgSprite && props4.src) return props4.src;
    const useSVGSymbol = (icon) => `<use xlink:href="#${icon}" />`;
    const spriteId = props4.spriteId;
    if (spriteId) return useSVGSymbol(spriteId);
    const symbolId = Symbol.for(props4.src);
    let SVGKey = SVG[symbolId];
    if (SVGKey && SVG[SVGKey]) return useSVGSymbol(SVGKey);
    SVGKey = SVG[symbolId] = Math.random();
    if (props4.src) {
      deps.init(
        {
          svg: {
            [SVGKey]: props4.src,
          },
        },
        {
          document: context.document,
          emotion: context.emotion,
        }
      );
    }
    return useSVGSymbol(SVGKey);
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      padding="0 Y"
      maxHeight="G"
      flow="column"
      theme="quaternary"
      overflow="hidden auto"
      display="flex"
      tag="div"
      ref={ref_Box}
      style={{
        listStyleType: "none",
      }}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      {setPropsCollection(dobj, dobj["childExtend"], props_filter(dobj))?.map(
        (item) => (
          <Box
            position="relative"
            round="0"
            align="center flex-end"
            flow="row-reverse"
            padding="Z2 C Z2 Y2"
            margin="0"
            gap="Y2"
            theme="quaternary .child"
            fontSize="A"
            type="button"
            border="none"
            display="inline-flex"
            textDecoration="none"
            lineHeight="1"
            whiteSpace="nowrap"
            fontFamily="inherit"
            outline="solid, 0, blue .3"
            tag="button"
            Icon={{
              props: {
                active: false,
                name: "checkmark",
                opacity: "0.1",
                ".active": {
                  opacity: "1",
                },
              },
              __ref: undefined,
            }}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_2(dobj))} ${css(wrap_2(dobj))} ${css(
              align_2(dobj)
            )}`}
            {...dobj.props}
            type={attr_type(dobj)}
            placeholder={attr_placeholder(dobj)}
            tabIndex={attr_tabIndex(dobj)}
            domqlElementObject={dobj}
          >
            {show_Svg(item) ? (
              <Svg
                name="checkmark"
                opacity="0.1"
                width="A"
                height="A"
                display="inline-block"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "currentColor",
                  "*": {
                    fill: "currentColor",
                  },
                }}
                dangerouslySetInnerHTML={{ __html: html(item) }}
                {...item.props}
                domqlElementObject={item}
              />
            ) : null}
          </Box>
        )
      )}
    </Box>
  );
}

const orig_2 = {
  props: {
    position: 'relative',
    zIndex: 999,
    style: {
      '&:hover': {
        zIndex: 1000,
        '& [dropdown]': {
          transform: 'translate3d(0,0,0)',
          opacity: 1,
          visibility: 'visible'
        }
      }
    }
  },
  __name: 'DropdownParent'
};

export function DropdownParent(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...createSync({
      ...deepMerge(cleanProps, orig_2),
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
      position="relative"
      tag="div"
      ref={ref_Box}
      zIndex={999}
      style={{
        "&:hover": {
          zIndex: 1000,
          "& [dropdown]": {
            transform: "translate3d(0,0,0)",
            opacity: 1,
            visibility: "visible",
          },
        },
      }}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
