import * as React from "react";
import { Box, Flex, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { create } from "@symbo.ls/create";
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
    flow: 'column',
    overflow: 'hidden',
    theme: 'dialog',
    maxHeight: 'H',
    round: 'A',
    maxWidth: 'G'
  },
  Header: {
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
      text: 'Header',
      padding: 'Z2 A',
      fontSize: 'A2',
      fontWeight: '500',
      color: 'white'
    }
  },
  Groups: {
    props: {
      position: 'relative',
      ':before, &:after': {
        content: '""',
        position: 'absolute',
        boxSize: 'A2 100%',
        zIndex: '2',
        left: '0',
        pointerEvents: 'none'
      },
      ':before': {
        top: '0',
        background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
      },
      ':after': {
        bottom: '0',
        background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
      }
    },
    Flex: {
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
        maxHeight: 'G2',
        overflow: 'auto',
        '::-webkit-scrollbar': {display: 'none'}
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
            flow: 'column',
            overflow: 'hidden',
            round: 'A',
            maxWidth: 'F1'
          },
          Title: {
            tag: 'h5',
            props: {
              position: 'sticky',
              top: '0',
              zIndex: '3',
              text: 'Group name',
              fontSize: 'Z',
              color: 'gray .92 +68',
              fontWeight: '400',
              theme: 'dialog',
              padding: 'A'
            }
          },
          List: {
            extend: {
              props: {
                position: 'relative',
                overflow: 'hidden',
                round: 'A',
                minWidth: 'F1',
                theme: 'dialog',
                ':before, &:after': {
                  content: '""',
                  position: 'absolute',
                  boxSize: 'A2 100%',
                  zIndex: '2',
                  left: '0',
                  pointerEvents: 'none'
                },
                ':before': {
                  top: '0',
                  background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
                },
                ':after': {
                  bottom: '0',
                  background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
                }
              },
              Flex: {
                props: {
                  flow: 'column',
                  maxHeight: 'F+C',
                  overflow: 'auto',
                  '::-webkit-scrollbar': {display: 'none'}
                },
                childExtend: {
                  props: {
                    padding: 'Z1 A1',
                    position: 'relative',
                    cursor: 'pointer',
                    fontSize: 'A1',
                    color: 'gray4',
                    ':hover': {
                      background: 'gray .92 +4'
                    },
                    childProps: {position: 'relative'}
                  }
                }
              }
            },
            props: {
              round: '0',
              minWidth: '100%'
            }
          }
        },
        props: {
          round: '0',
          minWidth: '100%',
          overflow: 'visible',
          background: 'transparent'
        },
        Title: {
          props: {theme: 'transparent'}
        },
        List: {
          props: {
            overflow: 'visible',
            theme: 'transparent',
            ':before': {display: 'none'},
            ':after': {display: 'none'}
          },
          Flex: {
            props: {
              style: {overflowY: 'visible'},
              minHeight: 'fit-content',
              maxHeight: 'fit-content',
              childProps: {
                ':after': {background: 'gray'}
              }
            }
          }
        }
      }
    }
  },
  __name: 'GroupList'
};

export function GroupList(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Flex = useRef(null);
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Groups"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Flex = dobj["Groups"]["Flex"]
  dobj_Flex.node = ref_Flex.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      flow="column"
      overflow="hidden"
      theme="dialog"
      maxHeight="H"
      round="A"
      maxWidth="G"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        text="Header"
        padding="Z2 A"
        fontSize="A2"
        fontWeight="500"
        color="white"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        className={`${css(flow_2(dobj_Box))} ${css(wrap_2(dobj_Box))} ${css(
          align_2(dobj_Box)
        )}`}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        position="relative"
        tag="div"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Flex
          flow="column"
          maxHeight="G2"
          overflow="auto"
          display="flex"
          ref={ref_Flex}
          className={`${css(flow_3(dobj_Flex))} ${css(wrap_3(dobj_Flex))} ${css(
            align_3(dobj_Flex)
          )}`}
          {...dobj_Flex.props}
          domqlElementObject={dobj_Flex}
        />
      </Box>
    </Box>
  );
}

const orig_2 = {
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
      overflow: 'hidden',
      theme: 'dialog',
      maxHeight: 'H',
      round: 'A',
      maxWidth: 'G'
    },
    Header: {
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
        text: 'Header',
        padding: 'Z2 A',
        fontSize: 'A2',
        fontWeight: '500',
        color: 'white'
      }
    },
    Groups: {
      props: {
        position: 'relative',
        ':before, &:after': {
          content: '""',
          position: 'absolute',
          boxSize: 'A2 100%',
          zIndex: '2',
          left: '0',
          pointerEvents: 'none'
        },
        ':before': {
          top: '0',
          background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
        },
        ':after': {
          bottom: '0',
          background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
        }
      },
      Flex: {
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
          maxHeight: 'G2',
          overflow: 'auto',
          '::-webkit-scrollbar': {display: 'none'}
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
              flow: 'column',
              overflow: 'hidden',
              round: 'A',
              maxWidth: 'F1'
            },
            Title: {
              tag: 'h5',
              props: {
                position: 'sticky',
                top: '0',
                zIndex: '3',
                text: 'Group name',
                fontSize: 'Z',
                color: 'gray .92 +68',
                fontWeight: '400',
                theme: 'dialog',
                padding: 'A'
              }
            },
            List: {
              extend: {
                props: {
                  position: 'relative',
                  overflow: 'hidden',
                  round: 'A',
                  minWidth: 'F1',
                  theme: 'dialog',
                  ':before, &:after': {
                    content: '""',
                    position: 'absolute',
                    boxSize: 'A2 100%',
                    zIndex: '2',
                    left: '0',
                    pointerEvents: 'none'
                  },
                  ':before': {
                    top: '0',
                    background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
                  },
                  ':after': {
                    bottom: '0',
                    background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
                  }
                },
                Flex: {
                  props: {
                    flow: 'column',
                    maxHeight: 'F+C',
                    overflow: 'auto',
                    '::-webkit-scrollbar': {display: 'none'}
                  },
                  childExtend: {
                    props: {
                      padding: 'Z1 A1',
                      position: 'relative',
                      cursor: 'pointer',
                      fontSize: 'A1',
                      color: 'gray4',
                      ':hover': {
                        background: 'gray .92 +4'
                      },
                      childProps: {position: 'relative'}
                    }
                  }
                }
              },
              props: {
                round: '0',
                minWidth: '100%'
              }
            }
          },
          props: {
            round: '0',
            minWidth: '100%',
            overflow: 'visible',
            background: 'transparent'
          },
          Title: {
            props: {theme: 'transparent'}
          },
          List: {
            props: {
              overflow: 'visible',
              theme: 'transparent',
              ':before': {display: 'none'},
              ':after': {display: 'none'}
            },
            Flex: {
              props: {
                style: {overflowY: 'visible'},
                minHeight: 'fit-content',
                maxHeight: 'fit-content',
                childProps: {
                  ':after': {background: 'gray'}
                }
              }
            }
          }
        }
      }
    },
    __name: 'GroupList'
  },
  Header: {},
  Groups: {
    props: {},
    Flex: {
      '0': {
        Title: null,
        List: {
          props: {},
          Flex: {
            '0': {span: {text: 'Item'}},
            '1': {span: {text: 'Item'}},
            props: {}
          }
        }
      },
      '1': {
        Title: {},
        List: {
          props: {},
          Flex: {
            '0': {span: {text: 'Item'}},
            '1': {span: {text: 'Item'}},
            '2': {span: {text: 'Item'}},
            props: {}
          }
        }
      },
      '2': {
        Title: {},
        List: {
          props: {},
          Flex: {
            '0': {span: {text: 'Item'}},
            '1': {span: {text: 'Item'}},
            '2': {span: {text: 'Item'}},
            '3': {span: {text: 'Item'}},
            '4': {span: {text: 'Item'}},
            '5': {span: {text: 'Item'}},
            '6': {span: {text: 'Item'}},
            '7': {span: {text: 'Item'}},
            '8': {span: {text: 'Item'}},
            '9': {span: {text: 'Item'}},
            '10': {span: {text: 'Item'}},
            '11': {span: {text: 'Item'}},
            '12': {span: {text: 'Item'}},
            props: {}
          }
        }
      },
      props: {}
    }
  },
  __name: 'GroupListTemplate'
};

export function GroupListTemplate(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_List = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_List_2 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_List_3 = useRef(null);
  const ref_Flex_2 = useRef(null);
  const ref_Flex_3 = useRef(null);
  const ref_Flex_4 = useRef(null);
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
  const ref_Box_27 = useRef(null);
  const ref_Box_28 = useRef(null);
  const ref_Box_29 = useRef(null);
  const ref_Box_30 = useRef(null);
  const ref_Box_31 = useRef(null);
  const ref_Box_32 = useRef(null);
  const ref_Box_33 = useRef(null);
  const ref_Box_34 = useRef(null);
  const ref_Box_35 = useRef(null);
  const ref_Box_36 = useRef(null);
  const ref_Box_37 = useRef(null);
  const ref_Box_38 = useRef(null);
  const ref_Box_39 = useRef(null);
  const ref_Box_40 = useRef(null);
  const ref_Box_41 = useRef(null);
  const ref_Box_42 = useRef(null);
  const ref_Box_43 = useRef(null);
  const ref_Box_44 = useRef(null);
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Groups"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Flex = dobj["Groups"]["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Box_3 = dobj["Groups"]["Flex"]["0"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Groups"]["Flex"]["1"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Groups"]["Flex"]["2"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_List = dobj["Groups"]["Flex"]["0"]["List"]
  dobj_List.node = ref_List.current
  const dobj_Box_6 = dobj["Groups"]["Flex"]["1"]["Title"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_List_2 = dobj["Groups"]["Flex"]["1"]["List"]
  dobj_List_2.node = ref_List_2.current
  const dobj_Box_7 = dobj["Groups"]["Flex"]["2"]["Title"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_List_3 = dobj["Groups"]["Flex"]["2"]["List"]
  dobj_List_3.node = ref_List_3.current
  const dobj_Flex_2 = dobj["Groups"]["Flex"]["0"]["List"]["Flex"]
  dobj_Flex_2.node = ref_Flex_2.current
  const dobj_Flex_3 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]
  dobj_Flex_3.node = ref_Flex_3.current
  const dobj_Flex_4 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]
  dobj_Flex_4.node = ref_Flex_4.current
  const dobj_Box_8 = dobj["Groups"]["Flex"]["0"]["List"]["Flex"]["0"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Groups"]["Flex"]["0"]["List"]["Flex"]["1"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["0"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["1"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["2"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["0"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["1"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["2"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["3"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Box_17 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["4"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Box_18 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["5"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Box_19 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["6"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Box_20 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["7"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Box_21 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["8"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Box_22 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["9"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Box_23 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["10"]
  dobj_Box_23.node = ref_Box_24.current
  const dobj_Box_24 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["11"]
  dobj_Box_24.node = ref_Box_25.current
  const dobj_Box_25 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["12"]
  dobj_Box_25.node = ref_Box_26.current
  const dobj_Box_26 = dobj["Groups"]["Flex"]["0"]["List"]["Flex"]["0"]["span"]
  dobj_Box_26.node = ref_Box_27.current
  const dobj_Box_27 = dobj["Groups"]["Flex"]["0"]["List"]["Flex"]["1"]["span"]
  dobj_Box_27.node = ref_Box_28.current
  const dobj_Box_28 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["0"]["span"]
  dobj_Box_28.node = ref_Box_29.current
  const dobj_Box_29 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["1"]["span"]
  dobj_Box_29.node = ref_Box_30.current
  const dobj_Box_30 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["2"]["span"]
  dobj_Box_30.node = ref_Box_31.current
  const dobj_Box_31 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["0"]["span"]
  dobj_Box_31.node = ref_Box_32.current
  const dobj_Box_32 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["1"]["span"]
  dobj_Box_32.node = ref_Box_33.current
  const dobj_Box_33 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["2"]["span"]
  dobj_Box_33.node = ref_Box_34.current
  const dobj_Box_34 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["3"]["span"]
  dobj_Box_34.node = ref_Box_35.current
  const dobj_Box_35 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["4"]["span"]
  dobj_Box_35.node = ref_Box_36.current
  const dobj_Box_36 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["5"]["span"]
  dobj_Box_36.node = ref_Box_37.current
  const dobj_Box_37 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["6"]["span"]
  dobj_Box_37.node = ref_Box_38.current
  const dobj_Box_38 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["7"]["span"]
  dobj_Box_38.node = ref_Box_39.current
  const dobj_Box_39 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["8"]["span"]
  dobj_Box_39.node = ref_Box_40.current
  const dobj_Box_40 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["9"]["span"]
  dobj_Box_40.node = ref_Box_41.current
  const dobj_Box_41 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["10"]["span"]
  dobj_Box_41.node = ref_Box_42.current
  const dobj_Box_42 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["11"]["span"]
  dobj_Box_42.node = ref_Box_43.current
  const dobj_Box_43 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["12"]["span"]
  dobj_Box_43.node = ref_Box_44.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      flow="column"
      overflow="hidden"
      theme="dialog"
      maxHeight="H"
      round="A"
      maxWidth="G"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        text="Header"
        padding="Z2 A"
        fontSize="A2"
        fontWeight="500"
        color="white"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        className={`${css(flow_2(dobj_Box))} ${css(wrap_2(dobj_Box))} ${css(
          align_2(dobj_Box)
        )}`}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        position="relative"
        tag="div"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Flex
          flow="column"
          maxHeight="G2"
          overflow="auto"
          display="flex"
          ref={ref_Flex}
          className={`${css(flow_3(dobj_Flex))} ${css(wrap_3(dobj_Flex))} ${css(
            align_3(dobj_Flex)
          )}`}
          {...dobj_Flex.props}
          domqlElementObject={dobj_Flex}
        >
          <Box
            round="0"
            minWidth="100%"
            overflow="visible"
            background="transparent"
            flow="column"
            maxWidth="F1"
            display="flex"
            tag="div"
            ref={ref_Box_4}
            className={`${css(flow_4(dobj_Box_3))} ${css(
              wrap_4(dobj_Box_3)
            )} ${css(align_4(dobj_Box_3))}`}
            {...dobj_Box_3.props}
            domqlElementObject={dobj_Box_3}
          >
            <List
              overflow="visible"
              theme="transparent"
              round="0"
              minWidth="100%"
              position="relative"
              ref={ref_List}
              {...dobj_List.props}
              domqlElementObject={dobj_List}
            >
              <Flex
                minHeight="fit-content"
                maxHeight="fit-content"
                flow="column"
                overflow="auto"
                display="flex"
                ref={ref_Flex_2}
                style={{
                  overflowY: "visible",
                }}
                childProps={{
                  ":after": {
                    background: "gray",
                  },
                }}
                className={`${css(flow_7(dobj_Flex_2))} ${css(
                  wrap_7(dobj_Flex_2)
                )} ${css(align_7(dobj_Flex_2))}`}
                {...dobj_Flex_2.props}
                domqlElementObject={dobj_Flex_2}
              >
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_9}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_8.props}
                  domqlElementObject={dobj_Box_8}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_27}
                    {...dobj_Box_26.props}
                    domqlElementObject={dobj_Box_26}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_10}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_9.props}
                  domqlElementObject={dobj_Box_9}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_28}
                    {...dobj_Box_27.props}
                    domqlElementObject={dobj_Box_27}
                  />
                </Box>
              </Flex>
            </List>
          </Box>
          <Box
            round="0"
            minWidth="100%"
            overflow="visible"
            background="transparent"
            flow="column"
            maxWidth="F1"
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
              theme="transparent"
              position="sticky"
              top="0"
              zIndex="3"
              text="Group name"
              fontSize="Z"
              color="gray .92 +68"
              fontWeight="400"
              padding="A"
              tag="h5"
              ref={ref_Box_7}
              {...dobj_Box_6.props}
              domqlElementObject={dobj_Box_6}
            />
            <List
              overflow="visible"
              theme="transparent"
              round="0"
              minWidth="100%"
              position="relative"
              ref={ref_List_2}
              {...dobj_List_2.props}
              domqlElementObject={dobj_List_2}
            >
              <Flex
                minHeight="fit-content"
                maxHeight="fit-content"
                flow="column"
                overflow="auto"
                display="flex"
                ref={ref_Flex_3}
                style={{
                  overflowY: "visible",
                }}
                childProps={{
                  ":after": {
                    background: "gray",
                  },
                }}
                className={`${css(flow_8(dobj_Flex_3))} ${css(
                  wrap_8(dobj_Flex_3)
                )} ${css(align_8(dobj_Flex_3))}`}
                {...dobj_Flex_3.props}
                domqlElementObject={dobj_Flex_3}
              >
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_11}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_10.props}
                  domqlElementObject={dobj_Box_10}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_29}
                    {...dobj_Box_28.props}
                    domqlElementObject={dobj_Box_28}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_12}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_11.props}
                  domqlElementObject={dobj_Box_11}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_30}
                    {...dobj_Box_29.props}
                    domqlElementObject={dobj_Box_29}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_13}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_12.props}
                  domqlElementObject={dobj_Box_12}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_31}
                    {...dobj_Box_30.props}
                    domqlElementObject={dobj_Box_30}
                  />
                </Box>
              </Flex>
            </List>
          </Box>
          <Box
            round="0"
            minWidth="100%"
            overflow="visible"
            background="transparent"
            flow="column"
            maxWidth="F1"
            display="flex"
            tag="div"
            ref={ref_Box_6}
            className={`${css(flow_6(dobj_Box_5))} ${css(
              wrap_6(dobj_Box_5)
            )} ${css(align_6(dobj_Box_5))}`}
            {...dobj_Box_5.props}
            domqlElementObject={dobj_Box_5}
          >
            <Box
              theme="transparent"
              position="sticky"
              top="0"
              zIndex="3"
              text="Group name"
              fontSize="Z"
              color="gray .92 +68"
              fontWeight="400"
              padding="A"
              tag="h5"
              ref={ref_Box_8}
              {...dobj_Box_7.props}
              domqlElementObject={dobj_Box_7}
            />
            <List
              overflow="visible"
              theme="transparent"
              round="0"
              minWidth="100%"
              position="relative"
              ref={ref_List_3}
              {...dobj_List_3.props}
              domqlElementObject={dobj_List_3}
            >
              <Flex
                minHeight="fit-content"
                maxHeight="fit-content"
                flow="column"
                overflow="auto"
                display="flex"
                ref={ref_Flex_4}
                style={{
                  overflowY: "visible",
                }}
                childProps={{
                  ":after": {
                    background: "gray",
                  },
                }}
                className={`${css(flow_9(dobj_Flex_4))} ${css(
                  wrap_9(dobj_Flex_4)
                )} ${css(align_9(dobj_Flex_4))}`}
                {...dobj_Flex_4.props}
                domqlElementObject={dobj_Flex_4}
              >
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_14}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_13.props}
                  domqlElementObject={dobj_Box_13}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_32}
                    {...dobj_Box_31.props}
                    domqlElementObject={dobj_Box_31}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_15}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_14.props}
                  domqlElementObject={dobj_Box_14}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_33}
                    {...dobj_Box_32.props}
                    domqlElementObject={dobj_Box_32}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_16}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_15.props}
                  domqlElementObject={dobj_Box_15}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_34}
                    {...dobj_Box_33.props}
                    domqlElementObject={dobj_Box_33}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_17}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_16.props}
                  domqlElementObject={dobj_Box_16}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_35}
                    {...dobj_Box_34.props}
                    domqlElementObject={dobj_Box_34}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_18}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_17.props}
                  domqlElementObject={dobj_Box_17}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_36}
                    {...dobj_Box_35.props}
                    domqlElementObject={dobj_Box_35}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_19}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_18.props}
                  domqlElementObject={dobj_Box_18}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_37}
                    {...dobj_Box_36.props}
                    domqlElementObject={dobj_Box_36}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_20}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_19.props}
                  domqlElementObject={dobj_Box_19}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_38}
                    {...dobj_Box_37.props}
                    domqlElementObject={dobj_Box_37}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_21}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_20.props}
                  domqlElementObject={dobj_Box_20}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_39}
                    {...dobj_Box_38.props}
                    domqlElementObject={dobj_Box_38}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_22}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_21.props}
                  domqlElementObject={dobj_Box_21}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_40}
                    {...dobj_Box_39.props}
                    domqlElementObject={dobj_Box_39}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_23}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_22.props}
                  domqlElementObject={dobj_Box_22}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_41}
                    {...dobj_Box_40.props}
                    domqlElementObject={dobj_Box_40}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_24}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_23.props}
                  domqlElementObject={dobj_Box_23}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_42}
                    {...dobj_Box_41.props}
                    domqlElementObject={dobj_Box_41}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_25}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_24.props}
                  domqlElementObject={dobj_Box_24}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_43}
                    {...dobj_Box_42.props}
                    domqlElementObject={dobj_Box_42}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_26}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_25.props}
                  domqlElementObject={dobj_Box_25}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_44}
                    {...dobj_Box_43.props}
                    domqlElementObject={dobj_Box_43}
                  />
                </Box>
              </Flex>
            </List>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

import { Search, Input } from "@symbo.ls/react";
import { Svg } from "@symbo.ls/react-atoms";

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
      flow: 'column',
      overflow: 'hidden',
      theme: 'dialog',
      maxHeight: 'H',
      round: 'A',
      maxWidth: 'G'
    },
    Header: {
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
        text: 'Header',
        padding: 'Z2 A',
        fontSize: 'A2',
        fontWeight: '500',
        color: 'white'
      }
    },
    Groups: {
      props: {
        position: 'relative',
        ':before, &:after': {
          content: '""',
          position: 'absolute',
          boxSize: 'A2 100%',
          zIndex: '2',
          left: '0',
          pointerEvents: 'none'
        },
        ':before': {
          top: '0',
          background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
        },
        ':after': {
          bottom: '0',
          background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
        }
      },
      Flex: {
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
          maxHeight: 'G2',
          overflow: 'auto',
          '::-webkit-scrollbar': {display: 'none'}
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
              flow: 'column',
              overflow: 'hidden',
              round: 'A',
              maxWidth: 'F1'
            },
            Title: {
              tag: 'h5',
              props: {
                position: 'sticky',
                top: '0',
                zIndex: '3',
                text: 'Group name',
                fontSize: 'Z',
                color: 'gray .92 +68',
                fontWeight: '400',
                theme: 'dialog',
                padding: 'A'
              }
            },
            List: {
              extend: {
                props: {
                  position: 'relative',
                  overflow: 'hidden',
                  round: 'A',
                  minWidth: 'F1',
                  theme: 'dialog',
                  ':before, &:after': {
                    content: '""',
                    position: 'absolute',
                    boxSize: 'A2 100%',
                    zIndex: '2',
                    left: '0',
                    pointerEvents: 'none'
                  },
                  ':before': {
                    top: '0',
                    background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
                  },
                  ':after': {
                    bottom: '0',
                    background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
                  }
                },
                Flex: {
                  props: {
                    flow: 'column',
                    maxHeight: 'F+C',
                    overflow: 'auto',
                    '::-webkit-scrollbar': {display: 'none'}
                  },
                  childExtend: {
                    props: {
                      padding: 'Z1 A1',
                      position: 'relative',
                      cursor: 'pointer',
                      fontSize: 'A1',
                      color: 'gray4',
                      ':hover': {
                        background: 'gray .92 +4'
                      },
                      childProps: {position: 'relative'}
                    }
                  }
                }
              },
              props: {
                round: '0',
                minWidth: '100%'
              }
            }
          },
          props: {
            round: '0',
            minWidth: '100%',
            overflow: 'visible',
            background: 'transparent'
          },
          Title: {
            props: {theme: 'transparent'}
          },
          List: {
            props: {
              overflow: 'visible',
              theme: 'transparent',
              ':before': {display: 'none'},
              ':after': {display: 'none'}
            },
            Flex: {
              props: {
                style: {overflowY: 'visible'},
                minHeight: 'fit-content',
                maxHeight: 'fit-content',
                childProps: {
                  ':after': {background: 'gray'}
                }
              }
            }
          }
        }
      }
    },
    __name: 'GroupList'
  },
  props: {maxWidth: 'G1'},
  Header: {},
  SearchContainer: {
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
      padding: '0 Z1 Y2 Z1',
      background: 'transparent'
    },
    Search: {
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
          }
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
        }
      },
      props: {
        maxWidth: '100%',
        minWidth: '100%',
        minHeight: 'C',
        theme: 'transparent',
        round: 'Z1'
      },
      Icon: {
        props: {
          fontSize: 'C',
          color: 'gray2'
        }
      },
      Input: {fontSize: 'Z'}
    }
  },
  Groups: {
    Flex: {
      childExtend: {
        Title: {},
        List: {
          Flex: {
            childExtend: {props: {}}
          }
        }
      }
    }
  },
  __name: 'GroupListWithSearch'
};

export function GroupListWithSearch(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Search = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Input = useRef(null);
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["SearchContainer"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Groups"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Search = dobj["SearchContainer"]["Search"]
  dobj_Search.node = ref_Search.current
  const dobj_Flex = dobj["Groups"]["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["SearchContainer"]["Search"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Input = dobj["SearchContainer"]["Search"]["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Box_4 = dobj["SearchContainer"]["Search"]["Input"]["fontSize"]
  dobj_Box_4.node = ref_Box_5.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      maxWidth="G1"
      flow="column"
      overflow="hidden"
      theme="dialog"
      maxHeight="H"
      round="A"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        text="Header"
        padding="Z2 A"
        fontSize="A2"
        fontWeight="500"
        color="white"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        className={`${css(flow_2(dobj_Box))} ${css(wrap_2(dobj_Box))} ${css(
          align_2(dobj_Box)
        )}`}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        padding="0 Z1 Y2 Z1"
        background="transparent"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Search
          maxWidth="100%"
          minWidth="100%"
          minHeight="C"
          theme="transparent"
          round="Z1"
          gap="Z"
          padding="Z+V Z+V2"
          align="center flex-start"
          boxSizing="border-box"
          border="solid, gray .45 +80"
          borderWidth=".8px"
          position="relative"
          outline="solid, 0, blue .3"
          display="flex"
          ref={ref_Search}
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
          className={`${css(flow_4(dobj_Search))} ${css(
            wrap_4(dobj_Search)
          )} ${css(align_4(dobj_Search))}`}
          {...dobj_Search.props}
          placeholder={attr_placeholder(dobj_Search)}
          tabIndex={attr_tabIndex(dobj_Search)}
          domqlElementObject={dobj_Search}
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
          >
            <Box
              inheritedString="Z"
              tag="string"
              ref={ref_Box_5}
              {...dobj_Box_4.props}
              domqlElementObject={dobj_Box_4}
            />
          </Input>
        </Search>
      </Box>
      <Box
        position="relative"
        tag="div"
        ref={ref_Box_4}
        {...dobj_Box_3.props}
        domqlElementObject={dobj_Box_3}
      >
        <Flex
          flow="column"
          maxHeight="G2"
          overflow="auto"
          display="flex"
          ref={ref_Flex}
          className={`${css(flow_5(dobj_Flex))} ${css(wrap_5(dobj_Flex))} ${css(
            align_5(dobj_Flex)
          )}`}
          {...dobj_Flex.props}
          domqlElementObject={dobj_Flex}
        />
      </Box>
    </Box>
  );
}

const orig_4 = {
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
        flow: 'column',
        overflow: 'hidden',
        theme: 'dialog',
        maxHeight: 'H',
        round: 'A',
        maxWidth: 'G'
      },
      Header: {
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
          text: 'Header',
          padding: 'Z2 A',
          fontSize: 'A2',
          fontWeight: '500',
          color: 'white'
        }
      },
      Groups: {
        props: {
          position: 'relative',
          ':before, &:after': {
            content: '""',
            position: 'absolute',
            boxSize: 'A2 100%',
            zIndex: '2',
            left: '0',
            pointerEvents: 'none'
          },
          ':before': {
            top: '0',
            background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
          },
          ':after': {
            bottom: '0',
            background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
          }
        },
        Flex: {
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
            maxHeight: 'G2',
            overflow: 'auto',
            '::-webkit-scrollbar': {display: 'none'}
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
                flow: 'column',
                overflow: 'hidden',
                round: 'A',
                maxWidth: 'F1'
              },
              Title: {
                tag: 'h5',
                props: {
                  position: 'sticky',
                  top: '0',
                  zIndex: '3',
                  text: 'Group name',
                  fontSize: 'Z',
                  color: 'gray .92 +68',
                  fontWeight: '400',
                  theme: 'dialog',
                  padding: 'A'
                }
              },
              List: {
                extend: {
                  props: {
                    position: 'relative',
                    overflow: 'hidden',
                    round: 'A',
                    minWidth: 'F1',
                    theme: 'dialog',
                    ':before, &:after': {
                      content: '""',
                      position: 'absolute',
                      boxSize: 'A2 100%',
                      zIndex: '2',
                      left: '0',
                      pointerEvents: 'none'
                    },
                    ':before': {
                      top: '0',
                      background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
                    },
                    ':after': {
                      bottom: '0',
                      background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
                    }
                  },
                  Flex: {
                    props: {
                      flow: 'column',
                      maxHeight: 'F+C',
                      overflow: 'auto',
                      '::-webkit-scrollbar': {display: 'none'}
                    },
                    childExtend: {
                      props: {
                        padding: 'Z1 A1',
                        position: 'relative',
                        cursor: 'pointer',
                        fontSize: 'A1',
                        color: 'gray4',
                        ':hover': {
                          background: 'gray .92 +4'
                        },
                        childProps: {position: 'relative'}
                      }
                    }
                  }
                },
                props: {
                  round: '0',
                  minWidth: '100%'
                }
              }
            },
            props: {
              round: '0',
              minWidth: '100%',
              overflow: 'visible',
              background: 'transparent'
            },
            Title: {
              props: {theme: 'transparent'}
            },
            List: {
              props: {
                overflow: 'visible',
                theme: 'transparent',
                ':before': {display: 'none'},
                ':after': {display: 'none'}
              },
              Flex: {
                props: {
                  style: {overflowY: 'visible'},
                  minHeight: 'fit-content',
                  maxHeight: 'fit-content',
                  childProps: {
                    ':after': {background: 'gray'}
                  }
                }
              }
            }
          }
        }
      },
      __name: 'GroupList'
    },
    props: {maxWidth: 'G1'},
    Header: {},
    SearchContainer: {
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
        padding: '0 Z1 Y2 Z1',
        background: 'transparent'
      },
      Search: {
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
            }
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
          }
        },
        props: {
          maxWidth: '100%',
          minWidth: '100%',
          minHeight: 'C',
          theme: 'transparent',
          round: 'Z1'
        },
        Icon: {
          props: {
            fontSize: 'C',
            color: 'gray2'
          }
        },
        Input: {fontSize: 'Z'}
      }
    },
    Groups: {
      Flex: {
        childExtend: {
          Title: {},
          List: {
            Flex: {
              childExtend: {props: {}}
            }
          }
        }
      }
    },
    __name: 'GroupListWithSearch'
  },
  Header: {},
  SearchContainer: {},
  Groups: {
    Flex: {
      '0': {
        Title: null,
        List: {
          Flex: {
            '0': {span: {text: 'Item'}},
            '1': {span: {text: 'Item'}}
          }
        }
      },
      '1': {
        Title: {},
        List: {
          Flex: {
            '0': {span: {text: 'Item'}},
            '1': {span: {text: 'Item'}},
            '2': {span: {text: 'Item'}}
          }
        }
      },
      '2': {
        Title: {},
        List: {
          Flex: {
            '0': {span: {text: 'Item'}},
            '1': {span: {text: 'Item'}},
            '2': {span: {text: 'Item'}},
            '3': {span: {text: 'Item'}},
            '4': {span: {text: 'Item'}}
          }
        }
      }
    }
  },
  __name: 'GroupListWithSearchTemplate'
};

export function GroupListWithSearchTemplate(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Search = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Input = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_List = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_List_2 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_List_3 = useRef(null);
  const ref_Flex_2 = useRef(null);
  const ref_Flex_3 = useRef(null);
  const ref_Flex_4 = useRef(null);
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
  const ref_Box_27 = useRef(null);
  const ref_Box_28 = useRef(null);
  const ref_Box_29 = useRef(null);
  const ref_Box_30 = useRef(null);
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["SearchContainer"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Groups"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Search = dobj["SearchContainer"]["Search"]
  dobj_Search.node = ref_Search.current
  const dobj_Flex = dobj["Groups"]["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Svg = dobj["SearchContainer"]["Search"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Input = dobj["SearchContainer"]["Search"]["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Box_4 = dobj["Groups"]["Flex"]["0"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Groups"]["Flex"]["1"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Groups"]["Flex"]["2"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["SearchContainer"]["Search"]["Input"]["fontSize"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_List = dobj["Groups"]["Flex"]["0"]["List"]
  dobj_List.node = ref_List.current
  const dobj_Box_8 = dobj["Groups"]["Flex"]["1"]["Title"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_List_2 = dobj["Groups"]["Flex"]["1"]["List"]
  dobj_List_2.node = ref_List_2.current
  const dobj_Box_9 = dobj["Groups"]["Flex"]["2"]["Title"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_List_3 = dobj["Groups"]["Flex"]["2"]["List"]
  dobj_List_3.node = ref_List_3.current
  const dobj_Flex_2 = dobj["Groups"]["Flex"]["0"]["List"]["Flex"]
  dobj_Flex_2.node = ref_Flex_2.current
  const dobj_Flex_3 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]
  dobj_Flex_3.node = ref_Flex_3.current
  const dobj_Flex_4 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]
  dobj_Flex_4.node = ref_Flex_4.current
  const dobj_Box_10 = dobj["Groups"]["Flex"]["0"]["List"]["Flex"]["0"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Groups"]["Flex"]["0"]["List"]["Flex"]["1"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["0"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["1"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["2"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["0"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["1"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Box_17 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["2"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Box_18 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["3"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Box_19 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["4"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Box_20 = dobj["Groups"]["Flex"]["0"]["List"]["Flex"]["0"]["span"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Box_21 = dobj["Groups"]["Flex"]["0"]["List"]["Flex"]["1"]["span"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Box_22 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["0"]["span"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Box_23 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["1"]["span"]
  dobj_Box_23.node = ref_Box_24.current
  const dobj_Box_24 = dobj["Groups"]["Flex"]["1"]["List"]["Flex"]["2"]["span"]
  dobj_Box_24.node = ref_Box_25.current
  const dobj_Box_25 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["0"]["span"]
  dobj_Box_25.node = ref_Box_26.current
  const dobj_Box_26 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["1"]["span"]
  dobj_Box_26.node = ref_Box_27.current
  const dobj_Box_27 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["2"]["span"]
  dobj_Box_27.node = ref_Box_28.current
  const dobj_Box_28 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["3"]["span"]
  dobj_Box_28.node = ref_Box_29.current
  const dobj_Box_29 = dobj["Groups"]["Flex"]["2"]["List"]["Flex"]["4"]["span"]
  dobj_Box_29.node = ref_Box_30.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      maxWidth="G1"
      flow="column"
      overflow="hidden"
      theme="dialog"
      maxHeight="H"
      round="A"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        text="Header"
        padding="Z2 A"
        fontSize="A2"
        fontWeight="500"
        color="white"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        className={`${css(flow_2(dobj_Box))} ${css(wrap_2(dobj_Box))} ${css(
          align_2(dobj_Box)
        )}`}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        padding="0 Z1 Y2 Z1"
        background="transparent"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        className={`${css(flow_3(dobj_Box_2))} ${css(wrap_3(dobj_Box_2))} ${css(
          align_3(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      >
        <Search
          maxWidth="100%"
          minWidth="100%"
          minHeight="C"
          theme="transparent"
          round="Z1"
          gap="Z"
          padding="Z+V Z+V2"
          align="center flex-start"
          boxSizing="border-box"
          border="solid, gray .45 +80"
          borderWidth=".8px"
          position="relative"
          outline="solid, 0, blue .3"
          display="flex"
          ref={ref_Search}
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
          className={`${css(flow_4(dobj_Search))} ${css(
            wrap_4(dobj_Search)
          )} ${css(align_4(dobj_Search))}`}
          {...dobj_Search.props}
          placeholder={attr_placeholder(dobj_Search)}
          tabIndex={attr_tabIndex(dobj_Search)}
          domqlElementObject={dobj_Search}
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
          >
            <Box
              inheritedString="Z"
              tag="string"
              ref={ref_Box_8}
              {...dobj_Box_7.props}
              domqlElementObject={dobj_Box_7}
            />
          </Input>
        </Search>
      </Box>
      <Box
        position="relative"
        tag="div"
        ref={ref_Box_4}
        {...dobj_Box_3.props}
        domqlElementObject={dobj_Box_3}
      >
        <Flex
          flow="column"
          maxHeight="G2"
          overflow="auto"
          display="flex"
          ref={ref_Flex}
          className={`${css(flow_5(dobj_Flex))} ${css(wrap_5(dobj_Flex))} ${css(
            align_5(dobj_Flex)
          )}`}
          {...dobj_Flex.props}
          domqlElementObject={dobj_Flex}
        >
          <Box
            round="0"
            minWidth="100%"
            overflow="visible"
            background="transparent"
            flow="column"
            maxWidth="F1"
            display="flex"
            tag="div"
            ref={ref_Box_5}
            className={`${css(flow_6(dobj_Box_4))} ${css(
              wrap_6(dobj_Box_4)
            )} ${css(align_6(dobj_Box_4))}`}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          >
            <List
              overflow="visible"
              theme="transparent"
              round="0"
              minWidth="100%"
              position="relative"
              ref={ref_List}
              {...dobj_List.props}
              domqlElementObject={dobj_List}
            >
              <Flex
                minHeight="fit-content"
                maxHeight="fit-content"
                flow="column"
                overflow="auto"
                display="flex"
                ref={ref_Flex_2}
                style={{
                  overflowY: "visible",
                }}
                childProps={{
                  ":after": {
                    background: "gray",
                  },
                }}
                className={`${css(flow_9(dobj_Flex_2))} ${css(
                  wrap_9(dobj_Flex_2)
                )} ${css(align_9(dobj_Flex_2))}`}
                {...dobj_Flex_2.props}
                domqlElementObject={dobj_Flex_2}
              >
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_11}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_10.props}
                  domqlElementObject={dobj_Box_10}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_21}
                    {...dobj_Box_20.props}
                    domqlElementObject={dobj_Box_20}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_12}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_11.props}
                  domqlElementObject={dobj_Box_11}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_22}
                    {...dobj_Box_21.props}
                    domqlElementObject={dobj_Box_21}
                  />
                </Box>
              </Flex>
            </List>
          </Box>
          <Box
            round="0"
            minWidth="100%"
            overflow="visible"
            background="transparent"
            flow="column"
            maxWidth="F1"
            display="flex"
            tag="div"
            ref={ref_Box_6}
            className={`${css(flow_7(dobj_Box_5))} ${css(
              wrap_7(dobj_Box_5)
            )} ${css(align_7(dobj_Box_5))}`}
            {...dobj_Box_5.props}
            domqlElementObject={dobj_Box_5}
          >
            <Box
              theme="transparent"
              position="sticky"
              top="0"
              zIndex="3"
              text="Group name"
              fontSize="Z"
              color="gray .92 +68"
              fontWeight="400"
              padding="A"
              tag="h5"
              ref={ref_Box_9}
              {...dobj_Box_8.props}
              domqlElementObject={dobj_Box_8}
            />
            <List
              overflow="visible"
              theme="transparent"
              round="0"
              minWidth="100%"
              position="relative"
              ref={ref_List_2}
              {...dobj_List_2.props}
              domqlElementObject={dobj_List_2}
            >
              <Flex
                minHeight="fit-content"
                maxHeight="fit-content"
                flow="column"
                overflow="auto"
                display="flex"
                ref={ref_Flex_3}
                style={{
                  overflowY: "visible",
                }}
                childProps={{
                  ":after": {
                    background: "gray",
                  },
                }}
                className={`${css(flow_10(dobj_Flex_3))} ${css(
                  wrap_10(dobj_Flex_3)
                )} ${css(align_10(dobj_Flex_3))}`}
                {...dobj_Flex_3.props}
                domqlElementObject={dobj_Flex_3}
              >
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_13}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_12.props}
                  domqlElementObject={dobj_Box_12}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_23}
                    {...dobj_Box_22.props}
                    domqlElementObject={dobj_Box_22}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_14}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_13.props}
                  domqlElementObject={dobj_Box_13}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_24}
                    {...dobj_Box_23.props}
                    domqlElementObject={dobj_Box_23}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_15}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_14.props}
                  domqlElementObject={dobj_Box_14}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_25}
                    {...dobj_Box_24.props}
                    domqlElementObject={dobj_Box_24}
                  />
                </Box>
              </Flex>
            </List>
          </Box>
          <Box
            round="0"
            minWidth="100%"
            overflow="visible"
            background="transparent"
            flow="column"
            maxWidth="F1"
            display="flex"
            tag="div"
            ref={ref_Box_7}
            className={`${css(flow_8(dobj_Box_6))} ${css(
              wrap_8(dobj_Box_6)
            )} ${css(align_8(dobj_Box_6))}`}
            {...dobj_Box_6.props}
            domqlElementObject={dobj_Box_6}
          >
            <Box
              theme="transparent"
              position="sticky"
              top="0"
              zIndex="3"
              text="Group name"
              fontSize="Z"
              color="gray .92 +68"
              fontWeight="400"
              padding="A"
              tag="h5"
              ref={ref_Box_10}
              {...dobj_Box_9.props}
              domqlElementObject={dobj_Box_9}
            />
            <List
              overflow="visible"
              theme="transparent"
              round="0"
              minWidth="100%"
              position="relative"
              ref={ref_List_3}
              {...dobj_List_3.props}
              domqlElementObject={dobj_List_3}
            >
              <Flex
                minHeight="fit-content"
                maxHeight="fit-content"
                flow="column"
                overflow="auto"
                display="flex"
                ref={ref_Flex_4}
                style={{
                  overflowY: "visible",
                }}
                childProps={{
                  ":after": {
                    background: "gray",
                  },
                }}
                className={`${css(flow_11(dobj_Flex_4))} ${css(
                  wrap_11(dobj_Flex_4)
                )} ${css(align_11(dobj_Flex_4))}`}
                {...dobj_Flex_4.props}
                domqlElementObject={dobj_Flex_4}
              >
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_16}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_15.props}
                  domqlElementObject={dobj_Box_15}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_26}
                    {...dobj_Box_25.props}
                    domqlElementObject={dobj_Box_25}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_17}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_16.props}
                  domqlElementObject={dobj_Box_16}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_27}
                    {...dobj_Box_26.props}
                    domqlElementObject={dobj_Box_26}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_18}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_17.props}
                  domqlElementObject={dobj_Box_17}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_28}
                    {...dobj_Box_27.props}
                    domqlElementObject={dobj_Box_27}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_19}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_18.props}
                  domqlElementObject={dobj_Box_18}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_29}
                    {...dobj_Box_28.props}
                    domqlElementObject={dobj_Box_28}
                  />
                </Box>
                <Box
                  padding="Z1 A1"
                  position="relative"
                  cursor="pointer"
                  fontSize="A1"
                  color="gray4"
                  tag="div"
                  ref={ref_Box_20}
                  childProps={{
                    position: "relative",
                  }}
                  {...dobj_Box_19.props}
                  domqlElementObject={dobj_Box_19}
                >
                  <Box
                    position="relative"
                    tag="span"
                    ref={ref_Box_30}
                    {...dobj_Box_29.props}
                    domqlElementObject={dobj_Box_29}
                  />
                </Box>
              </Flex>
            </List>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

const orig_5 = {
  props: {
    position: 'relative',
    overflow: 'hidden',
    round: 'A',
    minWidth: 'F1',
    theme: 'dialog',
    ':before, &:after': {
      content: '""',
      position: 'absolute',
      boxSize: 'A2 100%',
      zIndex: '2',
      left: '0',
      pointerEvents: 'none'
    },
    ':before': {
      top: '0',
      background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
    },
    ':after': {
      bottom: '0',
      background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
    }
  },
  Flex: {
    props: {
      flow: 'column',
      maxHeight: 'F+C',
      overflow: 'auto',
      '::-webkit-scrollbar': {display: 'none'}
    },
    childExtend: {
      props: {
        padding: 'Z1 A1',
        position: 'relative',
        cursor: 'pointer',
        fontSize: 'A1',
        color: 'gray4',
        ':hover': {
          background: 'gray .92 +4'
        },
        childProps: {position: 'relative'}
      }
    }
  },
  __name: 'List'
};

export function List(props) {
  const ref_Box = useRef(null);
  const ref_Flex = useRef(null);
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
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      position="relative"
      overflow="hidden"
      round="A"
      minWidth="F1"
      theme="dialog"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Flex
        flow="column"
        maxHeight="F+C"
        overflow="auto"
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

const orig_6 = {
  extend: {
    props: {
      position: 'relative',
      overflow: 'hidden',
      round: 'A',
      minWidth: 'F1',
      theme: 'dialog',
      ':before, &:after': {
        content: '""',
        position: 'absolute',
        boxSize: 'A2 100%',
        zIndex: '2',
        left: '0',
        pointerEvents: 'none'
      },
      ':before': {
        top: '0',
        background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
      },
      ':after': {
        bottom: '0',
        background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
      }
    },
    Flex: {
      props: {
        flow: 'column',
        maxHeight: 'F+C',
        overflow: 'auto',
        '::-webkit-scrollbar': {display: 'none'}
      },
      childExtend: {
        props: {
          padding: 'Z1 A1',
          position: 'relative',
          cursor: 'pointer',
          fontSize: 'A1',
          color: 'gray4',
          ':hover': {
            background: 'gray .92 +4'
          },
          childProps: {position: 'relative'}
        }
      }
    },
    __name: 'List'
  },
  props: {maxWidth: 'F'},
  Flex: {
    '0': {span: {text: 'Item'}},
    '1': {span: {text: 'Item'}},
    '2': {span: {text: 'Item'}},
    '3': {span: {text: 'Item'}},
    '4': {span: {text: 'Item'}},
    '5': {span: {text: 'Item'}},
    '6': {span: {text: 'Item'}},
    '7': {span: {text: 'Item'}},
    '8': {span: {text: 'Item'}},
    '9': {span: {text: 'Item'}},
    '10': {span: {text: 'Item'}},
    '11': {span: {text: 'Item'}},
    '12': {span: {text: 'Item'}}
  },
  __name: 'ListTemplate'
};

export function ListTemplate(props) {
  const ref_Box = useRef(null);
  const ref_Flex = useRef(null);
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
  const ref_Box_27 = useRef(null);
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
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Box = dobj["Flex"]["0"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Flex"]["1"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Flex"]["2"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Flex"]["3"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Flex"]["4"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Flex"]["5"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Flex"]["6"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Flex"]["7"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Flex"]["8"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Flex"]["9"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Flex"]["10"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Flex"]["11"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["Flex"]["12"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["Flex"]["0"]["span"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["Flex"]["1"]["span"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["Flex"]["2"]["span"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Box_17 = dobj["Flex"]["3"]["span"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Box_18 = dobj["Flex"]["4"]["span"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Box_19 = dobj["Flex"]["5"]["span"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Box_20 = dobj["Flex"]["6"]["span"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Box_21 = dobj["Flex"]["7"]["span"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Box_22 = dobj["Flex"]["8"]["span"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Box_23 = dobj["Flex"]["9"]["span"]
  dobj_Box_23.node = ref_Box_24.current
  const dobj_Box_24 = dobj["Flex"]["10"]["span"]
  dobj_Box_24.node = ref_Box_25.current
  const dobj_Box_25 = dobj["Flex"]["11"]["span"]
  dobj_Box_25.node = ref_Box_26.current
  const dobj_Box_26 = dobj["Flex"]["12"]["span"]
  dobj_Box_26.node = ref_Box_27.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      maxWidth="F"
      position="relative"
      overflow="hidden"
      round="A"
      minWidth="F1"
      theme="dialog"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Flex
        flow="column"
        maxHeight="F+C"
        overflow="auto"
        display="flex"
        ref={ref_Flex}
        className={`${css(flow(dobj_Flex))} ${css(wrap(dobj_Flex))} ${css(
          align(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_2}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box.props}
          domqlElementObject={dobj_Box}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_15}
            {...dobj_Box_14.props}
            domqlElementObject={dobj_Box_14}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_3}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_16}
            {...dobj_Box_15.props}
            domqlElementObject={dobj_Box_15}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_4}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_17}
            {...dobj_Box_16.props}
            domqlElementObject={dobj_Box_16}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_5}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_18}
            {...dobj_Box_17.props}
            domqlElementObject={dobj_Box_17}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_6}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_19}
            {...dobj_Box_18.props}
            domqlElementObject={dobj_Box_18}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_7}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_20}
            {...dobj_Box_19.props}
            domqlElementObject={dobj_Box_19}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_8}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_7.props}
          domqlElementObject={dobj_Box_7}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_21}
            {...dobj_Box_20.props}
            domqlElementObject={dobj_Box_20}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_9}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_8.props}
          domqlElementObject={dobj_Box_8}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_22}
            {...dobj_Box_21.props}
            domqlElementObject={dobj_Box_21}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_10}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_9.props}
          domqlElementObject={dobj_Box_9}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_23}
            {...dobj_Box_22.props}
            domqlElementObject={dobj_Box_22}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_11}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_10.props}
          domqlElementObject={dobj_Box_10}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_24}
            {...dobj_Box_23.props}
            domqlElementObject={dobj_Box_23}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_12}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_11.props}
          domqlElementObject={dobj_Box_11}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_25}
            {...dobj_Box_24.props}
            domqlElementObject={dobj_Box_24}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_13}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_12.props}
          domqlElementObject={dobj_Box_12}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_26}
            {...dobj_Box_25.props}
            domqlElementObject={dobj_Box_25}
          />
        </Box>
        <Box
          padding="Z1 A1"
          position="relative"
          cursor="pointer"
          fontSize="A1"
          color="gray4"
          tag="div"
          ref={ref_Box_14}
          childProps={{
            position: "relative",
          }}
          {...dobj_Box_13.props}
          domqlElementObject={dobj_Box_13}
        >
          <Box
            position="relative"
            tag="span"
            ref={ref_Box_27}
            {...dobj_Box_26.props}
            domqlElementObject={dobj_Box_26}
          />
        </Box>
      </Flex>
    </Box>
  );
}

const orig_7 = {
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
    overflow: 'hidden',
    round: 'A',
    maxWidth: 'F1'
  },
  Title: {
    tag: 'h5',
    props: {
      position: 'sticky',
      top: '0',
      zIndex: '3',
      text: 'Group name',
      fontSize: 'Z',
      color: 'gray .92 +68',
      fontWeight: '400',
      theme: 'dialog',
      padding: 'A'
    }
  },
  List: {
    extend: {
      props: {
        position: 'relative',
        overflow: 'hidden',
        round: 'A',
        minWidth: 'F1',
        theme: 'dialog',
        ':before, &:after': {
          content: '""',
          position: 'absolute',
          boxSize: 'A2 100%',
          zIndex: '2',
          left: '0',
          pointerEvents: 'none'
        },
        ':before': {
          top: '0',
          background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
        },
        ':after': {
          bottom: '0',
          background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
        }
      },
      Flex: {
        props: {
          flow: 'column',
          maxHeight: 'F+C',
          overflow: 'auto',
          '::-webkit-scrollbar': {display: 'none'}
        },
        childExtend: {
          props: {
            padding: 'Z1 A1',
            position: 'relative',
            cursor: 'pointer',
            fontSize: 'A1',
            color: 'gray4',
            ':hover': {
              background: 'gray .92 +4'
            },
            childProps: {position: 'relative'}
          }
        }
      },
      __name: 'List'
    },
    props: {
      round: '0',
      minWidth: '100%'
    }
  },
  __name: 'ListWithTitle'
};

export function ListWithTitle(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_List = useRef(null);
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
  const dobj_Box = dobj["Title"]
  dobj_Box.node = ref_Box_2.current
  const dobj_List = dobj["List"]
  dobj_List.node = ref_List.current
  const dobj_Box_2 = dobj["List"]["Flex"]
  dobj_Box_2.node = ref_Box_3.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      flow="column"
      overflow="hidden"
      round="A"
      maxWidth="F1"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        position="sticky"
        top="0"
        zIndex="3"
        text="Group name"
        fontSize="Z"
        color="gray .92 +68"
        fontWeight="400"
        theme="dialog"
        padding="A"
        tag="h5"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <List
        round="0"
        minWidth="100%"
        position="relative"
        overflow="hidden"
        theme="dialog"
        ref={ref_List}
        {...dobj_List.props}
        domqlElementObject={dobj_List}
      >
        <Box
          flow="column"
          maxHeight="F+C"
          overflow="auto"
          display="flex"
          tag="div"
          ref={ref_Box_3}
          className={`${css(flow_2(dobj_Box_2))} ${css(
            wrap_2(dobj_Box_2)
          )} ${css(align_2(dobj_Box_2))}`}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        />
      </List>
    </Box>
  );
}

const orig_8 = {
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
      overflow: 'hidden',
      round: 'A',
      maxWidth: 'F1'
    },
    Title: {
      tag: 'h5',
      props: {
        position: 'sticky',
        top: '0',
        zIndex: '3',
        text: 'Group name',
        fontSize: 'Z',
        color: 'gray .92 +68',
        fontWeight: '400',
        theme: 'dialog',
        padding: 'A'
      }
    },
    List: {
      extend: {
        props: {
          position: 'relative',
          overflow: 'hidden',
          round: 'A',
          minWidth: 'F1',
          theme: 'dialog',
          ':before, &:after': {
            content: '""',
            position: 'absolute',
            boxSize: 'A2 100%',
            zIndex: '2',
            left: '0',
            pointerEvents: 'none'
          },
          ':before': {
            top: '0',
            background: 'linear-gradient(to bottom, var(--theme-dialog-dark-background) 0%, transparent 100%)'
          },
          ':after': {
            bottom: '0',
            background: 'linear-gradient(to top, var(--theme-dialog-dark-background) 0%, transparent 100%)'
          }
        },
        Flex: {
          props: {
            flow: 'column',
            maxHeight: 'F+C',
            overflow: 'auto',
            '::-webkit-scrollbar': {display: 'none'}
          },
          childExtend: {
            props: {
              padding: 'Z1 A1',
              position: 'relative',
              cursor: 'pointer',
              fontSize: 'A1',
              color: 'gray4',
              ':hover': {
                background: 'gray .92 +4'
              },
              childProps: {position: 'relative'}
            }
          }
        },
        __name: 'List'
      },
      props: {
        round: '0',
        minWidth: '100%'
      }
    },
    __name: 'ListWithTitle'
  },
  Title: {},
  List: {
    Flex: {
      '0': {span: {text: 'Item'}},
      '1': {span: {text: 'Item'}},
      '2': {span: {text: 'Item'}},
      '3': {span: {text: 'Item'}},
      '4': {span: {text: 'Item'}}
    }
  },
  __name: 'ListWithTitleTemplate'
};

export function ListWithTitleTemplate(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_List = useRef(null);
  const ref_Flex = useRef(null);
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
  const dobj_Box = dobj["Title"]
  dobj_Box.node = ref_Box_2.current
  const dobj_List = dobj["List"]
  dobj_List.node = ref_List.current
  const dobj_Flex = dobj["List"]["Flex"]
  dobj_Flex.node = ref_Flex.current
  const dobj_Box_2 = dobj["List"]["Flex"]["0"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["List"]["Flex"]["1"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["List"]["Flex"]["2"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["List"]["Flex"]["3"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["List"]["Flex"]["4"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["List"]["Flex"]["0"]["span"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["List"]["Flex"]["1"]["span"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["List"]["Flex"]["2"]["span"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["List"]["Flex"]["3"]["span"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["List"]["Flex"]["4"]["span"]
  dobj_Box_11.node = ref_Box_12.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      flow="column"
      overflow="hidden"
      round="A"
      maxWidth="F1"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        position="sticky"
        top="0"
        zIndex="3"
        text="Group name"
        fontSize="Z"
        color="gray .92 +68"
        fontWeight="400"
        theme="dialog"
        padding="A"
        tag="h5"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <List
        round="0"
        minWidth="100%"
        position="relative"
        overflow="hidden"
        theme="dialog"
        ref={ref_List}
        {...dobj_List.props}
        domqlElementObject={dobj_List}
      >
        <Flex
          flow="column"
          maxHeight="F+C"
          overflow="auto"
          display="flex"
          ref={ref_Flex}
          className={`${css(flow_2(dobj_Flex))} ${css(wrap_2(dobj_Flex))} ${css(
            align_2(dobj_Flex)
          )}`}
          {...dobj_Flex.props}
          domqlElementObject={dobj_Flex}
        >
          <Box
            padding="Z1 A1"
            position="relative"
            cursor="pointer"
            fontSize="A1"
            color="gray4"
            tag="div"
            ref={ref_Box_3}
            childProps={{
              position: "relative",
            }}
            {...dobj_Box_2.props}
            domqlElementObject={dobj_Box_2}
          >
            <Box
              position="relative"
              tag="span"
              ref={ref_Box_8}
              {...dobj_Box_7.props}
              domqlElementObject={dobj_Box_7}
            />
          </Box>
          <Box
            padding="Z1 A1"
            position="relative"
            cursor="pointer"
            fontSize="A1"
            color="gray4"
            tag="div"
            ref={ref_Box_4}
            childProps={{
              position: "relative",
            }}
            {...dobj_Box_3.props}
            domqlElementObject={dobj_Box_3}
          >
            <Box
              position="relative"
              tag="span"
              ref={ref_Box_9}
              {...dobj_Box_8.props}
              domqlElementObject={dobj_Box_8}
            />
          </Box>
          <Box
            padding="Z1 A1"
            position="relative"
            cursor="pointer"
            fontSize="A1"
            color="gray4"
            tag="div"
            ref={ref_Box_5}
            childProps={{
              position: "relative",
            }}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          >
            <Box
              position="relative"
              tag="span"
              ref={ref_Box_10}
              {...dobj_Box_9.props}
              domqlElementObject={dobj_Box_9}
            />
          </Box>
          <Box
            padding="Z1 A1"
            position="relative"
            cursor="pointer"
            fontSize="A1"
            color="gray4"
            tag="div"
            ref={ref_Box_6}
            childProps={{
              position: "relative",
            }}
            {...dobj_Box_5.props}
            domqlElementObject={dobj_Box_5}
          >
            <Box
              position="relative"
              tag="span"
              ref={ref_Box_11}
              {...dobj_Box_10.props}
              domqlElementObject={dobj_Box_10}
            />
          </Box>
          <Box
            padding="Z1 A1"
            position="relative"
            cursor="pointer"
            fontSize="A1"
            color="gray4"
            tag="div"
            ref={ref_Box_7}
            childProps={{
              position: "relative",
            }}
            {...dobj_Box_6.props}
            domqlElementObject={dobj_Box_6}
          >
            <Box
              position="relative"
              tag="span"
              ref={ref_Box_12}
              {...dobj_Box_11.props}
              domqlElementObject={dobj_Box_11}
            />
          </Box>
        </Flex>
      </List>
    </Box>
  );
}
