import * as React from "react";
import { Box, Button, Flex, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
import { css } from "@emotion/css";
import { Svg } from "@symbo.ls/react-atoms";

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
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    padding: '- - A2 -',
    maxWidth: '17em',
    boxSizing: 'border-box',
    ':before': {
      content: '""',
      position: 'absolute',
      boxSize: '100% 100px',
      background: 'linear-gradient(to right, var(--theme-tertiary-dark-background) 0%, transparent 100%)',
      left: '0',
      top: '0',
      zIndex: '30',
      pointerEvents: 'none'
    },
    ':after': {
      content: '""',
      position: 'absolute',
      boxSize: '100% 100px',
      background: 'linear-gradient(to left, var(--theme-tertiary-dark-background) 0%, transparent 100%)',
      right: '0',
      top: '0',
      zIndex: '30',
      pointerEvents: 'none'
    },
    style: {
      '> button': {
        padding: '0',
        width: 'A',
        height: 'A',
        position: 'absolute',
        zIndex: '35',
        background: 'transparent',
        ':first-child': {left: '18px'},
        ':last-child': {right: '18px'}
      }
    }
  },
  Button_left: {
    props: {
      icon: 'arrowLeft',
      '@dark': {
        theme: 'primary @dark .color-only'
      },
      '@light': {
        theme: 'primary @light .color-only'
      }
    },
    on: {
      click: (ev, el, s) => {
        const { activeMonth, activeYear } = s;
        if (activeMonth > 0)
          s.update({ activeMonth: activeMonth - 1 });
        else {
          s.update({
            activeYear: activeYear - 1,
            activeMonth: 11
          });
        }
      }
    }
  },
  Flex: {
    props: {
      flex: '1',
      overflow: 'hidden',
      style: {
        scrollSnapType: 'x mandatory'
      },
      '::-webkit-scrollbar': {display: 'none'}
    },
    childExtend: {
      tag: 'h6',
      props: ({ state, key }) => ({
        fontSize: "Z1",
        textAlign: "center",
        boxSizing: "content-box",
        minWidth: "272px",
        style: { scrollSnapAlign: "center" },
        isSelected: state.activeMonth === parseInt(key),
        ".isSelected": { opacity: "1" }
      }),
      on: {
        update: (el, state) => {
          const { props } = el;
          const { isSelected } = props;
          if (isSelected) {
            window.requestAnimationFrame(() => {
              el.parent.parent.node.scrollTo({
                left: el.node.offsetLeft,
                behavior: state.initialized ? "smooth" : "instant"
              });
            });
          }
        }
      }
    },
    $setPropsCollection: ({ state, parent }) => {
      return [
        { text: "January" },
        { text: "February" },
        { text: "March" },
        { text: "April" },
        { text: "May" },
        { text: "June" },
        { text: "July" },
        { text: "August" },
        { text: "September" },
        { text: "October" },
        { text: "November" },
        { text: "December" }
      ];
    }
  },
  Button_right: {
    props: {
      icon: 'arrowRight',
      '@dark': {
        theme: 'primary @dark .color-only'
      },
      '@light': {
        theme: 'primary @light .color-only'
      }
    },
    on: {
      click: (ev, el, s) => {
        const { activeMonth, activeYear } = s;
        if (activeMonth < 11)
          s.update({ activeMonth: activeMonth + 1 });
        else {
          s.update({
            activeYear: activeYear + 1,
            activeMonth: 0
          });
        }
      }
    }
  },
  __name: 'DatePickerMonthsSlider'
};

export function DatePickerMonthsSlider(props) {
  const ref_Box = useRef(null);
  const ref_Button = useRef(null);
  const ref_Flex = useRef(null);
  const ref_Button_2 = useRef(null);
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

  function Button_onClick(ev, el, s) {
    const { activeMonth, activeYear } = s;
    if (activeMonth > 0)
      s.update({
        activeMonth: activeMonth - 1,
      });
    else {
      s.update({
        activeYear: activeYear - 1,
        activeMonth: 11,
      });
    }
    return;
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

  function props_filter({ state, parent }) {
    return [
      {
        text: "January",
      },
      {
        text: "February",
      },
      {
        text: "March",
      },
      {
        text: "April",
      },
      {
        text: "May",
      },
      {
        text: "June",
      },
      {
        text: "July",
      },
      {
        text: "August",
      },
      {
        text: "September",
      },
      {
        text: "October",
      },
      {
        text: "November",
      },
      {
        text: "December",
      },
    ];
  }

  function setPropsCollection(parent2, childExtend, childrenOverrides) {
    if (!childrenOverrides || childrenOverrides.length === 0) return [];
    return childrenOverrides
      .map((value2) => ({
        props:
          value2 !== null && typeof value2 === "object"
            ? value2
            : {
                value: value2,
              },
      }))
      .map((ovr, idx) => ({
        key: idx.toString(),
        tag: childExtend.tag ?? "div",
        context: childExtend.context ?? parent2.context,
        state: childExtend.state,
        // NOTE: props skipped deliberately
        parent: parent2,
        ...ovr,
      }));
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

  function Button_onClick_2(ev, el, s) {
    const { activeMonth, activeYear } = s;
    if (activeMonth < 11)
      s.update({
        activeMonth: activeMonth + 1,
      });
    else {
      s.update({
        activeYear: activeYear + 1,
        activeMonth: 0,
      });
    }
    return;
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
  const dobj_Button = dobj["Button_left"]
  dobj_Button.node = ref_Button.current
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  
  if (props.logElement)
    console.log(dobj)
  const dobj_Button_2 = dobj["Button_right"]
  dobj_Button_2.node = ref_Button_2.current
  const dobj_Svg = dobj["Button_left"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["Button_right"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      position="relative"
      overflow="hidden"
      alignItems="center"
      padding="- - A2 -"
      maxWidth="17em"
      boxSizing="border-box"
      display="flex"
      tag="div"
      ref={ref_Box}
      style={{
        "> button": {
          padding: "0",
          width: "A",
          height: "A",
          position: "absolute",
          zIndex: "35",
          background: "transparent",
          ":first-child": {
            left: "18px",
          },
          ":last-child": {
            right: "18px",
          },
        },
      }}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Button
        icon="arrowLeft"
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
        onClick={(ev) => Button_onClick(ev, dobj_Button, s)}
        {...dobj_Button.props}
        type={attr_type(dobj_Button)}
        placeholder={attr_placeholder(dobj_Button)}
        tabIndex={attr_tabIndex(dobj_Button)}
        domqlElementObject={dobj_Button}
      >
        {show_Svg(dobj_Svg) ? (
          <Svg
            icon="arrowLeft"
            width="A"
            height="A"
            display="inline-block"
            spriteId="arrowLeft"
            src='<symbol id="arrowLeft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></symbol>'
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
      </Button>
      <Flex
        flex="1"
        overflow="hidden"
        display="flex"
        ref={ref_Flex}
        style={{
          scrollSnapType: "x mandatory",
        }}
        className={`${css(flow_3(dobj_Flex))} ${css(wrap_3(dobj_Flex))} ${css(
          align_3(dobj_Flex)
        )}`}
        {...dobj_Flex.props}
        domqlElementObject={dobj_Flex}
      >
        {setPropsCollection(
          dobj_Flex,
          dobj["Flex"]["childExtend"],
          props_filter(dobj_Flex)
        )?.map((item) => (
          <Box
            fontSize="Z1"
            textAlign="center"
            boxSizing="content-box"
            minWidth="272px"
            tag="h6"
            style={{
              scrollSnapAlign: "center",
            }}
            {...dobj.props}
            domqlElementObject={dobj}
          />
        ))}
      </Flex>
      <Button
        icon="arrowRight"
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
        ref={ref_Button_2}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(flow_4(dobj_Button_2))} ${css(
          wrap_4(dobj_Button_2)
        )} ${css(align_4(dobj_Button_2))}`}
        onClick={(ev) => Button_onClick_2(ev, dobj_Button_2, s)}
        {...dobj_Button_2.props}
        type={attr_type_2(dobj_Button_2)}
        placeholder={attr_placeholder_2(dobj_Button_2)}
        tabIndex={attr_tabIndex_2(dobj_Button_2)}
        domqlElementObject={dobj_Button_2}
      >
        {show_Svg_2(dobj_Svg_2) ? (
          <Svg
            icon="arrowRight"
            width="A"
            height="A"
            display="inline-block"
            spriteId="arrowRight"
            src='<symbol id="arrowRight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></symbol>'
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
      </Button>
    </Box>
  );
}

const orig_2 = {
  '0': {text: 'Mo'},
  '1': {text: 'Tu'},
  '2': {text: 'We'},
  '3': {text: 'Th'},
  '4': {text: 'Fr'},
  '5': {text: 'Sa'},
  '6': {text: 'Su'},
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
    overflow: 'hidden',
    padding: '- Z A',
    width: '100%',
    columns: 'repeat(7, 1fr)',
    gap: 'W2',
    style: {button: {padding: '0'}}
  },
  childExtend: {
    tag: 'span',
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
      fontSize: 'Y1',
      textTransform: 'capitalize',
      align: 'center center',
      ':nth-child(7n-1), &:nth-child(7n)': {opacity: '.5'}
    }
  },
  __name: 'DatePickerWeekDays'
};

export function DatePickerWeekDays(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Box_4 = useRef(null);
  const ref_Box_5 = useRef(null);
  const ref_Box_6 = useRef(null);
  const ref_Box_7 = useRef(null);
  const ref_Box_8 = useRef(null);
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
  const dobj_Box_6 = dobj["5"]
  dobj_Box_6.node = ref_Box_7.current
  const dobj_Box_7 = dobj["6"]
  dobj_Box_7.node = ref_Box_8.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      overflow="hidden"
      padding="- Z A"
      width="100%"
      columns="repeat(7, 1fr)"
      gap="W2"
      display="grid"
      tag="div"
      ref={ref_Box}
      style={{
        button: {
          padding: "0",
        },
      }}
      className={`${css(area(dobj))} ${css(template(dobj))} ${css(
        templateAreas(dobj)
      )} ${css(column(dobj))} ${css(columns(dobj))} ${css(
        templateColumns(dobj)
      )} ${css(autoColumns(dobj))} ${css(columnStart(dobj))} ${css(
        row(dobj)
      )} ${css(rows(dobj))} ${css(templateRows(dobj))} ${css(
        autoRows(dobj)
      )} ${css(rowStart(dobj))} ${css(autoFlow(dobj))} ${css(
        columnGap(dobj)
      )} ${css(rowGap(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        fontSize="Y1"
        textTransform="capitalize"
        align="center center"
        display="flex"
        tag="span"
        ref={ref_Box_2}
        className={`${css(flow(dobj_Box))} ${css(wrap(dobj_Box))} ${css(
          align(dobj_Box)
        )}`}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        fontSize="Y1"
        textTransform="capitalize"
        align="center center"
        display="flex"
        tag="span"
        ref={ref_Box_3}
        className={`${css(flow_2(dobj_Box_2))} ${css(wrap_2(dobj_Box_2))} ${css(
          align_2(dobj_Box_2)
        )}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
      <Box
        fontSize="Y1"
        textTransform="capitalize"
        align="center center"
        display="flex"
        tag="span"
        ref={ref_Box_4}
        className={`${css(flow_3(dobj_Box_3))} ${css(wrap_3(dobj_Box_3))} ${css(
          align_3(dobj_Box_3)
        )}`}
        {...dobj_Box_3.props}
        domqlElementObject={dobj_Box_3}
      />
      <Box
        fontSize="Y1"
        textTransform="capitalize"
        align="center center"
        display="flex"
        tag="span"
        ref={ref_Box_5}
        className={`${css(flow_4(dobj_Box_4))} ${css(wrap_4(dobj_Box_4))} ${css(
          align_4(dobj_Box_4)
        )}`}
        {...dobj_Box_4.props}
        domqlElementObject={dobj_Box_4}
      />
      <Box
        fontSize="Y1"
        textTransform="capitalize"
        align="center center"
        display="flex"
        tag="span"
        ref={ref_Box_6}
        className={`${css(flow_5(dobj_Box_5))} ${css(wrap_5(dobj_Box_5))} ${css(
          align_5(dobj_Box_5)
        )}`}
        {...dobj_Box_5.props}
        domqlElementObject={dobj_Box_5}
      />
      <Box
        fontSize="Y1"
        textTransform="capitalize"
        align="center center"
        display="flex"
        tag="span"
        ref={ref_Box_7}
        className={`${css(flow_6(dobj_Box_6))} ${css(wrap_6(dobj_Box_6))} ${css(
          align_6(dobj_Box_6)
        )}`}
        {...dobj_Box_6.props}
        domqlElementObject={dobj_Box_6}
      />
      <Box
        fontSize="Y1"
        textTransform="capitalize"
        align="center center"
        display="flex"
        tag="span"
        ref={ref_Box_8}
        className={`${css(flow_7(dobj_Box_7))} ${css(wrap_7(dobj_Box_7))} ${css(
          align_7(dobj_Box_7)
        )}`}
        {...dobj_Box_7.props}
        domqlElementObject={dobj_Box_7}
      />
    </Box>
  );
}

import { useEffect } from "react";

const orig_3 = {
  tag: 'aside',
  props: {
    overflow: 'hidden',
    position: 'relative',
    style: {button: {padding: '0'}},
    ':before': {
      content: '""',
      boxSize: 'A1 100%',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'linear-gradient(to bottom, var(--theme-tertiary-dark-background) 0%, transparent 100%)',
      zIndex: '10'
    },
    ':after': {
      content: '""',
      boxSize: 'B 100%',
      position: 'absolute',
      bottom: '0',
      left: '0',
      background: 'linear-gradient(to top, var(--theme-tertiary-dark-background) 0%, transparent 100%)'
    }
  },
  if: ({ state }) => state.yearRange,
  Flex: {
    props: {
      flow: 'column',
      gap: 'B',
      padding: 'A Z A1 B',
      maxHeight: '100%',
      overflow: 'hidden auto',
      '::-webkit-scrollbar': {display: 'none'}
    },
    childExtend: {
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
      props: ({ state, text }) => ({
        fontSize: "Y1",
        color: "white",
        opacity: ".4",
        background: "transparent",
        transition: "opacity .25s ease",
        isSelected: state.activeYear === text,
        ".isSelected": { opacity: "1" },
        ":hover": { opacity: "1" }
      }),
      on: {
        click: (event, element, state) => state.update({
          activeYear: element.text
        }, { isHoisted: true }),
        render: (el, state) => {
          const { props } = el;
          const { isSelected } = props;
          if (!isSelected)
            return;
          window.requestAnimationFrame(() => {
            el.parent.parent.node.scrollTop = el.node.offsetTop - 100;
          });
        }
      }
    },
    $setPropsCollection: (element) => {
      const { yearRange } = element.state;
      if (!yearRange)
        return;
      const [start, end] = yearRange;
      const yearsArray = new Array(end + 1 - start).fill(void 0).map((v, k) => {
        return { text: start + k };
      }).reverse();
      return yearsArray;
    }
  },
  __name: 'DatePickerYears'
};

export function DatePickerYears(props) {
  const ref_Box = useRef(null);
  const ref_Flex = useRef(null);
  function show_Box({ state }) {
    return state.yearRange;
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

  function props_filter(element) {
    const { yearRange } = element.state;
    if (!yearRange) return;
    const [start, end] = yearRange;
    const yearsArray = new Array(end + 1 - start)
      .fill(void 0)
      .map((v, k) => {
        return {
          text: start + k,
        };
      })
      .reverse();
    return yearsArray;
  }

  function setPropsCollection(parent2, childExtend, childrenOverrides) {
    if (!childrenOverrides || childrenOverrides.length === 0) return [];
    return childrenOverrides
      .map((value2) => ({
        props:
          value2 !== null && typeof value2 === "object"
            ? value2
            : {
                value: value2,
              },
      }))
      .map((ovr, idx) => ({
        key: idx.toString(),
        tag: childExtend.tag ?? "div",
        context: childExtend.context ?? parent2.context,
        state: childExtend.state,
        // NOTE: props skipped deliberately
        parent: parent2,
        ...ovr,
      }));
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

  function Box_onClick(event, element, state) {
    state.update(
      {
        activeYear: element.text,
      },
      {
        isHoisted: true,
      }
    );
    return;
  }

  function Box_onRender(el, state) {
    const { props } = el;
    const { isSelected } = props;
    if (!isSelected) return;
    window.requestAnimationFrame(() => {
      el.parent.parent.node.scrollTop = el.node.offsetTop - 100;
    });
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
  const dobj_Flex = dobj["Flex"]
  dobj_Flex.node = ref_Flex.current
  
  if (props.logElement)
    console.log(dobj)
  
  if (props.logElement)
    console.log(dobj)

  return (
    <>
      {show_Box(dobj) ? (
        <Box
          overflow="hidden"
          position="relative"
          tag="aside"
          ref={ref_Box}
          style={{
            button: {
              padding: "0",
            },
          }}
          {...dobj.props}
          domqlElementObject={dobj}
        >
          <Flex
            flow="column"
            gap="B"
            padding="A Z A1 B"
            maxHeight="100%"
            overflow="hidden auto"
            display="flex"
            ref={ref_Flex}
            className={`${css(flow(dobj_Flex))} ${css(wrap(dobj_Flex))} ${css(
              align(dobj_Flex)
            )}`}
            {...dobj_Flex.props}
            domqlElementObject={dobj_Flex}
          >
            {setPropsCollection(
              dobj_Flex,
              dobj["Flex"]["childExtend"],
              props_filter(dobj_Flex)
            )?.map((item) => (
              <Box
                fontSize="Y1"
                color="white"
                opacity=".4"
                background="transparent"
                transition="opacity .25s ease"
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
                style={{
                  appearance: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
                className={`${css(flow_2(dobj))} ${css(wrap_2(dobj))} ${css(
                  align_2(dobj)
                )}`}
                onClick={(ev) => Box_onClick(event, dobj, state)}
                {...dobj.props}
                type={attr_type(dobj)}
                placeholder={attr_placeholder(dobj)}
                tabIndex={attr_tabIndex(dobj)}
                domqlElementObject={dobj}
              >
                {show_Svg(item) ? (
                  <Svg
                    width="A"
                    height="A"
                    display="inline-block"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fill: "currentColor",
                      "*": {
                        fill: "currentColor",
                      },
                    }}
                    dangerouslySetInnerHTML={{ __html: html(item) }}
                    {...item.props}
                    domqlElementObject={item}
                  />
                ) : null}
              </Box>
            ))}
          </Flex>
        </Box>
      ) : null}
    </>
  );
}
