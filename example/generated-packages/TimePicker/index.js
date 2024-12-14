import * as React from "react";
import { Box, Flex, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext, useState } from "react";
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
          flow: ({ props: props3 }) => props3.flow && { flexFlow: props3.flow },
          wrap: ({ props: props3 }) => props3.wrap && { flexWrap: props3.wrap },
          align: ({ props: props3 }) => {
      if (typeof props3.align !== "string")
        return;
      const [alignItems, justifyContent] = props3.align.split(" ");
      return { alignItems, justifyContent };
    }
        }
      },
      props: {
        theme: 'dialog',
        round: 'Z2'
      }
    },
    {
      props: {display: 'flex'},
      class: {
        flow: ({ props: props3 }) => props3.flow && { flexFlow: props3.flow },
        wrap: ({ props: props3 }) => props3.wrap && { flexWrap: props3.wrap },
        align: ({ props: props3 }) => {
      if (typeof props3.align !== "string")
        return;
      const [alignItems, justifyContent] = props3.align.split(" ");
      return { alignItems, justifyContent };
    }
      }
    }
  ],
  state: {activeShift: 'am'},
  props: {
    flow: 'column',
    width: 'fit-content',
    padding: 'Z2 A'
  },
  Title: {
    fontSize: 'Z1',
    textTransform: 'capitalize',
    padding: '- - A -',
    text: 'enter time'
  },
  Flex: {
    props: {
      align: 'center center',
      gap: 'A'
    },
    Flex: {
      tag: 'label',
      props: {
        align: 'center center',
        gap: 'Y2'
      },
      TimePickerItem_hh: {
        NumberInput: {
          placeholder: 'HH',
          min: '0',
          max: '11'
        }
      },
      Span: {text: ':'},
      TimePickerItem_mm: {
        NumberInput: {
          placeholder: 'MM',
          min: '0',
          max: '59'
        }
      },
      Span_2: {text: ':'},
      TimePickerItem_ss: {
        NumberInput: {
          placeholder: 'SS',
          min: '0',
          max: '59'
        }
      }
    },
    TimeSwitcher: {}
  },
  DialogFooter: {
    align: 'center flex-end',
    gap: 'X',
    margin: 'Z2 -Z2 -Z',
    childProps: {
      background: 'transparent',
      padding: '0',
      color: '#0079FD'
    }
  },
  __name: 'TimePicker'
};

export function TimePicker(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Flex_2 = useRef(null);
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
  const ref_Svg_2 = useRef(null);
  const ref_Box_14 = useRef(null);
  const ref_Box_15 = useRef(null);
  const ref_Box_16 = useRef(null);
  const ref_Box_17 = useRef(null);
  const ref_Box_18 = useRef(null);
  const ref_Box_19 = useRef(null);
  const ref_Box_20 = useRef(null);
  const ref_Box_21 = useRef(null);
  const ref_Box_22 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Svg_4 = useRef(null);
  const ref_Svg_5 = useRef(null);
  const ref_Svg_6 = useRef(null);
  const ref_Svg_7 = useRef(null);
  const ref_Svg_8 = useRef(null);
  const ref_Svg_9 = useRef(null);
  const ref_Svg_10 = useRef(null);
  const [activeShift, setActiveShift] = useState(() => "am");

  function flow({ props: props3 }) {
    return (
      props3.flow && {
        flexFlow: props3.flow,
      }
    );
  }

  function wrap({ props: props3 }) {
    return (
      props3.wrap && {
        flexWrap: props3.wrap,
      }
    );
  }

  function align({ props: props3 }) {
    if (typeof props3.align !== "string") return;
    const [alignItems, justifyContent] = props3.align.split(" ");
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

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_2({ props: props4 }) {
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

  function Box_onClick(event2, { key, state: state2 }) {
    console.log(event2, key, state2);
    state2.update({
      activeShift: key,
    });
    return;
  }

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_3({ props: props4 }) {
    return props4.tabIndex;
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

  function Box_onClick_2(event2, { key, state: state2 }) {
    console.log(event2, key, state2);
    state2.update({
      activeShift: key,
    });
    return;
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

  function attr_type_5({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_5({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_5({ props: props4 }) {
    return props4.tabIndex;
  }

  function attr_step({ props: props4 }) {
    return props4.step;
  }

  function attr_min({ props: props4 }) {
    return props4.min;
  }

  function attr_max({ props: props4 }) {
    return props4.max;
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

  function attr_placeholder_6({ props: props4 }) {
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

  function attr_type_6({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_6({ props: props4 }) {
    return props4.tabIndex;
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

  function attr_type_7({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_7({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_7({ props: props4 }) {
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

  function attr_type_8({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_8({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_8({ props: props4 }) {
    return props4.tabIndex;
  }

  function attr_step_2({ props: props4 }) {
    return props4.step;
  }

  function attr_min_2({ props: props4 }) {
    return props4.min;
  }

  function attr_max_2({ props: props4 }) {
    return props4.max;
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

  function attr_placeholder_9({ props: props4 }) {
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

  function attr_type_9({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_9({ props: props4 }) {
    return props4.tabIndex;
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

  function attr_type_10({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_10({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_10({ props: props4 }) {
    return props4.tabIndex;
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

  function attr_type_11({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_11({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_11({ props: props4 }) {
    return props4.tabIndex;
  }

  function attr_step_3({ props: props4 }) {
    return props4.step;
  }

  function attr_min_3({ props: props4 }) {
    return props4.min;
  }

  function attr_max_3({ props: props4 }) {
    return props4.max;
  }

  function attr_pattern_3({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_3({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_3({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_3({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_3({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_12({ props: props4 }) {
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

  function attr_disabled_3({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_3({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_3({ props: props4 }) {
    return props4.required;
  }

  function attr_type_12({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_12({ props: props4 }) {
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

  function attr_type_13({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_13({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_13({ props: props4 }) {
    return props4.tabIndex;
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

  function show_Svg_4({ parent: parent2, props: props4 }) {
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

  function show_Svg_5({ parent: parent2, props: props4 }) {
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

  function show_Svg_6({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
  }

  function html_6({ key, props: props4, context, deps, ...el2 }) {
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

  function show_Svg_7({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
  }

  function html_7({ key, props: props4, context, deps, ...el2 }) {
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

  function show_Svg_8({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
  }

  function html_8({ key, props: props4, context, deps, ...el2 }) {
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

  function show_Svg_9({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
  }

  function html_9({ key, props: props4, context, deps, ...el2 }) {
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

  function show_Svg_10({ parent: parent2, props: props4 }) {
    return (
      parent2.props.icon || parent2.props.Icon || props4.name || props4.icon
    );
  }

  function html_10({ key, props: props4, context, deps, ...el2 }) {
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
  dobj.state.activeShift = activeShift
  const dobj_Box = dobj["Title"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Box_2 = dobj["DialogFooter"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Flex_2 = dobj["Flex"]["Flex"]
  dobj_Flex_2.node = ref_Flex_2.current
  const dobj_Box_3 = dobj["Flex"]["TimeSwitcher"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["DialogFooter"]["cancel"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["DialogFooter"]["ok"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Flex"]["Flex"]["TimePickerItem_hh"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Flex"]["Flex"]["Span"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Flex"]["Flex"]["TimePickerItem_mm"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Flex"]["Flex"]["Span_2"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Flex"]["Flex"]["TimePickerItem_ss"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Flex"]["TimeSwitcher"]["am"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Flex"]["TimeSwitcher"]["pm"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Svg = dobj["DialogFooter"]["cancel"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["DialogFooter"]["ok"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_13 = dobj["Flex"]["Flex"]["TimePickerItem_hh"]["Button_plus"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["Flex"]["Flex"]["TimePickerItem_hh"]["NumberInput"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["Flex"]["Flex"]["TimePickerItem_hh"]["Button_minus"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["Flex"]["Flex"]["TimePickerItem_mm"]["Button_plus"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Box_17 = dobj["Flex"]["Flex"]["TimePickerItem_mm"]["NumberInput"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Box_18 = dobj["Flex"]["Flex"]["TimePickerItem_mm"]["Button_minus"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Box_19 = dobj["Flex"]["Flex"]["TimePickerItem_ss"]["Button_plus"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Box_20 = dobj["Flex"]["Flex"]["TimePickerItem_ss"]["NumberInput"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Box_21 = dobj["Flex"]["Flex"]["TimePickerItem_ss"]["Button_minus"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Svg_3 = dobj["Flex"]["TimeSwitcher"]["am"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Svg_4 = dobj["Flex"]["TimeSwitcher"]["pm"]["Icon"]
  dobj_Svg_4.node = ref_Svg_4.current
  const dobj_Svg_5 = dobj["Flex"]["Flex"]["TimePickerItem_hh"]["Button_plus"]["Icon"]
  dobj_Svg_5.node = ref_Svg_5.current
  const dobj_Svg_6 = dobj["Flex"]["Flex"]["TimePickerItem_hh"]["Button_minus"]["Icon"]
  dobj_Svg_6.node = ref_Svg_6.current
  const dobj_Svg_7 = dobj["Flex"]["Flex"]["TimePickerItem_mm"]["Button_plus"]["Icon"]
  dobj_Svg_7.node = ref_Svg_7.current
  const dobj_Svg_8 = dobj["Flex"]["Flex"]["TimePickerItem_mm"]["Button_minus"]["Icon"]
  dobj_Svg_8.node = ref_Svg_8.current
  const dobj_Svg_9 = dobj["Flex"]["Flex"]["TimePickerItem_ss"]["Button_plus"]["Icon"]
  dobj_Svg_9.node = ref_Svg_9.current
  const dobj_Svg_10 = dobj["Flex"]["Flex"]["TimePickerItem_ss"]["Button_minus"]["Icon"]
  dobj_Svg_10.node = ref_Svg_10.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      flow="column"
      width="fit-content"
      padding="Z2 A"
      theme="dialog"
      round="Z2"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        fontSize="Z1"
        textTransform="capitalize"
        padding="- - A -"
        text="enter time"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Flex
        align="center center"
        gap="A"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow_2(dobj_Flex))} ${css(wrap_2(dobj_Flex))} ${css(
          align_2(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Flex
          align="center center"
          gap="Y2"
          display="flex"
          ref={ref_Flex_2}
          className={`${css(flow_4(dobj_Flex_2))} ${css(
            wrap_4(dobj_Flex_2)
          )} ${css(align_4(dobj_Flex_2))}`}
          {...dobj_Flex_2.props}
          domqlElementObject={dobj_Flex_2}
        >
          <Box
            align="center center"
            flow="column"
            gap="X"
            display="flex"
            tag="label"
            ref={ref_Box_7}
            NumberInput={{
              props: {
                placeholder: "HH",
                min: "0",
                max: "11",
              },
              __ref: undefined,
            }}
            style={{
              "> button": {
                padding: "0",
                background: "transparent",
                color: "white",
                fontSize: "0.75em",
                display: "none",
              },
            }}
            className={`${css(flow_8(dobj_Box_6))} ${css(
              wrap_8(dobj_Box_6)
            )} ${css(align_8(dobj_Box_6))}`}
            {...dobj_Box_6.props}
            domqlElementObject={dobj_Box_6}
          >
            <Box
              icon="plus"
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
              ref={ref_Box_14}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_13(dobj_Box_13))} ${css(
                wrap_13(dobj_Box_13)
              )} ${css(align_13(dobj_Box_13))}`}
              {...dobj_Box_13.props}
              type={attr_type_5(dobj_Box_13)}
              placeholder={attr_placeholder_5(dobj_Box_13)}
              tabIndex={attr_tabIndex_5(dobj_Box_13)}
              domqlElementObject={dobj_Box_13}
            >
              {show_Svg_5(dobj_Svg_5) ? (
                <Svg
                  icon="plus"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="plus"
                  src='<symbol id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></symbol>'
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
            <Box
              placeholder="HH"
              min="0"
              max="11"
              boxSize="C C"
              round="Z"
              padding="0"
              align="center center"
              textAlign="center"
              appearance="textfield"
              theme="secondary"
              type="number"
              border="none"
              fontSize="A"
              fontFamily="smbls"
              outline="solid, 0, blue .3"
              tag="input"
              ref={ref_Box_15}
              lineHeight={1}
              {...dobj_Box_14.props}
              step={attr_step(dobj_Box_14)}
              min={attr_min(dobj_Box_14)}
              max={attr_max(dobj_Box_14)}
              pattern={attr_pattern(dobj_Box_14)}
              minLength={attr_minLength(dobj_Box_14)}
              maxLength={attr_maxLength(dobj_Box_14)}
              name={attr_name(dobj_Box_14)}
              autoComplete={attr_autocomplete(dobj_Box_14)}
              placeholder={attr_placeholder_6(dobj_Box_14)}
              value={attr_value(dobj_Box_14)}
              disabled={attr_disabled(dobj_Box_14)}
              readonly={attr_readonly(dobj_Box_14)}
              required={attr_required(dobj_Box_14)}
              type={attr_type_6(dobj_Box_14)}
              tabIndex={attr_tabIndex_6(dobj_Box_14)}
              domqlElementObject={dobj_Box_14}
            />
            <Box
              icon="minus"
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
              ref={ref_Box_16}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_14(dobj_Box_15))} ${css(
                wrap_14(dobj_Box_15)
              )} ${css(align_14(dobj_Box_15))}`}
              {...dobj_Box_15.props}
              type={attr_type_7(dobj_Box_15)}
              placeholder={attr_placeholder_7(dobj_Box_15)}
              tabIndex={attr_tabIndex_7(dobj_Box_15)}
              domqlElementObject={dobj_Box_15}
            >
              {show_Svg_6(dobj_Svg_6) ? (
                <Svg
                  icon="minus"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="minus"
                  src='<symbol id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></symbol>'
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={ref_Svg_6}
                  style={{
                    fill: "currentColor",
                    "*": {
                      fill: "currentColor",
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: html_6(dobj_Svg_6) }}
                  {...dobj_Svg_6.props}
                  domqlElementObject={dobj_Svg_6}
                />
              ) : null}
            </Box>
          </Box>
          <Box
            text=":"
            tag="span"
            ref={ref_Box_8}
            {...dobj_Box_7.props}
            domqlElementObject={dobj_Box_7}
          />
          <Box
            align="center center"
            flow="column"
            gap="X"
            display="flex"
            tag="label"
            ref={ref_Box_9}
            NumberInput={{
              props: {
                placeholder: "MM",
                min: "0",
                max: "59",
              },
              __ref: undefined,
            }}
            style={{
              "> button": {
                padding: "0",
                background: "transparent",
                color: "white",
                fontSize: "0.75em",
                display: "none",
              },
            }}
            className={`${css(flow_9(dobj_Box_8))} ${css(
              wrap_9(dobj_Box_8)
            )} ${css(align_9(dobj_Box_8))}`}
            {...dobj_Box_8.props}
            domqlElementObject={dobj_Box_8}
          >
            <Box
              icon="plus"
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
              ref={ref_Box_17}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_15(dobj_Box_16))} ${css(
                wrap_15(dobj_Box_16)
              )} ${css(align_15(dobj_Box_16))}`}
              {...dobj_Box_16.props}
              type={attr_type_8(dobj_Box_16)}
              placeholder={attr_placeholder_8(dobj_Box_16)}
              tabIndex={attr_tabIndex_8(dobj_Box_16)}
              domqlElementObject={dobj_Box_16}
            >
              {show_Svg_7(dobj_Svg_7) ? (
                <Svg
                  icon="plus"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="plus"
                  src='<symbol id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></symbol>'
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={ref_Svg_7}
                  style={{
                    fill: "currentColor",
                    "*": {
                      fill: "currentColor",
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: html_7(dobj_Svg_7) }}
                  {...dobj_Svg_7.props}
                  domqlElementObject={dobj_Svg_7}
                />
              ) : null}
            </Box>
            <Box
              placeholder="MM"
              min="0"
              max="59"
              boxSize="C C"
              round="Z"
              padding="0"
              align="center center"
              textAlign="center"
              appearance="textfield"
              theme="secondary"
              type="number"
              border="none"
              fontSize="A"
              fontFamily="smbls"
              outline="solid, 0, blue .3"
              tag="input"
              ref={ref_Box_18}
              lineHeight={1}
              {...dobj_Box_17.props}
              step={attr_step_2(dobj_Box_17)}
              min={attr_min_2(dobj_Box_17)}
              max={attr_max_2(dobj_Box_17)}
              pattern={attr_pattern_2(dobj_Box_17)}
              minLength={attr_minLength_2(dobj_Box_17)}
              maxLength={attr_maxLength_2(dobj_Box_17)}
              name={attr_name_2(dobj_Box_17)}
              autoComplete={attr_autocomplete_2(dobj_Box_17)}
              placeholder={attr_placeholder_9(dobj_Box_17)}
              value={attr_value_2(dobj_Box_17)}
              disabled={attr_disabled_2(dobj_Box_17)}
              readonly={attr_readonly_2(dobj_Box_17)}
              required={attr_required_2(dobj_Box_17)}
              type={attr_type_9(dobj_Box_17)}
              tabIndex={attr_tabIndex_9(dobj_Box_17)}
              domqlElementObject={dobj_Box_17}
            />
            <Box
              icon="minus"
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
              ref={ref_Box_19}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_16(dobj_Box_18))} ${css(
                wrap_16(dobj_Box_18)
              )} ${css(align_16(dobj_Box_18))}`}
              {...dobj_Box_18.props}
              type={attr_type_10(dobj_Box_18)}
              placeholder={attr_placeholder_10(dobj_Box_18)}
              tabIndex={attr_tabIndex_10(dobj_Box_18)}
              domqlElementObject={dobj_Box_18}
            >
              {show_Svg_8(dobj_Svg_8) ? (
                <Svg
                  icon="minus"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="minus"
                  src='<symbol id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></symbol>'
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={ref_Svg_8}
                  style={{
                    fill: "currentColor",
                    "*": {
                      fill: "currentColor",
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: html_8(dobj_Svg_8) }}
                  {...dobj_Svg_8.props}
                  domqlElementObject={dobj_Svg_8}
                />
              ) : null}
            </Box>
          </Box>
          <Box
            text=":"
            tag="span"
            ref={ref_Box_10}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          />
          <Box
            align="center center"
            flow="column"
            gap="X"
            display="flex"
            tag="label"
            ref={ref_Box_11}
            NumberInput={{
              props: {
                placeholder: "SS",
                min: "0",
                max: "59",
              },
              __ref: undefined,
            }}
            style={{
              "> button": {
                padding: "0",
                background: "transparent",
                color: "white",
                fontSize: "0.75em",
                display: "none",
              },
            }}
            className={`${css(flow_10(dobj_Box_10))} ${css(
              wrap_10(dobj_Box_10)
            )} ${css(align_10(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          >
            <Box
              icon="plus"
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
              ref={ref_Box_20}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_17(dobj_Box_19))} ${css(
                wrap_17(dobj_Box_19)
              )} ${css(align_17(dobj_Box_19))}`}
              {...dobj_Box_19.props}
              type={attr_type_11(dobj_Box_19)}
              placeholder={attr_placeholder_11(dobj_Box_19)}
              tabIndex={attr_tabIndex_11(dobj_Box_19)}
              domqlElementObject={dobj_Box_19}
            >
              {show_Svg_9(dobj_Svg_9) ? (
                <Svg
                  icon="plus"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="plus"
                  src='<symbol id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></symbol>'
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={ref_Svg_9}
                  style={{
                    fill: "currentColor",
                    "*": {
                      fill: "currentColor",
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: html_9(dobj_Svg_9) }}
                  {...dobj_Svg_9.props}
                  domqlElementObject={dobj_Svg_9}
                />
              ) : null}
            </Box>
            <Box
              placeholder="SS"
              min="0"
              max="59"
              boxSize="C C"
              round="Z"
              padding="0"
              align="center center"
              textAlign="center"
              appearance="textfield"
              theme="secondary"
              type="number"
              border="none"
              fontSize="A"
              fontFamily="smbls"
              outline="solid, 0, blue .3"
              tag="input"
              ref={ref_Box_21}
              lineHeight={1}
              {...dobj_Box_20.props}
              step={attr_step_3(dobj_Box_20)}
              min={attr_min_3(dobj_Box_20)}
              max={attr_max_3(dobj_Box_20)}
              pattern={attr_pattern_3(dobj_Box_20)}
              minLength={attr_minLength_3(dobj_Box_20)}
              maxLength={attr_maxLength_3(dobj_Box_20)}
              name={attr_name_3(dobj_Box_20)}
              autoComplete={attr_autocomplete_3(dobj_Box_20)}
              placeholder={attr_placeholder_12(dobj_Box_20)}
              value={attr_value_3(dobj_Box_20)}
              disabled={attr_disabled_3(dobj_Box_20)}
              readonly={attr_readonly_3(dobj_Box_20)}
              required={attr_required_3(dobj_Box_20)}
              type={attr_type_12(dobj_Box_20)}
              tabIndex={attr_tabIndex_12(dobj_Box_20)}
              domqlElementObject={dobj_Box_20}
            />
            <Box
              icon="minus"
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
              ref={ref_Box_22}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_18(dobj_Box_21))} ${css(
                wrap_18(dobj_Box_21)
              )} ${css(align_18(dobj_Box_21))}`}
              {...dobj_Box_21.props}
              type={attr_type_13(dobj_Box_21)}
              placeholder={attr_placeholder_13(dobj_Box_21)}
              tabIndex={attr_tabIndex_13(dobj_Box_21)}
              domqlElementObject={dobj_Box_21}
            >
              {show_Svg_10(dobj_Svg_10) ? (
                <Svg
                  icon="minus"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="minus"
                  src='<symbol id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></symbol>'
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ref={ref_Svg_10}
                  style={{
                    fill: "currentColor",
                    "*": {
                      fill: "currentColor",
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: html_10(dobj_Svg_10) }}
                  {...dobj_Svg_10.props}
                  domqlElementObject={dobj_Svg_10}
                />
              ) : null}
            </Box>
          </Box>
        </Flex>
        <Box
          boxSize="C B2"
          flow="column"
          overflow="hidden"
          round="Z"
          theme="secondary"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_5(dobj_Box_3))} ${css(
            wrap_5(dobj_Box_3)
          )} ${css(align_5(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            padding="0"
            flex="1"
            width="100%"
            fontSize="Y"
            textTransform="uppercase"
            round="0"
            background="transparent"
            color="currentColor"
            lineHeight="1"
            type="button"
            border="none"
            display="inline-flex"
            align="center center"
            textDecoration="none"
            whiteSpace="nowrap"
            fontFamily="inherit"
            outline="solid, 0, blue .3"
            tag="button"
            ref={ref_Box_12}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_11(dobj_Box_11))} ${css(
              wrap_11(dobj_Box_11)
            )} ${css(align_11(dobj_Box_11))}`}
            onClick={(ev) => Box_onClick(event2, dobj_Box_11)}
            {...dobj_Box_11.props}
            type={attr_type_3(dobj_Box_11)}
            placeholder={attr_placeholder_3(dobj_Box_11)}
            tabIndex={attr_tabIndex_3(dobj_Box_11)}
            domqlElementObject={dobj_Box_11}
          >
            {show_Svg_3(dobj_Svg_3) ? (
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
          </Box>
          <Box
            padding="0"
            flex="1"
            width="100%"
            fontSize="Y"
            textTransform="uppercase"
            round="0"
            background="transparent"
            color="currentColor"
            lineHeight="1"
            type="button"
            border="none"
            display="inline-flex"
            align="center center"
            textDecoration="none"
            whiteSpace="nowrap"
            fontFamily="inherit"
            outline="solid, 0, blue .3"
            tag="button"
            ref={ref_Box_13}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_12(dobj_Box_12))} ${css(
              wrap_12(dobj_Box_12)
            )} ${css(align_12(dobj_Box_12))}`}
            onClick={(ev) => Box_onClick_2(event2, dobj_Box_12)}
            {...dobj_Box_12.props}
            type={attr_type_4(dobj_Box_12)}
            placeholder={attr_placeholder_4(dobj_Box_12)}
            tabIndex={attr_tabIndex_4(dobj_Box_12)}
            domqlElementObject={dobj_Box_12}
          >
            {show_Svg_4(dobj_Svg_4) ? (
              <Svg
                width="A"
                height="A"
                display="inline-block"
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
      </Flex>
      <Box
        align="center flex-end"
        gap="X"
        margin="Z2 -Z2 -Z"
        padding="Y2 X2"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        childProps={{
          background: "transparent",
          padding: "0",
          color: "#0079FD",
        }}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Box
          background="transparent"
          padding="0"
          color="#0079FD"
          fontSize="Z"
          textTransform="uppercase"
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
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_6(dobj_Box_4))} ${css(
            wrap_6(dobj_Box_4)
          )} ${css(align_6(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          type={attr_type(dobj_Box_4)}
          placeholder={attr_placeholder(dobj_Box_4)}
          tabIndex={attr_tabIndex(dobj_Box_4)}
          domqlElementObject={dobj_Box_4}
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
        <Box
          background="transparent"
          padding="0"
          color="#0079FD"
          fontSize="Z"
          textTransform="uppercase"
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
          className={`${css(flow_7(dobj_Box_5))} ${css(
            wrap_7(dobj_Box_5)
          )} ${css(align_7(dobj_Box_5))}`}
          {...dobj_Box_5.props}
          type={attr_type_2(dobj_Box_5)}
          placeholder={attr_placeholder_2(dobj_Box_5)}
          tabIndex={attr_tabIndex_2(dobj_Box_5)}
          domqlElementObject={dobj_Box_5}
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
        </Box>
      </Box>
    </Box>
  );
}

const orig_2 = {
  tag: 'label',
  extend: {
    props: {display: 'flex'},
    class: {
      flow: ({ props: props3 }) => props3.flow && { flexFlow: props3.flow },
      wrap: ({ props: props3 }) => props3.wrap && { flexWrap: props3.wrap },
      align: ({ props: props3 }) => {
      if (typeof props3.align !== "string")
        return;
      const [alignItems, justifyContent] = props3.align.split(" ");
      return { alignItems, justifyContent };
    }
    }
  },
  props: {
    align: 'center center',
    flow: 'column',
    gap: 'X',
    '> button': {
      padding: '0',
      background: 'transparent',
      color: 'white',
      fontSize: 'Z',
      display: 'none'
    }
  },
  Button_plus: {icon: 'plus'},
  NumberInput: {
    boxSize: 'C C',
    round: 'Z',
    padding: '0',
    align: 'center center',
    textAlign: 'center',
    min: 0,
    max: 24,
    placeholder: '00',
    appearance: 'textfield',
    theme: 'secondary',
    '::-webkit-inner-spin-button': {
      style: {appearance: 'none'},
      margin: 0
    },
    '::-webkit-outer-spin-button': {
      style: {appearance: 'none'},
      margin: 0
    }
  },
  Button_minus: {icon: 'minus'},
  __name: 'TimePickerItem'
};

export function TimePickerItem(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
  function flow({ props: props3 }) {
    return (
      props3.flow && {
        flexFlow: props3.flow,
      }
    );
  }

  function wrap({ props: props3 }) {
    return (
      props3.wrap && {
        flexWrap: props3.wrap,
      }
    );
  }

  function align({ props: props3 }) {
    if (typeof props3.align !== "string") return;
    const [alignItems, justifyContent] = props3.align.split(" ");
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

  function attr_step({ props: props4 }) {
    return props4.step;
  }

  function attr_min({ props: props4 }) {
    return props4.min;
  }

  function attr_max({ props: props4 }) {
    return props4.max;
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

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_3({ props: props4 }) {
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
  const dobj_Box = dobj["Button_plus"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["NumberInput"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Button_minus"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Svg = dobj["Button_plus"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["Button_minus"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      align="center center"
      flow="column"
      gap="X"
      display="flex"
      tag="label"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        icon="plus"
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
        {show_Svg(dobj_Svg) ? (
          <Svg
            icon="plus"
            width="A"
            height="A"
            display="inline-block"
            spriteId="plus"
            src='<symbol id="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></symbol>'
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
        boxSize="C C"
        round="Z"
        padding="0"
        align="center center"
        textAlign="center"
        placeholder="00"
        appearance="textfield"
        theme="secondary"
        type="number"
        border="none"
        fontSize="A"
        fontFamily="smbls"
        outline="solid, 0, blue .3"
        tag="input"
        ref={ref_Box_3}
        min={attr_min(dobj_Box_2)}
        max={attr_max(dobj_Box_2)}
        lineHeight={1}
        {...dobj_Box_2.props}
        step={attr_step(dobj_Box_2)}
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
      <Box
        icon="minus"
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
        ref={ref_Box_4}
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
        type={attr_type_3(dobj_Box_3)}
        placeholder={attr_placeholder_3(dobj_Box_3)}
        tabIndex={attr_tabIndex_3(dobj_Box_3)}
        domqlElementObject={dobj_Box_3}
      >
        {show_Svg_2(dobj_Svg_2) ? (
          <Svg
            icon="minus"
            width="A"
            height="A"
            display="inline-block"
            spriteId="minus"
            src='<symbol id="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></symbol>'
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
  props: {
    boxSize: 'C B2',
    flow: 'column',
    overflow: 'hidden',
    round: 'Z',
    theme: 'secondary'
  },
  extend: {
    props: {display: 'flex'},
    class: {
      flow: ({ props: props3 }) => props3.flow && { flexFlow: props3.flow },
      wrap: ({ props: props3 }) => props3.wrap && { flexWrap: props3.wrap },
      align: ({ props: props3 }) => {
      if (typeof props3.align !== "string")
        return;
      const [alignItems, justifyContent] = props3.align.split(" ");
      return { alignItems, justifyContent };
    }
    }
  },
  childExtend: {
    extend: {
      extend: [
        {
          extend: {
            props: {display: 'flex'},
            class: {
              flow: ({ props: props3 }) => props3.flow && { flexFlow: props3.flow },
              wrap: ({ props: props3 }) => props3.wrap && { flexWrap: props3.wrap },
              align: ({ props: props3 }) => {
      if (typeof props3.align !== "string")
        return;
      const [alignItems, justifyContent] = props3.align.split(" ");
      return { alignItems, justifyContent };
    }
            }
          },
          props: {
            align: 'center center',
            lineHeight: 1
          },
          Icon: {
            props: ({ parent, props: props3 }) => ({ icon: parent.props.icon }),
            if: ({ parent, props: props3 }) => {
      const doesExist = parent.props.icon || parent.props.Icon || props3.name || props3.icon;
      return doesExist;
    }
          },
          text: ({ props: props3 }) => props3.text,
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
              placeholder: ({ props: props3 }) => props3.placeholder,
              tabIndex: ({ props: props3 }) => props3.tabIndex
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
            type: ({ props: props3 }) => props3.type
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
        type: ({ props: props3 }) => props3.type
      }
    },
    props: ({ state, key }) => ({
      active: state.activeShift === key,
      padding: "0",
      flex: "1",
      width: "100%",
      fontSize: "Y",
      textTransform: "uppercase",
      round: "0",
      background: "transparent",
      color: "currentColor",
      lineHeight: "1",
      ".active": { theme: "primary" }
    }),
    on: {
      click: (ev, { key, state }) => {
        console.log(ev, key, state);
        state.update({ activeShift: key });
      }
    }
  },
  am: {text: 'am'},
  pm: {text: 'pm'},
  __name: 'TimeSwitcher'
};

export function TimeSwitcher(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
  function flow({ props: props3 }) {
    return (
      props3.flow && {
        flexFlow: props3.flow,
      }
    );
  }

  function wrap({ props: props3 }) {
    return (
      props3.wrap && {
        flexWrap: props3.wrap,
      }
    );
  }

  function align({ props: props3 }) {
    if (typeof props3.align !== "string") return;
    const [alignItems, justifyContent] = props3.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_2({ props: props3 }) {
    return (
      props3.flow && {
        flexFlow: props3.flow,
      }
    );
  }

  function wrap_2({ props: props3 }) {
    return (
      props3.wrap && {
        flexWrap: props3.wrap,
      }
    );
  }

  function align_2({ props: props3 }) {
    if (typeof props3.align !== "string") return;
    const [alignItems, justifyContent] = props3.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function Box_onClick(ev, { key, state }) {
    console.log(ev, key, state);
    setActiveShift(key);
    return;
  }

  function attr_type({ props: props3 }) {
    return props3.type;
  }

  function attr_placeholder({ props: props3 }) {
    return props3.placeholder;
  }

  function attr_tabIndex({ props: props3 }) {
    return props3.tabIndex;
  }

  function flow_3({ props: props3 }) {
    return (
      props3.flow && {
        flexFlow: props3.flow,
      }
    );
  }

  function wrap_3({ props: props3 }) {
    return (
      props3.wrap && {
        flexWrap: props3.wrap,
      }
    );
  }

  function align_3({ props: props3 }) {
    if (typeof props3.align !== "string") return;
    const [alignItems, justifyContent] = props3.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function Box_onClick_2(ev, { key, state }) {
    console.log(ev, key, state);
    setActiveShift(key);
    return;
  }

  function attr_type_2({ props: props3 }) {
    return props3.type;
  }

  function attr_placeholder_2({ props: props3 }) {
    return props3.placeholder;
  }

  function attr_tabIndex_2({ props: props3 }) {
    return props3.tabIndex;
  }

  function show_Svg({ parent, props: props3 }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props3.name || props3.icon;
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

  function show_Svg_2({ parent, props: props3 }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props3.name || props3.icon;
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
  const dobj_Box = dobj["am"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["pm"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Svg = dobj["am"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["pm"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="C B2"
      flow="column"
      overflow="hidden"
      round="Z"
      theme="secondary"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        padding="0"
        flex="1"
        width="100%"
        fontSize="Y"
        textTransform="uppercase"
        round="0"
        background="transparent"
        color="currentColor"
        lineHeight="1"
        type="button"
        border="none"
        display="inline-flex"
        align="center center"
        textDecoration="none"
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
        onClick={(ev) => Box_onClick(ev, dobj_Box)}
        {...dobj_Box.props}
        type={attr_type(dobj_Box)}
        placeholder={attr_placeholder(dobj_Box)}
        tabIndex={attr_tabIndex(dobj_Box)}
        domqlElementObject={dobj_Box}
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
      <Box
        padding="0"
        flex="1"
        width="100%"
        fontSize="Y"
        textTransform="uppercase"
        round="0"
        background="transparent"
        color="currentColor"
        lineHeight="1"
        type="button"
        border="none"
        display="inline-flex"
        align="center center"
        textDecoration="none"
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
        onClick={(ev) => Box_onClick_2(ev, dobj_Box_2)}
        {...dobj_Box_2.props}
        type={attr_type_2(dobj_Box_2)}
        placeholder={attr_placeholder_2(dobj_Box_2)}
        tabIndex={attr_tabIndex_2(dobj_Box_2)}
        domqlElementObject={dobj_Box_2}
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
      </Box>
    </Box>
  );
}
