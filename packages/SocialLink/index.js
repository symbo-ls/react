import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { create } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
import { Svg } from "@symbo.ls/react-atoms";
import { css } from "@emotion/css";

const orig = {
  extend: [
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
      tag: 'a',
      props: {
        aria: {},
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'currentColor',
        draggable: false
      },
      attr: {
        href: (el) => {
      const { context: ctx } = el;
      const { exec: exec2 } = ctx.utils;
      return exec2(el.props.href, el) || exec2(el.props, el).href;
    },
        target: ({ props }) => props.target,
        'aria-label': ({ props }) => props.aria ? props.aria.label : props.text,
        draggable: ({ props }) => props.draggable
      }
    },
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
    }
  ],
  props: {
    fontWeight: '500',
    text: 'Continue with Twitch',
    fontSize: 'Z1',
    gap: 'Z',
    boxSize: 'fit-content',
    padding: 'A A2',
    background: 'gray3',
    round: 'Z1',
    maxHeight: '3em',
    cursor: 'pointer',
    Icon: {
      name: 'twitch',
      boxSize: 'A2'
    }
  },
  __name: 'SocialLink'
};

export function SocialLink(props) {
  const ref_Box = useRef(null);
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

  function attr_href(el) {
    const { context: ctx } = el;
    const { exec: exec2 } = ctx.utils;
    return exec2(el.props.href, el) || exec2(el.props, el).href;
  }

  function attr_target({ props }) {
    return props.target;
  }

  function attr_aria_label({ props }) {
    return props.aria ? props.aria.label : props.text;
  }

  function attr_draggable({ props }) {
    return props.draggable;
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
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      fontWeight="500"
      text="Continue with Twitch"
      fontSize="Z1"
      gap="Z"
      boxSize="fit-content"
      padding="A A2"
      background="gray3"
      round="Z1"
      maxHeight="3em"
      cursor="pointer"
      textDecoration="none"
      color="currentColor"
      border="none"
      outline="solid, 0, blue .3"
      align="center center"
      display="flex"
      tag="a"
      ref={ref_Box}
      Icon={{
        props: {
          name: "twitch",
          boxSize: "A2",
        },
        __ref: undefined,
      }}
      aria={{}}
      lineHeight={1}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      href={attr_href(dobj)}
      target={attr_target(dobj)}
      aria-label={attr_aria_label(dobj)}
      draggable={attr_draggable(dobj)}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      {show_Svg(dobj_Svg) ? (
        <Svg
          name="twitch"
          boxSize="A2"
          width="A"
          height="A"
          display="inline-block"
          spriteId="twitch"
          src='<symbol id="twitch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitch"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></symbol>'
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
