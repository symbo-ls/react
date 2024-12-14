import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
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
    boxSize: 'fit-content',
    align: 'center flex-start',
    gap: 'Z1'
  },
  CheckIndicatorWithLabel: {
    CheckIndicator: {
      theme: 'transparent',
      border: '1.5px solid #1C1C1F',
      '.isActive': {
        theme: 'primary',
        border: 'none'
      }
    }
  },
  ProgressLine: {
    value: 0,
    height: 'V2',
    minWidth: 'E',
    maxWidth: 'E',
    round: 'D',
    '.isActive': {value: 1}
  },
  __name: 'CheckStep'
};

export function CheckStep(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
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

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value({ props: props4 }) {
    return props4.value;
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
  const dobj_Box = dobj["CheckIndicatorWithLabel"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["ProgressLine"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["CheckIndicatorWithLabel"]["CheckIndicator"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["CheckIndicatorWithLabel"]["Caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Svg = dobj["CheckIndicatorWithLabel"]["CheckIndicator"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      align="center flex-start"
      gap="Z1"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        align="center flex-start"
        gap="Z1"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        CheckIndicator={{
          props: {
            theme: "transparent",
            border: "1.5px solid #1C1C1F",
            ".isActive": {
              theme: "primary",
              border: "none",
            },
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
          theme="transparent"
          border="1.5px solid #1C1C1F"
          fontSize="D2"
          padding="W"
          boxSize="fit-content fit-content"
          round="100%"
          tag="div"
          ref={ref_Box_4}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
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
          text="Label"
          fontSize="B"
          tag="caption"
          ref={ref_Box_5}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
      </Box>
      <Box
        height="V2"
        minWidth="E"
        maxWidth="E"
        round="D"
        overflow="hidden"
        theme="primary @dark .inactive"
        tag="progress"
        ref={ref_Box_3}
        value={attr_value(dobj_Box_2)}
        {...dobj_Box_2.props}
        max={attr_max(dobj_Box_2)}
        progress={attr_progress(dobj_Box_2)}
        domqlElementObject={dobj_Box_2}
      />
    </Box>
  );
}

const orig_2 = {
  '0': {
    CheckIndicatorWithLabel: {
      CheckIndicator: {isActive: true}
    },
    ProgressLine: {value: 1}
  },
  '1': {
    CheckIndicatorWithLabel: {
      CheckIndicator: {isActive: true}
    },
    ProgressLine: {value: 1}
  },
  '2': {
    CheckIndicatorWithLabel: {
      CheckIndicator: {isActive: true}
    },
    ProgressLine: {value: 1}
  },
  '3': {},
  '4': {},
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
    boxSize: 'fit-content fit-content',
    align: 'center flex-start',
    gap: 'Z1',
    childProps: {
      ':last-child > progress': {display: 'none'}
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
      boxSize: 'fit-content',
      align: 'center flex-start',
      gap: 'Z1'
    },
    CheckIndicatorWithLabel: {
      CheckIndicator: {
        theme: 'transparent',
        border: '1.5px solid #1C1C1F',
        '.isActive': {
          theme: 'primary',
          border: 'none'
        }
      }
    },
    ProgressLine: {
      value: 0,
      height: 'V2',
      minWidth: 'E',
      maxWidth: 'E',
      round: 'D',
      '.isActive': {value: 1}
    },
    __name: 'CheckStep'
  },
  __name: 'CheckSteps'
};

export function CheckSteps(props) {
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
  const ref_Box_24 = useRef(null);
  const ref_Box_25 = useRef(null);
  const ref_Box_26 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Svg_4 = useRef(null);
  const ref_Svg_5 = useRef(null);
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

  function attr_max_2({ props: props4 }) {
    return props4.max;
  }

  function attr_progress_2({ props: props4 }) {
    return props4.progress;
  }

  function attr_value_2({ props: props4 }) {
    return props4.value;
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

  function attr_max_3({ props: props4 }) {
    return props4.max;
  }

  function attr_progress_3({ props: props4 }) {
    return props4.progress;
  }

  function attr_value_3({ props: props4 }) {
    return props4.value;
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

  function attr_max_4({ props: props4 }) {
    return props4.max;
  }

  function attr_progress_4({ props: props4 }) {
    return props4.progress;
  }

  function attr_value_4({ props: props4 }) {
    return props4.value;
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

  function attr_max_5({ props: props4 }) {
    return props4.max;
  }

  function attr_progress_5({ props: props4 }) {
    return props4.progress;
  }

  function attr_value_5({ props: props4 }) {
    return props4.value;
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
  const dobj_Box_3 = dobj["2"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["3"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["4"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["0"]["CheckIndicatorWithLabel"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["0"]["ProgressLine"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["1"]["CheckIndicatorWithLabel"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["1"]["ProgressLine"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["2"]["CheckIndicatorWithLabel"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["2"]["ProgressLine"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["3"]["CheckIndicatorWithLabel"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["3"]["ProgressLine"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["4"]["CheckIndicatorWithLabel"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["4"]["ProgressLine"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["0"]["CheckIndicatorWithLabel"]["CheckIndicator"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Box_17 = dobj["0"]["CheckIndicatorWithLabel"]["Caption"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Box_18 = dobj["1"]["CheckIndicatorWithLabel"]["CheckIndicator"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Box_19 = dobj["1"]["CheckIndicatorWithLabel"]["Caption"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Box_20 = dobj["2"]["CheckIndicatorWithLabel"]["CheckIndicator"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Box_21 = dobj["2"]["CheckIndicatorWithLabel"]["Caption"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Box_22 = dobj["3"]["CheckIndicatorWithLabel"]["CheckIndicator"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Box_23 = dobj["3"]["CheckIndicatorWithLabel"]["Caption"]
  dobj_Box_23.node = ref_Box_24.current
  const dobj_Box_24 = dobj["4"]["CheckIndicatorWithLabel"]["CheckIndicator"]
  dobj_Box_24.node = ref_Box_25.current
  const dobj_Box_25 = dobj["4"]["CheckIndicatorWithLabel"]["Caption"]
  dobj_Box_25.node = ref_Box_26.current
  const dobj_Svg = dobj["0"]["CheckIndicatorWithLabel"]["CheckIndicator"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["1"]["CheckIndicatorWithLabel"]["CheckIndicator"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Svg_3 = dobj["2"]["CheckIndicatorWithLabel"]["CheckIndicator"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Svg_4 = dobj["3"]["CheckIndicatorWithLabel"]["CheckIndicator"]["Icon"]
  dobj_Svg_4.node = ref_Svg_4.current
  const dobj_Svg_5 = dobj["4"]["CheckIndicatorWithLabel"]["CheckIndicator"]["Icon"]
  dobj_Svg_5.node = ref_Svg_5.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content fit-content"
      align="center flex-start"
      gap="Z1"
      display="flex"
      tag="div"
      ref={ref_Box}
      childProps={{
        ":last-child > progress": {
          display: "none",
        },
      }}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="fit-content"
        align="center flex-start"
        gap="Z1"
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
          align="center flex-start"
          gap="Z1"
          display="flex"
          tag="div"
          ref={ref_Box_7}
          CheckIndicator={{
            props: {
              isActive: true,
              theme: "transparent",
              border: "1.5px solid #1C1C1F",
              ".isActive": {
                theme: "primary",
                border: "none",
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_7(dobj_Box_6))} ${css(
            wrap_7(dobj_Box_6)
          )} ${css(align_7(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        >
          <Box
            theme="transparent"
            border="1.5px solid #1C1C1F"
            fontSize="D2"
            padding="W"
            boxSize="fit-content fit-content"
            round="100%"
            tag="div"
            ref={ref_Box_17}
            {...dobj_Box_16.props}
            domqlElementObject={dobj_Box_16}
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
            text="Label"
            fontSize="B"
            tag="caption"
            ref={ref_Box_18}
            {...dobj_Box_17.props}
            domqlElementObject={dobj_Box_17}
          />
        </Box>
        <Box
          height="V2"
          minWidth="E"
          maxWidth="E"
          round="D"
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
      <Box
        boxSize="fit-content"
        align="center flex-start"
        gap="Z1"
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
          align="center flex-start"
          gap="Z1"
          display="flex"
          tag="div"
          ref={ref_Box_9}
          CheckIndicator={{
            props: {
              isActive: true,
              theme: "transparent",
              border: "1.5px solid #1C1C1F",
              ".isActive": {
                theme: "primary",
                border: "none",
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_8(dobj_Box_8))} ${css(
            wrap_8(dobj_Box_8)
          )} ${css(align_8(dobj_Box_8))}`}
          {...dobj_Box_8.props}
          domqlElementObject={dobj_Box_8}
        >
          <Box
            theme="transparent"
            border="1.5px solid #1C1C1F"
            fontSize="D2"
            padding="W"
            boxSize="fit-content fit-content"
            round="100%"
            tag="div"
            ref={ref_Box_19}
            {...dobj_Box_18.props}
            domqlElementObject={dobj_Box_18}
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
          </Box>
          <Box
            text="Label"
            fontSize="B"
            tag="caption"
            ref={ref_Box_20}
            {...dobj_Box_19.props}
            domqlElementObject={dobj_Box_19}
          />
        </Box>
        <Box
          height="V2"
          minWidth="E"
          maxWidth="E"
          round="D"
          overflow="hidden"
          theme="primary @dark .inactive"
          tag="progress"
          ref={ref_Box_10}
          value={attr_value_2(dobj_Box_9)}
          {...dobj_Box_9.props}
          max={attr_max_2(dobj_Box_9)}
          progress={attr_progress_2(dobj_Box_9)}
          domqlElementObject={dobj_Box_9}
        />
      </Box>
      <Box
        boxSize="fit-content"
        align="center flex-start"
        gap="Z1"
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
          align="center flex-start"
          gap="Z1"
          display="flex"
          tag="div"
          ref={ref_Box_11}
          CheckIndicator={{
            props: {
              isActive: true,
              theme: "transparent",
              border: "1.5px solid #1C1C1F",
              ".isActive": {
                theme: "primary",
                border: "none",
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_9(dobj_Box_10))} ${css(
            wrap_9(dobj_Box_10)
          )} ${css(align_9(dobj_Box_10))}`}
          {...dobj_Box_10.props}
          domqlElementObject={dobj_Box_10}
        >
          <Box
            theme="transparent"
            border="1.5px solid #1C1C1F"
            fontSize="D2"
            padding="W"
            boxSize="fit-content fit-content"
            round="100%"
            tag="div"
            ref={ref_Box_21}
            {...dobj_Box_20.props}
            domqlElementObject={dobj_Box_20}
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
          </Box>
          <Box
            text="Label"
            fontSize="B"
            tag="caption"
            ref={ref_Box_22}
            {...dobj_Box_21.props}
            domqlElementObject={dobj_Box_21}
          />
        </Box>
        <Box
          height="V2"
          minWidth="E"
          maxWidth="E"
          round="D"
          overflow="hidden"
          theme="primary @dark .inactive"
          tag="progress"
          ref={ref_Box_12}
          value={attr_value_3(dobj_Box_11)}
          {...dobj_Box_11.props}
          max={attr_max_3(dobj_Box_11)}
          progress={attr_progress_3(dobj_Box_11)}
          domqlElementObject={dobj_Box_11}
        />
      </Box>
      <Box
        boxSize="fit-content"
        align="center flex-start"
        gap="Z1"
        display="flex"
        tag="div"
        ref={ref_Box_5}
        className={`${css(flow_5(dobj_Box_4))} ${css(wrap_5(dobj_Box_4))} ${css(
          align_5(dobj_Box_4)
        )}`}
        {...dobj_Box_4.props}
        domqlElementObject={dobj_Box_4}
      >
        <Box
          align="center flex-start"
          gap="Z1"
          display="flex"
          tag="div"
          ref={ref_Box_13}
          CheckIndicator={{
            props: {
              theme: "transparent",
              border: "1.5px solid #1C1C1F",
              ".isActive": {
                theme: "primary",
                border: "none",
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_10(dobj_Box_12))} ${css(
            wrap_10(dobj_Box_12)
          )} ${css(align_10(dobj_Box_12))}`}
          {...dobj_Box_12.props}
          domqlElementObject={dobj_Box_12}
        >
          <Box
            theme="transparent"
            border="1.5px solid #1C1C1F"
            fontSize="D2"
            padding="W"
            boxSize="fit-content fit-content"
            round="100%"
            tag="div"
            ref={ref_Box_23}
            {...dobj_Box_22.props}
            domqlElementObject={dobj_Box_22}
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
          </Box>
          <Box
            text="Label"
            fontSize="B"
            tag="caption"
            ref={ref_Box_24}
            {...dobj_Box_23.props}
            domqlElementObject={dobj_Box_23}
          />
        </Box>
        <Box
          height="V2"
          minWidth="E"
          maxWidth="E"
          round="D"
          overflow="hidden"
          theme="primary @dark .inactive"
          tag="progress"
          ref={ref_Box_14}
          value={attr_value_4(dobj_Box_13)}
          {...dobj_Box_13.props}
          max={attr_max_4(dobj_Box_13)}
          progress={attr_progress_4(dobj_Box_13)}
          domqlElementObject={dobj_Box_13}
        />
      </Box>
      <Box
        boxSize="fit-content"
        align="center flex-start"
        gap="Z1"
        display="flex"
        tag="div"
        ref={ref_Box_6}
        className={`${css(flow_6(dobj_Box_5))} ${css(wrap_6(dobj_Box_5))} ${css(
          align_6(dobj_Box_5)
        )}`}
        {...dobj_Box_5.props}
        domqlElementObject={dobj_Box_5}
      >
        <Box
          align="center flex-start"
          gap="Z1"
          display="flex"
          tag="div"
          ref={ref_Box_15}
          CheckIndicator={{
            props: {
              theme: "transparent",
              border: "1.5px solid #1C1C1F",
              ".isActive": {
                theme: "primary",
                border: "none",
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_11(dobj_Box_14))} ${css(
            wrap_11(dobj_Box_14)
          )} ${css(align_11(dobj_Box_14))}`}
          {...dobj_Box_14.props}
          domqlElementObject={dobj_Box_14}
        >
          <Box
            theme="transparent"
            border="1.5px solid #1C1C1F"
            fontSize="D2"
            padding="W"
            boxSize="fit-content fit-content"
            round="100%"
            tag="div"
            ref={ref_Box_25}
            {...dobj_Box_24.props}
            domqlElementObject={dobj_Box_24}
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
          </Box>
          <Box
            text="Label"
            fontSize="B"
            tag="caption"
            ref={ref_Box_26}
            {...dobj_Box_25.props}
            domqlElementObject={dobj_Box_25}
          />
        </Box>
        <Box
          height="V2"
          minWidth="E"
          maxWidth="E"
          round="D"
          overflow="hidden"
          theme="primary @dark .inactive"
          tag="progress"
          ref={ref_Box_16}
          value={attr_value_5(dobj_Box_15)}
          {...dobj_Box_15.props}
          max={attr_max_5(dobj_Box_15)}
          progress={attr_progress_5(dobj_Box_15)}
          domqlElementObject={dobj_Box_15}
        />
      </Box>
    </Box>
  );
}

const orig_3 = {
  '0': {},
  '1': {},
  '2': {props: {value: 0}},
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
    gap: 'Y1'
  },
  childExtend: {
    extend: {
      tag: 'progress',
      props: {
        value: 0.7,
        height: 'X1',
        minWidth: 'F2+B1',
        round: '2px',
        overflow: 'hidden',
        theme: 'primary @dark .inactive',
        '::-webkit-progress-bar': {
          theme: 'primary @dark .inactive'
        },
        '::-webkit-progress-value': {
          theme: 'primary',
          borderRadius: '2px'
        }
      },
      attr: {
        max: ({ props }) => props.max,
        progress: ({ props }) => props.progress,
        value: ({ props }) => props.value
      }
    },
    props: {
      value: 1,
      height: 'X2',
      minWidth: 'F',
      round: 'X'
    }
  },
  __name: 'LineSteps'
};

export function LineSteps(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
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

  function attr_max({ props }) {
    return props.max;
  }

  function attr_progress({ props }) {
    return props.progress;
  }

  function attr_value({ props }) {
    return props.value;
  }

  function attr_max_2({ props }) {
    return props.max;
  }

  function attr_progress_2({ props }) {
    return props.progress;
  }

  function attr_value_2({ props }) {
    return props.value;
  }

  function attr_max_3({ props }) {
    return props.max;
  }

  function attr_progress_3({ props }) {
    return props.progress;
  }

  function attr_value_3({ props }) {
    return props.value;
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
  const dobj_Box = dobj["0"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["1"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["2"]
  dobj_Box_3.node = ref_Box_4.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      gap="Y1"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        height="X2"
        minWidth="F"
        round="X"
        overflow="hidden"
        theme="primary @dark .inactive"
        tag="progress"
        ref={ref_Box_2}
        value={attr_value(dobj_Box)}
        {...dobj_Box.props}
        max={attr_max(dobj_Box)}
        progress={attr_progress(dobj_Box)}
        domqlElementObject={dobj_Box}
      />
      <Box
        height="X2"
        minWidth="F"
        round="X"
        overflow="hidden"
        theme="primary @dark .inactive"
        tag="progress"
        ref={ref_Box_3}
        value={attr_value_2(dobj_Box_2)}
        {...dobj_Box_2.props}
        max={attr_max_2(dobj_Box_2)}
        progress={attr_progress_2(dobj_Box_2)}
        domqlElementObject={dobj_Box_2}
      />
      <Box
        height="X2"
        minWidth="F"
        round="X"
        overflow="hidden"
        theme="primary @dark .inactive"
        tag="progress"
        ref={ref_Box_4}
        value={attr_value_3(dobj_Box_3)}
        {...dobj_Box_3.props}
        max={attr_max_3(dobj_Box_3)}
        progress={attr_progress_3(dobj_Box_3)}
        domqlElementObject={dobj_Box_3}
      />
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
    flow: 'column',
    padding: 'A A1',
    theme: 'dialog',
    round: 'A1',
    boxSize: 'fit-content',
    gap: 'A1'
  },
  TitleParagraph: {
    gap: 'Y1',
    Title: {
      text: 'Symbols',
      fontSize: 'D1'
    },
    Paragraph: {
      text: 'The easiest way to build your own website.',
      fontSize: 'Z1',
      color: 'gray4'
    }
  },
  LineSteps: {
    childProps: {
      minWidth: 'E+A',
      maxWidth: 'E+A'
    }
  },
  __name: 'LineStepsWithTitleParagraph'
};

export function LineStepsWithTitleParagraph(props) {
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
  const dobj_Box = dobj["TitleParagraph"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["LineSteps"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["TitleParagraph"]["Title"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["TitleParagraph"]["Paragraph"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["LineSteps"]["0"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["LineSteps"]["1"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["LineSteps"]["2"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["TitleParagraph"]["Title"]["h5"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["TitleParagraph"]["Paragraph"]["p"]
  dobj_Box_9.node = ref_Box_10.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      flow="column"
      padding="A A1"
      theme="dialog"
      round="A1"
      boxSize="fit-content"
      gap="A1"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        gap="Y1"
        flow="column"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        Title={{
          props: {
            text: "Symbols",
            fontSize: "D1",
          },
          __ref: undefined,
        }}
        Paragraph={{
          props: {
            text: "The easiest way to build your own website.",
            fontSize: "Z1",
            color: "gray4",
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
          text="Symbols"
          fontSize="D1"
          align="center space-between"
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
            fontSize="A"
            text="Title"
            lineHeight="1em"
            tag="h5"
            ref={ref_Box_9}
            {...dobj_Box_8.props}
            domqlElementObject={dobj_Box_8}
          />
        </Box>
        <Box
          text="The easiest way to build your own website."
          fontSize="Z1"
          color="gray4"
          display="flex"
          tag="div"
          ref={ref_Box_5}
          className={`${css(flow_5(dobj_Box_4))} ${css(
            wrap_5(dobj_Box_4)
          )} ${css(align_5(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            text="Paragraph"
            fontSize="Z"
            lineHeight="1em"
            margin="0"
            color="gray2"
            tag="p"
            ref={ref_Box_10}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          />
        </Box>
      </Box>
      <Box
        boxSize="fit-content"
        gap="Y1"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        childProps={{
          minWidth: "E+A",
          maxWidth: "E+A",
        }}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Box
          minWidth="E+A"
          maxWidth="E+A"
          height="Y"
          round="X"
          overflow="hidden"
          theme="primary @dark .inactive"
          tag="progress"
          ref={ref_Box_6}
          value={attr_value(dobj_Box_5)}
          {...dobj_Box_5.props}
          max={attr_max(dobj_Box_5)}
          progress={attr_progress(dobj_Box_5)}
          domqlElementObject={dobj_Box_5}
        />
        <Box
          minWidth="E+A"
          maxWidth="E+A"
          height="Y"
          round="X"
          overflow="hidden"
          theme="primary @dark .inactive"
          tag="progress"
          ref={ref_Box_7}
          value={attr_value_2(dobj_Box_6)}
          {...dobj_Box_6.props}
          max={attr_max_2(dobj_Box_6)}
          progress={attr_progress_2(dobj_Box_6)}
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
          value={attr_value_3(dobj_Box_7)}
          {...dobj_Box_7.props}
          max={attr_max_3(dobj_Box_7)}
          progress={attr_progress_3(dobj_Box_7)}
          domqlElementObject={dobj_Box_7}
        />
      </Box>
    </Box>
  );
}

const orig_5 = {
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
      boxSize: 'fit-content',
      align: 'center flex-start',
      gap: 'Z1'
    },
    CheckIndicatorWithLabel: {
      CheckIndicator: {
        theme: 'transparent',
        border: '1.5px solid #1C1C1F',
        '.isActive': {
          theme: 'primary',
          border: 'none'
        }
      }
    },
    ProgressLine: {
      value: 0,
      height: 'V2',
      minWidth: 'E',
      maxWidth: 'E',
      round: 'D',
      '.isActive': {value: 1}
    },
    __name: 'CheckStep'
  },
  CheckIndicatorWithLabel: null,
  RadioIndicatorWithLabel: {
    RadioIndicator: {
      theme: 'dialog',
      ':after': {},
      '.isActive': {
        theme: 'dialog',
        border: 'none',
        ':after': {theme: 'primary'}
      }
    }
  },
  ProgressLine: {},
  __name: 'RadioStep'
};

export function RadioStep(props) {
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
  const dobj_Box = dobj["RadioIndicatorWithLabel"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["ProgressLine"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["RadioIndicatorWithLabel"]["RadioIndicator"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["RadioIndicatorWithLabel"]["Caption"]
  dobj_Box_4.node = ref_Box_5.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      align="center flex-start"
      gap="Z1"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        align="center flex-start"
        gap="Z1"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        RadioIndicator={{
          props: {
            theme: "dialog",
            ":after": {},
            ".isActive": {
              theme: "dialog",
              border: "none",
              ":after": {
                theme: "primary",
              },
            },
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
          theme="dialog"
          padding="Z"
          boxSize="fit-content"
          round="100%"
          tag="div"
          ref={ref_Box_4}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
        <Box
          text="Label"
          fontSize="B"
          tag="caption"
          ref={ref_Box_5}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
      </Box>
      <Box
        height="V2"
        minWidth="E"
        maxWidth="E"
        round="D"
        overflow="hidden"
        theme="primary @dark .inactive"
        tag="progress"
        ref={ref_Box_3}
        value={attr_value(dobj_Box_2)}
        {...dobj_Box_2.props}
        max={attr_max(dobj_Box_2)}
        progress={attr_progress(dobj_Box_2)}
        domqlElementObject={dobj_Box_2}
      />
    </Box>
  );
}

const orig_6 = {
  '0': {
    RadioIndicatorWithLabel: {
      RadioIndicator: {isActive: true}
    },
    ProgressLine: {value: 1}
  },
  '1': {
    RadioIndicatorWithLabel: {
      RadioIndicator: {isActive: true}
    },
    ProgressLine: {value: 1}
  },
  '2': {
    RadioIndicatorWithLabel: {
      RadioIndicator: {isActive: true}
    },
    ProgressLine: {value: 1}
  },
  '3': {},
  '4': {},
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
    boxSize: 'fit-content fit-content',
    align: 'center flex-start',
    gap: 'Z',
    childProps: {
      ':last-child > progress': {display: 'none'}
    }
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
        boxSize: 'fit-content',
        align: 'center flex-start',
        gap: 'Z1'
      },
      CheckIndicatorWithLabel: {
        CheckIndicator: {
          theme: 'transparent',
          border: '1.5px solid #1C1C1F',
          '.isActive': {
            theme: 'primary',
            border: 'none'
          }
        }
      },
      ProgressLine: {
        value: 0,
        height: 'V2',
        minWidth: 'E',
        maxWidth: 'E',
        round: 'D',
        '.isActive': {value: 1}
      },
      __name: 'CheckStep'
    },
    CheckIndicatorWithLabel: null,
    RadioIndicatorWithLabel: {
      RadioIndicator: {
        theme: 'dialog',
        ':after': {},
        '.isActive': {
          theme: 'dialog',
          border: 'none',
          ':after': {theme: 'primary'}
        }
      }
    },
    ProgressLine: {},
    __name: 'RadioStep'
  },
  __name: 'RadioSteps'
};

export function RadioSteps(props) {
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
  const ref_Box_24 = useRef(null);
  const ref_Box_25 = useRef(null);
  const ref_Box_26 = useRef(null);
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

  function attr_max_2({ props: props4 }) {
    return props4.max;
  }

  function attr_progress_2({ props: props4 }) {
    return props4.progress;
  }

  function attr_value_2({ props: props4 }) {
    return props4.value;
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

  function attr_max_3({ props: props4 }) {
    return props4.max;
  }

  function attr_progress_3({ props: props4 }) {
    return props4.progress;
  }

  function attr_value_3({ props: props4 }) {
    return props4.value;
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

  function attr_max_4({ props: props4 }) {
    return props4.max;
  }

  function attr_progress_4({ props: props4 }) {
    return props4.progress;
  }

  function attr_value_4({ props: props4 }) {
    return props4.value;
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

  function attr_max_5({ props: props4 }) {
    return props4.max;
  }

  function attr_progress_5({ props: props4 }) {
    return props4.progress;
  }

  function attr_value_5({ props: props4 }) {
    return props4.value;
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
  const dobj_Box = dobj["0"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["1"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["2"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["3"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["4"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["0"]["RadioIndicatorWithLabel"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["0"]["ProgressLine"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["1"]["RadioIndicatorWithLabel"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["1"]["ProgressLine"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["2"]["RadioIndicatorWithLabel"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["2"]["ProgressLine"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["3"]["RadioIndicatorWithLabel"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["3"]["ProgressLine"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["4"]["RadioIndicatorWithLabel"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["4"]["ProgressLine"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["0"]["RadioIndicatorWithLabel"]["RadioIndicator"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Box_17 = dobj["0"]["RadioIndicatorWithLabel"]["Caption"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Box_18 = dobj["1"]["RadioIndicatorWithLabel"]["RadioIndicator"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Box_19 = dobj["1"]["RadioIndicatorWithLabel"]["Caption"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Box_20 = dobj["2"]["RadioIndicatorWithLabel"]["RadioIndicator"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Box_21 = dobj["2"]["RadioIndicatorWithLabel"]["Caption"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Box_22 = dobj["3"]["RadioIndicatorWithLabel"]["RadioIndicator"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Box_23 = dobj["3"]["RadioIndicatorWithLabel"]["Caption"]
  dobj_Box_23.node = ref_Box_24.current
  const dobj_Box_24 = dobj["4"]["RadioIndicatorWithLabel"]["RadioIndicator"]
  dobj_Box_24.node = ref_Box_25.current
  const dobj_Box_25 = dobj["4"]["RadioIndicatorWithLabel"]["Caption"]
  dobj_Box_25.node = ref_Box_26.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content fit-content"
      align="center flex-start"
      gap="Z"
      display="flex"
      tag="div"
      ref={ref_Box}
      childProps={{
        ":last-child > progress": {
          display: "none",
        },
      }}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="fit-content"
        align="center flex-start"
        gap="Z1"
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
          align="center flex-start"
          gap="Z1"
          display="flex"
          tag="div"
          ref={ref_Box_7}
          RadioIndicator={{
            props: {
              isActive: true,
              theme: "dialog",
              ":after": {},
              ".isActive": {
                theme: "dialog",
                border: "none",
                ":after": {
                  theme: "primary",
                },
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_7(dobj_Box_6))} ${css(
            wrap_7(dobj_Box_6)
          )} ${css(align_7(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        >
          <Box
            theme="dialog"
            padding="Z"
            boxSize="fit-content"
            round="100%"
            tag="div"
            ref={ref_Box_17}
            {...dobj_Box_16.props}
            domqlElementObject={dobj_Box_16}
          />
          <Box
            text="Label"
            fontSize="B"
            tag="caption"
            ref={ref_Box_18}
            {...dobj_Box_17.props}
            domqlElementObject={dobj_Box_17}
          />
        </Box>
        <Box
          height="V2"
          minWidth="E"
          maxWidth="E"
          round="D"
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
      <Box
        boxSize="fit-content"
        align="center flex-start"
        gap="Z1"
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
          align="center flex-start"
          gap="Z1"
          display="flex"
          tag="div"
          ref={ref_Box_9}
          RadioIndicator={{
            props: {
              isActive: true,
              theme: "dialog",
              ":after": {},
              ".isActive": {
                theme: "dialog",
                border: "none",
                ":after": {
                  theme: "primary",
                },
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_8(dobj_Box_8))} ${css(
            wrap_8(dobj_Box_8)
          )} ${css(align_8(dobj_Box_8))}`}
          {...dobj_Box_8.props}
          domqlElementObject={dobj_Box_8}
        >
          <Box
            theme="dialog"
            padding="Z"
            boxSize="fit-content"
            round="100%"
            tag="div"
            ref={ref_Box_19}
            {...dobj_Box_18.props}
            domqlElementObject={dobj_Box_18}
          />
          <Box
            text="Label"
            fontSize="B"
            tag="caption"
            ref={ref_Box_20}
            {...dobj_Box_19.props}
            domqlElementObject={dobj_Box_19}
          />
        </Box>
        <Box
          height="V2"
          minWidth="E"
          maxWidth="E"
          round="D"
          overflow="hidden"
          theme="primary @dark .inactive"
          tag="progress"
          ref={ref_Box_10}
          value={attr_value_2(dobj_Box_9)}
          {...dobj_Box_9.props}
          max={attr_max_2(dobj_Box_9)}
          progress={attr_progress_2(dobj_Box_9)}
          domqlElementObject={dobj_Box_9}
        />
      </Box>
      <Box
        boxSize="fit-content"
        align="center flex-start"
        gap="Z1"
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
          align="center flex-start"
          gap="Z1"
          display="flex"
          tag="div"
          ref={ref_Box_11}
          RadioIndicator={{
            props: {
              isActive: true,
              theme: "dialog",
              ":after": {},
              ".isActive": {
                theme: "dialog",
                border: "none",
                ":after": {
                  theme: "primary",
                },
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_9(dobj_Box_10))} ${css(
            wrap_9(dobj_Box_10)
          )} ${css(align_9(dobj_Box_10))}`}
          {...dobj_Box_10.props}
          domqlElementObject={dobj_Box_10}
        >
          <Box
            theme="dialog"
            padding="Z"
            boxSize="fit-content"
            round="100%"
            tag="div"
            ref={ref_Box_21}
            {...dobj_Box_20.props}
            domqlElementObject={dobj_Box_20}
          />
          <Box
            text="Label"
            fontSize="B"
            tag="caption"
            ref={ref_Box_22}
            {...dobj_Box_21.props}
            domqlElementObject={dobj_Box_21}
          />
        </Box>
        <Box
          height="V2"
          minWidth="E"
          maxWidth="E"
          round="D"
          overflow="hidden"
          theme="primary @dark .inactive"
          tag="progress"
          ref={ref_Box_12}
          value={attr_value_3(dobj_Box_11)}
          {...dobj_Box_11.props}
          max={attr_max_3(dobj_Box_11)}
          progress={attr_progress_3(dobj_Box_11)}
          domqlElementObject={dobj_Box_11}
        />
      </Box>
      <Box
        boxSize="fit-content"
        align="center flex-start"
        gap="Z1"
        display="flex"
        tag="div"
        ref={ref_Box_5}
        className={`${css(flow_5(dobj_Box_4))} ${css(wrap_5(dobj_Box_4))} ${css(
          align_5(dobj_Box_4)
        )}`}
        {...dobj_Box_4.props}
        domqlElementObject={dobj_Box_4}
      >
        <Box
          align="center flex-start"
          gap="Z1"
          display="flex"
          tag="div"
          ref={ref_Box_13}
          RadioIndicator={{
            props: {
              theme: "dialog",
              ":after": {},
              ".isActive": {
                theme: "dialog",
                border: "none",
                ":after": {
                  theme: "primary",
                },
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_10(dobj_Box_12))} ${css(
            wrap_10(dobj_Box_12)
          )} ${css(align_10(dobj_Box_12))}`}
          {...dobj_Box_12.props}
          domqlElementObject={dobj_Box_12}
        >
          <Box
            theme="dialog"
            padding="Z"
            boxSize="fit-content"
            round="100%"
            tag="div"
            ref={ref_Box_23}
            {...dobj_Box_22.props}
            domqlElementObject={dobj_Box_22}
          />
          <Box
            text="Label"
            fontSize="B"
            tag="caption"
            ref={ref_Box_24}
            {...dobj_Box_23.props}
            domqlElementObject={dobj_Box_23}
          />
        </Box>
        <Box
          height="V2"
          minWidth="E"
          maxWidth="E"
          round="D"
          overflow="hidden"
          theme="primary @dark .inactive"
          tag="progress"
          ref={ref_Box_14}
          value={attr_value_4(dobj_Box_13)}
          {...dobj_Box_13.props}
          max={attr_max_4(dobj_Box_13)}
          progress={attr_progress_4(dobj_Box_13)}
          domqlElementObject={dobj_Box_13}
        />
      </Box>
      <Box
        boxSize="fit-content"
        align="center flex-start"
        gap="Z1"
        display="flex"
        tag="div"
        ref={ref_Box_6}
        className={`${css(flow_6(dobj_Box_5))} ${css(wrap_6(dobj_Box_5))} ${css(
          align_6(dobj_Box_5)
        )}`}
        {...dobj_Box_5.props}
        domqlElementObject={dobj_Box_5}
      >
        <Box
          align="center flex-start"
          gap="Z1"
          display="flex"
          tag="div"
          ref={ref_Box_15}
          RadioIndicator={{
            props: {
              theme: "dialog",
              ":after": {},
              ".isActive": {
                theme: "dialog",
                border: "none",
                ":after": {
                  theme: "primary",
                },
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_11(dobj_Box_14))} ${css(
            wrap_11(dobj_Box_14)
          )} ${css(align_11(dobj_Box_14))}`}
          {...dobj_Box_14.props}
          domqlElementObject={dobj_Box_14}
        >
          <Box
            theme="dialog"
            padding="Z"
            boxSize="fit-content"
            round="100%"
            tag="div"
            ref={ref_Box_25}
            {...dobj_Box_24.props}
            domqlElementObject={dobj_Box_24}
          />
          <Box
            text="Label"
            fontSize="B"
            tag="caption"
            ref={ref_Box_26}
            {...dobj_Box_25.props}
            domqlElementObject={dobj_Box_25}
          />
        </Box>
        <Box
          height="V2"
          minWidth="E"
          maxWidth="E"
          round="D"
          overflow="hidden"
          theme="primary @dark .inactive"
          tag="progress"
          ref={ref_Box_16}
          value={attr_value_5(dobj_Box_15)}
          {...dobj_Box_15.props}
          max={attr_max_5(dobj_Box_15)}
          progress={attr_progress_5(dobj_Box_15)}
          domqlElementObject={dobj_Box_15}
        />
      </Box>
    </Box>
  );
}
