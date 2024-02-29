import React, { useRef, useContext } from 'react';
import  * as D  from '@symbo.ls/button';
import '@symbo.ls/button';
import { IconText } from '@symbo.ls/react-icon';
import { Box, SymbolsProvider } from '@symbo.ls/react';
import { create } from '@symbo.ls/create';
import { deepMerge } from '@domql/utils';
import { css } from '@emotion/css';
import { Svg } from '@symbo.ls/react-atoms';

export const Button = (props) => <IconText tag='button' {...props} />
Button.defaultProps = D.Button.props
const orig = {
  tag: 'nav',
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
  childExtend: {
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
      Icon: {name: 'smile'},
      boxSize: 'fit-content fit-content',
      padding: 'Z2',
      theme: 'tertiary'
    },
    caption: null
  },
  __name: 'ButtonSet'
};
export function ButtonSet(props) {
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
      display="flex"
      tag="nav"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_2 = {
  '0': {
    caption: {props: {text: 'No'}}
  },
  '1': {
    caption: {props: {text: 'Yes'}}
  },
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
    gap: 'Z2',
    maxWidth: 'fit-content'
  },
  childExtend: {
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
      ':first-child': {
        theme: 'transparent',
        padding: '- Y1'
      }
    }
  },
  __name: 'CancelConfirmButtons'
};
export function CancelConfirmButtons(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Svg_2 = useRef(null);
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

  function attr_type({ props }) {
    return props.type;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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

  function attr_type_2({ props }) {
    return props.type;
  }

  function attr_placeholder_2({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_2({ props }) {
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
  const dobj_Box = dobj["0"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["1"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["0"]["caption"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Svg = dobj["0"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_4 = dobj["1"]["caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Svg_2 = dobj["1"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="Z2"
      maxWidth="fit-content"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        theme="primary"
        boxSize="fit-content"
        padding="Z2 A2"
        round="Z1"
        gap="X1"
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
        ref={ref_Box_2}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow_2(dobj_Box))} ${css(wrap_2(dobj_Box))} ${css(
          align_2(dobj_Box)
        )}`}
        {...dobj_Box.props}
        type={attr_type(dobj_Box)}
        placeholder={attr_placeholder(dobj_Box)}
        tabIndex={attr_tabIndex(dobj_Box)}
        domqlElementObject={dobj_Box}
      >
        <Box
          text="No"
          line_height="1em"
          fontSize="Z2"
          letterSpacing=".005em"
          tag="caption"
          ref={ref_Box_4}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
        {show_Svg(dobj_Svg) ? (
          <Svg
            fontSize="B1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref_Svg}
            dangerouslySetInnerHTML={{ __html: html(dobj_Svg) }}
            {...dobj_Svg.props}
            domqlElementObject={dobj_Svg}
          />
        ) : null}
      </Box>
      <Box
        theme="primary"
        boxSize="fit-content"
        padding="Z2 A2"
        round="Z1"
        gap="X1"
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
        ref={ref_Box_3}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        type={attr_type_2(dobj_Box_2)}
        placeholder={attr_placeholder_2(dobj_Box_2)}
        tabIndex={attr_tabIndex_2(dobj_Box_2)}
        domqlElementObject={dobj_Box_2}
      >
        <Box
          text="Yes"
          line_height="1em"
          fontSize="Z2"
          letterSpacing=".005em"
          tag="caption"
          ref={ref_Box_5}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
        {show_Svg_2(dobj_Svg_2) ? (
          <Svg
            fontSize="B1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref_Svg_2}
            dangerouslySetInnerHTML={{ __html: html_2(dobj_Svg_2) }}
            {...dobj_Svg_2.props}
            domqlElementObject={dobj_Svg_2}
          />
        ) : null}
      </Box>
    </Box>
  );
}
const orig_3 = {
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
      fontSize: 'A',
      width: 'A',
      padding: 'Z',
      aspectRatio: '1 / 1',
      justifyContent: 'center',
      round: 'Z',
      boxSizing: 'content-box'
    }
  },
  props: {round: 'C'},
  __name: 'CircleButton'
};
export function CircleButton(props) {
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
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      round="C"
      fontSize="A"
      width="A"
      padding="Z"
      aspectRatio="1 / 1"
      justifyContent="center"
      boxSizing="content-box"
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
      ref={ref_Box}
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
const orig_4 = {
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
  },
  __name: 'CommonButton'
};
export function CommonButton(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_2 = useRef(null);
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
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box = dobj["caption"]
  dobj_Box.node = ref_Box_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      theme="primary"
      boxSize="fit-content"
      padding="Z2 A2"
      round="Z1"
      gap="X1"
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
      ref={ref_Box}
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
      {show_Svg(dobj_Svg) ? (
        <Svg
          fontSize="B1"
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
        fontSize="Z2"
        letterSpacing=".005em"
        tag="caption"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
    </Box>
  );
}
const orig_5 = {
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
    },
    __name: 'CommonButton'
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
  },
  __name: 'DropDownButton'
};
export function DropDownButton(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_2 = useRef(null);
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
  const dobj_Box = dobj["caption"]
  dobj_Box.node = ref_Box_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="X2"
      boxSize="fit-content fit-content"
      padding="Z1 A1 Z Z1"
      theme="dialog"
      color="white"
      round="Z1"
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
      ref={ref_Box}
      Icon={{
        props: {
          name: "chevronDown",
          fontSize: "D",
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
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      type={attr_type(dobj)}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      {show_Svg(dobj_Svg) ? (
        <Svg
          name="chevronDown"
          fontSize="D"
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
      <Box
        text="All"
        line_height="1em"
        fontSize="Z2"
        letterSpacing=".005em"
        tag="caption"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
    </Box>
  );
}
const orig_6 = {
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
      },
      __name: 'CommonButton'
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
    },
    __name: 'DropDownButton'
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
  },
  __name: 'DropDownButtonWithAvatar'
};
export function DropDownButtonWithAvatar(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
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
      ...deepMerge(cleanProps, orig_6),
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
  const dobj_Box = dobj["Avatar"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["caption"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="Y"
      padding="Y"
      round="Z1"
      theme="dialog"
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
      ref={ref_Box}
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
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      type={attr_type(dobj)}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="A2+V1"
        display="block"
        avatarType="initials"
        borderRadius="100%"
        src="https://api.dicebear.com/7.x/initials/svg?seed=Avatar"
        tag="img"
        ref={ref_Box_2}
        {...dobj_Box.props}
        src={attr_src(dobj_Box)}
        alt={attr_alt(dobj_Box)}
        title={attr_title(dobj_Box)}
        domqlElementObject={dobj_Box}
      />
      <Box
        text="All"
        fontSize="Y1"
        fontWeight="400"
        line_height="1em"
        letterSpacing=".005em"
        tag="caption"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
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
  );
}
const orig_7 = {
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
    },
    __name: 'CommonButton'
  },
  props: {
    Icon: {name: 'smile'},
    boxSize: 'fit-content fit-content',
    padding: 'Z2',
    theme: 'tertiary'
  },
  caption: null,
  __name: 'IconCommonButton'
};
export function IconCommonButton(props) {
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
    ...create({
      ...deepMerge(cleanProps, orig_7),
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
      boxSize="fit-content fit-content"
      padding="Z2"
      theme="tertiary"
      round="Z1"
      gap="X1"
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
      ref={ref_Box}
      Icon={{
        props: {
          name: "smile",
        },
        __ref: undefined,
      }}
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
      {show_Svg(dobj_Svg) ? (
        <Svg
          name="smile"
          fontSize="B1"
          width="A"
          height="A"
          display="inline-block"
          spriteId="smile"
          src='<symbol id="smile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></symbol>'
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
const orig_8 = {
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
    },
    __name: 'CommonButton'
  },
  props: {
    position: 'relative',
    theme: 'tertiary',
    padding: 'Z2 A',
    Icon: {name: 'smile'}
  },
  __name: 'IcontextButton'
};
export function IcontextButton(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_2 = useRef(null);
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
    ...create({
      ...deepMerge(cleanProps, orig_8),
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
  const dobj_Box = dobj["caption"]
  dobj_Box.node = ref_Box_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      position="relative"
      theme="tertiary"
      padding="Z2 A"
      boxSize="fit-content"
      round="Z1"
      gap="X1"
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
      ref={ref_Box}
      Icon={{
        props: {
          name: "smile",
        },
        __ref: undefined,
      }}
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
      {show_Svg(dobj_Svg) ? (
        <Svg
          name="smile"
          fontSize="B1"
          width="A"
          height="A"
          display="inline-block"
          spriteId="smile"
          src='<symbol id="smile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></symbol>'
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
      <Box
        text="Button"
        line_height="1em"
        fontSize="Z2"
        letterSpacing=".005em"
        tag="caption"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
    </Box>
  );
}
const orig_9 = {
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
  childExtend: {
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
  __name: 'KangorooButton'
};
export function KangorooButton(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
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

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_9),
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
  const dobj_Svg_2 = dobj["Icon"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      fontSize="A"
      type="button"
      border="none"
      display="inline-flex"
      align="center center"
      textDecoration="none"
      lineHeight="1"
      whiteSpace="nowrap"
      padding="Z A1"
      fontFamily="inherit"
      round="C2"
      outline="solid, 0, blue .3"
      tag="button"
      ref={ref_Box}
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
      {show_Svg(dobj_Svg) ? (
        <Svg
          width="A"
          height="A"
          display="inline-block"
          align="center center"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          ref={ref_Svg}
          style={{
            fill: "currentColor",
            "*": {
              fill: "currentColor",
            },
          }}
          lineHeight={1}
          dangerouslySetInnerHTML={{ __html: html(dobj_Svg) }}
          className={`${css(flow_2(dobj_Svg))} ${css(wrap_2(dobj_Svg))} ${css(
            align_2(dobj_Svg)
          )}`}
          {...dobj_Svg.props}
          domqlElementObject={dobj_Svg}
        >
          {show_Svg_2(dobj_Svg_2) ? (
            <Svg
              width="A"
              height="A"
              display="inline-block"
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
        </Svg>
      ) : null}
    </Box>
  );
}
const orig_10 = {
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
    alignItems: 'center',
    gap: 'A'
  },
  Minus: {
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
        },
        __name: 'CommonButton'
      },
      props: {
        Icon: {name: 'smile'},
        boxSize: 'fit-content fit-content',
        padding: 'Z2',
        theme: 'tertiary'
      },
      caption: null,
      __name: 'IconCommonButton'
    },
    props: {Icon: {name: 'minus'}}
  },
  Value: {props: {text: '1'}},
  Plus: {
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
        },
        __name: 'CommonButton'
      },
      props: {
        Icon: {name: 'smile'},
        boxSize: 'fit-content fit-content',
        padding: 'Z2',
        theme: 'tertiary'
      },
      caption: null,
      __name: 'IconCommonButton'
    },
    props: {Icon: {name: 'plus'}}
  },
  __name: 'PlusMinusButtons'
};
export function PlusMinusButtons(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
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

  function attr_type({ props }) {
    return props.type;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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

  function attr_type_2({ props }) {
    return props.type;
  }

  function attr_placeholder_2({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_2({ props }) {
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

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_10),
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
  const dobj_Box = dobj["Minus"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Value"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Plus"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Svg = dobj["Minus"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["Plus"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      alignItems="center"
      gap="A"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="fit-content fit-content"
        padding="Z2"
        theme="tertiary"
        round="Z1"
        gap="X1"
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
        ref={ref_Box_2}
        Icon={{
          props: {
            name: "minus",
          },
          __ref: undefined,
        }}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow_2(dobj_Box))} ${css(wrap_2(dobj_Box))} ${css(
          align_2(dobj_Box)
        )}`}
        {...dobj_Box.props}
        type={attr_type(dobj_Box)}
        placeholder={attr_placeholder(dobj_Box)}
        tabIndex={attr_tabIndex(dobj_Box)}
        domqlElementObject={dobj_Box}
      >
        {show_Svg(dobj_Svg) ? (
          <Svg
            name="minus"
            fontSize="B1"
            width="A"
            height="A"
            display="inline-block"
            spriteId="minus"
            src='<symbol id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></symbol>'
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
      <Box
        text="1"
        tag="div"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
      <Box
        boxSize="fit-content fit-content"
        padding="Z2"
        theme="tertiary"
        round="Z1"
        gap="X1"
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
        Icon={{
          props: {
            name: "plus",
          },
          __ref: undefined,
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
        type={attr_type_2(dobj_Box_3)}
        placeholder={attr_placeholder_2(dobj_Box_3)}
        tabIndex={attr_tabIndex_2(dobj_Box_3)}
        domqlElementObject={dobj_Box_3}
      >
        {show_Svg_2(dobj_Svg_2) ? (
          <Svg
            name="plus"
            fontSize="B1"
            width="A"
            height="A"
            display="inline-block"
            spriteId="plus"
            src='<symbol id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></symbol>'
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
  );
}
const orig_11 = {
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
    fontSize: 'A',
    width: 'A',
    padding: 'Z',
    aspectRatio: '1 / 1',
    justifyContent: 'center',
    round: 'Z',
    boxSizing: 'content-box'
  },
  __name: 'SquareButton'
};
export function SquareButton(props) {
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
    ...create({
      ...deepMerge(cleanProps, orig_11),
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
      fontSize="A"
      width="A"
      padding="Z"
      aspectRatio="1 / 1"
      justifyContent="center"
      round="Z"
      boxSizing="content-box"
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
      ref={ref_Box}
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