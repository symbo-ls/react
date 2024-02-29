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
        boxSize: 'fit-content',
        padding: 'Z2 A',
        gap: 'Z1',
        round: 'Z2',
        theme: 'card'
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
        flow: 'column',
        gap: 'Y'
      },
      Title: {
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
          lineHeight: '1em',
          fontWeight: '700',
          alignItems: 'center'
        }
      },
      Paragraph: {
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
          margin: '0',
          fontWeight: '400',
          color: 'gray4',
          '> p': {margin: '0'}
        }
      }
    }
  ],
  props: {
    theme: 'card .secondary',
    gap: 'Z2',
    padding: 'A A'
  },
  Title: {
    props: {
      justifyContent: 'space-between',
      gap: 'E'
    },
    caption: {
      props: {
        text: 'Total crypto assets',
        fontSize: 'Z2',
        fontWeight: '500'
      }
    },
    arrowBtn: {
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
        padding: '0',
        theme: 'transparent',
        fontSize: 'D',
        color: 'gray4',
        margin: '-X -W2 - -',
        Icon: {name: 'arrowUpRight'}
      }
    }
  },
  Paragraph: {
    props: {
      flow: 'column',
      align: 'flex-start flex-start',
      gap: 'A'
    },
    UnitValueWithLabel: {
      UnitValue: {},
      UnitValue2: {
        theme: 'card .secondary .child'
      }
    },
    UnitValue: {
      flow: 'row-reverse',
      color: 'white .75',
      fontWeight: '400',
      fontSize: 'Z',
      gap: 'Y',
      Value: {text: 'an hour ago'},
      Unit: {text: 'Last update:'}
    }
  },
  __name: 'BalanceCard'
};

export function BalanceCard(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  const ref_Box_12 = useRef(null);
  const ref_Box_13 = useRef(null);
  const ref_Box_14 = useRef(null);
  const ref_Box_15 = useRef(null);
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

  function flow_3({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_3({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_3({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_4({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_4({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_4({ props }) {
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

  function flow_5({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_5({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_5({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_6({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_6({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_6({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
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

  function flow_7({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_7({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_7({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_8({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_8({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_8({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
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
  const dobj_Box = dobj["Title"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Paragraph"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Title"]["caption"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Title"]["arrowBtn"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Paragraph"]["UnitValueWithLabel"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Paragraph"]["UnitValue"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Svg = dobj["Title"]["arrowBtn"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_7 = dobj["Paragraph"]["UnitValueWithLabel"]["UnitValue"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Paragraph"]["UnitValueWithLabel"]["UnitValue2"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Paragraph"]["UnitValue"]["Value"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Paragraph"]["UnitValue"]["Unit"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Paragraph"]["UnitValueWithLabel"]["UnitValue"]["Value"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Paragraph"]["UnitValueWithLabel"]["UnitValue"]["Unit"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["Paragraph"]["UnitValueWithLabel"]["UnitValue2"]["Value"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["Paragraph"]["UnitValueWithLabel"]["UnitValue2"]["Unit"]
  dobj_Box_14.node = ref_Box_15.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      theme="card .secondary"
      gap="Z2"
      padding="A A"
      boxSize="fit-content"
      round="Z2"
      display="flex"
      flow="column"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        justifyContent="space-between"
        gap="E"
        lineHeight="1em"
        fontWeight="700"
        alignItems="center"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        className={`${css(flow_2(dobj_Box))} ${css(wrap_2(dobj_Box))} ${css(
          align_2(dobj_Box)
        )}`}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Box
          text="Total crypto assets"
          fontSize="Z2"
          fontWeight="500"
          tag="caption"
          ref={ref_Box_4}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
        <Box
          padding="0"
          theme="transparent"
          fontSize="D"
          color="gray4"
          margin="-X -W2 - -"
          type="button"
          border="none"
          display="inline-flex"
          align="center center"
          textDecoration="none"
          lineHeight="1"
          whiteSpace="nowrap"
          fontFamily="inherit"
          round="C2"
          outline="solid, 0, blue .3"
          tag="button"
          ref={ref_Box_5}
          Icon={{
            props: {
              name: "arrowUpRight",
            },
            __ref: undefined,
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_4(dobj_Box_4))} ${css(
            wrap_4(dobj_Box_4)
          )} ${css(align_4(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          type={attr_type(dobj_Box_4)}
          placeholder={attr_placeholder(dobj_Box_4)}
          tabIndex={attr_tabIndex(dobj_Box_4)}
          domqlElementObject={dobj_Box_4}
        >
          {show_Svg(dobj_Svg) ? (
            <Svg
              name="arrowUpRight"
              width="A"
              height="A"
              display="inline-block"
              spriteId="arrowUpRight"
              src='<symbol id="arrowUpRight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></symbol>'
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
      </Box>
      <Box
        flow="column"
        align="flex-start flex-start"
        gap="A"
        margin="0"
        fontWeight="400"
        color="gray4"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Box
          gap="Y2"
          align="center flex-start"
          display="flex"
          tag="div"
          ref={ref_Box_6}
          UnitValue={{
            props: {},
            __ref: undefined,
          }}
          UnitValue2={{
            props: {
              theme: "card .secondary .child",
            },
            __ref: undefined,
          }}
          className={`${css(flow_5(dobj_Box_5))} ${css(
            wrap_5(dobj_Box_5)
          )} ${css(align_5(dobj_Box_5))}`}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        >
          <Box
            flow="row-reverse"
            fontSize="D1"
            fontWeight="700"
            color="white"
            align="center flex-start"
            gap="V"
            display="flex"
            tag="div"
            ref={ref_Box_8}
            Value={{
              props: {
                text: "12,759",
              },
              __ref: undefined,
            }}
            Unit={{
              props: {
                text: "$",
              },
              __ref: undefined,
            }}
            className={`${css(flow_7(dobj_Box_7))} ${css(
              wrap_7(dobj_Box_7)
            )} ${css(align_7(dobj_Box_7))}`}
            {...dobj_Box_7.props}
            domqlElementObject={dobj_Box_7}
          >
            <Box
              text="12,759"
              tag="div"
              ref={ref_Box_12}
              {...dobj_Box_11.props}
              domqlElementObject={dobj_Box_11}
            />
            <Box
              text="$"
              tag="div"
              ref={ref_Box_13}
              {...dobj_Box_12.props}
              domqlElementObject={dobj_Box_12}
            />
          </Box>
          <Box
            theme="card .secondary .child"
            background="purple"
            padding="Z"
            round="Y"
            fontSize="Z"
            gap="0"
            color="white"
            align="center flex-start"
            display="flex"
            tag="div"
            ref={ref_Box_9}
            className={`${css(flow_8(dobj_Box_8))} ${css(
              wrap_8(dobj_Box_8)
            )} ${css(align_8(dobj_Box_8))}`}
            {...dobj_Box_8.props}
            domqlElementObject={dobj_Box_8}
          >
            <Box
              text="72"
              tag="div"
              ref={ref_Box_14}
              {...dobj_Box_13.props}
              domqlElementObject={dobj_Box_13}
            />
            <Box
              text="%"
              tag="div"
              ref={ref_Box_15}
              {...dobj_Box_14.props}
              domqlElementObject={dobj_Box_14}
            />
          </Box>
        </Box>
        <Box
          flow="row-reverse"
          color="white .75"
          fontWeight="400"
          fontSize="Z"
          gap="Y"
          align="center flex-start"
          display="flex"
          tag="div"
          ref={ref_Box_7}
          Value={{
            props: {
              text: "an hour ago",
            },
            __ref: undefined,
          }}
          Unit={{
            props: {
              text: "Last update:",
            },
            __ref: undefined,
          }}
          className={`${css(flow_6(dobj_Box_6))} ${css(
            wrap_6(dobj_Box_6)
          )} ${css(align_6(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        >
          <Box
            text="an hour ago"
            tag="div"
            ref={ref_Box_10}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          />
          <Box
            text="Last update:"
            tag="div"
            ref={ref_Box_11}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          />
        </Box>
      </Box>
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
    boxSize: 'fit-content',
    padding: 'Z2 A',
    gap: 'Z1',
    round: 'Z2',
    theme: 'card'
  },
  __name: 'Card'
};

export function Card(props) {
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
      boxSize="fit-content"
      padding="Z2 A"
      gap="Z1"
      round="Z2"
      theme="card"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}

const orig_3 = {
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
        boxSize: 'fit-content',
        padding: 'Z2 A',
        gap: 'Z1',
        round: 'Z2',
        theme: 'card'
      },
      __name: 'Card'
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
        flow: 'column',
        gap: 'Y'
      },
      Title: {
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
          lineHeight: '1em',
          fontWeight: '700',
          alignItems: 'center'
        }
      },
      Paragraph: {
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
          margin: '0',
          fontWeight: '400',
          color: 'gray4',
          '> p': {margin: '0'}
        }
      }
    }
  ],
  props: {
    minWidth: 'G1',
    theme: 'dialog',
    round: 'Z2',
    padding: 'A Z2+V Y1 Z2+V',
    gap: 'A1'
  },
  Title: {
    props: {
      justifyContent: 'space-between',
      fontWeight: '400',
      color: 'gray4'
    },
    caption: {props: {text: 'From'}},
    balance: {
      extend: {
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
          align: 'center flex-start',
          gap: 'Y',
          fontSize: 'Z1'
        },
        Title: {
          tag: 'caption',
          props: {
            text: 'balance :',
            textTransform: 'capitalize'
          }
        },
        UnitValue: {
          textTransform: 'uppercase',
          gap: 'Y',
          color: 'currentColor',
          Value: {text: '0'},
          Unit: {text: 'bnb'}
        }
      },
      props: {}
    }
  },
  Paragraph: {
    props: {
      align: 'center space-between',
      margin: '0',
      padding: '0'
    },
    value: {
      props: {
        text: '0.00',
        fontSize: 'E2'
      }
    },
    dropDownButton: {
      extend: {
        extend: {
          extend: {
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
              theme: 'primary',
              boxSize: 'fit-content',
              padding: 'Z2 A2',
              round: 'Z1',
              gap: 'X1',
              position: 'relative'
            },
            Icon: {
              props: {fontSize: 'B1'}
            },
            caption: {
              props: {
                text: 'Button',
                line_height: '1em',
                fontSize: 'Z2',
                letterSpacing: '.005em'
              }
            }
          },
          props: {
            gap: 'X2',
            boxSize: 'fit-content fit-content',
            padding: 'Z1 A1 Z Z1',
            theme: 'dialog',
            color: 'white',
            Icon: {
              name: 'chevronDown',
              fontSize: 'D'
            },
            caption: {text: 'All'}
          }
        },
        props: {
          gap: 'Y',
          padding: 'Y',
          round: 'Z1',
          theme: 'dialog',
          Icon: {fontSize: 'B1'}
        },
        Avatar: {boxSize: 'A2+V1'},
        caption: {
          text: 'ETH',
          props: {
            fontSize: 'Y1',
            fontWeight: '400'
          }
        }
      },
      props: {
        theme: 'tertiary',
        margin: '- -V'
      }
    }
  },
  __name: 'ConvertCard'
};

export function ConvertCard(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_12 = useRef(null);
  const ref_Box_13 = useRef(null);
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

  function flow_3({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_3({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_3({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_4({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_4({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_4({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_5({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_5({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_5({ props }) {
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

  function flow_6({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_6({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_6({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_src({ props: props4 }) {
    return props4.src;
  }

  function attr_alt({ props: props4 }) {
    return props4.alt;
  }

  function attr_title({ props: props4 }) {
    return props4.title || props4.alt;
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
  const dobj_Box = dobj["Title"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Paragraph"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Title"]["caption"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Title"]["balance"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Paragraph"]["value"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Paragraph"]["dropDownButton"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Title"]["balance"]["Title"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Title"]["balance"]["UnitValue"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Paragraph"]["dropDownButton"]["Avatar"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Paragraph"]["dropDownButton"]["caption"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Svg = dobj["Paragraph"]["dropDownButton"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_11 = dobj["Title"]["balance"]["UnitValue"]["Value"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Title"]["balance"]["UnitValue"]["Unit"]
  dobj_Box_12.node = ref_Box_13.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      minWidth="G1"
      theme="dialog"
      round="Z2"
      padding="A Z2+V Y1 Z2+V"
      gap="A1"
      boxSize="fit-content"
      display="flex"
      flow="column"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        justifyContent="space-between"
        fontWeight="400"
        color="gray4"
        lineHeight="1em"
        alignItems="center"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        className={`${css(flow_2(dobj_Box))} ${css(wrap_2(dobj_Box))} ${css(
          align_2(dobj_Box)
        )}`}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Box
          text="From"
          tag="caption"
          ref={ref_Box_4}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
        <Box
          align="center flex-start"
          gap="Y"
          fontSize="Z1"
          display="flex"
          tag="div"
          ref={ref_Box_5}
          className={`${css(flow_4(dobj_Box_4))} ${css(
            wrap_4(dobj_Box_4)
          )} ${css(align_4(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            text="balance :"
            textTransform="capitalize"
            tag="caption"
            ref={ref_Box_8}
            {...dobj_Box_7.props}
            domqlElementObject={dobj_Box_7}
          />
          <Box
            textTransform="uppercase"
            gap="Y"
            color="currentColor"
            align="center flex-start"
            fontSize="Z"
            display="flex"
            tag="div"
            ref={ref_Box_9}
            Value={{
              props: {
                text: "0",
              },
              __ref: undefined,
            }}
            Unit={{
              props: {
                text: "bnb",
              },
              __ref: undefined,
            }}
            className={`${css(flow_6(dobj_Box_8))} ${css(
              wrap_6(dobj_Box_8)
            )} ${css(align_6(dobj_Box_8))}`}
            {...dobj_Box_8.props}
            domqlElementObject={dobj_Box_8}
          >
            <Box
              text="0"
              tag="div"
              ref={ref_Box_12}
              {...dobj_Box_11.props}
              domqlElementObject={dobj_Box_11}
            />
            <Box
              text="bnb"
              tag="div"
              ref={ref_Box_13}
              {...dobj_Box_12.props}
              domqlElementObject={dobj_Box_12}
            />
          </Box>
        </Box>
      </Box>
      <Box
        align="center space-between"
        margin="0"
        padding="0"
        fontWeight="400"
        color="gray4"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Box
          text="0.00"
          fontSize="E2"
          tag="div"
          ref={ref_Box_6}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        />
        <Box
          theme="tertiary"
          margin="- -V"
          gap="Y"
          padding="Y"
          round="Z1"
          boxSize="fit-content fit-content"
          color="white"
          position="relative"
          fontSize="A"
          type="button"
          border="none"
          display="inline-flex"
          align="center center"
          textDecoration="none"
          lineHeight="1"
          whiteSpace="nowrap"
          fontFamily="inherit"
          outline="solid, 0, blue .3"
          tag="button"
          ref={ref_Box_7}
          Icon={{
            props: {
              fontSize: "B1",
              name: "chevronDown",
            },
            __ref: undefined,
          }}
          caption={{
            text: "All",
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_5(dobj_Box_6))} ${css(
            wrap_5(dobj_Box_6)
          )} ${css(align_5(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          type={attr_type(dobj_Box_6)}
          placeholder={attr_placeholder(dobj_Box_6)}
          tabIndex={attr_tabIndex(dobj_Box_6)}
          domqlElementObject={dobj_Box_6}
        >
          <Box
            boxSize="A2+V1"
            display="block"
            avatarType="initials"
            borderRadius="100%"
            src="https://api.dicebear.com/7.x/initials/svg?seed=Avatar"
            tag="img"
            ref={ref_Box_10}
            {...dobj_Box_9.props}
            src={attr_src(dobj_Box_9)}
            alt={attr_alt(dobj_Box_9)}
            title={attr_title(dobj_Box_9)}
            domqlElementObject={dobj_Box_9}
          />
          <Box
            text="All"
            fontSize="Y1"
            fontWeight="400"
            line_height="1em"
            letterSpacing=".005em"
            tag="caption"
            ref={ref_Box_11}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          />
          {show_Svg(dobj_Svg) ? (
            <Svg
              fontSize="B1"
              name="chevronDown"
              width="A"
              height="A"
              display="inline-block"
              spriteId="chevronDown"
              src='<symbol id="chevronDown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></symbol>'
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
      </Box>
    </Box>
  );
}

const orig_4 = {
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
    boxSize: 'fit-content',
    gap: 'Z',
    padding: 'Z A A A',
    flow: 'column',
    theme: 'dialog',
    round: 'A1'
  },
  Title: {
    props: {
      text: 'convert',
      textTransform: 'capitalize',
      fontSize: 'A2',
      padding: '- W',
      fontWeight: '500'
    }
  },
  Cards: {
    '0': {},
    '1': {},
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
      flow: 'column',
      gap: 'A'
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
              boxSize: 'fit-content',
              padding: 'Z2 A',
              gap: 'Z1',
              round: 'Z2',
              theme: 'card'
            },
            __name: 'Card'
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
              flow: 'column',
              gap: 'Y'
            },
            Title: {
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
                lineHeight: '1em',
                fontWeight: '700',
                alignItems: 'center'
              }
            },
            Paragraph: {
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
                margin: '0',
                fontWeight: '400',
                color: 'gray4',
                '> p': {margin: '0'}
              }
            }
          }
        ],
        props: {
          minWidth: 'G1',
          theme: 'dialog',
          round: 'Z2',
          padding: 'A Z2+V Y1 Z2+V',
          gap: 'A1'
        },
        Title: {
          props: {
            justifyContent: 'space-between',
            fontWeight: '400',
            color: 'gray4'
          },
          caption: {props: {text: 'From'}},
          balance: {
            extend: {
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
                align: 'center flex-start',
                gap: 'Y',
                fontSize: 'Z1'
              },
              Title: {
                tag: 'caption',
                props: {
                  text: 'balance :',
                  textTransform: 'capitalize'
                }
              },
              UnitValue: {
                textTransform: 'uppercase',
                gap: 'Y',
                color: 'currentColor',
                Value: {text: '0'},
                Unit: {text: 'bnb'}
              }
            },
            props: {}
          }
        },
        Paragraph: {
          props: {
            align: 'center space-between',
            margin: '0',
            padding: '0'
          },
          value: {
            props: {
              text: '0.00',
              fontSize: 'E2'
            }
          },
          dropDownButton: {
            extend: {
              extend: {
                extend: {
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
                    theme: 'primary',
                    boxSize: 'fit-content',
                    padding: 'Z2 A2',
                    round: 'Z1',
                    gap: 'X1',
                    position: 'relative'
                  },
                  Icon: {
                    props: {fontSize: 'B1'}
                  },
                  caption: {
                    props: {
                      text: 'Button',
                      line_height: '1em',
                      fontSize: 'Z2',
                      letterSpacing: '.005em'
                    }
                  }
                },
                props: {
                  gap: 'X2',
                  boxSize: 'fit-content fit-content',
                  padding: 'Z1 A1 Z Z1',
                  theme: 'dialog',
                  color: 'white',
                  Icon: {
                    name: 'chevronDown',
                    fontSize: 'D'
                  },
                  caption: {text: 'All'}
                }
              },
              props: {
                gap: 'Y',
                padding: 'Y',
                round: 'Z1',
                theme: 'dialog',
                Icon: {fontSize: 'B1'}
              },
              Avatar: {boxSize: 'A2+V1'},
              caption: {
                text: 'ETH',
                props: {
                  fontSize: 'Y1',
                  fontWeight: '400'
                }
              }
            },
            props: {
              theme: 'tertiary',
              margin: '- -V'
            }
          }
        },
        __name: 'ConvertCard'
      },
      props: {
        theme: 'tertiary',
        Paragraph: {
          dropDownButton: {theme: 'secondary'}
        }
      }
    }
  },
  CommonButton: {
    minWidth: '100%',
    margin: 'Z - - -',
    caption: {
      text: 'convert',
      textTransform: 'capitalize'
    }
  },
  __name: 'CurrencyConvert'
};

export function CurrencyConvert(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  const ref_Box_12 = useRef(null);
  const ref_Box_13 = useRef(null);
  const ref_Box_14 = useRef(null);
  const ref_Box_15 = useRef(null);
  const ref_Box_16 = useRef(null);
  const ref_Box_17 = useRef(null);
  const ref_Box_18 = useRef(null);
  const ref_Box_19 = useRef(null);
  const ref_Box_20 = useRef(null);
  const ref_Box_21 = useRef(null);
  const ref_Box_22 = useRef(null);
  const ref_Box_23 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_24 = useRef(null);
  const ref_Box_25 = useRef(null);
  const ref_Box_26 = useRef(null);
  const ref_Box_27 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Box_28 = useRef(null);
  const ref_Box_29 = useRef(null);
  const ref_Box_30 = useRef(null);
  const ref_Box_31 = useRef(null);
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

  function attr_type({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex({ props: props4 }) {
    return props4.tabIndex;
  }

  function flow_4({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_4({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_4({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_5({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_5({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_5({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
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

  function flow_6({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_6({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_6({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_7({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_7({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_7({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_8({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_8({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_8({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_9({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_9({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_9({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_10({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_10({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_10({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_11({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_11({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_11({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_2({ props }) {
    return props.type;
  }

  function attr_placeholder_2({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_2({ props }) {
    return props.tabIndex;
  }

  function flow_12({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_12({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_12({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_13({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_13({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_13({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_3({ props }) {
    return props.type;
  }

  function attr_placeholder_3({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_3({ props }) {
    return props.tabIndex;
  }

  function flow_14({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_14({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_14({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_src({ props: props4 }) {
    return props4.src;
  }

  function attr_alt({ props: props4 }) {
    return props4.alt;
  }

  function attr_title({ props: props4 }) {
    return props4.title || props4.alt;
  }

  function show_Svg_2({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
  }

  function html_2({ key, props: props4, context, deps, ...el2 }) {
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

  function flow_15({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_15({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_15({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_src_2({ props: props4 }) {
    return props4.src;
  }

  function attr_alt_2({ props: props4 }) {
    return props4.alt;
  }

  function attr_title_2({ props: props4 }) {
    return props4.title || props4.alt;
  }

  function show_Svg_3({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
  }

  function html_3({ key, props: props4, context, deps, ...el2 }) {
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
      ...deepMerge(cleanProps, orig_4),
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
  const dobj_Box = dobj["Title"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Cards"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["CommonButton"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Cards"]["0"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Cards"]["1"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Svg = dobj["CommonButton"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_6 = dobj["CommonButton"]["Caption"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Cards"]["0"]["Title"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Cards"]["0"]["Paragraph"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Cards"]["1"]["Title"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Cards"]["1"]["Paragraph"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Cards"]["0"]["Title"]["caption"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Cards"]["0"]["Title"]["balance"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["Cards"]["0"]["Paragraph"]["value"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["Cards"]["0"]["Paragraph"]["dropDownButton"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["Cards"]["1"]["Title"]["caption"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["Cards"]["1"]["Title"]["balance"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Box_17 = dobj["Cards"]["1"]["Paragraph"]["value"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Box_18 = dobj["Cards"]["1"]["Paragraph"]["dropDownButton"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Box_19 = dobj["Cards"]["0"]["Title"]["balance"]["Title"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Box_20 = dobj["Cards"]["0"]["Title"]["balance"]["UnitValue"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Box_21 = dobj["Cards"]["0"]["Paragraph"]["dropDownButton"]["Avatar"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Box_22 = dobj["Cards"]["0"]["Paragraph"]["dropDownButton"]["caption"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Svg_2 = dobj["Cards"]["0"]["Paragraph"]["dropDownButton"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_23 = dobj["Cards"]["1"]["Title"]["balance"]["Title"]
  dobj_Box_23.node = ref_Box_24.current
  const dobj_Box_24 = dobj["Cards"]["1"]["Title"]["balance"]["UnitValue"]
  dobj_Box_24.node = ref_Box_25.current
  const dobj_Box_25 = dobj["Cards"]["1"]["Paragraph"]["dropDownButton"]["Avatar"]
  dobj_Box_25.node = ref_Box_26.current
  const dobj_Box_26 = dobj["Cards"]["1"]["Paragraph"]["dropDownButton"]["caption"]
  dobj_Box_26.node = ref_Box_27.current
  const dobj_Svg_3 = dobj["Cards"]["1"]["Paragraph"]["dropDownButton"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Box_27 = dobj["Cards"]["0"]["Title"]["balance"]["UnitValue"]["Value"]
  dobj_Box_27.node = ref_Box_28.current
  const dobj_Box_28 = dobj["Cards"]["0"]["Title"]["balance"]["UnitValue"]["Unit"]
  dobj_Box_28.node = ref_Box_29.current
  const dobj_Box_29 = dobj["Cards"]["1"]["Title"]["balance"]["UnitValue"]["Value"]
  dobj_Box_29.node = ref_Box_30.current
  const dobj_Box_30 = dobj["Cards"]["1"]["Title"]["balance"]["UnitValue"]["Unit"]
  dobj_Box_30.node = ref_Box_31.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      gap="Z"
      padding="Z A A A"
      flow="column"
      theme="dialog"
      round="A1"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        text="convert"
        textTransform="capitalize"
        fontSize="A2"
        padding="- W"
        fontWeight="500"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        flow="column"
        gap="A"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        className={`${css(flow_2(dobj_Box_2))} ${css(wrap_2(dobj_Box_2))} ${css(
          align_2(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Box
          theme="tertiary"
          minWidth="G1"
          round="Z2"
          padding="A Z2+V Y1 Z2+V"
          gap="A1"
          boxSize="fit-content"
          display="flex"
          flow="column"
          tag="div"
          ref={ref_Box_5}
          Paragraph={{
            props: {
              dropDownButton: {
                theme: "secondary",
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_4(dobj_Box_4))} ${css(
            wrap_4(dobj_Box_4)
          )} ${css(align_4(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            justifyContent="space-between"
            fontWeight="400"
            color="gray4"
            lineHeight="1em"
            alignItems="center"
            display="flex"
            tag="div"
            ref={ref_Box_8}
            className={`${css(flow_6(dobj_Box_7))} ${css(
              wrap_6(dobj_Box_7)
            )} ${css(align_6(dobj_Box_7))}`}
            {...dobj_Box_7.props}
            domqlElementObject={dobj_Box_7}
          >
            <Box
              text="From"
              tag="caption"
              ref={ref_Box_12}
              {...dobj_Box_11.props}
              domqlElementObject={dobj_Box_11}
            />
            <Box
              align="center flex-start"
              gap="Y"
              fontSize="Z1"
              display="flex"
              tag="div"
              ref={ref_Box_13}
              className={`${css(flow_10(dobj_Box_12))} ${css(
                wrap_10(dobj_Box_12)
              )} ${css(align_10(dobj_Box_12))}`}
              {...dobj_Box_12.props}
              domqlElementObject={dobj_Box_12}
            >
              <Box
                text="balance :"
                textTransform="capitalize"
                tag="caption"
                ref={ref_Box_20}
                {...dobj_Box_19.props}
                domqlElementObject={dobj_Box_19}
              />
              <Box
                textTransform="uppercase"
                gap="Y"
                color="currentColor"
                align="center flex-start"
                fontSize="Z"
                display="flex"
                tag="div"
                ref={ref_Box_21}
                Value={{
                  props: {
                    text: "0",
                  },
                  __ref: undefined,
                }}
                Unit={{
                  props: {
                    text: "bnb",
                  },
                  __ref: undefined,
                }}
                className={`${css(flow_14(dobj_Box_20))} ${css(
                  wrap_14(dobj_Box_20)
                )} ${css(align_14(dobj_Box_20))}`}
                {...dobj_Box_20.props}
                domqlElementObject={dobj_Box_20}
              >
                <Box
                  text="0"
                  tag="div"
                  ref={ref_Box_28}
                  {...dobj_Box_27.props}
                  domqlElementObject={dobj_Box_27}
                />
                <Box
                  text="bnb"
                  tag="div"
                  ref={ref_Box_29}
                  {...dobj_Box_28.props}
                  domqlElementObject={dobj_Box_28}
                />
              </Box>
            </Box>
          </Box>
          <Box
            align="center space-between"
            margin="0"
            padding="0"
            fontWeight="400"
            color="gray4"
            display="flex"
            tag="div"
            ref={ref_Box_9}
            dropDownButton={{
              theme: "secondary",
            }}
            className={`${css(flow_7(dobj_Box_8))} ${css(
              wrap_7(dobj_Box_8)
            )} ${css(align_7(dobj_Box_8))}`}
            {...dobj_Box_8.props}
            domqlElementObject={dobj_Box_8}
          >
            <Box
              text="0.00"
              fontSize="E2"
              tag="div"
              ref={ref_Box_14}
              {...dobj_Box_13.props}
              domqlElementObject={dobj_Box_13}
            />
            <Box
              theme="secondary"
              margin="- -V"
              gap="Y"
              padding="Y"
              round="Z1"
              boxSize="fit-content fit-content"
              color="white"
              position="relative"
              fontSize="A"
              type="button"
              border="none"
              display="inline-flex"
              align="center center"
              textDecoration="none"
              lineHeight="1"
              whiteSpace="nowrap"
              fontFamily="inherit"
              outline="solid, 0, blue .3"
              tag="button"
              ref={ref_Box_15}
              Icon={{
                props: {
                  fontSize: "B1",
                  name: "chevronDown",
                },
                __ref: undefined,
              }}
              caption={{
                text: "All",
              }}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_11(dobj_Box_14))} ${css(
                wrap_11(dobj_Box_14)
              )} ${css(align_11(dobj_Box_14))}`}
              {...dobj_Box_14.props}
              type={attr_type_2(dobj_Box_14)}
              placeholder={attr_placeholder_2(dobj_Box_14)}
              tabIndex={attr_tabIndex_2(dobj_Box_14)}
              domqlElementObject={dobj_Box_14}
            >
              <Box
                boxSize="A2+V1"
                display="block"
                avatarType="initials"
                borderRadius="100%"
                src="https://api.dicebear.com/7.x/initials/svg?seed=Avatar"
                tag="img"
                ref={ref_Box_22}
                {...dobj_Box_21.props}
                src={attr_src(dobj_Box_21)}
                alt={attr_alt(dobj_Box_21)}
                title={attr_title(dobj_Box_21)}
                domqlElementObject={dobj_Box_21}
              />
              <Box
                text="All"
                fontSize="Y1"
                fontWeight="400"
                line_height="1em"
                letterSpacing=".005em"
                tag="caption"
                ref={ref_Box_23}
                {...dobj_Box_22.props}
                domqlElementObject={dobj_Box_22}
              />
              {show_Svg_2(dobj_Svg_2) ? (
                <Svg
                  fontSize="B1"
                  name="chevronDown"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="chevronDown"
                  src='<symbol id="chevronDown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></symbol>'
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={ref_Svg_2}
                  style={{
                    fill: "currentColor",
                    "*": {
                      fill: "currentColor",
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: html_2(dobj_Svg_2) }}
                  {...dobj_Svg_2.props}
                  domqlElementObject={dobj_Svg_2}
                />
              ) : null}
            </Box>
          </Box>
        </Box>
        <Box
          theme="tertiary"
          minWidth="G1"
          round="Z2"
          padding="A Z2+V Y1 Z2+V"
          gap="A1"
          boxSize="fit-content"
          display="flex"
          flow="column"
          tag="div"
          ref={ref_Box_6}
          Paragraph={{
            props: {
              dropDownButton: {
                theme: "secondary",
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_5(dobj_Box_5))} ${css(
            wrap_5(dobj_Box_5)
          )} ${css(align_5(dobj_Box_5))}`}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        >
          <Box
            justifyContent="space-between"
            fontWeight="400"
            color="gray4"
            lineHeight="1em"
            alignItems="center"
            display="flex"
            tag="div"
            ref={ref_Box_10}
            className={`${css(flow_8(dobj_Box_9))} ${css(
              wrap_8(dobj_Box_9)
            )} ${css(align_8(dobj_Box_9))}`}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          >
            <Box
              text="From"
              tag="caption"
              ref={ref_Box_16}
              {...dobj_Box_15.props}
              domqlElementObject={dobj_Box_15}
            />
            <Box
              align="center flex-start"
              gap="Y"
              fontSize="Z1"
              display="flex"
              tag="div"
              ref={ref_Box_17}
              className={`${css(flow_12(dobj_Box_16))} ${css(
                wrap_12(dobj_Box_16)
              )} ${css(align_12(dobj_Box_16))}`}
              {...dobj_Box_16.props}
              domqlElementObject={dobj_Box_16}
            >
              <Box
                text="balance :"
                textTransform="capitalize"
                tag="caption"
                ref={ref_Box_24}
                {...dobj_Box_23.props}
                domqlElementObject={dobj_Box_23}
              />
              <Box
                textTransform="uppercase"
                gap="Y"
                color="currentColor"
                align="center flex-start"
                fontSize="Z"
                display="flex"
                tag="div"
                ref={ref_Box_25}
                Value={{
                  props: {
                    text: "0",
                  },
                  __ref: undefined,
                }}
                Unit={{
                  props: {
                    text: "bnb",
                  },
                  __ref: undefined,
                }}
                className={`${css(flow_15(dobj_Box_24))} ${css(
                  wrap_15(dobj_Box_24)
                )} ${css(align_15(dobj_Box_24))}`}
                {...dobj_Box_24.props}
                domqlElementObject={dobj_Box_24}
              >
                <Box
                  text="0"
                  tag="div"
                  ref={ref_Box_30}
                  {...dobj_Box_29.props}
                  domqlElementObject={dobj_Box_29}
                />
                <Box
                  text="bnb"
                  tag="div"
                  ref={ref_Box_31}
                  {...dobj_Box_30.props}
                  domqlElementObject={dobj_Box_30}
                />
              </Box>
            </Box>
          </Box>
          <Box
            align="center space-between"
            margin="0"
            padding="0"
            fontWeight="400"
            color="gray4"
            display="flex"
            tag="div"
            ref={ref_Box_11}
            dropDownButton={{
              theme: "secondary",
            }}
            className={`${css(flow_9(dobj_Box_10))} ${css(
              wrap_9(dobj_Box_10)
            )} ${css(align_9(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          >
            <Box
              text="0.00"
              fontSize="E2"
              tag="div"
              ref={ref_Box_18}
              {...dobj_Box_17.props}
              domqlElementObject={dobj_Box_17}
            />
            <Box
              theme="secondary"
              margin="- -V"
              gap="Y"
              padding="Y"
              round="Z1"
              boxSize="fit-content fit-content"
              color="white"
              position="relative"
              fontSize="A"
              type="button"
              border="none"
              display="inline-flex"
              align="center center"
              textDecoration="none"
              lineHeight="1"
              whiteSpace="nowrap"
              fontFamily="inherit"
              outline="solid, 0, blue .3"
              tag="button"
              ref={ref_Box_19}
              Icon={{
                props: {
                  fontSize: "B1",
                  name: "chevronDown",
                },
                __ref: undefined,
              }}
              caption={{
                text: "All",
              }}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_13(dobj_Box_18))} ${css(
                wrap_13(dobj_Box_18)
              )} ${css(align_13(dobj_Box_18))}`}
              {...dobj_Box_18.props}
              type={attr_type_3(dobj_Box_18)}
              placeholder={attr_placeholder_3(dobj_Box_18)}
              tabIndex={attr_tabIndex_3(dobj_Box_18)}
              domqlElementObject={dobj_Box_18}
            >
              <Box
                boxSize="A2+V1"
                display="block"
                avatarType="initials"
                borderRadius="100%"
                src="https://api.dicebear.com/7.x/initials/svg?seed=Avatar"
                tag="img"
                ref={ref_Box_26}
                {...dobj_Box_25.props}
                src={attr_src_2(dobj_Box_25)}
                alt={attr_alt_2(dobj_Box_25)}
                title={attr_title_2(dobj_Box_25)}
                domqlElementObject={dobj_Box_25}
              />
              <Box
                text="All"
                fontSize="Y1"
                fontWeight="400"
                line_height="1em"
                letterSpacing=".005em"
                tag="caption"
                ref={ref_Box_27}
                {...dobj_Box_26.props}
                domqlElementObject={dobj_Box_26}
              />
              {show_Svg_3(dobj_Svg_3) ? (
                <Svg
                  fontSize="B1"
                  name="chevronDown"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="chevronDown"
                  src='<symbol id="chevronDown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></symbol>'
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={ref_Svg_3}
                  style={{
                    fill: "currentColor",
                    "*": {
                      fill: "currentColor",
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: html_3(dobj_Svg_3) }}
                  {...dobj_Svg_3.props}
                  domqlElementObject={dobj_Svg_3}
                />
              ) : null}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        minWidth="100%"
        margin="Z - - -"
        theme="primary"
        boxSize="fit-content"
        padding="A A2"
        round="Z2"
        gap="Y2"
        position="relative"
        fontSize="A"
        type="button"
        border="none"
        display="inline-flex"
        align="center center"
        textDecoration="none"
        lineHeight="1"
        whiteSpace="nowrap"
        fontFamily="inherit"
        outline="solid, 0, blue .3"
        tag="button"
        ref={ref_Box_4}
        caption={{
          text: "convert",
          textTransform: "capitalize",
        }}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow_3(dobj_Box_3))} ${css(wrap_3(dobj_Box_3))} ${css(
          align_3(dobj_Box_3)
        )}`}
        {...dobj_Box_3.props}
        type={attr_type(dobj_Box_3)}
        placeholder={attr_placeholder(dobj_Box_3)}
        tabIndex={attr_tabIndex(dobj_Box_3)}
        domqlElementObject={dobj_Box_3}
      >
        {show_Svg(dobj_Svg) ? (
          <Svg
            fontSize="C"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref_Svg}
            dangerouslySetInnerHTML={{ __html: html(dobj_Svg) }}
            {...dobj_Svg.props}
            domqlElementObject={dobj_Svg}
          />
        ) : null}
        <Box
          text="Button"
          line_height="1em"
          tag="caption"
          ref={ref_Box_7}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        />
      </Box>
    </Box>
  );
}

const orig_5 = {
  props: {
    boxSize: 'fit-content',
    padding: 'F E2+A2 G E2+A2',
    position: 'relative',
    overflow: 'hidden',
    round: 'A2',
    backgroundColor: '#FF3CAC',
    background: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'
  },
  Icon: {
    extend: {
      extend: {
        tag: 'svg',
        deps: {
          init: (config, options = SET_OPTIONS) => {
  const emotion2 = options.emotion || emotion;
  const resultConfig = mergeWithLocalFile(config || {});
  const conf = (0, import_scratch7.set)({
    verbose: options.verbose,
    useReset: options.useReset,
    useFontImport: options.useFontImport,
    useVariable: options.useVariable,
    useSvgSprite: options.useSvgSprite,
    useDocumentTheme: options.useDocumentTheme,
    useIconSprite: options.useIconSprite,
    ...resultConfig
  }, { newConfig: options.newConfig });
  const FontFace = (0, import_scratch7.getFontFaceString)(conf.FONT);
  const useReset = conf.useReset;
  const useVariable = conf.useVariable;
  const useFontImport = conf.useFontImport;
  const useSvgSprite = conf.useSvgSprite;
  const hasSvgs = config.svg || config.SVG;
  const useIconSprite = conf.useIconSprite;
  const hasIcons = config.icons || config.ICONS;
  if (useFontImport)
    emotion2.injectGlobal(FontFace);
  if (useVariable)
    emotion2.injectGlobal({ ":root": conf.CSS_VARS });
  if (useReset)
    emotion2.injectGlobal(conf.RESET);
  if (hasSvgs)
    (0, import_scratch7.appendSVGSprite)(hasSvgs, { document: options.document });
  else if (useSvgSprite)
    (0, import_scratch7.appendSVGSprite)(conf.SVG, { document: options.document });
  if (hasIcons)
    (0, import_scratch7.appendIconsSprite)(hasIcons, { document: options.document });
  else if (useIconSprite)
    (0, import_scratch7.appendIconsSprite)(conf.ICONS, { document: options.document });
  return conf;
}
        },
        props: {
          style: {
            '*': {fill: 'currentColor'}
          }
        },
        attr: {
          xmlns: 'http://www.w3.org/2000/svg',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink'
        },
        html: ({ key, props, context, deps, ...el }) => {
    const { designSystem } = context;
    const SVG = designSystem && designSystem.SVG;
    const useSvgSprite = props.spriteId || context.designSystem && context.designSystem.useSvgSprite;
    if (!useSvgSprite && props.src)
      return props.src;
    const useSVGSymbol = (icon) => `<use xlink:href="#${icon}" />`;
    const spriteId = props.spriteId;
    if (spriteId)
      return useSVGSymbol(spriteId);
    const symbolId = Symbol.for(props.src);
    let SVGKey = SVG[symbolId];
    if (SVGKey && SVG[SVGKey])
      return useSVGSymbol(SVGKey);
    SVGKey = SVG[symbolId] = Math.random();
    if (props.src) {
      deps.init({
        svg: { [SVGKey]: props.src }
      }, {
        document: context.document,
        emotion: context.emotion
      });
    }
    return useSVGSymbol(SVGKey);
  }
      },
      deps: {
        isString: (arg) => typeof arg === "string"
      },
      props: ({ key, props, parent, context, deps }) => {
    const { ICONS, useIconSprite, verbose } = context && context.designSystem;
    const { toCamelCase } = context && context.utils;
    const iconName = props.name || props.icon || key;
    const camelCase = toCamelCase(deps.isString(iconName) ? iconName : key);
    const isArray3 = camelCase.split(/([a-z])([A-Z])/g);
    let activeIconName;
    if (props.active) {
      activeIconName = props[".active"].name || props[".active"].icon;
    }
    if (parent && parent.props && parent.props.active && parent.props[".active"] && parent.props[".active"].icon) {
      activeIconName = parent.props[".active"].icon.name || parent.props[".active"].icon.icon || parent.props[".active"].icon;
    }
    let validIconName;
    if (ICONS[activeIconName])
      validIconName = activeIconName;
    if (ICONS[camelCase])
      validIconName = camelCase;
    else if (ICONS[isArray3[0] + isArray3[1]])
      validIconName = isArray3[0] + isArray3[1];
    else if (ICONS[isArray3[0]])
      validIconName = isArray3[0];
    else {
      if (verbose)
        console.warn("Can't find icon:", iconName, validIconName);
    }
    const iconFromLibrary = ICONS[validIconName];
    const directSrc = parent && parent.props && parent.props.src || props.src;
    return {
      width: "A",
      height: "A",
      display: "inline-block",
      spriteId: useIconSprite && validIconName,
      src: iconFromLibrary || directSrc || ICONS.noIcon,
      style: { fill: "currentColor" }
    };
  },
      attr: {viewBox: '0 0 24 24'}
    },
    props: {
      icon: 'dribbble',
      boxSize: 'E'
    }
  },
  LineStepsWithTitleParagraph: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    round: '0',
    background: 'black .2'
  },
  __name: 'StepCard'
};

export function StepCard(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  function html({ key, props, context, deps, ...el }) {
    const { designSystem } = context;
    const SVG = designSystem && designSystem.SVG;
    const useSvgSprite =
      props.spriteId ||
      (context.designSystem && context.designSystem.useSvgSprite);
    if (!useSvgSprite && props.src) return props.src;
    const useSVGSymbol = (icon) => `<use xlink:href="#${icon}" />`;
    const spriteId = props.spriteId;
    if (spriteId) return useSVGSymbol(spriteId);
    const symbolId = Symbol.for(props.src);
    let SVGKey = SVG[symbolId];
    if (SVGKey && SVG[SVGKey]) return useSVGSymbol(SVGKey);
    SVGKey = SVG[symbolId] = Math.random();
    if (props.src) {
      deps.init(
        {
          svg: {
            [SVGKey]: props.src,
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

  function flow({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
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

  function flow_4({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_4({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_4({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_5({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_5({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_5({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value({ props: props4 }) {
    return props4.value;
  }

  function attr_max_2({ props: props4 }) {
    return props4.max;
  }

  function attr_progress_2({ props: props4 }) {
    return props4.progress;
  }

  function attr_value_2({ props: props4 }) {
    return props4.value;
  }

  function attr_max_3({ props: props4 }) {
    return props4.max;
  }

  function attr_progress_3({ props: props4 }) {
    return props4.progress;
  }

  function attr_value_3({ props: props4 }) {
    return props4.value;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_5),
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
  const dobj_Box = dobj["LineStepsWithTitleParagraph"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["LineStepsWithTitleParagraph"]["TitleParagraph"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["LineStepsWithTitleParagraph"]["LineSteps"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["LineStepsWithTitleParagraph"]["TitleParagraph"]["Title"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["LineStepsWithTitleParagraph"]["TitleParagraph"]["Paragraph"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["LineStepsWithTitleParagraph"]["LineSteps"]["0"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["LineStepsWithTitleParagraph"]["LineSteps"]["1"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["LineStepsWithTitleParagraph"]["LineSteps"]["2"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["LineStepsWithTitleParagraph"]["TitleParagraph"]["Title"]["h5"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["LineStepsWithTitleParagraph"]["TitleParagraph"]["Paragraph"]["p"]
  dobj_Box_10.node = ref_Box_11.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      padding="F E2+A2 G E2+A2"
      position="relative"
      overflow="hidden"
      round="A2"
      backgroundColor="#FF3CAC"
      background="linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Svg
        icon="dribbble"
        boxSize="E"
        width="A"
        height="A"
        display="inline-block"
        spriteId="dribbble"
        src='<symbol id="dribbble" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dribbble"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></symbol>'
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
      <Box
        position="absolute"
        left="0"
        bottom="0"
        width="100%"
        round="0"
        background="black .2"
        flow="column"
        padding="A1 B B"
        boxSize="fit-content"
        gap="B"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        className={`${css(flow(dobj_Box))} ${css(wrap(dobj_Box))} ${css(
          align(dobj_Box)
        )}`}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Box
          gap="Z1"
          flow="column"
          display="flex"
          tag="div"
          ref={ref_Box_3}
          Title={{
            props: {
              h5: {
                text: "Symbols",
                fontSize: "B",
              },
            },
            __ref: undefined,
          }}
          Paragraph={{
            props: {
              p: {
                text: "The easiest way to build your own website.",
                fontSIze: "A",
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_2(dobj_Box_2))} ${css(
            wrap_2(dobj_Box_2)
          )} ${css(align_2(dobj_Box_2))}`}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        >
          <Box
            align="center space-between"
            display="flex"
            tag="div"
            ref={ref_Box_5}
            h5={{
              text: "Symbols",
              fontSize: "B",
            }}
            className={`${css(flow_4(dobj_Box_4))} ${css(
              wrap_4(dobj_Box_4)
            )} ${css(align_4(dobj_Box_4))}`}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          >
            <Box
              text="Symbols"
              fontSize="B"
              lineHeight="1em"
              tag="h5"
              ref={ref_Box_10}
              {...dobj_Box_9.props}
              domqlElementObject={dobj_Box_9}
            />
          </Box>
          <Box
            display="flex"
            tag="div"
            ref={ref_Box_6}
            p={{
              text: "The easiest way to build your own website.",
              fontSIze: "A",
            }}
            className={`${css(flow_5(dobj_Box_5))} ${css(
              wrap_5(dobj_Box_5)
            )} ${css(align_5(dobj_Box_5))}`}
            {...dobj_Box_5.props}
            domqlElementObject={dobj_Box_5}
          >
            <Box
              text="The easiest way to build your own website."
              fontSIze="A"
              fontSize="Z"
              lineHeight="1em"
              margin="0"
              color="gray2"
              tag="p"
              ref={ref_Box_11}
              {...dobj_Box_10.props}
              domqlElementObject={dobj_Box_10}
            />
          </Box>
        </Box>
        <Box
          boxSize="fit-content"
          gap="Y1"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          childProps={{
            minWidth: "E+A",
            maxWidth: "E+A",
          }}
          className={`${css(flow_3(dobj_Box_3))} ${css(
            wrap_3(dobj_Box_3)
          )} ${css(align_3(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            minWidth="E+A"
            maxWidth="E+A"
            height="Y"
            round="X"
            overflow="hidden"
            theme="primary @dark .inactive"
            tag="progress"
            ref={ref_Box_7}
            value={attr_value(dobj_Box_6)}
            {...dobj_Box_6.props}
            max={attr_max(dobj_Box_6)}
            progress={attr_progress(dobj_Box_6)}
            domqlElementObject={dobj_Box_6}
          />
          <Box
            minWidth="E+A"
            maxWidth="E+A"
            height="Y"
            round="X"
            overflow="hidden"
            theme="primary @dark .inactive"
            tag="progress"
            ref={ref_Box_8}
            value={attr_value_2(dobj_Box_7)}
            {...dobj_Box_7.props}
            max={attr_max_2(dobj_Box_7)}
            progress={attr_progress_2(dobj_Box_7)}
            domqlElementObject={dobj_Box_7}
          />
          <Box
            minWidth="E+A"
            maxWidth="E+A"
            height="Y"
            round="X"
            overflow="hidden"
            theme="primary @dark .inactive"
            tag="progress"
            ref={ref_Box_9}
            value={attr_value_3(dobj_Box_8)}
            {...dobj_Box_8.props}
            max={attr_max_3(dobj_Box_8)}
            progress={attr_progress_3(dobj_Box_8)}
            domqlElementObject={dobj_Box_8}
          />
        </Box>
      </Box>
    </Box>
  );
}
