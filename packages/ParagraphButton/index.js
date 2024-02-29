import * as React from "react";
import { Box, P, SymbolsProvider } from "@symbo.ls/react";
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
    alignItems: 'center',
    gap: 'Y2',
    fontSize: 'Y1'
  },
  P: {
    props: {
      text: 'Didn\'t get the code?',
      color: 'gray4',
      margin: '0'
    }
  },
  Button: {
    text: 'Click to resend',
    padding: '0',
    background: 'transparent',
    color: 'white',
    textDecoration: 'underline',
    fontWeight: '500',
    Icon: {display: 'none'}
  },
  __name: 'ParagraphButton'
};

export function ParagraphButton(props) {
  const ref_Box = useRef(null);
  const ref_P = useRef(null);
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
  const dobj_P = dobj["P"]
  dobj_P.node = ref_P.current
  const dobj_Box = dobj["Button"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Svg = dobj["Button"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      alignItems="center"
      gap="Y2"
      fontSize="Y1"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <P
        text="Didn't get the code?"
        color="gray4"
        margin="0"
        ref={ref_P}
        {...dobj_P.props}
        domqlElementObject={dobj_P}
      />
      <Box
        text="Click to resend"
        padding="0"
        background="transparent"
        color="white"
        textDecoration="underline"
        fontWeight="500"
        fontSize="A"
        type="button"
        border="none"
        display="inline-flex"
        align="center center"
        lineHeight="1"
        whiteSpace="nowrap"
        fontFamily="inherit"
        round="C2"
        outline="solid, 0, blue .3"
        tag="button"
        ref={ref_Box_2}
        Icon={{
          props: {
            display: "none",
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
            display="none"
            width="A"
            height="A"
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
  );
}

import { Checkbox } from "@symbo.ls/react";

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
  tag: 'label',
  props: {
    gap: '1ch',
    alignItems: 'center'
  },
  Checkbox: {
    tag: 'div',
    props: {
      Input: {},
      Flex: {fontSize: 'A'}
    }
  },
  ParagraphButton: {
    P: {text: 'You agree to'},
    Button: {text: 'privacy policy'}
  },
  __name: 'ParagraphButtonWithCheckbox'
};

export function ParagraphButtonWithCheckbox(props) {
  const ref_Box = useRef(null);
  const ref_Checkbox = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
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

  function attr_placeholder({ props: props4 }) {
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

  function attr_tabIndex({ props: props4 }) {
    return props4.tabIndex;
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

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
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
  const dobj_Checkbox = dobj["Checkbox"]
  dobj_Checkbox.node = ref_Checkbox.current
  const dobj_Box = dobj["ParagraphButton"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Checkbox"]["Input"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Checkbox"]["Flex"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["ParagraphButton"]["P"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["ParagraphButton"]["Button"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Svg = dobj["Checkbox"]["Flex"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["ParagraphButton"]["Button"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="1ch"
      alignItems="center"
      display="flex"
      tag="label"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Checkbox
        boxSize="fit-content fit-content"
        cursor="pointer"
        round="Y"
        ref={ref_Checkbox}
        Input={{
          props: {},
          __ref: undefined,
        }}
        Flex={{
          props: {
            fontSize: "A",
          },
          __ref: undefined,
        }}
        {...dobj_Checkbox.props}
        domqlElementObject={dobj_Checkbox}
      >
        <Box
          type="checkbox"
          display="none"
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
          placeholder={attr_placeholder(dobj_Box_2)}
          value={attr_value(dobj_Box_2)}
          disabled={attr_disabled(dobj_Box_2)}
          readonly={attr_readonly(dobj_Box_2)}
          required={attr_required(dobj_Box_2)}
          type={attr_type(dobj_Box_2)}
          tabIndex={attr_tabIndex(dobj_Box_2)}
          domqlElementObject={dobj_Box_2}
        />
        <Box
          fontSize="A"
          align="center center"
          padding="V"
          border="1px solid #57575C"
          round="X2"
          transition="background .15s ease-in-out"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_3(dobj_Box_3))} ${css(
            wrap_3(dobj_Box_3)
          )} ${css(align_3(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Svg
            icon="check"
            opacity="0"
            transition="opacity .15s ease-in-out"
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
      </Checkbox>
      <Box
        alignItems="center"
        gap="Y2"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        P={{
          props: {
            text: "You agree to",
          },
          __ref: undefined,
        }}
        Button={{
          props: {
            text: "privacy policy",
          },
          __ref: undefined,
        }}
        className={`${css(flow_2(dobj_Box))} ${css(wrap_2(dobj_Box))} ${css(
          align_2(dobj_Box)
        )}`}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Box
          text="You agree to"
          color="gray2"
          margin="0"
          tag="p"
          ref={ref_Box_5}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
        <Box
          text="privacy policy"
          padding="0"
          background="transparent"
          color="white"
          textDecoration="underline"
          fontSize="A"
          type="button"
          border="none"
          display="inline-flex"
          align="center center"
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
          className={`${css(flow_4(dobj_Box_5))} ${css(
            wrap_4(dobj_Box_5)
          )} ${css(align_4(dobj_Box_5))}`}
          {...dobj_Box_5.props}
          type={attr_type_2(dobj_Box_5)}
          placeholder={attr_placeholder_2(dobj_Box_5)}
          tabIndex={attr_tabIndex_2(dobj_Box_5)}
          domqlElementObject={dobj_Box_5}
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
        </Box>
      </Box>
    </Box>
  );
}
