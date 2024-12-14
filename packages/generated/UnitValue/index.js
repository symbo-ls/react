import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
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
    align: 'center flex-start',
    gap: 'Y'
  },
  UnitValue: {
    Value: {text: '72'},
    Unit: {text: '%'}
  },
  dot: {
    props: {
      boxSize: 'W W',
      round: '100%',
      background: '#A3A3A8'
    }
  },
  UnitValue2: {
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
        color: 'gray2',
        align: 'center flex-start',
        gap: 'V',
        fontWeight: '400',
        '> *': {lineHeight: '1em'}
      },
      Value: {props: {text: '72'}},
      Unit: {props: {text: '%'}}
    },
    props: {gap: 'X+W'},
    Value: {text: '2'},
    Unit: {text: 'Second left'}
  },
  __name: 'DoubleUnitValue'
};

export function DoubleUnitValue(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
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
  const dobj_Box = dobj["UnitValue"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["dot"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["UnitValue2"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["UnitValue"]["Value"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["UnitValue"]["Unit"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["UnitValue2"]["Value"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["UnitValue2"]["Unit"]
  dobj_Box_7.node = ref_Box_8.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      align="center flex-start"
      gap="Y"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        color="#818186"
        align="center flex-start"
        gap="V"
        fontSize="Z"
        display="flex"
        tag="div"
        ref={ref_Box_2}
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
        className={`${css(flow_2(dobj_Box))} ${css(wrap_2(dobj_Box))} ${css(
          align_2(dobj_Box)
        )}`}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
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
      <Box
        boxSize="W W"
        round="100%"
        background="#A3A3A8"
        tag="div"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
      <Box
        gap="X+W"
        color="gray2"
        align="center flex-start"
        fontWeight="400"
        display="flex"
        tag="div"
        ref={ref_Box_4}
        className={`${css(flow_3(dobj_Box_3))} ${css(wrap_3(dobj_Box_3))} ${css(
          align_3(dobj_Box_3)
        )}`}
        {...dobj_Box_3.props}
        domqlElementObject={dobj_Box_3}
      >
        <Box
          text="72"
          tag="div"
          ref={ref_Box_7}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        />
        <Box
          text="%"
          tag="div"
          ref={ref_Box_8}
          {...dobj_Box_7.props}
          domqlElementObject={dobj_Box_7}
        />
      </Box>
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
  props: {
    color: 'gray2',
    align: 'center flex-start',
    gap: 'V',
    fontWeight: '400',
    '> *': {lineHeight: '1em'}
  },
  Value: {props: {text: '72'}},
  Unit: {props: {text: '%'}},
  __name: 'UnitValue'
};

export function UnitValue(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
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
  const dobj_Box = dobj["Value"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Unit"]
  dobj_Box_2.node = ref_Box_3.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      color="gray2"
      align="center flex-start"
      gap="V"
      fontWeight="400"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        text="72"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        text="%"
        tag="div"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
    </Box>
  );
}

const orig_3 = {
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
      align: 'center flex-start',
      gap: 'Y'
    },
    UnitValue: {
      Value: {text: '72'},
      Unit: {text: '%'}
    },
    dot: {
      props: {
        boxSize: 'W W',
        round: '100%',
        background: '#A3A3A8'
      }
    },
    UnitValue2: {
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
          color: 'gray2',
          align: 'center flex-start',
          gap: 'V',
          fontWeight: '400',
          '> *': {lineHeight: '1em'}
        },
        Value: {props: {text: '72'}},
        Unit: {props: {text: '%'}},
        __name: 'UnitValue'
      },
      props: {gap: 'X+W'},
      Value: {text: '2'},
      Unit: {text: 'Second left'}
    },
    __name: 'DoubleUnitValue'
  },
  props: {gap: 'Y2'},
  UnitValue: {
    flow: 'row-reverse',
    fontSize: 'D1',
    fontWeight: '700',
    color: 'white',
    Value: {text: '12,759'},
    Unit: {text: '$'}
  },
  dot: null,
  UnitValue2: {
    props: {
      background: 'purple',
      padding: 'Z',
      round: 'Y1',
      fontSize: 'Y2',
      gap: '0',
      color: 'white'
    },
    Value: {text: '+8.8'},
    Unit: {text: '%'}
  },
  __name: 'UnitValueWithLabel'
};

export function UnitValueWithLabel(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
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
  const dobj_Box = dobj["UnitValue"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["UnitValue2"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["UnitValue"]["Value"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["UnitValue"]["Unit"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["UnitValue2"]["Value"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["UnitValue2"]["Unit"]
  dobj_Box_6.node = ref_Box_7.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="Y2"
      align="center flex-start"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        flow="row-reverse"
        fontSize="D1"
        fontWeight="700"
        color="white"
        align="center flex-start"
        gap="V"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        Value={{
          props: {
            text: "12,759",
          },
          __ref: undefined,
        }}
        Unit={{
          props: {
            text: "$",
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
          text="12,759"
          tag="div"
          ref={ref_Box_4}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
        <Box
          text="$"
          tag="div"
          ref={ref_Box_5}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
      </Box>
      <Box
        background="purple"
        padding="Z"
        round="Y1"
        fontSize="Y2"
        gap="0"
        color="white"
        align="center flex-start"
        fontWeight="400"
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
          text="72"
          tag="div"
          ref={ref_Box_6}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        />
        <Box
          text="%"
          tag="div"
          ref={ref_Box_7}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        />
      </Box>
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
    align: 'center flex-start',
    gap: 'Y',
    fontSize: 'Z1'
  },
  Title: {
    tag: 'caption',
    props: {
      text: 'balance :',
      textTransform: 'capitalize'
    }
  },
  UnitValue: {
    textTransform: 'uppercase',
    gap: 'Y',
    color: 'currentColor',
    Value: {text: '0'},
    Unit: {text: 'bnb'}
  },
  __name: 'UnitValueWithTitle'
};

export function UnitValueWithTitle(props) {
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
  const dobj_Box = dobj["Title"]
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
      gap="Y"
      fontSize="Z1"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        text="balance :"
        textTransform="capitalize"
        tag="caption"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        textTransform="uppercase"
        gap="Y"
        color="currentColor"
        align="center flex-start"
        fontSize="Z"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        Value={{
          props: {
            text: "0",
          },
          __ref: undefined,
        }}
        Unit={{
          props: {
            text: "bnb",
          },
          __ref: undefined,
        }}
        className={`${css(flow_2(dobj_Box_2))} ${css(wrap_2(dobj_Box_2))} ${css(
          align_2(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Box
          text="0"
          tag="div"
          ref={ref_Box_4}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
        <Box
          text="bnb"
          tag="div"
          ref={ref_Box_5}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
      </Box>
    </Box>
  );
}
