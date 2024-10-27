import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { create } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
import { css } from "@emotion/css";

const orig = {
  style: {
    appearance: 'none',
    width: '100%',
    height: '2px',
    outline: 'none',
    flex: 1,
    '&::-webkit-slider-thumb': {
      boxSizing: 'content-box',
      appearance: 'none',
      width: '8px',
      height: '8px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '100%',
      opacity: '.8'
    }
  },
  props: {theme: 'sliderThumb'},
  tag: 'input',
  attr: {type: 'range'},
  __name: 'RangeSlider'
};

export function RangeSlider(props) {
  const ref_Box = useRef(null);

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
      theme="sliderThumb"
      tag="input"
      type="range"
      ref={ref_Box}
      className={`${css({
        appearance: "none",
        width: "100%",
        height: "2px",
        outline: "none",
        flex: 1,
        "&::-webkit-slider-thumb": {
          boxSizing: "content-box",
          appearance: "none",
          width: "8px",
          height: "8px",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "100%",
          opacity: ".8",
        },
      })}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}

import { Svg } from "@symbo.ls/react-atoms";

const orig_2 = {
  button0: {
    extend: [
      {
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
      }
    ],
    props: {icon: 'minus'},
    on: {
      click: (ev, el, s) => {
        el.props && (0, import_utils9.isFunction)(el.props.click) && el.props.click(ev, el, s);
        const input = el.parent.input;
        const props = input.props;
        const value = (0, import_utils9.isFunction)(props.value) ? props.value() : props.value;
        input.node.value = value;
      }
    }
  },
  value: {
    style: {width: '4ch'},
    tag: 'span',
    text: (el, s) => {
      const value = listenProp(el.parent.input, "value");
      const unit = listenProp(el.parent.input, "unit", "");
      return "" + value + unit;
    }
  },
  range: {
    extend: {
      style: {
        appearance: 'none',
        width: '100%',
        height: '2px',
        outline: 'none',
        flex: 1,
        '&::-webkit-slider-thumb': {
          boxSizing: 'content-box',
          appearance: 'none',
          width: '8px',
          height: '8px',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderRadius: '100%',
          opacity: '.8'
        }
      },
      props: {theme: 'sliderThumb'},
      tag: 'input',
      attr: {type: 'range'},
      __name: 'RangeSlider'
    },
    attr: {
      value: (el, s) => listenProp(el, "value", 50),
      min: (el, s) => listenProp(el, "min", 0),
      max: (el, s) => listenProp(el, "max", 100),
      step: (el, s) => listenProp(el, "step", 1)
    },
    on: {
      input: (ev, el, s) => el.props && (0, import_utils9.isFunction)(el.props.input) && el.props.input(ev, el, s),
      change: (ev, el, s) => el.props && (0, import_utils9.isFunction)(el.props.change) && el.props.change(ev, el, s)
    }
  },
  button1: {
    extend: [
      {
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
      }
    ],
    props: {icon: 'plus'},
    on: {
      click: (ev, el, s) => {
        el.props && (0, import_utils9.isFunction)(el.props.click) && el.props.click(ev, el, s);
        const input = el.parent.input;
        const props = input.props;
        const value = (0, import_utils9.isFunction)(props.value) ? props.value() : props.value;
        input.node.value = value;
      }
    }
  },
  __name: 'Slider'
};

export function Slider(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
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

  function Box_onClick(ev, el, s) {
    el.props &&
      (0, import_utils9.isFunction)(el.props.click) &&
      el.props.click(ev, el, s);
    const input = el.parent.input;
    const props = input.props;
    const value = (0, import_utils9.isFunction)(props.value)
      ? props.value()
      : props.value;
    input.node.value = value;
    return;
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

  function RangeSlider_onInput(ev, el, s) {
    return (
      el.props &&
      (0, import_utils9.isFunction)(el.props.input) &&
      el.props.input(ev, el, s)
    );
  }

  function RangeSlider_onChange(ev, el, s) {
    return (
      el.props &&
      (0, import_utils9.isFunction)(el.props.change) &&
      el.props.change(ev, el, s)
    );
  }

  function attr_value(el, s) {
    return listenProp(el, "value", 50);
  }

  function attr_min(el, s) {
    return listenProp(el, "min", 0);
  }

  function attr_max(el, s) {
    return listenProp(el, "max", 100);
  }

  function attr_step(el, s) {
    return listenProp(el, "step", 1);
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

  function Box_onClick_2(ev, el, s) {
    el.props &&
      (0, import_utils9.isFunction)(el.props.click) &&
      el.props.click(ev, el, s);
    const input = el.parent.input;
    const props = input.props;
    const value = (0, import_utils9.isFunction)(props.value)
      ? props.value()
      : props.value;
    input.node.value = value;
    return;
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
  const dobj_Box = dobj["button0"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["value"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["range"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["button1"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Svg = dobj["button0"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["button1"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box tag="div" ref={ref_Box} {...dobj.props} domqlElementObject={dobj}>
      <Box
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
        tag="span"
        ref={ref_Box_3}
        className={`${css({
          width: "4ch",
        })}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
      <Box
        theme="sliderThumb"
        tag="input"
        type="range"
        ref={ref_Box_4}
        className={`${css({
          appearance: "none",
          width: "100%",
          height: "2px",
          outline: "none",
          flex: 1,
          "&::-webkit-slider-thumb": {
            boxSizing: "content-box",
            appearance: "none",
            width: "8px",
            height: "8px",
            borderWidth: "2px",
            borderStyle: "solid",
            borderRadius: "100%",
            opacity: ".8",
          },
        })}`}
        onInput={(ev) => RangeSlider_onInput(dobj_Box_3, el, s)}
        onChange={(ev) => RangeSlider_onChange(ev, dobj_Box_3, s)}
        {...dobj_Box_3.props}
        value={attr_value(dobj_Box_3, s)}
        min={attr_min(dobj_Box_3, s)}
        max={attr_max(dobj_Box_3, s)}
        step={attr_step(dobj_Box_3, s)}
        domqlElementObject={dobj_Box_3}
      />
      <Box
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
