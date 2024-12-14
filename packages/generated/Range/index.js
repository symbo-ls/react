import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";

const orig = {
  props: {
    appearance: 'none',
    width: '100%',
    height: '2px',
    outline: 'none',
    flex: 1,
    onInput: (ev, el, s) => s.update({ value: el.node.value }),
    onChange: (ev, el, s) => s.update({ value: el.node.value }),
    style: {appearance: 'none'},
    '::-webkit-slider-thumb': {
      boxSizing: 'content-box',
      width: '8px',
      height: '8px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '100%',
      opacity: '.8',
      style: {appearance: 'none'}
    },
    '::-webkit-slider-runnable-track': {},
    '@dark': {
      background: 'white 0.2',
      '::-webkit-slider-thumb': {
        background: '#232526',
        borderColor: 'rgba(69,70,70,0.75)'
      },
      ':hover': {
        '::-webkit-slider-thumb': {
          borderColor: 'rgba(255,255,255,0.35)'
        }
      },
      ':focus': {
        '::-webkit-slider-thumb': {borderColor: '#3C6AC0'}
      }
    },
    '@light': {
      background: 'gray9',
      '::-webkit-slider-thumb': {
        background: 'white',
        borderColor: 'gray9'
      },
      ':hover': {
        '::-webkit-slider-thumb': {borderColor: 'gray7'}
      },
      ':focus': {
        '::-webkit-slider-thumb': {borderColor: 'blue'}
      }
    }
  },
  tag: 'input',
  attr: {type: 'range'},
  __name: 'Range'
};

export function Range(props) {
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
      appearance="none"
      width="100%"
      height="2px"
      outline="none"
      tag="input"
      type="range"
      ref={ref_Box}
      flex={1}
      onInput={(event) => (ev, el, s) =>
        s.update({
          value: el.node.value,
        })}
      onChange={(event) => (ev, el, s) =>
        s.update({
          value: el.node.value,
        })}
      style={{
        appearance: "none",
      }}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}

import { Svg } from "@symbo.ls/react-atoms";
import { css } from "@emotion/css";

const orig_2 = {
  minus: {
    extend: {
      extend: {
        extend: [
          {
            extend: {
              props: {display: 'flex'},
              class: {
                flow: ({ props: props2 }) => props2.flow && { flexFlow: props2.flow },
                wrap: ({ props: props2 }) => props2.wrap && { flexWrap: props2.wrap },
                align: ({ props: props2 }) => {
      if (typeof props2.align !== "string")
        return;
      const [alignItems, justifyContent] = props2.align.split(" ");
      return { alignItems, justifyContent };
    }
              }
            },
            props: {
              align: 'center center',
              lineHeight: 1
            },
            Icon: {
              props: ({ parent, props: props2 }) => ({ icon: parent.props.icon }),
              if: ({ parent, props: props2 }) => {
      const doesExist = parent.props.icon || parent.props.Icon || props2.name || props2.icon;
      return doesExist;
    }
            },
            text: ({ props: props2 }) => props2.text,
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
                placeholder: ({ props: props2 }) => props2.placeholder,
                tabIndex: ({ props: props2 }) => props2.tabIndex
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
              type: ({ props: props2 }) => props2.type
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
          type: ({ props: props2 }) => props2.type
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
    props: {
      theme: 'secondary',
      icon: 'minus'
    },
    on: {
      click: (ev, el, s) => {
        const parentProps = el.parent.props;
        if ((0, import_utils9.isFunction)(parentProps.onDecrease)) {
          parentProps.onDecrease(ev, el.parent, s);
        } else {
          const value = parseFloat(s.value);
          const min = returnPropertyValue(el.parent, "min", 1);
          const step = returnPropertyValue(el.parent, "step", 1);
          if (value > min) {
            s.update({ value: value - step });
          }
        }
      }
    }
  },
  value: {
    props: {width: '4ch'},
    tag: 'span',
    text: ({ state, parent }) => {
      const unit = returnPropertyValue(parent, "unit", "");
      return "" + (state.value || 50) + unit;
    }
  },
  input: {
    extend: {
      props: {
        appearance: 'none',
        width: '100%',
        height: '2px',
        outline: 'none',
        flex: 1,
        onInput: (ev, el, s) => s.update({ value: el.node.value }),
        onChange: (ev, el, s) => s.update({ value: el.node.value }),
        style: {appearance: 'none'},
        '::-webkit-slider-thumb': {
          boxSizing: 'content-box',
          width: '8px',
          height: '8px',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderRadius: '100%',
          opacity: '.8',
          style: {appearance: 'none'}
        },
        '::-webkit-slider-runnable-track': {},
        '@dark': {
          background: 'white 0.2',
          '::-webkit-slider-thumb': {
            background: '#232526',
            borderColor: 'rgba(69,70,70,0.75)'
          },
          ':hover': {
            '::-webkit-slider-thumb': {
              borderColor: 'rgba(255,255,255,0.35)'
            }
          },
          ':focus': {
            '::-webkit-slider-thumb': {borderColor: '#3C6AC0'}
          }
        },
        '@light': {
          background: 'gray9',
          '::-webkit-slider-thumb': {
            background: 'white',
            borderColor: 'gray9'
          },
          ':hover': {
            '::-webkit-slider-thumb': {borderColor: 'gray7'}
          },
          ':focus': {
            '::-webkit-slider-thumb': {borderColor: 'blue'}
          }
        }
      },
      tag: 'input',
      attr: {type: 'range'},
      __name: 'Range'
    },
    attr: {
      value: (el, s) => parseFloat(el.state.value),
      min: (el, s) => returnPropertyValue(el.parent, "min", 0),
      max: (el, s) => returnPropertyValue(el.parent, "max", 100),
      step: (el, s) => returnPropertyValue(el.parent, "step", 1)
    },
    on: {
      input: (ev, el, s) => {
        const parentProps = el.parent.props;
        if ((0, import_utils9.isFunction)(parentProps.onInput)) {
          parentProps.onInput(ev, el, s);
        } else {
          s.update({ value: parseFloat(el.node.value) });
        }
      },
      change: (ev, el, s) => {
        const parentProps = el.parent.props;
        if ((0, import_utils9.isFunction)(parentProps.onChange)) {
          parentProps.onChange(ev, el, s);
        } else {
          s.update({ value: parseFloat(el.node.value) });
        }
      }
    }
  },
  plus: {
    extend: {
      extend: {
        extend: [
          {
            extend: {
              props: {display: 'flex'},
              class: {
                flow: ({ props: props2 }) => props2.flow && { flexFlow: props2.flow },
                wrap: ({ props: props2 }) => props2.wrap && { flexWrap: props2.wrap },
                align: ({ props: props2 }) => {
      if (typeof props2.align !== "string")
        return;
      const [alignItems, justifyContent] = props2.align.split(" ");
      return { alignItems, justifyContent };
    }
              }
            },
            props: {
              align: 'center center',
              lineHeight: 1
            },
            Icon: {
              props: ({ parent, props: props2 }) => ({ icon: parent.props.icon }),
              if: ({ parent, props: props2 }) => {
      const doesExist = parent.props.icon || parent.props.Icon || props2.name || props2.icon;
      return doesExist;
    }
            },
            text: ({ props: props2 }) => props2.text,
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
                placeholder: ({ props: props2 }) => props2.placeholder,
                tabIndex: ({ props: props2 }) => props2.tabIndex
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
              type: ({ props: props2 }) => props2.type
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
          type: ({ props: props2 }) => props2.type
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
    props: {
      theme: 'secondary',
      icon: 'plus'
    },
    on: {
      click: (ev, el, s) => {
        const parentProps = el.parent.props;
        if ((0, import_utils9.isFunction)(parentProps.onIncrease)) {
          parentProps.onIncrease(ev, el.parent, s);
        } else {
          const value = parseFloat(s.value);
          const max = returnPropertyValue(el.parent, "max", 1);
          const step = returnPropertyValue(el.parent, "step", 1);
          if (value < max) {
            s.update({ value: value + step });
          }
        }
      }
    }
  },
  __name: 'RangeWithButtons'
};

export function RangeWithButtons(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
  function flow({ props: props2 }) {
    return (
      props2.flow && {
        flexFlow: props2.flow,
      }
    );
  }

  function wrap({ props: props2 }) {
    return (
      props2.wrap && {
        flexWrap: props2.wrap,
      }
    );
  }

  function align({ props: props2 }) {
    if (typeof props2.align !== "string") return;
    const [alignItems, justifyContent] = props2.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function Box_onClick(ev, el, s) {
    const parentProps = el.parent.props;
    if ((0, import_utils9.isFunction)(parentProps.onDecrease)) {
      parentProps.onDecrease(ev, el.parent, s);
    } else {
      const value = parseFloat(s.value);
      const min = returnPropertyValue(el.parent, "min", 1);
      const step = returnPropertyValue(el.parent, "step", 1);
      if (value > min) {
        s.update({
          value: value - step,
        });
      }
    }
    return;
  }

  function attr_type({ props: props2 }) {
    return props2.type;
  }

  function attr_placeholder({ props: props2 }) {
    return props2.placeholder;
  }

  function attr_tabIndex({ props: props2 }) {
    return props2.tabIndex;
  }

  function Range_onInput(ev, el, s) {
    const parentProps = el.parent.props;
    if ((0, import_utils9.isFunction)(parentProps.onInput)) {
      parentProps.onInput(ev, el, s);
    } else {
      s.update({
        value: parseFloat(el.node.value),
      });
    }
    return;
  }

  function Range_onChange(ev, el, s) {
    const parentProps = el.parent.props;
    if ((0, import_utils9.isFunction)(parentProps.onChange)) {
      parentProps.onChange(ev, el, s);
    } else {
      s.update({
        value: parseFloat(el.node.value),
      });
    }
    return;
  }

  function attr_value(el, s) {
    return parseFloat(el.state.value);
  }

  function attr_min(el, s) {
    return returnPropertyValue(el.parent, "min", 0);
  }

  function attr_max(el, s) {
    return returnPropertyValue(el.parent, "max", 100);
  }

  function attr_step(el, s) {
    return returnPropertyValue(el.parent, "step", 1);
  }

  function flow_2({ props: props2 }) {
    return (
      props2.flow && {
        flexFlow: props2.flow,
      }
    );
  }

  function wrap_2({ props: props2 }) {
    return (
      props2.wrap && {
        flexWrap: props2.wrap,
      }
    );
  }

  function align_2({ props: props2 }) {
    if (typeof props2.align !== "string") return;
    const [alignItems, justifyContent] = props2.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function Box_onClick_2(ev, el, s) {
    const parentProps = el.parent.props;
    if ((0, import_utils9.isFunction)(parentProps.onIncrease)) {
      parentProps.onIncrease(ev, el.parent, s);
    } else {
      const value = parseFloat(s.value);
      const max = returnPropertyValue(el.parent, "max", 1);
      const step = returnPropertyValue(el.parent, "step", 1);
      if (value < max) {
        s.update({
          value: value + step,
        });
      }
    }
    return;
  }

  function attr_type_2({ props: props2 }) {
    return props2.type;
  }

  function attr_placeholder_2({ props: props2 }) {
    return props2.placeholder;
  }

  function attr_tabIndex_2({ props: props2 }) {
    return props2.tabIndex;
  }

  function show_Svg({ parent, props: props2 }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props2.name || props2.icon;
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

  function show_Svg_2({ parent, props: props2 }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props2.name || props2.icon;
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
  const dobj_Box = dobj["minus"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["value"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["input"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["plus"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Svg = dobj["minus"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["plus"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box tag="div" ref={ref_Box} {...dobj.props} domqlElementObject={dobj}>
      <Box
        theme="secondary"
        icon="minus"
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
        ref={ref_Box_2}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow(dobj_Box))} ${css(wrap(dobj_Box))} ${css(
          align(dobj_Box)
        )}`}
        onClick={(ev) => Box_onClick(ev, dobj_Box, s)}
        {...dobj_Box.props}
        type={attr_type(dobj_Box)}
        placeholder={attr_placeholder(dobj_Box)}
        tabIndex={attr_tabIndex(dobj_Box)}
        domqlElementObject={dobj_Box}
      >
        {show_Svg(dobj_Svg) ? (
          <Svg
            icon="minus"
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
        width="4ch"
        tag="span"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
      <Box
        appearance="none"
        width="100%"
        height="2px"
        outline="none"
        tag="input"
        type="range"
        ref={ref_Box_4}
        flex={1}
        onInput={(ev) => Range_onInput(dobj_Box_3, el, s)}
        onChange={(ev) => Range_onChange(ev, dobj_Box_3, s)}
        style={{
          appearance: "none",
        }}
        {...dobj_Box_3.props}
        value={attr_value(dobj_Box_3, s)}
        min={attr_min(dobj_Box_3, s)}
        max={attr_max(dobj_Box_3, s)}
        step={attr_step(dobj_Box_3, s)}
        domqlElementObject={dobj_Box_3}
      />
      <Box
        theme="secondary"
        icon="plus"
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
        ref={ref_Box_5}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow_2(dobj_Box_4))} ${css(wrap_2(dobj_Box_4))} ${css(
          align_2(dobj_Box_4)
        )}`}
        onClick={(ev) => Box_onClick_2(ev, dobj_Box_4, s)}
        {...dobj_Box_4.props}
        type={attr_type_2(dobj_Box_4)}
        placeholder={attr_placeholder_2(dobj_Box_4)}
        tabIndex={attr_tabIndex_2(dobj_Box_4)}
        domqlElementObject={dobj_Box_4}
      >
        {show_Svg_2(dobj_Svg_2) ? (
          <Svg
            icon="plus"
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
