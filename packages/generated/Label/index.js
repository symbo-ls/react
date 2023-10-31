import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";

const orig = {
  props: {
    text: '-2.902x',
    fontSize: 'Y',
    background: '#F4454E',
    boxSize: 'fit-content fit-content',
    padding: 'W Y',
    round: 'Y'
  },
  __name: 'CardLabel'
};

export function CardLabel(props) {
  const ref_Box = useRef(null);

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
      text="-2.902x"
      fontSize="Y"
      background="#F4454E"
      boxSize="fit-content fit-content"
      padding="W Y"
      round="Y"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}

import { css } from "@emotion/css";

const orig_2 = {
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
    text: '-2.902x',
    fontSize: 'X2',
    boxSize: 'fit-content fit-content',
    background: '#F4454E',
    padding: 'W2 Y2',
    round: 'Y1',
    fontWeight: '400'
  },
  __name: 'Label'
};

export function Label(props) {
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
      text="-2.902x"
      fontSize="X2"
      boxSize="fit-content fit-content"
      background="#F4454E"
      padding="W2 Y2"
      round="Y1"
      fontWeight="400"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}

import { Svg } from "@symbo.ls/react-atoms";

const orig_3 = {
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
  props: {
    theme: 'tertiary',
    fontSize: 'Z2',
    emoji: '👍',
    text: '3',
    padding: 'X2 Z',
    round: 'C',
    lineHeight: 1,
    gap: 'X2',
    fontWeight: '500'
  },
  emoji: {
    props: ({ parent }) => ({ text: parent.props.emoji })
  },
  __name: 'LabelButton'
};

export function LabelButton(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Svg = useRef(null);
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
      ...deepMerge(cleanProps, orig_3),
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
  const dobj_Box = dobj["emoji"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      theme="tertiary"
      fontSize="Z2"
      emoji="👍"
      text="3"
      padding="X2 Z"
      round="C"
      gap="X2"
      fontWeight="500"
      type="button"
      border="none"
      display="inline-flex"
      align="center center"
      textDecoration="none"
      whiteSpace="nowrap"
      fontFamily="inherit"
      outline="solid, 0, blue .3"
      tag="button"
      ref={ref_Box}
      lineHeight={1}
      style={{
        appearance: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
      }}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      type={attr_type(dobj)}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      <Box
        inheritedString="👍"
        text="👍"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      {show_Svg(dobj_Svg) ? (
        <Svg
          width="A"
          height="A"
          display="inline-block"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ref={ref_Svg}
          style={{
            fill: "currentColor",
            "*": {
              fill: "currentColor",
            },
          }}
          dangerouslySetInnerHTML={{ __html: html(dobj_Svg) }}
          {...dobj_Svg.props}
          domqlElementObject={dobj_Svg}
        />
      ) : null}
    </Box>
  );
}
