import * as React from "react";
import { Box, Form, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
import { Svg } from "@symbo.ls/react-atoms";
import { css } from "@emotion/css";

const orig = {
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
        theme: 'dialog',
        round: 'Z2'
      }
    },
    props: {
      flow: 'column',
      boxSize: 'fit-content',
      minWidth: 'G3',
      position: 'relative',
      padding: 'Z1 Z2',
      round: 'A1'
    },
    Header: {
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
        minWidth: '100%',
        gap: 'A'
      },
      Title: {
        props: {
          align: 'center space-between'
        },
        caption: {
          props: {
            text: 'Title',
            fontSize: 'D',
            padding: 'W2 W2 - W2'
          }
        },
        x: {
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
            icon: 'x',
            fontSize: 'B2',
            boxSize: 'fit-content',
            theme: 'transparent',
            padding: '0'
          }
        }
      },
      Paragraph: {
        props: {
          fontSize: 'Z',
          color: 'gray4',
          padding: '- Y'
        }
      }
    }
  },
  props: {
    gap: 'B',
    boxSizing: 'border-box',
    padding: 'A+V A'
  },
  Header: {
    props: {gap: 'Z'},
    Title: {
      caption: {
        props: {padding: 'Y W2 - W2'}
      },
      x: {
        props: {
          margin: '-Y+V - - -',
          fontSize: 'C'
        }
      }
    }
  },
  Form: {
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
      '> div ~ button': {padding: 'Z2+V1 -'},
      '> div ~ div:last-child > button': {padding: 'Z2+V1 B'},
      '> div ~ div:last-child > button:first-child': {padding: 'Z2+V Z'}
    },
    Fields: {
      extend: {
        deps: {
          getSpacingBasedOnRatio: (props, propertyName, val) => {
      const CONFIG22 = getActiveConfig3();
      const { SPACING: SPACING2 } = CONFIG22;
      const { spacingRatio, unit } = props;
      const value = val || props[propertyName];
      if (spacingRatio) {
        let sequenceProps = SPACING2[spacingRatio];
        if (!sequenceProps) {
          const { type, base, range, subSequence } = SPACING2;
          sequenceProps = SPACING2[spacingRatio] = (0, import_utils18.merge)({
            ratio: spacingRatio,
            type: type + "-" + spacingRatio,
            unit,
            sequence: {},
            scales: {},
            templates: {},
            vars: {}
          }, {
            base,
            range,
            subSequence,
            ratio: SPACING2.ratio,
            unit: SPACING2.unit
          });
        }
        applySequenceVars(sequenceProps, { useDefault: false });
        return getSpacingByKey3(value, propertyName, sequenceProps);
      }
      return getSpacingByKey3(value, propertyName);
    }
        },
        props: {display: 'grid'},
        class: {
          area: ({ props }) => props.area ? { gridArea: props.area } : null,
          template: ({ props }) => props.template ? { gridTemplate: props.template } : null,
          templateAreas: ({ props }) => props.templateAreas ? { gridTemplateAreas: props.templateAreas } : null,
          column: ({ props }) => props.column ? { gridColumn: props.column } : null,
          columns: ({ props }) => props.columns ? { gridTemplateColumns: props.columns } : null,
          templateColumns: ({ props }) => props.templateColumns ? { gridTemplateColumns: props.templateColumns } : null,
          autoColumns: ({ props }) => props.autoColumns ? { gridAutoColumns: props.autoColumns } : null,
          columnStart: ({ props }) => props.columnStart ? { gridColumnStart: props.columnStart } : null,
          row: ({ props }) => props.row ? { gridRow: props.row } : null,
          rows: ({ props }) => props.rows ? { gridTemplateRows: props.rows } : null,
          templateRows: ({ props }) => props.templateRows ? { gridTemplateRows: props.templateRows } : null,
          autoRows: ({ props }) => props.autoRows ? { gridAutoRows: props.autoRows } : null,
          rowStart: ({ props }) => props.rowStart ? { gridRowStart: props.rowStart } : null,
          autoFlow: ({ props }) => props.autoFlow ? { gridAutoFlow: props.autoFlow } : null,
          columnGap: ({ props, deps }) => props.columnGap ? deps.getSpacingBasedOnRatio(props, "columnGap") : null,
          rowGap: ({ props, deps }) => props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null
        }
      },
      props: {
        columnGap: 'A',
        rowGap: 'A1'
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
              }
            }
          }
        },
        props: {
          width: '100%',
          Field: {minWidth: '100%'}
        }
      }
    },
    Submit: {
      props: {
        minWidth: '100%',
        margin: 'C - - -'
      }
    }
  },
  __name: 'CommonForm'
};

export function CommonForm(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Form = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
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

  function area({ props }) {
    return props.area
      ? {
          gridArea: props.area,
        }
      : null;
  }

  function template({ props }) {
    return props.template
      ? {
          gridTemplate: props.template,
        }
      : null;
  }

  function templateAreas({ props }) {
    return props.templateAreas
      ? {
          gridTemplateAreas: props.templateAreas,
        }
      : null;
  }

  function column({ props }) {
    return props.column
      ? {
          gridColumn: props.column,
        }
      : null;
  }

  function columns({ props }) {
    return props.columns
      ? {
          gridTemplateColumns: props.columns,
        }
      : null;
  }

  function templateColumns({ props }) {
    return props.templateColumns
      ? {
          gridTemplateColumns: props.templateColumns,
        }
      : null;
  }

  function autoColumns({ props }) {
    return props.autoColumns
      ? {
          gridAutoColumns: props.autoColumns,
        }
      : null;
  }

  function columnStart({ props }) {
    return props.columnStart
      ? {
          gridColumnStart: props.columnStart,
        }
      : null;
  }

  function row({ props }) {
    return props.row
      ? {
          gridRow: props.row,
        }
      : null;
  }

  function rows({ props }) {
    return props.rows
      ? {
          gridTemplateRows: props.rows,
        }
      : null;
  }

  function templateRows({ props }) {
    return props.templateRows
      ? {
          gridTemplateRows: props.templateRows,
        }
      : null;
  }

  function autoRows({ props }) {
    return props.autoRows
      ? {
          gridAutoRows: props.autoRows,
        }
      : null;
  }

  function rowStart({ props }) {
    return props.rowStart
      ? {
          gridRowStart: props.rowStart,
        }
      : null;
  }

  function autoFlow({ props }) {
    return props.autoFlow
      ? {
          gridAutoFlow: props.autoFlow,
        }
      : null;
  }

  function columnGap({ props, deps }) {
    return props.columnGap
      ? deps.getSpacingBasedOnRatio(props, "columnGap")
      : null;
  }

  function rowGap({ props, deps }) {
    return props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null;
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

  function attr_type({ props }) {
    return props.type;
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Form = dobj["Form"]
  dobj_Form.node = ref_Form.current
  const dobj_Box_2 = dobj["Header"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Header"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Form"]["Fields"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Form"]["Submit"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Header"]["Title"]["caption"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Header"]["Title"]["x"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Svg = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="B"
      boxSizing="border-box"
      padding="A+V A"
      flow="column"
      boxSize="fit-content"
      minWidth="G3"
      position="relative"
      round="A1"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        gap="Z"
        minWidth="100%"
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
          lineHeight="1em"
          fontWeight="700"
          alignItems="center"
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
            padding="Y W2 - W2"
            text="Title"
            fontSize="D"
            tag="caption"
            ref={ref_Box_7}
            {...dobj_Box_6.props}
            domqlElementObject={dobj_Box_6}
          />
          <Box
            margin="-Y+V - - -"
            fontSize="C"
            icon="x"
            boxSize="fit-content"
            theme="transparent"
            padding="0"
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
            ref={ref_Box_8}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_6(dobj_Box_7))} ${css(
              wrap_6(dobj_Box_7)
            )} ${css(align_6(dobj_Box_7))}`}
            {...dobj_Box_7.props}
            type={attr_type(dobj_Box_7)}
            placeholder={attr_placeholder(dobj_Box_7)}
            tabIndex={attr_tabIndex(dobj_Box_7)}
            domqlElementObject={dobj_Box_7}
          >
            {show_Svg(dobj_Svg) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          fontSize="Z"
          color="gray4"
          padding="- Y"
          margin="0"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_5(dobj_Box_3))} ${css(
            wrap_5(dobj_Box_3)
          )} ${css(align_5(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
      </Box>
      <Form
        flow="column"
        display="flex"
        ref={ref_Form}
        className={`${css(flow_3(dobj_Form))} ${css(wrap_3(dobj_Form))} ${css(
          align_3(dobj_Form)
        )}`}
        {...dobj_Form.props}
        domqlElementObject={dobj_Form}
      >
        <Box
          columnGap="A"
          rowGap="A1"
          display="grid"
          tag="div"
          ref={ref_Box_5}
          className={`${css(area(dobj_Box_4))} ${css(
            template(dobj_Box_4)
          )} ${css(templateAreas(dobj_Box_4))} ${css(column(dobj_Box_4))} ${css(
            columns(dobj_Box_4)
          )} ${css(templateColumns(dobj_Box_4))} ${css(
            autoColumns(dobj_Box_4)
          )} ${css(columnStart(dobj_Box_4))} ${css(row(dobj_Box_4))} ${css(
            rows(dobj_Box_4)
          )} ${css(templateRows(dobj_Box_4))} ${css(
            autoRows(dobj_Box_4)
          )} ${css(rowStart(dobj_Box_4))} ${css(autoFlow(dobj_Box_4))} ${css(
            columnGap(dobj_Box_4)
          )} ${css(rowGap(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        />
        <Box
          minWidth="100%"
          margin="C - - -"
          tag="div"
          ref={ref_Box_6}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        />
      </Form>
    </Box>
  );
}

import { Field, Input } from "@symbo.ls/react";

const orig_2 = {
  extend: {
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
          theme: 'dialog',
          round: 'Z2'
        }
      },
      props: {
        flow: 'column',
        boxSize: 'fit-content',
        minWidth: 'G3',
        position: 'relative',
        padding: 'Z1 Z2',
        round: 'A1'
      },
      Header: {
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
          minWidth: '100%',
          gap: 'A'
        },
        Title: {
          props: {
            align: 'center space-between'
          },
          caption: {
            props: {
              text: 'Title',
              fontSize: 'D',
              padding: 'W2 W2 - W2'
            }
          },
          x: {
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
              icon: 'x',
              fontSize: 'B2',
              boxSize: 'fit-content',
              theme: 'transparent',
              padding: '0'
            }
          }
        },
        Paragraph: {
          props: {
            fontSize: 'Z',
            color: 'gray4',
            padding: '- Y'
          }
        }
      }
    },
    props: {
      gap: 'B',
      boxSizing: 'border-box',
      padding: 'A+V A'
    },
    Header: {
      props: {gap: 'Z'},
      Title: {
        caption: {
          props: {padding: 'Y W2 - W2'}
        },
        x: {
          props: {
            margin: '-Y+V - - -',
            fontSize: 'C'
          }
        }
      }
    },
    Form: {
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
        '> div ~ button': {padding: 'Z2+V1 -'},
        '> div ~ div:last-child > button': {padding: 'Z2+V1 B'},
        '> div ~ div:last-child > button:first-child': {padding: 'Z2+V Z'}
      },
      Fields: {
        extend: {
          deps: {
            getSpacingBasedOnRatio: (props, propertyName, val) => {
      const CONFIG22 = getActiveConfig3();
      const { SPACING: SPACING2 } = CONFIG22;
      const { spacingRatio, unit } = props;
      const value = val || props[propertyName];
      if (spacingRatio) {
        let sequenceProps = SPACING2[spacingRatio];
        if (!sequenceProps) {
          const { type, base, range, subSequence } = SPACING2;
          sequenceProps = SPACING2[spacingRatio] = (0, import_utils18.merge)({
            ratio: spacingRatio,
            type: type + "-" + spacingRatio,
            unit,
            sequence: {},
            scales: {},
            templates: {},
            vars: {}
          }, {
            base,
            range,
            subSequence,
            ratio: SPACING2.ratio,
            unit: SPACING2.unit
          });
        }
        applySequenceVars(sequenceProps, { useDefault: false });
        return getSpacingByKey3(value, propertyName, sequenceProps);
      }
      return getSpacingByKey3(value, propertyName);
    }
          },
          props: {display: 'grid'},
          class: {
            area: ({ props }) => props.area ? { gridArea: props.area } : null,
            template: ({ props }) => props.template ? { gridTemplate: props.template } : null,
            templateAreas: ({ props }) => props.templateAreas ? { gridTemplateAreas: props.templateAreas } : null,
            column: ({ props }) => props.column ? { gridColumn: props.column } : null,
            columns: ({ props }) => props.columns ? { gridTemplateColumns: props.columns } : null,
            templateColumns: ({ props }) => props.templateColumns ? { gridTemplateColumns: props.templateColumns } : null,
            autoColumns: ({ props }) => props.autoColumns ? { gridAutoColumns: props.autoColumns } : null,
            columnStart: ({ props }) => props.columnStart ? { gridColumnStart: props.columnStart } : null,
            row: ({ props }) => props.row ? { gridRow: props.row } : null,
            rows: ({ props }) => props.rows ? { gridTemplateRows: props.rows } : null,
            templateRows: ({ props }) => props.templateRows ? { gridTemplateRows: props.templateRows } : null,
            autoRows: ({ props }) => props.autoRows ? { gridAutoRows: props.autoRows } : null,
            rowStart: ({ props }) => props.rowStart ? { gridRowStart: props.rowStart } : null,
            autoFlow: ({ props }) => props.autoFlow ? { gridAutoFlow: props.autoFlow } : null,
            columnGap: ({ props, deps }) => props.columnGap ? deps.getSpacingBasedOnRatio(props, "columnGap") : null,
            rowGap: ({ props, deps }) => props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null
          }
        },
        props: {
          columnGap: 'A',
          rowGap: 'A1'
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
                }
              }
            }
          },
          props: {
            width: '100%',
            Field: {minWidth: '100%'}
          }
        }
      },
      Submit: {
        props: {
          minWidth: '100%',
          margin: 'C - - -'
        }
      }
    },
    __name: 'CommonForm'
  },
  Header: {
    Title: {
      caption: {
        props: {
          text: 'We’d love to help'
        }
      }
    },
    Paragraph: {
      props: {
        text: 'Reach out and we’ll get in touch within 24 hours.'
      }
    }
  },
  Form: {
    Fields: {
      '0': {
        props: {gridColumn: '1'},
        Title: {
          props: {text: 'First name'}
        },
        Field: {
          Input: {
            props: {
              placeholder: 'First name'
            }
          }
        }
      },
      '1': {
        props: {gridColumn: '2'},
        Title: {
          props: {text: 'Last name'}
        },
        Field: {
          Input: {
            props: {
              placeholder: 'Last name'
            }
          }
        }
      },
      '2': {
        props: {
          gridColumn: '1 / span 2'
        },
        Title: {props: {text: 'Email'}},
        Field: {
          Input: {
            props: {
              placeholder: 'example@email.com'
            }
          }
        }
      },
      '3': {
        props: {
          gridColumn: '1 / span 2'
        },
        Title: {
          props: {text: 'Message'}
        },
        Field: {
          extend: {
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
            }
          }
        }
      },
      props: {
        columns: 'repeat(2, 1fr)'
      }
    },
    ParagraphButtonWithCheckbox: {padding: 'Z1 Z - Z'},
    Submit: {
      extend: {
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
          theme: 'primary',
          boxSize: 'fit-content',
          padding: 'Z2 A2',
          round: 'Z1',
          gap: 'X1',
          position: 'relative'
        },
        Icon: {
          props: {fontSize: 'B1'}
        },
        caption: {
          props: {
            text: 'Button',
            line_height: '1em',
            fontSize: 'Z2',
            letterSpacing: '.005em'
          }
        }
      },
      caption: {
        props: {text: 'Send message'}
      }
    }
  },
  __name: 'ContactForm'
};

export function ContactForm(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Form = useRef(null);
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
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_17 = useRef(null);
  const ref_Field = useRef(null);
  const ref_Box_18 = useRef(null);
  const ref_Field_2 = useRef(null);
  const ref_Box_19 = useRef(null);
  const ref_Field_3 = useRef(null);
  const ref_Box_20 = useRef(null);
  const ref_Field_4 = useRef(null);
  const ref_Box_21 = useRef(null);
  const ref_Box_22 = useRef(null);
  const ref_Box_23 = useRef(null);
  const ref_Box_24 = useRef(null);
  const ref_Input = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Input_2 = useRef(null);
  const ref_Svg_4 = useRef(null);
  const ref_Input_3 = useRef(null);
  const ref_Svg_5 = useRef(null);
  const ref_Box_25 = useRef(null);
  const ref_Box_26 = useRef(null);
  const ref_Svg_6 = useRef(null);
  const ref_Svg_7 = useRef(null);
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

  function area({ props }) {
    return props.area
      ? {
          gridArea: props.area,
        }
      : null;
  }

  function template({ props }) {
    return props.template
      ? {
          gridTemplate: props.template,
        }
      : null;
  }

  function templateAreas({ props }) {
    return props.templateAreas
      ? {
          gridTemplateAreas: props.templateAreas,
        }
      : null;
  }

  function column({ props }) {
    return props.column
      ? {
          gridColumn: props.column,
        }
      : null;
  }

  function columns({ props }) {
    return props.columns
      ? {
          gridTemplateColumns: props.columns,
        }
      : null;
  }

  function templateColumns({ props }) {
    return props.templateColumns
      ? {
          gridTemplateColumns: props.templateColumns,
        }
      : null;
  }

  function autoColumns({ props }) {
    return props.autoColumns
      ? {
          gridAutoColumns: props.autoColumns,
        }
      : null;
  }

  function columnStart({ props }) {
    return props.columnStart
      ? {
          gridColumnStart: props.columnStart,
        }
      : null;
  }

  function row({ props }) {
    return props.row
      ? {
          gridRow: props.row,
        }
      : null;
  }

  function rows({ props }) {
    return props.rows
      ? {
          gridTemplateRows: props.rows,
        }
      : null;
  }

  function templateRows({ props }) {
    return props.templateRows
      ? {
          gridTemplateRows: props.templateRows,
        }
      : null;
  }

  function autoRows({ props }) {
    return props.autoRows
      ? {
          gridAutoRows: props.autoRows,
        }
      : null;
  }

  function rowStart({ props }) {
    return props.rowStart
      ? {
          gridRowStart: props.rowStart,
        }
      : null;
  }

  function autoFlow({ props }) {
    return props.autoFlow
      ? {
          gridAutoFlow: props.autoFlow,
        }
      : null;
  }

  function columnGap({ props, deps }) {
    return props.columnGap
      ? deps.getSpacingBasedOnRatio(props, "columnGap")
      : null;
  }

  function rowGap({ props, deps }) {
    return props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null;
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

  function attr_type({ props }) {
    return props.type;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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

  function attr_type_2({ props }) {
    return props.type;
  }

  function attr_placeholder_2({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_2({ props }) {
    return props.tabIndex;
  }

  function flow_9({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_9({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_9({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_10({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_10({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_10({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_11({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_11({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_11({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_12({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_12({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_12({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
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

  function flow_14({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_14({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_14({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_3({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_3({ props }) {
    return props.tabIndex;
  }

  function flow_15({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_15({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_15({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_4({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_4({ props }) {
    return props.tabIndex;
  }

  function flow_16({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_16({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_16({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_5({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_5({ props }) {
    return props.tabIndex;
  }

  function attr_placeholder_6({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_6({ props }) {
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

  function attr_placeholder_7({ props: props4 }) {
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

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_7({ props: props4 }) {
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

  function attr_type_4({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_8({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_8({ props: props4 }) {
    return props4.tabIndex;
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

  function attr_type_5({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_9({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_3({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_placeholder_10({ props: props4 }) {
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

  function attr_type_6({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_10({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_4({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_pattern_4({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_4({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_4({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_4({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_4({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_11({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value_4({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled_4({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_4({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_4({ props: props4 }) {
    return props4.required;
  }

  function attr_type_7({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_11({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_5({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_pattern_5({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_5({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_5({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_5({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_5({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_12({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value_5({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled_5({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_5({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_5({ props: props4 }) {
    return props4.required;
  }

  function attr_type_8({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_12({ props: props4 }) {
    return props4.tabIndex;
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

  function show_Svg_6({ parent: parent2, props: props4 }) {
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Form = dobj["Form"]
  dobj_Form.node = ref_Form.current
  const dobj_Box_2 = dobj["Header"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Header"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Form"]["Fields"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Form"]["ParagraphButtonWithCheckbox"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Form"]["Submit"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Header"]["Title"]["caption"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Header"]["Title"]["x"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Form"]["Fields"]["0"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Form"]["Fields"]["1"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Form"]["Fields"]["2"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Form"]["Fields"]["3"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["Form"]["Submit"]["caption"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Svg = dobj["Form"]["Submit"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_16 = dobj["Form"]["Fields"]["0"]["Title"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Field = dobj["Form"]["Fields"]["0"]["Field"]
  dobj_Field.node = ref_Field.current
  const dobj_Box_17 = dobj["Form"]["Fields"]["1"]["Title"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Field_2 = dobj["Form"]["Fields"]["1"]["Field"]
  dobj_Field_2.node = ref_Field_2.current
  const dobj_Box_18 = dobj["Form"]["Fields"]["2"]["Title"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Field_3 = dobj["Form"]["Fields"]["2"]["Field"]
  dobj_Field_3.node = ref_Field_3.current
  const dobj_Box_19 = dobj["Form"]["Fields"]["3"]["Title"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Field_4 = dobj["Form"]["Fields"]["3"]["Field"]
  dobj_Field_4.node = ref_Field_4.current
  const dobj_Box_20 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]["Input"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Box_21 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]["Flex"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Box_22 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]["P"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Box_23 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]["Button"]
  dobj_Box_23.node = ref_Box_24.current
  const dobj_Input = dobj["Form"]["Fields"]["0"]["Field"]["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Svg_3 = dobj["Form"]["Fields"]["0"]["Field"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Input_2 = dobj["Form"]["Fields"]["1"]["Field"]["Input"]
  dobj_Input_2.node = ref_Input_2.current
  const dobj_Svg_4 = dobj["Form"]["Fields"]["1"]["Field"]["Icon"]
  dobj_Svg_4.node = ref_Svg_4.current
  const dobj_Input_3 = dobj["Form"]["Fields"]["2"]["Field"]["Input"]
  dobj_Input_3.node = ref_Input_3.current
  const dobj_Svg_5 = dobj["Form"]["Fields"]["2"]["Field"]["Icon"]
  dobj_Svg_5.node = ref_Svg_5.current
  const dobj_Box_24 = dobj["Form"]["Fields"]["3"]["Field"]["TextArea"]
  dobj_Box_24.node = ref_Box_25.current
  const dobj_Box_25 = dobj["Form"]["Fields"]["3"]["Field"]["Input"]
  dobj_Box_25.node = ref_Box_26.current
  const dobj_Svg_6 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]["Flex"]["Icon"]
  dobj_Svg_6.node = ref_Svg_6.current
  const dobj_Svg_7 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]["Button"]["Icon"]
  dobj_Svg_7.node = ref_Svg_7.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="B"
      boxSizing="border-box"
      padding="A+V A"
      flow="column"
      boxSize="fit-content"
      minWidth="G3"
      position="relative"
      round="A1"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        gap="Z"
        minWidth="100%"
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
          lineHeight="1em"
          fontWeight="700"
          alignItems="center"
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
            text="We’d love to help"
            padding="Y W2 - W2"
            fontSize="D"
            tag="caption"
            ref={ref_Box_8}
            {...dobj_Box_7.props}
            domqlElementObject={dobj_Box_7}
          />
          <Box
            margin="-Y+V - - -"
            fontSize="C"
            icon="x"
            boxSize="fit-content"
            theme="transparent"
            padding="0"
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
            ref={ref_Box_9}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_8(dobj_Box_8))} ${css(
              wrap_8(dobj_Box_8)
            )} ${css(align_8(dobj_Box_8))}`}
            {...dobj_Box_8.props}
            type={attr_type_2(dobj_Box_8)}
            placeholder={attr_placeholder_2(dobj_Box_8)}
            tabIndex={attr_tabIndex_2(dobj_Box_8)}
            domqlElementObject={dobj_Box_8}
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
                {...dobj_Svg_2.props}
                domqlElementObject={dobj_Svg_2}
              />
            ) : null}
          </Box>
        </Box>
        <Box
          text="Reach out and we’ll get in touch within 24 hours."
          fontSize="Z"
          color="gray4"
          padding="- Y"
          margin="0"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_5(dobj_Box_3))} ${css(
            wrap_5(dobj_Box_3)
          )} ${css(align_5(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
      </Box>
      <Form
        flow="column"
        display="flex"
        ref={ref_Form}
        className={`${css(flow_3(dobj_Form))} ${css(wrap_3(dobj_Form))} ${css(
          align_3(dobj_Form)
        )}`}
        {...dobj_Form.props}
        domqlElementObject={dobj_Form}
      >
        <Box
          columns="repeat(2, 1fr)"
          columnGap="A"
          rowGap="A1"
          display="grid"
          tag="div"
          ref={ref_Box_5}
          className={`${css(area(dobj_Box_4))} ${css(
            template(dobj_Box_4)
          )} ${css(templateAreas(dobj_Box_4))} ${css(column(dobj_Box_4))} ${css(
            columns(dobj_Box_4)
          )} ${css(templateColumns(dobj_Box_4))} ${css(
            autoColumns(dobj_Box_4)
          )} ${css(columnStart(dobj_Box_4))} ${css(row(dobj_Box_4))} ${css(
            rows(dobj_Box_4)
          )} ${css(templateRows(dobj_Box_4))} ${css(
            autoRows(dobj_Box_4)
          )} ${css(rowStart(dobj_Box_4))} ${css(autoFlow(dobj_Box_4))} ${css(
            columnGap(dobj_Box_4)
          )} ${css(rowGap(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            gridColumn="1"
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_10}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_9(dobj_Box_9))} ${css(
              wrap_9(dobj_Box_9)
            )} ${css(align_9(dobj_Box_9))}`}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          >
            <Box
              text="First name"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_17}
              {...dobj_Box_16.props}
              domqlElementObject={dobj_Box_16}
            />
            <Field
              minWidth="100%"
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
              className={`${css(flow_14(dobj_Field))} ${css(
                wrap_14(dobj_Field)
              )} ${css(align_14(dobj_Field))}`}
              {...dobj_Field.props}
              placeholder={attr_placeholder_3(dobj_Field)}
              tabIndex={attr_tabIndex_3(dobj_Field)}
              domqlElementObject={dobj_Field}
            >
              <Input
                placeholder="First name"
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
                pattern={attr_pattern_2(dobj_Input)}
                minLength={attr_minLength_2(dobj_Input)}
                maxLength={attr_maxLength_2(dobj_Input)}
                name={attr_name_2(dobj_Input)}
                autoComplete={attr_autocomplete_2(dobj_Input)}
                placeholder={attr_placeholder_9(dobj_Input)}
                value={attr_value_2(dobj_Input)}
                disabled={attr_disabled_2(dobj_Input)}
                readonly={attr_readonly_2(dobj_Input)}
                required={attr_required_2(dobj_Input)}
                type={attr_type_5(dobj_Input)}
                tabIndex={attr_tabIndex_9(dobj_Input)}
                domqlElementObject={dobj_Input}
              />
              {show_Svg_3(dobj_Svg_3) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
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
            </Field>
          </Box>
          <Box
            gridColumn="2"
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_11}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_10(dobj_Box_10))} ${css(
              wrap_10(dobj_Box_10)
            )} ${css(align_10(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          >
            <Box
              text="Last name"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_18}
              {...dobj_Box_17.props}
              domqlElementObject={dobj_Box_17}
            />
            <Field
              minWidth="100%"
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
              ref={ref_Field_2}
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
              className={`${css(flow_15(dobj_Field_2))} ${css(
                wrap_15(dobj_Field_2)
              )} ${css(align_15(dobj_Field_2))}`}
              {...dobj_Field_2.props}
              placeholder={attr_placeholder_4(dobj_Field_2)}
              tabIndex={attr_tabIndex_4(dobj_Field_2)}
              domqlElementObject={dobj_Field_2}
            >
              <Input
                placeholder="Last name"
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
                ref={ref_Input_2}
                lineHeight={1}
                {...dobj_Input_2.props}
                pattern={attr_pattern_3(dobj_Input_2)}
                minLength={attr_minLength_3(dobj_Input_2)}
                maxLength={attr_maxLength_3(dobj_Input_2)}
                name={attr_name_3(dobj_Input_2)}
                autoComplete={attr_autocomplete_3(dobj_Input_2)}
                placeholder={attr_placeholder_10(dobj_Input_2)}
                value={attr_value_3(dobj_Input_2)}
                disabled={attr_disabled_3(dobj_Input_2)}
                readonly={attr_readonly_3(dobj_Input_2)}
                required={attr_required_3(dobj_Input_2)}
                type={attr_type_6(dobj_Input_2)}
                tabIndex={attr_tabIndex_10(dobj_Input_2)}
                domqlElementObject={dobj_Input_2}
              />
              {show_Svg_4(dobj_Svg_4) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
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
            </Field>
          </Box>
          <Box
            gridColumn="1 / span 2"
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_12}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_11(dobj_Box_11))} ${css(
              wrap_11(dobj_Box_11)
            )} ${css(align_11(dobj_Box_11))}`}
            {...dobj_Box_11.props}
            domqlElementObject={dobj_Box_11}
          >
            <Box
              text="Email"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_19}
              {...dobj_Box_18.props}
              domqlElementObject={dobj_Box_18}
            />
            <Field
              minWidth="100%"
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
              ref={ref_Field_3}
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
              className={`${css(flow_16(dobj_Field_3))} ${css(
                wrap_16(dobj_Field_3)
              )} ${css(align_16(dobj_Field_3))}`}
              {...dobj_Field_3.props}
              placeholder={attr_placeholder_5(dobj_Field_3)}
              tabIndex={attr_tabIndex_5(dobj_Field_3)}
              domqlElementObject={dobj_Field_3}
            >
              <Input
                placeholder="example@email.com"
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
                ref={ref_Input_3}
                lineHeight={1}
                {...dobj_Input_3.props}
                pattern={attr_pattern_4(dobj_Input_3)}
                minLength={attr_minLength_4(dobj_Input_3)}
                maxLength={attr_maxLength_4(dobj_Input_3)}
                name={attr_name_4(dobj_Input_3)}
                autoComplete={attr_autocomplete_4(dobj_Input_3)}
                placeholder={attr_placeholder_11(dobj_Input_3)}
                value={attr_value_4(dobj_Input_3)}
                disabled={attr_disabled_4(dobj_Input_3)}
                readonly={attr_readonly_4(dobj_Input_3)}
                required={attr_required_4(dobj_Input_3)}
                type={attr_type_7(dobj_Input_3)}
                tabIndex={attr_tabIndex_11(dobj_Input_3)}
                domqlElementObject={dobj_Input_3}
              />
              {show_Svg_5(dobj_Svg_5) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
                  width="A"
                  height="A"
                  display="inline-block"
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
            </Field>
          </Box>
          <Box
            gridColumn="1 / span 2"
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_13}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_12(dobj_Box_12))} ${css(
              wrap_12(dobj_Box_12)
            )} ${css(align_12(dobj_Box_12))}`}
            {...dobj_Box_12.props}
            domqlElementObject={dobj_Box_12}
          >
            <Box
              text="Message"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_20}
              {...dobj_Box_19.props}
              domqlElementObject={dobj_Box_19}
            />
            <Field
              minWidth="100%"
              boxSize="fit-content"
              border="solid, gray .45 +80"
              borderWidth=".8px"
              overflow="hidden"
              round="Z1"
              maxWidth="F2+Z2"
              minHeight="C+V"
              align="center flex-start"
              gap="Y"
              boxSizing="border-box"
              padding="- A - Z2"
              position="relative"
              outline="solid, 0, blue .3"
              ref={ref_Field_4}
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
              {...dobj_Field_4.props}
              placeholder={attr_placeholder_6(dobj_Field_4)}
              tabIndex={attr_tabIndex_6(dobj_Field_4)}
              domqlElementObject={dobj_Field_4}
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
                ref={ref_Box_25}
                style={{
                  resize: "none",
                }}
                {...dobj_Box_24.props}
                domqlElementObject={dobj_Box_24}
              />
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
                ref={ref_Box_26}
                lineHeight={1}
                {...dobj_Box_25.props}
                pattern={attr_pattern_5(dobj_Box_25)}
                minLength={attr_minLength_5(dobj_Box_25)}
                maxLength={attr_maxLength_5(dobj_Box_25)}
                name={attr_name_5(dobj_Box_25)}
                autoComplete={attr_autocomplete_5(dobj_Box_25)}
                placeholder={attr_placeholder_12(dobj_Box_25)}
                value={attr_value_5(dobj_Box_25)}
                disabled={attr_disabled_5(dobj_Box_25)}
                readonly={attr_readonly_5(dobj_Box_25)}
                required={attr_required_5(dobj_Box_25)}
                type={attr_type_8(dobj_Box_25)}
                tabIndex={attr_tabIndex_12(dobj_Box_25)}
                domqlElementObject={dobj_Box_25}
              />
            </Field>
          </Box>
        </Box>
        <Box
          padding="Z1 Z - Z"
          gap="1ch"
          alignItems="center"
          display="flex"
          tag="label"
          ref={ref_Box_6}
          className={`${css(flow_6(dobj_Box_5))} ${css(
            wrap_6(dobj_Box_5)
          )} ${css(align_6(dobj_Box_5))}`}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        >
          <Box
            boxSize="fit-content fit-content"
            cursor="pointer"
            round="Y"
            tag="div"
            ref={ref_Box_14}
            Input={{
              props: {},
              __ref: undefined,
            }}
            Flex={{
              props: {
                fontSize: "A1",
              },
              __ref: undefined,
            }}
            {...dobj_Box_13.props}
            domqlElementObject={dobj_Box_13}
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
              ref={ref_Box_21}
              lineHeight={1}
              {...dobj_Box_20.props}
              pattern={attr_pattern(dobj_Box_20)}
              minLength={attr_minLength(dobj_Box_20)}
              maxLength={attr_maxLength(dobj_Box_20)}
              name={attr_name(dobj_Box_20)}
              autoComplete={attr_autocomplete(dobj_Box_20)}
              placeholder={attr_placeholder_7(dobj_Box_20)}
              value={attr_value(dobj_Box_20)}
              disabled={attr_disabled(dobj_Box_20)}
              readonly={attr_readonly(dobj_Box_20)}
              required={attr_required(dobj_Box_20)}
              type={attr_type_3(dobj_Box_20)}
              tabIndex={attr_tabIndex_7(dobj_Box_20)}
              domqlElementObject={dobj_Box_20}
            />
            <Box
              fontSize="A1"
              align="center center"
              padding="V"
              border="1px solid #57575C"
              round="X2"
              transition="background .15s ease-in-out"
              display="flex"
              tag="div"
              ref={ref_Box_22}
              className={`${css(flow_17(dobj_Box_21))} ${css(
                wrap_17(dobj_Box_21)
              )} ${css(align_17(dobj_Box_21))}`}
              {...dobj_Box_21.props}
              domqlElementObject={dobj_Box_21}
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
            </Box>
          </Box>
          <Box
            fontSize="Z"
            alignItems="center"
            gap="Y2"
            display="flex"
            tag="div"
            ref={ref_Box_15}
            P={{
              props: {
                color: "white",
              },
              __ref: undefined,
            }}
            className={`${css(flow_13(dobj_Box_14))} ${css(
              wrap_13(dobj_Box_14)
            )} ${css(align_13(dobj_Box_14))}`}
            {...dobj_Box_14.props}
            domqlElementObject={dobj_Box_14}
          >
            <Box
              color="white"
              text="Didn't get the code?"
              margin="0"
              tag="p"
              ref={ref_Box_23}
              {...dobj_Box_22.props}
              domqlElementObject={dobj_Box_22}
            />
            <Box
              text="Click to resend"
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
              ref={ref_Box_24}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_18(dobj_Box_23))} ${css(
                wrap_18(dobj_Box_23)
              )} ${css(align_18(dobj_Box_23))}`}
              {...dobj_Box_23.props}
              type={attr_type_4(dobj_Box_23)}
              placeholder={attr_placeholder_8(dobj_Box_23)}
              tabIndex={attr_tabIndex_8(dobj_Box_23)}
              domqlElementObject={dobj_Box_23}
            >
              {show_Svg_6(dobj_Svg_7) ? (
                <Svg
                  width="A"
                  height="A"
                  display="inline-block"
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
          </Box>
        </Box>
        <Box
          minWidth="100%"
          margin="C - - -"
          theme="primary"
          boxSize="fit-content"
          padding="Z2 A2"
          round="Z1"
          gap="X1"
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
          type={attr_type(dobj_Box_6)}
          placeholder={attr_placeholder(dobj_Box_6)}
          tabIndex={attr_tabIndex(dobj_Box_6)}
          domqlElementObject={dobj_Box_6}
        >
          <Box
            text="Send message"
            line_height="1em"
            fontSize="Z2"
            letterSpacing=".005em"
            tag="caption"
            ref={ref_Box_16}
            {...dobj_Box_15.props}
            domqlElementObject={dobj_Box_15}
          />
          {show_Svg(dobj_Svg) ? (
            <Svg
              fontSize="B1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ref={ref_Svg}
              dangerouslySetInnerHTML={{ __html: html(dobj_Svg) }}
              {...dobj_Svg.props}
              domqlElementObject={dobj_Svg}
            />
          ) : null}
        </Box>
      </Form>
    </Box>
  );
}

import { Button } from "@symbo.ls/react";

const orig_3 = {
  extend: {
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
          theme: 'dialog',
          round: 'Z2'
        }
      },
      props: {
        flow: 'column',
        boxSize: 'fit-content',
        minWidth: 'G3',
        position: 'relative',
        padding: 'Z1 Z2',
        round: 'A1'
      },
      Header: {
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
          minWidth: '100%',
          gap: 'A'
        },
        Title: {
          props: {
            align: 'center space-between'
          },
          caption: {
            props: {
              text: 'Title',
              fontSize: 'D',
              padding: 'W2 W2 - W2'
            }
          },
          x: {
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
              icon: 'x',
              fontSize: 'B2',
              boxSize: 'fit-content',
              theme: 'transparent',
              padding: '0'
            }
          }
        },
        Paragraph: {
          props: {
            fontSize: 'Z',
            color: 'gray4',
            padding: '- Y'
          }
        }
      }
    },
    props: {
      gap: 'B',
      boxSizing: 'border-box',
      padding: 'A+V A'
    },
    Header: {
      props: {gap: 'Z'},
      Title: {
        caption: {
          props: {padding: 'Y W2 - W2'}
        },
        x: {
          props: {
            margin: '-Y+V - - -',
            fontSize: 'C'
          }
        }
      }
    },
    Form: {
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
        '> div ~ button': {padding: 'Z2+V1 -'},
        '> div ~ div:last-child > button': {padding: 'Z2+V1 B'},
        '> div ~ div:last-child > button:first-child': {padding: 'Z2+V Z'}
      },
      Fields: {
        extend: {
          deps: {
            getSpacingBasedOnRatio: (props, propertyName, val) => {
      const CONFIG22 = getActiveConfig3();
      const { SPACING: SPACING2 } = CONFIG22;
      const { spacingRatio, unit } = props;
      const value = val || props[propertyName];
      if (spacingRatio) {
        let sequenceProps = SPACING2[spacingRatio];
        if (!sequenceProps) {
          const { type, base, range, subSequence } = SPACING2;
          sequenceProps = SPACING2[spacingRatio] = (0, import_utils18.merge)({
            ratio: spacingRatio,
            type: type + "-" + spacingRatio,
            unit,
            sequence: {},
            scales: {},
            templates: {},
            vars: {}
          }, {
            base,
            range,
            subSequence,
            ratio: SPACING2.ratio,
            unit: SPACING2.unit
          });
        }
        applySequenceVars(sequenceProps, { useDefault: false });
        return getSpacingByKey3(value, propertyName, sequenceProps);
      }
      return getSpacingByKey3(value, propertyName);
    }
          },
          props: {display: 'grid'},
          class: {
            area: ({ props }) => props.area ? { gridArea: props.area } : null,
            template: ({ props }) => props.template ? { gridTemplate: props.template } : null,
            templateAreas: ({ props }) => props.templateAreas ? { gridTemplateAreas: props.templateAreas } : null,
            column: ({ props }) => props.column ? { gridColumn: props.column } : null,
            columns: ({ props }) => props.columns ? { gridTemplateColumns: props.columns } : null,
            templateColumns: ({ props }) => props.templateColumns ? { gridTemplateColumns: props.templateColumns } : null,
            autoColumns: ({ props }) => props.autoColumns ? { gridAutoColumns: props.autoColumns } : null,
            columnStart: ({ props }) => props.columnStart ? { gridColumnStart: props.columnStart } : null,
            row: ({ props }) => props.row ? { gridRow: props.row } : null,
            rows: ({ props }) => props.rows ? { gridTemplateRows: props.rows } : null,
            templateRows: ({ props }) => props.templateRows ? { gridTemplateRows: props.templateRows } : null,
            autoRows: ({ props }) => props.autoRows ? { gridAutoRows: props.autoRows } : null,
            rowStart: ({ props }) => props.rowStart ? { gridRowStart: props.rowStart } : null,
            autoFlow: ({ props }) => props.autoFlow ? { gridAutoFlow: props.autoFlow } : null,
            columnGap: ({ props, deps }) => props.columnGap ? deps.getSpacingBasedOnRatio(props, "columnGap") : null,
            rowGap: ({ props, deps }) => props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null
          }
        },
        props: {
          columnGap: 'A',
          rowGap: 'A1'
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
                }
              }
            }
          },
          props: {
            width: '100%',
            Field: {minWidth: '100%'}
          }
        }
      },
      Submit: {
        props: {
          minWidth: '100%',
          margin: 'C - - -'
        }
      }
    },
    __name: 'CommonForm'
  },
  props: {minWidth: 'G3+C1'},
  Header: {
    Title: {
      caption: {
        props: {
          text: 'Log in to your account'
        }
      }
    },
    Paragraph: {
      props: {
        text: 'Enter your email address and password to log in.'
      }
    }
  },
  Form: {
    props: {
      ParagraphButtonWithCheckbox: {margin: 'A -'}
    },
    Fields: {
      '0': {
        Title: {props: {text: 'Email'}},
        Field: {
          Input: {
            props: {
              placeholder: 'Enter your email'
            }
          }
        }
      },
      '1': {
        Title: {
          props: {text: 'Password'}
        },
        Field: {
          Icon: null,
          Input: {
            props: {
              placeholder: 'Enter your password'
            }
          },
          Button: {props: {icon: 'eye'}}
        }
      }
    },
    ParagraphButtonWithCheckbox: {
      padding: '- Y1',
      Checkbox: {},
      ParagraphButton: {
        flex: '1',
        justifyContent: 'space-between',
        P: {
          text: 'Keep me logged in'
        },
        Button: {
          text: 'Forgot your password?',
          fontWeight: '400',
          textDecoration: 'none'
        }
      }
    },
    Submit: {
      extend: {
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
          theme: 'primary',
          boxSize: 'fit-content',
          padding: 'Z2 A2',
          round: 'Z1',
          gap: 'X1',
          position: 'relative'
        },
        Icon: {
          props: {fontSize: 'B1'}
        },
        caption: {
          props: {
            text: 'Button',
            line_height: '1em',
            fontSize: 'Z2',
            letterSpacing: '.005em'
          }
        }
      },
      props: {margin: 'A - - -'},
      caption: {
        props: {text: 'Sign in'}
      }
    }
  },
  DoubleHr: {},
  Footer: {
    '0': {},
    '1': {},
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
      gap: 'Z2'
    },
    childExtend: {
      extend: {
        extend: [
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
            tag: 'a',
            props: {
              aria: {},
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'currentColor',
              draggable: false
            },
            attr: {
              href: (el) => {
      const { context: ctx } = el;
      const { exec: exec2 } = ctx.utils;
      return exec2(el.props.href, el) || exec2(el.props, el).href;
    },
              target: ({ props }) => props.target,
              'aria-label': ({ props }) => props.aria ? props.aria.label : props.text,
              draggable: ({ props }) => props.draggable
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
          fontWeight: '500',
          text: 'Continue with Twitch',
          fontSize: 'Z1',
          gap: 'Z',
          boxSize: 'fit-content',
          padding: 'A A2',
          background: 'gray3',
          round: 'Z1',
          maxHeight: '3em',
          cursor: 'pointer',
          Icon: {
            name: 'twitch',
            boxSize: 'A2'
          }
        }
      },
      props: {
        minWidth: '100%',
        color: 'gray4'
      }
    }
  },
  __name: 'LogIn'
};

export function LogIn(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Form = useRef(null);
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
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Svg_4 = useRef(null);
  const ref_Box_19 = useRef(null);
  const ref_Field = useRef(null);
  const ref_Box_20 = useRef(null);
  const ref_Field_2 = useRef(null);
  const ref_Box_21 = useRef(null);
  const ref_Box_22 = useRef(null);
  const ref_Box_23 = useRef(null);
  const ref_Box_24 = useRef(null);
  const ref_Input = useRef(null);
  const ref_Svg_5 = useRef(null);
  const ref_Input_2 = useRef(null);
  const ref_Button = useRef(null);
  const ref_Svg_6 = useRef(null);
  const ref_Svg_7 = useRef(null);
  const ref_Svg_8 = useRef(null);
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

  function area({ props }) {
    return props.area
      ? {
          gridArea: props.area,
        }
      : null;
  }

  function template({ props }) {
    return props.template
      ? {
          gridTemplate: props.template,
        }
      : null;
  }

  function templateAreas({ props }) {
    return props.templateAreas
      ? {
          gridTemplateAreas: props.templateAreas,
        }
      : null;
  }

  function column({ props }) {
    return props.column
      ? {
          gridColumn: props.column,
        }
      : null;
  }

  function columns({ props }) {
    return props.columns
      ? {
          gridTemplateColumns: props.columns,
        }
      : null;
  }

  function templateColumns({ props }) {
    return props.templateColumns
      ? {
          gridTemplateColumns: props.templateColumns,
        }
      : null;
  }

  function autoColumns({ props }) {
    return props.autoColumns
      ? {
          gridAutoColumns: props.autoColumns,
        }
      : null;
  }

  function columnStart({ props }) {
    return props.columnStart
      ? {
          gridColumnStart: props.columnStart,
        }
      : null;
  }

  function row({ props }) {
    return props.row
      ? {
          gridRow: props.row,
        }
      : null;
  }

  function rows({ props }) {
    return props.rows
      ? {
          gridTemplateRows: props.rows,
        }
      : null;
  }

  function templateRows({ props }) {
    return props.templateRows
      ? {
          gridTemplateRows: props.templateRows,
        }
      : null;
  }

  function autoRows({ props }) {
    return props.autoRows
      ? {
          gridAutoRows: props.autoRows,
        }
      : null;
  }

  function rowStart({ props }) {
    return props.rowStart
      ? {
          gridRowStart: props.rowStart,
        }
      : null;
  }

  function autoFlow({ props }) {
    return props.autoFlow
      ? {
          gridAutoFlow: props.autoFlow,
        }
      : null;
  }

  function columnGap({ props, deps }) {
    return props.columnGap
      ? deps.getSpacingBasedOnRatio(props, "columnGap")
      : null;
  }

  function rowGap({ props, deps }) {
    return props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null;
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

  function flow_9({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_9({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_9({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
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

  function flow_10({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_10({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_10({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_href(el) {
    const { context: ctx } = el;
    const { exec: exec2 } = ctx.utils;
    return exec2(el.props.href, el) || exec2(el.props, el).href;
  }

  function attr_target({ props }) {
    return props.target;
  }

  function attr_aria_label({ props }) {
    return props.aria ? props.aria.label : props.text;
  }

  function attr_draggable({ props }) {
    return props.draggable;
  }

  function attr_placeholder_2({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_2({ props }) {
    return props.tabIndex;
  }

  function flow_11({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_11({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_11({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_href_2(el) {
    const { context: ctx } = el;
    const { exec: exec2 } = ctx.utils;
    return exec2(el.props.href, el) || exec2(el.props, el).href;
  }

  function attr_target_2({ props }) {
    return props.target;
  }

  function attr_aria_label_2({ props }) {
    return props.aria ? props.aria.label : props.text;
  }

  function attr_draggable_2({ props }) {
    return props.draggable;
  }

  function attr_placeholder_3({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_3({ props }) {
    return props.tabIndex;
  }

  function flow_12({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_12({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_12({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_2({ props }) {
    return props.type;
  }

  function attr_placeholder_4({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_4({ props }) {
    return props.tabIndex;
  }

  function flow_13({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_13({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_13({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_14({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_14({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_14({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
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

  function show_Svg_3({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function show_Svg_4({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function flow_16({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_16({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_16({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_5({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_5({ props }) {
    return props.tabIndex;
  }

  function flow_17({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_17({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_17({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_6({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_6({ props }) {
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

  function attr_placeholder_7({ props: props4 }) {
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

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_7({ props: props4 }) {
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

  function flow_19({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_19({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_19({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_4({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_8({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_8({ props: props4 }) {
    return props4.tabIndex;
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

  function attr_type_5({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_9({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_5({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_placeholder_10({ props: props4 }) {
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

  function attr_type_6({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_10({ props: props4 }) {
    return props4.tabIndex;
  }

  function flow_20({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_20({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_20({ props: props4 }) {
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

  function attr_placeholder_11({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_11({ props: props4 }) {
    return props4.tabIndex;
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

  function show_Svg_6({ parent: parent2, props: props4 }) {
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

  function show_Svg_7({ parent: parent2, props: props4 }) {
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Form = dobj["Form"]
  dobj_Form.node = ref_Form.current
  const dobj_Box_2 = dobj["DoubleHr"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Footer"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Header"]["Title"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Header"]["Paragraph"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Form"]["Fields"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Form"]["ParagraphButtonWithCheckbox"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Form"]["Submit"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Footer"]["0"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Footer"]["1"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Header"]["Title"]["caption"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Header"]["Title"]["x"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["Form"]["Fields"]["0"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["Form"]["Fields"]["1"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Box_17 = dobj["Form"]["Submit"]["caption"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Svg = dobj["Form"]["Submit"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["Footer"]["0"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Svg_3 = dobj["Footer"]["1"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Svg_4 = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg_4.node = ref_Svg_4.current
  const dobj_Box_18 = dobj["Form"]["Fields"]["0"]["Title"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Field = dobj["Form"]["Fields"]["0"]["Field"]
  dobj_Field.node = ref_Field.current
  const dobj_Box_19 = dobj["Form"]["Fields"]["1"]["Title"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Field_2 = dobj["Form"]["Fields"]["1"]["Field"]
  dobj_Field_2.node = ref_Field_2.current
  const dobj_Box_20 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]["Input"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Box_21 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]["Flex"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Box_22 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]["P"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Box_23 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]["Button"]
  dobj_Box_23.node = ref_Box_24.current
  const dobj_Input = dobj["Form"]["Fields"]["0"]["Field"]["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Svg_5 = dobj["Form"]["Fields"]["0"]["Field"]["Icon"]
  dobj_Svg_5.node = ref_Svg_5.current
  const dobj_Input_2 = dobj["Form"]["Fields"]["1"]["Field"]["Input"]
  dobj_Input_2.node = ref_Input_2.current
  const dobj_Button = dobj["Form"]["Fields"]["1"]["Field"]["Button"]
  dobj_Button.node = ref_Button.current
  const dobj_Svg_6 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]["Flex"]["Icon"]
  dobj_Svg_6.node = ref_Svg_6.current
  const dobj_Svg_7 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]["Button"]["Icon"]
  dobj_Svg_7.node = ref_Svg_7.current
  const dobj_Svg_8 = dobj["Form"]["Fields"]["1"]["Field"]["Button"]["Icon"]
  dobj_Svg_8.node = ref_Svg_8.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      minWidth="G3+C1"
      gap="B"
      boxSizing="border-box"
      padding="A+V A"
      flow="column"
      boxSize="fit-content"
      position="relative"
      round="A1"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        gap="Z"
        minWidth="100%"
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
          lineHeight="1em"
          fontWeight="700"
          alignItems="center"
          display="flex"
          tag="div"
          ref={ref_Box_5}
          className={`${css(flow_6(dobj_Box_4))} ${css(
            wrap_6(dobj_Box_4)
          )} ${css(align_6(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            text="Log in to your account"
            padding="Y W2 - W2"
            fontSize="D"
            tag="caption"
            ref={ref_Box_12}
            {...dobj_Box_11.props}
            domqlElementObject={dobj_Box_11}
          />
          <Box
            margin="-Y+V - - -"
            fontSize="C"
            icon="x"
            boxSize="fit-content"
            theme="transparent"
            padding="0"
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
            {...dobj_Box_12.props}
            type={attr_type_2(dobj_Box_12)}
            placeholder={attr_placeholder_4(dobj_Box_12)}
            tabIndex={attr_tabIndex_4(dobj_Box_12)}
            domqlElementObject={dobj_Box_12}
          >
            {show_Svg_4(dobj_Svg_4) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          text="Enter your email address and password to log in."
          fontSize="Z"
          color="gray4"
          padding="- Y"
          margin="0"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_6}
          className={`${css(flow_7(dobj_Box_5))} ${css(
            wrap_7(dobj_Box_5)
          )} ${css(align_7(dobj_Box_5))}`}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        />
      </Box>
      <Form
        flow="column"
        display="flex"
        ref={ref_Form}
        ParagraphButtonWithCheckbox={{
          props: {
            margin: "A -",
          },
          __ref: undefined,
        }}
        className={`${css(flow_3(dobj_Form))} ${css(wrap_3(dobj_Form))} ${css(
          align_3(dobj_Form)
        )}`}
        {...dobj_Form.props}
        domqlElementObject={dobj_Form}
      >
        <Box
          columnGap="A"
          rowGap="A1"
          display="grid"
          tag="div"
          ref={ref_Box_7}
          className={`${css(area(dobj_Box_6))} ${css(
            template(dobj_Box_6)
          )} ${css(templateAreas(dobj_Box_6))} ${css(column(dobj_Box_6))} ${css(
            columns(dobj_Box_6)
          )} ${css(templateColumns(dobj_Box_6))} ${css(
            autoColumns(dobj_Box_6)
          )} ${css(columnStart(dobj_Box_6))} ${css(row(dobj_Box_6))} ${css(
            rows(dobj_Box_6)
          )} ${css(templateRows(dobj_Box_6))} ${css(
            autoRows(dobj_Box_6)
          )} ${css(rowStart(dobj_Box_6))} ${css(autoFlow(dobj_Box_6))} ${css(
            columnGap(dobj_Box_6)
          )} ${css(rowGap(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        >
          <Box
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_14}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_13(dobj_Box_13))} ${css(
              wrap_13(dobj_Box_13)
            )} ${css(align_13(dobj_Box_13))}`}
            {...dobj_Box_13.props}
            domqlElementObject={dobj_Box_13}
          >
            <Box
              text="Email"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_19}
              {...dobj_Box_18.props}
              domqlElementObject={dobj_Box_18}
            />
            <Field
              minWidth="100%"
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
              className={`${css(flow_16(dobj_Field))} ${css(
                wrap_16(dobj_Field)
              )} ${css(align_16(dobj_Field))}`}
              {...dobj_Field.props}
              placeholder={attr_placeholder_5(dobj_Field)}
              tabIndex={attr_tabIndex_5(dobj_Field)}
              domqlElementObject={dobj_Field}
            >
              <Input
                placeholder="Enter your email"
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
                pattern={attr_pattern_2(dobj_Input)}
                minLength={attr_minLength_2(dobj_Input)}
                maxLength={attr_maxLength_2(dobj_Input)}
                name={attr_name_2(dobj_Input)}
                autoComplete={attr_autocomplete_2(dobj_Input)}
                placeholder={attr_placeholder_9(dobj_Input)}
                value={attr_value_2(dobj_Input)}
                disabled={attr_disabled_2(dobj_Input)}
                readonly={attr_readonly_2(dobj_Input)}
                required={attr_required_2(dobj_Input)}
                type={attr_type_5(dobj_Input)}
                tabIndex={attr_tabIndex_9(dobj_Input)}
                domqlElementObject={dobj_Input}
              />
              {show_Svg_5(dobj_Svg_5) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
                  width="A"
                  height="A"
                  display="inline-block"
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
            </Field>
          </Box>
          <Box
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_15}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_14(dobj_Box_14))} ${css(
              wrap_14(dobj_Box_14)
            )} ${css(align_14(dobj_Box_14))}`}
            {...dobj_Box_14.props}
            domqlElementObject={dobj_Box_14}
          >
            <Box
              text="Password"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_20}
              {...dobj_Box_19.props}
              domqlElementObject={dobj_Box_19}
            />
            <Field
              minWidth="100%"
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
              ref={ref_Field_2}
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
              className={`${css(flow_17(dobj_Field_2))} ${css(
                wrap_17(dobj_Field_2)
              )} ${css(align_17(dobj_Field_2))}`}
              {...dobj_Field_2.props}
              placeholder={attr_placeholder_6(dobj_Field_2)}
              tabIndex={attr_tabIndex_6(dobj_Field_2)}
              domqlElementObject={dobj_Field_2}
            >
              <Input
                placeholder="Enter your password"
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
                ref={ref_Input_2}
                lineHeight={1}
                {...dobj_Input_2.props}
                pattern={attr_pattern_3(dobj_Input_2)}
                minLength={attr_minLength_3(dobj_Input_2)}
                maxLength={attr_maxLength_3(dobj_Input_2)}
                name={attr_name_3(dobj_Input_2)}
                autoComplete={attr_autocomplete_3(dobj_Input_2)}
                placeholder={attr_placeholder_10(dobj_Input_2)}
                value={attr_value_3(dobj_Input_2)}
                disabled={attr_disabled_3(dobj_Input_2)}
                readonly={attr_readonly_3(dobj_Input_2)}
                required={attr_required_3(dobj_Input_2)}
                type={attr_type_6(dobj_Input_2)}
                tabIndex={attr_tabIndex_10(dobj_Input_2)}
                domqlElementObject={dobj_Input_2}
              />
              <Button
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
                ref={ref_Button}
                style={{
                  appearance: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
                className={`${css(flow_20(dobj_Button))} ${css(
                  wrap_20(dobj_Button)
                )} ${css(align_20(dobj_Button))}`}
                {...dobj_Button.props}
                type={attr_type_7(dobj_Button)}
                placeholder={attr_placeholder_11(dobj_Button)}
                tabIndex={attr_tabIndex_11(dobj_Button)}
                domqlElementObject={dobj_Button}
              >
                {show_Svg_7(dobj_Svg_8) ? (
                  <Svg
                    icon="eye"
                    width="A"
                    height="A"
                    display="inline-block"
                    spriteId="eye"
                    src='<symbol id="eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></symbol>'
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
              </Button>
            </Field>
          </Box>
        </Box>
        <Box
          margin="A -"
          padding="- Y1"
          gap="1ch"
          alignItems="center"
          display="flex"
          tag="label"
          ref={ref_Box_8}
          Checkbox={{
            props: {},
            __ref: undefined,
          }}
          ParagraphButton={{
            props: {
              flex: "1",
              justifyContent: "space-between",
              P: {
                props: {
                  text: "Keep me logged in",
                },
                __ref: undefined,
              },
              Button: {
                props: {
                  text: "Forgot your password?",
                  fontWeight: "400",
                  textDecoration: "none",
                },
                __ref: undefined,
              },
            },
            __ref: undefined,
          }}
          className={`${css(flow_8(dobj_Box_7))} ${css(
            wrap_8(dobj_Box_7)
          )} ${css(align_8(dobj_Box_7))}`}
          {...dobj_Box_7.props}
          domqlElementObject={dobj_Box_7}
        >
          <Box
            boxSize="fit-content fit-content"
            cursor="pointer"
            round="Y"
            tag="div"
            ref={ref_Box_16}
            Input={{
              props: {},
              __ref: undefined,
            }}
            Flex={{
              props: {
                fontSize: "A1",
              },
              __ref: undefined,
            }}
            {...dobj_Box_15.props}
            domqlElementObject={dobj_Box_15}
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
              ref={ref_Box_21}
              lineHeight={1}
              {...dobj_Box_20.props}
              pattern={attr_pattern(dobj_Box_20)}
              minLength={attr_minLength(dobj_Box_20)}
              maxLength={attr_maxLength(dobj_Box_20)}
              name={attr_name(dobj_Box_20)}
              autoComplete={attr_autocomplete(dobj_Box_20)}
              placeholder={attr_placeholder_7(dobj_Box_20)}
              value={attr_value(dobj_Box_20)}
              disabled={attr_disabled(dobj_Box_20)}
              readonly={attr_readonly(dobj_Box_20)}
              required={attr_required(dobj_Box_20)}
              type={attr_type_3(dobj_Box_20)}
              tabIndex={attr_tabIndex_7(dobj_Box_20)}
              domqlElementObject={dobj_Box_20}
            />
            <Box
              fontSize="A1"
              align="center center"
              padding="V"
              border="1px solid #57575C"
              round="X2"
              transition="background .15s ease-in-out"
              display="flex"
              tag="div"
              ref={ref_Box_22}
              className={`${css(flow_18(dobj_Box_21))} ${css(
                wrap_18(dobj_Box_21)
              )} ${css(align_18(dobj_Box_21))}`}
              {...dobj_Box_21.props}
              domqlElementObject={dobj_Box_21}
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
            </Box>
          </Box>
          <Box
            flex="1"
            justifyContent="space-between"
            fontSize="Z"
            alignItems="center"
            gap="Y2"
            display="flex"
            tag="div"
            ref={ref_Box_17}
            P={{
              props: {
                text: "Keep me logged in",
                color: "white",
              },
              __ref: undefined,
            }}
            Button={{
              props: {
                text: "Forgot your password?",
                fontWeight: "400",
                textDecoration: "none",
              },
              __ref: undefined,
            }}
            className={`${css(flow_15(dobj_Box_16))} ${css(
              wrap_15(dobj_Box_16)
            )} ${css(align_15(dobj_Box_16))}`}
            {...dobj_Box_16.props}
            domqlElementObject={dobj_Box_16}
          >
            <Box
              text="Keep me logged in"
              color="white"
              margin="0"
              tag="p"
              ref={ref_Box_23}
              {...dobj_Box_22.props}
              domqlElementObject={dobj_Box_22}
            />
            <Box
              text="Forgot your password?"
              fontWeight="400"
              textDecoration="none"
              padding="0"
              background="transparent"
              color="white"
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
              ref={ref_Box_24}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_19(dobj_Box_23))} ${css(
                wrap_19(dobj_Box_23)
              )} ${css(align_19(dobj_Box_23))}`}
              {...dobj_Box_23.props}
              type={attr_type_4(dobj_Box_23)}
              placeholder={attr_placeholder_8(dobj_Box_23)}
              tabIndex={attr_tabIndex_8(dobj_Box_23)}
              domqlElementObject={dobj_Box_23}
            >
              {show_Svg_6(dobj_Svg_7) ? (
                <Svg
                  width="A"
                  height="A"
                  display="inline-block"
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
          </Box>
        </Box>
        <Box
          margin="A - - -"
          minWidth="100%"
          theme="primary"
          boxSize="fit-content"
          padding="Z2 A2"
          round="Z1"
          gap="X1"
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
          ref={ref_Box_9}
          style={{
            appearance: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          className={`${css(flow_9(dobj_Box_8))} ${css(
            wrap_9(dobj_Box_8)
          )} ${css(align_9(dobj_Box_8))}`}
          {...dobj_Box_8.props}
          type={attr_type(dobj_Box_8)}
          placeholder={attr_placeholder(dobj_Box_8)}
          tabIndex={attr_tabIndex(dobj_Box_8)}
          domqlElementObject={dobj_Box_8}
        >
          <Box
            text="Sign in"
            line_height="1em"
            fontSize="Z2"
            letterSpacing=".005em"
            tag="caption"
            ref={ref_Box_18}
            {...dobj_Box_17.props}
            domqlElementObject={dobj_Box_17}
          />
          {show_Svg(dobj_Svg) ? (
            <Svg
              fontSize="B1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ref={ref_Svg}
              dangerouslySetInnerHTML={{ __html: html(dobj_Svg) }}
              {...dobj_Svg.props}
              domqlElementObject={dobj_Svg}
            />
          ) : null}
        </Box>
      </Form>
      <Box
        gap="B"
        fontSize="Z1"
        fontWeight="500"
        alignItems="center"
        text="Or"
        display="flex"
        tag="div"
        ref={ref_Box_3}
        className={`${css(flow_4(dobj_Box_2))} ${css(wrap_4(dobj_Box_2))} ${css(
          align_4(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
      <Box
        flow="column"
        gap="Z2"
        display="flex"
        tag="div"
        ref={ref_Box_4}
        className={`${css(flow_5(dobj_Box_3))} ${css(wrap_5(dobj_Box_3))} ${css(
          align_5(dobj_Box_3)
        )}`}
        {...dobj_Box_3.props}
        domqlElementObject={dobj_Box_3}
      >
        <Box
          minWidth="100%"
          color="gray4"
          fontWeight="500"
          text="Continue with Twitch"
          fontSize="Z1"
          gap="Z"
          boxSize="fit-content"
          padding="A A2"
          background="gray3"
          round="Z1"
          maxHeight="3em"
          cursor="pointer"
          textDecoration="none"
          border="none"
          outline="solid, 0, blue .3"
          align="center center"
          display="flex"
          tag="a"
          ref={ref_Box_10}
          Icon={{
            props: {
              name: "twitch",
              boxSize: "A2",
            },
            __ref: undefined,
          }}
          aria={{}}
          lineHeight={1}
          className={`${css(flow_10(dobj_Box_9))} ${css(
            wrap_10(dobj_Box_9)
          )} ${css(align_10(dobj_Box_9))}`}
          {...dobj_Box_9.props}
          href={attr_href(dobj_Box_9)}
          target={attr_target(dobj_Box_9)}
          aria-label={attr_aria_label(dobj_Box_9)}
          draggable={attr_draggable(dobj_Box_9)}
          placeholder={attr_placeholder_2(dobj_Box_9)}
          tabIndex={attr_tabIndex_2(dobj_Box_9)}
          domqlElementObject={dobj_Box_9}
        >
          {show_Svg_2(dobj_Svg_2) ? (
            <Svg
              name="twitch"
              boxSize="A2"
              width="A"
              height="A"
              display="inline-block"
              spriteId="twitch"
              src='<symbol id="twitch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitch"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></symbol>'
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
          minWidth="100%"
          color="gray4"
          fontWeight="500"
          text="Continue with Twitch"
          fontSize="Z1"
          gap="Z"
          boxSize="fit-content"
          padding="A A2"
          background="gray3"
          round="Z1"
          maxHeight="3em"
          cursor="pointer"
          textDecoration="none"
          border="none"
          outline="solid, 0, blue .3"
          align="center center"
          display="flex"
          tag="a"
          ref={ref_Box_11}
          Icon={{
            props: {
              name: "twitch",
              boxSize: "A2",
            },
            __ref: undefined,
          }}
          aria={{}}
          lineHeight={1}
          className={`${css(flow_11(dobj_Box_10))} ${css(
            wrap_11(dobj_Box_10)
          )} ${css(align_11(dobj_Box_10))}`}
          {...dobj_Box_10.props}
          href={attr_href_2(dobj_Box_10)}
          target={attr_target_2(dobj_Box_10)}
          aria-label={attr_aria_label_2(dobj_Box_10)}
          draggable={attr_draggable_2(dobj_Box_10)}
          placeholder={attr_placeholder_3(dobj_Box_10)}
          tabIndex={attr_tabIndex_3(dobj_Box_10)}
          domqlElementObject={dobj_Box_10}
        >
          {show_Svg_3(dobj_Svg_3) ? (
            <Svg
              name="twitch"
              boxSize="A2"
              width="A"
              height="A"
              display="inline-block"
              spriteId="twitch"
              src='<symbol id="twitch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitch"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></symbol>'
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
      </Box>
    </Box>
  );
}

const orig_4 = {
  extend: {
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
          theme: 'dialog',
          round: 'Z2'
        }
      },
      props: {
        flow: 'column',
        boxSize: 'fit-content',
        minWidth: 'G3',
        position: 'relative',
        padding: 'Z1 Z2',
        round: 'A1'
      },
      Header: {
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
          minWidth: '100%',
          gap: 'A'
        },
        Title: {
          props: {
            align: 'center space-between'
          },
          caption: {
            props: {
              text: 'Title',
              fontSize: 'D',
              padding: 'W2 W2 - W2'
            }
          },
          x: {
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
              icon: 'x',
              fontSize: 'B2',
              boxSize: 'fit-content',
              theme: 'transparent',
              padding: '0'
            }
          }
        },
        Paragraph: {
          props: {
            fontSize: 'Z',
            color: 'gray4',
            padding: '- Y'
          }
        }
      }
    },
    props: {
      gap: 'B',
      boxSizing: 'border-box',
      padding: 'A+V A'
    },
    Header: {
      props: {gap: 'Z'},
      Title: {
        caption: {
          props: {padding: 'Y W2 - W2'}
        },
        x: {
          props: {
            margin: '-Y+V - - -',
            fontSize: 'C'
          }
        }
      }
    },
    Form: {
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
        '> div ~ button': {padding: 'Z2+V1 -'},
        '> div ~ div:last-child > button': {padding: 'Z2+V1 B'},
        '> div ~ div:last-child > button:first-child': {padding: 'Z2+V Z'}
      },
      Fields: {
        extend: {
          deps: {
            getSpacingBasedOnRatio: (props, propertyName, val) => {
      const CONFIG22 = getActiveConfig3();
      const { SPACING: SPACING2 } = CONFIG22;
      const { spacingRatio, unit } = props;
      const value = val || props[propertyName];
      if (spacingRatio) {
        let sequenceProps = SPACING2[spacingRatio];
        if (!sequenceProps) {
          const { type, base, range, subSequence } = SPACING2;
          sequenceProps = SPACING2[spacingRatio] = (0, import_utils18.merge)({
            ratio: spacingRatio,
            type: type + "-" + spacingRatio,
            unit,
            sequence: {},
            scales: {},
            templates: {},
            vars: {}
          }, {
            base,
            range,
            subSequence,
            ratio: SPACING2.ratio,
            unit: SPACING2.unit
          });
        }
        applySequenceVars(sequenceProps, { useDefault: false });
        return getSpacingByKey3(value, propertyName, sequenceProps);
      }
      return getSpacingByKey3(value, propertyName);
    }
          },
          props: {display: 'grid'},
          class: {
            area: ({ props }) => props.area ? { gridArea: props.area } : null,
            template: ({ props }) => props.template ? { gridTemplate: props.template } : null,
            templateAreas: ({ props }) => props.templateAreas ? { gridTemplateAreas: props.templateAreas } : null,
            column: ({ props }) => props.column ? { gridColumn: props.column } : null,
            columns: ({ props }) => props.columns ? { gridTemplateColumns: props.columns } : null,
            templateColumns: ({ props }) => props.templateColumns ? { gridTemplateColumns: props.templateColumns } : null,
            autoColumns: ({ props }) => props.autoColumns ? { gridAutoColumns: props.autoColumns } : null,
            columnStart: ({ props }) => props.columnStart ? { gridColumnStart: props.columnStart } : null,
            row: ({ props }) => props.row ? { gridRow: props.row } : null,
            rows: ({ props }) => props.rows ? { gridTemplateRows: props.rows } : null,
            templateRows: ({ props }) => props.templateRows ? { gridTemplateRows: props.templateRows } : null,
            autoRows: ({ props }) => props.autoRows ? { gridAutoRows: props.autoRows } : null,
            rowStart: ({ props }) => props.rowStart ? { gridRowStart: props.rowStart } : null,
            autoFlow: ({ props }) => props.autoFlow ? { gridAutoFlow: props.autoFlow } : null,
            columnGap: ({ props, deps }) => props.columnGap ? deps.getSpacingBasedOnRatio(props, "columnGap") : null,
            rowGap: ({ props, deps }) => props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null
          }
        },
        props: {
          columnGap: 'A',
          rowGap: 'A1'
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
                }
              }
            }
          },
          props: {
            width: '100%',
            Field: {minWidth: '100%'}
          }
        }
      },
      Submit: {
        props: {
          minWidth: '100%',
          margin: 'C - - -'
        }
      }
    },
    __name: 'CommonForm'
  },
  props: {minWidth: 'G3+D'},
  Header: {
    Title: {
      caption: {
        props: {
          text: 'Choose new password'
        }
      }
    },
    Paragraph: {
      props: {
        text: 'Almost done. Enter your new password and you’re all set'
      }
    }
  },
  Form: {
    Fields: {
      '0': {
        Title: {
          props: {text: 'Old password'}
        },
        Field: {}
      },
      '1': {
        Title: {
          props: {text: 'New password'}
        },
        Field: {},
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
            text: '8 character minimum'
          }
        }
      },
      '2': {
        Title: {
          props: {
            text: 'Confirm new password'
          }
        },
        Field: {},
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
            text: '8 character minimum'
          }
        }
      }
    },
    Submit: {
      '0': {
        caption: {
          props: {text: 'Cancel'}
        }
      },
      '1': {
        caption: {
          props: {text: 'Reset password'}
        }
      },
      extend: {
        '0': {
          caption: {props: {text: 'No'}}
        },
        '1': {
          caption: {props: {text: 'Yes'}}
        },
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
          gap: 'Z2',
          maxWidth: 'fit-content'
        },
        childExtend: {
          extend: {
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
              theme: 'primary',
              boxSize: 'fit-content',
              padding: 'Z2 A2',
              round: 'Z1',
              gap: 'X1',
              position: 'relative'
            },
            Icon: {
              props: {fontSize: 'B1'}
            },
            caption: {
              props: {
                text: 'Button',
                line_height: '1em',
                fontSize: 'Z2',
                letterSpacing: '.005em'
              }
            }
          },
          props: {
            ':first-child': {
              theme: 'transparent',
              padding: '- Y1'
            }
          }
        }
      },
      props: {
        justifyContent: 'flex-end'
      }
    }
  },
  __name: 'ResetPassword'
};

export function ResetPassword(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Form = useRef(null);
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
  const ref_Svg = useRef(null);
  const ref_Box_14 = useRef(null);
  const ref_Field = useRef(null);
  const ref_Box_15 = useRef(null);
  const ref_Field_2 = useRef(null);
  const ref_Box_16 = useRef(null);
  const ref_Box_17 = useRef(null);
  const ref_Field_3 = useRef(null);
  const ref_Box_18 = useRef(null);
  const ref_Box_19 = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_20 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Box_21 = useRef(null);
  const ref_Svg_4 = useRef(null);
  const ref_Box_22 = useRef(null);
  const ref_Svg_5 = useRef(null);
  const ref_Svg_6 = useRef(null);
  const ref_Box_23 = useRef(null);
  const ref_Svg_7 = useRef(null);
  const ref_Svg_8 = useRef(null);
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

  function area({ props }) {
    return props.area
      ? {
          gridArea: props.area,
        }
      : null;
  }

  function template({ props }) {
    return props.template
      ? {
          gridTemplate: props.template,
        }
      : null;
  }

  function templateAreas({ props }) {
    return props.templateAreas
      ? {
          gridTemplateAreas: props.templateAreas,
        }
      : null;
  }

  function column({ props }) {
    return props.column
      ? {
          gridColumn: props.column,
        }
      : null;
  }

  function columns({ props }) {
    return props.columns
      ? {
          gridTemplateColumns: props.columns,
        }
      : null;
  }

  function templateColumns({ props }) {
    return props.templateColumns
      ? {
          gridTemplateColumns: props.templateColumns,
        }
      : null;
  }

  function autoColumns({ props }) {
    return props.autoColumns
      ? {
          gridAutoColumns: props.autoColumns,
        }
      : null;
  }

  function columnStart({ props }) {
    return props.columnStart
      ? {
          gridColumnStart: props.columnStart,
        }
      : null;
  }

  function row({ props }) {
    return props.row
      ? {
          gridRow: props.row,
        }
      : null;
  }

  function rows({ props }) {
    return props.rows
      ? {
          gridTemplateRows: props.rows,
        }
      : null;
  }

  function templateRows({ props }) {
    return props.templateRows
      ? {
          gridTemplateRows: props.templateRows,
        }
      : null;
  }

  function autoRows({ props }) {
    return props.autoRows
      ? {
          gridAutoRows: props.autoRows,
        }
      : null;
  }

  function rowStart({ props }) {
    return props.rowStart
      ? {
          gridRowStart: props.rowStart,
        }
      : null;
  }

  function autoFlow({ props }) {
    return props.autoFlow
      ? {
          gridAutoFlow: props.autoFlow,
        }
      : null;
  }

  function columnGap({ props, deps }) {
    return props.columnGap
      ? deps.getSpacingBasedOnRatio(props, "columnGap")
      : null;
  }

  function rowGap({ props, deps }) {
    return props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null;
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

  function attr_type({ props }) {
    return props.type;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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

  function flow_9({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_9({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_9({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_10({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_10({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_10({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_11({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_11({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_11({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
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

  function flow_12({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_12({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_12({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_3({ props }) {
    return props.type;
  }

  function attr_placeholder_3({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_3({ props }) {
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

  function flow_13({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_13({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_13({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_4({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_4({ props }) {
    return props.tabIndex;
  }

  function flow_14({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_14({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_14({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_5({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_5({ props }) {
    return props.tabIndex;
  }

  function flow_15({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_15({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_15({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_16({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_16({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_16({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_6({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_6({ props }) {
    return props.tabIndex;
  }

  function flow_17({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_17({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_17({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
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

  function show_Svg_3({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_placeholder_7({ props: props4 }) {
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

  function attr_type_4({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_7({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_4({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_placeholder_8({ props: props4 }) {
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

  function attr_type_5({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_8({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_5({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function show_Svg_6({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_placeholder_9({ props: props4 }) {
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

  function attr_type_6({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_9({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_7({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function show_Svg_8({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Form = dobj["Form"]
  dobj_Form.node = ref_Form.current
  const dobj_Box_2 = dobj["Header"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Header"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Form"]["Fields"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Form"]["Submit"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Header"]["Title"]["caption"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Header"]["Title"]["x"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Form"]["Fields"]["0"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Form"]["Fields"]["1"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Form"]["Fields"]["2"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Form"]["Submit"]["0"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Form"]["Submit"]["1"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Svg = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_13 = dobj["Form"]["Fields"]["0"]["Title"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Field = dobj["Form"]["Fields"]["0"]["Field"]
  dobj_Field.node = ref_Field.current
  const dobj_Box_14 = dobj["Form"]["Fields"]["1"]["Title"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Field_2 = dobj["Form"]["Fields"]["1"]["Field"]
  dobj_Field_2.node = ref_Field_2.current
  const dobj_Box_15 = dobj["Form"]["Fields"]["1"]["Hint"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["Form"]["Fields"]["2"]["Title"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Field_3 = dobj["Form"]["Fields"]["2"]["Field"]
  dobj_Field_3.node = ref_Field_3.current
  const dobj_Box_17 = dobj["Form"]["Fields"]["2"]["Hint"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Box_18 = dobj["Form"]["Submit"]["0"]["caption"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Svg_2 = dobj["Form"]["Submit"]["0"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_19 = dobj["Form"]["Submit"]["1"]["caption"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Svg_3 = dobj["Form"]["Submit"]["1"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Box_20 = dobj["Form"]["Fields"]["0"]["Field"]["Input"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Svg_4 = dobj["Form"]["Fields"]["0"]["Field"]["Icon"]
  dobj_Svg_4.node = ref_Svg_4.current
  const dobj_Box_21 = dobj["Form"]["Fields"]["1"]["Field"]["Input"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Svg_5 = dobj["Form"]["Fields"]["1"]["Field"]["Icon"]
  dobj_Svg_5.node = ref_Svg_5.current
  const dobj_Svg_6 = dobj["Form"]["Fields"]["1"]["Hint"]["Icon"]
  dobj_Svg_6.node = ref_Svg_6.current
  const dobj_Box_22 = dobj["Form"]["Fields"]["2"]["Field"]["Input"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Svg_7 = dobj["Form"]["Fields"]["2"]["Field"]["Icon"]
  dobj_Svg_7.node = ref_Svg_7.current
  const dobj_Svg_8 = dobj["Form"]["Fields"]["2"]["Hint"]["Icon"]
  dobj_Svg_8.node = ref_Svg_8.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      minWidth="G3+D"
      gap="B"
      boxSizing="border-box"
      padding="A+V A"
      flow="column"
      boxSize="fit-content"
      position="relative"
      round="A1"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        gap="Z"
        minWidth="100%"
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
          lineHeight="1em"
          fontWeight="700"
          alignItems="center"
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
            text="Choose new password"
            padding="Y W2 - W2"
            fontSize="D"
            tag="caption"
            ref={ref_Box_7}
            {...dobj_Box_6.props}
            domqlElementObject={dobj_Box_6}
          />
          <Box
            margin="-Y+V - - -"
            fontSize="C"
            icon="x"
            boxSize="fit-content"
            theme="transparent"
            padding="0"
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
            ref={ref_Box_8}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_7(dobj_Box_7))} ${css(
              wrap_7(dobj_Box_7)
            )} ${css(align_7(dobj_Box_7))}`}
            {...dobj_Box_7.props}
            type={attr_type(dobj_Box_7)}
            placeholder={attr_placeholder(dobj_Box_7)}
            tabIndex={attr_tabIndex(dobj_Box_7)}
            domqlElementObject={dobj_Box_7}
          >
            {show_Svg(dobj_Svg) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          text="Almost done. Enter your new password and you’re all set"
          fontSize="Z"
          color="gray4"
          padding="- Y"
          margin="0"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_5(dobj_Box_3))} ${css(
            wrap_5(dobj_Box_3)
          )} ${css(align_5(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
      </Box>
      <Form
        flow="column"
        display="flex"
        ref={ref_Form}
        className={`${css(flow_3(dobj_Form))} ${css(wrap_3(dobj_Form))} ${css(
          align_3(dobj_Form)
        )}`}
        {...dobj_Form.props}
        domqlElementObject={dobj_Form}
      >
        <Box
          columnGap="A"
          rowGap="A1"
          display="grid"
          tag="div"
          ref={ref_Box_5}
          className={`${css(area(dobj_Box_4))} ${css(
            template(dobj_Box_4)
          )} ${css(templateAreas(dobj_Box_4))} ${css(column(dobj_Box_4))} ${css(
            columns(dobj_Box_4)
          )} ${css(templateColumns(dobj_Box_4))} ${css(
            autoColumns(dobj_Box_4)
          )} ${css(columnStart(dobj_Box_4))} ${css(row(dobj_Box_4))} ${css(
            rows(dobj_Box_4)
          )} ${css(templateRows(dobj_Box_4))} ${css(
            autoRows(dobj_Box_4)
          )} ${css(rowStart(dobj_Box_4))} ${css(autoFlow(dobj_Box_4))} ${css(
            columnGap(dobj_Box_4)
          )} ${css(rowGap(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_9}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_8(dobj_Box_8))} ${css(
              wrap_8(dobj_Box_8)
            )} ${css(align_8(dobj_Box_8))}`}
            {...dobj_Box_8.props}
            domqlElementObject={dobj_Box_8}
          >
            <Box
              text="Old password"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_14}
              {...dobj_Box_13.props}
              domqlElementObject={dobj_Box_13}
            />
            <Field
              minWidth="100%"
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
              className={`${css(flow_13(dobj_Field))} ${css(
                wrap_13(dobj_Field)
              )} ${css(align_13(dobj_Field))}`}
              {...dobj_Field.props}
              placeholder={attr_placeholder_4(dobj_Field)}
              tabIndex={attr_tabIndex_4(dobj_Field)}
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
                ref={ref_Box_21}
                lineHeight={1}
                {...dobj_Box_20.props}
                pattern={attr_pattern(dobj_Box_20)}
                minLength={attr_minLength(dobj_Box_20)}
                maxLength={attr_maxLength(dobj_Box_20)}
                name={attr_name(dobj_Box_20)}
                autoComplete={attr_autocomplete(dobj_Box_20)}
                placeholder={attr_placeholder_7(dobj_Box_20)}
                value={attr_value(dobj_Box_20)}
                disabled={attr_disabled(dobj_Box_20)}
                readonly={attr_readonly(dobj_Box_20)}
                required={attr_required(dobj_Box_20)}
                type={attr_type_4(dobj_Box_20)}
                tabIndex={attr_tabIndex_7(dobj_Box_20)}
                domqlElementObject={dobj_Box_20}
              />
              {show_Svg_4(dobj_Svg_4) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
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
            </Field>
          </Box>
          <Box
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_10}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_9(dobj_Box_9))} ${css(
              wrap_9(dobj_Box_9)
            )} ${css(align_9(dobj_Box_9))}`}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          >
            <Box
              text="New password"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_15}
              {...dobj_Box_14.props}
              domqlElementObject={dobj_Box_14}
            />
            <Field
              minWidth="100%"
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
              ref={ref_Field_2}
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
              className={`${css(flow_14(dobj_Field_2))} ${css(
                wrap_14(dobj_Field_2)
              )} ${css(align_14(dobj_Field_2))}`}
              {...dobj_Field_2.props}
              placeholder={attr_placeholder_5(dobj_Field_2)}
              tabIndex={attr_tabIndex_5(dobj_Field_2)}
              domqlElementObject={dobj_Field_2}
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
                ref={ref_Box_22}
                lineHeight={1}
                {...dobj_Box_21.props}
                pattern={attr_pattern_2(dobj_Box_21)}
                minLength={attr_minLength_2(dobj_Box_21)}
                maxLength={attr_maxLength_2(dobj_Box_21)}
                name={attr_name_2(dobj_Box_21)}
                autoComplete={attr_autocomplete_2(dobj_Box_21)}
                placeholder={attr_placeholder_8(dobj_Box_21)}
                value={attr_value_2(dobj_Box_21)}
                disabled={attr_disabled_2(dobj_Box_21)}
                readonly={attr_readonly_2(dobj_Box_21)}
                required={attr_required_2(dobj_Box_21)}
                type={attr_type_5(dobj_Box_21)}
                tabIndex={attr_tabIndex_8(dobj_Box_21)}
                domqlElementObject={dobj_Box_21}
              />
              {show_Svg_5(dobj_Svg_5) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
                  width="A"
                  height="A"
                  display="inline-block"
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
            </Field>
            <Box
              color="gray 1 +64"
              align="center flex-start"
              fontSize="Y"
              gap="Y"
              padding="W Y2 - Y2"
              icon="info"
              text="8 character minimum"
              display="flex"
              tag="div"
              ref={ref_Box_16}
              lineHeight={1}
              className={`${css(flow_15(dobj_Box_15))} ${css(
                wrap_15(dobj_Box_15)
              )} ${css(align_15(dobj_Box_15))}`}
              {...dobj_Box_15.props}
              domqlElementObject={dobj_Box_15}
            >
              {show_Svg_6(dobj_Svg_6) ? (
                <Svg
                  icon="info"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="info"
                  src='<symbol id="info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></symbol>'
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
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_11}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_10(dobj_Box_10))} ${css(
              wrap_10(dobj_Box_10)
            )} ${css(align_10(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          >
            <Box
              text="Confirm new password"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_17}
              {...dobj_Box_16.props}
              domqlElementObject={dobj_Box_16}
            />
            <Field
              minWidth="100%"
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
              ref={ref_Field_3}
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
              className={`${css(flow_16(dobj_Field_3))} ${css(
                wrap_16(dobj_Field_3)
              )} ${css(align_16(dobj_Field_3))}`}
              {...dobj_Field_3.props}
              placeholder={attr_placeholder_6(dobj_Field_3)}
              tabIndex={attr_tabIndex_6(dobj_Field_3)}
              domqlElementObject={dobj_Field_3}
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
                ref={ref_Box_23}
                lineHeight={1}
                {...dobj_Box_22.props}
                pattern={attr_pattern_3(dobj_Box_22)}
                minLength={attr_minLength_3(dobj_Box_22)}
                maxLength={attr_maxLength_3(dobj_Box_22)}
                name={attr_name_3(dobj_Box_22)}
                autoComplete={attr_autocomplete_3(dobj_Box_22)}
                placeholder={attr_placeholder_9(dobj_Box_22)}
                value={attr_value_3(dobj_Box_22)}
                disabled={attr_disabled_3(dobj_Box_22)}
                readonly={attr_readonly_3(dobj_Box_22)}
                required={attr_required_3(dobj_Box_22)}
                type={attr_type_6(dobj_Box_22)}
                tabIndex={attr_tabIndex_9(dobj_Box_22)}
                domqlElementObject={dobj_Box_22}
              />
              {show_Svg_7(dobj_Svg_7) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
                  width="A"
                  height="A"
                  display="inline-block"
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
            </Field>
            <Box
              color="gray 1 +64"
              align="center flex-start"
              fontSize="Y"
              gap="Y"
              padding="W Y2 - Y2"
              icon="info"
              text="8 character minimum"
              display="flex"
              tag="div"
              ref={ref_Box_18}
              lineHeight={1}
              className={`${css(flow_17(dobj_Box_17))} ${css(
                wrap_17(dobj_Box_17)
              )} ${css(align_17(dobj_Box_17))}`}
              {...dobj_Box_17.props}
              domqlElementObject={dobj_Box_17}
            >
              {show_Svg_8(dobj_Svg_8) ? (
                <Svg
                  icon="info"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="info"
                  src='<symbol id="info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></symbol>'
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
        </Box>
        <Box
          justifyContent="flex-end"
          minWidth="100%"
          margin="C - - -"
          gap="Z2"
          maxWidth="fit-content"
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
            theme="primary"
            boxSize="fit-content"
            padding="Z2 A2"
            round="Z1"
            gap="X1"
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
            {...dobj_Box_11.props}
            type={attr_type_2(dobj_Box_11)}
            placeholder={attr_placeholder_2(dobj_Box_11)}
            tabIndex={attr_tabIndex_2(dobj_Box_11)}
            domqlElementObject={dobj_Box_11}
          >
            <Box
              text="Cancel"
              line_height="1em"
              fontSize="Z2"
              letterSpacing=".005em"
              tag="caption"
              ref={ref_Box_19}
              {...dobj_Box_18.props}
              domqlElementObject={dobj_Box_18}
            />
            {show_Svg_2(dobj_Svg_2) ? (
              <Svg
                fontSize="B1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ref={ref_Svg_2}
                dangerouslySetInnerHTML={{ __html: html_2(dobj_Svg_2) }}
                {...dobj_Svg_2.props}
                domqlElementObject={dobj_Svg_2}
              />
            ) : null}
          </Box>
          <Box
            theme="primary"
            boxSize="fit-content"
            padding="Z2 A2"
            round="Z1"
            gap="X1"
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
            {...dobj_Box_12.props}
            type={attr_type_3(dobj_Box_12)}
            placeholder={attr_placeholder_3(dobj_Box_12)}
            tabIndex={attr_tabIndex_3(dobj_Box_12)}
            domqlElementObject={dobj_Box_12}
          >
            <Box
              text="Reset password"
              line_height="1em"
              fontSize="Z2"
              letterSpacing=".005em"
              tag="caption"
              ref={ref_Box_20}
              {...dobj_Box_19.props}
              domqlElementObject={dobj_Box_19}
            />
            {show_Svg_3(dobj_Svg_3) ? (
              <Svg
                fontSize="B1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ref={ref_Svg_3}
                dangerouslySetInnerHTML={{ __html: html_3(dobj_Svg_3) }}
                {...dobj_Svg_3.props}
                domqlElementObject={dobj_Svg_3}
              />
            ) : null}
          </Box>
        </Box>
      </Form>
    </Box>
  );
}

const orig_5 = {
  extend: {
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
          theme: 'dialog',
          round: 'Z2'
        }
      },
      props: {
        flow: 'column',
        boxSize: 'fit-content',
        minWidth: 'G3',
        position: 'relative',
        padding: 'Z1 Z2',
        round: 'A1'
      },
      Header: {
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
          minWidth: '100%',
          gap: 'A'
        },
        Title: {
          props: {
            align: 'center space-between'
          },
          caption: {
            props: {
              text: 'Title',
              fontSize: 'D',
              padding: 'W2 W2 - W2'
            }
          },
          x: {
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
              icon: 'x',
              fontSize: 'B2',
              boxSize: 'fit-content',
              theme: 'transparent',
              padding: '0'
            }
          }
        },
        Paragraph: {
          props: {
            fontSize: 'Z',
            color: 'gray4',
            padding: '- Y'
          }
        }
      }
    },
    props: {
      gap: 'B',
      boxSizing: 'border-box',
      padding: 'A+V A'
    },
    Header: {
      props: {gap: 'Z'},
      Title: {
        caption: {
          props: {padding: 'Y W2 - W2'}
        },
        x: {
          props: {
            margin: '-Y+V - - -',
            fontSize: 'C'
          }
        }
      }
    },
    Form: {
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
        '> div ~ button': {padding: 'Z2+V1 -'},
        '> div ~ div:last-child > button': {padding: 'Z2+V1 B'},
        '> div ~ div:last-child > button:first-child': {padding: 'Z2+V Z'}
      },
      Fields: {
        extend: {
          deps: {
            getSpacingBasedOnRatio: (props, propertyName, val) => {
      const CONFIG22 = getActiveConfig3();
      const { SPACING: SPACING2 } = CONFIG22;
      const { spacingRatio, unit } = props;
      const value = val || props[propertyName];
      if (spacingRatio) {
        let sequenceProps = SPACING2[spacingRatio];
        if (!sequenceProps) {
          const { type, base, range, subSequence } = SPACING2;
          sequenceProps = SPACING2[spacingRatio] = (0, import_utils18.merge)({
            ratio: spacingRatio,
            type: type + "-" + spacingRatio,
            unit,
            sequence: {},
            scales: {},
            templates: {},
            vars: {}
          }, {
            base,
            range,
            subSequence,
            ratio: SPACING2.ratio,
            unit: SPACING2.unit
          });
        }
        applySequenceVars(sequenceProps, { useDefault: false });
        return getSpacingByKey3(value, propertyName, sequenceProps);
      }
      return getSpacingByKey3(value, propertyName);
    }
          },
          props: {display: 'grid'},
          class: {
            area: ({ props }) => props.area ? { gridArea: props.area } : null,
            template: ({ props }) => props.template ? { gridTemplate: props.template } : null,
            templateAreas: ({ props }) => props.templateAreas ? { gridTemplateAreas: props.templateAreas } : null,
            column: ({ props }) => props.column ? { gridColumn: props.column } : null,
            columns: ({ props }) => props.columns ? { gridTemplateColumns: props.columns } : null,
            templateColumns: ({ props }) => props.templateColumns ? { gridTemplateColumns: props.templateColumns } : null,
            autoColumns: ({ props }) => props.autoColumns ? { gridAutoColumns: props.autoColumns } : null,
            columnStart: ({ props }) => props.columnStart ? { gridColumnStart: props.columnStart } : null,
            row: ({ props }) => props.row ? { gridRow: props.row } : null,
            rows: ({ props }) => props.rows ? { gridTemplateRows: props.rows } : null,
            templateRows: ({ props }) => props.templateRows ? { gridTemplateRows: props.templateRows } : null,
            autoRows: ({ props }) => props.autoRows ? { gridAutoRows: props.autoRows } : null,
            rowStart: ({ props }) => props.rowStart ? { gridRowStart: props.rowStart } : null,
            autoFlow: ({ props }) => props.autoFlow ? { gridAutoFlow: props.autoFlow } : null,
            columnGap: ({ props, deps }) => props.columnGap ? deps.getSpacingBasedOnRatio(props, "columnGap") : null,
            rowGap: ({ props, deps }) => props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null
          }
        },
        props: {
          columnGap: 'A',
          rowGap: 'A1'
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
                }
              }
            }
          },
          props: {
            width: '100%',
            Field: {minWidth: '100%'}
          }
        }
      },
      Submit: {
        props: {
          minWidth: '100%',
          margin: 'C - - -'
        }
      }
    },
    __name: 'CommonForm'
  },
  props: {minWidth: 'H'},
  Header: {
    Title: {
      caption: {
        props: {
          text: 'Create your account'
        }
      }
    },
    Paragraph: {
      props: {
        text: 'Let’s get started with your 30 days free trial'
      }
    }
  },
  Form: {
    Fields: {
      '0': {
        Title: {
          props: {text: 'Full name'}
        },
        Field: {
          Input: {
            props: {
              placeholder: 'Enter your full name'
            }
          }
        }
      },
      '1': {
        Title: {props: {text: 'Email'}},
        Field: {
          Input: {
            props: {
              placeholder: 'Email address'
            }
          }
        }
      },
      '2': {
        Title: {
          props: {text: 'Password'}
        },
        Field: {
          Input: {
            props: {
              placeholder: 'Create a password'
            }
          }
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
            text: '8 character minimum'
          }
        }
      },
      '3': {
        Title: {
          props: {
            text: 'Confirm password'
          }
        },
        Field: {
          Input: {
            props: {
              placeholder: 'Repeat password'
            }
          }
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
            text: '8 character minimum'
          }
        }
      }
    },
    ParagraphButtonWithCheckbox: {
      padding: 'Z2 Z1 - Z1',
      justifyContent: 'flex-end'
    },
    Submit: {
      extend: {
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
          theme: 'primary',
          boxSize: 'fit-content',
          padding: 'Z2 A2',
          round: 'Z1',
          gap: 'X1',
          position: 'relative'
        },
        Icon: {
          props: {fontSize: 'B1'}
        },
        caption: {
          props: {
            text: 'Button',
            line_height: '1em',
            fontSize: 'Z2',
            letterSpacing: '.005em'
          }
        }
      },
      caption: {
        props: {
          text: 'Create an account'
        }
      }
    }
  },
  __name: 'SignUp'
};

export function SignUp(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Form = useRef(null);
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
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);
  const ref_Box_17 = useRef(null);
  const ref_Field = useRef(null);
  const ref_Box_18 = useRef(null);
  const ref_Field_2 = useRef(null);
  const ref_Box_19 = useRef(null);
  const ref_Field_3 = useRef(null);
  const ref_Box_20 = useRef(null);
  const ref_Box_21 = useRef(null);
  const ref_Field_4 = useRef(null);
  const ref_Box_22 = useRef(null);
  const ref_Box_23 = useRef(null);
  const ref_Box_24 = useRef(null);
  const ref_Box_25 = useRef(null);
  const ref_Box_26 = useRef(null);
  const ref_Input = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Input_2 = useRef(null);
  const ref_Svg_4 = useRef(null);
  const ref_Input_3 = useRef(null);
  const ref_Svg_5 = useRef(null);
  const ref_Svg_6 = useRef(null);
  const ref_Input_4 = useRef(null);
  const ref_Svg_7 = useRef(null);
  const ref_Svg_8 = useRef(null);
  const ref_Svg_9 = useRef(null);
  const ref_Svg_10 = useRef(null);
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

  function area({ props }) {
    return props.area
      ? {
          gridArea: props.area,
        }
      : null;
  }

  function template({ props }) {
    return props.template
      ? {
          gridTemplate: props.template,
        }
      : null;
  }

  function templateAreas({ props }) {
    return props.templateAreas
      ? {
          gridTemplateAreas: props.templateAreas,
        }
      : null;
  }

  function column({ props }) {
    return props.column
      ? {
          gridColumn: props.column,
        }
      : null;
  }

  function columns({ props }) {
    return props.columns
      ? {
          gridTemplateColumns: props.columns,
        }
      : null;
  }

  function templateColumns({ props }) {
    return props.templateColumns
      ? {
          gridTemplateColumns: props.templateColumns,
        }
      : null;
  }

  function autoColumns({ props }) {
    return props.autoColumns
      ? {
          gridAutoColumns: props.autoColumns,
        }
      : null;
  }

  function columnStart({ props }) {
    return props.columnStart
      ? {
          gridColumnStart: props.columnStart,
        }
      : null;
  }

  function row({ props }) {
    return props.row
      ? {
          gridRow: props.row,
        }
      : null;
  }

  function rows({ props }) {
    return props.rows
      ? {
          gridTemplateRows: props.rows,
        }
      : null;
  }

  function templateRows({ props }) {
    return props.templateRows
      ? {
          gridTemplateRows: props.templateRows,
        }
      : null;
  }

  function autoRows({ props }) {
    return props.autoRows
      ? {
          gridAutoRows: props.autoRows,
        }
      : null;
  }

  function rowStart({ props }) {
    return props.rowStart
      ? {
          gridRowStart: props.rowStart,
        }
      : null;
  }

  function autoFlow({ props }) {
    return props.autoFlow
      ? {
          gridAutoFlow: props.autoFlow,
        }
      : null;
  }

  function columnGap({ props, deps }) {
    return props.columnGap
      ? deps.getSpacingBasedOnRatio(props, "columnGap")
      : null;
  }

  function rowGap({ props, deps }) {
    return props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null;
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

  function attr_type({ props }) {
    return props.type;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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

  function attr_type_2({ props }) {
    return props.type;
  }

  function attr_placeholder_2({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_2({ props }) {
    return props.tabIndex;
  }

  function flow_9({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_9({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_9({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_10({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_10({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_10({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_11({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_11({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_11({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_12({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_12({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_12({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
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

  function flow_14({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_14({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_14({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_3({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_3({ props }) {
    return props.tabIndex;
  }

  function flow_15({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_15({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_15({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_4({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_4({ props }) {
    return props.tabIndex;
  }

  function flow_16({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_16({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_16({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_5({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_5({ props }) {
    return props.tabIndex;
  }

  function flow_17({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_17({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_17({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_18({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_18({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_18({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_6({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_6({ props }) {
    return props.tabIndex;
  }

  function flow_19({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_19({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_19({ props }) {
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

  function attr_placeholder_7({ props: props4 }) {
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

  function attr_type_3({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_7({ props: props4 }) {
    return props4.tabIndex;
  }

  function flow_20({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_20({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_20({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_21({ props: props4 }) {
    return (
      props4.flow && {
        flexFlow: props4.flow,
      }
    );
  }

  function wrap_21({ props: props4 }) {
    return (
      props4.wrap && {
        flexWrap: props4.wrap,
      }
    );
  }

  function align_21({ props: props4 }) {
    if (typeof props4.align !== "string") return;
    const [alignItems, justifyContent] = props4.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_4({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_8({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_8({ props: props4 }) {
    return props4.tabIndex;
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

  function attr_type_5({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_9({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_3({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_placeholder_10({ props: props4 }) {
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

  function attr_type_6({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_10({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_4({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_pattern_4({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_4({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_4({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_4({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_4({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_11({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value_4({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled_4({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_4({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_4({ props: props4 }) {
    return props4.required;
  }

  function attr_type_7({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_11({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_5({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function show_Svg_6({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_pattern_5({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_5({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_5({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_5({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_5({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_12({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value_5({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled_5({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_5({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_5({ props: props4 }) {
    return props4.required;
  }

  function attr_type_8({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_12({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_7({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function show_Svg_8({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function show_Svg_9({ parent: parent2, props: props4 }) {
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Form = dobj["Form"]
  dobj_Form.node = ref_Form.current
  const dobj_Box_2 = dobj["Header"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Header"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Form"]["Fields"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Form"]["ParagraphButtonWithCheckbox"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Form"]["Submit"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Header"]["Title"]["caption"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Header"]["Title"]["x"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Form"]["Fields"]["0"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Form"]["Fields"]["1"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Form"]["Fields"]["2"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Form"]["Fields"]["3"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["Form"]["Submit"]["caption"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Svg = dobj["Form"]["Submit"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_16 = dobj["Form"]["Fields"]["0"]["Title"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Field = dobj["Form"]["Fields"]["0"]["Field"]
  dobj_Field.node = ref_Field.current
  const dobj_Box_17 = dobj["Form"]["Fields"]["1"]["Title"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Field_2 = dobj["Form"]["Fields"]["1"]["Field"]
  dobj_Field_2.node = ref_Field_2.current
  const dobj_Box_18 = dobj["Form"]["Fields"]["2"]["Title"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Field_3 = dobj["Form"]["Fields"]["2"]["Field"]
  dobj_Field_3.node = ref_Field_3.current
  const dobj_Box_19 = dobj["Form"]["Fields"]["2"]["Hint"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Box_20 = dobj["Form"]["Fields"]["3"]["Title"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Field_4 = dobj["Form"]["Fields"]["3"]["Field"]
  dobj_Field_4.node = ref_Field_4.current
  const dobj_Box_21 = dobj["Form"]["Fields"]["3"]["Hint"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Box_22 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]["Input"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Box_23 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]["Flex"]
  dobj_Box_23.node = ref_Box_24.current
  const dobj_Box_24 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]["P"]
  dobj_Box_24.node = ref_Box_25.current
  const dobj_Box_25 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]["Button"]
  dobj_Box_25.node = ref_Box_26.current
  const dobj_Input = dobj["Form"]["Fields"]["0"]["Field"]["Input"]
  dobj_Input.node = ref_Input.current
  const dobj_Svg_3 = dobj["Form"]["Fields"]["0"]["Field"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Input_2 = dobj["Form"]["Fields"]["1"]["Field"]["Input"]
  dobj_Input_2.node = ref_Input_2.current
  const dobj_Svg_4 = dobj["Form"]["Fields"]["1"]["Field"]["Icon"]
  dobj_Svg_4.node = ref_Svg_4.current
  const dobj_Input_3 = dobj["Form"]["Fields"]["2"]["Field"]["Input"]
  dobj_Input_3.node = ref_Input_3.current
  const dobj_Svg_5 = dobj["Form"]["Fields"]["2"]["Field"]["Icon"]
  dobj_Svg_5.node = ref_Svg_5.current
  const dobj_Svg_6 = dobj["Form"]["Fields"]["2"]["Hint"]["Icon"]
  dobj_Svg_6.node = ref_Svg_6.current
  const dobj_Input_4 = dobj["Form"]["Fields"]["3"]["Field"]["Input"]
  dobj_Input_4.node = ref_Input_4.current
  const dobj_Svg_7 = dobj["Form"]["Fields"]["3"]["Field"]["Icon"]
  dobj_Svg_7.node = ref_Svg_7.current
  const dobj_Svg_8 = dobj["Form"]["Fields"]["3"]["Hint"]["Icon"]
  dobj_Svg_8.node = ref_Svg_8.current
  const dobj_Svg_9 = dobj["Form"]["ParagraphButtonWithCheckbox"]["Checkbox"]["Flex"]["Icon"]
  dobj_Svg_9.node = ref_Svg_9.current
  const dobj_Svg_10 = dobj["Form"]["ParagraphButtonWithCheckbox"]["ParagraphButton"]["Button"]["Icon"]
  dobj_Svg_10.node = ref_Svg_10.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      minWidth="H"
      gap="B"
      boxSizing="border-box"
      padding="A+V A"
      flow="column"
      boxSize="fit-content"
      position="relative"
      round="A1"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        gap="Z"
        minWidth="100%"
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
          lineHeight="1em"
          fontWeight="700"
          alignItems="center"
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
            text="Create your account"
            padding="Y W2 - W2"
            fontSize="D"
            tag="caption"
            ref={ref_Box_8}
            {...dobj_Box_7.props}
            domqlElementObject={dobj_Box_7}
          />
          <Box
            margin="-Y+V - - -"
            fontSize="C"
            icon="x"
            boxSize="fit-content"
            theme="transparent"
            padding="0"
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
            ref={ref_Box_9}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_8(dobj_Box_8))} ${css(
              wrap_8(dobj_Box_8)
            )} ${css(align_8(dobj_Box_8))}`}
            {...dobj_Box_8.props}
            type={attr_type_2(dobj_Box_8)}
            placeholder={attr_placeholder_2(dobj_Box_8)}
            tabIndex={attr_tabIndex_2(dobj_Box_8)}
            domqlElementObject={dobj_Box_8}
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
                {...dobj_Svg_2.props}
                domqlElementObject={dobj_Svg_2}
              />
            ) : null}
          </Box>
        </Box>
        <Box
          text="Let’s get started with your 30 days free trial"
          fontSize="Z"
          color="gray4"
          padding="- Y"
          margin="0"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_5(dobj_Box_3))} ${css(
            wrap_5(dobj_Box_3)
          )} ${css(align_5(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
      </Box>
      <Form
        flow="column"
        display="flex"
        ref={ref_Form}
        className={`${css(flow_3(dobj_Form))} ${css(wrap_3(dobj_Form))} ${css(
          align_3(dobj_Form)
        )}`}
        {...dobj_Form.props}
        domqlElementObject={dobj_Form}
      >
        <Box
          columnGap="A"
          rowGap="A1"
          display="grid"
          tag="div"
          ref={ref_Box_5}
          className={`${css(area(dobj_Box_4))} ${css(
            template(dobj_Box_4)
          )} ${css(templateAreas(dobj_Box_4))} ${css(column(dobj_Box_4))} ${css(
            columns(dobj_Box_4)
          )} ${css(templateColumns(dobj_Box_4))} ${css(
            autoColumns(dobj_Box_4)
          )} ${css(columnStart(dobj_Box_4))} ${css(row(dobj_Box_4))} ${css(
            rows(dobj_Box_4)
          )} ${css(templateRows(dobj_Box_4))} ${css(
            autoRows(dobj_Box_4)
          )} ${css(rowStart(dobj_Box_4))} ${css(autoFlow(dobj_Box_4))} ${css(
            columnGap(dobj_Box_4)
          )} ${css(rowGap(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_10}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_9(dobj_Box_9))} ${css(
              wrap_9(dobj_Box_9)
            )} ${css(align_9(dobj_Box_9))}`}
            {...dobj_Box_9.props}
            domqlElementObject={dobj_Box_9}
          >
            <Box
              text="Full name"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_17}
              {...dobj_Box_16.props}
              domqlElementObject={dobj_Box_16}
            />
            <Field
              minWidth="100%"
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
              className={`${css(flow_14(dobj_Field))} ${css(
                wrap_14(dobj_Field)
              )} ${css(align_14(dobj_Field))}`}
              {...dobj_Field.props}
              placeholder={attr_placeholder_3(dobj_Field)}
              tabIndex={attr_tabIndex_3(dobj_Field)}
              domqlElementObject={dobj_Field}
            >
              <Input
                placeholder="Enter your full name"
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
                pattern={attr_pattern_2(dobj_Input)}
                minLength={attr_minLength_2(dobj_Input)}
                maxLength={attr_maxLength_2(dobj_Input)}
                name={attr_name_2(dobj_Input)}
                autoComplete={attr_autocomplete_2(dobj_Input)}
                placeholder={attr_placeholder_9(dobj_Input)}
                value={attr_value_2(dobj_Input)}
                disabled={attr_disabled_2(dobj_Input)}
                readonly={attr_readonly_2(dobj_Input)}
                required={attr_required_2(dobj_Input)}
                type={attr_type_5(dobj_Input)}
                tabIndex={attr_tabIndex_9(dobj_Input)}
                domqlElementObject={dobj_Input}
              />
              {show_Svg_3(dobj_Svg_3) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
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
            </Field>
          </Box>
          <Box
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_11}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_10(dobj_Box_10))} ${css(
              wrap_10(dobj_Box_10)
            )} ${css(align_10(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            domqlElementObject={dobj_Box_10}
          >
            <Box
              text="Email"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_18}
              {...dobj_Box_17.props}
              domqlElementObject={dobj_Box_17}
            />
            <Field
              minWidth="100%"
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
              ref={ref_Field_2}
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
              className={`${css(flow_15(dobj_Field_2))} ${css(
                wrap_15(dobj_Field_2)
              )} ${css(align_15(dobj_Field_2))}`}
              {...dobj_Field_2.props}
              placeholder={attr_placeholder_4(dobj_Field_2)}
              tabIndex={attr_tabIndex_4(dobj_Field_2)}
              domqlElementObject={dobj_Field_2}
            >
              <Input
                placeholder="Email address"
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
                ref={ref_Input_2}
                lineHeight={1}
                {...dobj_Input_2.props}
                pattern={attr_pattern_3(dobj_Input_2)}
                minLength={attr_minLength_3(dobj_Input_2)}
                maxLength={attr_maxLength_3(dobj_Input_2)}
                name={attr_name_3(dobj_Input_2)}
                autoComplete={attr_autocomplete_3(dobj_Input_2)}
                placeholder={attr_placeholder_10(dobj_Input_2)}
                value={attr_value_3(dobj_Input_2)}
                disabled={attr_disabled_3(dobj_Input_2)}
                readonly={attr_readonly_3(dobj_Input_2)}
                required={attr_required_3(dobj_Input_2)}
                type={attr_type_6(dobj_Input_2)}
                tabIndex={attr_tabIndex_10(dobj_Input_2)}
                domqlElementObject={dobj_Input_2}
              />
              {show_Svg_4(dobj_Svg_4) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
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
            </Field>
          </Box>
          <Box
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_12}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_11(dobj_Box_11))} ${css(
              wrap_11(dobj_Box_11)
            )} ${css(align_11(dobj_Box_11))}`}
            {...dobj_Box_11.props}
            domqlElementObject={dobj_Box_11}
          >
            <Box
              text="Password"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_19}
              {...dobj_Box_18.props}
              domqlElementObject={dobj_Box_18}
            />
            <Field
              minWidth="100%"
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
              ref={ref_Field_3}
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
              className={`${css(flow_16(dobj_Field_3))} ${css(
                wrap_16(dobj_Field_3)
              )} ${css(align_16(dobj_Field_3))}`}
              {...dobj_Field_3.props}
              placeholder={attr_placeholder_5(dobj_Field_3)}
              tabIndex={attr_tabIndex_5(dobj_Field_3)}
              domqlElementObject={dobj_Field_3}
            >
              <Input
                placeholder="Create a password"
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
                ref={ref_Input_3}
                lineHeight={1}
                {...dobj_Input_3.props}
                pattern={attr_pattern_4(dobj_Input_3)}
                minLength={attr_minLength_4(dobj_Input_3)}
                maxLength={attr_maxLength_4(dobj_Input_3)}
                name={attr_name_4(dobj_Input_3)}
                autoComplete={attr_autocomplete_4(dobj_Input_3)}
                placeholder={attr_placeholder_11(dobj_Input_3)}
                value={attr_value_4(dobj_Input_3)}
                disabled={attr_disabled_4(dobj_Input_3)}
                readonly={attr_readonly_4(dobj_Input_3)}
                required={attr_required_4(dobj_Input_3)}
                type={attr_type_7(dobj_Input_3)}
                tabIndex={attr_tabIndex_11(dobj_Input_3)}
                domqlElementObject={dobj_Input_3}
              />
              {show_Svg_5(dobj_Svg_5) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
                  width="A"
                  height="A"
                  display="inline-block"
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
            </Field>
            <Box
              color="gray 1 +64"
              align="center flex-start"
              fontSize="Y"
              gap="Y"
              padding="W Y2 - Y2"
              icon="info"
              text="8 character minimum"
              display="flex"
              tag="div"
              ref={ref_Box_20}
              lineHeight={1}
              className={`${css(flow_17(dobj_Box_19))} ${css(
                wrap_17(dobj_Box_19)
              )} ${css(align_17(dobj_Box_19))}`}
              {...dobj_Box_19.props}
              domqlElementObject={dobj_Box_19}
            >
              {show_Svg_6(dobj_Svg_6) ? (
                <Svg
                  icon="info"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="info"
                  src='<symbol id="info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></symbol>'
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
            width="100%"
            flow="column"
            boxSize="fit-content fit-content"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_13}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_12(dobj_Box_12))} ${css(
              wrap_12(dobj_Box_12)
            )} ${css(align_12(dobj_Box_12))}`}
            {...dobj_Box_12.props}
            domqlElementObject={dobj_Box_12}
          >
            <Box
              text="Confirm password"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_21}
              {...dobj_Box_20.props}
              domqlElementObject={dobj_Box_20}
            />
            <Field
              minWidth="100%"
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
              ref={ref_Field_4}
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
              className={`${css(flow_18(dobj_Field_4))} ${css(
                wrap_18(dobj_Field_4)
              )} ${css(align_18(dobj_Field_4))}`}
              {...dobj_Field_4.props}
              placeholder={attr_placeholder_6(dobj_Field_4)}
              tabIndex={attr_tabIndex_6(dobj_Field_4)}
              domqlElementObject={dobj_Field_4}
            >
              <Input
                placeholder="Repeat password"
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
                ref={ref_Input_4}
                lineHeight={1}
                {...dobj_Input_4.props}
                pattern={attr_pattern_5(dobj_Input_4)}
                minLength={attr_minLength_5(dobj_Input_4)}
                maxLength={attr_maxLength_5(dobj_Input_4)}
                name={attr_name_5(dobj_Input_4)}
                autoComplete={attr_autocomplete_5(dobj_Input_4)}
                placeholder={attr_placeholder_12(dobj_Input_4)}
                value={attr_value_5(dobj_Input_4)}
                disabled={attr_disabled_5(dobj_Input_4)}
                readonly={attr_readonly_5(dobj_Input_4)}
                required={attr_required_5(dobj_Input_4)}
                type={attr_type_8(dobj_Input_4)}
                tabIndex={attr_tabIndex_12(dobj_Input_4)}
                domqlElementObject={dobj_Input_4}
              />
              {show_Svg_7(dobj_Svg_7) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
                  width="A"
                  height="A"
                  display="inline-block"
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
            </Field>
            <Box
              color="gray 1 +64"
              align="center flex-start"
              fontSize="Y"
              gap="Y"
              padding="W Y2 - Y2"
              icon="info"
              text="8 character minimum"
              display="flex"
              tag="div"
              ref={ref_Box_22}
              lineHeight={1}
              className={`${css(flow_19(dobj_Box_21))} ${css(
                wrap_19(dobj_Box_21)
              )} ${css(align_19(dobj_Box_21))}`}
              {...dobj_Box_21.props}
              domqlElementObject={dobj_Box_21}
            >
              {show_Svg_8(dobj_Svg_8) ? (
                <Svg
                  icon="info"
                  width="A"
                  height="A"
                  display="inline-block"
                  spriteId="info"
                  src='<symbol id="info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></symbol>'
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
        </Box>
        <Box
          padding="Z2 Z1 - Z1"
          justifyContent="flex-end"
          gap="1ch"
          alignItems="center"
          display="flex"
          tag="label"
          ref={ref_Box_6}
          className={`${css(flow_6(dobj_Box_5))} ${css(
            wrap_6(dobj_Box_5)
          )} ${css(align_6(dobj_Box_5))}`}
          {...dobj_Box_5.props}
          domqlElementObject={dobj_Box_5}
        >
          <Box
            boxSize="fit-content fit-content"
            cursor="pointer"
            round="Y"
            tag="div"
            ref={ref_Box_14}
            Input={{
              props: {},
              __ref: undefined,
            }}
            Flex={{
              props: {
                fontSize: "A1",
              },
              __ref: undefined,
            }}
            {...dobj_Box_13.props}
            domqlElementObject={dobj_Box_13}
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
              ref={ref_Box_23}
              lineHeight={1}
              {...dobj_Box_22.props}
              pattern={attr_pattern(dobj_Box_22)}
              minLength={attr_minLength(dobj_Box_22)}
              maxLength={attr_maxLength(dobj_Box_22)}
              name={attr_name(dobj_Box_22)}
              autoComplete={attr_autocomplete(dobj_Box_22)}
              placeholder={attr_placeholder_7(dobj_Box_22)}
              value={attr_value(dobj_Box_22)}
              disabled={attr_disabled(dobj_Box_22)}
              readonly={attr_readonly(dobj_Box_22)}
              required={attr_required(dobj_Box_22)}
              type={attr_type_3(dobj_Box_22)}
              tabIndex={attr_tabIndex_7(dobj_Box_22)}
              domqlElementObject={dobj_Box_22}
            />
            <Box
              fontSize="A1"
              align="center center"
              padding="V"
              border="1px solid #57575C"
              round="X2"
              transition="background .15s ease-in-out"
              display="flex"
              tag="div"
              ref={ref_Box_24}
              className={`${css(flow_20(dobj_Box_23))} ${css(
                wrap_20(dobj_Box_23)
              )} ${css(align_20(dobj_Box_23))}`}
              {...dobj_Box_23.props}
              domqlElementObject={dobj_Box_23}
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
            </Box>
          </Box>
          <Box
            fontSize="Z"
            alignItems="center"
            gap="Y2"
            display="flex"
            tag="div"
            ref={ref_Box_15}
            P={{
              props: {
                color: "white",
              },
              __ref: undefined,
            }}
            className={`${css(flow_13(dobj_Box_14))} ${css(
              wrap_13(dobj_Box_14)
            )} ${css(align_13(dobj_Box_14))}`}
            {...dobj_Box_14.props}
            domqlElementObject={dobj_Box_14}
          >
            <Box
              color="white"
              text="Didn't get the code?"
              margin="0"
              tag="p"
              ref={ref_Box_25}
              {...dobj_Box_24.props}
              domqlElementObject={dobj_Box_24}
            />
            <Box
              text="Click to resend"
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
              ref={ref_Box_26}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              className={`${css(flow_21(dobj_Box_25))} ${css(
                wrap_21(dobj_Box_25)
              )} ${css(align_21(dobj_Box_25))}`}
              {...dobj_Box_25.props}
              type={attr_type_4(dobj_Box_25)}
              placeholder={attr_placeholder_8(dobj_Box_25)}
              tabIndex={attr_tabIndex_8(dobj_Box_25)}
              domqlElementObject={dobj_Box_25}
            >
              {show_Svg_9(dobj_Svg_10) ? (
                <Svg
                  width="A"
                  height="A"
                  display="inline-block"
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
        </Box>
        <Box
          minWidth="100%"
          margin="C - - -"
          theme="primary"
          boxSize="fit-content"
          padding="Z2 A2"
          round="Z1"
          gap="X1"
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
          type={attr_type(dobj_Box_6)}
          placeholder={attr_placeholder(dobj_Box_6)}
          tabIndex={attr_tabIndex(dobj_Box_6)}
          domqlElementObject={dobj_Box_6}
        >
          <Box
            text="Create an account"
            line_height="1em"
            fontSize="Z2"
            letterSpacing=".005em"
            tag="caption"
            ref={ref_Box_16}
            {...dobj_Box_15.props}
            domqlElementObject={dobj_Box_15}
          />
          {show_Svg(dobj_Svg) ? (
            <Svg
              fontSize="B1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ref={ref_Svg}
              dangerouslySetInnerHTML={{ __html: html(dobj_Svg) }}
              {...dobj_Svg.props}
              domqlElementObject={dobj_Svg}
            />
          ) : null}
        </Box>
      </Form>
    </Box>
  );
}

const orig_6 = {
  extend: {
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
          theme: 'dialog',
          round: 'Z2'
        }
      },
      props: {
        flow: 'column',
        boxSize: 'fit-content',
        minWidth: 'G3',
        position: 'relative',
        padding: 'Z1 Z2',
        round: 'A1'
      },
      Header: {
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
          minWidth: '100%',
          gap: 'A'
        },
        Title: {
          props: {
            align: 'center space-between'
          },
          caption: {
            props: {
              text: 'Title',
              fontSize: 'D',
              padding: 'W2 W2 - W2'
            }
          },
          x: {
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
              icon: 'x',
              fontSize: 'B2',
              boxSize: 'fit-content',
              theme: 'transparent',
              padding: '0'
            }
          }
        },
        Paragraph: {
          props: {
            fontSize: 'Z',
            color: 'gray4',
            padding: '- Y'
          }
        }
      }
    },
    props: {
      gap: 'B',
      boxSizing: 'border-box',
      padding: 'A+V A'
    },
    Header: {
      props: {gap: 'Z'},
      Title: {
        caption: {
          props: {padding: 'Y W2 - W2'}
        },
        x: {
          props: {
            margin: '-Y+V - - -',
            fontSize: 'C'
          }
        }
      }
    },
    Form: {
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
        '> div ~ button': {padding: 'Z2+V1 -'},
        '> div ~ div:last-child > button': {padding: 'Z2+V1 B'},
        '> div ~ div:last-child > button:first-child': {padding: 'Z2+V Z'}
      },
      Fields: {
        extend: {
          deps: {
            getSpacingBasedOnRatio: (props, propertyName, val) => {
      const CONFIG22 = getActiveConfig3();
      const { SPACING: SPACING2 } = CONFIG22;
      const { spacingRatio, unit } = props;
      const value = val || props[propertyName];
      if (spacingRatio) {
        let sequenceProps = SPACING2[spacingRatio];
        if (!sequenceProps) {
          const { type, base, range, subSequence } = SPACING2;
          sequenceProps = SPACING2[spacingRatio] = (0, import_utils18.merge)({
            ratio: spacingRatio,
            type: type + "-" + spacingRatio,
            unit,
            sequence: {},
            scales: {},
            templates: {},
            vars: {}
          }, {
            base,
            range,
            subSequence,
            ratio: SPACING2.ratio,
            unit: SPACING2.unit
          });
        }
        applySequenceVars(sequenceProps, { useDefault: false });
        return getSpacingByKey3(value, propertyName, sequenceProps);
      }
      return getSpacingByKey3(value, propertyName);
    }
          },
          props: {display: 'grid'},
          class: {
            area: ({ props }) => props.area ? { gridArea: props.area } : null,
            template: ({ props }) => props.template ? { gridTemplate: props.template } : null,
            templateAreas: ({ props }) => props.templateAreas ? { gridTemplateAreas: props.templateAreas } : null,
            column: ({ props }) => props.column ? { gridColumn: props.column } : null,
            columns: ({ props }) => props.columns ? { gridTemplateColumns: props.columns } : null,
            templateColumns: ({ props }) => props.templateColumns ? { gridTemplateColumns: props.templateColumns } : null,
            autoColumns: ({ props }) => props.autoColumns ? { gridAutoColumns: props.autoColumns } : null,
            columnStart: ({ props }) => props.columnStart ? { gridColumnStart: props.columnStart } : null,
            row: ({ props }) => props.row ? { gridRow: props.row } : null,
            rows: ({ props }) => props.rows ? { gridTemplateRows: props.rows } : null,
            templateRows: ({ props }) => props.templateRows ? { gridTemplateRows: props.templateRows } : null,
            autoRows: ({ props }) => props.autoRows ? { gridAutoRows: props.autoRows } : null,
            rowStart: ({ props }) => props.rowStart ? { gridRowStart: props.rowStart } : null,
            autoFlow: ({ props }) => props.autoFlow ? { gridAutoFlow: props.autoFlow } : null,
            columnGap: ({ props, deps }) => props.columnGap ? deps.getSpacingBasedOnRatio(props, "columnGap") : null,
            rowGap: ({ props, deps }) => props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null
          }
        },
        props: {
          columnGap: 'A',
          rowGap: 'A1'
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
                }
              }
            }
          },
          props: {
            width: '100%',
            Field: {minWidth: '100%'}
          }
        }
      },
      Submit: {
        props: {
          minWidth: '100%',
          margin: 'C - - -'
        }
      }
    },
    __name: 'CommonForm'
  },
  Header: {
    props: {gap: 'A'},
    Title: {
      caption: {
        props: {
          text: 'Verify your email'
        }
      }
    },
    Paragraph: {
      props: {
        text: 'Verification code has been sent to you. Enter the code below.',
        maxWidth: 'G1+Y'
      }
    }
  },
  Form: {
    props: {
      '> div ~ div:last-child > button': {padding: 'Z1+V1 B+V'},
      '> div ~ div:last-child > button:first-child': {padding: 'Z1+V1 Y1'}
    },
    Fields: {
      '0': {},
      '1': {},
      '2': {},
      '3': {},
      props: {
        display: 'flex',
        columnGap: 'A',
        childProps: {flex: '1'}
      },
      childExtend: {
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
      const { isString: isString6, replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2 } = deps;
      if (isString6(props.value) && props.value.includes("{{")) {
        return replaceLiteralsWithObjectFields2(props.value, state);
      }
      return props.value;
    },
              disabled: ({ props }) => props.disabled || null,
              readonly: ({ props }) => props.readonly,
              required: ({ props }) => props.required,
              type: ({ props }) => props.type
            }
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
        }
      }
    },
    ParagraphButton: {padding: 'Z1 Z2 - Z2'},
    Submit: {
      '0': {
        caption: {
          props: {text: 'Cancel'}
        }
      },
      '1': {
        caption: {
          props: {text: 'Verify'}
        }
      },
      extend: {
        '0': {
          caption: {props: {text: 'No'}}
        },
        '1': {
          caption: {props: {text: 'Yes'}}
        },
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
          gap: 'Z2',
          maxWidth: 'fit-content'
        },
        childExtend: {
          extend: {
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
              theme: 'primary',
              boxSize: 'fit-content',
              padding: 'Z2 A2',
              round: 'Z1',
              gap: 'X1',
              position: 'relative'
            },
            Icon: {
              props: {fontSize: 'B1'}
            },
            caption: {
              props: {
                text: 'Button',
                line_height: '1em',
                fontSize: 'Z2',
                letterSpacing: '.005em'
              }
            }
          },
          props: {
            ':first-child': {
              theme: 'transparent',
              padding: '- Y1'
            }
          }
        }
      },
      props: {
        justifyContent: 'flex-end'
      }
    }
  },
  __name: 'VerificationCode'
};

export function VerificationCode(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Form = useRef(null);
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
  const ref_Svg = useRef(null);
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
  const ref_Svg_2 = useRef(null);
  const ref_Box_34 = useRef(null);
  const ref_Svg_3 = useRef(null);
  const ref_Box_35 = useRef(null);
  const ref_Svg_4 = useRef(null);
  const ref_Box_36 = useRef(null);
  const ref_Svg_5 = useRef(null);
  const ref_Box_37 = useRef(null);
  const ref_Svg_6 = useRef(null);
  const ref_Box_38 = useRef(null);
  const ref_Svg_7 = useRef(null);
  const ref_Box_39 = useRef(null);
  const ref_Svg_8 = useRef(null);
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

  function area({ props }) {
    return props.area
      ? {
          gridArea: props.area,
        }
      : null;
  }

  function template({ props }) {
    return props.template
      ? {
          gridTemplate: props.template,
        }
      : null;
  }

  function templateAreas({ props }) {
    return props.templateAreas
      ? {
          gridTemplateAreas: props.templateAreas,
        }
      : null;
  }

  function column({ props }) {
    return props.column
      ? {
          gridColumn: props.column,
        }
      : null;
  }

  function columns({ props }) {
    return props.columns
      ? {
          gridTemplateColumns: props.columns,
        }
      : null;
  }

  function templateColumns({ props }) {
    return props.templateColumns
      ? {
          gridTemplateColumns: props.templateColumns,
        }
      : null;
  }

  function autoColumns({ props }) {
    return props.autoColumns
      ? {
          gridAutoColumns: props.autoColumns,
        }
      : null;
  }

  function columnStart({ props }) {
    return props.columnStart
      ? {
          gridColumnStart: props.columnStart,
        }
      : null;
  }

  function row({ props }) {
    return props.row
      ? {
          gridRow: props.row,
        }
      : null;
  }

  function rows({ props }) {
    return props.rows
      ? {
          gridTemplateRows: props.rows,
        }
      : null;
  }

  function templateRows({ props }) {
    return props.templateRows
      ? {
          gridTemplateRows: props.templateRows,
        }
      : null;
  }

  function autoRows({ props }) {
    return props.autoRows
      ? {
          gridAutoRows: props.autoRows,
        }
      : null;
  }

  function rowStart({ props }) {
    return props.rowStart
      ? {
          gridRowStart: props.rowStart,
        }
      : null;
  }

  function autoFlow({ props }) {
    return props.autoFlow
      ? {
          gridAutoFlow: props.autoFlow,
        }
      : null;
  }

  function columnGap({ props, deps }) {
    return props.columnGap
      ? deps.getSpacingBasedOnRatio(props, "columnGap")
      : null;
  }

  function rowGap({ props, deps }) {
    return props.rowGap ? deps.getSpacingBasedOnRatio(props, "rowGap") : null;
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

  function attr_type({ props }) {
    return props.type;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
  }

  function flow_9({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_9({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_9({ props }) {
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

  function flow_10({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_10({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_10({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_step_2({ props }) {
    return props.step;
  }

  function attr_min_2({ props }) {
    return props.min;
  }

  function attr_max_2({ props }) {
    return props.max;
  }

  function flow_11({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_11({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_11({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_step_3({ props }) {
    return props.step;
  }

  function attr_min_3({ props }) {
    return props.min;
  }

  function attr_max_3({ props }) {
    return props.max;
  }

  function flow_12({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_12({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_12({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_step_4({ props }) {
    return props.step;
  }

  function attr_min_4({ props }) {
    return props.min;
  }

  function attr_max_4({ props }) {
    return props.max;
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

  function attr_type_2({ props: props4 }) {
    return props4.type;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_2({ props: props4 }) {
    return props4.tabIndex;
  }

  function flow_14({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_14({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_14({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_3({ props }) {
    return props.type;
  }

  function attr_placeholder_3({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_3({ props }) {
    return props.tabIndex;
  }

  function flow_15({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_15({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_15({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_type_4({ props }) {
    return props.type;
  }

  function attr_placeholder_4({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_4({ props }) {
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

  function attr_placeholder_5({ props }) {
    return props.placeholder;
  }

  function attr_value({ props, state, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props.value) && props.value.includes("{{")) {
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

  function attr_type_5({ props }) {
    return props.type;
  }

  function attr_tabIndex_5({ props }) {
    return props.tabIndex;
  }

  function flow_16({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_16({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_16({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_17({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_17({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_17({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_6({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_6({ props }) {
    return props.tabIndex;
  }

  function attr_pattern_2({ props }) {
    return props.pattern;
  }

  function attr_minLength_2({ props }) {
    return props.minlength;
  }

  function attr_maxLength_2({ props }) {
    return props.maxlength;
  }

  function attr_name_2({ props }) {
    return props.name;
  }

  function attr_autocomplete_2({ props }) {
    return props.autocomplete;
  }

  function attr_placeholder_7({ props }) {
    return props.placeholder;
  }

  function attr_value_2({ props, state, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props.value) && props.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props.value, state);
    }
    return props.value;
  }

  function attr_disabled_2({ props }) {
    return props.disabled || null;
  }

  function attr_readonly_2({ props }) {
    return props.readonly;
  }

  function attr_required_2({ props }) {
    return props.required;
  }

  function attr_type_6({ props }) {
    return props.type;
  }

  function attr_tabIndex_7({ props }) {
    return props.tabIndex;
  }

  function flow_18({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_18({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_18({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_19({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_19({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_19({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_8({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_8({ props }) {
    return props.tabIndex;
  }

  function attr_pattern_3({ props }) {
    return props.pattern;
  }

  function attr_minLength_3({ props }) {
    return props.minlength;
  }

  function attr_maxLength_3({ props }) {
    return props.maxlength;
  }

  function attr_name_3({ props }) {
    return props.name;
  }

  function attr_autocomplete_3({ props }) {
    return props.autocomplete;
  }

  function attr_placeholder_9({ props }) {
    return props.placeholder;
  }

  function attr_value_3({ props, state, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props.value) && props.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props.value, state);
    }
    return props.value;
  }

  function attr_disabled_3({ props }) {
    return props.disabled || null;
  }

  function attr_readonly_3({ props }) {
    return props.readonly;
  }

  function attr_required_3({ props }) {
    return props.required;
  }

  function attr_type_7({ props }) {
    return props.type;
  }

  function attr_tabIndex_9({ props }) {
    return props.tabIndex;
  }

  function flow_20({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_20({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_20({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_21({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_21({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_21({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_10({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_10({ props }) {
    return props.tabIndex;
  }

  function attr_pattern_4({ props }) {
    return props.pattern;
  }

  function attr_minLength_4({ props }) {
    return props.minlength;
  }

  function attr_maxLength_4({ props }) {
    return props.maxlength;
  }

  function attr_name_4({ props }) {
    return props.name;
  }

  function attr_autocomplete_4({ props }) {
    return props.autocomplete;
  }

  function attr_placeholder_11({ props }) {
    return props.placeholder;
  }

  function attr_value_4({ props, state, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props.value) && props.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props.value, state);
    }
    return props.value;
  }

  function attr_disabled_4({ props }) {
    return props.disabled || null;
  }

  function attr_readonly_4({ props }) {
    return props.readonly;
  }

  function attr_required_4({ props }) {
    return props.required;
  }

  function attr_type_8({ props }) {
    return props.type;
  }

  function attr_tabIndex_11({ props }) {
    return props.tabIndex;
  }

  function flow_22({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_22({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_22({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function flow_23({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow,
      }
    );
  }

  function wrap_23({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap,
      }
    );
  }

  function align_23({ props }) {
    if (typeof props.align !== "string") return;
    const [alignItems, justifyContent] = props.align.split(" ");
    return {
      alignItems,
      justifyContent,
    };
  }

  function attr_placeholder_12({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex_12({ props }) {
    return props.tabIndex;
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

  function show_Svg_3({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function show_Svg_4({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_pattern_5({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_5({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_5({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_5({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_5({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_13({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value_5({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled_5({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_5({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_5({ props: props4 }) {
    return props4.required;
  }

  function attr_type_9({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_13({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_5({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_pattern_6({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_6({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_6({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_6({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_6({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_14({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value_6({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled_6({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_6({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_6({ props: props4 }) {
    return props4.required;
  }

  function attr_type_10({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_14({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_6({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_pattern_7({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_7({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_7({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_7({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_7({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_15({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value_7({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled_7({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_7({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_7({ props: props4 }) {
    return props4.required;
  }

  function attr_type_11({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_15({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_7({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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

  function attr_pattern_8({ props: props4 }) {
    return props4.pattern;
  }

  function attr_minLength_8({ props: props4 }) {
    return props4.minlength;
  }

  function attr_maxLength_8({ props: props4 }) {
    return props4.maxlength;
  }

  function attr_name_8({ props: props4 }) {
    return props4.name;
  }

  function attr_autocomplete_8({ props: props4 }) {
    return props4.autocomplete;
  }

  function attr_placeholder_16({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_value_8({ props: props4, state: state2, deps }) {
    const {
      isString: isString6,
      replaceLiteralsWithObjectFields: replaceLiteralsWithObjectFields2,
    } = deps;
    if (isString6(props4.value) && props4.value.includes("{{")) {
      return replaceLiteralsWithObjectFields2(props4.value, state2);
    }
    return props4.value;
  }

  function attr_disabled_8({ props: props4 }) {
    return props4.disabled || null;
  }

  function attr_readonly_8({ props: props4 }) {
    return props4.readonly;
  }

  function attr_required_8({ props: props4 }) {
    return props4.required;
  }

  function attr_type_12({ props: props4 }) {
    return props4.type;
  }

  function attr_tabIndex_16({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg_8({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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
  const dobj_Box = dobj["Header"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Form = dobj["Form"]
  dobj_Form.node = ref_Form.current
  const dobj_Box_2 = dobj["Header"]["Title"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Box_3 = dobj["Header"]["Paragraph"]
  dobj_Box_3.node = ref_Box_4.current
  const dobj_Box_4 = dobj["Form"]["Fields"]
  dobj_Box_4.node = ref_Box_5.current
  const dobj_Box_5 = dobj["Form"]["ParagraphButton"]
  dobj_Box_5.node = ref_Box_6.current
  const dobj_Box_6 = dobj["Form"]["Submit"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["Header"]["Title"]["caption"]
  dobj_Box_7.node = ref_Box_8.current
  const dobj_Box_8 = dobj["Header"]["Title"]["x"]
  dobj_Box_8.node = ref_Box_9.current
  const dobj_Box_9 = dobj["Form"]["Fields"]["0"]
  dobj_Box_9.node = ref_Box_10.current
  const dobj_Box_10 = dobj["Form"]["Fields"]["1"]
  dobj_Box_10.node = ref_Box_11.current
  const dobj_Box_11 = dobj["Form"]["Fields"]["2"]
  dobj_Box_11.node = ref_Box_12.current
  const dobj_Box_12 = dobj["Form"]["Fields"]["3"]
  dobj_Box_12.node = ref_Box_13.current
  const dobj_Box_13 = dobj["Form"]["ParagraphButton"]["P"]
  dobj_Box_13.node = ref_Box_14.current
  const dobj_Box_14 = dobj["Form"]["ParagraphButton"]["Button"]
  dobj_Box_14.node = ref_Box_15.current
  const dobj_Box_15 = dobj["Form"]["Submit"]["0"]
  dobj_Box_15.node = ref_Box_16.current
  const dobj_Box_16 = dobj["Form"]["Submit"]["1"]
  dobj_Box_16.node = ref_Box_17.current
  const dobj_Svg = dobj["Header"]["Title"]["x"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box_17 = dobj["Form"]["Fields"]["0"]["0"]
  dobj_Box_17.node = ref_Box_18.current
  const dobj_Box_18 = dobj["Form"]["Fields"]["0"]["1"]
  dobj_Box_18.node = ref_Box_19.current
  const dobj_Box_19 = dobj["Form"]["Fields"]["0"]["Title"]
  dobj_Box_19.node = ref_Box_20.current
  const dobj_Box_20 = dobj["Form"]["Fields"]["0"]["Field"]
  dobj_Box_20.node = ref_Box_21.current
  const dobj_Box_21 = dobj["Form"]["Fields"]["1"]["0"]
  dobj_Box_21.node = ref_Box_22.current
  const dobj_Box_22 = dobj["Form"]["Fields"]["1"]["1"]
  dobj_Box_22.node = ref_Box_23.current
  const dobj_Box_23 = dobj["Form"]["Fields"]["1"]["Title"]
  dobj_Box_23.node = ref_Box_24.current
  const dobj_Box_24 = dobj["Form"]["Fields"]["1"]["Field"]
  dobj_Box_24.node = ref_Box_25.current
  const dobj_Box_25 = dobj["Form"]["Fields"]["2"]["0"]
  dobj_Box_25.node = ref_Box_26.current
  const dobj_Box_26 = dobj["Form"]["Fields"]["2"]["1"]
  dobj_Box_26.node = ref_Box_27.current
  const dobj_Box_27 = dobj["Form"]["Fields"]["2"]["Title"]
  dobj_Box_27.node = ref_Box_28.current
  const dobj_Box_28 = dobj["Form"]["Fields"]["2"]["Field"]
  dobj_Box_28.node = ref_Box_29.current
  const dobj_Box_29 = dobj["Form"]["Fields"]["3"]["0"]
  dobj_Box_29.node = ref_Box_30.current
  const dobj_Box_30 = dobj["Form"]["Fields"]["3"]["1"]
  dobj_Box_30.node = ref_Box_31.current
  const dobj_Box_31 = dobj["Form"]["Fields"]["3"]["Title"]
  dobj_Box_31.node = ref_Box_32.current
  const dobj_Box_32 = dobj["Form"]["Fields"]["3"]["Field"]
  dobj_Box_32.node = ref_Box_33.current
  const dobj_Svg_2 = dobj["Form"]["ParagraphButton"]["Button"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  const dobj_Box_33 = dobj["Form"]["Submit"]["0"]["caption"]
  dobj_Box_33.node = ref_Box_34.current
  const dobj_Svg_3 = dobj["Form"]["Submit"]["0"]["Icon"]
  dobj_Svg_3.node = ref_Svg_3.current
  const dobj_Box_34 = dobj["Form"]["Submit"]["1"]["caption"]
  dobj_Box_34.node = ref_Box_35.current
  const dobj_Svg_4 = dobj["Form"]["Submit"]["1"]["Icon"]
  dobj_Svg_4.node = ref_Svg_4.current
  const dobj_Box_35 = dobj["Form"]["Fields"]["0"]["Field"]["Input"]
  dobj_Box_35.node = ref_Box_36.current
  const dobj_Svg_5 = dobj["Form"]["Fields"]["0"]["Field"]["Icon"]
  dobj_Svg_5.node = ref_Svg_5.current
  const dobj_Box_36 = dobj["Form"]["Fields"]["1"]["Field"]["Input"]
  dobj_Box_36.node = ref_Box_37.current
  const dobj_Svg_6 = dobj["Form"]["Fields"]["1"]["Field"]["Icon"]
  dobj_Svg_6.node = ref_Svg_6.current
  const dobj_Box_37 = dobj["Form"]["Fields"]["2"]["Field"]["Input"]
  dobj_Box_37.node = ref_Box_38.current
  const dobj_Svg_7 = dobj["Form"]["Fields"]["2"]["Field"]["Icon"]
  dobj_Svg_7.node = ref_Svg_7.current
  const dobj_Box_38 = dobj["Form"]["Fields"]["3"]["Field"]["Input"]
  dobj_Box_38.node = ref_Box_39.current
  const dobj_Svg_8 = dobj["Form"]["Fields"]["3"]["Field"]["Icon"]
  dobj_Svg_8.node = ref_Svg_8.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      gap="B"
      boxSizing="border-box"
      padding="A+V A"
      flow="column"
      boxSize="fit-content"
      minWidth="G3"
      position="relative"
      round="A1"
      theme="dialog"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        gap="A"
        minWidth="100%"
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
          lineHeight="1em"
          fontWeight="700"
          alignItems="center"
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
            text="Verify your email"
            padding="Y W2 - W2"
            fontSize="D"
            tag="caption"
            ref={ref_Box_8}
            {...dobj_Box_7.props}
            domqlElementObject={dobj_Box_7}
          />
          <Box
            margin="-Y+V - - -"
            fontSize="C"
            icon="x"
            boxSize="fit-content"
            theme="transparent"
            padding="0"
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
            ref={ref_Box_9}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_8(dobj_Box_8))} ${css(
              wrap_8(dobj_Box_8)
            )} ${css(align_8(dobj_Box_8))}`}
            {...dobj_Box_8.props}
            type={attr_type(dobj_Box_8)}
            placeholder={attr_placeholder(dobj_Box_8)}
            tabIndex={attr_tabIndex(dobj_Box_8)}
            domqlElementObject={dobj_Box_8}
          >
            {show_Svg(dobj_Svg) ? (
              <Svg
                icon="x"
                width="A"
                height="A"
                display="inline-block"
                spriteId="x"
                src='<symbol id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol>'
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
        <Box
          text="Verification code has been sent to you. Enter the code below."
          maxWidth="G1+Y"
          fontSize="Z"
          color="gray4"
          padding="- Y"
          margin="0"
          fontWeight="400"
          display="flex"
          tag="div"
          ref={ref_Box_4}
          className={`${css(flow_5(dobj_Box_3))} ${css(
            wrap_5(dobj_Box_3)
          )} ${css(align_5(dobj_Box_3))}`}
          {...dobj_Box_3.props}
          domqlElementObject={dobj_Box_3}
        />
      </Box>
      <Form
        flow="column"
        display="flex"
        ref={ref_Form}
        className={`${css(flow_3(dobj_Form))} ${css(wrap_3(dobj_Form))} ${css(
          align_3(dobj_Form)
        )}`}
        {...dobj_Form.props}
        domqlElementObject={dobj_Form}
      >
        <Box
          display="flex"
          columnGap="A"
          rowGap="A1"
          tag="div"
          ref={ref_Box_5}
          childProps={{
            flex: "1",
          }}
          className={`${css(area(dobj_Box_4))} ${css(
            template(dobj_Box_4)
          )} ${css(templateAreas(dobj_Box_4))} ${css(column(dobj_Box_4))} ${css(
            columns(dobj_Box_4)
          )} ${css(templateColumns(dobj_Box_4))} ${css(
            autoColumns(dobj_Box_4)
          )} ${css(columnStart(dobj_Box_4))} ${css(row(dobj_Box_4))} ${css(
            rows(dobj_Box_4)
          )} ${css(templateRows(dobj_Box_4))} ${css(
            autoRows(dobj_Box_4)
          )} ${css(rowStart(dobj_Box_4))} ${css(autoFlow(dobj_Box_4))} ${css(
            columnGap(dobj_Box_4)
          )} ${css(rowGap(dobj_Box_4))}`}
          {...dobj_Box_4.props}
          domqlElementObject={dobj_Box_4}
        >
          <Box
            flex="1"
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
            width="100%"
            flow="column"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_10}
            style={{
              "&::-webkit-inner-spin-button": {
                "-webkit-appearance": "none",
              },
            }}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_9(dobj_Box_9))} ${css(
              wrap_9(dobj_Box_9)
            )} ${css(align_9(dobj_Box_9))}`}
            {...dobj_Box_9.props}
            step={attr_step(dobj_Box_9)}
            min={attr_min(dobj_Box_9)}
            max={attr_max(dobj_Box_9)}
            domqlElementObject={dobj_Box_9}
          >
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
              ref={ref_Box_18}
              lineHeight={1}
              {...dobj_Box_17.props}
              pattern={attr_pattern(dobj_Box_17)}
              minLength={attr_minLength(dobj_Box_17)}
              maxLength={attr_maxLength(dobj_Box_17)}
              name={attr_name(dobj_Box_17)}
              autoComplete={attr_autocomplete(dobj_Box_17)}
              placeholder={attr_placeholder_5(dobj_Box_17)}
              value={attr_value(dobj_Box_17)}
              disabled={attr_disabled(dobj_Box_17)}
              readonly={attr_readonly(dobj_Box_17)}
              required={attr_required(dobj_Box_17)}
              type={attr_type_5(dobj_Box_17)}
              tabIndex={attr_tabIndex_5(dobj_Box_17)}
              domqlElementObject={dobj_Box_17}
            />
            <Box
              display="flex"
              tag="div"
              ref={ref_Box_19}
              className={`${css(flow_16(dobj_Box_18))} ${css(
                wrap_16(dobj_Box_18)
              )} ${css(align_16(dobj_Box_18))}`}
              {...dobj_Box_18.props}
              domqlElementObject={dobj_Box_18}
            />
            <Box
              text="Label"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_20}
              {...dobj_Box_19.props}
              domqlElementObject={dobj_Box_19}
            />
            <Box
              minWidth="100%"
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
              ref={ref_Box_21}
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
              className={`${css(flow_17(dobj_Box_20))} ${css(
                wrap_17(dobj_Box_20)
              )} ${css(align_17(dobj_Box_20))}`}
              {...dobj_Box_20.props}
              placeholder={attr_placeholder_6(dobj_Box_20)}
              tabIndex={attr_tabIndex_6(dobj_Box_20)}
              domqlElementObject={dobj_Box_20}
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
                ref={ref_Box_36}
                lineHeight={1}
                {...dobj_Box_35.props}
                pattern={attr_pattern_5(dobj_Box_35)}
                minLength={attr_minLength_5(dobj_Box_35)}
                maxLength={attr_maxLength_5(dobj_Box_35)}
                name={attr_name_5(dobj_Box_35)}
                autoComplete={attr_autocomplete_5(dobj_Box_35)}
                placeholder={attr_placeholder_13(dobj_Box_35)}
                value={attr_value_5(dobj_Box_35)}
                disabled={attr_disabled_5(dobj_Box_35)}
                readonly={attr_readonly_5(dobj_Box_35)}
                required={attr_required_5(dobj_Box_35)}
                type={attr_type_9(dobj_Box_35)}
                tabIndex={attr_tabIndex_13(dobj_Box_35)}
                domqlElementObject={dobj_Box_35}
              />
              {show_Svg_5(dobj_Svg_5) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
                  width="A"
                  height="A"
                  display="inline-block"
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
          </Box>
          <Box
            flex="1"
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
            width="100%"
            flow="column"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_11}
            style={{
              "&::-webkit-inner-spin-button": {
                "-webkit-appearance": "none",
              },
            }}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_10(dobj_Box_10))} ${css(
              wrap_10(dobj_Box_10)
            )} ${css(align_10(dobj_Box_10))}`}
            {...dobj_Box_10.props}
            step={attr_step_2(dobj_Box_10)}
            min={attr_min_2(dobj_Box_10)}
            max={attr_max_2(dobj_Box_10)}
            domqlElementObject={dobj_Box_10}
          >
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
              ref={ref_Box_22}
              lineHeight={1}
              {...dobj_Box_21.props}
              pattern={attr_pattern_2(dobj_Box_21)}
              minLength={attr_minLength_2(dobj_Box_21)}
              maxLength={attr_maxLength_2(dobj_Box_21)}
              name={attr_name_2(dobj_Box_21)}
              autoComplete={attr_autocomplete_2(dobj_Box_21)}
              placeholder={attr_placeholder_7(dobj_Box_21)}
              value={attr_value_2(dobj_Box_21)}
              disabled={attr_disabled_2(dobj_Box_21)}
              readonly={attr_readonly_2(dobj_Box_21)}
              required={attr_required_2(dobj_Box_21)}
              type={attr_type_6(dobj_Box_21)}
              tabIndex={attr_tabIndex_7(dobj_Box_21)}
              domqlElementObject={dobj_Box_21}
            />
            <Box
              display="flex"
              tag="div"
              ref={ref_Box_23}
              className={`${css(flow_18(dobj_Box_22))} ${css(
                wrap_18(dobj_Box_22)
              )} ${css(align_18(dobj_Box_22))}`}
              {...dobj_Box_22.props}
              domqlElementObject={dobj_Box_22}
            />
            <Box
              text="Label"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_24}
              {...dobj_Box_23.props}
              domqlElementObject={dobj_Box_23}
            />
            <Box
              minWidth="100%"
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
              ref={ref_Box_25}
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
              className={`${css(flow_19(dobj_Box_24))} ${css(
                wrap_19(dobj_Box_24)
              )} ${css(align_19(dobj_Box_24))}`}
              {...dobj_Box_24.props}
              placeholder={attr_placeholder_8(dobj_Box_24)}
              tabIndex={attr_tabIndex_8(dobj_Box_24)}
              domqlElementObject={dobj_Box_24}
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
                ref={ref_Box_37}
                lineHeight={1}
                {...dobj_Box_36.props}
                pattern={attr_pattern_6(dobj_Box_36)}
                minLength={attr_minLength_6(dobj_Box_36)}
                maxLength={attr_maxLength_6(dobj_Box_36)}
                name={attr_name_6(dobj_Box_36)}
                autoComplete={attr_autocomplete_6(dobj_Box_36)}
                placeholder={attr_placeholder_14(dobj_Box_36)}
                value={attr_value_6(dobj_Box_36)}
                disabled={attr_disabled_6(dobj_Box_36)}
                readonly={attr_readonly_6(dobj_Box_36)}
                required={attr_required_6(dobj_Box_36)}
                type={attr_type_10(dobj_Box_36)}
                tabIndex={attr_tabIndex_14(dobj_Box_36)}
                domqlElementObject={dobj_Box_36}
              />
              {show_Svg_6(dobj_Svg_6) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
                  width="A"
                  height="A"
                  display="inline-block"
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
            flex="1"
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
            width="100%"
            flow="column"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_12}
            style={{
              "&::-webkit-inner-spin-button": {
                "-webkit-appearance": "none",
              },
            }}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_11(dobj_Box_11))} ${css(
              wrap_11(dobj_Box_11)
            )} ${css(align_11(dobj_Box_11))}`}
            {...dobj_Box_11.props}
            step={attr_step_3(dobj_Box_11)}
            min={attr_min_3(dobj_Box_11)}
            max={attr_max_3(dobj_Box_11)}
            domqlElementObject={dobj_Box_11}
          >
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
              ref={ref_Box_26}
              lineHeight={1}
              {...dobj_Box_25.props}
              pattern={attr_pattern_3(dobj_Box_25)}
              minLength={attr_minLength_3(dobj_Box_25)}
              maxLength={attr_maxLength_3(dobj_Box_25)}
              name={attr_name_3(dobj_Box_25)}
              autoComplete={attr_autocomplete_3(dobj_Box_25)}
              placeholder={attr_placeholder_9(dobj_Box_25)}
              value={attr_value_3(dobj_Box_25)}
              disabled={attr_disabled_3(dobj_Box_25)}
              readonly={attr_readonly_3(dobj_Box_25)}
              required={attr_required_3(dobj_Box_25)}
              type={attr_type_7(dobj_Box_25)}
              tabIndex={attr_tabIndex_9(dobj_Box_25)}
              domqlElementObject={dobj_Box_25}
            />
            <Box
              display="flex"
              tag="div"
              ref={ref_Box_27}
              className={`${css(flow_20(dobj_Box_26))} ${css(
                wrap_20(dobj_Box_26)
              )} ${css(align_20(dobj_Box_26))}`}
              {...dobj_Box_26.props}
              domqlElementObject={dobj_Box_26}
            />
            <Box
              text="Label"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_28}
              {...dobj_Box_27.props}
              domqlElementObject={dobj_Box_27}
            />
            <Box
              minWidth="100%"
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
              ref={ref_Box_29}
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
              className={`${css(flow_21(dobj_Box_28))} ${css(
                wrap_21(dobj_Box_28)
              )} ${css(align_21(dobj_Box_28))}`}
              {...dobj_Box_28.props}
              placeholder={attr_placeholder_10(dobj_Box_28)}
              tabIndex={attr_tabIndex_10(dobj_Box_28)}
              domqlElementObject={dobj_Box_28}
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
                ref={ref_Box_38}
                lineHeight={1}
                {...dobj_Box_37.props}
                pattern={attr_pattern_7(dobj_Box_37)}
                minLength={attr_minLength_7(dobj_Box_37)}
                maxLength={attr_maxLength_7(dobj_Box_37)}
                name={attr_name_7(dobj_Box_37)}
                autoComplete={attr_autocomplete_7(dobj_Box_37)}
                placeholder={attr_placeholder_15(dobj_Box_37)}
                value={attr_value_7(dobj_Box_37)}
                disabled={attr_disabled_7(dobj_Box_37)}
                readonly={attr_readonly_7(dobj_Box_37)}
                required={attr_required_7(dobj_Box_37)}
                type={attr_type_11(dobj_Box_37)}
                tabIndex={attr_tabIndex_15(dobj_Box_37)}
                domqlElementObject={dobj_Box_37}
              />
              {show_Svg_7(dobj_Svg_7) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
                  width="A"
                  height="A"
                  display="inline-block"
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
          </Box>
          <Box
            flex="1"
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
            width="100%"
            flow="column"
            gap="Y1"
            display="flex"
            tag="div"
            ref={ref_Box_13}
            style={{
              "&::-webkit-inner-spin-button": {
                "-webkit-appearance": "none",
              },
            }}
            Field={{
              props: {
                minWidth: "100%",
              },
              __ref: undefined,
            }}
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
            className={`${css(flow_12(dobj_Box_12))} ${css(
              wrap_12(dobj_Box_12)
            )} ${css(align_12(dobj_Box_12))}`}
            {...dobj_Box_12.props}
            step={attr_step_4(dobj_Box_12)}
            min={attr_min_4(dobj_Box_12)}
            max={attr_max_4(dobj_Box_12)}
            domqlElementObject={dobj_Box_12}
          >
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
              ref={ref_Box_30}
              lineHeight={1}
              {...dobj_Box_29.props}
              pattern={attr_pattern_4(dobj_Box_29)}
              minLength={attr_minLength_4(dobj_Box_29)}
              maxLength={attr_maxLength_4(dobj_Box_29)}
              name={attr_name_4(dobj_Box_29)}
              autoComplete={attr_autocomplete_4(dobj_Box_29)}
              placeholder={attr_placeholder_11(dobj_Box_29)}
              value={attr_value_4(dobj_Box_29)}
              disabled={attr_disabled_4(dobj_Box_29)}
              readonly={attr_readonly_4(dobj_Box_29)}
              required={attr_required_4(dobj_Box_29)}
              type={attr_type_8(dobj_Box_29)}
              tabIndex={attr_tabIndex_11(dobj_Box_29)}
              domqlElementObject={dobj_Box_29}
            />
            <Box
              display="flex"
              tag="div"
              ref={ref_Box_31}
              className={`${css(flow_22(dobj_Box_30))} ${css(
                wrap_22(dobj_Box_30)
              )} ${css(align_22(dobj_Box_30))}`}
              {...dobj_Box_30.props}
              domqlElementObject={dobj_Box_30}
            />
            <Box
              text="Label"
              fontSize="Z"
              lineHeight="1em"
              color="gray2"
              fontWeight="400"
              padding="- Y1"
              tag="div"
              ref={ref_Box_32}
              {...dobj_Box_31.props}
              domqlElementObject={dobj_Box_31}
            />
            <Box
              minWidth="100%"
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
              ref={ref_Box_33}
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
              className={`${css(flow_23(dobj_Box_32))} ${css(
                wrap_23(dobj_Box_32)
              )} ${css(align_23(dobj_Box_32))}`}
              {...dobj_Box_32.props}
              placeholder={attr_placeholder_12(dobj_Box_32)}
              tabIndex={attr_tabIndex_12(dobj_Box_32)}
              domqlElementObject={dobj_Box_32}
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
                ref={ref_Box_39}
                lineHeight={1}
                {...dobj_Box_38.props}
                pattern={attr_pattern_8(dobj_Box_38)}
                minLength={attr_minLength_8(dobj_Box_38)}
                maxLength={attr_maxLength_8(dobj_Box_38)}
                name={attr_name_8(dobj_Box_38)}
                autoComplete={attr_autocomplete_8(dobj_Box_38)}
                placeholder={attr_placeholder_16(dobj_Box_38)}
                value={attr_value_8(dobj_Box_38)}
                disabled={attr_disabled_8(dobj_Box_38)}
                readonly={attr_readonly_8(dobj_Box_38)}
                required={attr_required_8(dobj_Box_38)}
                type={attr_type_12(dobj_Box_38)}
                tabIndex={attr_tabIndex_16(dobj_Box_38)}
                domqlElementObject={dobj_Box_38}
              />
              {show_Svg_8(dobj_Svg_8) ? (
                <Svg
                  color="gray2"
                  fontSize="Z2"
                  width="A"
                  height="A"
                  display="inline-block"
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
        </Box>
        <Box
          padding="Z1 Z2 - Z2"
          alignItems="center"
          gap="Y2"
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
            text="Didn't get the code?"
            color="gray2"
            margin="0"
            tag="p"
            ref={ref_Box_14}
            {...dobj_Box_13.props}
            domqlElementObject={dobj_Box_13}
          />
          <Box
            text="Click to resend"
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
            ref={ref_Box_15}
            style={{
              appearance: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            className={`${css(flow_13(dobj_Box_14))} ${css(
              wrap_13(dobj_Box_14)
            )} ${css(align_13(dobj_Box_14))}`}
            {...dobj_Box_14.props}
            type={attr_type_2(dobj_Box_14)}
            placeholder={attr_placeholder_2(dobj_Box_14)}
            tabIndex={attr_tabIndex_2(dobj_Box_14)}
            domqlElementObject={dobj_Box_14}
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
        <Box
          justifyContent="flex-end"
          minWidth="100%"
          margin="C - - -"
          gap="Z2"
          maxWidth="fit-content"
          display="flex"
          tag="div"
          ref={ref_Box_7}
          className={`${css(flow_7(dobj_Box_6))} ${css(
            wrap_7(dobj_Box_6)
          )} ${css(align_7(dobj_Box_6))}`}
          {...dobj_Box_6.props}
          domqlElementObject={dobj_Box_6}
        >
          <Box
            theme="primary"
            boxSize="fit-content"
            padding="Z2 A2"
            round="Z1"
            gap="X1"
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
            type={attr_type_3(dobj_Box_15)}
            placeholder={attr_placeholder_3(dobj_Box_15)}
            tabIndex={attr_tabIndex_3(dobj_Box_15)}
            domqlElementObject={dobj_Box_15}
          >
            <Box
              text="Cancel"
              line_height="1em"
              fontSize="Z2"
              letterSpacing=".005em"
              tag="caption"
              ref={ref_Box_34}
              {...dobj_Box_33.props}
              domqlElementObject={dobj_Box_33}
            />
            {show_Svg_3(dobj_Svg_3) ? (
              <Svg
                fontSize="B1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ref={ref_Svg_3}
                dangerouslySetInnerHTML={{ __html: html_3(dobj_Svg_3) }}
                {...dobj_Svg_3.props}
                domqlElementObject={dobj_Svg_3}
              />
            ) : null}
          </Box>
          <Box
            theme="primary"
            boxSize="fit-content"
            padding="Z2 A2"
            round="Z1"
            gap="X1"
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
            type={attr_type_4(dobj_Box_16)}
            placeholder={attr_placeholder_4(dobj_Box_16)}
            tabIndex={attr_tabIndex_4(dobj_Box_16)}
            domqlElementObject={dobj_Box_16}
          >
            <Box
              text="Verify"
              line_height="1em"
              fontSize="Z2"
              letterSpacing=".005em"
              tag="caption"
              ref={ref_Box_35}
              {...dobj_Box_34.props}
              domqlElementObject={dobj_Box_34}
            />
            {show_Svg_4(dobj_Svg_4) ? (
              <Svg
                fontSize="B1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ref={ref_Svg_4}
                dangerouslySetInnerHTML={{ __html: html_4(dobj_Svg_4) }}
                {...dobj_Svg_4.props}
                domqlElementObject={dobj_Svg_4}
              />
            ) : null}
          </Box>
        </Box>
      </Form>
    </Box>
  );
}
