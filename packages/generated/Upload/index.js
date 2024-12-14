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
    position: 'relative',
    theme: 'transparent',
    padding: '0',
    color: '#0474F2',
    boxSize: 'fit-content fit-content',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  caption: {
    props: {text: 'Choose file'}
  },
  Input: {
    type: 'file',
    inset: '0 0 0 0',
    position: 'absolute',
    boxSize: '100% 100%',
    top: '0',
    left: '0',
    opacity: '0',
    cursor: 'pointer'
  },
  __name: 'UploadButton'
};

export function UploadButton(props) {
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

  function attr_pattern({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required({ props: props4 }) {
    return props4.required;
  }

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_2({ props: props4 }) {
    return props4.tabIndex;
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
  const dobj_Box = dobj["caption"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Input"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      position="relative"
      theme="transparent"
      padding="0"
      color="#0474F2"
      boxSize="fit-content fit-content"
      overflow="hidden"
      cursor="pointer"
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
        text="Choose file"
        line_height="1em"
        fontSize="Z2"
        letterSpacing=".005em"
        tag="caption"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        type="file"
        inset="0 0 0 0"
        position="absolute"
        boxSize="100% 100%"
        top="0"
        left="0"
        opacity="0"
        cursor="pointer"
        border="none"
        theme="tertiary"
        fontSize="A"
        round="C"
        fontFamily="smbls"
        padding="Z A"
        outline="solid, 0, blue .3"
        tag="input"
        ref={ref_Box_3}
        lineHeight={1}
        {...dobj_Box_2.props}
        pattern={attr_pattern(dobj_Box_2)}
        minLength={attr_minLength(dobj_Box_2)}
        maxLength={attr_maxLength(dobj_Box_2)}
        name={attr_name(dobj_Box_2)}
        autoComplete={attr_autocomplete(dobj_Box_2)}
        placeholder={attr_placeholder_2(dobj_Box_2)}
        value={attr_value(dobj_Box_2)}
        disabled={attr_disabled(dobj_Box_2)}
        readonly={attr_readonly(dobj_Box_2)}
        required={attr_required(dobj_Box_2)}
        type={attr_type_2(dobj_Box_2)}
        tabIndex={attr_tabIndex_2(dobj_Box_2)}
        domqlElementObject={dobj_Box_2}
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
  );
}

const orig_2 = {
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
      position: 'relative',
      theme: 'transparent',
      padding: '0',
      color: '#0474F2',
      boxSize: 'fit-content fit-content',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    caption: {
      props: {text: 'Choose file'}
    },
    Input: {
      type: 'file',
      inset: '0 0 0 0',
      position: 'absolute',
      boxSize: '100% 100%',
      top: '0',
      left: '0',
      opacity: '0',
      cursor: 'pointer'
    },
    __name: 'UploadButton'
  },
  props: {
    fontFamily: 'Avenir',
    theme: 'primary',
    color: 'white',
    padding: 'Z2 A1'
  },
  caption: {
    props: {text: 'Browse files'}
  },
  __name: 'UploadButtonWithBackground'
};

export function UploadButtonWithBackground(props) {
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

  function attr_pattern({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required({ props: props4 }) {
    return props4.required;
  }

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_2({ props: props4 }) {
    return props4.tabIndex;
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
  const dobj_Box = dobj["caption"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Input"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      fontFamily="Avenir"
      theme="primary"
      color="white"
      padding="Z2 A1"
      position="relative"
      boxSize="fit-content fit-content"
      overflow="hidden"
      cursor="pointer"
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
      <Box
        text="Browse files"
        line_height="1em"
        fontSize="Z2"
        letterSpacing=".005em"
        tag="caption"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        type="file"
        inset="0 0 0 0"
        position="absolute"
        boxSize="100% 100%"
        top="0"
        left="0"
        opacity="0"
        cursor="pointer"
        border="none"
        theme="tertiary"
        fontSize="A"
        round="C"
        fontFamily="smbls"
        padding="Z A"
        outline="solid, 0, blue .3"
        tag="input"
        ref={ref_Box_3}
        lineHeight={1}
        {...dobj_Box_2.props}
        pattern={attr_pattern(dobj_Box_2)}
        minLength={attr_minLength(dobj_Box_2)}
        maxLength={attr_maxLength(dobj_Box_2)}
        name={attr_name(dobj_Box_2)}
        autoComplete={attr_autocomplete(dobj_Box_2)}
        placeholder={attr_placeholder_2(dobj_Box_2)}
        value={attr_value(dobj_Box_2)}
        disabled={attr_disabled(dobj_Box_2)}
        readonly={attr_readonly(dobj_Box_2)}
        required={attr_required(dobj_Box_2)}
        type={attr_type_2(dobj_Box_2)}
        tabIndex={attr_tabIndex_2(dobj_Box_2)}
        domqlElementObject={dobj_Box_2}
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
  );
}

import { IconText } from "@symbo.ls/react";

const orig_3 = {
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
    gap: 'E',
    align: 'center space-between',
    boxSize: 'fit-content'
  },
  IconText: {
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
    props: {
      icon: 'info',
      text: 'Support',
      gap: 'Y',
      fontSize: 'Z',
      fontWeight: '400'
    }
  },
  Buttons: {
    '0': {
      caption: {
        props: {text: 'Cancel'}
      }
    },
    '1': {
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
            position: 'relative',
            theme: 'transparent',
            padding: '0',
            color: '#0474F2',
            boxSize: 'fit-content fit-content',
            overflow: 'hidden',
            cursor: 'pointer'
          },
          caption: {
            props: {text: 'Choose file'}
          },
          Input: {
            type: 'file',
            inset: '0 0 0 0',
            position: 'absolute',
            boxSize: '100% 100%',
            top: '0',
            left: '0',
            opacity: '0',
            cursor: 'pointer'
          },
          __name: 'UploadButton'
        },
        props: {
          fontFamily: 'Avenir',
          theme: 'primary',
          color: 'white',
          padding: 'Z2 A1'
        },
        caption: {
          props: {text: 'Browse files'}
        },
        __name: 'UploadButtonWithBackground'
      },
      caption: {
        props: {text: 'Attach file'}
      }
    },
    extend: {
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
      }
    },
    props: {
      childProps: {
        padding: 'Z2 A1',
        ':first-child': {
          theme: 'tertiary',
          padding: '- A1'
        },
        caption: {
          fontSize: 'Z2',
          fontWeight: '400',
          letterSpacing: '.3px'
        }
      }
    }
  },
  __name: 'UploadFooter'
};

export function UploadFooter(props) {
  const ref_Box = useRef(null);
  const ref_IconText = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
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

  function attr_pattern({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required({ props: props4 }) {
    return props4.required;
  }

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_3({ props: props4 }) {
    return props4.tabIndex;
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
  const dobj_IconText = dobj["IconText"]
  dobj_IconText.node = ref_IconText.current
  const dobj_Box = dobj["Buttons"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Svg = dobj["IconText"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_2 = dobj["Buttons"]["0"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Buttons"]["1"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Buttons"]["0"]["caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Svg_2 = dobj["Buttons"]["0"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_5 = dobj["Buttons"]["1"]["caption"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Buttons"]["1"]["Input"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Svg_3 = dobj["Buttons"]["1"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="E"
      align="center space-between"
      boxSize="fit-content"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <IconText
        icon="info"
        text="Support"
        gap="Y"
        fontSize="Z"
        fontWeight="400"
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
        Support
        {show_Svg(dobj_Svg) ? (
          <Svg
            icon="info"
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
      <Box
        gap="Z2"
        maxWidth="fit-content"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        childProps={{
          padding: "Z2 A1",
          ":first-child": {
            theme: "tertiary",
            padding: "- A1",
          },
          caption: {
            fontSize: "Z2",
            fontWeight: "400",
            letterSpacing: ".3px",
          },
        }}
        className={`${css(flow_3(dobj_Box))} ${css(wrap_3(dobj_Box))} ${css(
          align_3(dobj_Box)
        )}`}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Box
          padding="Z2 A1"
          theme="primary"
          boxSize="fit-content"
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
          caption={{
            fontSize: "Z2",
            fontWeight: "400",
            letterSpacing: ".3px",
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_4(dobj_Box_2))} ${css(
            wrap_4(dobj_Box_2)
          )} ${css(align_4(dobj_Box_2))}`}
          {...dobj_Box_2.props}
          type={attr_type(dobj_Box_2)}
          placeholder={attr_placeholder(dobj_Box_2)}
          tabIndex={attr_tabIndex(dobj_Box_2)}
          domqlElementObject={dobj_Box_2}
        >
          <Box
            fontSize="Z2"
            fontWeight="400"
            letterSpacing=".3px"
            text="Cancel"
            line_height="1em"
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
        <Box
          padding="Z2 A1"
          fontFamily="Avenir"
          theme="primary"
          color="white"
          position="relative"
          boxSize="fit-content fit-content"
          overflow="hidden"
          cursor="pointer"
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
          outline="solid, 0, blue .3"
          tag="button"
          ref={ref_Box_4}
          caption={{
            fontSize: "Z2",
            fontWeight: "400",
            letterSpacing: ".3px",
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_5(dobj_Box_3))} ${css(
            wrap_5(dobj_Box_3)
          )} ${css(align_5(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          type={attr_type_2(dobj_Box_3)}
          placeholder={attr_placeholder_2(dobj_Box_3)}
          tabIndex={attr_tabIndex_2(dobj_Box_3)}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            fontSize="Z2"
            fontWeight="400"
            letterSpacing=".3px"
            text="Attach file"
            line_height="1em"
            tag="caption"
            ref={ref_Box_6}
            {...dobj_Box_5.props}
            domqlElementObject={dobj_Box_5}
          />
          <Box
            type="file"
            inset="0 0 0 0"
            position="absolute"
            boxSize="100% 100%"
            top="0"
            left="0"
            opacity="0"
            cursor="pointer"
            border="none"
            theme="tertiary"
            fontSize="A"
            round="C"
            fontFamily="smbls"
            padding="Z A"
            outline="solid, 0, blue .3"
            tag="input"
            ref={ref_Box_7}
            lineHeight={1}
            {...dobj_Box_6.props}
            pattern={attr_pattern(dobj_Box_6)}
            minLength={attr_minLength(dobj_Box_6)}
            maxLength={attr_maxLength(dobj_Box_6)}
            name={attr_name(dobj_Box_6)}
            autoComplete={attr_autocomplete(dobj_Box_6)}
            placeholder={attr_placeholder_3(dobj_Box_6)}
            value={attr_value(dobj_Box_6)}
            disabled={attr_disabled(dobj_Box_6)}
            readonly={attr_readonly(dobj_Box_6)}
            required={attr_required(dobj_Box_6)}
            type={attr_type_3(dobj_Box_6)}
            tabIndex={attr_tabIndex_3(dobj_Box_6)}
            domqlElementObject={dobj_Box_6}
          />
          {show_Svg_3(dobj_Svg_3) ? (
            <Svg
              fontSize="B1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ref={ref_Svg_3}
              dangerouslySetInnerHTML={{ __html: html_3(dobj_Svg_3) }}
              {...dobj_Svg_3.props}
              domqlElementObject={dobj_Svg_3}
            />
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}

import { Input, P } from "@symbo.ls/react";

const orig_4 = {
  extend: [
    {
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
    {
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
    }
  ],
  tag: 'label',
  props: {
    position: 'relative',
    theme: 'tertiary',
    flow: 'column',
    align: 'center center',
    round: 'A',
    cursor: 'pointer',
    border: '1.6px, dashed, white 0.1',
    padding: 'B B2'
  },
  Input: {
    props: {
      type: 'file',
      position: 'absolute',
      inset: '0 0 0 0',
      opacity: '0',
      visibility: 'hidden'
    }
  },
  Icon: {
    props: {
      name: 'upload',
      fontSize: 'B',
      opacity: '.2'
    }
  },
  P: {
    props: {
      text: ' or click and upload from your computer',
      flexFlow: 'column',
      flexAlign: 'center center',
      opacity: '.22',
      margin: '0'
    },
    Span: {
      text: 'Drag and drop your font file',
      display: 'block'
    }
  },
  __name: 'UploadIcon'
};

export function UploadIcon(props) {
  const ref_Box = useRef(null);
  const ref_Input = useRef(null);
  const ref_Svg = useRef(null);
  const ref_P = useRef(null);
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

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
  }

  function attr_pattern({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required({ props: props4 }) {
    return props4.required;
  }

  function attr_type({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_2({ props: props4 }) {
    return props4.tabIndex;
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
  const dobj_Input = dobj["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_P = dobj["P"]
  dobj_P.node = ref_P.current
  const dobj_Box = dobj["P"]["Span"]
  dobj_Box.node = ref_Box_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      position="relative"
      theme="tertiary"
      flow="column"
      align="center center"
      round="A"
      cursor="pointer"
      border="1.6px, dashed, white 0.1"
      padding="B B2"
      outline="solid, 0, blue .3"
      display="flex"
      tag="label"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      <Input
        type="file"
        position="absolute"
        inset="0 0 0 0"
        opacity="0"
        visibility="hidden"
        border="none"
        theme="tertiary"
        fontSize="A"
        round="C"
        fontFamily="smbls"
        padding="Z A"
        outline="solid, 0, blue .3"
        ref={ref_Input}
        lineHeight={1}
        {...dobj_Input.props}
        pattern={attr_pattern(dobj_Input)}
        minLength={attr_minLength(dobj_Input)}
        maxLength={attr_maxLength(dobj_Input)}
        name={attr_name(dobj_Input)}
        autoComplete={attr_autocomplete(dobj_Input)}
        placeholder={attr_placeholder_2(dobj_Input)}
        value={attr_value(dobj_Input)}
        disabled={attr_disabled(dobj_Input)}
        readonly={attr_readonly(dobj_Input)}
        required={attr_required(dobj_Input)}
        type={attr_type(dobj_Input)}
        tabIndex={attr_tabIndex_2(dobj_Input)}
        domqlElementObject={dobj_Input}
      />
      <Svg
        name="upload"
        fontSize="B"
        opacity=".2"
        width="A"
        height="A"
        display="inline-block"
        spriteId="upload"
        src='<symbol id="upload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></symbol>'
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
      <P
        text=" or click and upload from your computer"
        flexFlow="column"
        flexAlign="center center"
        opacity=".22"
        margin="0"
        ref={ref_P}
        {...dobj_P.props}
        domqlElementObject={dobj_P}
      >
        <Box
          text="Drag and drop your font file"
          display="block"
          tag="span"
          ref={ref_Box_2}
          {...dobj_Box.props}
          domqlElementObject={dobj_Box}
        />
      </P>
    </Box>
  );
}

const orig_5 = {
  props: {
    padding: 'A+V',
    theme: 'tertiary',
    boxSize: 'fit-content',
    round: 'Z2'
  },
  Icon: {
    name: 'file',
    fontSize: 'C2'
  },
  __name: 'UploadImage'
};

export function UploadImage(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      padding="A+V"
      theme="tertiary"
      boxSize="fit-content"
      round="Z2"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Svg
        name="file"
        fontSize="C2"
        width="A"
        height="A"
        display="inline-block"
        spriteId="file"
        src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
  );
}

import { TitleParagraph } from "@symbo.ls/react";

const orig_6 = {
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
    align: 'center flex-start',
    boxSize: 'fit-content fit-content',
    gap: 'B2',
    padding: 'C D1',
    round: 'A',
    border: 'solid, gray2 .05',
    borderWidth: '1px',
    theme: 'dialog'
  },
  Icon: {
    name: 'file',
    fontSize: 'I1',
    color: '#818186'
  },
  TitleParagraph: {
    props: {
      align: 'center flex-start',
      gap: 'Z',
      fontWeight: '400'
    },
    Title: {
      props: {
        text: 'Drag & drop your files here or',
        flow: 'row-reverse',
        fontWeight: '400',
        gap: 'Y2',
        align: 'center flex-start',
        fontSize: 'Z1',
        color: 'gray2'
      },
      UploadButton: {
        caption: {
          fontSize: 'A1',
          fontWeight: '500'
        }
      }
    },
    Paragraph: {
      props: {
        text: '50 MB max file size',
        fontSize: 'Z'
      }
    }
  },
  __name: 'UploadLabel'
};

export function UploadLabel(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
  const ref_TitleParagraph = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_8 = useRef(null);
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

  function attr_type({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex({ props: props4 }) {
    return props4.tabIndex;
  }

  function attr_pattern({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required({ props: props4 }) {
    return props4.required;
  }

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_2({ props: props4 }) {
    return props4.tabIndex;
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

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...createSync({
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
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_TitleParagraph = dobj["TitleParagraph"]
  dobj_TitleParagraph.node = ref_TitleParagraph.current
  const dobj_Box = dobj["TitleParagraph"]["Title"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["TitleParagraph"]["Paragraph"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["TitleParagraph"]["Title"]["UploadButton"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["TitleParagraph"]["Title"]["h5"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["TitleParagraph"]["Paragraph"]["p"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["TitleParagraph"]["Title"]["UploadButton"]["Input"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Svg_2 = dobj["TitleParagraph"]["Title"]["UploadButton"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_7 = dobj["TitleParagraph"]["Title"]["UploadButton"]["Caption"]
  dobj_Box_7.node = ref_Box_8.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      flow="column"
      align="center flex-start"
      boxSize="fit-content fit-content"
      gap="B2"
      padding="C D1"
      round="A"
      border="solid, gray2 .05"
      borderWidth="1px"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Svg
        name="file"
        fontSize="I1"
        color="#818186"
        width="A"
        height="A"
        display="inline-block"
        spriteId="file"
        src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
      <TitleParagraph
        align="center flex-start"
        gap="Z"
        fontWeight="400"
        flow="column"
        display="flex"
        ref={ref_TitleParagraph}
        className={`${css(flow_2(dobj_TitleParagraph))} ${css(
          wrap_2(dobj_TitleParagraph)
        )} ${css(align_2(dobj_TitleParagraph))}`}
        {...dobj_TitleParagraph.props}
        domqlElementObject={dobj_TitleParagraph}
      >
        <Box
          text="Drag & drop your files here or"
          flow="row-reverse"
          fontWeight="400"
          gap="Y2"
          align="center flex-start"
          fontSize="Z1"
          color="gray2"
          display="flex"
          tag="div"
          ref={ref_Box_2}
          className={`${css(flow_3(dobj_Box))} ${css(wrap_3(dobj_Box))} ${css(
            align_3(dobj_Box)
          )}`}
          {...dobj_Box.props}
          domqlElementObject={dobj_Box}
        >
          <Box
            position="relative"
            theme="transparent"
            padding="0"
            color="#0474F2"
            boxSize="fit-content fit-content"
            overflow="hidden"
            fontWeight="500"
            cursor="pointer"
            round="Z2"
            gap="Y2"
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
              fontSize: "A1",
              fontWeight: "500",
            }}
            Caption={{
              props: {
                text: "Choose file",
              },
              __ref: undefined,
            }}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_5(dobj_Box_3))} ${css(
              wrap_5(dobj_Box_3)
            )} ${css(align_5(dobj_Box_3))}`}
            {...dobj_Box_3.props}
            type={attr_type(dobj_Box_3)}
            placeholder={attr_placeholder(dobj_Box_3)}
            tabIndex={attr_tabIndex(dobj_Box_3)}
            domqlElementObject={dobj_Box_3}
          >
            <Box
              type="file"
              inset="0 0 0 0"
              border="2px solid red"
              position="absolute"
              boxSize="100% 100%"
              top="0"
              left="0"
              opacity="0"
              cursor="pointer"
              theme="tertiary"
              fontSize="A"
              round="C"
              fontFamily="smbls"
              padding="Z A"
              outline="solid, 0, blue .3"
              tag="input"
              ref={ref_Box_7}
              lineHeight={1}
              {...dobj_Box_6.props}
              pattern={attr_pattern(dobj_Box_6)}
              minLength={attr_minLength(dobj_Box_6)}
              maxLength={attr_maxLength(dobj_Box_6)}
              name={attr_name(dobj_Box_6)}
              autoComplete={attr_autocomplete(dobj_Box_6)}
              placeholder={attr_placeholder_2(dobj_Box_6)}
              value={attr_value(dobj_Box_6)}
              disabled={attr_disabled(dobj_Box_6)}
              readonly={attr_readonly(dobj_Box_6)}
              required={attr_required(dobj_Box_6)}
              type={attr_type_2(dobj_Box_6)}
              tabIndex={attr_tabIndex_2(dobj_Box_6)}
              domqlElementObject={dobj_Box_6}
            />
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
              text="Choose file"
              line_height="1em"
              tag="caption"
              ref={ref_Box_8}
              {...dobj_Box_7.props}
              domqlElementObject={dobj_Box_7}
            />
          </Box>
          <Box
            fontSize="A"
            text="Title"
            lineHeight="1em"
            tag="h5"
            ref={ref_Box_5}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
        </Box>
        <Box
          text="50 MB max file size"
          fontSize="Z"
          display="flex"
          tag="div"
          ref={ref_Box_3}
          className={`${css(flow_4(dobj_Box_2))} ${css(
            wrap_4(dobj_Box_2)
          )} ${css(align_4(dobj_Box_2))}`}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        >
          <Box
            text="Paragraph"
            fontSize="Z"
            lineHeight="1em"
            margin="0"
            color="gray2"
            tag="p"
            ref={ref_Box_6}
            {...dobj_Box_5.props}
            domqlElementObject={dobj_Box_5}
          />
        </Box>
      </TitleParagraph>
    </Box>
  );
}

const orig_7 = {
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
      align: 'center flex-start',
      boxSize: 'fit-content fit-content',
      gap: 'B2',
      padding: 'C D1',
      round: 'A',
      border: 'solid, gray2 .05',
      borderWidth: '1px',
      theme: 'dialog'
    },
    Icon: {
      name: 'file',
      fontSize: 'I1',
      color: '#818186'
    },
    TitleParagraph: {
      props: {
        align: 'center flex-start',
        gap: 'Z',
        fontWeight: '400'
      },
      Title: {
        props: {
          text: 'Drag & drop your files here or',
          flow: 'row-reverse',
          fontWeight: '400',
          gap: 'Y2',
          align: 'center flex-start',
          fontSize: 'Z1',
          color: 'gray2'
        },
        UploadButton: {
          caption: {
            fontSize: 'A1',
            fontWeight: '500'
          }
        }
      },
      Paragraph: {
        props: {
          text: '50 MB max file size',
          fontSize: 'Z'
        }
      }
    },
    __name: 'UploadLabel'
  },
  props: {
    padding: 'B2 E1',
    gap: 'B'
  },
  Icon: {},
  TitleParagraph: {
    Title: {UploadButton: null}
  },
  UploadButtonWithBackground: {
    padding: 'A C',
    margin: 'Z - - -',
    caption: {fontWeight: '500'}
  },
  __name: 'UploadLabel2'
};

export function UploadLabel2(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
  const ref_TitleParagraph = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
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

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...createSync({
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
  const dobj_TitleParagraph = dobj["TitleParagraph"]
  dobj_TitleParagraph.node = ref_TitleParagraph.current
  const dobj_Box = dobj["UploadButtonWithBackground"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["TitleParagraph"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["TitleParagraph"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["TitleParagraph"]["Title"]["h5"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["TitleParagraph"]["Paragraph"]["p"]
  dobj_Box_5.node = ref_Box_6.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      padding="B2 E1"
      gap="B"
      flow="column"
      align="center flex-start"
      boxSize="fit-content fit-content"
      round="A"
      border="solid, gray2 .05"
      borderWidth="1px"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Svg
        name="file"
        fontSize="I1"
        color="#818186"
        width="A"
        height="A"
        display="inline-block"
        spriteId="file"
        src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
      <TitleParagraph
        align="center flex-start"
        gap="Z"
        fontWeight="400"
        flow="column"
        display="flex"
        ref={ref_TitleParagraph}
        className={`${css(flow_2(dobj_TitleParagraph))} ${css(
          wrap_2(dobj_TitleParagraph)
        )} ${css(align_2(dobj_TitleParagraph))}`}
        {...dobj_TitleParagraph.props}
        domqlElementObject={dobj_TitleParagraph}
      >
        <Box
          text="Drag & drop your files here or"
          flow="row-reverse"
          fontWeight="400"
          gap="Y2"
          align="center flex-start"
          fontSize="Z1"
          color="gray2"
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
            fontSize="A"
            text="Title"
            lineHeight="1em"
            tag="h5"
            ref={ref_Box_5}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
        </Box>
        <Box
          text="50 MB max file size"
          fontSize="Z"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            text="Paragraph"
            fontSize="Z"
            lineHeight="1em"
            margin="0"
            color="gray2"
            tag="p"
            ref={ref_Box_6}
            {...dobj_Box_5.props}
            domqlElementObject={dobj_Box_5}
          />
        </Box>
      </TitleParagraph>
      <Box
        padding="A C"
        margin="Z - - -"
        tag="div"
        ref={ref_Box_2}
        caption={{
          fontWeight: "500",
        }}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
    </Box>
  );
}

const orig_8 = {
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
    gap: 'A',
    round: 'A1',
    padding: 'A'
  },
  Header: {
    Title: {
      caption: {
        props: {
          text: 'File Upload',
          fontSize: 'C'
        }
      },
      x: {
        props: {margin: '-V2 - - -'}
      }
    },
    Paragraph: null
  },
  UploadLabel: {},
  UploadFooter: {
    props: {
      minWidth: '100%',
      margin: '-W - - -'
    },
    IconText: {
      props: {padding: '- Z'}
    },
    Buttons: {props: {gap: 'Z2'}}
  },
  __name: 'UploadModal'
};

export function UploadModal(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_IconText = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Box_12 = useRef(null);
  const ref_Box_13 = useRef(null);
  const ref_Box_14 = useRef(null);
  const ref_Box_15 = useRef(null);
  const ref_Svg_4 = useRef(null);
  const ref_Box_16 = useRef(null);
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

  function attr_type({ props }) {
    return props.type;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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

  function flow_9({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_9({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_9({ props: props4 }) {
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

  function flow_10({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_10({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_10({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_2({ props: props4 }) {
    return props4.tabIndex;
  }

  function attr_pattern({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required({ props: props4 }) {
    return props4.required;
  }

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_3({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_3({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
  }

  function html_4({ key, props: props4, context, deps, ...el2 }) {
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["UploadLabel"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["UploadFooter"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Header"]["Title"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Svg = dobj["UploadLabel"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_5 = dobj["UploadLabel"]["TitleParagraph"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_IconText = dobj["UploadFooter"]["IconText"]
  dobj_IconText.node = ref_IconText.current
  const dobj_Box_6 = dobj["UploadFooter"]["Buttons"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Header"]["Title"]["caption"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Header"]["Title"]["x"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["UploadLabel"]["TitleParagraph"]["Title"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["UploadLabel"]["TitleParagraph"]["Paragraph"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Svg_2 = dobj["UploadFooter"]["IconText"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Svg_3 = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Box_11 = dobj["UploadLabel"]["TitleParagraph"]["Title"]["h5"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["UploadLabel"]["TitleParagraph"]["Title"]["UploadButton"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["UploadLabel"]["TitleParagraph"]["Paragraph"]["p"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["UploadLabel"]["TitleParagraph"]["Title"]["UploadButton"]["Input"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Svg_4 = dobj["UploadLabel"]["TitleParagraph"]["Title"]["UploadButton"]["Icon"]
  dobj_Svg_4.node = ref_Svg_4.current
  const dobj_Box_15 = dobj["UploadLabel"]["TitleParagraph"]["Title"]["UploadButton"]["Caption"]
  dobj_Box_15.node = ref_Box_16.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="A"
      round="A1"
      padding="A"
      flow="column"
      boxSize="fit-content"
      minWidth="G3"
      position="relative"
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
          ref={ref_Box_5}
          className={`${css(flow_4(dobj_Box_4))} ${css(
            wrap_4(dobj_Box_4)
          )} ${css(align_4(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            text="File Upload"
            fontSize="C"
            padding="W2 W2 - W2"
            tag="caption"
            ref={ref_Box_8}
            {...dobj_Box_7.props}
            domqlElementObject={dobj_Box_7}
          />
          <Box
            margin="-V2 - - -"
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
            ref={ref_Box_9}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_7(dobj_Box_8))} ${css(
              wrap_7(dobj_Box_8)
            )} ${css(align_7(dobj_Box_8))}`}
            {...dobj_Box_8.props}
            type={attr_type(dobj_Box_8)}
            placeholder={attr_placeholder(dobj_Box_8)}
            tabIndex={attr_tabIndex(dobj_Box_8)}
            domqlElementObject={dobj_Box_8}
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
        flow="column"
        align="center flex-start"
        boxSize="fit-content fit-content"
        gap="C"
        background="gray"
        padding="C D+Z"
        round="Z+X"
        border="1px dashed #57575C"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Svg
          name="upload"
          fontSize="I"
          color="#818186"
          width="A"
          height="A"
          display="inline-block"
          spriteId="upload"
          src='<symbol id="upload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></symbol>'
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
          align="center flex-start"
          gap="Y"
          flow="column"
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
            gap="Y"
            align="center space-between"
            display="flex"
            tag="div"
            ref={ref_Box_10}
            h5={{
              text: "Drag & drop your files here or",
              fontSize: "A",
              fontWeight: "400",
            }}
            className={`${css(flow_8(dobj_Box_9))} ${css(
              wrap_8(dobj_Box_9)
            )} ${css(align_8(dobj_Box_9))}`}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          >
            <Box
              text="Drag & drop your files here or"
              fontSize="A"
              fontWeight="400"
              lineHeight="1em"
              tag="h5"
              ref={ref_Box_12}
              {...dobj_Box_11.props}
              domqlElementObject={dobj_Box_11}
            />
            <Box
              position="relative"
              theme="transparent"
              padding="0"
              color="#0474F2"
              boxSize="fit-content fit-content"
              overflow="hidden"
              fontWeight="500"
              cursor="pointer"
              round="Z2"
              gap="Y2"
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
              ref={ref_Box_13}
              Caption={{
                props: {
                  text: "Choose file",
                },
                __ref: undefined,
              }}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_10(dobj_Box_12))} ${css(
                wrap_10(dobj_Box_12)
              )} ${css(align_10(dobj_Box_12))}`}
              {...dobj_Box_12.props}
              type={attr_type_2(dobj_Box_12)}
              placeholder={attr_placeholder_2(dobj_Box_12)}
              tabIndex={attr_tabIndex_2(dobj_Box_12)}
              domqlElementObject={dobj_Box_12}
            >
              <Box
                type="file"
                inset="0 0 0 0"
                border="2px solid red"
                position="absolute"
                boxSize="100% 100%"
                top="0"
                left="0"
                opacity="0"
                cursor="pointer"
                theme="tertiary"
                fontSize="A"
                round="C"
                fontFamily="smbls"
                padding="Z A"
                outline="solid, 0, blue .3"
                tag="input"
                ref={ref_Box_15}
                lineHeight={1}
                {...dobj_Box_14.props}
                pattern={attr_pattern(dobj_Box_14)}
                minLength={attr_minLength(dobj_Box_14)}
                maxLength={attr_maxLength(dobj_Box_14)}
                name={attr_name(dobj_Box_14)}
                autoComplete={attr_autocomplete(dobj_Box_14)}
                placeholder={attr_placeholder_3(dobj_Box_14)}
                value={attr_value(dobj_Box_14)}
                disabled={attr_disabled(dobj_Box_14)}
                readonly={attr_readonly(dobj_Box_14)}
                required={attr_required(dobj_Box_14)}
                type={attr_type_3(dobj_Box_14)}
                tabIndex={attr_tabIndex_3(dobj_Box_14)}
                domqlElementObject={dobj_Box_14}
              />
              {show_Svg_3(dobj_Svg_4) ? (
                <Svg
                  fontSize="C"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={ref_Svg_4}
                  dangerouslySetInnerHTML={{ __html: html_4(dobj_Svg_4) }}
                  {...dobj_Svg_4.props}
                  domqlElementObject={dobj_Svg_4}
                />
              ) : null}
              <Box
                text="Choose file"
                line_height="1em"
                tag="caption"
                ref={ref_Box_16}
                {...dobj_Box_15.props}
                domqlElementObject={dobj_Box_15}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            tag="div"
            ref={ref_Box_11}
            p={{
              text: "50 MB max file size",
              fontSize: "Z",
            }}
            className={`${css(flow_9(dobj_Box_10))} ${css(
              wrap_9(dobj_Box_10)
            )} ${css(align_9(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          >
            <Box
              text="50 MB max file size"
              fontSize="Z"
              lineHeight="1em"
              margin="0"
              color="gray2"
              tag="p"
              ref={ref_Box_14}
              {...dobj_Box_13.props}
              domqlElementObject={dobj_Box_13}
            />
          </Box>
        </Box>
      </Box>
      <Box
        minWidth="100%"
        margin="-W - - -"
        tag="div"
        ref={ref_Box_4}
        {...dobj_Box_3.props}
        domqlElementObject={dobj_Box_3}
      >
        <IconText
          padding="- Z"
          align="center center"
          display="flex"
          ref={ref_IconText}
          lineHeight={1}
          className={`${css(flow_6(dobj_IconText))} ${css(
            wrap_6(dobj_IconText)
          )} ${css(align_6(dobj_IconText))}`}
          {...dobj_IconText.props}
          domqlElementObject={dobj_IconText}
        >
          {show_Svg(dobj_Svg_2) ? (
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
        </IconText>
        <Box
          gap="Z2"
          tag="div"
          ref={ref_Box_7}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        />
      </Box>
    </Box>
  );
}

const orig_9 = {
  extend: {
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
      gap: 'A',
      round: 'A1',
      padding: 'A'
    },
    Header: {
      Title: {
        caption: {
          props: {
            text: 'File Upload',
            fontSize: 'C'
          }
        },
        x: {
          props: {margin: '-V2 - - -'}
        }
      },
      Paragraph: null
    },
    UploadLabel: {},
    UploadFooter: {
      props: {
        minWidth: '100%',
        margin: '-W - - -'
      },
      IconText: {
        props: {padding: '- Z'}
      },
      Buttons: {props: {gap: 'Z2'}}
    },
    __name: 'UploadModal'
  },
  Header: {},
  UploadLabel: null,
  UploadLabel2: {
    Icon: {},
    TitleParagraph: {},
    UploadButtonWithBackground: {theme: 'tertiary'}
  },
  __name: 'UploadModal2'
};

export function UploadModal2(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_IconText = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  const ref_Box_12 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_13 = useRef(null);
  const ref_Box_14 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Svg_4 = useRef(null);
  const ref_Box_15 = useRef(null);
  const ref_Box_16 = useRef(null);
  const ref_Box_17 = useRef(null);
  const ref_Box_18 = useRef(null);
  const ref_Svg_5 = useRef(null);
  const ref_Box_19 = useRef(null);
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

  function attr_type({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex({ props: props4 }) {
    return props4.tabIndex;
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

  function flow_9({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_9({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_9({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_10({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_10({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_10({ props: props4 }) {
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

  function attr_pattern({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required({ props: props4 }) {
    return props4.required;
  }

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_3({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_2({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
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

  function show_Svg_3({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
  }

  function html_4({ key, props: props4, context, deps, ...el2 }) {
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

  function flow_11({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_11({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_11({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_4({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_4({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_4({ props: props4 }) {
    return props4.tabIndex;
  }

  function attr_pattern_2({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_2({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_2({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_2({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_2({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_5({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value_2({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled_2({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_2({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_2({ props: props4 }) {
    return props4.required;
  }

  function attr_type_5({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_5({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_4({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
  }

  function html_5({ key, props: props4, context, deps, ...el2 }) {
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["UploadLabel2"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["UploadFooter"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Header"]["Title"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Svg = dobj["UploadLabel2"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_5 = dobj["UploadLabel2"]["TitleParagraph"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["UploadLabel2"]["UploadButtonWithIcon"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_IconText = dobj["UploadFooter"]["IconText"]
  dobj_IconText.node = ref_IconText.current
  const dobj_Box_7 = dobj["UploadFooter"]["Buttons"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Header"]["Title"]["caption"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Header"]["Title"]["x"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["UploadLabel2"]["TitleParagraph"]["Paragraph"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Svg_2 = dobj["UploadLabel2"]["UploadButtonWithIcon"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_12 = dobj["UploadLabel2"]["UploadButtonWithIcon"]["Caption"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["UploadLabel2"]["UploadButtonWithIcon"]["Input"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Svg_3 = dobj["UploadFooter"]["IconText"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Svg_4 = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg_4.node = ref_Svg_4.current
  const dobj_Box_14 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["h5"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["UploadLabel2"]["TitleParagraph"]["Paragraph"]["p"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Box_17 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]["Input"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Svg_5 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]["Icon"]
  dobj_Svg_5.node = ref_Svg_5.current
  const dobj_Box_18 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]["Caption"]
  dobj_Box_18.node = ref_Box_19.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="A"
      round="A1"
      padding="A"
      flow="column"
      boxSize="fit-content"
      minWidth="G3"
      position="relative"
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
          ref={ref_Box_5}
          className={`${css(flow_4(dobj_Box_4))} ${css(
            wrap_4(dobj_Box_4)
          )} ${css(align_4(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            text="File Upload"
            fontSize="C"
            padding="W2 W2 - W2"
            tag="caption"
            ref={ref_Box_9}
            {...dobj_Box_8.props}
            domqlElementObject={dobj_Box_8}
          />
          <Box
            margin="-V2 - - -"
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
            {show_Svg_3(dobj_Svg_4) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ref={ref_Svg_4}
                style={{
                  fill: "currentColor",
                  "*": {
                    fill: "currentColor",
                  },
                }}
                dangerouslySetInnerHTML={{ __html: html_4(dobj_Svg_4) }}
                {...dobj_Svg_4.props}
                domqlElementObject={dobj_Svg_4}
              />
            ) : null}
          </Box>
        </Box>
      </Box>
      <Box
        gap="B"
        padding="C E+A"
        flow="column"
        align="center flex-start"
        boxSize="fit-content fit-content"
        background="gray"
        round="Z+X"
        border="1px dashed #57575C"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        Icon={{
          props: {},
          __ref: undefined,
        }}
        TitleParagraph={{
          props: {},
          __ref: undefined,
        }}
        UploadButtonWithBackground={{
          props: {
            theme: "tertiary",
          },
          __ref: undefined,
        }}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Svg
          name="file"
          fontSize="I"
          color="#818186"
          width="A"
          height="A"
          display="inline-block"
          spriteId="file"
          src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
          align="center flex-start"
          gap="Y"
          flow="column"
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
            gap="Y"
            align="center space-between"
            display="flex"
            tag="div"
            ref={ref_Box_11}
            h5={{
              text: "Drag & drop your files here or",
              fontSize: "A",
              fontWeight: "400",
            }}
            className={`${css(flow_9(dobj_Box_10))} ${css(
              wrap_9(dobj_Box_10)
            )} ${css(align_9(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          >
            <Box
              text="Drag & drop your files here or"
              fontSize="A"
              fontWeight="400"
              lineHeight="1em"
              tag="h5"
              ref={ref_Box_15}
              {...dobj_Box_14.props}
              domqlElementObject={dobj_Box_14}
            />
            <Box
              display="none"
              position="relative"
              theme="transparent"
              padding="0"
              color="#0474F2"
              boxSize="fit-content fit-content"
              overflow="hidden"
              fontWeight="500"
              cursor="pointer"
              round="Z2"
              gap="Y2"
              fontSize="A"
              type="button"
              border="none"
              align="center center"
              textDecoration="none"
              lineHeight="1"
              whiteSpace="nowrap"
              fontFamily="inherit"
              outline="solid, 0, blue .3"
              tag="button"
              ref={ref_Box_16}
              Caption={{
                props: {
                  text: "Choose file",
                },
                __ref: undefined,
              }}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_11(dobj_Box_15))} ${css(
                wrap_11(dobj_Box_15)
              )} ${css(align_11(dobj_Box_15))}`}
              {...dobj_Box_15.props}
              type={attr_type_4(dobj_Box_15)}
              placeholder={attr_placeholder_4(dobj_Box_15)}
              tabIndex={attr_tabIndex_4(dobj_Box_15)}
              domqlElementObject={dobj_Box_15}
            >
              <Box
                type="file"
                inset="0 0 0 0"
                border="2px solid red"
                position="absolute"
                boxSize="100% 100%"
                top="0"
                left="0"
                opacity="0"
                cursor="pointer"
                theme="tertiary"
                fontSize="A"
                round="C"
                fontFamily="smbls"
                padding="Z A"
                outline="solid, 0, blue .3"
                tag="input"
                ref={ref_Box_18}
                lineHeight={1}
                {...dobj_Box_17.props}
                pattern={attr_pattern_2(dobj_Box_17)}
                minLength={attr_minLength_2(dobj_Box_17)}
                maxLength={attr_maxLength_2(dobj_Box_17)}
                name={attr_name_2(dobj_Box_17)}
                autoComplete={attr_autocomplete_2(dobj_Box_17)}
                placeholder={attr_placeholder_5(dobj_Box_17)}
                value={attr_value_2(dobj_Box_17)}
                disabled={attr_disabled_2(dobj_Box_17)}
                readonly={attr_readonly_2(dobj_Box_17)}
                required={attr_required_2(dobj_Box_17)}
                type={attr_type_5(dobj_Box_17)}
                tabIndex={attr_tabIndex_5(dobj_Box_17)}
                domqlElementObject={dobj_Box_17}
              />
              {show_Svg_4(dobj_Svg_5) ? (
                <Svg
                  fontSize="C"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={ref_Svg_5}
                  dangerouslySetInnerHTML={{ __html: html_5(dobj_Svg_5) }}
                  {...dobj_Svg_5.props}
                  domqlElementObject={dobj_Svg_5}
                />
              ) : null}
              <Box
                text="Choose file"
                line_height="1em"
                tag="caption"
                ref={ref_Box_19}
                {...dobj_Box_18.props}
                domqlElementObject={dobj_Box_18}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            tag="div"
            ref={ref_Box_12}
            p={{
              text: "50 MB max file size",
              fontSize: "Z",
            }}
            className={`${css(flow_10(dobj_Box_11))} ${css(
              wrap_10(dobj_Box_11)
            )} ${css(align_10(dobj_Box_11))}`}
            {...dobj_Box_11.props}
            domqlElementObject={dobj_Box_11}
          >
            <Box
              text="50 MB max file size"
              fontSize="Z"
              lineHeight="1em"
              margin="0"
              color="gray2"
              tag="p"
              ref={ref_Box_17}
              {...dobj_Box_16.props}
              domqlElementObject={dobj_Box_16}
            />
          </Box>
        </Box>
        <Box
          gap="Z"
          theme="primary"
          padding="A B"
          round="A"
          color="white"
          position="relative"
          boxSize="fit-content fit-content"
          overflow="hidden"
          fontWeight="500"
          cursor="pointer"
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
              text: "Choose file",
            },
            __ref: undefined,
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_6(dobj_Box_6))} ${css(
            wrap_6(dobj_Box_6)
          )} ${css(align_6(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          type={attr_type(dobj_Box_6)}
          placeholder={attr_placeholder(dobj_Box_6)}
          tabIndex={attr_tabIndex(dobj_Box_6)}
          domqlElementObject={dobj_Box_6}
        >
          {show_Svg(dobj_Svg_2) ? (
            <Svg
              name="upload"
              fontSize="B"
              width="A"
              height="A"
              display="inline-block"
              spriteId="upload"
              src='<symbol id="upload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></symbol>'
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
          <Box
            text="Choose file"
            line_height="1em"
            tag="caption"
            ref={ref_Box_13}
            {...dobj_Box_12.props}
            domqlElementObject={dobj_Box_12}
          />
          <Box
            type="file"
            inset="0 0 0 0"
            border="2px solid red"
            position="absolute"
            boxSize="100% 100%"
            top="0"
            left="0"
            opacity="0"
            cursor="pointer"
            theme="tertiary"
            fontSize="A"
            round="C"
            fontFamily="smbls"
            padding="Z A"
            outline="solid, 0, blue .3"
            tag="input"
            ref={ref_Box_14}
            lineHeight={1}
            {...dobj_Box_13.props}
            pattern={attr_pattern(dobj_Box_13)}
            minLength={attr_minLength(dobj_Box_13)}
            maxLength={attr_maxLength(dobj_Box_13)}
            name={attr_name(dobj_Box_13)}
            autoComplete={attr_autocomplete(dobj_Box_13)}
            placeholder={attr_placeholder_3(dobj_Box_13)}
            value={attr_value(dobj_Box_13)}
            disabled={attr_disabled(dobj_Box_13)}
            readonly={attr_readonly(dobj_Box_13)}
            required={attr_required(dobj_Box_13)}
            type={attr_type_3(dobj_Box_13)}
            tabIndex={attr_tabIndex_3(dobj_Box_13)}
            domqlElementObject={dobj_Box_13}
          />
        </Box>
      </Box>
      <Box
        minWidth="100%"
        margin="-W - - -"
        tag="div"
        ref={ref_Box_4}
        {...dobj_Box_3.props}
        domqlElementObject={dobj_Box_3}
      >
        <IconText
          padding="- Z"
          align="center center"
          display="flex"
          ref={ref_IconText}
          lineHeight={1}
          className={`${css(flow_7(dobj_IconText))} ${css(
            wrap_7(dobj_IconText)
          )} ${css(align_7(dobj_IconText))}`}
          {...dobj_IconText.props}
          domqlElementObject={dobj_IconText}
        >
          {show_Svg_2(dobj_Svg_3) ? (
            <Svg
              width="A"
              height="A"
              display="inline-block"
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
        </IconText>
        <Box
          gap="Z2"
          tag="div"
          ref={ref_Box_8}
          {...dobj_Box_7.props}
          domqlElementObject={dobj_Box_7}
        />
      </Box>
    </Box>
  );
}

const orig_10 = {
  extend: {
    extend: {
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
        gap: 'A',
        round: 'A1',
        padding: 'A'
      },
      Header: {
        Title: {
          caption: {
            props: {
              text: 'File Upload',
              fontSize: 'C'
            }
          },
          x: {
            props: {margin: '-V2 - - -'}
          }
        },
        Paragraph: null
      },
      UploadLabel: {},
      UploadFooter: {
        props: {
          minWidth: '100%',
          margin: '-W - - -'
        },
        IconText: {
          props: {padding: '- Z'}
        },
        Buttons: {props: {gap: 'Z2'}}
      },
      __name: 'UploadModal'
    },
    Header: {},
    UploadLabel: null,
    UploadLabel2: {
      Icon: {},
      TitleParagraph: {},
      UploadButtonWithBackground: {theme: 'tertiary'}
    },
    __name: 'UploadModal2'
  },
  Header: {},
  UploadLabel2: {},
  UploadFooter: {
    props: {padding: '0'},
    IconText: null,
    Buttons: {
      props: {
        minWidth: '100%',
        childProps: {flex: '1'}
      }
    }
  },
  __name: 'UploadModal3'
};

export function UploadModal3(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  const ref_Box_12 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_13 = useRef(null);
  const ref_Box_14 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Box_15 = useRef(null);
  const ref_Box_16 = useRef(null);
  const ref_Box_17 = useRef(null);
  const ref_Box_18 = useRef(null);
  const ref_Svg_4 = useRef(null);
  const ref_Box_19 = useRef(null);
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

  function attr_type({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex({ props: props4 }) {
    return props4.tabIndex;
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

  function attr_type_2({ props }) {
    return props.type;
  }

  function attr_placeholder_2({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_2({ props }) {
    return props.tabIndex;
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

  function flow_9({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_9({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_9({ props: props4 }) {
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

  function attr_pattern({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required({ props: props4 }) {
    return props4.required;
  }

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_3({ props: props4 }) {
    return props4.tabIndex;
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

  function flow_10({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_10({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_10({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_4({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_4({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_4({ props: props4 }) {
    return props4.tabIndex;
  }

  function attr_pattern_2({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_2({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_2({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_2({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_2({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_5({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value_2({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled_2({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_2({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_2({ props: props4 }) {
    return props4.required;
  }

  function attr_type_5({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_5({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_3({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
  }

  function html_4({ key, props: props4, context, deps, ...el2 }) {
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["UploadLabel2"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["UploadFooter"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Header"]["Title"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Svg = dobj["UploadLabel2"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_5 = dobj["UploadLabel2"]["TitleParagraph"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["UploadLabel2"]["UploadButtonWithIcon"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["UploadFooter"]["Buttons"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Header"]["Title"]["caption"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Header"]["Title"]["x"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["UploadLabel2"]["TitleParagraph"]["Paragraph"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Svg_2 = dobj["UploadLabel2"]["UploadButtonWithIcon"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_12 = dobj["UploadLabel2"]["UploadButtonWithIcon"]["Caption"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["UploadLabel2"]["UploadButtonWithIcon"]["Input"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Svg_3 = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Box_14 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["h5"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["UploadLabel2"]["TitleParagraph"]["Paragraph"]["p"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Box_17 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]["Input"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Svg_4 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]["Icon"]
  dobj_Svg_4.node = ref_Svg_4.current
  const dobj_Box_18 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]["Caption"]
  dobj_Box_18.node = ref_Box_19.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="A"
      round="A1"
      padding="A"
      flow="column"
      boxSize="fit-content"
      minWidth="G3"
      position="relative"
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
          ref={ref_Box_5}
          className={`${css(flow_4(dobj_Box_4))} ${css(
            wrap_4(dobj_Box_4)
          )} ${css(align_4(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            text="File Upload"
            fontSize="C"
            padding="W2 W2 - W2"
            tag="caption"
            ref={ref_Box_9}
            {...dobj_Box_8.props}
            domqlElementObject={dobj_Box_8}
          />
          <Box
            margin="-V2 - - -"
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
            className={`${css(flow_7(dobj_Box_9))} ${css(
              wrap_7(dobj_Box_9)
            )} ${css(align_7(dobj_Box_9))}`}
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
        gap="B"
        padding="C E+A"
        flow="column"
        align="center flex-start"
        boxSize="fit-content fit-content"
        background="gray"
        round="Z+X"
        border="1px dashed #57575C"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        Icon={{
          props: {},
          __ref: undefined,
        }}
        TitleParagraph={{
          props: {},
          __ref: undefined,
        }}
        UploadButtonWithBackground={{
          props: {
            theme: "tertiary",
          },
          __ref: undefined,
        }}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Svg
          name="file"
          fontSize="I"
          color="#818186"
          width="A"
          height="A"
          display="inline-block"
          spriteId="file"
          src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
          align="center flex-start"
          gap="Y"
          flow="column"
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
            gap="Y"
            align="center space-between"
            display="flex"
            tag="div"
            ref={ref_Box_11}
            h5={{
              text: "Drag & drop your files here or",
              fontSize: "A",
              fontWeight: "400",
            }}
            className={`${css(flow_8(dobj_Box_10))} ${css(
              wrap_8(dobj_Box_10)
            )} ${css(align_8(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          >
            <Box
              text="Drag & drop your files here or"
              fontSize="A"
              fontWeight="400"
              lineHeight="1em"
              tag="h5"
              ref={ref_Box_15}
              {...dobj_Box_14.props}
              domqlElementObject={dobj_Box_14}
            />
            <Box
              display="none"
              position="relative"
              theme="transparent"
              padding="0"
              color="#0474F2"
              boxSize="fit-content fit-content"
              overflow="hidden"
              fontWeight="500"
              cursor="pointer"
              round="Z2"
              gap="Y2"
              fontSize="A"
              type="button"
              border="none"
              align="center center"
              textDecoration="none"
              lineHeight="1"
              whiteSpace="nowrap"
              fontFamily="inherit"
              outline="solid, 0, blue .3"
              tag="button"
              ref={ref_Box_16}
              Caption={{
                props: {
                  text: "Choose file",
                },
                __ref: undefined,
              }}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_10(dobj_Box_15))} ${css(
                wrap_10(dobj_Box_15)
              )} ${css(align_10(dobj_Box_15))}`}
              {...dobj_Box_15.props}
              type={attr_type_4(dobj_Box_15)}
              placeholder={attr_placeholder_4(dobj_Box_15)}
              tabIndex={attr_tabIndex_4(dobj_Box_15)}
              domqlElementObject={dobj_Box_15}
            >
              <Box
                type="file"
                inset="0 0 0 0"
                border="2px solid red"
                position="absolute"
                boxSize="100% 100%"
                top="0"
                left="0"
                opacity="0"
                cursor="pointer"
                theme="tertiary"
                fontSize="A"
                round="C"
                fontFamily="smbls"
                padding="Z A"
                outline="solid, 0, blue .3"
                tag="input"
                ref={ref_Box_18}
                lineHeight={1}
                {...dobj_Box_17.props}
                pattern={attr_pattern_2(dobj_Box_17)}
                minLength={attr_minLength_2(dobj_Box_17)}
                maxLength={attr_maxLength_2(dobj_Box_17)}
                name={attr_name_2(dobj_Box_17)}
                autoComplete={attr_autocomplete_2(dobj_Box_17)}
                placeholder={attr_placeholder_5(dobj_Box_17)}
                value={attr_value_2(dobj_Box_17)}
                disabled={attr_disabled_2(dobj_Box_17)}
                readonly={attr_readonly_2(dobj_Box_17)}
                required={attr_required_2(dobj_Box_17)}
                type={attr_type_5(dobj_Box_17)}
                tabIndex={attr_tabIndex_5(dobj_Box_17)}
                domqlElementObject={dobj_Box_17}
              />
              {show_Svg_3(dobj_Svg_4) ? (
                <Svg
                  fontSize="C"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={ref_Svg_4}
                  dangerouslySetInnerHTML={{ __html: html_4(dobj_Svg_4) }}
                  {...dobj_Svg_4.props}
                  domqlElementObject={dobj_Svg_4}
                />
              ) : null}
              <Box
                text="Choose file"
                line_height="1em"
                tag="caption"
                ref={ref_Box_19}
                {...dobj_Box_18.props}
                domqlElementObject={dobj_Box_18}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            tag="div"
            ref={ref_Box_12}
            p={{
              text: "50 MB max file size",
              fontSize: "Z",
            }}
            className={`${css(flow_9(dobj_Box_11))} ${css(
              wrap_9(dobj_Box_11)
            )} ${css(align_9(dobj_Box_11))}`}
            {...dobj_Box_11.props}
            domqlElementObject={dobj_Box_11}
          >
            <Box
              text="50 MB max file size"
              fontSize="Z"
              lineHeight="1em"
              margin="0"
              color="gray2"
              tag="p"
              ref={ref_Box_17}
              {...dobj_Box_16.props}
              domqlElementObject={dobj_Box_16}
            />
          </Box>
        </Box>
        <Box
          gap="Z"
          theme="primary"
          padding="A B"
          round="A"
          color="white"
          position="relative"
          boxSize="fit-content fit-content"
          overflow="hidden"
          fontWeight="500"
          cursor="pointer"
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
              text: "Choose file",
            },
            __ref: undefined,
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_6(dobj_Box_6))} ${css(
            wrap_6(dobj_Box_6)
          )} ${css(align_6(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          type={attr_type(dobj_Box_6)}
          placeholder={attr_placeholder(dobj_Box_6)}
          tabIndex={attr_tabIndex(dobj_Box_6)}
          domqlElementObject={dobj_Box_6}
        >
          {show_Svg(dobj_Svg_2) ? (
            <Svg
              name="upload"
              fontSize="B"
              width="A"
              height="A"
              display="inline-block"
              spriteId="upload"
              src='<symbol id="upload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></symbol>'
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
          <Box
            text="Choose file"
            line_height="1em"
            tag="caption"
            ref={ref_Box_13}
            {...dobj_Box_12.props}
            domqlElementObject={dobj_Box_12}
          />
          <Box
            type="file"
            inset="0 0 0 0"
            border="2px solid red"
            position="absolute"
            boxSize="100% 100%"
            top="0"
            left="0"
            opacity="0"
            cursor="pointer"
            theme="tertiary"
            fontSize="A"
            round="C"
            fontFamily="smbls"
            padding="Z A"
            outline="solid, 0, blue .3"
            tag="input"
            ref={ref_Box_14}
            lineHeight={1}
            {...dobj_Box_13.props}
            pattern={attr_pattern(dobj_Box_13)}
            minLength={attr_minLength(dobj_Box_13)}
            maxLength={attr_maxLength(dobj_Box_13)}
            name={attr_name(dobj_Box_13)}
            autoComplete={attr_autocomplete(dobj_Box_13)}
            placeholder={attr_placeholder_3(dobj_Box_13)}
            value={attr_value(dobj_Box_13)}
            disabled={attr_disabled(dobj_Box_13)}
            readonly={attr_readonly(dobj_Box_13)}
            required={attr_required(dobj_Box_13)}
            type={attr_type_3(dobj_Box_13)}
            tabIndex={attr_tabIndex_3(dobj_Box_13)}
            domqlElementObject={dobj_Box_13}
          />
        </Box>
      </Box>
      <Box
        padding="0"
        minWidth="100%"
        margin="-W - - -"
        tag="div"
        ref={ref_Box_4}
        {...dobj_Box_3.props}
        domqlElementObject={dobj_Box_3}
      >
        <Box
          minWidth="100%"
          gap="Z2"
          tag="div"
          ref={ref_Box_8}
          childProps={{
            flex: "1",
          }}
          {...dobj_Box_7.props}
          domqlElementObject={dobj_Box_7}
        />
      </Box>
    </Box>
  );
}

const orig_11 = {
  extend: {
    extend: {
      extend: {
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
          gap: 'A',
          round: 'A1',
          padding: 'A'
        },
        Header: {
          Title: {
            caption: {
              props: {
                text: 'File Upload',
                fontSize: 'C'
              }
            },
            x: {
              props: {margin: '-V2 - - -'}
            }
          },
          Paragraph: null
        },
        UploadLabel: {},
        UploadFooter: {
          props: {
            minWidth: '100%',
            margin: '-W - - -'
          },
          IconText: {
            props: {padding: '- Z'}
          },
          Buttons: {props: {gap: 'Z2'}}
        },
        __name: 'UploadModal'
      },
      Header: {},
      UploadLabel: null,
      UploadLabel2: {
        Icon: {},
        TitleParagraph: {},
        UploadButtonWithBackground: {theme: 'tertiary'}
      },
      __name: 'UploadModal2'
    },
    Header: {},
    UploadLabel2: {},
    UploadFooter: {
      props: {padding: '0'},
      IconText: null,
      Buttons: {
        props: {
          minWidth: '100%',
          childProps: {flex: '1'}
        }
      }
    },
    __name: 'UploadModal3'
  },
  Header: {},
  UploadLabel2: {},
  UploadingProcess4: {minWidth: '100%'},
  UploadFooter: {},
  __name: 'UploadModal4'
};

export function UploadModal4(props) {
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
  const ref_Svg_2 = useRef(null);
  const ref_Box_16 = useRef(null);
  const ref_Box_17 = useRef(null);
  const ref_Box_18 = useRef(null);
  const ref_Box_19 = useRef(null);
  const ref_Box_20 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Box_21 = useRef(null);
  const ref_Box_22 = useRef(null);
  const ref_Box_23 = useRef(null);
  const ref_Box_24 = useRef(null);
  const ref_Box_25 = useRef(null);
  const ref_Box_26 = useRef(null);
  const ref_Box_27 = useRef(null);
  const ref_Box_28 = useRef(null);
  const ref_Svg_4 = useRef(null);
  const ref_Box_29 = useRef(null);
  const ref_Box_30 = useRef(null);
  const ref_Box_31 = useRef(null);
  const ref_Box_32 = useRef(null);
  const ref_Box_33 = useRef(null);
  const ref_Svg_5 = useRef(null);
  const ref_Box_34 = useRef(null);
  const ref_Box_35 = useRef(null);
  const ref_Box_36 = useRef(null);
  const ref_Box_37 = useRef(null);
  const ref_Box_38 = useRef(null);
  const ref_Box_39 = useRef(null);
  const ref_Box_40 = useRef(null);
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

  function attr_type({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex({ props: props4 }) {
    return props4.tabIndex;
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

  function attr_type_2({ props }) {
    return props.type;
  }

  function attr_placeholder_2({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_2({ props }) {
    return props.tabIndex;
  }

  function flow_10({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_10({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_10({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_11({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_11({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_11({ props: props4 }) {
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

  function attr_pattern({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required({ props: props4 }) {
    return props4.required;
  }

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_3({ props: props4 }) {
    return props4.tabIndex;
  }

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value_2({ props: props4 }) {
    return props4.value;
  }

  function flow_12({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_12({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_12({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_13({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_13({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_13({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
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

  function attr_type_4({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_4({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_4({ props: props4 }) {
    return props4.tabIndex;
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

  function flow_16({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_16({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_16({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_pattern_2({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_2({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_2({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_2({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_2({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_5({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value_3({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled_2({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_2({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_2({ props: props4 }) {
    return props4.required;
  }

  function attr_type_5({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_5({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_3({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
  }

  function html_4({ key, props: props4, context, deps, ...el2 }) {
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

  function flow_17({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_17({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_17({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_6({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_6({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_6({ props: props4 }) {
    return props4.tabIndex;
  }

  function flow_18({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_18({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_18({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function show_Svg_4({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
  }

  function html_5({ key, props: props4, context, deps, ...el2 }) {
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

  function flow_19({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_19({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_19({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_20({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_20({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_20({ props: props4 }) {
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
    ...createSync({
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["UploadLabel2"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["UploadingProcess4"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["UploadFooter"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Header"]["Title"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Svg = dobj["UploadLabel2"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_6 = dobj["UploadLabel2"]["TitleParagraph"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["UploadLabel2"]["UploadButtonWithIcon"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["UploadingProcess4"]["ProgressCircleWithUnitValue"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["UploadingProcess4"]["Flex"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["UploadFooter"]["Buttons"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Header"]["Title"]["caption"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Header"]["Title"]["x"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["UploadLabel2"]["TitleParagraph"]["Paragraph"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Svg_2 = dobj["UploadLabel2"]["UploadButtonWithIcon"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_15 = dobj["UploadLabel2"]["UploadButtonWithIcon"]["Caption"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["UploadLabel2"]["UploadButtonWithIcon"]["Input"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Box_17 = dobj["UploadingProcess4"]["ProgressCircleWithUnitValue"]["Progress"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Box_18 = dobj["UploadingProcess4"]["ProgressCircleWithUnitValue"]["UnitValue"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Box_19 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Svg_3 = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Box_20 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["h5"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Box_21 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Box_22 = dobj["UploadLabel2"]["TitleParagraph"]["Paragraph"]["p"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Box_23 = dobj["UploadingProcess4"]["ProgressCircleWithUnitValue"]["UnitValue"]["Value"]
  dobj_Box_23.node = ref_Box_24.current
  const dobj_Box_24 = dobj["UploadingProcess4"]["ProgressCircleWithUnitValue"]["UnitValue"]["Unit"]
  dobj_Box_24.node = ref_Box_25.current
  const dobj_Box_25 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Title"]
  dobj_Box_25.node = ref_Box_26.current
  const dobj_Box_26 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Paragraph"]
  dobj_Box_26.node = ref_Box_27.current
  const dobj_Box_27 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]["Input"]
  dobj_Box_27.node = ref_Box_28.current
  const dobj_Svg_4 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]["Icon"]
  dobj_Svg_4.node = ref_Svg_4.current
  const dobj_Box_28 = dobj["UploadLabel2"]["TitleParagraph"]["Title"]["UploadButton"]["Caption"]
  dobj_Box_28.node = ref_Box_29.current
  const dobj_Box_29 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Title"]["h5"]
  dobj_Box_29.node = ref_Box_30.current
  const dobj_Box_30 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Title"]["Button"]
  dobj_Box_30.node = ref_Box_31.current
  const dobj_Box_31 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Paragraph"]["p"]
  dobj_Box_31.node = ref_Box_32.current
  const dobj_Box_32 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Paragraph"]["DoubleUnitValue"]
  dobj_Box_32.node = ref_Box_33.current
  const dobj_Svg_5 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Title"]["Button"]["Icon"]
  dobj_Svg_5.node = ref_Svg_5.current
  const dobj_Box_33 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Paragraph"]["DoubleUnitValue"]["UnitValue"]
  dobj_Box_33.node = ref_Box_34.current
  const dobj_Box_34 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Paragraph"]["DoubleUnitValue"]["dot"]
  dobj_Box_34.node = ref_Box_35.current
  const dobj_Box_35 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Paragraph"]["DoubleUnitValue"]["UnitValue2"]
  dobj_Box_35.node = ref_Box_36.current
  const dobj_Box_36 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Paragraph"]["DoubleUnitValue"]["UnitValue"]["Value"]
  dobj_Box_36.node = ref_Box_37.current
  const dobj_Box_37 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Paragraph"]["DoubleUnitValue"]["UnitValue"]["Unit"]
  dobj_Box_37.node = ref_Box_38.current
  const dobj_Box_38 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Paragraph"]["DoubleUnitValue"]["UnitValue2"]["Value"]
  dobj_Box_38.node = ref_Box_39.current
  const dobj_Box_39 = dobj["UploadingProcess4"]["Flex"]["TitleParagraph"]["Paragraph"]["DoubleUnitValue"]["UnitValue2"]["Unit"]
  dobj_Box_39.node = ref_Box_40.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="A"
      round="A1"
      padding="A"
      flow="column"
      boxSize="fit-content"
      minWidth="G3"
      position="relative"
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
            text="File Upload"
            fontSize="C"
            padding="W2 W2 - W2"
            tag="caption"
            ref={ref_Box_12}
            {...dobj_Box_11.props}
            domqlElementObject={dobj_Box_11}
          />
          <Box
            margin="-V2 - - -"
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
            ref={ref_Box_13}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_9(dobj_Box_12))} ${css(
              wrap_9(dobj_Box_12)
            )} ${css(align_9(dobj_Box_12))}`}
            {...dobj_Box_12.props}
            type={attr_type_2(dobj_Box_12)}
            placeholder={attr_placeholder_2(dobj_Box_12)}
            tabIndex={attr_tabIndex_2(dobj_Box_12)}
            domqlElementObject={dobj_Box_12}
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
        gap="B"
        padding="C E+A"
        flow="column"
        align="center flex-start"
        boxSize="fit-content fit-content"
        background="gray"
        round="Z+X"
        border="1px dashed #57575C"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        Icon={{
          props: {},
          __ref: undefined,
        }}
        TitleParagraph={{
          props: {},
          __ref: undefined,
        }}
        UploadButtonWithBackground={{
          props: {
            theme: "tertiary",
          },
          __ref: undefined,
        }}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Svg
          name="file"
          fontSize="I"
          color="#818186"
          width="A"
          height="A"
          display="inline-block"
          spriteId="file"
          src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
          align="center flex-start"
          gap="Y"
          flow="column"
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
            gap="Y"
            align="center space-between"
            display="flex"
            tag="div"
            ref={ref_Box_14}
            h5={{
              text: "Drag & drop your files here or",
              fontSize: "A",
              fontWeight: "400",
            }}
            className={`${css(flow_10(dobj_Box_13))} ${css(
              wrap_10(dobj_Box_13)
            )} ${css(align_10(dobj_Box_13))}`}
            {...dobj_Box_13.props}
            domqlElementObject={dobj_Box_13}
          >
            <Box
              text="Drag & drop your files here or"
              fontSize="A"
              fontWeight="400"
              lineHeight="1em"
              tag="h5"
              ref={ref_Box_21}
              {...dobj_Box_20.props}
              domqlElementObject={dobj_Box_20}
            />
            <Box
              display="none"
              position="relative"
              theme="transparent"
              padding="0"
              color="#0474F2"
              boxSize="fit-content fit-content"
              overflow="hidden"
              fontWeight="500"
              cursor="pointer"
              round="Z2"
              gap="Y2"
              fontSize="A"
              type="button"
              border="none"
              align="center center"
              textDecoration="none"
              lineHeight="1"
              whiteSpace="nowrap"
              fontFamily="inherit"
              outline="solid, 0, blue .3"
              tag="button"
              ref={ref_Box_22}
              Caption={{
                props: {
                  text: "Choose file",
                },
                __ref: undefined,
              }}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_14(dobj_Box_21))} ${css(
                wrap_14(dobj_Box_21)
              )} ${css(align_14(dobj_Box_21))}`}
              {...dobj_Box_21.props}
              type={attr_type_4(dobj_Box_21)}
              placeholder={attr_placeholder_4(dobj_Box_21)}
              tabIndex={attr_tabIndex_4(dobj_Box_21)}
              domqlElementObject={dobj_Box_21}
            >
              <Box
                type="file"
                inset="0 0 0 0"
                border="2px solid red"
                position="absolute"
                boxSize="100% 100%"
                top="0"
                left="0"
                opacity="0"
                cursor="pointer"
                theme="tertiary"
                fontSize="A"
                round="C"
                fontFamily="smbls"
                padding="Z A"
                outline="solid, 0, blue .3"
                tag="input"
                ref={ref_Box_28}
                lineHeight={1}
                {...dobj_Box_27.props}
                pattern={attr_pattern_2(dobj_Box_27)}
                minLength={attr_minLength_2(dobj_Box_27)}
                maxLength={attr_maxLength_2(dobj_Box_27)}
                name={attr_name_2(dobj_Box_27)}
                autoComplete={attr_autocomplete_2(dobj_Box_27)}
                placeholder={attr_placeholder_5(dobj_Box_27)}
                value={attr_value_3(dobj_Box_27)}
                disabled={attr_disabled_2(dobj_Box_27)}
                readonly={attr_readonly_2(dobj_Box_27)}
                required={attr_required_2(dobj_Box_27)}
                type={attr_type_5(dobj_Box_27)}
                tabIndex={attr_tabIndex_5(dobj_Box_27)}
                domqlElementObject={dobj_Box_27}
              />
              {show_Svg_3(dobj_Svg_4) ? (
                <Svg
                  fontSize="C"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={ref_Svg_4}
                  dangerouslySetInnerHTML={{ __html: html_4(dobj_Svg_4) }}
                  {...dobj_Svg_4.props}
                  domqlElementObject={dobj_Svg_4}
                />
              ) : null}
              <Box
                text="Choose file"
                line_height="1em"
                tag="caption"
                ref={ref_Box_29}
                {...dobj_Box_28.props}
                domqlElementObject={dobj_Box_28}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            tag="div"
            ref={ref_Box_15}
            p={{
              text: "50 MB max file size",
              fontSize: "Z",
            }}
            className={`${css(flow_11(dobj_Box_14))} ${css(
              wrap_11(dobj_Box_14)
            )} ${css(align_11(dobj_Box_14))}`}
            {...dobj_Box_14.props}
            domqlElementObject={dobj_Box_14}
          >
            <Box
              text="50 MB max file size"
              fontSize="Z"
              lineHeight="1em"
              margin="0"
              color="gray2"
              tag="p"
              ref={ref_Box_23}
              {...dobj_Box_22.props}
              domqlElementObject={dobj_Box_22}
            />
          </Box>
        </Box>
        <Box
          gap="Z"
          theme="primary"
          padding="A B"
          round="A"
          color="white"
          position="relative"
          boxSize="fit-content fit-content"
          overflow="hidden"
          fontWeight="500"
          cursor="pointer"
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
          ref={ref_Box_8}
          Caption={{
            props: {
              text: "Choose file",
            },
            __ref: undefined,
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_7(dobj_Box_7))} ${css(
            wrap_7(dobj_Box_7)
          )} ${css(align_7(dobj_Box_7))}`}
          {...dobj_Box_7.props}
          type={attr_type(dobj_Box_7)}
          placeholder={attr_placeholder(dobj_Box_7)}
          tabIndex={attr_tabIndex(dobj_Box_7)}
          domqlElementObject={dobj_Box_7}
        >
          {show_Svg(dobj_Svg_2) ? (
            <Svg
              name="upload"
              fontSize="B"
              width="A"
              height="A"
              display="inline-block"
              spriteId="upload"
              src='<symbol id="upload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></symbol>'
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
          <Box
            text="Choose file"
            line_height="1em"
            tag="caption"
            ref={ref_Box_16}
            {...dobj_Box_15.props}
            domqlElementObject={dobj_Box_15}
          />
          <Box
            type="file"
            inset="0 0 0 0"
            border="2px solid red"
            position="absolute"
            boxSize="100% 100%"
            top="0"
            left="0"
            opacity="0"
            cursor="pointer"
            theme="tertiary"
            fontSize="A"
            round="C"
            fontFamily="smbls"
            padding="Z A"
            outline="solid, 0, blue .3"
            tag="input"
            ref={ref_Box_17}
            lineHeight={1}
            {...dobj_Box_16.props}
            pattern={attr_pattern(dobj_Box_16)}
            minLength={attr_minLength(dobj_Box_16)}
            maxLength={attr_maxLength(dobj_Box_16)}
            name={attr_name(dobj_Box_16)}
            autoComplete={attr_autocomplete(dobj_Box_16)}
            placeholder={attr_placeholder_3(dobj_Box_16)}
            value={attr_value(dobj_Box_16)}
            disabled={attr_disabled(dobj_Box_16)}
            readonly={attr_readonly(dobj_Box_16)}
            required={attr_required(dobj_Box_16)}
            type={attr_type_3(dobj_Box_16)}
            tabIndex={attr_tabIndex_3(dobj_Box_16)}
            domqlElementObject={dobj_Box_16}
          />
        </Box>
      </Box>
      <Box
        minWidth="100%"
        background="transparent"
        border="1px solid #3F3F43"
        gap="A"
        padding="A"
        round="Z+X"
        boxSize="fit-content fit-content"
        display="flex"
        tag="div"
        ref={ref_Box_4}
        className={`${css(flow_4(dobj_Box_3))} ${css(wrap_4(dobj_Box_3))} ${css(
          align_4(dobj_Box_3)
        )}`}
        {...dobj_Box_3.props}
        domqlElementObject={dobj_Box_3}
      >
        <Box
          boxSize="D D"
          position="relative"
          tag="div"
          ref={ref_Box_9}
          {...dobj_Box_8.props}
          domqlElementObject={dobj_Box_8}
        >
          <Box
            boxSize="100% 100%"
            round="100%"
            overflow="hidden"
            tag="progress"
            ref={ref_Box_18}
            value={attr_value_2(dobj_Box_17)}
            style={{
              "&::-webkit-progress-bar": {
                background: "#0474F2",
              },
              "&::-webkit-progress-value": {
                background: "#252527",
              },
            }}
            {...dobj_Box_17.props}
            max={attr_max(dobj_Box_17)}
            progress={attr_progress(dobj_Box_17)}
            domqlElementObject={dobj_Box_17}
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="3"
            fontSize="Z"
            color="#818186"
            align="center flex-start"
            gap="V"
            display="flex"
            tag="div"
            ref={ref_Box_19}
            className={`${css(flow_12(dobj_Box_18))} ${css(
              wrap_12(dobj_Box_18)
            )} ${css(align_12(dobj_Box_18))}`}
            {...dobj_Box_18.props}
            domqlElementObject={dobj_Box_18}
          >
            <Box
              text="72"
              tag="div"
              ref={ref_Box_24}
              {...dobj_Box_23.props}
              domqlElementObject={dobj_Box_23}
            />
            <Box
              text="%"
              tag="div"
              ref={ref_Box_25}
              {...dobj_Box_24.props}
              domqlElementObject={dobj_Box_24}
            />
          </Box>
        </Box>
        <Box
          justifyContent="center"
          position="relative"
          flex="1"
          flow="column"
          boxSizing="border-box"
          gap="Y2"
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
            justifyContent="center"
            gap="Y2"
            flow="column"
            display="flex"
            tag="div"
            ref={ref_Box_20}
            className={`${css(flow_13(dobj_Box_19))} ${css(
              wrap_13(dobj_Box_19)
            )} ${css(align_13(dobj_Box_19))}`}
            {...dobj_Box_19.props}
            domqlElementObject={dobj_Box_19}
          >
            <Box
              justifyContent="space-between"
              align="center space-between"
              display="flex"
              tag="div"
              ref={ref_Box_26}
              className={`${css(flow_15(dobj_Box_25))} ${css(
                wrap_15(dobj_Box_25)
              )} ${css(align_15(dobj_Box_25))}`}
              {...dobj_Box_25.props}
              domqlElementObject={dobj_Box_25}
            >
              <Box
                fontSize="A"
                text="Title"
                lineHeight="1em"
                tag="h5"
                ref={ref_Box_30}
                {...dobj_Box_29.props}
                domqlElementObject={dobj_Box_29}
              />
              <Box
                position="absolute"
                top="50%"
                right="0"
                transform="translate(0%, -50%)"
                padding="0"
                background="transparent"
                color="white"
                fontSize="A"
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
                ref={ref_Box_31}
                Icon={{
                  props: {
                    name: "x",
                    fontSize: "C",
                  },
                  __ref: undefined,
                }}
                style={{
                  appearance: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
                className={`${css(flow_17(dobj_Box_30))} ${css(
                  wrap_17(dobj_Box_30)
                )} ${css(align_17(dobj_Box_30))}`}
                {...dobj_Box_30.props}
                type={attr_type_6(dobj_Box_30)}
                placeholder={attr_placeholder_6(dobj_Box_30)}
                tabIndex={attr_tabIndex_6(dobj_Box_30)}
                domqlElementObject={dobj_Box_30}
              >
                {show_Svg_4(dobj_Svg_5) ? (
                  <Svg
                    name="x"
                    fontSize="C"
                    icon="x"
                    width="A"
                    height="A"
                    display="inline-block"
                    spriteId="x"
                    src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    ref={ref_Svg_5}
                    style={{
                      fill: "currentColor",
                      "*": {
                        fill: "currentColor",
                      },
                    }}
                    dangerouslySetInnerHTML={{ __html: html_5(dobj_Svg_5) }}
                    {...dobj_Svg_5.props}
                    domqlElementObject={dobj_Svg_5}
                  />
                ) : null}
              </Box>
            </Box>
            <Box
              display="flex"
              tag="div"
              ref={ref_Box_27}
              className={`${css(flow_16(dobj_Box_26))} ${css(
                wrap_16(dobj_Box_26)
              )} ${css(align_16(dobj_Box_26))}`}
              {...dobj_Box_26.props}
              domqlElementObject={dobj_Box_26}
            >
              <Box
                text="Paragraph"
                fontSize="Z"
                lineHeight="1em"
                margin="0"
                color="gray2"
                tag="p"
                ref={ref_Box_32}
                {...dobj_Box_31.props}
                domqlElementObject={dobj_Box_31}
              />
              <Box
                display="none"
                align="center flex-start"
                gap="Y"
                tag="div"
                ref={ref_Box_33}
                className={`${css(flow_18(dobj_Box_32))} ${css(
                  wrap_18(dobj_Box_32)
                )} ${css(align_18(dobj_Box_32))}`}
                {...dobj_Box_32.props}
                domqlElementObject={dobj_Box_32}
              >
                <Box
                  color="#818186"
                  align="center flex-start"
                  gap="V"
                  fontSize="Z"
                  display="flex"
                  tag="div"
                  ref={ref_Box_34}
                  Value={{
                    props: {
                      text: "72",
                    },
                    __ref: undefined,
                  }}
                  Unit={{
                    props: {
                      text: "%",
                    },
                    __ref: undefined,
                  }}
                  className={`${css(flow_19(dobj_Box_33))} ${css(
                    wrap_19(dobj_Box_33)
                  )} ${css(align_19(dobj_Box_33))}`}
                  {...dobj_Box_33.props}
                  domqlElementObject={dobj_Box_33}
                >
                  <Box
                    text="72"
                    tag="div"
                    ref={ref_Box_37}
                    {...dobj_Box_36.props}
                    domqlElementObject={dobj_Box_36}
                  />
                  <Box
                    text="%"
                    tag="div"
                    ref={ref_Box_38}
                    {...dobj_Box_37.props}
                    domqlElementObject={dobj_Box_37}
                  />
                </Box>
                <Box
                  boxSize="W W"
                  round="100%"
                  background="#A3A3A8"
                  tag="div"
                  ref={ref_Box_35}
                  {...dobj_Box_34.props}
                  domqlElementObject={dobj_Box_34}
                />
                <Box
                  gap="X+W"
                  color="#818186"
                  align="center flex-start"
                  fontSize="Z"
                  display="flex"
                  tag="div"
                  ref={ref_Box_36}
                  className={`${css(flow_20(dobj_Box_35))} ${css(
                    wrap_20(dobj_Box_35)
                  )} ${css(align_20(dobj_Box_35))}`}
                  {...dobj_Box_35.props}
                  domqlElementObject={dobj_Box_35}
                >
                  <Box
                    text="72"
                    tag="div"
                    ref={ref_Box_39}
                    {...dobj_Box_38.props}
                    domqlElementObject={dobj_Box_38}
                  />
                  <Box
                    text="%"
                    tag="div"
                    ref={ref_Box_40}
                    {...dobj_Box_39.props}
                    domqlElementObject={dobj_Box_39}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        padding="0"
        minWidth="100%"
        margin="-W - - -"
        tag="div"
        ref={ref_Box_5}
        {...dobj_Box_4.props}
        domqlElementObject={dobj_Box_4}
      >
        <Box
          minWidth="100%"
          gap="Z2"
          tag="div"
          ref={ref_Box_11}
          childProps={{
            flex: "1",
          }}
          {...dobj_Box_10.props}
          domqlElementObject={dobj_Box_10}
        />
      </Box>
    </Box>
  );
}

import { Flex } from "@symbo.ls/react";

const orig_12 = {
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
      boxSize: 'fit-content',
      padding: 'Y2 Z2 Y2 Y2',
      round: 'A',
      gap: 'Y2',
      position: 'relative'
    },
    Image: {
      extend: {
        props: {
          padding: 'A+V',
          theme: 'tertiary',
          boxSize: 'fit-content',
          round: 'Z2'
        },
        Icon: {
          name: 'file',
          fontSize: 'C2'
        },
        __name: 'UploadImage'
      }
    },
    Flex: {
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
        justifyContent: 'space-between',
        padding: 'W2 -'
      },
      Title: {
        props: {
          justifyContent: 'space-between'
        },
        caption: {
          props: {
            text: 'Image.jpg',
            fontSize: 'Z2'
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
            fontSize: 'B',
            boxSize: 'fit-content',
            padding: '0',
            theme: 'transparent',
            margin: '- -V1 - -'
          }
        }
      },
      Paragraph: {
        props: {
          flow: 'column',
          gap: 'Y2'
        },
        DoubleUnitValue: {fontSize: 'Y'},
        ProgressLine: {}
      }
    }
  },
  Image: {},
  Flex: {
    Title: {},
    Paragraph: {
      DoubleUnitValue: null,
      span: {
        props: {
          text: 'Done',
          fontSize: 'Y',
          lineHeight: '1em',
          color: 'gray2',
          display: 'block'
        }
      },
      ProgressLine: {
        value: '1',
        style: {
          '&::-webkit-progress-value': {background: '#04F214'}
        }
      }
    }
  },
  __name: 'UploadedProcess'
};

export function UploadedProcess(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
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

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value({ props: props4 }) {
    return props4.value;
  }

  function show_Svg({ parent, props }) {
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
    ...createSync({
      ...deepMerge(cleanProps, orig_12),
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
  const dobj_Box = dobj["Image"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["Image"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_2 = dobj["Flex"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Flex"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Flex"]["Title"]["caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Flex"]["Title"]["x"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Flex"]["Paragraph"]["span"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Flex"]["Paragraph"]["ProgressLine"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Svg_2 = dobj["Flex"]["Title"]["x"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      padding="Y2 Z2 Y2 Y2"
      round="A"
      gap="Y2"
      position="relative"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        padding="A+V"
        theme="tertiary"
        boxSize="fit-content"
        round="Z2"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Svg
          name="file"
          fontSize="C2"
          width="A"
          height="A"
          display="inline-block"
          spriteId="file"
          src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
      <Flex
        justifyContent="space-between"
        padding="W2 -"
        flow="column"
        gap="Y"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow_2(dobj_Flex))} ${css(wrap_2(dobj_Flex))} ${css(
          align_2(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Box
          justifyContent="space-between"
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
            text="Image.jpg"
            fontSize="Z2"
            tag="caption"
            ref={ref_Box_5}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
          <Box
            icon="x"
            fontSize="B"
            boxSize="fit-content"
            padding="0"
            theme="transparent"
            margin="- -V1 - -"
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
            {show_Svg(dobj_Svg_2) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          flow="column"
          gap="Y2"
          margin="0"
          fontWeight="400"
          color="gray4"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            text="Done"
            fontSize="Y"
            lineHeight="1em"
            color="gray2"
            display="block"
            tag="span"
            ref={ref_Box_7}
            {...dobj_Box_6.props}
            domqlElementObject={dobj_Box_6}
          />
          <Box
            value="1"
            height="Y+V"
            minWidth="G+C"
            round="W"
            overflow="hidden"
            theme="primary @dark .inactive"
            tag="progress"
            ref={ref_Box_8}
            style={{
              "&::-webkit-progress-value": {
                background: "#04F214",
              },
            }}
            {...dobj_Box_7.props}
            max={attr_max(dobj_Box_7)}
            progress={attr_progress(dobj_Box_7)}
            value={attr_value(dobj_Box_7)}
            domqlElementObject={dobj_Box_7}
          />
        </Box>
      </Flex>
    </Box>
  );
}

const orig_13 = {
  extend: {
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
        boxSize: 'fit-content',
        padding: 'Y2 Z2 Y2 Y2',
        round: 'A',
        gap: 'Y2',
        position: 'relative'
      },
      Image: {
        extend: {
          props: {
            padding: 'A+V',
            theme: 'tertiary',
            boxSize: 'fit-content',
            round: 'Z2'
          },
          Icon: {
            name: 'file',
            fontSize: 'C2'
          },
          __name: 'UploadImage'
        }
      },
      Flex: {
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
          justifyContent: 'space-between',
          padding: 'W2 -'
        },
        Title: {
          props: {
            justifyContent: 'space-between'
          },
          caption: {
            props: {
              text: 'Image.jpg',
              fontSize: 'Z2'
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
              fontSize: 'B',
              boxSize: 'fit-content',
              padding: '0',
              theme: 'transparent',
              margin: '- -V1 - -'
            }
          }
        },
        Paragraph: {
          props: {
            flow: 'column',
            gap: 'Y2'
          },
          DoubleUnitValue: {fontSize: 'Y'},
          ProgressLine: {}
        }
      }
    },
    props: {
      border: 'solid, gray3',
      borderWidth: '1px'
    },
    Image: {
      props: {padding: 'Z2'},
      Icon: {fontSize: 'D'}
    },
    Flex: {
      Title: {
        caption: {
          props: {fontSize: 'A1'}
        }
      },
      Paragraph: {
        ProgressLineWithUnitValue: {
          ProgressLine: {},
          UnitValue: {fontSize: 'Y1'}
        },
        DoubleUnitValue: null,
        ProgressLine: null
      }
    }
  },
  Image: {},
  Flex: {
    props: {margin: '- - -V2 -'},
    Title: {},
    Paragraph: {
      ProgressLineWithUnitValue: {
        ProgressLine: {
          value: 1,
          style: {
            '&::-webkit-progress-value': {background: '#04F214'}
          }
        },
        UnitValue: {Value: {text: '100'}}
      }
    }
  },
  __name: 'UploadedProcess2'
};

export function UploadedProcess2(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
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

  function show_Svg({ parent, props }) {
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

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value({ props: props4 }) {
    return props4.value;
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

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...createSync({
      ...deepMerge(cleanProps, orig_13),
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
  const dobj_Box = dobj["Image"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["Image"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_2 = dobj["Flex"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Flex"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Flex"]["Title"]["caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Flex"]["Title"]["x"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Flex"]["Paragraph"]["ProgressLineWithUnitValue"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Svg_2 = dobj["Flex"]["Title"]["x"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_7 = dobj["Flex"]["Paragraph"]["ProgressLineWithUnitValue"]["ProgressLine"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Flex"]["Paragraph"]["ProgressLineWithUnitValue"]["UnitValue"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Flex"]["Paragraph"]["ProgressLineWithUnitValue"]["UnitValue"]["Value"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Flex"]["Paragraph"]["ProgressLineWithUnitValue"]["UnitValue"]["Unit"]
  dobj_Box_10.node = ref_Box_11.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      border="solid, gray3"
      borderWidth="1px"
      boxSize="fit-content"
      padding="Y2 Z2 Y2 Y2"
      round="A"
      gap="Y2"
      position="relative"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        padding="Z2"
        theme="tertiary"
        boxSize="fit-content"
        round="Z2"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Svg
          fontSize="D"
          name="file"
          width="A"
          height="A"
          display="inline-block"
          spriteId="file"
          src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
      <Flex
        margin="- - -V2 -"
        justifyContent="space-between"
        padding="W2 -"
        flow="column"
        gap="Y"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow_2(dobj_Flex))} ${css(wrap_2(dobj_Flex))} ${css(
          align_2(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Box
          justifyContent="space-between"
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
            fontSize="A1"
            text="Image.jpg"
            tag="caption"
            ref={ref_Box_5}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
          <Box
            icon="x"
            fontSize="B"
            boxSize="fit-content"
            padding="0"
            theme="transparent"
            margin="- -V1 - -"
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
            {show_Svg(dobj_Svg_2) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          flow="column"
          gap="Y2"
          margin="0"
          fontWeight="400"
          color="gray4"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            align="center flex-start"
            gap="A"
            display="flex"
            tag="div"
            ref={ref_Box_7}
            ProgressLine={{
              props: {
                value: 1,
                style: {
                  "&::-webkit-progress-value": {
                    background: "#04F214",
                  },
                },
              },
              __ref: undefined,
            }}
            UnitValue={{
              props: {
                Value: {
                  props: {
                    text: "100",
                  },
                  __ref: undefined,
                },
                fontSize: "Y1",
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
              height="Y+V"
              minWidth="G+C"
              round="W"
              overflow="hidden"
              theme="primary @dark .inactive"
              tag="progress"
              ref={ref_Box_8}
              value={attr_value(dobj_Box_7)}
              style={{
                "&::-webkit-progress-value": {
                  background: "#04F214",
                },
              }}
              {...dobj_Box_7.props}
              max={attr_max(dobj_Box_7)}
              progress={attr_progress(dobj_Box_7)}
              domqlElementObject={dobj_Box_7}
            />
            <Box
              fontSize="Y1"
              color="#818186"
              align="center flex-start"
              gap="V"
              display="flex"
              tag="div"
              ref={ref_Box_9}
              Value={{
                props: {
                  text: "100",
                },
                __ref: undefined,
              }}
              className={`${css(flow_7(dobj_Box_8))} ${css(
                wrap_7(dobj_Box_8)
              )} ${css(align_7(dobj_Box_8))}`}
              {...dobj_Box_8.props}
              domqlElementObject={dobj_Box_8}
            >
              <Box
                text="100"
                tag="div"
                ref={ref_Box_10}
                {...dobj_Box_9.props}
                domqlElementObject={dobj_Box_9}
              />
              <Box
                text="%"
                tag="div"
                ref={ref_Box_11}
                {...dobj_Box_10.props}
                domqlElementObject={dobj_Box_10}
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

const orig_14 = {
  extend: {
    extend: {
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
          boxSize: 'fit-content',
          padding: 'Y2 Z2 Y2 Y2',
          round: 'A',
          gap: 'Y2',
          position: 'relative'
        },
        Image: {
          extend: {
            props: {
              padding: 'A+V',
              theme: 'tertiary',
              boxSize: 'fit-content',
              round: 'Z2'
            },
            Icon: {
              name: 'file',
              fontSize: 'C2'
            },
            __name: 'UploadImage'
          }
        },
        Flex: {
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
            justifyContent: 'space-between',
            padding: 'W2 -'
          },
          Title: {
            props: {
              justifyContent: 'space-between'
            },
            caption: {
              props: {
                text: 'Image.jpg',
                fontSize: 'Z2'
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
                fontSize: 'B',
                boxSize: 'fit-content',
                padding: '0',
                theme: 'transparent',
                margin: '- -V1 - -'
              }
            }
          },
          Paragraph: {
            props: {
              flow: 'column',
              gap: 'Y2'
            },
            DoubleUnitValue: {fontSize: 'Y'},
            ProgressLine: {}
          }
        }
      },
      props: {
        border: 'solid, gray3',
        borderWidth: '1px'
      },
      Image: {
        props: {padding: 'Z2'},
        Icon: {fontSize: 'D'}
      },
      Flex: {
        Title: {
          caption: {
            props: {fontSize: 'A1'}
          }
        },
        Paragraph: {
          ProgressLineWithUnitValue: {
            ProgressLine: {},
            UnitValue: {fontSize: 'Y1'}
          },
          DoubleUnitValue: null,
          ProgressLine: null
        }
      }
    },
    props: {
      minWidth: 'G+C2',
      gap: 'Z'
    },
    Image: {},
    Flex: {
      props: {
        padding: '0',
        justifyContent: 'center',
        gap: 'Z'
      },
      Title: {
        caption: {
          props: {fontSize: 'Z2'}
        },
        x: {
          props: {
            position: 'absolute',
            top: '50%',
            right: 'B+W1',
            transform: 'translate(50%, -50%)',
            padding: 'Y',
            fontSize: 'A1',
            theme: 'tertiary'
          }
        }
      },
      Paragraph: {
        ProgressLineWithUnitValue: null,
        ProgressCircleWithSideUnitValue: {}
      }
    }
  },
  Image: {},
  Flex: {
    Title: {},
    Paragraph: {
      ProgressCircleWithSideUnitValue: {
        ProgressCircle: {
          Progress: {
            value: 1,
            style: {
              '&::-webkit-progress-value': {background: '#04F214'}
            }
          }
        },
        UnitValue: {
          Value: {text: 'Done'},
          Unit: {display: 'none'}
        }
      }
    }
  },
  __name: 'UploadedProcess3'
};

export function UploadedProcess3(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  const ref_Box_12 = useRef(null);
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

  function show_Svg({ parent, props }) {
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

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value({ props: props4 }) {
    return props4.value;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...createSync({
      ...deepMerge(cleanProps, orig_14),
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
  const dobj_Box = dobj["Image"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["Image"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_2 = dobj["Flex"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Flex"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Flex"]["Title"]["caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Flex"]["Title"]["x"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Svg_2 = dobj["Flex"]["Title"]["x"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_7 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]["ProgressCircle"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]["UnitValue"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]["ProgressCircle"]["Progress"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]["UnitValue"]["Value"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]["UnitValue"]["Unit"]
  dobj_Box_11.node = ref_Box_12.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      minWidth="G+C2"
      gap="Z"
      border="solid, gray3"
      borderWidth="1px"
      boxSize="fit-content"
      padding="Y2 Z2 Y2 Y2"
      round="A"
      position="relative"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        padding="Z2"
        theme="tertiary"
        boxSize="fit-content"
        round="Z2"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Svg
          fontSize="D"
          name="file"
          width="A"
          height="A"
          display="inline-block"
          spriteId="file"
          src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
      <Flex
        padding="0"
        justifyContent="center"
        gap="Z"
        flow="column"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow_2(dobj_Flex))} ${css(wrap_2(dobj_Flex))} ${css(
          align_2(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Box
          justifyContent="space-between"
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
            fontSize="Z2"
            text="Image.jpg"
            tag="caption"
            ref={ref_Box_5}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
          <Box
            position="absolute"
            top="50%"
            right="B+W1"
            transform="translate(50%, -50%)"
            padding="Y"
            fontSize="A1"
            theme="tertiary"
            icon="x"
            boxSize="fit-content"
            margin="- -V1 - -"
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
            {show_Svg(dobj_Svg_2) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          flow="column"
          gap="Y2"
          margin="0"
          fontWeight="400"
          color="gray4"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            align="center flex-start"
            boxSize="fit-content fit-content"
            gap="X+V"
            display="flex"
            tag="div"
            ref={ref_Box_7}
            ProgressCircle={{
              props: {
                Progress: {
                  props: {
                    value: 1,
                    style: {
                      "&::-webkit-progress-value": {
                        background: "#04F214",
                      },
                    },
                  },
                  __ref: undefined,
                },
              },
              __ref: undefined,
            }}
            UnitValue={{
              props: {
                Value: {
                  props: {
                    text: "Done",
                  },
                  __ref: undefined,
                },
                Unit: {
                  props: {
                    display: "none",
                  },
                  __ref: undefined,
                },
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
              boxSize="A A"
              position="relative"
              tag="div"
              ref={ref_Box_8}
              Progress={{
                props: {
                  value: 1,
                  style: {
                    "&::-webkit-progress-value": {
                      background: "#04F214",
                    },
                  },
                },
                __ref: undefined,
              }}
              {...dobj_Box_7.props}
              domqlElementObject={dobj_Box_7}
            >
              <Box
                boxSize="100% 100%"
                round="100%"
                overflow="hidden"
                tag="progress"
                ref={ref_Box_10}
                value={attr_value(dobj_Box_9)}
                style={{
                  "&::-webkit-progress-value": {
                    background: "#04F214",
                  },
                  "&::-webkit-progress-bar": {
                    background: "#0474F2",
                  },
                }}
                {...dobj_Box_9.props}
                max={attr_max(dobj_Box_9)}
                progress={attr_progress(dobj_Box_9)}
                domqlElementObject={dobj_Box_9}
              />
            </Box>
            <Box
              color="#818186"
              align="center flex-start"
              gap="V"
              fontSize="Z"
              display="flex"
              tag="div"
              ref={ref_Box_9}
              Value={{
                props: {
                  text: "Done",
                },
                __ref: undefined,
              }}
              Unit={{
                props: {
                  display: "none",
                },
                __ref: undefined,
              }}
              className={`${css(flow_7(dobj_Box_8))} ${css(
                wrap_7(dobj_Box_8)
              )} ${css(align_7(dobj_Box_8))}`}
              {...dobj_Box_8.props}
              domqlElementObject={dobj_Box_8}
            >
              <Box
                text="Done"
                tag="div"
                ref={ref_Box_11}
                {...dobj_Box_10.props}
                domqlElementObject={dobj_Box_10}
              />
              <Box
                display="none"
                text="%"
                tag="div"
                ref={ref_Box_12}
                {...dobj_Box_11.props}
                domqlElementObject={dobj_Box_11}
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

const orig_15 = {
  extend: {
    extend: {
      extend: {
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
            boxSize: 'fit-content',
            padding: 'Y2 Z2 Y2 Y2',
            round: 'A',
            gap: 'Y2',
            position: 'relative'
          },
          Image: {
            extend: {
              props: {
                padding: 'A+V',
                theme: 'tertiary',
                boxSize: 'fit-content',
                round: 'Z2'
              },
              Icon: {
                name: 'file',
                fontSize: 'C2'
              },
              __name: 'UploadImage'
            }
          },
          Flex: {
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
              justifyContent: 'space-between',
              padding: 'W2 -'
            },
            Title: {
              props: {
                justifyContent: 'space-between'
              },
              caption: {
                props: {
                  text: 'Image.jpg',
                  fontSize: 'Z2'
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
                  fontSize: 'B',
                  boxSize: 'fit-content',
                  padding: '0',
                  theme: 'transparent',
                  margin: '- -V1 - -'
                }
              }
            },
            Paragraph: {
              props: {
                flow: 'column',
                gap: 'Y2'
              },
              DoubleUnitValue: {fontSize: 'Y'},
              ProgressLine: {}
            }
          }
        },
        props: {
          border: 'solid, gray3',
          borderWidth: '1px'
        },
        Image: {
          props: {padding: 'Z2'},
          Icon: {fontSize: 'D'}
        },
        Flex: {
          Title: {
            caption: {
              props: {fontSize: 'A1'}
            }
          },
          Paragraph: {
            ProgressLineWithUnitValue: {
              ProgressLine: {},
              UnitValue: {fontSize: 'Y1'}
            },
            DoubleUnitValue: null,
            ProgressLine: null
          }
        }
      },
      props: {
        minWidth: 'G+C2',
        gap: 'Z'
      },
      Image: {},
      Flex: {
        props: {
          padding: '0',
          justifyContent: 'center',
          gap: 'Z'
        },
        Title: {
          caption: {
            props: {fontSize: 'Z2'}
          },
          x: {
            props: {
              position: 'absolute',
              top: '50%',
              right: 'B+W1',
              transform: 'translate(50%, -50%)',
              padding: 'Y',
              fontSize: 'A1',
              theme: 'tertiary'
            }
          }
        },
        Paragraph: {
          ProgressLineWithUnitValue: null,
          ProgressCircleWithSideUnitValue: {}
        }
      }
    },
    props: {
      alignItems: 'center',
      padding: 'Y2 Y2 Y2 Z',
      gap: 'Z1'
    },
    Image: null,
    ProgressCircleWithIcon: {
      boxSize: 'C+X1',
      Icon: {fontSize: 'C'}
    },
    Flex: {
      props: {
        gap: 'Y1',
        padding: 'W2 - - -'
      },
      Title: {},
      Paragraph: {
        tag: 'p',
        props: {
          text: 'Uploading . . .',
          margin: '0',
          padding: '0',
          fontSize: 'Y1',
          color: 'gray2'
        },
        ProgressCircleWithSideUnitValue: null
      }
    }
  },
  ProgressCircleWithIcon: {
    ':after': {
      width: 'calc(100% - 3px)',
      height: 'calc(100% - 3px)'
    },
    Icon: {
      name: 'check',
      color: '#04F214',
      fontSize: 'E1'
    },
    Progress: {
      value: 1,
      style: {
        '&::-webkit-progress-value': {background: '#04F214'}
      }
    }
  },
  Flex: {
    Title: {},
    Paragraph: {text: 'Uploaded'}
  },
  __name: 'UploadedProcess4'
};

export function UploadedProcess4(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
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

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value({ props: props4 }) {
    return props4.value;
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
    ...createSync({
      ...deepMerge(cleanProps, orig_15),
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
  const dobj_Box = dobj["ProgressCircleWithIcon"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["ProgressCircleWithIcon"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_2 = dobj["ProgressCircleWithIcon"]["Progress"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Flex"]["Title"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Flex"]["Paragraph"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Flex"]["Title"]["caption"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Flex"]["Title"]["x"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Svg_2 = dobj["Flex"]["Title"]["x"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      alignItems="center"
      padding="Y2 Y2 Y2 Z"
      gap="Z1"
      minWidth="G+C2"
      border="solid, gray3"
      borderWidth="1px"
      boxSize="fit-content"
      round="A"
      position="relative"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="C+X1"
        position="relative"
        tag="div"
        ref={ref_Box_2}
        Icon={{
          props: {
            name: "check",
            color: "#04F214",
            fontSize: "E1",
          },
          __ref: undefined,
        }}
        Progress={{
          props: {
            value: 1,
            style: {
              "&::-webkit-progress-value": {
                background: "#04F214",
              },
            },
          },
          __ref: undefined,
        }}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Svg
          name="check"
          color="#04F214"
          fontSize="E1"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="3"
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
        <Box
          boxSize="100% 100%"
          round="100%"
          overflow="hidden"
          tag="progress"
          ref={ref_Box_3}
          value={attr_value(dobj_Box_2)}
          style={{
            "&::-webkit-progress-value": {
              background: "#04F214",
            },
            "&::-webkit-progress-bar": {
              background: "#0474F2",
            },
          }}
          {...dobj_Box_2.props}
          max={attr_max(dobj_Box_2)}
          progress={attr_progress(dobj_Box_2)}
          domqlElementObject={dobj_Box_2}
        />
      </Box>
      <Flex
        gap="Y1"
        padding="W2 - - -"
        justifyContent="center"
        flow="column"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow_2(dobj_Flex))} ${css(wrap_2(dobj_Flex))} ${css(
          align_2(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Box
          justifyContent="space-between"
          lineHeight="1em"
          fontWeight="700"
          alignItems="center"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_3(dobj_Box_3))} ${css(
            wrap_3(dobj_Box_3)
          )} ${css(align_3(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            fontSize="Z2"
            text="Image.jpg"
            tag="caption"
            ref={ref_Box_6}
            {...dobj_Box_5.props}
            domqlElementObject={dobj_Box_5}
          />
          <Box
            position="absolute"
            top="50%"
            right="B+W1"
            transform="translate(50%, -50%)"
            padding="Y"
            fontSize="A1"
            theme="tertiary"
            icon="x"
            boxSize="fit-content"
            margin="- -V1 - -"
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
            ref={ref_Box_7}
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
            {show_Svg(dobj_Svg_2) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          text="Uploading . . ."
          margin="0"
          padding="0"
          fontSize="Y1"
          color="gray2"
          flow="column"
          gap="Y2"
          fontWeight="400"
          display="flex"
          tag="p"
          ref={ref_Box_5}
          className={`${css(flow_4(dobj_Box_4))} ${css(
            wrap_4(dobj_Box_4)
          )} ${css(align_4(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
      </Flex>
    </Box>
  );
}

const orig_16 = {
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
    boxSize: 'fit-content',
    padding: 'Y2 Z2 Y2 Y2',
    round: 'A',
    gap: 'Y2',
    position: 'relative'
  },
  Image: {
    extend: {
      props: {
        padding: 'A+V',
        theme: 'tertiary',
        boxSize: 'fit-content',
        round: 'Z2'
      },
      Icon: {
        name: 'file',
        fontSize: 'C2'
      },
      __name: 'UploadImage'
    }
  },
  Flex: {
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
      justifyContent: 'space-between',
      padding: 'W2 -'
    },
    Title: {
      props: {
        justifyContent: 'space-between'
      },
      caption: {
        props: {
          text: 'Image.jpg',
          fontSize: 'Z2'
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
          fontSize: 'B',
          boxSize: 'fit-content',
          padding: '0',
          theme: 'transparent',
          margin: '- -V1 - -'
        }
      }
    },
    Paragraph: {
      props: {
        flow: 'column',
        gap: 'Y2'
      },
      DoubleUnitValue: {fontSize: 'Y'},
      ProgressLine: {}
    }
  },
  __name: 'UploadingProcess'
};

export function UploadingProcess(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Svg_2 = useRef(null);
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

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value({ props: props4 }) {
    return props4.value;
  }

  function show_Svg({ parent, props }) {
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
    ...createSync({
      ...deepMerge(cleanProps, orig_16),
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
  const dobj_Box = dobj["Image"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["Image"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_2 = dobj["Flex"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Flex"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Flex"]["Title"]["caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Flex"]["Title"]["x"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Flex"]["Paragraph"]["DoubleUnitValue"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Flex"]["Paragraph"]["ProgressLine"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Svg_2 = dobj["Flex"]["Title"]["x"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_8 = dobj["Flex"]["Paragraph"]["DoubleUnitValue"]["UnitValue"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Flex"]["Paragraph"]["DoubleUnitValue"]["dot"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Flex"]["Paragraph"]["DoubleUnitValue"]["UnitValue2"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Flex"]["Paragraph"]["DoubleUnitValue"]["UnitValue"]["Value"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Flex"]["Paragraph"]["DoubleUnitValue"]["UnitValue"]["Unit"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["Flex"]["Paragraph"]["DoubleUnitValue"]["UnitValue2"]["Value"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["Flex"]["Paragraph"]["DoubleUnitValue"]["UnitValue2"]["Unit"]
  dobj_Box_14.node = ref_Box_15.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      padding="Y2 Z2 Y2 Y2"
      round="A"
      gap="Y2"
      position="relative"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        padding="A+V"
        theme="tertiary"
        boxSize="fit-content"
        round="Z2"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Svg
          name="file"
          fontSize="C2"
          width="A"
          height="A"
          display="inline-block"
          spriteId="file"
          src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
      <Flex
        justifyContent="space-between"
        padding="W2 -"
        flow="column"
        gap="Y"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow_2(dobj_Flex))} ${css(wrap_2(dobj_Flex))} ${css(
          align_2(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Box
          justifyContent="space-between"
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
            text="Image.jpg"
            fontSize="Z2"
            tag="caption"
            ref={ref_Box_5}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
          <Box
            icon="x"
            fontSize="B"
            boxSize="fit-content"
            padding="0"
            theme="transparent"
            margin="- -V1 - -"
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
            {show_Svg(dobj_Svg_2) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          flow="column"
          gap="Y2"
          margin="0"
          fontWeight="400"
          color="gray4"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            fontSize="Y"
            align="center flex-start"
            gap="Y"
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
              color="#818186"
              align="center flex-start"
              gap="V"
              fontSize="Z"
              display="flex"
              tag="div"
              ref={ref_Box_9}
              Value={{
                props: {
                  text: "72",
                },
                __ref: undefined,
              }}
              Unit={{
                props: {
                  text: "%",
                },
                __ref: undefined,
              }}
              className={`${css(flow_7(dobj_Box_8))} ${css(
                wrap_7(dobj_Box_8)
              )} ${css(align_7(dobj_Box_8))}`}
              {...dobj_Box_8.props}
              domqlElementObject={dobj_Box_8}
            >
              <Box
                text="72"
                tag="div"
                ref={ref_Box_12}
                {...dobj_Box_11.props}
                domqlElementObject={dobj_Box_11}
              />
              <Box
                text="%"
                tag="div"
                ref={ref_Box_13}
                {...dobj_Box_12.props}
                domqlElementObject={dobj_Box_12}
              />
            </Box>
            <Box
              boxSize="W W"
              round="100%"
              background="#A3A3A8"
              tag="div"
              ref={ref_Box_10}
              {...dobj_Box_9.props}
              domqlElementObject={dobj_Box_9}
            />
            <Box
              gap="X+W"
              color="#818186"
              align="center flex-start"
              fontSize="Z"
              display="flex"
              tag="div"
              ref={ref_Box_11}
              className={`${css(flow_8(dobj_Box_10))} ${css(
                wrap_8(dobj_Box_10)
              )} ${css(align_8(dobj_Box_10))}`}
              {...dobj_Box_10.props}
              domqlElementObject={dobj_Box_10}
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
            height="Y+V"
            minWidth="G+C"
            round="W"
            overflow="hidden"
            theme="primary @dark .inactive"
            tag="progress"
            ref={ref_Box_8}
            value={attr_value(dobj_Box_7)}
            {...dobj_Box_7.props}
            max={attr_max(dobj_Box_7)}
            progress={attr_progress(dobj_Box_7)}
            domqlElementObject={dobj_Box_7}
          />
        </Box>
      </Flex>
    </Box>
  );
}

const orig_17 = {
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
      boxSize: 'fit-content',
      padding: 'Y2 Z2 Y2 Y2',
      round: 'A',
      gap: 'Y2',
      position: 'relative'
    },
    Image: {
      extend: {
        props: {
          padding: 'A+V',
          theme: 'tertiary',
          boxSize: 'fit-content',
          round: 'Z2'
        },
        Icon: {
          name: 'file',
          fontSize: 'C2'
        },
        __name: 'UploadImage'
      }
    },
    Flex: {
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
        justifyContent: 'space-between',
        padding: 'W2 -'
      },
      Title: {
        props: {
          justifyContent: 'space-between'
        },
        caption: {
          props: {
            text: 'Image.jpg',
            fontSize: 'Z2'
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
            fontSize: 'B',
            boxSize: 'fit-content',
            padding: '0',
            theme: 'transparent',
            margin: '- -V1 - -'
          }
        }
      },
      Paragraph: {
        props: {
          flow: 'column',
          gap: 'Y2'
        },
        DoubleUnitValue: {fontSize: 'Y'},
        ProgressLine: {}
      }
    },
    __name: 'UploadingProcess'
  },
  props: {
    border: 'solid, gray3',
    borderWidth: '1px'
  },
  Image: {
    props: {padding: 'Z2'},
    Icon: {fontSize: 'D'}
  },
  Flex: {
    Title: {
      caption: {
        props: {fontSize: 'A1'}
      }
    },
    Paragraph: {
      ProgressLineWithUnitValue: {
        ProgressLine: {},
        UnitValue: {fontSize: 'Y1'}
      },
      DoubleUnitValue: null,
      ProgressLine: null
    }
  },
  __name: 'UploadingProcess2'
};

export function UploadingProcess2(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
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

  function show_Svg({ parent, props }) {
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

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value({ props: props4 }) {
    return props4.value;
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

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...createSync({
      ...deepMerge(cleanProps, orig_17),
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
  const dobj_Box = dobj["Image"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["Image"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_2 = dobj["Flex"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Flex"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Flex"]["Title"]["caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Flex"]["Title"]["x"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Flex"]["Paragraph"]["ProgressLineWithUnitValue"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Svg_2 = dobj["Flex"]["Title"]["x"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_7 = dobj["Flex"]["Paragraph"]["ProgressLineWithUnitValue"]["ProgressLine"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Flex"]["Paragraph"]["ProgressLineWithUnitValue"]["UnitValue"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Flex"]["Paragraph"]["ProgressLineWithUnitValue"]["UnitValue"]["Value"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Flex"]["Paragraph"]["ProgressLineWithUnitValue"]["UnitValue"]["Unit"]
  dobj_Box_10.node = ref_Box_11.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      border="solid, gray3"
      borderWidth="1px"
      boxSize="fit-content"
      padding="Y2 Z2 Y2 Y2"
      round="A"
      gap="Y2"
      position="relative"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        padding="Z2"
        theme="tertiary"
        boxSize="fit-content"
        round="Z2"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Svg
          fontSize="D"
          name="file"
          width="A"
          height="A"
          display="inline-block"
          spriteId="file"
          src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
      <Flex
        justifyContent="space-between"
        padding="W2 -"
        flow="column"
        gap="Y"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow_2(dobj_Flex))} ${css(wrap_2(dobj_Flex))} ${css(
          align_2(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Box
          justifyContent="space-between"
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
            fontSize="A1"
            text="Image.jpg"
            tag="caption"
            ref={ref_Box_5}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
          <Box
            icon="x"
            fontSize="B"
            boxSize="fit-content"
            padding="0"
            theme="transparent"
            margin="- -V1 - -"
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
            {show_Svg(dobj_Svg_2) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          flow="column"
          gap="Y2"
          margin="0"
          fontWeight="400"
          color="gray4"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            align="center flex-start"
            gap="A"
            display="flex"
            tag="div"
            ref={ref_Box_7}
            ProgressLine={{
              props: {},
              __ref: undefined,
            }}
            UnitValue={{
              props: {
                fontSize: "Y1",
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
              height="Y+V"
              minWidth="G+C"
              round="W"
              overflow="hidden"
              theme="primary @dark .inactive"
              tag="progress"
              ref={ref_Box_8}
              value={attr_value(dobj_Box_7)}
              {...dobj_Box_7.props}
              max={attr_max(dobj_Box_7)}
              progress={attr_progress(dobj_Box_7)}
              domqlElementObject={dobj_Box_7}
            />
            <Box
              fontSize="Y1"
              color="#818186"
              align="center flex-start"
              gap="V"
              display="flex"
              tag="div"
              ref={ref_Box_9}
              className={`${css(flow_7(dobj_Box_8))} ${css(
                wrap_7(dobj_Box_8)
              )} ${css(align_7(dobj_Box_8))}`}
              {...dobj_Box_8.props}
              domqlElementObject={dobj_Box_8}
            >
              <Box
                text="72"
                tag="div"
                ref={ref_Box_10}
                {...dobj_Box_9.props}
                domqlElementObject={dobj_Box_9}
              />
              <Box
                text="%"
                tag="div"
                ref={ref_Box_11}
                {...dobj_Box_10.props}
                domqlElementObject={dobj_Box_10}
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

const orig_18 = {
  extend: {
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
        boxSize: 'fit-content',
        padding: 'Y2 Z2 Y2 Y2',
        round: 'A',
        gap: 'Y2',
        position: 'relative'
      },
      Image: {
        extend: {
          props: {
            padding: 'A+V',
            theme: 'tertiary',
            boxSize: 'fit-content',
            round: 'Z2'
          },
          Icon: {
            name: 'file',
            fontSize: 'C2'
          },
          __name: 'UploadImage'
        }
      },
      Flex: {
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
          justifyContent: 'space-between',
          padding: 'W2 -'
        },
        Title: {
          props: {
            justifyContent: 'space-between'
          },
          caption: {
            props: {
              text: 'Image.jpg',
              fontSize: 'Z2'
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
              fontSize: 'B',
              boxSize: 'fit-content',
              padding: '0',
              theme: 'transparent',
              margin: '- -V1 - -'
            }
          }
        },
        Paragraph: {
          props: {
            flow: 'column',
            gap: 'Y2'
          },
          DoubleUnitValue: {fontSize: 'Y'},
          ProgressLine: {}
        }
      },
      __name: 'UploadingProcess'
    },
    props: {
      border: 'solid, gray3',
      borderWidth: '1px'
    },
    Image: {
      props: {padding: 'Z2'},
      Icon: {fontSize: 'D'}
    },
    Flex: {
      Title: {
        caption: {
          props: {fontSize: 'A1'}
        }
      },
      Paragraph: {
        ProgressLineWithUnitValue: {
          ProgressLine: {},
          UnitValue: {fontSize: 'Y1'}
        },
        DoubleUnitValue: null,
        ProgressLine: null
      }
    },
    __name: 'UploadingProcess2'
  },
  props: {
    minWidth: 'G+C2',
    gap: 'Z'
  },
  Image: {},
  Flex: {
    props: {
      padding: '0',
      justifyContent: 'center',
      gap: 'Z'
    },
    Title: {
      caption: {
        props: {fontSize: 'Z2'}
      },
      x: {
        props: {
          position: 'absolute',
          top: '50%',
          right: 'B+W1',
          transform: 'translate(50%, -50%)',
          padding: 'Y',
          fontSize: 'A1',
          theme: 'tertiary'
        }
      }
    },
    Paragraph: {
      ProgressLineWithUnitValue: null,
      ProgressCircleWithSideUnitValue: {}
    }
  },
  __name: 'UploadingProcess3'
};

export function UploadingProcess3(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  const ref_Box_12 = useRef(null);
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

  function show_Svg({ parent, props }) {
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

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value({ props: props4 }) {
    return props4.value;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...createSync({
      ...deepMerge(cleanProps, orig_18),
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
  const dobj_Box = dobj["Image"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["Image"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_2 = dobj["Flex"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Flex"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Flex"]["Title"]["caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Flex"]["Title"]["x"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Svg_2 = dobj["Flex"]["Title"]["x"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_7 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]["ProgressCircle"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]["UnitValue"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]["ProgressCircle"]["Progress"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]["UnitValue"]["Value"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Flex"]["Paragraph"]["ProgressCircleWithSideUnitValue"]["UnitValue"]["Unit"]
  dobj_Box_11.node = ref_Box_12.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      minWidth="G+C2"
      gap="Z"
      border="solid, gray3"
      borderWidth="1px"
      boxSize="fit-content"
      padding="Y2 Z2 Y2 Y2"
      round="A"
      position="relative"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        padding="Z2"
        theme="tertiary"
        boxSize="fit-content"
        round="Z2"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Svg
          fontSize="D"
          name="file"
          width="A"
          height="A"
          display="inline-block"
          spriteId="file"
          src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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
      <Flex
        padding="0"
        justifyContent="center"
        gap="Z"
        flow="column"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow_2(dobj_Flex))} ${css(wrap_2(dobj_Flex))} ${css(
          align_2(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Box
          justifyContent="space-between"
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
            fontSize="Z2"
            text="Image.jpg"
            tag="caption"
            ref={ref_Box_5}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
          <Box
            position="absolute"
            top="50%"
            right="B+W1"
            transform="translate(50%, -50%)"
            padding="Y"
            fontSize="A1"
            theme="tertiary"
            icon="x"
            boxSize="fit-content"
            margin="- -V1 - -"
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
            {show_Svg(dobj_Svg_2) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          flow="column"
          gap="Y2"
          margin="0"
          fontWeight="400"
          color="gray4"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            align="center flex-start"
            boxSize="fit-content fit-content"
            gap="X+V"
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
              boxSize="A A"
              position="relative"
              tag="div"
              ref={ref_Box_8}
              {...dobj_Box_7.props}
              domqlElementObject={dobj_Box_7}
            >
              <Box
                boxSize="100% 100%"
                round="100%"
                overflow="hidden"
                tag="progress"
                ref={ref_Box_10}
                value={attr_value(dobj_Box_9)}
                style={{
                  "&::-webkit-progress-bar": {
                    background: "#0474F2",
                  },
                  "&::-webkit-progress-value": {
                    background: "#252527",
                  },
                }}
                {...dobj_Box_9.props}
                max={attr_max(dobj_Box_9)}
                progress={attr_progress(dobj_Box_9)}
                domqlElementObject={dobj_Box_9}
              />
            </Box>
            <Box
              color="#818186"
              align="center flex-start"
              gap="V"
              fontSize="Z"
              display="flex"
              tag="div"
              ref={ref_Box_9}
              className={`${css(flow_7(dobj_Box_8))} ${css(
                wrap_7(dobj_Box_8)
              )} ${css(align_7(dobj_Box_8))}`}
              {...dobj_Box_8.props}
              domqlElementObject={dobj_Box_8}
            >
              <Box
                text="72"
                tag="div"
                ref={ref_Box_11}
                {...dobj_Box_10.props}
                domqlElementObject={dobj_Box_10}
              />
              <Box
                text="%"
                tag="div"
                ref={ref_Box_12}
                {...dobj_Box_11.props}
                domqlElementObject={dobj_Box_11}
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

const orig_19 = {
  extend: {
    extend: {
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
          boxSize: 'fit-content',
          padding: 'Y2 Z2 Y2 Y2',
          round: 'A',
          gap: 'Y2',
          position: 'relative'
        },
        Image: {
          extend: {
            props: {
              padding: 'A+V',
              theme: 'tertiary',
              boxSize: 'fit-content',
              round: 'Z2'
            },
            Icon: {
              name: 'file',
              fontSize: 'C2'
            },
            __name: 'UploadImage'
          }
        },
        Flex: {
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
            justifyContent: 'space-between',
            padding: 'W2 -'
          },
          Title: {
            props: {
              justifyContent: 'space-between'
            },
            caption: {
              props: {
                text: 'Image.jpg',
                fontSize: 'Z2'
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
                fontSize: 'B',
                boxSize: 'fit-content',
                padding: '0',
                theme: 'transparent',
                margin: '- -V1 - -'
              }
            }
          },
          Paragraph: {
            props: {
              flow: 'column',
              gap: 'Y2'
            },
            DoubleUnitValue: {fontSize: 'Y'},
            ProgressLine: {}
          }
        },
        __name: 'UploadingProcess'
      },
      props: {
        border: 'solid, gray3',
        borderWidth: '1px'
      },
      Image: {
        props: {padding: 'Z2'},
        Icon: {fontSize: 'D'}
      },
      Flex: {
        Title: {
          caption: {
            props: {fontSize: 'A1'}
          }
        },
        Paragraph: {
          ProgressLineWithUnitValue: {
            ProgressLine: {},
            UnitValue: {fontSize: 'Y1'}
          },
          DoubleUnitValue: null,
          ProgressLine: null
        }
      },
      __name: 'UploadingProcess2'
    },
    props: {
      minWidth: 'G+C2',
      gap: 'Z'
    },
    Image: {},
    Flex: {
      props: {
        padding: '0',
        justifyContent: 'center',
        gap: 'Z'
      },
      Title: {
        caption: {
          props: {fontSize: 'Z2'}
        },
        x: {
          props: {
            position: 'absolute',
            top: '50%',
            right: 'B+W1',
            transform: 'translate(50%, -50%)',
            padding: 'Y',
            fontSize: 'A1',
            theme: 'tertiary'
          }
        }
      },
      Paragraph: {
        ProgressLineWithUnitValue: null,
        ProgressCircleWithSideUnitValue: {}
      }
    },
    __name: 'UploadingProcess3'
  },
  props: {
    alignItems: 'center',
    padding: 'Y2 Y2 Y2 Z',
    gap: 'Z1'
  },
  Image: null,
  ProgressCircleWithIcon: {
    boxSize: 'C+X1',
    Icon: {fontSize: 'C'}
  },
  Flex: {
    props: {
      gap: 'Y1',
      padding: 'W2 - - -'
    },
    Title: {},
    Paragraph: {
      tag: 'p',
      props: {
        text: 'Uploading . . .',
        margin: '0',
        padding: '0',
        fontSize: 'Y1',
        color: 'gray2'
      },
      ProgressCircleWithSideUnitValue: null
    }
  },
  __name: 'UploadingProcess4'
};

export function UploadingProcess4(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
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

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value({ props: props4 }) {
    return props4.value;
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
    ...createSync({
      ...deepMerge(cleanProps, orig_19),
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
  const dobj_Box = dobj["ProgressCircleWithIcon"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["ProgressCircleWithIcon"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_2 = dobj["ProgressCircleWithIcon"]["Progress"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Flex"]["Title"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Flex"]["Paragraph"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Flex"]["Title"]["caption"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Flex"]["Title"]["x"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Svg_2 = dobj["Flex"]["Title"]["x"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      alignItems="center"
      padding="Y2 Y2 Y2 Z"
      gap="Z1"
      minWidth="G+C2"
      border="solid, gray3"
      borderWidth="1px"
      boxSize="fit-content"
      round="A"
      position="relative"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="C+X1"
        position="relative"
        tag="div"
        ref={ref_Box_2}
        Icon={{
          props: {
            fontSize: "C",
          },
          __ref: undefined,
        }}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Svg
          fontSize="C"
          name="arrowUp"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="3"
          width="A"
          height="A"
          display="inline-block"
          spriteId="arrowUp"
          src='<symbol id="arrowUp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></symbol>'
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
          boxSize="100% 100%"
          round="100%"
          overflow="hidden"
          tag="progress"
          ref={ref_Box_3}
          value={attr_value(dobj_Box_2)}
          style={{
            "&::-webkit-progress-bar": {
              background: "#0474F2",
            },
            "&::-webkit-progress-value": {
              background: "#252527",
            },
          }}
          {...dobj_Box_2.props}
          max={attr_max(dobj_Box_2)}
          progress={attr_progress(dobj_Box_2)}
          domqlElementObject={dobj_Box_2}
        />
      </Box>
      <Flex
        gap="Y1"
        padding="W2 - - -"
        justifyContent="center"
        flow="column"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow_2(dobj_Flex))} ${css(wrap_2(dobj_Flex))} ${css(
          align_2(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Box
          justifyContent="space-between"
          lineHeight="1em"
          fontWeight="700"
          alignItems="center"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_3(dobj_Box_3))} ${css(
            wrap_3(dobj_Box_3)
          )} ${css(align_3(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            fontSize="Z2"
            text="Image.jpg"
            tag="caption"
            ref={ref_Box_6}
            {...dobj_Box_5.props}
            domqlElementObject={dobj_Box_5}
          />
          <Box
            position="absolute"
            top="50%"
            right="B+W1"
            transform="translate(50%, -50%)"
            padding="Y"
            fontSize="A1"
            theme="tertiary"
            icon="x"
            boxSize="fit-content"
            margin="- -V1 - -"
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
            ref={ref_Box_7}
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
            {show_Svg(dobj_Svg_2) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          text="Uploading . . ."
          margin="0"
          padding="0"
          fontSize="Y1"
          color="gray2"
          flow="column"
          gap="Y2"
          fontWeight="400"
          display="flex"
          tag="p"
          ref={ref_Box_5}
          className={`${css(flow_4(dobj_Box_4))} ${css(
            wrap_4(dobj_Box_4)
          )} ${css(align_4(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
      </Flex>
    </Box>
  );
}
