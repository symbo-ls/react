import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
import { Svg } from "@symbo.ls/react-atoms";
import { css } from "@emotion/css";

const orig = {
  extend: {
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
        theme: 'dialog',
        round: 'Z2'
      }
    },
    props: {
      flow: 'column',
      boxSize: 'fit-content',
      minWidth: 'G3',
      position: 'relative',
      padding: 'Z1 Z2',
      round: 'A1'
    },
    Header: {
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
      },
      props: {
        minWidth: '100%',
        gap: 'A'
      },
      Title: {
        props: {
          align: 'center space-between'
        },
        caption: {
          props: {
            text: 'Title',
            fontSize: 'D',
            padding: 'W2 W2 - W2'
          }
        },
        x: {
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
            icon: 'x',
            fontSize: 'B2',
            boxSize: 'fit-content',
            theme: 'transparent',
            padding: '0'
          }
        }
      },
      Paragraph: {
        props: {
          fontSize: 'Z',
          color: 'gray4',
          padding: '- Y'
        }
      }
    }
  },
  props: {
    alignItems: 'center',
    gap: 'B',
    padding: 'A A A+V A'
  },
  Header: {
    Title: {
      caption: null,
      x: {
        props: {margin: '- - - auto'}
      }
    },
    Paragraph: null
  },
  SuccessIndicator: {fontSize: 'F2'},
  TitleParagraph: {
    alignItems: 'center',
    gap: 'Y',
    Title: {
      text: 'Reset complete!',
      fontSize: 'D1'
    },
    Paragraph: {
      text: 'Your request has been approved!',
      fontSize: 'Z',
      color: 'gray2'
    }
  },
  CommonButton: {
    minWidth: '100%',
    margin: 'Y - - -',
    caption: {
      text: 'Done',
      fontWeight: '500'
    }
  },
  __name: 'CompleteProcess'
};

export function CompleteProcess(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  const ref_Box_12 = useRef(null);
  const ref_Svg_3 = useRef(null);
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

  function attr_type({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex({ props: props4 }) {
    return props4.tabIndex;
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

  function show_Svg({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
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

  function attr_type_2({ props }) {
    return props.type;
  }

  function attr_placeholder_2({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_2({ props }) {
    return props.tabIndex;
  }

  function show_Svg_2({ parent, props }) {
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["SuccessIndicator"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["TitleParagraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["CommonButton"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Header"]["Title"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Svg = dobj["SuccessIndicator"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_6 = dobj["TitleParagraph"]["Title"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["TitleParagraph"]["Paragraph"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Svg_2 = dobj["CommonButton"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_8 = dobj["CommonButton"]["Caption"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Header"]["Title"]["x"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["TitleParagraph"]["Title"]["h5"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["TitleParagraph"]["Paragraph"]["p"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Svg_3 = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      alignItems="center"
      gap="B"
      padding="A A A+V A"
      flow="column"
      boxSize="fit-content"
      minWidth="G3"
      position="relative"
      round="A1"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        minWidth="100%"
        gap="A"
        flow="column"
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
          align="center space-between"
          lineHeight="1em"
          fontWeight="700"
          alignItems="center"
          display="flex"
          tag="div"
          ref={ref_Box_6}
          className={`${css(flow_5(dobj_Box_5))} ${css(
            wrap_5(dobj_Box_5)
          )} ${css(align_5(dobj_Box_5))}`}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        >
          <Box
            margin="- - - auto"
            icon="x"
            fontSize="B2"
            boxSize="fit-content"
            theme="transparent"
            padding="0"
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
            ref={ref_Box_10}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_8(dobj_Box_9))} ${css(
              wrap_8(dobj_Box_9)
            )} ${css(align_8(dobj_Box_9))}`}
            {...dobj_Box_9.props}
            type={attr_type_2(dobj_Box_9)}
            placeholder={attr_placeholder_2(dobj_Box_9)}
            tabIndex={attr_tabIndex_2(dobj_Box_9)}
            domqlElementObject={dobj_Box_9}
          >
            {show_Svg_2(dobj_Svg_3) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
      <Box
        fontSize="F2"
        theme="success"
        padding="X+V2"
        boxSize="fit-content fit-content"
        round="100%"
        tag="div"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Svg
          name="check"
          width="A"
          height="A"
          display="inline-block"
          spriteId="check"
          src='<symbol id="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></symbol>'
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
      </Box>
      <Box
        alignItems="center"
        gap="Y"
        flow="column"
        display="flex"
        tag="div"
        ref={ref_Box_4}
        Title={{
          props: {
            text: "Reset complete!",
            fontSize: "D1",
          },
          __ref: undefined,
        }}
        Paragraph={{
          props: {
            text: "Your request has been approved!",
            fontSize: "Z",
            color: "gray2",
          },
          __ref: undefined,
        }}
        className={`${css(flow_3(dobj_Box_3))} ${css(wrap_3(dobj_Box_3))} ${css(
          align_3(dobj_Box_3)
        )}`}
        {...dobj_Box_3.props}
        domqlElementObject={dobj_Box_3}
      >
        <Box
          text="Reset complete!"
          fontSize="D1"
          align="center space-between"
          display="flex"
          tag="div"
          ref={ref_Box_7}
          className={`${css(flow_6(dobj_Box_6))} ${css(
            wrap_6(dobj_Box_6)
          )} ${css(align_6(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        >
          <Box
            fontSize="A"
            text="Title"
            lineHeight="1em"
            tag="h5"
            ref={ref_Box_11}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          />
        </Box>
        <Box
          text="Your request has been approved!"
          fontSize="Z"
          color="gray2"
          display="flex"
          tag="div"
          ref={ref_Box_8}
          className={`${css(flow_7(dobj_Box_7))} ${css(
            wrap_7(dobj_Box_7)
          )} ${css(align_7(dobj_Box_7))}`}
          {...dobj_Box_7.props}
          domqlElementObject={dobj_Box_7}
        >
          <Box
            text="Paragraph"
            fontSize="Z"
            lineHeight="1em"
            margin="0"
            color="gray2"
            tag="p"
            ref={ref_Box_12}
            {...dobj_Box_11.props}
            domqlElementObject={dobj_Box_11}
          />
        </Box>
      </Box>
      <Box
        minWidth="100%"
        margin="Y - - -"
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
        ref={ref_Box_5}
        caption={{
          text: "Done",
          fontWeight: "500",
        }}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow_4(dobj_Box_4))} ${css(wrap_4(dobj_Box_4))} ${css(
          align_4(dobj_Box_4)
        )}`}
        {...dobj_Box_4.props}
        type={attr_type(dobj_Box_4)}
        placeholder={attr_placeholder(dobj_Box_4)}
        tabIndex={attr_tabIndex(dobj_Box_4)}
        domqlElementObject={dobj_Box_4}
      >
        {show_Svg(dobj_Svg_2) ? (
          <Svg
            fontSize="C"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref_Svg_2}
            dangerouslySetInnerHTML={{ __html: html_2(dobj_Svg_2) }}
            {...dobj_Svg_2.props}
            domqlElementObject={dobj_Svg_2}
          />
        ) : null}
        <Box
          text="Button"
          line_height="1em"
          tag="caption"
          ref={ref_Box_9}
          {...dobj_Box_8.props}
          domqlElementObject={dobj_Box_8}
        />
      </Box>
    </Box>
  );
}

const orig_2 = {
  extend: {
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
        theme: 'dialog',
        round: 'Z2'
      }
    },
    props: {
      flow: 'column',
      boxSize: 'fit-content',
      minWidth: 'G3',
      position: 'relative',
      padding: 'Z1 Z2',
      round: 'A1'
    },
    Header: {
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
      },
      props: {
        minWidth: '100%',
        gap: 'A'
      },
      Title: {
        props: {
          align: 'center space-between'
        },
        caption: {
          props: {
            text: 'Title',
            fontSize: 'D',
            padding: 'W2 W2 - W2'
          }
        },
        x: {
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
            icon: 'x',
            fontSize: 'B2',
            boxSize: 'fit-content',
            theme: 'transparent',
            padding: '0'
          }
        }
      },
      Paragraph: {
        props: {
          fontSize: 'Z',
          color: 'gray4',
          padding: '- Y'
        }
      }
    }
  },
  props: {
    maxWidth: 'G3',
    padding: 'Z1 Z2 Z2 Z2'
  },
  Header: {
    Title: {
      caption: {
        props: {
          text: 'Message',
          fontSize: 'C2'
        }
      },
      x: {props: {padding: 'V2'}}
    },
    Paragraph: {
      props: {
        text: 'Yes. If you change your mind and no longer wish to keep your iPhone, you have the option to return it to us. The returned iPhone must be in good condition and in the original packaging, which contains all accessories, manuals and instructions. Returns are subject to Apple’s Sales and Refunds Policy.'
      }
    }
  },
  __name: 'Message'
};

export function Message(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Header"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Header"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Header"]["Title"]["caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Header"]["Title"]["x"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Svg = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      maxWidth="G3"
      padding="Z1 Z2 Z2 Z2"
      flow="column"
      boxSize="fit-content"
      minWidth="G3"
      position="relative"
      round="A1"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        minWidth="100%"
        gap="A"
        flow="column"
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
          align="center space-between"
          lineHeight="1em"
          fontWeight="700"
          alignItems="center"
          display="flex"
          tag="div"
          ref={ref_Box_3}
          className={`${css(flow_3(dobj_Box_2))} ${css(
            wrap_3(dobj_Box_2)
          )} ${css(align_3(dobj_Box_2))}`}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        >
          <Box
            text="Message"
            fontSize="C2"
            padding="W2 W2 - W2"
            tag="caption"
            ref={ref_Box_5}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
          <Box
            padding="V2"
            icon="x"
            fontSize="B2"
            boxSize="fit-content"
            theme="transparent"
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
            ref={ref_Box_6}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_5(dobj_Box_5))} ${css(
              wrap_5(dobj_Box_5)
            )} ${css(align_5(dobj_Box_5))}`}
            {...dobj_Box_5.props}
            type={attr_type(dobj_Box_5)}
            placeholder={attr_placeholder(dobj_Box_5)}
            tabIndex={attr_tabIndex(dobj_Box_5)}
            domqlElementObject={dobj_Box_5}
          >
            {show_Svg(dobj_Svg) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
          text="Yes. If you change your mind and no longer wish to keep your iPhone, you have the option to return it to us. The returned iPhone must be in good condition and in the original packaging, which contains all accessories, manuals and instructions. Returns are subject to Apple’s Sales and Refunds Policy."
          fontSize="Z"
          color="gray4"
          padding="- Y"
          margin="0"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
      </Box>
    </Box>
  );
}

const orig_3 = {
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
      theme: 'dialog',
      round: 'Z2'
    }
  },
  props: {
    flow: 'column',
    boxSize: 'fit-content',
    minWidth: 'G3',
    position: 'relative',
    padding: 'Z1 Z2',
    round: 'A1'
  },
  Header: {
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
    },
    props: {
      minWidth: '100%',
      gap: 'A'
    },
    Title: {
      props: {
        align: 'center space-between'
      },
      caption: {
        props: {
          text: 'Title',
          fontSize: 'D',
          padding: 'W2 W2 - W2'
        }
      },
      x: {
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
          icon: 'x',
          fontSize: 'B2',
          boxSize: 'fit-content',
          theme: 'transparent',
          padding: '0'
        }
      }
    },
    Paragraph: {
      props: {
        fontSize: 'Z',
        color: 'gray4',
        padding: '- Y'
      }
    }
  },
  __name: 'Modal'
};

export function Modal(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Header"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Header"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Header"]["Title"]["caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Header"]["Title"]["x"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Svg = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      flow="column"
      boxSize="fit-content"
      minWidth="G3"
      position="relative"
      padding="Z1 Z2"
      round="A1"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        minWidth="100%"
        gap="A"
        flow="column"
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
          align="center space-between"
          lineHeight="1em"
          fontWeight="700"
          alignItems="center"
          display="flex"
          tag="div"
          ref={ref_Box_3}
          className={`${css(flow_3(dobj_Box_2))} ${css(
            wrap_3(dobj_Box_2)
          )} ${css(align_3(dobj_Box_2))}`}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        >
          <Box
            text="Title"
            fontSize="D"
            padding="W2 W2 - W2"
            tag="caption"
            ref={ref_Box_5}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
          <Box
            icon="x"
            fontSize="B2"
            boxSize="fit-content"
            theme="transparent"
            padding="0"
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
            ref={ref_Box_6}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_5(dobj_Box_5))} ${css(
              wrap_5(dobj_Box_5)
            )} ${css(align_5(dobj_Box_5))}`}
            {...dobj_Box_5.props}
            type={attr_type(dobj_Box_5)}
            placeholder={attr_placeholder(dobj_Box_5)}
            tabIndex={attr_tabIndex(dobj_Box_5)}
            domqlElementObject={dobj_Box_5}
          >
            {show_Svg(dobj_Svg) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
          fontSize="Z"
          color="gray4"
          padding="- Y"
          margin="0"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
      </Box>
    </Box>
  );
}

const orig_4 = {
  extend: {
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
        theme: 'dialog',
        round: 'Z2'
      }
    },
    props: {
      flow: 'column',
      boxSize: 'fit-content',
      minWidth: 'G3',
      position: 'relative',
      padding: 'Z1 Z2',
      round: 'A1'
    },
    Header: {
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
      },
      props: {
        minWidth: '100%',
        gap: 'A'
      },
      Title: {
        props: {
          align: 'center space-between'
        },
        caption: {
          props: {
            text: 'Title',
            fontSize: 'D',
            padding: 'W2 W2 - W2'
          }
        },
        x: {
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
            icon: 'x',
            fontSize: 'B2',
            boxSize: 'fit-content',
            theme: 'transparent',
            padding: '0'
          }
        }
      },
      Paragraph: {
        props: {
          fontSize: 'Z',
          color: 'gray4',
          padding: '- Y'
        }
      }
    },
    __name: 'Modal'
  },
  props: {
    background: 'gray3',
    gap: 'B',
    minWidth: 'G+B',
    maxWidth: 'G+B',
    padding: 'A1'
  },
  Header: null,
  Content: {
    '0': {
      Unit: {
        props: {text: 'subtotal'}
      },
      Value: {
        props: {text: '$5,499.00'}
      }
    },
    '1': {
      Unit: {
        props: {text: 'Shipping'}
      },
      Value: {props: {text: 'Free'}}
    },
    '2': {
      Unit: {
        props: {text: 'Savings'}
      },
      Value: {
        props: {text: '$1,600.00'}
      }
    },
    props: {
      flow: 'column',
      gap: 'A1'
    },
    childExtend: {
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
          color: 'gray2',
          align: 'center flex-start',
          gap: 'V',
          fontWeight: '400',
          '> *': {lineHeight: '1em'}
        },
        Value: {props: {text: '72'}},
        Unit: {props: {text: '%'}}
      },
      props: {
        justifyContent: 'space-between',
        textTransform: 'capitalize',
        color: 'white'
      }
    }
  },
  Footer: {
    props: {margin: '- -X -X'},
    CommonButton: {
      flex: '1',
      padding: 'Z2 -',
      round: 'Y2',
      theme: 'secondary',
      margin: '- -X -X',
      Caption: {
        text: 'Add promo code',
        fontSize: 'Z',
        fontWeight: '500'
      }
    }
  },
  __name: 'Pricing'
};

export function Pricing(props) {
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
  const ref_Box_12 = useRef(null);
  const ref_Box_13 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_14 = useRef(null);
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

  function attr_type({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex({ props: props4 }) {
    return props4.tabIndex;
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
    ...createSync({
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
  const dobj_Box = dobj["Content"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Footer"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Content"]["0"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Content"]["1"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Content"]["2"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Footer"]["CommonButton"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Content"]["0"]["Unit"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Content"]["0"]["Value"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Content"]["1"]["Unit"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Content"]["1"]["Value"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Content"]["2"]["Unit"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Content"]["2"]["Value"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Svg = dobj["Footer"]["CommonButton"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_13 = dobj["Footer"]["CommonButton"]["Caption"]
  dobj_Box_13.node = ref_Box_14.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      background="gray3"
      gap="B"
      minWidth="G+B"
      maxWidth="G+B"
      padding="A1"
      flow="column"
      boxSize="fit-content"
      position="relative"
      round="A1"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        flow="column"
        gap="A1"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Box
          justifyContent="space-between"
          textTransform="capitalize"
          color="white"
          align="center flex-start"
          gap="V"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_2(dobj_Box_3))} ${css(
            wrap_2(dobj_Box_3)
          )} ${css(align_2(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            text="subtotal"
            tag="div"
            ref={ref_Box_8}
            {...dobj_Box_7.props}
            domqlElementObject={dobj_Box_7}
          />
          <Box
            text="$5,499.00"
            tag="div"
            ref={ref_Box_9}
            {...dobj_Box_8.props}
            domqlElementObject={dobj_Box_8}
          />
        </Box>
        <Box
          justifyContent="space-between"
          textTransform="capitalize"
          color="white"
          align="center flex-start"
          gap="V"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_5}
          className={`${css(flow_3(dobj_Box_4))} ${css(
            wrap_3(dobj_Box_4)
          )} ${css(align_3(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            text="Shipping"
            tag="div"
            ref={ref_Box_10}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          />
          <Box
            text="Free"
            tag="div"
            ref={ref_Box_11}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          />
        </Box>
        <Box
          justifyContent="space-between"
          textTransform="capitalize"
          color="white"
          align="center flex-start"
          gap="V"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_6}
          className={`${css(flow_4(dobj_Box_5))} ${css(
            wrap_4(dobj_Box_5)
          )} ${css(align_4(dobj_Box_5))}`}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        >
          <Box
            text="Savings"
            tag="div"
            ref={ref_Box_12}
            {...dobj_Box_11.props}
            domqlElementObject={dobj_Box_11}
          />
          <Box
            text="$1,600.00"
            tag="div"
            ref={ref_Box_13}
            {...dobj_Box_12.props}
            domqlElementObject={dobj_Box_12}
          />
        </Box>
      </Box>
      <Box
        margin="- -X -X"
        tag="div"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Box
          flex="1"
          padding="Z2 -"
          round="Y2"
          theme="secondary"
          margin="- -X -X"
          boxSize="fit-content"
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
          ref={ref_Box_7}
          Caption={{
            props: {
              text: "Add promo code",
              fontSize: "Z",
              fontWeight: "500",
            },
            __ref: undefined,
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
            text="Add promo code"
            fontSize="Z"
            fontWeight="500"
            line_height="1em"
            tag="caption"
            ref={ref_Box_14}
            {...dobj_Box_13.props}
            domqlElementObject={dobj_Box_13}
          />
        </Box>
      </Box>
    </Box>
  );
}
