import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";

const orig = {
  props: {
    boxSize: 'D D',
    position: 'relative',
    ':after': {
      content: '""',
      position: 'absolute',
      width: 'calc(100% - 5px)',
      height: 'calc(100% - 5px)',
      background: 'black',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      round: '100%'
    }
  },
  Progress: {
    tag: 'progress',
    props: {
      boxSize: '100% 100%',
      value: 0.7,
      round: '100%',
      overflow: 'hidden',
      style: {
        '&::-webkit-progress-bar': {background: '#0474F2'},
        '&::-webkit-progress-value': {background: '#252527'}
      }
    },
    attr: {
      max: ({ props }) => props.max,
      progress: ({ props }) => props.progress,
      value: ({ props }) => props.value
    }
  },
  __name: 'ProgressCircle'
};

export function ProgressCircle(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  function attr_max({ props }) {
    return props.max;
  }

  function attr_progress({ props }) {
    return props.progress;
  }

  function attr_value({ props }) {
    return props.value;
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
  const dobj_Box = dobj["Progress"]
  dobj_Box.node = ref_Box_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="D D"
      position="relative"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="100% 100%"
        round="100%"
        overflow="hidden"
        tag="progress"
        ref={ref_Box_2}
        value={attr_value(dobj_Box)}
        style={{
          "&::-webkit-progress-bar": {
            background: "#0474F2",
          },
          "&::-webkit-progress-value": {
            background: "#252527",
          },
        }}
        {...dobj_Box.props}
        max={attr_max(dobj_Box)}
        progress={attr_progress(dobj_Box)}
        domqlElementObject={dobj_Box}
      />
    </Box>
  );
}

import { Svg } from "@symbo.ls/react-atoms";

const orig_2 = {
  extend: {
    props: {
      boxSize: 'D D',
      position: 'relative',
      ':after': {
        content: '""',
        position: 'absolute',
        width: 'calc(100% - 5px)',
        height: 'calc(100% - 5px)',
        background: 'black',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        round: '100%'
      }
    },
    Progress: {
      tag: 'progress',
      props: {
        boxSize: '100% 100%',
        value: 0.7,
        round: '100%',
        overflow: 'hidden',
        style: {
          '&::-webkit-progress-bar': {background: '#0474F2'},
          '&::-webkit-progress-value': {background: '#252527'}
        }
      },
      attr: {
        max: ({ props }) => props.max,
        progress: ({ props }) => props.progress,
        value: ({ props }) => props.value
      }
    },
    __name: 'ProgressCircle'
  },
  Icon: {
    name: 'arrowUp',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '3',
    fontSize: 'E'
  },
  __name: 'ProgressCircleWithIcon'
};

export function ProgressCircleWithIcon(props) {
  const ref_Box = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_2 = useRef(null);
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

  function attr_max({ props }) {
    return props.max;
  }

  function attr_progress({ props }) {
    return props.progress;
  }

  function attr_value({ props }) {
    return props.value;
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
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box = dobj["Progress"]
  dobj_Box.node = ref_Box_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="D D"
      position="relative"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Svg
        name="arrowUp"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="3"
        fontSize="E"
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
        ref={ref_Box_2}
        value={attr_value(dobj_Box)}
        style={{
          "&::-webkit-progress-bar": {
            background: "#0474F2",
          },
          "&::-webkit-progress-value": {
            background: "#252527",
          },
        }}
        {...dobj_Box.props}
        max={attr_max(dobj_Box)}
        progress={attr_progress(dobj_Box)}
        domqlElementObject={dobj_Box}
      />
    </Box>
  );
}

import { css } from "@emotion/css";

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
    align: 'center flex-start',
    boxSize: 'fit-content fit-content',
    gap: 'Y'
  },
  ProgressCircle: {
    boxSize: 'A',
    ':after': {
      width: 'calc(100% - 5px)',
      height: 'calc(100% - 5px)'
    }
  },
  UnitValue: {fontSize: 'Y1'},
  __name: 'ProgressCircleWithSideUnitValue'
};

export function ProgressCircleWithSideUnitValue(props) {
  const ref_Box = useRef(null);
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
  const dobj_Box = dobj["ProgressCircle"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["UnitValue"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["ProgressCircle"]["Progress"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["UnitValue"]["Value"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["UnitValue"]["Unit"]
  dobj_Box_5.node = ref_Box_6.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      align="center flex-start"
      boxSize="fit-content fit-content"
      gap="Y"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="A"
        position="relative"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Box
          boxSize="100% 100%"
          round="100%"
          overflow="hidden"
          tag="progress"
          ref={ref_Box_4}
          value={attr_value(dobj_Box_3)}
          style={{
            "&::-webkit-progress-bar": {
              background: "#0474F2",
            },
            "&::-webkit-progress-value": {
              background: "#252527",
            },
          }}
          {...dobj_Box_3.props}
          max={attr_max(dobj_Box_3)}
          progress={attr_progress(dobj_Box_3)}
          domqlElementObject={dobj_Box_3}
        />
      </Box>
      <Box
        fontSize="Y1"
        color="#818186"
        align="center flex-start"
        gap="V"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        className={`${css(flow_2(dobj_Box_2))} ${css(wrap_2(dobj_Box_2))} ${css(
          align_2(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Box
          text="72"
          tag="div"
          ref={ref_Box_5}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
        <Box
          text="%"
          tag="div"
          ref={ref_Box_6}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        />
      </Box>
    </Box>
  );
}

const orig_4 = {
  extend: {
    props: {
      boxSize: 'D D',
      position: 'relative',
      ':after': {
        content: '""',
        position: 'absolute',
        width: 'calc(100% - 5px)',
        height: 'calc(100% - 5px)',
        background: 'black',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        round: '100%'
      }
    },
    Progress: {
      tag: 'progress',
      props: {
        boxSize: '100% 100%',
        value: 0.7,
        round: '100%',
        overflow: 'hidden',
        style: {
          '&::-webkit-progress-bar': {background: '#0474F2'},
          '&::-webkit-progress-value': {background: '#252527'}
        }
      },
      attr: {
        max: ({ props }) => props.max,
        progress: ({ props }) => props.progress,
        value: ({ props }) => props.value
      }
    },
    __name: 'ProgressCircle'
  },
  Progress: {},
  UnitValue: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '3',
    fontSize: 'Z'
  },
  __name: 'ProgressCircleWithUnitValue'
};

export function ProgressCircleWithUnitValue(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  function attr_max({ props }) {
    return props.max;
  }

  function attr_progress({ props }) {
    return props.progress;
  }

  function attr_value({ props }) {
    return props.value;
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
  const dobj_Box = dobj["Progress"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["UnitValue"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["UnitValue"]["Value"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["UnitValue"]["Unit"]
  dobj_Box_4.node = ref_Box_5.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="D D"
      position="relative"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="100% 100%"
        round="100%"
        overflow="hidden"
        tag="progress"
        ref={ref_Box_2}
        value={attr_value(dobj_Box)}
        style={{
          "&::-webkit-progress-bar": {
            background: "#0474F2",
          },
          "&::-webkit-progress-value": {
            background: "#252527",
          },
        }}
        {...dobj_Box.props}
        max={attr_max(dobj_Box)}
        progress={attr_progress(dobj_Box)}
        domqlElementObject={dobj_Box}
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
        ref={ref_Box_3}
        className={`${css(flow(dobj_Box_2))} ${css(wrap(dobj_Box_2))} ${css(
          align(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Box
          text="72"
          tag="div"
          ref={ref_Box_4}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
        <Box
          text="%"
          tag="div"
          ref={ref_Box_5}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
      </Box>
    </Box>
  );
}

const orig_5 = {
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
  },
  __name: 'ProgressLine'
};

export function ProgressLine(props) {
  const ref_Box = useRef(null);
  function attr_max({ props }) {
    return props.max;
  }

  function attr_progress({ props }) {
    return props.progress;
  }

  function attr_value({ props }) {
    return props.value;
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      height="X1"
      minWidth="F2+B1"
      round="2px"
      overflow="hidden"
      theme="primary @dark .inactive"
      tag="progress"
      ref={ref_Box}
      value={attr_value(dobj)}
      {...dobj.props}
      max={attr_max(dobj)}
      progress={attr_progress(dobj)}
      domqlElementObject={dobj}
    />
  );
}

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
    align: 'center flex-start',
    gap: 'Z1'
  },
  ProgressLine: {minWidth: 'F2+B1'},
  UnitValue: {},
  __name: 'ProgressLineWithUnitValue'
};

export function ProgressLineWithUnitValue(props) {
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

  function attr_max({ props: props4 }) {
    return props4.max;
  }

  function attr_progress({ props: props4 }) {
    return props4.progress;
  }

  function attr_value({ props: props4 }) {
    return props4.value;
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
  const dobj_Box = dobj["ProgressLine"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["UnitValue"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["UnitValue"]["Value"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["UnitValue"]["Unit"]
  dobj_Box_4.node = ref_Box_5.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
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
        minWidth="F2+B1"
        height="Y+V"
        round="W"
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
        color="#818186"
        align="center flex-start"
        gap="V"
        fontSize="Z"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        className={`${css(flow_2(dobj_Box_2))} ${css(wrap_2(dobj_Box_2))} ${css(
          align_2(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Box
          text="72"
          tag="div"
          ref={ref_Box_4}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
        <Box
          text="%"
          tag="div"
          ref={ref_Box_5}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
      </Box>
    </Box>
  );
}
