import * as React from "react";
import { Box, Flex, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
import { Svg } from "@symbo.ls/react-atoms";
import { css } from "@emotion/css";

const orig = {
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
  tag: 'label',
  props: {
    boxSize: 'fit-content fit-content',
    cursor: 'pointer',
    round: 'Y'
  },
  Input: {
    props: {
      type: 'checkbox',
      display: 'none',
      ':checked + div': {theme: 'primary'},
      ':checked + div > svg': {
        transform: 'none',
        opacity: '1'
      }
    },
    attr: {
      checked: ({ parent }) => parent.props.checked
    }
  },
  Flex: {
    props: {
      align: 'center center',
      fontSize: 'B1',
      padding: 'V',
      theme: 'tertiary .outline',
      round: 'X2',
      transition: 'background A defaultBezier'
    },
    Icon: {
      props: {
        icon: 'check',
        opacity: '0',
        transform: 'scale(0.9) rotate(-15deg)',
        transition: 'opacity B defaultBezier'
      }
    }
  },
  __name: 'Checkbox'
};

export function Checkbox(props) {
  const ref_Box = useRef(null);
  const ref_Input = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
  }

  function attr_checked({ parent }) {
    return parent.props.checked;
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
  const dobj_Input = dobj["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["Flex"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content fit-content"
      cursor="pointer"
      round="Y"
      border="none"
      outline="solid, 0, blue .3"
      tag="label"
      ref={ref_Box}
      {...dobj.props}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      <Input
        type="checkbox"
        display="none"
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
        checked={attr_checked(dobj_Input)}
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
      <Flex
        align="center center"
        fontSize="B1"
        padding="V"
        theme="tertiary .outline"
        round="X2"
        transition="background A defaultBezier"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow(dobj_Flex))} ${css(wrap(dobj_Flex))} ${css(
          align(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Svg
          icon="check"
          opacity="0"
          transform="scale(0.9) rotate(-15deg)"
          transition="opacity B defaultBezier"
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
  tag: 'label',
  props: {
    boxSize: 'fit-content',
    align: 'flex-start flex-start',
    gap: 'A'
  },
  Checkbox: {tag: 'div'},
  TitleParagraphRows: {
    gap: 'Z1',
    margin: 'Y - - -'
  },
  __name: 'CheckboxTitleParagraph'
};

export function CheckboxTitleParagraph(props) {
  const ref_Box = useRef(null);
  const ref_Checkbox = useRef(null);
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
  const dobj_Checkbox = dobj["Checkbox"]
  dobj_Checkbox.node = ref_Checkbox.current
  const dobj_Box = dobj["TitleParagraphRows"]
  dobj_Box.node = ref_Box_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      align="flex-start flex-start"
      gap="A"
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
        {...dobj_Checkbox.props}
        domqlElementObject={dobj_Checkbox}
      />
      <Box
        gap="Z1"
        margin="Y - - -"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
    </Box>
  );
}

const orig_3 = {
  tag: 'input',
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
    }
  ],
  deps: {
    isString: (arg) => typeof arg === "string",
    replaceLiteralsWithObjectFields: (str, state) => {
      if (!str.includes("{{"))
        return str;
      return str.replace(brackRegex, (_, parentPath, variable) => {
        if (parentPath) {
          const parentLevels = parentPath.match(/\.\.\//g).length;
          let parentState = state;
          for (let i = 0; i < parentLevels; i++) {
            parentState = parentState.parent;
            if (!parentState) {
              return "";
            }
          }
          const value = parentState[variable.trim()];
          return value !== void 0 ? `${value}` : "";
        } else {
          const value = state[variable.trim()];
          return value !== void 0 ? `${value}` : "";
        }
      });
    }
  },
  props: {
    border: 'none',
    type: 'input',
    theme: 'field',
    fontSize: 'A',
    round: 'C',
    lineHeight: 1,
    fontFamily: 'smbls',
    padding: 'Z A'
  },
  attr: {
    pattern: ({ props }) => props.pattern,
    minLength: ({ props }) => props.minlength,
    maxLength: ({ props }) => props.maxlength,
    name: ({ props }) => props.name,
    autocomplete: ({ props }) => props.autocomplete,
    placeholder: ({ props }) => props.placeholder,
    value: ({ props, state, deps }) => {
      const { isString: isString5, replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2 } = deps;
      if (isString5(props.value) && props.value.includes("{{")) {
        return replaceLiteralsWithObjectFields2(props.value, state);
      }
      return props.value;
    },
    disabled: ({ props }) => props.disabled || null,
    readonly: ({ props }) => props.readonly,
    required: ({ props }) => props.required,
    type: ({ props }) => props.type
  },
  __name: 'Input'
};

export function Input(props) {
  const ref_Box = useRef(null);
  function attr_pattern({ props }) {
    return props.pattern;
  }

  function attr_minLength({ props }) {
    return props.minlength;
  }

  function attr_maxLength({ props }) {
    return props.maxlength;
  }

  function attr_name({ props }) {
    return props.name;
  }

  function attr_autocomplete({ props }) {
    return props.autocomplete;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_value({ props, state, deps }) {
    const {
      isString: isString5,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString5(props.value) && props.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props.value, state);
    }
    return props.value;
  }

  function attr_disabled({ props }) {
    return props.disabled || null;
  }

  function attr_readonly({ props }) {
    return props.readonly;
  }

  function attr_required({ props }) {
    return props.required;
  }

  function attr_type({ props }) {
    return props.type;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      border="none"
      type="input"
      theme="field"
      fontSize="A"
      round="C"
      fontFamily="smbls"
      padding="Z A"
      outline="solid, 0, blue .3"
      tag="input"
      ref={ref_Box}
      lineHeight={1}
      {...dobj.props}
      pattern={attr_pattern(dobj)}
      minLength={attr_minLength(dobj)}
      maxLength={attr_maxLength(dobj)}
      name={attr_name(dobj)}
      autoComplete={attr_autocomplete(dobj)}
      placeholder={attr_placeholder(dobj)}
      value={attr_value(dobj)}
      disabled={attr_disabled(dobj)}
      readonly={attr_readonly(dobj)}
      required={attr_required(dobj)}
      type={attr_type(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    />
  );
}

const orig_4 = {
  extend: [
    {
      tag: 'input',
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
        }
      ],
      deps: {
        isString: (arg) => typeof arg === "string",
        replaceLiteralsWithObjectFields: (str, state) => {
      if (!str.includes("{{"))
        return str;
      return str.replace(brackRegex, (_, parentPath, variable) => {
        if (parentPath) {
          const parentLevels = parentPath.match(/\.\.\//g).length;
          let parentState = state;
          for (let i = 0; i < parentLevels; i++) {
            parentState = parentState.parent;
            if (!parentState) {
              return "";
            }
          }
          const value = parentState[variable.trim()];
          return value !== void 0 ? `${value}` : "";
        } else {
          const value = state[variable.trim()];
          return value !== void 0 ? `${value}` : "";
        }
      });
    }
      },
      props: {
        border: 'none',
        type: 'input',
        theme: 'field',
        fontSize: 'A',
        round: 'C',
        lineHeight: 1,
        fontFamily: 'smbls',
        padding: 'Z A'
      },
      attr: {
        pattern: ({ props }) => props.pattern,
        minLength: ({ props }) => props.minlength,
        maxLength: ({ props }) => props.maxlength,
        name: ({ props }) => props.name,
        autocomplete: ({ props }) => props.autocomplete,
        placeholder: ({ props }) => props.placeholder,
        value: ({ props, state, deps }) => {
      const { isString: isString5, replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2 } = deps;
      if (isString5(props.value) && props.value.includes("{{")) {
        return replaceLiteralsWithObjectFields2(props.value, state);
      }
      return props.value;
    },
        disabled: ({ props }) => props.disabled || null,
        readonly: ({ props }) => props.readonly,
        required: ({ props }) => props.required,
        type: ({ props }) => props.type
      },
      __name: 'Input'
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
  props: {
    type: 'number',
    fontSize: 'E',
    boxSize: 'C+X',
    align: 'center center',
    textAlign: 'center',
    round: 'Y1',
    theme: 'transparent',
    border: 'solid, gray3',
    borderWidth: '1px',
    placeholder: '0',
    fontWeight: '400',
    style: {
      '&::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none'
      }
    }
  },
  attr: {
    step: ({ props }) => props.step,
    min: ({ props }) => props.min,
    max: ({ props }) => props.max
  },
  __name: 'Number'
};

export function Number(props) {
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

  function attr_step({ props }) {
    return props.step;
  }

  function attr_min({ props }) {
    return props.min;
  }

  function attr_max({ props }) {
    return props.max;
  }

  function attr_pattern({ props }) {
    return props.pattern;
  }

  function attr_minLength({ props }) {
    return props.minlength;
  }

  function attr_maxLength({ props }) {
    return props.maxlength;
  }

  function attr_name({ props }) {
    return props.name;
  }

  function attr_autocomplete({ props }) {
    return props.autocomplete;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_value({ props, state, deps }) {
    const {
      isString: isString5,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString5(props.value) && props.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props.value, state);
    }
    return props.value;
  }

  function attr_disabled({ props }) {
    return props.disabled || null;
  }

  function attr_readonly({ props }) {
    return props.readonly;
  }

  function attr_required({ props }) {
    return props.required;
  }

  function attr_type({ props }) {
    return props.type;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      type="number"
      fontSize="E"
      boxSize="C+X"
      align="center center"
      textAlign="center"
      round="Y1"
      theme="transparent"
      border="solid, gray3"
      borderWidth="1px"
      placeholder="0"
      fontWeight="400"
      fontFamily="smbls"
      padding="Z A"
      outline="solid, 0, blue .3"
      display="flex"
      tag="input"
      ref={ref_Box}
      style={{
        "&::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
        },
      }}
      lineHeight={1}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      step={attr_step(dobj)}
      min={attr_min(dobj)}
      max={attr_max(dobj)}
      pattern={attr_pattern(dobj)}
      minLength={attr_minLength(dobj)}
      maxLength={attr_maxLength(dobj)}
      name={attr_name(dobj)}
      autoComplete={attr_autocomplete(dobj)}
      placeholder={attr_placeholder(dobj)}
      value={attr_value(dobj)}
      disabled={attr_disabled(dobj)}
      readonly={attr_readonly(dobj)}
      required={attr_required(dobj)}
      type={attr_type(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    />
  );
}

const orig_5 = {
  extend: {
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
    tag: 'label',
    props: {
      boxSize: 'fit-content fit-content',
      cursor: 'pointer',
      round: 'Y'
    },
    Input: {
      props: {
        type: 'checkbox',
        display: 'none',
        ':checked + div': {theme: 'primary'},
        ':checked + div > svg': {
          transform: 'none',
          opacity: '1'
        }
      },
      attr: {
        checked: ({ parent }) => parent.props.checked
      }
    },
    Flex: {
      props: {
        align: 'center center',
        fontSize: 'B1',
        padding: 'V',
        theme: 'tertiary .outline',
        round: 'X2',
        transition: 'background A defaultBezier'
      },
      Icon: {
        props: {
          icon: 'check',
          opacity: '0',
          transform: 'scale(0.9) rotate(-15deg)',
          transition: 'opacity B defaultBezier'
        }
      }
    },
    __name: 'Checkbox'
  },
  Input: {
    type: 'radio',
    ':checked + div:after': {opacity: '1'}
  },
  Flex: {
    extend: {
      class: {
        content: ({ props }) => props.content && { content: props.content }
      }
    },
    props: {
      round: '100%',
      padding: 'Y',
      ':after': {
        content: '""',
        display: 'block',
        boxSize: 'X+W1',
        round: '100%',
        background: 'white',
        opacity: '0',
        transition: 'opacity .15s ease-in-out'
      }
    },
    Icon: null
  },
  __name: 'Radio'
};

export function Radio(props) {
  const ref_Box = useRef(null);
  const ref_Input = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Box_2 = useRef(null);
  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
  }

  function attr_checked({ parent }) {
    return parent.props.checked;
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

  function content({ props }) {
    return (
      props.content && {
        content: props.content,
      }
    );
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
  const dobj_Input = dobj["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Box = dobj["Input"]["type"]
  dobj_Box.node = ref_Box_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content fit-content"
      cursor="pointer"
      round="Y"
      border="none"
      outline="solid, 0, blue .3"
      tag="label"
      ref={ref_Box}
      {...dobj.props}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      <Input
        type="checkbox"
        display="none"
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
        checked={attr_checked(dobj_Input)}
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
      >
        <Box
          inheritedString="checkbox"
          tag="string"
          ref={ref_Box_2}
          {...dobj_Box.props}
          domqlElementObject={dobj_Box}
        />
      </Input>
      <Flex
        round="100%"
        padding="Y"
        align="center center"
        fontSize="B1"
        theme="tertiary .outline"
        transition="background A defaultBezier"
        ref={ref_Flex}
        className={`${css(content(dobj_Flex))}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      />
    </Box>
  );
}

const orig_6 = {
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
    tag: 'label',
    props: {
      boxSize: 'fit-content',
      align: 'flex-start flex-start',
      gap: 'A'
    },
    Checkbox: {tag: 'div'},
    TitleParagraphRows: {
      gap: 'Z1',
      margin: 'Y - - -'
    },
    __name: 'CheckboxTitleParagraph'
  },
  Checkbox: null,
  Radio: {},
  __name: 'RadioTitleParagraph'
};

export function RadioTitleParagraph(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
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
  const dobj_Box = dobj["Radio"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["TitleParagraphRows"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Radio"]["Input"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Radio"]["Flex"]
  dobj_Box_4.node = ref_Box_5.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      align="flex-start flex-start"
      gap="A"
      display="flex"
      tag="label"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="fit-content fit-content"
        cursor="pointer"
        round="Y"
        tag="label"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Box
          type="radio"
          display="none"
          border="none"
          theme="tertiary"
          fontSize="A"
          round="C"
          fontFamily="smbls"
          padding="Z A"
          outline="solid, 0, blue .3"
          tag="input"
          ref={ref_Box_4}
          lineHeight={1}
          {...dobj_Box_3.props}
          pattern={attr_pattern(dobj_Box_3)}
          minLength={attr_minLength(dobj_Box_3)}
          maxLength={attr_maxLength(dobj_Box_3)}
          name={attr_name(dobj_Box_3)}
          autoComplete={attr_autocomplete(dobj_Box_3)}
          placeholder={attr_placeholder(dobj_Box_3)}
          value={attr_value(dobj_Box_3)}
          disabled={attr_disabled(dobj_Box_3)}
          readonly={attr_readonly(dobj_Box_3)}
          required={attr_required(dobj_Box_3)}
          type={attr_type(dobj_Box_3)}
          tabIndex={attr_tabIndex(dobj_Box_3)}
          domqlElementObject={dobj_Box_3}
        />
        <Box
          round="100%"
          padding="Y"
          align="center center"
          fontSize="B1"
          border="1px solid #57575C"
          transition="background .15s ease-in-out"
          display="flex"
          tag="div"
          ref={ref_Box_5}
          className={`${css(flow_2(dobj_Box_4))} ${css(
            wrap_2(dobj_Box_4)
          )} ${css(align_2(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
      </Box>
      <Box
        gap="Z1"
        margin="Y - - -"
        tag="div"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
    </Box>
  );
}

const orig_7 = {
  tag: 'textarea',
  extend: [
    {
      tag: 'input',
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
        }
      ],
      deps: {
        isString: (arg) => typeof arg === "string",
        replaceLiteralsWithObjectFields: (str, state) => {
      if (!str.includes("{{"))
        return str;
      return str.replace(brackRegex, (_, parentPath, variable) => {
        if (parentPath) {
          const parentLevels = parentPath.match(/\.\.\//g).length;
          let parentState = state;
          for (let i = 0; i < parentLevels; i++) {
            parentState = parentState.parent;
            if (!parentState) {
              return "";
            }
          }
          const value = parentState[variable.trim()];
          return value !== void 0 ? `${value}` : "";
        } else {
          const value = state[variable.trim()];
          return value !== void 0 ? `${value}` : "";
        }
      });
    }
      },
      props: {
        border: 'none',
        type: 'input',
        theme: 'field',
        fontSize: 'A',
        round: 'C',
        lineHeight: 1,
        fontFamily: 'smbls',
        padding: 'Z A'
      },
      attr: {
        pattern: ({ props }) => props.pattern,
        minLength: ({ props }) => props.minlength,
        maxLength: ({ props }) => props.maxlength,
        name: ({ props }) => props.name,
        autocomplete: ({ props }) => props.autocomplete,
        placeholder: ({ props }) => props.placeholder,
        value: ({ props, state, deps }) => {
      const { isString: isString5, replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2 } = deps;
      if (isString5(props.value) && props.value.includes("{{")) {
        return replaceLiteralsWithObjectFields2(props.value, state);
      }
      return props.value;
    },
        disabled: ({ props }) => props.disabled || null,
        readonly: ({ props }) => props.readonly,
        required: ({ props }) => props.required,
        type: ({ props }) => props.type
      },
      __name: 'Input'
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
  props: {
    variant: 'outlined',
    fontfamily: 'Avenir',
    round: 'Z1',
    maxWidth: 'H',
    minHeight: 'E',
    placeholder: 'Leave us a message...',
    padding: 'A',
    theme: 'transparent',
    color: 'white',
    border: 'none',
    style: {resize: 'none'}
  },
  '.simple': {
    props: {
      theme: 'field',
      round: 'Z2',
      width: 'G1',
      height: 'E1',
      lineHeight: 1.4
    }
  },
  '.outlined': {
    props: {
      background: 'transparent',
      width: 'G1',
      height: 'D2+W',
      lineHeight: 1.4,
      placeholder: 'Leave us a message...',
      outline: 'none !important',
      color: 'white',
      resize: 'none'
    }
  },
  __name: 'Textarea'
};

export function Textarea(props) {
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

  function attr_pattern({ props }) {
    return props.pattern;
  }

  function attr_minLength({ props }) {
    return props.minlength;
  }

  function attr_maxLength({ props }) {
    return props.maxlength;
  }

  function attr_name({ props }) {
    return props.name;
  }

  function attr_autocomplete({ props }) {
    return props.autocomplete;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_value({ props, state, deps }) {
    const {
      isString: isString5,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString5(props.value) && props.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props.value, state);
    }
    return props.value;
  }

  function attr_disabled({ props }) {
    return props.disabled || null;
  }

  function attr_readonly({ props }) {
    return props.readonly;
  }

  function attr_required({ props }) {
    return props.required;
  }

  function attr_type({ props }) {
    return props.type;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      variant="outlined"
      fontfamily="Avenir"
      round="Z1"
      maxWidth="H"
      minHeight="E"
      placeholder="Leave us a message..."
      padding="A"
      theme="transparent"
      color="white"
      border="none"
      type="input"
      fontSize="A"
      fontFamily="smbls"
      outline="none !important"
      display="flex"
      background="transparent"
      width="G1"
      height="D2+W"
      resize="none"
      tag="textarea"
      ref={ref_Box}
      style={{
        resize: "none",
      }}
      lineHeight={1.4}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      pattern={attr_pattern(dobj)}
      minLength={attr_minLength(dobj)}
      maxLength={attr_maxLength(dobj)}
      name={attr_name(dobj)}
      autoComplete={attr_autocomplete(dobj)}
      placeholder={attr_placeholder(dobj)}
      value={attr_value(dobj)}
      disabled={attr_disabled(dobj)}
      readonly={attr_readonly(dobj)}
      required={attr_required(dobj)}
      type={attr_type(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    />
  );
}

import { IconCommonButton } from "@symbo.ls/react";

const orig_8 = {
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
  props: {gap: 'Y2'},
  Textarea: {
    height: 'C2+W',
    minWidth: 'H',
    padding: 'A',
    fontSize: 'Z1',
    color: 'white',
    round: 'Z2',
    minHeight: 'dit-content'
  },
  IconCommonButton: {
    props: {
      background: 'blue',
      Icon: {name: 'send'}
    }
  },
  __name: 'TextareaWithButton'
};

export function TextareaWithButton(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_IconCommonButton = useRef(null);
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

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_2({ props: props4 }) {
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
  const dobj_Box = dobj["Textarea"]
  dobj_Box.node = ref_Box_2.current
  const dobj_IconCommonButton = dobj["IconCommonButton"]
  dobj_IconCommonButton.node = ref_IconCommonButton.current
  const dobj_Svg = dobj["IconCommonButton"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="Y2"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        height="D2+W"
        minWidth="H"
        padding="A"
        fontSize="Z1"
        color="white"
        round="Z2"
        minHeight="dit-content"
        variant="outlined"
        maxWidth="H"
        placeholder="Leave us a message..."
        background="transparent"
        border="1px solid #3F3F43"
        type="input"
        theme="tertiary"
        fontFamily="smbls"
        outline="none !important"
        display="flex"
        width="G1"
        resize="none"
        tag="textarea"
        ref={ref_Box_2}
        style={{
          resize: "none",
        }}
        lineHeight={1.4}
        className={`${css(flow_2(dobj_Box))} ${css(wrap_2(dobj_Box))} ${css(
          align_2(dobj_Box)
        )}`}
        {...dobj_Box.props}
        pattern={attr_pattern(dobj_Box)}
        minLength={attr_minLength(dobj_Box)}
        maxLength={attr_maxLength(dobj_Box)}
        name={attr_name(dobj_Box)}
        autoComplete={attr_autocomplete(dobj_Box)}
        placeholder={attr_placeholder(dobj_Box)}
        value={attr_value(dobj_Box)}
        disabled={attr_disabled(dobj_Box)}
        readonly={attr_readonly(dobj_Box)}
        required={attr_required(dobj_Box)}
        type={attr_type(dobj_Box)}
        tabIndex={attr_tabIndex(dobj_Box)}
        domqlElementObject={dobj_Box}
      />
      <IconCommonButton
        background="blue"
        boxSize="fit-content fit-content"
        padding="A"
        theme="primary"
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
        ref={ref_IconCommonButton}
        Icon={{
          props: {
            name: "send",
          },
          __ref: undefined,
        }}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow_3(dobj_IconCommonButton))} ${css(
          wrap_3(dobj_IconCommonButton)
        )} ${css(align_3(dobj_IconCommonButton))}`}
        {...dobj_IconCommonButton.props}
        type={attr_type_2(dobj_IconCommonButton)}
        placeholder={attr_placeholder_2(dobj_IconCommonButton)}
        tabIndex={attr_tabIndex_2(dobj_IconCommonButton)}
        domqlElementObject={dobj_IconCommonButton}
      >
        {show_Svg(dobj_Svg) ? (
          <Svg
            name="send"
            fontSize="C"
            width="A"
            height="A"
            display="inline-block"
            spriteId="send"
            src='<symbol id="send" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></symbol>'
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
      </IconCommonButton>
    </Box>
  );
}

const orig_9 = {
  extend: {
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
    tag: 'label',
    props: {
      boxSize: 'fit-content fit-content',
      cursor: 'pointer',
      round: 'Y'
    },
    Input: {
      props: {
        type: 'checkbox',
        display: 'none',
        ':checked + div': {theme: 'primary'},
        ':checked + div > svg': {
          transform: 'none',
          opacity: '1'
        }
      },
      attr: {
        checked: ({ parent }) => parent.props.checked
      }
    },
    Flex: {
      props: {
        align: 'center center',
        fontSize: 'B1',
        padding: 'V',
        theme: 'tertiary .outline',
        round: 'X2',
        transition: 'background A defaultBezier'
      },
      Icon: {
        props: {
          icon: 'check',
          opacity: '0',
          transform: 'scale(0.9) rotate(-15deg)',
          transition: 'opacity B defaultBezier'
        }
      }
    },
    __name: 'Checkbox'
  },
  Input: {
    ':checked + div': {
      background: 'green2 +8',
      justifyContent: 'flex-end'
    }
  },
  Flex: {
    props: {
      boxSize: 'A+X B+Z',
      padding: '- W',
      round: 'D',
      align: 'center flex-start',
      background: 'gray',
      border: 'none',
      transition: 'opacity .15s ease',
      ':after': {
        content: '""',
        boxSize: 'A A',
        round: '100%',
        background: 'white',
        boxShadow: '1px, 1px, Z, gray .2'
      }
    },
    Icon: null
  },
  __name: 'Toggle'
};

export function Toggle(props) {
  const ref_Box = useRef(null);
  const ref_Input = useRef(null);
  const ref_Flex = useRef(null);
  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
  }

  function attr_checked({ parent }) {
    return parent.props.checked;
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
  const dobj_Input = dobj["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content fit-content"
      cursor="pointer"
      round="Y"
      border="none"
      outline="solid, 0, blue .3"
      tag="label"
      ref={ref_Box}
      {...dobj.props}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      <Input
        type="checkbox"
        display="none"
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
        checked={attr_checked(dobj_Input)}
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
      <Flex
        boxSize="A+X B+Z"
        padding="- W"
        round="D"
        align="center flex-start"
        background="gray"
        border="none"
        transition="opacity .15s ease"
        fontSize="B1"
        theme="tertiary .outline"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow(dobj_Flex))} ${css(wrap(dobj_Flex))} ${css(
          align(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      />
    </Box>
  );
}

const orig_10 = {
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
    tag: 'label',
    props: {
      boxSize: 'fit-content',
      align: 'flex-start flex-start',
      gap: 'A'
    },
    Checkbox: {tag: 'div'},
    TitleParagraphRows: {
      gap: 'Z1',
      margin: 'Y - - -'
    },
    __name: 'CheckboxTitleParagraph'
  },
  Checkbox: null,
  Toggle: {},
  __name: 'ToggleTitleParagraph'
};

export function ToggleTitleParagraph(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
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
  const dobj_Box = dobj["Toggle"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["TitleParagraphRows"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Toggle"]["Input"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Toggle"]["Flex"]
  dobj_Box_4.node = ref_Box_5.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      align="flex-start flex-start"
      gap="A"
      display="flex"
      tag="label"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="fit-content fit-content"
        cursor="pointer"
        round="Y"
        tag="label"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
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
          ref={ref_Box_4}
          lineHeight={1}
          {...dobj_Box_3.props}
          pattern={attr_pattern(dobj_Box_3)}
          minLength={attr_minLength(dobj_Box_3)}
          maxLength={attr_maxLength(dobj_Box_3)}
          name={attr_name(dobj_Box_3)}
          autoComplete={attr_autocomplete(dobj_Box_3)}
          placeholder={attr_placeholder(dobj_Box_3)}
          value={attr_value(dobj_Box_3)}
          disabled={attr_disabled(dobj_Box_3)}
          readonly={attr_readonly(dobj_Box_3)}
          required={attr_required(dobj_Box_3)}
          type={attr_type(dobj_Box_3)}
          tabIndex={attr_tabIndex(dobj_Box_3)}
          domqlElementObject={dobj_Box_3}
        />
        <Box
          boxSize="A+X B+Z"
          padding="- W"
          round="D"
          align="center flex-start"
          background="gray .8 +68"
          border="none"
          transition="opacity .15s ease"
          fontSize="B1"
          display="flex"
          tag="div"
          ref={ref_Box_5}
          className={`${css(flow_2(dobj_Box_4))} ${css(
            wrap_2(dobj_Box_4)
          )} ${css(align_2(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
      </Box>
      <Box
        gap="Z1"
        margin="Y - - -"
        tag="div"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
    </Box>
  );
}
