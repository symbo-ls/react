import * as React from "react";
import { Box, IconText, Flex, P, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { create } from "@symbo.ls/create";
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
    theme: 'alert',
    padding: 'Z1 B Z A',
    round: 'A A A Y2',
    gap: 'X2',
    cursor: 'pointer',
    align: 'flex-start center'
  },
  IconText: {
    props: {icon: 'info outline'}
  },
  Flex: {
    props: {
      flow: 'column',
      align: 'flex-start',
      gap: 'X2'
    },
    Title: {
      props: {
        fontWeight: '600',
        lineHeight: '1em',
        text: 'Notification'
      }
    },
    P: {
      props: {
        fontSize: 'Z',
        margin: '0',
        text: 'is not always a distraction'
      }
    }
  },
  __name: 'Notification'
};

export function Notification(props) {
  const ref_Box = useRef(null);
  const ref_IconText = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_P = useRef(null);
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

  function flow_2({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_2({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_2({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_3({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_3({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_3({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function show_Svg({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
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
  const dobj_IconText = dobj["IconText"]
  dobj_IconText.node = ref_IconText.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["IconText"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box = dobj["Flex"]["Title"]
  dobj_Box.node = ref_Box_2.current
  const dobj_P = dobj["Flex"]["P"]
  dobj_P.node = ref_P.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      theme="alert"
      padding="Z1 B Z A"
      round="A A A Y2"
      gap="X2"
      cursor="pointer"
      align="flex-start center"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <IconText
        icon="info outline"
        align="center center"
        display="flex"
        ref={ref_IconText}
        lineHeight={1}
        className={`${css(flow_2(dobj_IconText))} ${css(
          wrap_2(dobj_IconText)
        )} ${css(align_2(dobj_IconText))}`}
        {...dobj_IconText.props}
        domqlElementObject={dobj_IconText}
      >
        {show_Svg(dobj_Svg) ? (
          <Svg
            icon="info outline"
            width="A"
            height="A"
            display="inline-block"
            spriteId="info"
            src='<symbol id="info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></symbol>'
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
      </IconText>
      <Flex
        flow="column"
        align="flex-start"
        gap="X2"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow_3(dobj_Flex))} ${css(wrap_3(dobj_Flex))} ${css(
          align_3(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Box
          fontWeight="600"
          lineHeight="1em"
          text="Notification"
          tag="div"
          ref={ref_Box_2}
          {...dobj_Box.props}
          domqlElementObject={dobj_Box}
        />
        <P
          fontSize="Z"
          margin="0"
          text="is not always a distraction"
          ref={ref_P}
          {...dobj_P.props}
          domqlElementObject={dobj_P}
        />
      </Flex>
    </Box>
  );
}

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
    text: '2',
    fontSize: 'Z',
    lineHeight: '1em',
    background: '#0474F2',
    boxSize: 'fit-content fit-content',
    padding: 'X+W',
    round: 'Y+X',
    color: 'white'
  },
  __name: 'NotificationIndicator'
};

export function NotificationIndicator(props) {
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
    ...create({
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
      text="2"
      fontSize="Z"
      lineHeight="1em"
      background="#0474F2"
      boxSize="fit-content fit-content"
      padding="X+W"
      round="Y+X"
      color="white"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
