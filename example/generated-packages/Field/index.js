import * as React from "react";
import { Box, Input, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { create } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
import { Svg } from "@symbo.ls/react-atoms";
import { css } from "@emotion/css";

const orig = {
  tag: 'label',
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
    minWidth: 'F2+Z2',
    maxWidth: 'F2+Z2',
    minHeight: 'C+V',
    align: 'center flex-start',
    gap: 'Y',
    boxSizing: 'border-box',
    padding: '- A - Z2',
    round: 'Z1',
    border: 'solid, gray .45 +80',
    borderWidth: '.8px',
    position: 'relative',
    ':focus-within': {
      outline: '1px solid #0474F2'
    },
    Icon: {
      color: 'gray2',
      fontSize: 'Z2'
    },
    Button: {
      padding: '0',
      background: 'transparent',
      color: 'gray2',
      margin: '- - - auto',
      fontSize: 'Z2'
    }
  },
  Input: {
    props: {
      fontSize: 'Z',
      fontWeight: '400',
      padding: '0',
      background: 'rgba(0, 0, 0, 0)',
      round: '0',
      color: 'gray2',
      fontFamily: 'avenir',
      placeholder: 'Placeholder',
      flex: '1',
      minHeight: '100%',
      outline: 'none !important',
      '::placeholder': {color: 'gray 1 +64'}
    }
  },
  __name: 'Field'
};

export function Field(props) {
  const ref_Box = useRef(null);
  const ref_Input = useRef(null);
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
  const dobj_Input = dobj["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      minWidth="F2+Z2"
      maxWidth="F2+Z2"
      minHeight="C+V"
      align="center flex-start"
      gap="Y"
      boxSizing="border-box"
      padding="- A - Z2"
      round="Z1"
      border="solid, gray .45 +80"
      borderWidth=".8px"
      position="relative"
      outline="solid, 0, blue .3"
      display="flex"
      tag="label"
      ref={ref_Box}
      Icon={{
        props: {
          color: "gray2",
          fontSize: "Z2",
        },
        __ref: undefined,
      }}
      Button={{
        props: {
          padding: "0",
          background: "transparent",
          color: "gray2",
          margin: "- - - auto",
          fontSize: "Z2",
        },
        __ref: undefined,
      }}
      lineHeight={1}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      <Input
        fontSize="Z"
        fontWeight="400"
        padding="0"
        background="rgba(0, 0, 0, 0)"
        round="0"
        color="gray2"
        fontFamily="avenir"
        placeholder="Placeholder"
        flex="1"
        minHeight="100%"
        outline="none !important"
        border="none"
        type="input"
        theme="tertiary"
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
      {show_Svg(dobj_Svg) ? (
        <Svg
          color="gray2"
          fontSize="Z2"
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

const orig_2 = {
  extend: {
    tag: 'label',
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
      minWidth: 'F2+Z2',
      maxWidth: 'F2+Z2',
      minHeight: 'C+V',
      align: 'center flex-start',
      gap: 'Y',
      boxSizing: 'border-box',
      padding: '- A - Z2',
      round: 'Z1',
      border: 'solid, gray .45 +80',
      borderWidth: '.8px',
      position: 'relative',
      ':focus-within': {
        outline: '1px solid #0474F2'
      },
      Icon: {
        color: 'gray2',
        fontSize: 'Z2'
      },
      Button: {
        padding: '0',
        background: 'transparent',
        color: 'gray2',
        margin: '- - - auto',
        fontSize: 'Z2'
      }
    },
    Input: {
      props: {
        fontSize: 'Z',
        fontWeight: '400',
        padding: '0',
        background: 'rgba(0, 0, 0, 0)',
        round: '0',
        color: 'gray2',
        fontFamily: 'avenir',
        placeholder: 'Placeholder',
        flex: '1',
        minHeight: '100%',
        outline: 'none !important',
        '::placeholder': {color: 'gray 1 +64'}
      }
    },
    __name: 'Field'
  },
  Icon: {props: {name: 'info'}},
  Input: {},
  Button: {Icon: {name: 'eye'}},
  __name: 'FieldTemplate'
};

export function FieldTemplate(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Input = useRef(null);
  const ref_Box_2 = useRef(null);
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

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_3({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_2({ parent: parent2, props: props4 }) {
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
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Input = dobj["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Box = dobj["Button"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Svg_2 = dobj["Button"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      minWidth="F2+Z2"
      maxWidth="F2+Z2"
      minHeight="C+V"
      align="center flex-start"
      gap="Y"
      boxSizing="border-box"
      padding="- A - Z2"
      round="Z1"
      border="solid, gray .45 +80"
      borderWidth=".8px"
      position="relative"
      outline="solid, 0, blue .3"
      display="flex"
      tag="label"
      ref={ref_Box}
      Icon={{
        props: {
          color: "gray2",
          fontSize: "Z2",
        },
        __ref: undefined,
      }}
      Button={{
        props: {
          padding: "0",
          background: "transparent",
          color: "gray2",
          margin: "- - - auto",
          fontSize: "Z2",
        },
        __ref: undefined,
      }}
      lineHeight={1}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      {show_Svg(dobj_Svg) ? (
        <Svg
          color="gray2"
          fontSize="Z2"
          name="info"
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
      <Input
        fontSize="Z"
        fontWeight="400"
        padding="0"
        background="rgba(0, 0, 0, 0)"
        round="0"
        color="gray2"
        fontFamily="avenir"
        placeholder="Placeholder"
        flex="1"
        minHeight="100%"
        outline="none !important"
        border="none"
        type="input"
        theme="tertiary"
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
      <Box
        padding="0"
        background="transparent"
        color="gray2"
        margin="- - - auto"
        fontSize="Z2"
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
        ref={ref_Box_2}
        Icon={{
          props: {
            name: "eye",
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
        type={attr_type_2(dobj_Box)}
        placeholder={attr_placeholder_3(dobj_Box)}
        tabIndex={attr_tabIndex_3(dobj_Box)}
        domqlElementObject={dobj_Box}
      >
        {show_Svg_2(dobj_Svg_2) ? (
          <Svg
            name="eye"
            icon="eye"
            width="A"
            height="A"
            display="inline-block"
            spriteId="eye"
            src='<symbol id="eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></symbol>'
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
    flow: 'column',
    boxSize: 'fit-content fit-content',
    gap: 'Y1',
    Hint: {
      color: 'gray 1 +64',
      align: 'center flex-start',
      fontSize: 'Y',
      gap: 'Y',
      padding: 'W Y2 - Y2'
    }
  },
  Title: {
    props: {
      text: 'Label',
      fontSize: 'Z',
      lineHeight: '1em',
      color: 'gray2',
      fontWeight: '400',
      padding: '- Y1'
    }
  },
  Field: {
    extend: {
      tag: 'label',
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
        minWidth: 'F2+Z2',
        maxWidth: 'F2+Z2',
        minHeight: 'C+V',
        align: 'center flex-start',
        gap: 'Y',
        boxSizing: 'border-box',
        padding: '- A - Z2',
        round: 'Z1',
        border: 'solid, gray .45 +80',
        borderWidth: '.8px',
        position: 'relative',
        ':focus-within': {
          outline: '1px solid #0474F2'
        },
        Icon: {
          color: 'gray2',
          fontSize: 'Z2'
        },
        Button: {
          padding: '0',
          background: 'transparent',
          color: 'gray2',
          margin: '- - - auto',
          fontSize: 'Z2'
        }
      },
      Input: {
        props: {
          fontSize: 'Z',
          fontWeight: '400',
          padding: '0',
          background: 'rgba(0, 0, 0, 0)',
          round: '0',
          color: 'gray2',
          fontFamily: 'avenir',
          placeholder: 'Placeholder',
          flex: '1',
          minHeight: '100%',
          outline: 'none !important',
          '::placeholder': {color: 'gray 1 +64'}
        }
      },
      __name: 'Field'
    }
  },
  __name: 'FieldWithTitle'
};

export function FieldWithTitle(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Field = useRef(null);
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
  const dobj_Field = dobj["Field"]
  dobj_Field.node = ref_Field.current
  const dobj_Box_2 = dobj["Field"]["Input"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Svg = dobj["Field"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      flow="column"
      boxSize="fit-content fit-content"
      gap="Y1"
      display="flex"
      tag="div"
      ref={ref_Box}
      Hint={{
        props: {
          color: "gray 1 +64",
          align: "center flex-start",
          fontSize: "Y",
          gap: "Y",
          padding: "W Y2 - Y2",
        },
        __ref: undefined,
      }}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        text="Label"
        fontSize="Z"
        lineHeight="1em"
        color="gray2"
        fontWeight="400"
        padding="- Y1"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Field
        minWidth="F2+Z2"
        maxWidth="F2+Z2"
        minHeight="C+V"
        align="center flex-start"
        gap="Y"
        boxSizing="border-box"
        padding="- A - Z2"
        round="Z1"
        border="solid, gray .45 +80"
        borderWidth=".8px"
        position="relative"
        outline="solid, 0, blue .3"
        display="flex"
        ref={ref_Field}
        Icon={{
          props: {
            color: "gray2",
            fontSize: "Z2",
          },
          __ref: undefined,
        }}
        Button={{
          props: {
            padding: "0",
            background: "transparent",
            color: "gray2",
            margin: "- - - auto",
            fontSize: "Z2",
          },
          __ref: undefined,
        }}
        lineHeight={1}
        className={`${css(flow_2(dobj_Field))} ${css(wrap_2(dobj_Field))} ${css(
          align_2(dobj_Field)
        )}`}
        {...dobj_Field.props}
        placeholder={attr_placeholder(dobj_Field)}
        tabIndex={attr_tabIndex(dobj_Field)}
        domqlElementObject={dobj_Field}
      >
        <Box
          fontSize="Z"
          fontWeight="400"
          padding="0"
          background="rgba(0, 0, 0, 0)"
          round="0"
          color="gray2"
          fontFamily="avenir"
          placeholder="Placeholder"
          flex="1"
          minHeight="100%"
          outline="none !important"
          border="none"
          type="input"
          theme="tertiary"
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
          type={attr_type(dobj_Box_2)}
          tabIndex={attr_tabIndex_2(dobj_Box_2)}
          domqlElementObject={dobj_Box_2}
        />
        {show_Svg(dobj_Svg) ? (
          <Svg
            color="gray2"
            fontSize="Z2"
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
      </Field>
    </Box>
  );
}

const orig_4 = {
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
      boxSize: 'fit-content fit-content',
      gap: 'Y1',
      Hint: {
        color: 'gray 1 +64',
        align: 'center flex-start',
        fontSize: 'Y',
        gap: 'Y',
        padding: 'W Y2 - Y2'
      }
    },
    Title: {
      props: {
        text: 'Label',
        fontSize: 'Z',
        lineHeight: '1em',
        color: 'gray2',
        fontWeight: '400',
        padding: '- Y1'
      }
    },
    Field: {
      extend: {
        tag: 'label',
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
          minWidth: 'F2+Z2',
          maxWidth: 'F2+Z2',
          minHeight: 'C+V',
          align: 'center flex-start',
          gap: 'Y',
          boxSizing: 'border-box',
          padding: '- A - Z2',
          round: 'Z1',
          border: 'solid, gray .45 +80',
          borderWidth: '.8px',
          position: 'relative',
          ':focus-within': {
            outline: '1px solid #0474F2'
          },
          Icon: {
            color: 'gray2',
            fontSize: 'Z2'
          },
          Button: {
            padding: '0',
            background: 'transparent',
            color: 'gray2',
            margin: '- - - auto',
            fontSize: 'Z2'
          }
        },
        Input: {
          props: {
            fontSize: 'Z',
            fontWeight: '400',
            padding: '0',
            background: 'rgba(0, 0, 0, 0)',
            round: '0',
            color: 'gray2',
            fontFamily: 'avenir',
            placeholder: 'Placeholder',
            flex: '1',
            minHeight: '100%',
            outline: 'none !important',
            '::placeholder': {color: 'gray 1 +64'}
          }
        },
        __name: 'Field'
      }
    },
    __name: 'FieldWithTitle'
  },
  Title: {},
  Field: {
    Icon: {props: {name: 'info'}},
    Input: {},
    Button: {icon: 'eye'}
  },
  Hint: {
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
      text: 'Description'
    }
  },
  __name: 'FieldWithTitleTemplate'
};

export function FieldWithTitleTemplate(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Field = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Input = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Svg_2 = useRef(null);
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

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_3({ props: props4 }) {
    return props4.tabIndex;
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

  function show_Svg_3({ parent: parent2, props: props4 }) {
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
  const dobj_Field = dobj["Field"]
  dobj_Field.node = ref_Field.current
  const dobj_Box_2 = dobj["Hint"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Svg = dobj["Field"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Input = dobj["Field"]["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Box_3 = dobj["Field"]["Button"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Svg_2 = dobj["Hint"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Svg_3 = dobj["Field"]["Button"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      flow="column"
      boxSize="fit-content fit-content"
      gap="Y1"
      display="flex"
      tag="div"
      ref={ref_Box}
      Hint={{
        props: {
          color: "gray 1 +64",
          align: "center flex-start",
          fontSize: "Y",
          gap: "Y",
          padding: "W Y2 - Y2",
        },
        __ref: undefined,
      }}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        text="Label"
        fontSize="Z"
        lineHeight="1em"
        color="gray2"
        fontWeight="400"
        padding="- Y1"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Field
        minWidth="F2+Z2"
        maxWidth="F2+Z2"
        minHeight="C+V"
        align="center flex-start"
        gap="Y"
        boxSizing="border-box"
        padding="- A - Z2"
        round="Z1"
        border="solid, gray .45 +80"
        borderWidth=".8px"
        position="relative"
        outline="solid, 0, blue .3"
        display="flex"
        ref={ref_Field}
        Icon={{
          props: {
            color: "gray2",
            fontSize: "Z2",
          },
          __ref: undefined,
        }}
        Button={{
          props: {
            padding: "0",
            background: "transparent",
            color: "gray2",
            margin: "- - - auto",
            fontSize: "Z2",
          },
          __ref: undefined,
        }}
        lineHeight={1}
        className={`${css(flow_2(dobj_Field))} ${css(wrap_2(dobj_Field))} ${css(
          align_2(dobj_Field)
        )}`}
        {...dobj_Field.props}
        placeholder={attr_placeholder(dobj_Field)}
        tabIndex={attr_tabIndex(dobj_Field)}
        domqlElementObject={dobj_Field}
      >
        {show_Svg(dobj_Svg) ? (
          <Svg
            color="gray2"
            fontSize="Z2"
            name="info"
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
        <Input
          fontSize="Z"
          fontWeight="400"
          padding="0"
          background="rgba(0, 0, 0, 0)"
          round="0"
          color="gray2"
          fontFamily="avenir"
          placeholder="Placeholder"
          flex="1"
          minHeight="100%"
          outline="none !important"
          border="none"
          type="input"
          theme="tertiary"
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
        <Box
          padding="0"
          background="transparent"
          color="gray2"
          margin="- - - auto"
          fontSize="Z2"
          icon="eye"
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
          ref={ref_Box_4}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          type={attr_type_2(dobj_Box_3)}
          placeholder={attr_placeholder_3(dobj_Box_3)}
          tabIndex={attr_tabIndex_3(dobj_Box_3)}
          domqlElementObject={dobj_Box_3}
        >
          {show_Svg_3(dobj_Svg_3) ? (
            <Svg
              icon="eye"
              width="A"
              height="A"
              display="inline-block"
              spriteId="eye"
              src='<symbol id="eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></symbol>'
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
      </Field>
      <Box
        color="gray 1 +64"
        align="center flex-start"
        fontSize="Y"
        gap="Y"
        padding="W Y2 - Y2"
        icon="info"
        text="Description"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        lineHeight={1}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        {show_Svg_2(dobj_Svg_2) ? (
          <Svg
            icon="info"
            width="A"
            height="A"
            display="inline-block"
            spriteId="info"
            src='<symbol id="info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></symbol>'
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

const orig_5 = {
  extend: {
    tag: 'label',
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
      minWidth: 'F2+Z2',
      maxWidth: 'F2+Z2',
      minHeight: 'C+V',
      align: 'center flex-start',
      gap: 'Y',
      boxSizing: 'border-box',
      padding: '- A - Z2',
      round: 'Z1',
      border: 'solid, gray .45 +80',
      borderWidth: '.8px',
      position: 'relative',
      ':focus-within': {
        outline: '1px solid #0474F2'
      },
      Icon: {
        color: 'gray2',
        fontSize: 'Z2'
      },
      Button: {
        padding: '0',
        background: 'transparent',
        color: 'gray2',
        margin: '- - - auto',
        fontSize: 'Z2'
      }
    },
    Input: {
      props: {
        fontSize: 'Z',
        fontWeight: '400',
        padding: '0',
        background: 'rgba(0, 0, 0, 0)',
        round: '0',
        color: 'gray2',
        fontFamily: 'avenir',
        placeholder: 'Placeholder',
        flex: '1',
        minHeight: '100%',
        outline: 'none !important',
        '::placeholder': {color: 'gray 1 +64'}
      }
    },
    __name: 'Field'
  },
  props: {
    maxWidth: 'G3',
    gap: 'Z',
    theme: 'dialog',
    padding: 'Z+V Z+V2',
    Icon: {
      name: 'search',
      fontSize: 'C',
      color: 'gray2',
      margin: 'V - - -'
    }
  },
  Icon: {},
  Input: {
    props: {
      placeholder: 'type a command or search',
      fontSize: 'Z',
      '::placeholder': {color: 'gray 1 +68'}
    }
  },
  __name: 'Search'
};

export function Search(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Input = useRef(null);
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
  const dobj_Input = dobj["Input"]
  dobj_Input.node = ref_Input.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      maxWidth="G3"
      gap="Z"
      theme="dialog"
      padding="Z+V Z+V2"
      minWidth="F2+Z2"
      minHeight="C+V"
      align="center flex-start"
      boxSizing="border-box"
      round="Z1"
      border="solid, gray .45 +80"
      borderWidth=".8px"
      position="relative"
      outline="solid, 0, blue .3"
      display="flex"
      tag="label"
      ref={ref_Box}
      Icon={{
        props: {
          name: "search",
          fontSize: "C",
          color: "gray2",
          margin: "V - - -",
        },
        __ref: undefined,
      }}
      Button={{
        props: {
          padding: "0",
          background: "transparent",
          color: "gray2",
          margin: "- - - auto",
          fontSize: "Z2",
        },
        __ref: undefined,
      }}
      lineHeight={1}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      {show_Svg(dobj_Svg) ? (
        <Svg
          name="search"
          fontSize="C"
          color="gray2"
          margin="V - - -"
          width="A"
          height="A"
          display="inline-block"
          spriteId="search"
          src='<symbol id="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></symbol>'
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
      <Input
        placeholder="type a command or search"
        fontSize="Z"
        fontWeight="400"
        padding="0"
        background="rgba(0, 0, 0, 0)"
        round="0"
        color="gray2"
        fontFamily="avenir"
        flex="1"
        minHeight="100%"
        outline="none !important"
        border="none"
        type="input"
        theme="tertiary"
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
    </Box>
  );
}

import { Button } from "@symbo.ls/react";

const orig_6 = {
  extend: {
    extend: {
      tag: 'label',
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
        minWidth: 'F2+Z2',
        maxWidth: 'F2+Z2',
        minHeight: 'C+V',
        align: 'center flex-start',
        gap: 'Y',
        boxSizing: 'border-box',
        padding: '- A - Z2',
        round: 'Z1',
        border: 'solid, gray .45 +80',
        borderWidth: '.8px',
        position: 'relative',
        ':focus-within': {
          outline: '1px solid #0474F2'
        },
        Icon: {
          color: 'gray2',
          fontSize: 'Z2'
        },
        Button: {
          padding: '0',
          background: 'transparent',
          color: 'gray2',
          margin: '- - - auto',
          fontSize: 'Z2'
        }
      },
      Input: {
        props: {
          fontSize: 'Z',
          fontWeight: '400',
          padding: '0',
          background: 'rgba(0, 0, 0, 0)',
          round: '0',
          color: 'gray2',
          fontFamily: 'avenir',
          placeholder: 'Placeholder',
          flex: '1',
          minHeight: '100%',
          outline: 'none !important',
          '::placeholder': {color: 'gray 1 +64'}
        }
      },
      __name: 'Field'
    },
    props: {
      maxWidth: 'G3',
      gap: 'Z',
      theme: 'dialog',
      padding: 'Z+V Z+V2',
      Icon: {
        name: 'search',
        fontSize: 'C',
        color: 'gray2',
        margin: 'V - - -'
      }
    },
    Icon: {},
    Input: {
      props: {
        placeholder: 'type a command or search',
        fontSize: 'Z',
        '::placeholder': {color: 'gray 1 +68'}
      }
    },
    __name: 'Search'
  },
  props: {
    Button: {fontSize: 'B'}
  },
  Icon: {},
  Input: {
    props: {
      ':focus ~ button': {opacity: '1'}
    }
  },
  Button: {
    props: {
      opacity: '0',
      icon: 'x'
    },
    Icon: {
      on: {
        click: (e, el) => {
          el.parent.parent.Input.node.value = "";
        }
      }
    }
  },
  __name: 'SearchWithButton'
};

export function SearchWithButton(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Input = useRef(null);
  const ref_Button = useRef(null);
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

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_3({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_2({ parent: parent2, props: props4 }) {
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

  function Svg_onClick(e, el) {
    el.parent.parent.Input.node.value = "";
    return;
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
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Input = dobj["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Button = dobj["Button"]
  dobj_Button.node = ref_Button.current
  const dobj_Svg_2 = dobj["Button"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      maxWidth="G3"
      gap="Z"
      theme="dialog"
      padding="Z+V Z+V2"
      minWidth="F2+Z2"
      minHeight="C+V"
      align="center flex-start"
      boxSizing="border-box"
      round="Z1"
      border="solid, gray .45 +80"
      borderWidth=".8px"
      position="relative"
      outline="solid, 0, blue .3"
      display="flex"
      tag="label"
      ref={ref_Box}
      Button={{
        props: {
          fontSize: "B",
          padding: "0",
          background: "transparent",
          color: "gray2",
          margin: "- - - auto",
        },
        __ref: undefined,
      }}
      Icon={{
        props: {
          name: "search",
          fontSize: "C",
          color: "gray2",
          margin: "V - - -",
        },
        __ref: undefined,
      }}
      lineHeight={1}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      {show_Svg(dobj_Svg) ? (
        <Svg
          name="search"
          fontSize="C"
          color="gray2"
          margin="V - - -"
          width="A"
          height="A"
          display="inline-block"
          spriteId="search"
          src='<symbol id="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></symbol>'
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
      <Input
        placeholder="type a command or search"
        fontSize="Z"
        fontWeight="400"
        padding="0"
        background="rgba(0, 0, 0, 0)"
        round="0"
        color="gray2"
        fontFamily="avenir"
        flex="1"
        minHeight="100%"
        outline="none !important"
        border="none"
        type="input"
        theme="tertiary"
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
      <Button
        fontSize="B"
        padding="0"
        background="transparent"
        color="gray2"
        margin="- - - auto"
        opacity="0"
        icon="x"
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
        ref={ref_Button}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow_2(dobj_Button))} ${css(
          wrap_2(dobj_Button)
        )} ${css(align_2(dobj_Button))}`}
        {...dobj_Button.props}
        type={attr_type_2(dobj_Button)}
        placeholder={attr_placeholder_3(dobj_Button)}
        tabIndex={attr_tabIndex_3(dobj_Button)}
        domqlElementObject={dobj_Button}
      >
        {show_Svg_2(dobj_Svg_2) ? (
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
            onClick={(ev) => Svg_onClick(e, dobj_Svg_2)}
            {...dobj_Svg_2.props}
            domqlElementObject={dobj_Svg_2}
          />
        ) : null}
      </Button>
    </Box>
  );
}

const orig_7 = {
  extend: {
    extend: {
      extend: {
        tag: 'label',
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
          minWidth: 'F2+Z2',
          maxWidth: 'F2+Z2',
          minHeight: 'C+V',
          align: 'center flex-start',
          gap: 'Y',
          boxSizing: 'border-box',
          padding: '- A - Z2',
          round: 'Z1',
          border: 'solid, gray .45 +80',
          borderWidth: '.8px',
          position: 'relative',
          ':focus-within': {
            outline: '1px solid #0474F2'
          },
          Icon: {
            color: 'gray2',
            fontSize: 'Z2'
          },
          Button: {
            padding: '0',
            background: 'transparent',
            color: 'gray2',
            margin: '- - - auto',
            fontSize: 'Z2'
          }
        },
        Input: {
          props: {
            fontSize: 'Z',
            fontWeight: '400',
            padding: '0',
            background: 'rgba(0, 0, 0, 0)',
            round: '0',
            color: 'gray2',
            fontFamily: 'avenir',
            placeholder: 'Placeholder',
            flex: '1',
            minHeight: '100%',
            outline: 'none !important',
            '::placeholder': {color: 'gray 1 +64'}
          }
        },
        __name: 'Field'
      },
      props: {
        maxWidth: 'G3',
        gap: 'Z',
        theme: 'dialog',
        padding: 'Z+V Z+V2',
        Icon: {
          name: 'search',
          fontSize: 'C',
          color: 'gray2',
          margin: 'V - - -'
        }
      },
      Icon: {},
      Input: {
        props: {
          placeholder: 'type a command or search',
          fontSize: 'Z',
          '::placeholder': {color: 'gray 1 +68'}
        }
      },
      __name: 'Search'
    },
    props: {
      Button: {fontSize: 'B'}
    },
    Icon: {},
    Input: {
      props: {
        ':focus ~ button': {opacity: '1'}
      }
    },
    Button: {
      props: {
        opacity: '0',
        icon: 'x'
      },
      Icon: {
        on: {
          click: (e, el) => {
          el.parent.parent.Input.node.value = "";
        }
        }
      }
    },
    __name: 'SearchWithButton'
  },
  props: {
    theme: 'tertiary',
    maxWidth: 'G3+C',
    padding: '0 A 0 0',
    gap: 'Z'
  },
  DropDownButton: {},
  Input: {
    props: {padding: '- - - X'}
  },
  Button: {},
  Icon: {},
  __name: 'SearchWithDropDownButton'
};

export function SearchWithDropDownButton(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Input = useRef(null);
  const ref_Button = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_3 = useRef(null);
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

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_3({ props: props4 }) {
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

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_4({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_4({ props: props4 }) {
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

  function show_Svg_2({ parent: parent2, props: props4 }) {
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

  function show_Svg_3({ parent: parent2, props: props4 }) {
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

  function Svg_onClick(e, el) {
    el.parent.parent.Input.node.value = "";
    return;
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
  const dobj_Box = dobj["DropDownButton"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Input = dobj["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Button = dobj["Button"]
  dobj_Button.node = ref_Button.current
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["DropDownButton"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_2 = dobj["DropDownButton"]["Caption"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Svg_3 = dobj["Button"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      theme="tertiary"
      maxWidth="G3+C"
      padding="0 A 0 0"
      gap="Z"
      minWidth="F2+Z2"
      minHeight="C+V"
      align="center flex-start"
      boxSizing="border-box"
      round="Z1"
      border="solid, gray .45 +80"
      borderWidth=".8px"
      position="relative"
      outline="solid, 0, blue .3"
      display="flex"
      tag="label"
      ref={ref_Box}
      Button={{
        props: {
          fontSize: "B",
          padding: "0",
          background: "transparent",
          color: "gray2",
          margin: "- - - auto",
        },
        __ref: undefined,
      }}
      Icon={{
        props: {
          name: "search",
          fontSize: "C",
          color: "gray2",
          margin: "V - - -",
        },
        __ref: undefined,
      }}
      lineHeight={1}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      <Box
        gap="X2"
        boxSize="fit-content fit-content"
        padding="Z2 B Z2 A"
        round="Z"
        background="#141416"
        color="white"
        theme="primary"
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
            name: "chevronDown",
            fontSize: "D",
          },
          __ref: undefined,
        }}
        Caption={{
          props: {
            text: "All",
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
        placeholder={attr_placeholder_2(dobj_Box)}
        tabIndex={attr_tabIndex_2(dobj_Box)}
        domqlElementObject={dobj_Box}
      >
        {show_Svg_2(dobj_Svg_2) ? (
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
          text="All"
          line_height="1em"
          tag="caption"
          ref={ref_Box_3}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        />
      </Box>
      <Input
        padding="- - - X"
        placeholder="type a command or search"
        fontSize="Z"
        fontWeight="400"
        background="rgba(0, 0, 0, 0)"
        round="0"
        color="gray2"
        fontFamily="avenir"
        flex="1"
        minHeight="100%"
        outline="none !important"
        border="none"
        type="input"
        theme="tertiary"
        ref={ref_Input}
        lineHeight={1}
        {...dobj_Input.props}
        pattern={attr_pattern(dobj_Input)}
        minLength={attr_minLength(dobj_Input)}
        maxLength={attr_maxLength(dobj_Input)}
        name={attr_name(dobj_Input)}
        autoComplete={attr_autocomplete(dobj_Input)}
        placeholder={attr_placeholder_3(dobj_Input)}
        value={attr_value(dobj_Input)}
        disabled={attr_disabled(dobj_Input)}
        readonly={attr_readonly(dobj_Input)}
        required={attr_required(dobj_Input)}
        type={attr_type_2(dobj_Input)}
        tabIndex={attr_tabIndex_3(dobj_Input)}
        domqlElementObject={dobj_Input}
      />
      <Button
        fontSize="B"
        padding="0"
        background="transparent"
        color="gray2"
        margin="- - - auto"
        opacity="0"
        icon="x"
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
        ref={ref_Button}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow_3(dobj_Button))} ${css(
          wrap_3(dobj_Button)
        )} ${css(align_3(dobj_Button))}`}
        {...dobj_Button.props}
        type={attr_type_3(dobj_Button)}
        placeholder={attr_placeholder_4(dobj_Button)}
        tabIndex={attr_tabIndex_4(dobj_Button)}
        domqlElementObject={dobj_Button}
      >
        {show_Svg_3(dobj_Svg_3) ? (
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
            onClick={(ev) => Svg_onClick(e, dobj_Svg_3)}
            {...dobj_Svg_3.props}
            domqlElementObject={dobj_Svg_3}
          />
        ) : null}
      </Button>
      {show_Svg(dobj_Svg) ? (
        <Svg
          name="search"
          fontSize="C"
          color="gray2"
          margin="V - - -"
          width="A"
          height="A"
          display="inline-block"
          spriteId="search"
          src='<symbol id="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></symbol>'
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
  tag: 'label',
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
  props: {
    boxSize: 'fit-content',
    border: 'solid, gray .45 +80',
    borderWidth: '.8px',
    overflow: 'hidden',
    round: 'Z1',
    ':focus-within': {
      outline: '1px solid #0474F2'
    }
  },
  TextArea: {
    tag: 'textarea',
    attr: {
      placeholder: 'Leave us a message...'
    },
    props: {
      fontSize: 'Z',
      minWidth: 'H',
      minHeight: 'D2+Y1',
      padding: 'A',
      fontFamily: 'avenir',
      theme: 'transparent',
      border: 'none',
      outline: 'none',
      style: {resize: 'none'},
      '::placeholder': {color: 'gray 1 +64'}
    }
  },
  __name: 'TextAreaField'
};

export function TextAreaField(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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
  const dobj_Box = dobj["TextArea"]
  dobj_Box.node = ref_Box_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      border="solid, gray .45 +80"
      borderWidth=".8px"
      overflow="hidden"
      round="Z1"
      outline="solid, 0, blue .3"
      tag="label"
      ref={ref_Box}
      {...dobj.props}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      <Box
        fontSize="Z"
        minWidth="H"
        minHeight="D2+Y1"
        padding="A"
        fontFamily="avenir"
        theme="transparent"
        border="none"
        outline="none"
        tag="textarea"
        placeholder="Leave us a message..."
        ref={ref_Box_2}
        style={{
          resize: "none",
        }}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
    </Box>
  );
}
