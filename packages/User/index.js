import * as React from "react";
import { Box, Avatar, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { create } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
import { css } from "@emotion/css";

const orig = {
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
      theme: 'dialog',
      padding: 'Z A Z Z',
      round: 'A',
      gap: 'Y1',
      align: 'center flex-start'
    },
    Avatar: {
      extend: {
        props: {
          boxSize: 'fit-content',
          position: 'relative',
          round: '100%'
        },
        Avatar: {},
        StatusIndicator: {
          position: 'absolute',
          bottom: 'V',
          right: '-V'
        }
      },
      Avatar: {
        props: {boxSize: 'C+V'}
      }
    },
    Notes: {
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
          gap: 'Y'
        },
        Title: {
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
            lineHeight: '1em',
            fontWeight: '700',
            alignItems: 'center'
          }
        },
        Paragraph: {
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
            margin: '0',
            fontWeight: '400',
            color: 'gray4',
            '> p': {margin: '0'}
          }
        }
      },
      props: {
        justifyContent: 'center',
        gap: 'W2',
        margin: 'X2 - - -'
      },
      Title: {
        props: {
          fontSize: 'A1',
          fontWeight: '500'
        }
      },
      Paragraph: {
        props: {
          fontSize: 'Z',
          alignItems: 'center'
        }
      }
    }
  },
  props: {gap: 'Y2'},
  Avatar: {},
  Notes: {
    props: {gap: 'X1'},
    Title: {
      props: {
        align: 'center space-between'
      },
      caption: {
        props: {text: 'Maria Kenter'}
      },
      time: {
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
        props: {
          fontSize: 'X1',
          gap: 'X2'
        },
        Unit: {props: {text: '2:22'}},
        Value: {props: {text: 'AM'}}
      }
    },
    Paragraph: {
      props: {gap: 'C1'},
      p: {
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
          text: 'Hey team, I’ve finished the requirements document',
          maxWidth: 'F1',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }
      },
      notification: {
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
            text: '2',
            theme: 'primary',
            boxSize: 'A1',
            minWidth: 'fit-content',
            boxSizing: 'content-box',
            lineHeight: '1em',
            padding: 'X',
            round: '100%',
            align: 'center center',
            aspectRatio: '1 / 1',
            color: 'white'
          }
        },
        props: {fontSize: 'X2'}
      }
    }
  },
  __name: 'ChatUser'
};

export function ChatUser(props) {
  const ref_Box = useRef(null);
  const ref_Avatar = useRef(null);
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
  const dobj_Avatar = dobj["Avatar"]
  dobj_Avatar.node = ref_Avatar.current
  const dobj_Box = dobj["Notes"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Notes"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Notes"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Notes"]["Title"]["caption"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Notes"]["Title"]["time"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Notes"]["Paragraph"]["p"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Notes"]["Paragraph"]["notification"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Notes"]["Title"]["time"]["Unit"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Notes"]["Title"]["time"]["Value"]
  dobj_Box_9.node = ref_Box_10.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="Y2"
      boxSize="fit-content"
      theme="dialog"
      padding="Z A Z Z"
      round="A"
      align="center flex-start"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Avatar
        boxSize="fit-content"
        position="relative"
        round="100%"
        ref={ref_Avatar}
        {...dobj_Avatar.props}
        domqlElementObject={dobj_Avatar}
      />
      <Box
        gap="X1"
        justifyContent="center"
        margin="X2 - - -"
        flow="column"
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
          align="center space-between"
          fontSize="A1"
          fontWeight="500"
          lineHeight="1em"
          alignItems="center"
          display="flex"
          tag="div"
          ref={ref_Box_3}
          className={`${css(flow_3(dobj_Box_2))} ${css(
            wrap_3(dobj_Box_2)
          )} ${css(align_3(dobj_Box_2))}`}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        >
          <Box
            text="Maria Kenter"
            tag="caption"
            ref={ref_Box_5}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
          <Box
            fontSize="X1"
            gap="X2"
            color="gray2"
            align="center flex-start"
            fontWeight="400"
            display="flex"
            tag="time"
            ref={ref_Box_6}
            className={`${css(flow_5(dobj_Box_5))} ${css(
              wrap_5(dobj_Box_5)
            )} ${css(align_5(dobj_Box_5))}`}
            {...dobj_Box_5.props}
            domqlElementObject={dobj_Box_5}
          >
            <Box
              text="2:22"
              tag="div"
              ref={ref_Box_9}
              {...dobj_Box_8.props}
              domqlElementObject={dobj_Box_8}
            />
            <Box
              text="AM"
              tag="div"
              ref={ref_Box_10}
              {...dobj_Box_9.props}
              domqlElementObject={dobj_Box_9}
            />
          </Box>
        </Box>
        <Box
          gap="C1"
          fontSize="Z"
          alignItems="center"
          margin="0"
          fontWeight="400"
          color="gray4"
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
            text="Hey team, I’ve finished the requirements document"
            maxWidth="F1"
            overflow="hidden"
            whiteSpace="nowrap"
            display="flex"
            tag="p"
            ref={ref_Box_7}
            className={`${css(flow_6(dobj_Box_6))} ${css(
              wrap_6(dobj_Box_6)
            )} ${css(align_6(dobj_Box_6))}`}
            {...dobj_Box_6.props}
            domqlElementObject={dobj_Box_6}
          />
          <Box
            fontSize="X2"
            text="2"
            theme="primary"
            boxSize="A1"
            minWidth="fit-content"
            boxSizing="content-box"
            lineHeight="1em"
            padding="X"
            round="100%"
            align="center center"
            aspectRatio="1 / 1"
            color="white"
            display="flex"
            tag="div"
            ref={ref_Box_8}
            className={`${css(flow_7(dobj_Box_7))} ${css(
              wrap_7(dobj_Box_7)
            )} ${css(align_7(dobj_Box_7))}`}
            {...dobj_Box_7.props}
            domqlElementObject={dobj_Box_7}
          />
        </Box>
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
    boxSize: 'fit-content',
    theme: 'dialog',
    padding: 'Z A Z Z',
    round: 'A',
    gap: 'Y1',
    align: 'center flex-start'
  },
  Avatar: {
    extend: {
      props: {
        boxSize: 'fit-content',
        position: 'relative',
        round: '100%'
      },
      Avatar: {},
      StatusIndicator: {
        position: 'absolute',
        bottom: 'V',
        right: '-V'
      }
    },
    Avatar: {
      props: {boxSize: 'C+V'}
    }
  },
  Notes: {
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
        gap: 'Y'
      },
      Title: {
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
          lineHeight: '1em',
          fontWeight: '700',
          alignItems: 'center'
        }
      },
      Paragraph: {
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
          margin: '0',
          fontWeight: '400',
          color: 'gray4',
          '> p': {margin: '0'}
        }
      }
    },
    props: {
      justifyContent: 'center',
      gap: 'W2',
      margin: 'X2 - - -'
    },
    Title: {
      props: {
        fontSize: 'A1',
        fontWeight: '500'
      }
    },
    Paragraph: {
      props: {
        fontSize: 'Z',
        alignItems: 'center'
      }
    }
  },
  __name: 'User'
};

export function User(props) {
  const ref_Box = useRef(null);
  const ref_Avatar = useRef(null);
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
  const dobj_Avatar = dobj["Avatar"]
  dobj_Avatar.node = ref_Avatar.current
  const dobj_Box = dobj["Notes"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Notes"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Notes"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      theme="dialog"
      padding="Z A Z Z"
      round="A"
      gap="Y1"
      align="center flex-start"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Avatar
        boxSize="fit-content"
        position="relative"
        round="100%"
        ref={ref_Avatar}
        {...dobj_Avatar.props}
        domqlElementObject={dobj_Avatar}
      />
      <Box
        justifyContent="center"
        gap="W2"
        margin="X2 - - -"
        flow="column"
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
          fontSize="A1"
          fontWeight="500"
          lineHeight="1em"
          alignItems="center"
          display="flex"
          tag="div"
          ref={ref_Box_3}
          className={`${css(flow_3(dobj_Box_2))} ${css(
            wrap_3(dobj_Box_2)
          )} ${css(align_3(dobj_Box_2))}`}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        />
        <Box
          fontSize="Z"
          alignItems="center"
          margin="0"
          fontWeight="400"
          color="gray4"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
      </Box>
    </Box>
  );
}

import { ButtonSet } from "@symbo.ls/react";
import { Svg } from "@symbo.ls/react-atoms";

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
    boxSize: 'fit-content',
    theme: 'dialog',
    padding: 'Z1 Z1 Z Z',
    round: 'A',
    alignItems: 'center',
    gap: 'E'
  },
  User: {
    padding: '0',
    gap: 'Y2',
    Avatar: {fontSize: 'A1'},
    Notes: {
      margin: 'W - - -',
      gap: 'X2',
      Title: {
        text: 'Group',
        fontSize: 'C1'
      },
      Paragraph: {
        text: 'Active now',
        fontSize: 'Y',
        padding: '- - - W1'
      }
    }
  },
  ButtonSet: {
    '0': {
      props: {Icon: {name: 'phone'}}
    },
    '1': {
      props: {Icon: {name: 'video'}}
    },
    '2': {
      props: {
        Icon: {name: 'moreHorizontal'}
      }
    },
    props: {gap: 'Y2'}
  },
  __name: 'UserButtonSet'
};

export function UserButtonSet(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_ButtonSet = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Box_12 = useRef(null);
  const ref_Box_13 = useRef(null);
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

  function attr_type({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex({ props: props4 }) {
    return props4.tabIndex;
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

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_2({ props: props4 }) {
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

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_3({ props: props4 }) {
    return props4.tabIndex;
  }

  function attr_src({ props: props4 }) {
    return props4.src;
  }

  function attr_alt({ props: props4 }) {
    return props4.alt;
  }

  function attr_title({ props: props4 }) {
    return props4.title || props4.alt;
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
  const dobj_Box = dobj["User"]
  dobj_Box.node = ref_Box_2.current
  const dobj_ButtonSet = dobj["ButtonSet"]
  dobj_ButtonSet.node = ref_ButtonSet.current
  const dobj_Box_2 = dobj["User"]["Avatar"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["User"]["Notes"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["ButtonSet"]["0"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["ButtonSet"]["1"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["ButtonSet"]["2"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["User"]["Avatar"]["Avatar"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["User"]["Avatar"]["StatusIndicator"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["User"]["Notes"]["Title"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["User"]["Notes"]["Paragraph"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Svg = dobj["ButtonSet"]["0"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["ButtonSet"]["1"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Svg_3 = dobj["ButtonSet"]["2"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Box_11 = dobj["User"]["Notes"]["Title"]["h5"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["User"]["Notes"]["Paragraph"]["p"]
  dobj_Box_12.node = ref_Box_13.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      theme="dialog"
      padding="Z1 Z1 Z Z"
      round="A"
      alignItems="center"
      gap="E"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        padding="0"
        gap="Y2"
        align="center flex-start"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        Avatar={{
          props: {
            fontSize: "A1",
          },
          __ref: undefined,
        }}
        Notes={{
          props: {
            margin: "W - - -",
            gap: "X2",
            Title: {
              props: {
                text: "Group",
                fontSize: "C1",
              },
              __ref: undefined,
            },
            Paragraph: {
              props: {
                text: "Active now",
                fontSize: "Y",
                padding: "- - - W1",
              },
              __ref: undefined,
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
          fontSize="A1"
          margin="0 - - -"
          boxSize="fit-content"
          position="relative"
          round="100%"
          tag="div"
          ref={ref_Box_3}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        >
          <Box
            display="block"
            avatarType="initials"
            borderRadius="100%"
            boxSize="C+X C+X"
            src="https://api.dicebear.com/7.x/initials/svg?seed=Avatar"
            tag="img"
            ref={ref_Box_8}
            {...dobj_Box_7.props}
            src={attr_src(dobj_Box_7)}
            alt={attr_alt(dobj_Box_7)}
            title={attr_title(dobj_Box_7)}
            domqlElementObject={dobj_Box_7}
          />
          <Box
            position="absolute"
            bottom="V"
            right="0"
            boxSize="Z"
            background="green2"
            round="100%"
            border="solid, black 0"
            borderWidth="1px"
            tag="div"
            ref={ref_Box_9}
            {...dobj_Box_8.props}
            domqlElementObject={dobj_Box_8}
          />
        </Box>
        <Box
          margin="W - - -"
          gap="X2"
          flow="column"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          Title={{
            props: {
              text: "Group",
              fontSize: "C1",
            },
            __ref: undefined,
          }}
          Paragraph={{
            props: {
              text: "Active now",
              fontSize: "Y",
              padding: "- - - W1",
            },
            __ref: undefined,
          }}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            text="Group"
            fontSize="C1"
            align="center space-between"
            display="flex"
            tag="div"
            ref={ref_Box_10}
            className={`${css(flow_8(dobj_Box_9))} ${css(
              wrap_8(dobj_Box_9)
            )} ${css(align_8(dobj_Box_9))}`}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          >
            <Box
              text="Erin Schleifer"
              fontWeight="500"
              fontSize="A"
              lineHeight="1em"
              tag="h5"
              ref={ref_Box_12}
              {...dobj_Box_11.props}
              domqlElementObject={dobj_Box_11}
            />
          </Box>
          <Box
            text="Active now"
            fontSize="Y"
            padding="- - - W1"
            display="flex"
            tag="div"
            ref={ref_Box_11}
            className={`${css(flow_9(dobj_Box_10))} ${css(
              wrap_9(dobj_Box_10)
            )} ${css(align_9(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          >
            <Box
              text="email@symbols.com"
              fontSize="Z1"
              lineHeight="1em"
              margin="0"
              color="gray2"
              tag="p"
              ref={ref_Box_13}
              {...dobj_Box_12.props}
              domqlElementObject={dobj_Box_12}
            />
          </Box>
        </Box>
      </Box>
      <ButtonSet
        gap="Y2"
        display="flex"
        ref={ref_ButtonSet}
        className={`${css(flow_3(dobj_ButtonSet))} ${css(
          wrap_3(dobj_ButtonSet)
        )} ${css(align_3(dobj_ButtonSet))}`}
        {...dobj_ButtonSet.props}
        domqlElementObject={dobj_ButtonSet}
      >
        <Box
          boxSize="fit-content fit-content"
          padding="A"
          background="gray3"
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
          tag="button"
          ref={ref_Box_5}
          Icon={{
            props: {
              name: "phone",
            },
            __ref: undefined,
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_5(dobj_Box_4))} ${css(
            wrap_5(dobj_Box_4)
          )} ${css(align_5(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          type={attr_type(dobj_Box_4)}
          placeholder={attr_placeholder(dobj_Box_4)}
          tabIndex={attr_tabIndex(dobj_Box_4)}
          domqlElementObject={dobj_Box_4}
        >
          {show_Svg(dobj_Svg) ? (
            <Svg
              name="phone"
              fontSize="C"
              width="A"
              height="A"
              display="inline-block"
              spriteId="phone"
              src='<symbol id="phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></symbol>'
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
          boxSize="fit-content fit-content"
          padding="A"
          background="gray3"
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
          tag="button"
          ref={ref_Box_6}
          Icon={{
            props: {
              name: "video",
            },
            __ref: undefined,
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_6(dobj_Box_5))} ${css(
            wrap_6(dobj_Box_5)
          )} ${css(align_6(dobj_Box_5))}`}
          {...dobj_Box_5.props}
          type={attr_type_2(dobj_Box_5)}
          placeholder={attr_placeholder_2(dobj_Box_5)}
          tabIndex={attr_tabIndex_2(dobj_Box_5)}
          domqlElementObject={dobj_Box_5}
        >
          {show_Svg_2(dobj_Svg_2) ? (
            <Svg
              name="video"
              fontSize="C"
              width="A"
              height="A"
              display="inline-block"
              spriteId="video"
              src='<symbol id="video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></symbol>'
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
        <Box
          boxSize="fit-content fit-content"
          padding="A"
          background="gray3"
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
          tag="button"
          ref={ref_Box_7}
          Icon={{
            props: {
              name: "moreHorizontal",
            },
            __ref: undefined,
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_7(dobj_Box_6))} ${css(
            wrap_7(dobj_Box_6)
          )} ${css(align_7(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          type={attr_type_3(dobj_Box_6)}
          placeholder={attr_placeholder_3(dobj_Box_6)}
          tabIndex={attr_tabIndex_3(dobj_Box_6)}
          domqlElementObject={dobj_Box_6}
        >
          {show_Svg_3(dobj_Svg_3) ? (
            <Svg
              name="moreHorizontal"
              fontSize="C"
              width="A"
              height="A"
              display="inline-block"
              spriteId="moreHorizontal"
              src='<symbol id="moreHorizontal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></symbol>'
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
      </ButtonSet>
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
      boxSize: 'fit-content',
      theme: 'dialog',
      padding: 'Z1 Z1 Z Z',
      round: 'A',
      alignItems: 'center',
      gap: 'E'
    },
    User: {
      padding: '0',
      gap: 'Y2',
      Avatar: {fontSize: 'A1'},
      Notes: {
        margin: 'W - - -',
        gap: 'X2',
        Title: {
          text: 'Group',
          fontSize: 'C1'
        },
        Paragraph: {
          text: 'Active now',
          fontSize: 'Y',
          padding: '- - - W1'
        }
      }
    },
    ButtonSet: {
      '0': {
        props: {Icon: {name: 'phone'}}
      },
      '1': {
        props: {Icon: {name: 'video'}}
      },
      '2': {
        props: {
          Icon: {name: 'moreHorizontal'}
        }
      },
      props: {gap: 'Y2'}
    },
    __name: 'UserButtonSet'
  },
  User: {},
  ButtonSet: {
    childExtend: {props: {round: '100%'}}
  },
  __name: 'UserButtonSetCircle'
};

export function UserButtonSetCircle(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_ButtonSet = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Box_12 = useRef(null);
  const ref_Box_13 = useRef(null);
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

  function attr_type({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex({ props: props4 }) {
    return props4.tabIndex;
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

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_2({ props: props4 }) {
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

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_3({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_3({ props: props4 }) {
    return props4.tabIndex;
  }

  function attr_src({ props: props4 }) {
    return props4.src;
  }

  function attr_alt({ props: props4 }) {
    return props4.alt;
  }

  function attr_title({ props: props4 }) {
    return props4.title || props4.alt;
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
  const dobj_Box = dobj["User"]
  dobj_Box.node = ref_Box_2.current
  const dobj_ButtonSet = dobj["ButtonSet"]
  dobj_ButtonSet.node = ref_ButtonSet.current
  const dobj_Box_2 = dobj["User"]["Avatar"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["User"]["Notes"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["ButtonSet"]["0"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["ButtonSet"]["1"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["ButtonSet"]["2"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["User"]["Avatar"]["Avatar"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["User"]["Avatar"]["StatusIndicator"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["User"]["Notes"]["Title"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["User"]["Notes"]["Paragraph"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Svg = dobj["ButtonSet"]["0"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["ButtonSet"]["1"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Svg_3 = dobj["ButtonSet"]["2"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Box_11 = dobj["User"]["Notes"]["Title"]["h5"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["User"]["Notes"]["Paragraph"]["p"]
  dobj_Box_12.node = ref_Box_13.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      theme="dialog"
      padding="Z1 Z1 Z Z"
      round="A"
      alignItems="center"
      gap="E"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        padding="0"
        gap="Y2"
        align="center flex-start"
        display="flex"
        tag="div"
        ref={ref_Box_2}
        Avatar={{
          props: {
            fontSize: "A1",
          },
          __ref: undefined,
        }}
        Notes={{
          props: {
            margin: "W - - -",
            gap: "X2",
            Title: {
              props: {
                text: "Group",
                fontSize: "C1",
              },
              __ref: undefined,
            },
            Paragraph: {
              props: {
                text: "Active now",
                fontSize: "Y",
                padding: "- - - W1",
              },
              __ref: undefined,
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
          fontSize="A1"
          margin="0 - - -"
          boxSize="fit-content"
          position="relative"
          round="100%"
          tag="div"
          ref={ref_Box_3}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        >
          <Box
            display="block"
            avatarType="initials"
            borderRadius="100%"
            boxSize="C+X C+X"
            src="https://api.dicebear.com/7.x/initials/svg?seed=Avatar"
            tag="img"
            ref={ref_Box_8}
            {...dobj_Box_7.props}
            src={attr_src(dobj_Box_7)}
            alt={attr_alt(dobj_Box_7)}
            title={attr_title(dobj_Box_7)}
            domqlElementObject={dobj_Box_7}
          />
          <Box
            position="absolute"
            bottom="V"
            right="0"
            boxSize="Z"
            background="green2"
            round="100%"
            border="solid, black 0"
            borderWidth="1px"
            tag="div"
            ref={ref_Box_9}
            {...dobj_Box_8.props}
            domqlElementObject={dobj_Box_8}
          />
        </Box>
        <Box
          margin="W - - -"
          gap="X2"
          flow="column"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          Title={{
            props: {
              text: "Group",
              fontSize: "C1",
            },
            __ref: undefined,
          }}
          Paragraph={{
            props: {
              text: "Active now",
              fontSize: "Y",
              padding: "- - - W1",
            },
            __ref: undefined,
          }}
          className={`${css(flow_4(dobj_Box_3))} ${css(
            wrap_4(dobj_Box_3)
          )} ${css(align_4(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        >
          <Box
            text="Group"
            fontSize="C1"
            align="center space-between"
            display="flex"
            tag="div"
            ref={ref_Box_10}
            className={`${css(flow_8(dobj_Box_9))} ${css(
              wrap_8(dobj_Box_9)
            )} ${css(align_8(dobj_Box_9))}`}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          >
            <Box
              text="Erin Schleifer"
              fontWeight="500"
              fontSize="A"
              lineHeight="1em"
              tag="h5"
              ref={ref_Box_12}
              {...dobj_Box_11.props}
              domqlElementObject={dobj_Box_11}
            />
          </Box>
          <Box
            text="Active now"
            fontSize="Y"
            padding="- - - W1"
            display="flex"
            tag="div"
            ref={ref_Box_11}
            className={`${css(flow_9(dobj_Box_10))} ${css(
              wrap_9(dobj_Box_10)
            )} ${css(align_9(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          >
            <Box
              text="email@symbols.com"
              fontSize="Z1"
              lineHeight="1em"
              margin="0"
              color="gray2"
              tag="p"
              ref={ref_Box_13}
              {...dobj_Box_12.props}
              domqlElementObject={dobj_Box_12}
            />
          </Box>
        </Box>
      </Box>
      <ButtonSet
        gap="Y2"
        display="flex"
        ref={ref_ButtonSet}
        className={`${css(flow_3(dobj_ButtonSet))} ${css(
          wrap_3(dobj_ButtonSet)
        )} ${css(align_3(dobj_ButtonSet))}`}
        {...dobj_ButtonSet.props}
        domqlElementObject={dobj_ButtonSet}
      >
        <Box
          boxSize="fit-content fit-content"
          padding="A"
          background="gray3"
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
          tag="button"
          ref={ref_Box_5}
          Icon={{
            props: {
              name: "phone",
            },
            __ref: undefined,
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_5(dobj_Box_4))} ${css(
            wrap_5(dobj_Box_4)
          )} ${css(align_5(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          type={attr_type(dobj_Box_4)}
          placeholder={attr_placeholder(dobj_Box_4)}
          tabIndex={attr_tabIndex(dobj_Box_4)}
          domqlElementObject={dobj_Box_4}
        >
          {show_Svg(dobj_Svg) ? (
            <Svg
              name="phone"
              fontSize="C"
              width="A"
              height="A"
              display="inline-block"
              spriteId="phone"
              src='<symbol id="phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></symbol>'
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
          boxSize="fit-content fit-content"
          padding="A"
          background="gray3"
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
          tag="button"
          ref={ref_Box_6}
          Icon={{
            props: {
              name: "video",
            },
            __ref: undefined,
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_6(dobj_Box_5))} ${css(
            wrap_6(dobj_Box_5)
          )} ${css(align_6(dobj_Box_5))}`}
          {...dobj_Box_5.props}
          type={attr_type_2(dobj_Box_5)}
          placeholder={attr_placeholder_2(dobj_Box_5)}
          tabIndex={attr_tabIndex_2(dobj_Box_5)}
          domqlElementObject={dobj_Box_5}
        >
          {show_Svg_2(dobj_Svg_2) ? (
            <Svg
              name="video"
              fontSize="C"
              width="A"
              height="A"
              display="inline-block"
              spriteId="video"
              src='<symbol id="video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></symbol>'
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
        <Box
          boxSize="fit-content fit-content"
          padding="A"
          background="gray3"
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
          tag="button"
          ref={ref_Box_7}
          Icon={{
            props: {
              name: "moreHorizontal",
            },
            __ref: undefined,
          }}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_7(dobj_Box_6))} ${css(
            wrap_7(dobj_Box_6)
          )} ${css(align_7(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          type={attr_type_3(dobj_Box_6)}
          placeholder={attr_placeholder_3(dobj_Box_6)}
          tabIndex={attr_tabIndex_3(dobj_Box_6)}
          domqlElementObject={dobj_Box_6}
        >
          {show_Svg_3(dobj_Svg_3) ? (
            <Svg
              name="moreHorizontal"
              fontSize="C"
              width="A"
              height="A"
              display="inline-block"
              spriteId="moreHorizontal"
              src='<symbol id="moreHorizontal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></symbol>'
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
      </ButtonSet>
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
      theme: 'dialog',
      padding: 'Z A Z Z',
      round: 'A',
      gap: 'Y1',
      align: 'center flex-start'
    },
    Avatar: {
      extend: {
        props: {
          boxSize: 'fit-content',
          position: 'relative',
          round: '100%'
        },
        Avatar: {},
        StatusIndicator: {
          position: 'absolute',
          bottom: 'V',
          right: '-V'
        }
      },
      Avatar: {
        props: {boxSize: 'C+V'}
      }
    },
    Notes: {
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
          gap: 'Y'
        },
        Title: {
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
            lineHeight: '1em',
            fontWeight: '700',
            alignItems: 'center'
          }
        },
        Paragraph: {
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
            margin: '0',
            fontWeight: '400',
            color: 'gray4',
            '> p': {margin: '0'}
          }
        }
      },
      props: {
        justifyContent: 'center',
        gap: 'W2',
        margin: 'X2 - - -'
      },
      Title: {
        props: {
          fontSize: 'A1',
          fontWeight: '500'
        }
      },
      Paragraph: {
        props: {
          fontSize: 'Z',
          alignItems: 'center'
        }
      }
    },
    __name: 'User'
  },
  props: {
    gap: 'Z',
    theme: 'transparent'
  },
  Avatar: {},
  Notes: {
    Title: null,
    props: {margin: '0'},
    Paragraph: {
      props: {
        text: 'Can you please review the latest design?',
        padding: 'Z1 Z2',
        round: 'Z2',
        theme: 'dialog',
        color: 'white'
      }
    }
  },
  __name: 'UserMessage'
};

export function UserMessage(props) {
  const ref_Box = useRef(null);
  const ref_Avatar = useRef(null);
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
  const dobj_Avatar = dobj["Avatar"]
  dobj_Avatar.node = ref_Avatar.current
  const dobj_Box = dobj["Notes"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Notes"]["Paragraph"]
  dobj_Box_2.node = ref_Box_3.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="Z"
      theme="transparent"
      boxSize="fit-content"
      padding="Z A Z Z"
      round="A"
      align="center flex-start"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Avatar
        boxSize="fit-content"
        position="relative"
        round="100%"
        ref={ref_Avatar}
        {...dobj_Avatar.props}
        domqlElementObject={dobj_Avatar}
      />
      <Box
        margin="0"
        justifyContent="center"
        gap="W2"
        flow="column"
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
          text="Can you please review the latest design?"
          padding="Z1 Z2"
          round="Z2"
          theme="dialog"
          color="white"
          fontSize="Z"
          alignItems="center"
          margin="0"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_3}
          className={`${css(flow_3(dobj_Box_2))} ${css(
            wrap_3(dobj_Box_2)
          )} ${css(align_3(dobj_Box_2))}`}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        />
      </Box>
    </Box>
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
    boxSize: 'fit-content',
    theme: 'dialog',
    border: '1px, solid, gray3',
    padding: 'Y Z2 Y Y',
    alignItems: 'center',
    gap: 'B',
    round: 'A'
  },
  User: {
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
        theme: 'dialog',
        padding: 'Z A Z Z',
        round: 'A',
        gap: 'Y1',
        align: 'center flex-start'
      },
      Avatar: {
        extend: {
          props: {
            boxSize: 'fit-content',
            position: 'relative',
            round: '100%'
          },
          Avatar: {},
          StatusIndicator: {
            position: 'absolute',
            bottom: 'V',
            right: '-V'
          }
        },
        Avatar: {
          props: {boxSize: 'C+V'}
        }
      },
      Notes: {
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
            gap: 'Y'
          },
          Title: {
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
              lineHeight: '1em',
              fontWeight: '700',
              alignItems: 'center'
            }
          },
          Paragraph: {
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
              margin: '0',
              fontWeight: '400',
              color: 'gray4',
              '> p': {margin: '0'}
            }
          }
        },
        props: {
          justifyContent: 'center',
          gap: 'W2',
          margin: 'X2 - - -'
        },
        Title: {
          props: {
            fontSize: 'A1',
            fontWeight: '500'
          }
        },
        Paragraph: {
          props: {
            fontSize: 'Z',
            alignItems: 'center'
          }
        }
      },
      __name: 'User'
    },
    props: {padding: '0'},
    Avatar: {
      Avatar: {
        props: {
          fontSize: 'Z2',
          round: 'Z1'
        }
      },
      StatusIndicator: null
    },
    Notes: {
      props: {gap: 'X'},
      Title: {
        props: {
          text: 'Wallet ID',
          fontSize: 'Y1'
        }
      },
      Paragraph: {
        props: {
          text: '0xfb59...d862',
          fontSize: 'Y1'
        }
      }
    }
  },
  IconCommonButton: {
    background: 'transparent',
    theme: null,
    color: 'currentColor',
    opacity: '0.5',
    transition: 'A defaultBezier',
    transitionProperty: 'opacity, background',
    padding: '0',
    Icon: {
      name: 'copy',
      fontSize: 'C'
    }
  },
  __name: 'UserWithButton'
};

export function UserWithButton(props) {
  const ref_Box = useRef(null);
  const ref_User = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Avatar = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Svg = useRef(null);
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

  function attr_type({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex({ props: props4 }) {
    return props4.tabIndex;
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
  const dobj_User = dobj["User"]
  dobj_User.node = ref_User.current
  const dobj_Box = dobj["IconCommonButton"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Avatar = dobj["User"]["Avatar"]
  dobj_Avatar.node = ref_Avatar.current
  const dobj_Box_2 = dobj["User"]["Notes"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Svg = dobj["IconCommonButton"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_3 = dobj["User"]["Notes"]["Title"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["User"]["Notes"]["Paragraph"]
  dobj_Box_4.node = ref_Box_5.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      theme="dialog"
      border="1px, solid, gray3"
      padding="Y Z2 Y Y"
      alignItems="center"
      gap="B"
      round="A"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <User
        padding="0"
        boxSize="fit-content"
        theme="dialog"
        round="A"
        gap="Y1"
        align="center flex-start"
        display="flex"
        ref={ref_User}
        className={`${css(flow_2(dobj_User))} ${css(wrap_2(dobj_User))} ${css(
          align_2(dobj_User)
        )}`}
        {...dobj_User.props}
        domqlElementObject={dobj_User}
      >
        <Avatar
          boxSize="fit-content"
          position="relative"
          round="100%"
          ref={ref_Avatar}
          {...dobj_Avatar.props}
          domqlElementObject={dobj_Avatar}
        />
        <Box
          gap="X"
          justifyContent="center"
          margin="X2 - - -"
          flow="column"
          display="flex"
          tag="div"
          ref={ref_Box_3}
          className={`${css(flow_4(dobj_Box_2))} ${css(
            wrap_4(dobj_Box_2)
          )} ${css(align_4(dobj_Box_2))}`}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        >
          <Box
            text="Wallet ID"
            fontSize="Y1"
            fontWeight="500"
            lineHeight="1em"
            alignItems="center"
            display="flex"
            tag="div"
            ref={ref_Box_4}
            className={`${css(flow_5(dobj_Box_3))} ${css(
              wrap_5(dobj_Box_3)
            )} ${css(align_5(dobj_Box_3))}`}
            {...dobj_Box_3.props}
            domqlElementObject={dobj_Box_3}
          />
          <Box
            text="0xfb59...d862"
            fontSize="Y1"
            alignItems="center"
            margin="0"
            fontWeight="400"
            color="gray4"
            display="flex"
            tag="div"
            ref={ref_Box_5}
            className={`${css(flow_6(dobj_Box_4))} ${css(
              wrap_6(dobj_Box_4)
            )} ${css(align_6(dobj_Box_4))}`}
            {...dobj_Box_4.props}
            domqlElementObject={dobj_Box_4}
          />
        </Box>
      </User>
      <Box
        background="transparent"
        color="currentColor"
        opacity="0.5"
        transition="A defaultBezier"
        transitionProperty="opacity, background"
        padding="0"
        boxSize="fit-content fit-content"
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
        tag="button"
        ref={ref_Box_2}
        Icon={{
          props: {
            name: "copy",
            fontSize: "C",
          },
          __ref: undefined,
        }}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow_3(dobj_Box))} ${css(wrap_3(dobj_Box))} ${css(
          align_3(dobj_Box)
        )}`}
        {...dobj_Box.props}
        type={attr_type(dobj_Box)}
        placeholder={attr_placeholder(dobj_Box)}
        tabIndex={attr_tabIndex(dobj_Box)}
        domqlElementObject={dobj_Box}
      >
        {show_Svg(dobj_Svg) ? (
          <Svg
            name="copy"
            fontSize="C"
            width="A"
            height="A"
            display="inline-block"
            spriteId="copy"
            src='<symbol id="copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></symbol>'
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

const orig_7 = {
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
      theme: 'dialog',
      padding: 'Z A Z Z',
      round: 'A',
      gap: 'Y1',
      align: 'center flex-start'
    },
    Avatar: {
      extend: {
        props: {
          boxSize: 'fit-content',
          position: 'relative',
          round: '100%'
        },
        Avatar: {},
        StatusIndicator: {
          position: 'absolute',
          bottom: 'V',
          right: '-V'
        }
      },
      Avatar: {
        props: {boxSize: 'C+V'}
      }
    },
    Notes: {
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
          gap: 'Y'
        },
        Title: {
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
            lineHeight: '1em',
            fontWeight: '700',
            alignItems: 'center'
          }
        },
        Paragraph: {
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
            margin: '0',
            fontWeight: '400',
            color: 'gray4',
            '> p': {margin: '0'}
          }
        }
      },
      props: {
        justifyContent: 'center',
        gap: 'W2',
        margin: 'X2 - - -'
      },
      Title: {
        props: {
          fontSize: 'A1',
          fontWeight: '500'
        }
      },
      Paragraph: {
        props: {
          fontSize: 'Z',
          alignItems: 'center'
        }
      }
    },
    __name: 'User'
  },
  props: {gap: 'Y2'},
  AvatarIndicator: {
    StatusIndicator: null,
    Avatar: {
      props: {boxSize: 'B2+W'}
    }
  },
  Notes: {
    props: {margin: 'V2 - - -'},
    Title: {
      props: {
        gap: 'Y1',
        fontSize: 'Z2'
      },
      caption: {
        props: {text: 'ETHDOWN'}
      },
      label: {
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
            text: '-2.902x',
            fontSize: 'X2',
            boxSize: 'fit-content fit-content',
            background: '#F4454E',
            padding: 'W2 Y2',
            round: 'Y1',
            fontWeight: '400'
          }
        }
      }
    },
    Paragraph: {
      tag: 'p',
      props: {
        text: 'Short ETH with up to 4x Leverage',
        fontSize: 'Y1'
      }
    }
  },
  __name: 'UserWithLabel'
};

export function UserWithLabel(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
  const ref_Avatar = useRef(null);
  const ref_Box_9 = useRef(null);
  const ref_Box_10 = useRef(null);
  const ref_Box_11 = useRef(null);
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

  function attr_src({ props: props4 }) {
    return props4.src;
  }

  function attr_alt({ props: props4 }) {
    return props4.alt;
  }

  function attr_title({ props: props4 }) {
    return props4.title || props4.alt;
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

  function attr_src_2({ props: props4 }) {
    return props4.src;
  }

  function attr_alt_2({ props: props4 }) {
    return props4.alt;
  }

  function attr_title_2({ props: props4 }) {
    return props4.title || props4.alt;
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
  const dobj_Box = dobj["AvatarIndicator"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Notes"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Avatar"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["AvatarIndicator"]["Avatar"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["AvatarIndicator"]["StatusIndicator"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Notes"]["Title"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Notes"]["Paragraph"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Avatar = dobj["Avatar"]["Avatar"]
  dobj_Avatar.node = ref_Avatar.current
  const dobj_Box_8 = dobj["Avatar"]["StatusIndicator"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Notes"]["Title"]["caption"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Notes"]["Title"]["label"]
  dobj_Box_10.node = ref_Box_11.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="Y2"
      boxSize="fit-content"
      theme="dialog"
      padding="Z A Z Z"
      round="A"
      align="center flex-start"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        boxSize="fit-content"
        position="relative"
        round="100%"
        tag="div"
        ref={ref_Box_2}
        Avatar={{
          props: {
            props: {
              boxSize: "B2+W",
            },
          },
          __ref: {},
        }}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      >
        <Box
          display="block"
          avatarType="initials"
          borderRadius="100%"
          boxSize="C+X C+X"
          src="https://api.dicebear.com/7.x/initials/svg?seed=Avatar"
          tag="img"
          ref={ref_Box_5}
          __ref={{}}
          {...dobj_Box_4.props}
          src={attr_src(dobj_Box_4)}
          alt={attr_alt(dobj_Box_4)}
          title={attr_title(dobj_Box_4)}
          domqlElementObject={dobj_Box_4}
        />
        <Box
          position="absolute"
          bottom="V"
          right="0"
          boxSize="Z"
          background="green2"
          round="100%"
          border="solid, black 0"
          borderWidth="1px"
          tag="div"
          ref={ref_Box_6}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        />
      </Box>
      <Box
        margin="V2 - - -"
        justifyContent="center"
        gap="W2"
        flow="column"
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
          gap="Y1"
          fontSize="Z2"
          fontWeight="500"
          lineHeight="1em"
          alignItems="center"
          display="flex"
          tag="div"
          ref={ref_Box_7}
          className={`${css(flow_3(dobj_Box_6))} ${css(
            wrap_3(dobj_Box_6)
          )} ${css(align_3(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        >
          <Box
            text="ETHDOWN"
            tag="caption"
            ref={ref_Box_10}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          />
          <Box
            text="-2.902x"
            fontSize="X2"
            boxSize="fit-content fit-content"
            background="#F4454E"
            padding="W2 Y2"
            round="Y1"
            fontWeight="400"
            display="flex"
            tag="label"
            ref={ref_Box_11}
            className={`${css(flow_5(dobj_Box_10))} ${css(
              wrap_5(dobj_Box_10)
            )} ${css(align_5(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          />
        </Box>
        <Box
          text="Short ETH with up to 4x Leverage"
          fontSize="Y1"
          alignItems="center"
          margin="0"
          fontWeight="400"
          color="gray4"
          display="flex"
          tag="p"
          ref={ref_Box_8}
          className={`${css(flow_4(dobj_Box_7))} ${css(
            wrap_4(dobj_Box_7)
          )} ${css(align_4(dobj_Box_7))}`}
          {...dobj_Box_7.props}
          domqlElementObject={dobj_Box_7}
        />
      </Box>
      <Box
        boxSize="fit-content"
        position="relative"
        round="100%"
        tag="div"
        ref={ref_Box_4}
        {...dobj_Box_3.props}
        domqlElementObject={dobj_Box_3}
      >
        <Avatar
          boxSize="C+V"
          display="block"
          avatarType="initials"
          borderRadius="100%"
          src="https://api.dicebear.com/7.x/initials/svg?seed=Avatar"
          ref={ref_Avatar}
          {...dobj_Avatar.props}
          src={attr_src_2(dobj_Avatar)}
          alt={attr_alt_2(dobj_Avatar)}
          title={attr_title_2(dobj_Avatar)}
          domqlElementObject={dobj_Avatar}
        />
        <Box
          position="absolute"
          bottom="V"
          right="-V"
          boxSize="Z"
          background="green2"
          round="100%"
          border="solid, black 0"
          borderWidth="1px"
          tag="div"
          ref={ref_Box_9}
          {...dobj_Box_8.props}
          domqlElementObject={dobj_Box_8}
        />
      </Box>
    </Box>
  );
}
