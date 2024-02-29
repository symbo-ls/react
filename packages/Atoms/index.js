import  * as React  from 'react';
import { useRef, useContext } from 'react';
import { Box, SymbolsProvider } from '@symbo.ls/react';
import { create } from '@symbo.ls/create';
import { deepMerge } from '@domql/utils';
import { css } from '@emotion/css';

export * from './Flex.js'
export * from './Grid.js'
export * from './Img.js'
export * from './Svg.js'
export * from './Text.js'
const orig = {
  deps: {
    isObject: (arg) => {
      if (arg === null)
        return false;
      return typeof arg === "object" && arg.constructor === Object;
    },
    getTimingByKey: (value, property = "timing") => {
      const CONFIG22 = getActiveConfig3();
      const { TIMING: TIMING2 } = CONFIG22;
      return getSequenceValuePropertyPair(
        value,
        property,
        TIMING2
      );
    },
    getTimingFunction: (value) => {
      const CONFIG22 = getActiveConfig3();
      const { TIMING: TIMING2 } = CONFIG22;
      return TIMING2[value] || TIMING2[toCamelCase(value)] || value;
    },
    applyAnimationProps: (animation, element) => {
  const { emotion: ctxEmotion } = element.context;
  const { keyframes } = ctxEmotion || emotion;
  if ((0, import_utils7.isObject)(animation))
    return { animationName: keyframes(animation) };
  const { ANIMATION } = element.context && element.context.designSystem;
  const record = ANIMATION[animation];
  return keyframes(record);
}
  },
  class: {
    animation: (el) => el.props.animation && {
      animationName: el.deps.applyAnimationProps(el.props.animation, el),
      animationDuration: el.deps.getTimingByKey(el.props.animationDuration || "A").timing,
      animationDelay: el.deps.getTimingByKey(el.props.animationDelay || "0s").timing,
      animationTimingFunction: el.deps.getTimingFunction(el.props.animationTimingFunction || "ease"),
      animationFillMode: el.props.animationFillMode || "both",
      animationPlayState: el.props.animationPlayState,
      animationDirection: el.props.animationDirection
    },
    animationName: (el) => el.props.animationName && {
      animationName: el.deps.applyAnimationProps(el.props.animationName, el)
    },
    animationDuration: ({ props, deps }) => props.animationDuration && {
      animationDuration: deps.getTimingByKey(props.animationDuration).timing
    },
    animationDelay: ({ props, deps }) => props.animationDelay && {
      animationDelay: deps.getTimingByKey(props.animationDelay).timing
    },
    animationTimingFunction: ({ props, deps }) => props.animationTimingFunction && {
      animationTimingFunction: deps.getTimingFunction(props.animationTimingFunction)
    },
    animationFillMode: ({ props }) => props.animationFillMode && {
      animationFillMode: props.animationFillMode
    },
    animationPlayState: ({ props }) => props.animationPlayState && {
      animationPlayState: props.animationPlayState
    },
    animationIterationCount: ({ props }) => props.animationIterationCount && {
      animationIterationCount: props.animationIterationCount || 1
    },
    animationDirection: ({ props }) => props.animationDirection && {
      animationDirection: props.animationDirection
    }
  },
  __name: 'Animation'
};
export function Animation(props) {
  const ref_Box = useRef(null);
  function animation(el) {
    el.props.animation && {
      animationName: el.deps.applyAnimationProps(el.props.animation, el),
      animationDuration: el.deps.getTimingByKey(
        el.props.animationDuration || "A"
      ).timing,
      animationDelay: el.deps.getTimingByKey(el.props.animationDelay || "0s")
        .timing,
      animationTimingFunction: el.deps.getTimingFunction(
        el.props.animationTimingFunction || "ease"
      ),
      animationFillMode: el.props.animationFillMode || "both",
      animationPlayState: el.props.animationPlayState,
      animationDirection: el.props.animationDirection,
    };
    return;
  }

  function animationName(el) {
    el.props.animationName && {
      animationName: el.deps.applyAnimationProps(el.props.animationName, el),
    };
    return;
  }

  function animationDuration({ props, deps }) {
    props.animationDuration && {
      animationDuration: deps.getTimingByKey(props.animationDuration).timing,
    };
    return;
  }

  function animationDelay({ props, deps }) {
    props.animationDelay && {
      animationDelay: deps.getTimingByKey(props.animationDelay).timing,
    };
    return;
  }

  function animationTimingFunction({ props, deps }) {
    props.animationTimingFunction && {
      animationTimingFunction: deps.getTimingFunction(
        props.animationTimingFunction
      ),
    };
    return;
  }

  function animationFillMode({ props }) {
    props.animationFillMode && {
      animationFillMode: props.animationFillMode,
    };
    return;
  }

  function animationPlayState({ props }) {
    props.animationPlayState && {
      animationPlayState: props.animationPlayState,
    };
    return;
  }

  function animationIterationCount({ props }) {
    props.animationIterationCount && {
      animationIterationCount: props.animationIterationCount || 1,
    };
    return;
  }

  function animationDirection({ props }) {
    props.animationDirection && {
      animationDirection: props.animationDirection,
    };
    return;
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      tag="div"
      ref={ref_Box}
      className={`${css(animation(dobj))} ${css(animationName(dobj))} ${css(
        animationDuration(dobj)
      )} ${css(animationDelay(dobj))} ${css(
        animationTimingFunction(dobj)
      )} ${css(animationFillMode(dobj))} ${css(animationPlayState(dobj))} ${css(
        animationIterationCount(dobj)
      )} ${css(animationDirection(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_2 = {
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
    },
    getSpacingByKey: (value, propertyName = "padding", sequenceProps) => {
      const sequence = getSequence(sequenceProps);
      const stack = arrayzeValue(value);
      if (!stack)
        return;
      if ((0, import_utils18.isString)(value) && value.includes("calc")) {
        return { [propertyName]: value };
      }
      if (stack.length > 1) {
        let suffix = "";
        if (propertyName === "borderWidth") {
          propertyName = "border";
          suffix = "Width";
        }
        const directions = {
          2: ["Block", "Inline"],
          3: ["BlockStart", "Inline", "BlockEnd"],
          4: ["BlockStart", "InlineEnd", "BlockEnd", "InlineStart"]
        };
        const wrapSequenceValueByDirection = (direction, i) => getSequenceValuePropertyPair(
          stack[i],
          propertyName + direction + suffix,
          sequence
        );
        return directions[stack.length].map((dir, key) => wrapSequenceValueByDirection(dir, key));
      }
      return getSequenceValuePropertyPair(
        value,
        propertyName,
        sequence
      );
    },
    transfromGap: (gap) => (0, import_utils27.isString)(gap) && gap.split(" ").map((v) => getSpacingByKey3(v, "gap").gap).join(" ")
  },
  class: {
    boxSizing: ({ props }) => props.boxSizing ? { boxSizing: props.boxSizing } : {
      boxSizing: "border-box"
    },
    display: ({ props }) => props.display && { display: props.display },
    hide: ({ props }) => props.hide && { display: "none !important" },
    width: ({ props, deps }) => props.width && deps.getSpacingBasedOnRatio(props, "width"),
    height: ({ props, deps }) => props.height && deps.getSpacingBasedOnRatio(props, "height"),
    boxSize: ({ props, deps }) => {
      if (typeof props.boxSize !== "string")
        return;
      const [height, width] = props.boxSize.split(" ");
      return {
        ...deps.getSpacingByKey(height, "height"),
        ...deps.getSpacingByKey(width || height, "width")
      };
    },
    maxWidth: ({ props, deps }) => props.maxWidth && deps.getSpacingBasedOnRatio(props, "maxWidth"),
    minWidth: ({ props, deps }) => props.minWidth && deps.getSpacingBasedOnRatio(props, "minWidth"),
    widthRange: ({ props, deps }) => {
      if (typeof props.widthRange !== "string")
        return;
      const [minWidth, maxWidth] = props.widthRange.split(" ");
      return {
        ...deps.getSpacingByKey(minWidth, "minWidth"),
        ...deps.getSpacingByKey(maxWidth || minWidth, "maxWidth")
      };
    },
    maxHeight: ({ props, deps }) => props.maxHeight && deps.getSpacingBasedOnRatio(props, "maxHeight"),
    minHeight: ({ props, deps }) => props.minHeight && deps.getSpacingBasedOnRatio(props, "minHeight"),
    heightRange: ({ props, deps }) => {
      if (typeof props.heightRange !== "string")
        return;
      const [minHeight, maxHeight] = props.heightRange.split(" ");
      return {
        ...deps.getSpacingByKey(minHeight, "minHeight"),
        ...deps.getSpacingByKey(maxHeight || minHeight, "maxHeight")
      };
    },
    direction: ({ props }) => props.direction && { direction: props.direction },
    aspectRatio: ({ props }) => props.aspectRatio && { aspectRatio: props.aspectRatio },
    borderWidth: ({ props, deps }) => props.borderWidth ? deps.getSpacingBasedOnRatio(props, "borderWidth") : null,
    padding: ({ props, deps }) => props.padding ? deps.getSpacingBasedOnRatio(props, "padding") : null,
    paddingInline: ({ props, deps }) => {
      if (typeof props.paddingInline !== "string")
        return;
      const [paddingInlineStart, paddingInlineEnd] = props.paddingInline.split(" ");
      return {
        ...deps.getSpacingByKey(paddingInlineStart, "paddingInlineStart"),
        ...deps.getSpacingByKey(paddingInlineEnd || paddingInlineStart, "paddingInlineEnd")
      };
    },
    paddingBlock: ({ props, deps }) => {
      if (typeof props.paddingBlock !== "string")
        return;
      const [paddingBlockStart, paddingBlockEnd] = props.paddingBlock.split(" ");
      return {
        ...deps.getSpacingByKey(paddingBlockStart, "paddingBlockStart"),
        ...deps.getSpacingByKey(paddingBlockEnd || paddingBlockStart, "paddingBlockEnd")
      };
    },
    paddingInlineStart: ({ props, deps }) => props.paddingInlineStart ? deps.getSpacingBasedOnRatio(props, "paddingInlineStart") : null,
    paddingInlineEnd: ({ props, deps }) => props.paddingInlineEnd ? deps.getSpacingBasedOnRatio(props, "paddingInlineEnd") : null,
    paddingBlockStart: ({ props, deps }) => props.paddingBlockStart ? deps.getSpacingBasedOnRatio(props, "paddingBlockStart") : null,
    paddingBlockEnd: ({ props, deps }) => props.paddingBlockEnd ? deps.getSpacingBasedOnRatio(props, "paddingBlockEnd") : null,
    margin: ({ props, deps }) => props.margin ? deps.getSpacingBasedOnRatio(props, "margin") : null,
    marginInline: ({ props, deps }) => {
      if (typeof props.marginInline !== "string")
        return;
      const [marginInlineStart, marginInlineEnd] = props.marginInline.split(" ");
      return {
        ...deps.getSpacingByKey(marginInlineStart, "marginInlineStart"),
        ...deps.getSpacingByKey(marginInlineEnd || marginInlineStart, "marginInlineEnd")
      };
    },
    marginBlock: ({ props, deps }) => {
      if (typeof props.marginBlock !== "string")
        return;
      const [marginBlockStart, marginBlockEnd] = props.marginBlock.split(" ");
      return {
        ...deps.getSpacingByKey(marginBlockStart, "marginBlockStart"),
        ...deps.getSpacingByKey(marginBlockEnd || marginBlockStart, "marginBlockEnd")
      };
    },
    marginInlineStart: ({ props, deps }) => props.marginInlineStart ? deps.getSpacingBasedOnRatio(props, "marginInlineStart") : null,
    marginInlineEnd: ({ props, deps }) => props.marginInlineEnd ? deps.getSpacingBasedOnRatio(props, "marginInlineEnd") : null,
    marginBlockStart: ({ props, deps }) => props.marginBlockStart ? deps.getSpacingBasedOnRatio(props, "marginBlockStart") : null,
    marginBlockEnd: ({ props, deps }) => props.marginBlockEnd ? deps.getSpacingBasedOnRatio(props, "marginBlockEnd") : null,
    gap: ({ props }) => props.gap ? {
      gap: (0, import_scratch.transfromGap)(props.gap)
    } : null,
    gridArea: ({ props, deps }) => props.gridArea && { gridArea: props.gridArea },
    flex: ({ props }) => props.flex && { flex: props.flex },
    flexDirection: ({ props }) => props.flexDirection && { flexDirection: props.flexDirection },
    alignItems: ({ props }) => props.alignItems && { alignItems: props.alignItems },
    alignContent: ({ props }) => props.alignContent && { alignContent: props.alignContent },
    justifyContent: ({ props }) => props.justifyContent && { justifyContent: props.justifyContent },
    justifyItems: ({ props }) => props.justifyItems && { justifyItems: props.justifyItems },
    alignSelf: ({ props }) => props.alignSelf && { alignSelf: props.alignSelf },
    order: ({ props }) => props.order && { order: props.order },
    flexWrap: ({ props }) => props.flexWrap && {
      display: "flex",
      flexFlow: props.flexWrap
    },
    flexFlow: ({ props }) => props.flexFlow && {
      display: "flex",
      flexFlow: props.flexFlow
    },
    flexAlign: ({ props }) => {
      if (typeof props.flexAlign !== "string")
        return;
      const [alignItems, justifyContent] = props.flexAlign.split(" ");
      return {
        display: "flex",
        alignItems,
        justifyContent
      };
    },
    gridColumn: ({ props }) => props.gridColumn && { gridColumn: props.gridColumn },
    gridColumnStart: ({ props }) => props.gridColumnStart ? {
      gridColumnStart: props.gridColumnStart
    } : null,
    gridRow: ({ props }) => props.gridRow && { gridRow: props.gridRow },
    gridRowStart: ({ props }) => props.gridRowStart ? { gridRowStart: props.gridRowStart } : null,
    size: ({ props, deps }) => {
      if (typeof props.heightRange !== "string")
        return;
      const [minHeight, maxHeight] = props.heightRange.split(" ");
      return {
        ...deps.getSpacingByKey(minHeight, "minHeight"),
        ...deps.getSpacingByKey(maxHeight || minHeight, "maxHeight")
      };
    },
    columns: ({ props }) => props.columns && { columns: props.columns },
    columnRule: ({ props }) => props.columnRule && { columnRule: props.columnRule },
    columnWidth: ({ props }) => props.columnWidth && { columnWidth: props.columnWidth },
    columnGap: ({ props, deps }) => props.columnGap ? deps.getSpacingBasedOnRatio(props, "columnGap") : null,
    columnSpan: ({ props }) => props.columnSpan && { columnSpan: props.columnSpan },
    columnFill: ({ props }) => props.columnFill && { columnFill: props.columnFill },
    columnCount: ({ props }) => props.columnCount && { columnCount: props.columnCount }
  },
  __name: 'Block'
};
export function Block(props) {
  const ref_Box = useRef(null);
  function boxSizing({ props }) {
    props.boxSizing
      ? {
          boxSizing: props.boxSizing,
        }
      : {
          boxSizing: "border-box",
        };
    return;
  }

  function display({ props }) {
    return (
      props.display && {
        display: props.display,
      }
    );
  }

  function hide({ props }) {
    return (
      props.hide && {
        display: "none !important",
      }
    );
  }

  function width({ props, deps }) {
    return props.width && deps.getSpacingBasedOnRatio(props, "width");
  }

  function height({ props, deps }) {
    return props.height && deps.getSpacingBasedOnRatio(props, "height");
  }

  function boxSize({ props, deps }) {
    if (typeof props.boxSize !== "string") return;
    const [height, width] = props.boxSize.split(" ");
    return {
      ...deps.getSpacingByKey(height, "height"),
      ...deps.getSpacingByKey(width || height, "width"),
    };
  }

  function maxWidth({ props, deps }) {
    return props.maxWidth && deps.getSpacingBasedOnRatio(props, "maxWidth");
  }

  function minWidth({ props, deps }) {
    return props.minWidth && deps.getSpacingBasedOnRatio(props, "minWidth");
  }

  function widthRange({ props, deps }) {
    if (typeof props.widthRange !== "string") return;
    const [minWidth, maxWidth] = props.widthRange.split(" ");
    return {
      ...deps.getSpacingByKey(minWidth, "minWidth"),
      ...deps.getSpacingByKey(maxWidth || minWidth, "maxWidth"),
    };
  }

  function maxHeight({ props, deps }) {
    return props.maxHeight && deps.getSpacingBasedOnRatio(props, "maxHeight");
  }

  function minHeight({ props, deps }) {
    return props.minHeight && deps.getSpacingBasedOnRatio(props, "minHeight");
  }

  function heightRange({ props, deps }) {
    if (typeof props.heightRange !== "string") return;
    const [minHeight, maxHeight] = props.heightRange.split(" ");
    return {
      ...deps.getSpacingByKey(minHeight, "minHeight"),
      ...deps.getSpacingByKey(maxHeight || minHeight, "maxHeight"),
    };
  }

  function direction({ props }) {
    return (
      props.direction && {
        direction: props.direction,
      }
    );
  }

  function aspectRatio({ props }) {
    return (
      props.aspectRatio && {
        aspectRatio: props.aspectRatio,
      }
    );
  }

  function borderWidth({ props, deps }) {
    return props.borderWidth
      ? deps.getSpacingBasedOnRatio(props, "borderWidth")
      : null;
  }

  function padding({ props, deps }) {
    return props.padding ? deps.getSpacingBasedOnRatio(props, "padding") : null;
  }

  function paddingInline({ props, deps }) {
    if (typeof props.paddingInline !== "string") return;
    const [paddingInlineStart, paddingInlineEnd] =
      props.paddingInline.split(" ");
    return {
      ...deps.getSpacingByKey(paddingInlineStart, "paddingInlineStart"),
      ...deps.getSpacingByKey(
        paddingInlineEnd || paddingInlineStart,
        "paddingInlineEnd"
      ),
    };
  }

  function paddingBlock({ props, deps }) {
    if (typeof props.paddingBlock !== "string") return;
    const [paddingBlockStart, paddingBlockEnd] = props.paddingBlock.split(" ");
    return {
      ...deps.getSpacingByKey(paddingBlockStart, "paddingBlockStart"),
      ...deps.getSpacingByKey(
        paddingBlockEnd || paddingBlockStart,
        "paddingBlockEnd"
      ),
    };
  }

  function paddingInlineStart({ props, deps }) {
    return props.paddingInlineStart
      ? deps.getSpacingBasedOnRatio(props, "paddingInlineStart")
      : null;
  }

  function paddingInlineEnd({ props, deps }) {
    return props.paddingInlineEnd
      ? deps.getSpacingBasedOnRatio(props, "paddingInlineEnd")
      : null;
  }

  function paddingBlockStart({ props, deps }) {
    return props.paddingBlockStart
      ? deps.getSpacingBasedOnRatio(props, "paddingBlockStart")
      : null;
  }

  function paddingBlockEnd({ props, deps }) {
    return props.paddingBlockEnd
      ? deps.getSpacingBasedOnRatio(props, "paddingBlockEnd")
      : null;
  }

  function margin({ props, deps }) {
    return props.margin ? deps.getSpacingBasedOnRatio(props, "margin") : null;
  }

  function marginInline({ props, deps }) {
    if (typeof props.marginInline !== "string") return;
    const [marginInlineStart, marginInlineEnd] = props.marginInline.split(" ");
    return {
      ...deps.getSpacingByKey(marginInlineStart, "marginInlineStart"),
      ...deps.getSpacingByKey(
        marginInlineEnd || marginInlineStart,
        "marginInlineEnd"
      ),
    };
  }

  function marginBlock({ props, deps }) {
    if (typeof props.marginBlock !== "string") return;
    const [marginBlockStart, marginBlockEnd] = props.marginBlock.split(" ");
    return {
      ...deps.getSpacingByKey(marginBlockStart, "marginBlockStart"),
      ...deps.getSpacingByKey(
        marginBlockEnd || marginBlockStart,
        "marginBlockEnd"
      ),
    };
  }

  function marginInlineStart({ props, deps }) {
    return props.marginInlineStart
      ? deps.getSpacingBasedOnRatio(props, "marginInlineStart")
      : null;
  }

  function marginInlineEnd({ props, deps }) {
    return props.marginInlineEnd
      ? deps.getSpacingBasedOnRatio(props, "marginInlineEnd")
      : null;
  }

  function marginBlockStart({ props, deps }) {
    return props.marginBlockStart
      ? deps.getSpacingBasedOnRatio(props, "marginBlockStart")
      : null;
  }

  function marginBlockEnd({ props, deps }) {
    return props.marginBlockEnd
      ? deps.getSpacingBasedOnRatio(props, "marginBlockEnd")
      : null;
  }

  function gap({ props }) {
    props.gap
      ? {
          gap: (0, import_scratch.transfromGap)(props.gap),
        }
      : null;
    return;
  }

  function gridArea({ props, deps }) {
    return (
      props.gridArea && {
        gridArea: props.gridArea,
      }
    );
  }

  function flex({ props }) {
    return (
      props.flex && {
        flex: props.flex,
      }
    );
  }

  function flexDirection({ props }) {
    return (
      props.flexDirection && {
        flexDirection: props.flexDirection,
      }
    );
  }

  function alignItems({ props }) {
    return (
      props.alignItems && {
        alignItems: props.alignItems,
      }
    );
  }

  function alignContent({ props }) {
    return (
      props.alignContent && {
        alignContent: props.alignContent,
      }
    );
  }

  function justifyContent({ props }) {
    return (
      props.justifyContent && {
        justifyContent: props.justifyContent,
      }
    );
  }

  function justifyItems({ props }) {
    return (
      props.justifyItems && {
        justifyItems: props.justifyItems,
      }
    );
  }

  function alignSelf({ props }) {
    return (
      props.alignSelf && {
        alignSelf: props.alignSelf,
      }
    );
  }

  function order({ props }) {
    return (
      props.order && {
        order: props.order,
      }
    );
  }

  function flexWrap({ props }) {
    props.flexWrap && {
      display: "flex",
      flexFlow: props.flexWrap,
    };
    return;
  }

  function flexFlow({ props }) {
    props.flexFlow && {
      display: "flex",
      flexFlow: props.flexFlow,
    };
    return;
  }

  function flexAlign({ props }) {
    if (typeof props.flexAlign !== "string") return;
    const [alignItems, justifyContent] = props.flexAlign.split(" ");
    return {
      display: "flex",
      alignItems,
      justifyContent,
    };
  }

  function gridColumn({ props }) {
    return (
      props.gridColumn && {
        gridColumn: props.gridColumn,
      }
    );
  }

  function gridColumnStart({ props }) {
    props.gridColumnStart
      ? {
          gridColumnStart: props.gridColumnStart,
        }
      : null;
    return;
  }

  function gridRow({ props }) {
    return (
      props.gridRow && {
        gridRow: props.gridRow,
      }
    );
  }

  function gridRowStart({ props }) {
    return props.gridRowStart
      ? {
          gridRowStart: props.gridRowStart,
        }
      : null;
  }

  function size({ props, deps }) {
    if (typeof props.heightRange !== "string") return;
    const [minHeight, maxHeight] = props.heightRange.split(" ");
    return {
      ...deps.getSpacingByKey(minHeight, "minHeight"),
      ...deps.getSpacingByKey(maxHeight || minHeight, "maxHeight"),
    };
  }

  function columns({ props }) {
    return (
      props.columns && {
        columns: props.columns,
      }
    );
  }

  function columnRule({ props }) {
    return (
      props.columnRule && {
        columnRule: props.columnRule,
      }
    );
  }

  function columnWidth({ props }) {
    return (
      props.columnWidth && {
        columnWidth: props.columnWidth,
      }
    );
  }

  function columnGap({ props, deps }) {
    return props.columnGap
      ? deps.getSpacingBasedOnRatio(props, "columnGap")
      : null;
  }

  function columnSpan({ props }) {
    return (
      props.columnSpan && {
        columnSpan: props.columnSpan,
      }
    );
  }

  function columnFill({ props }) {
    return (
      props.columnFill && {
        columnFill: props.columnFill,
      }
    );
  }

  function columnCount({ props }) {
    return (
      props.columnCount && {
        columnCount: props.columnCount,
      }
    );
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      tag="div"
      ref={ref_Box}
      className={`${css(boxSizing(dobj))} ${css(display(dobj))} ${css(
        hide(dobj)
      )} ${css(width(dobj))} ${css(height(dobj))} ${css(boxSize(dobj))} ${css(
        maxWidth(dobj)
      )} ${css(minWidth(dobj))} ${css(widthRange(dobj))} ${css(
        maxHeight(dobj)
      )} ${css(minHeight(dobj))} ${css(heightRange(dobj))} ${css(
        direction(dobj)
      )} ${css(aspectRatio(dobj))} ${css(borderWidth(dobj))} ${css(
        padding(dobj)
      )} ${css(paddingInline(dobj))} ${css(paddingBlock(dobj))} ${css(
        paddingInlineStart(dobj)
      )} ${css(paddingInlineEnd(dobj))} ${css(paddingBlockStart(dobj))} ${css(
        paddingBlockEnd(dobj)
      )} ${css(margin(dobj))} ${css(marginInline(dobj))} ${css(
        marginBlock(dobj)
      )} ${css(marginInlineStart(dobj))} ${css(marginInlineEnd(dobj))} ${css(
        marginBlockStart(dobj)
      )} ${css(marginBlockEnd(dobj))} ${css(gap(dobj))} ${css(
        gridArea(dobj)
      )} ${css(flex(dobj))} ${css(flexDirection(dobj))} ${css(
        alignItems(dobj)
      )} ${css(alignContent(dobj))} ${css(justifyContent(dobj))} ${css(
        justifyItems(dobj)
      )} ${css(alignSelf(dobj))} ${css(order(dobj))} ${css(
        flexWrap(dobj)
      )} ${css(flexFlow(dobj))} ${css(flexAlign(dobj))} ${css(
        gridColumn(dobj)
      )} ${css(gridColumnStart(dobj))} ${css(gridRow(dobj))} ${css(
        gridRowStart(dobj)
      )} ${css(size(dobj))} ${css(columns(dobj))} ${css(
        columnRule(dobj)
      )} ${css(columnWidth(dobj))} ${css(columnGap(dobj))} ${css(
        columnSpan(dobj)
      )} ${css(columnFill(dobj))} ${css(columnCount(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_3 = {
  tag: 'br',
  __name: 'Br'
};
export function Br(props) {
  const ref_Box = useRef(null);

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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box tag="br" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_4 = {
  tag: 'caption',
  __name: 'Caption'
};
export function Caption(props) {
  const ref_Box = useRef(null);

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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      tag="caption"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_5 = {
  extend: {
    props: {
      transition: 'C defaultBezier',
      transitionProperty: 'opacity, transform',
      opacity: 0.85,
      ':hover': {
        opacity: 0.9,
        transform: 'scale(1.015)'
      },
      ':active': {
        opacity: 1,
        transform: 'scale(1.015)'
      },
      '.active': {
        opacity: 1,
        transform: 'scale(1.015)',
        ':hover': {opacity: 1}
      }
    }
  },
  props: {
    ':active': {
      opacity: 1,
      transform: 'scale(1.015)'
    },
    '.active': {opacity: 1}
  },
  __name: 'Clickable'
};
export function Clickable(props) {
  const ref_Box = useRef(null);

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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      transition="C defaultBezier"
      transitionProperty="opacity, transform"
      tag="div"
      ref={ref_Box}
      opacity={0.85}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_6 = {
  define: {
    $setCollection: (param, el, state) => {
      if (!param)
        return;
      if ((0, import_utils3.isString)(param)) {
        if (param === "state")
          param = state.parse();
        else
          param = (0, import_state.getChildStateInKey)(param, state);
      }
      const data = ((0, import_utils3.isArray)(param) ? param : (0, import_utils3.isObject)(param) ? Object.values(param) : []).map((item) => !(0, import_utils3.isObjectLike)(item) ? { props: { value: item } } : item);
      if (data.length) {
        const t = setTimeout(() => {
          el.set({ tag: "fragment", ...data }, { preventDefineUpdate: "$setCollection" });
          clearTimeout(t);
        });
      }
      return data;
    },
    $setStateCollection: (param, el, state) => {
      if (!param)
        return;
      if ((0, import_utils3.isString)(param)) {
        if (param === "state")
          param = state.parse();
        else
          param = (0, import_state.getChildStateInKey)(param, state);
      }
      if ((0, import_state.isState)(param))
        param = param.parse();
      if ((0, import_utils3.isNot)(param)("array", "object"))
        return;
      const { __ref: ref } = el;
      if (ref.__stateCollectionCache) {
        const d = (0, import_utils3.deepDiff)(param, ref.__stateCollectionCache);
        if (Object.keys(d).length) {
          ref.__stateCollectionCache = (0, import_utils3.deepClone)(param);
          delete ref.__noCollectionDifference;
        } else {
          ref.__noCollectionDifference = true;
          return;
        }
      } else {
        ref.__stateCollectionCache = (0, import_utils3.deepClone)(param);
      }
      const obj = {
        tag: "fragment",
        props: {
          childProps: el.props && el.props.childProps
        }
      };
      for (const key in param) {
        const value = param[key];
        obj[key] = { state: (0, import_utils3.isObjectLike)(value) ? value : { value } };
      }
      el.removeContent();
      el.content = obj;
      return obj;
    },
    $setPropsCollection: (param, el, state) => {
      if (!param)
        return;
      if ((0, import_utils3.isString)(param)) {
        if (param === "state")
          param = state.parse();
        else
          param = (0, import_state.getChildStateInKey)(param, state);
      }
      if ((0, import_state.isState)(param))
        param = param.parse();
      if ((0, import_utils3.isNot)(param)("array", "object"))
        return;
      const { __ref: ref } = el;
      if (ref.__propsCollectionCache) {
        const d = (0, import_utils3.deepDiff)(param, ref.__propsCollectionCache);
        if (Object.keys(d).length) {
          ref.__propsCollectionCache = (0, import_utils3.deepClone)(param);
          delete ref.__noCollectionDifference;
        } else {
          ref.__noCollectionDifference = true;
          return;
        }
      } else {
        ref.__propsCollectionCache = (0, import_utils3.deepClone)(param);
      }
      const obj = {
        tag: "fragment",
        props: {
          childProps: el.props && el.props.childProps
        }
      };
      for (const key in param) {
        const value = param[key];
        obj[key] = { props: (0, import_utils3.isObjectLike)(value) ? value : { value } };
      }
      el.removeContent();
      el.content = obj;
      return obj;
    }
  },
  __name: 'Collection'
};
export function Collection(props) {
  const ref_Box = useRef(null);

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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box tag="div" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_7 = {
  props: {direction: 'ltr'},
  class: {
    direction: ({ props }) => ({ direction: props.direction })
  },
  __name: 'Direction'
};
export function Direction(props) {
  const ref_Box = useRef(null);
  function direction({ props }) {
    return {
      direction: props.direction,
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      direction="ltr"
      tag="div"
      ref={ref_Box}
      className={`${css(direction(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_8 = {
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
  },
  __name: 'Flex'
};
export function Flex(props) {
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_9 = {
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
  },
  __name: 'Focusable'
};
export function Focusable(props) {
  const ref_Box = useRef(null);
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      border="none"
      outline="solid, 0, blue .3"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    />
  );
}
const orig_10 = {
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
    },
    __name: 'Focusable'
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
  },
  __name: 'FocusableComponent'
};
export function FocusableComponent(props) {
  const ref_Box = useRef(null);
  function attr_type({ props }) {
    return props.type;
  }

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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      fontSize="A"
      type="button"
      border="none"
      textDecoration="none"
      lineHeight="1"
      whiteSpace="nowrap"
      fontFamily="inherit"
      outline="solid, 0, blue .3"
      tag="button"
      ref={ref_Box}
      style={{
        appearance: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
      }}
      {...dobj.props}
      type={attr_type(dobj)}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    />
  );
}
const orig_11 = {
  tag: 'span',
  props: {fontSize: 'Z'},
  __name: 'Footnote'
};
export function Footnote(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_11),
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
      fontSize="Z"
      tag="span"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_12 = {
  tag: 'form',
  attr: {
    action: ({ props }) => props.action,
    method: ({ props }) => props.method,
    enctype: ({ props }) => props.enctype
  },
  __name: 'Form'
};
export function Form(props) {
  const ref_Box = useRef(null);
  function attr_action({ props }) {
    return props.action;
  }

  function attr_method({ props }) {
    return props.method;
  }

  function attr_enctype({ props }) {
    return props.enctype;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_12),
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
      tag="form"
      ref={ref_Box}
      {...dobj.props}
      action={attr_action(dobj)}
      method={attr_method(dobj)}
      enctype={attr_enctype(dobj)}
      domqlElementObject={dobj}
    />
  );
}
const orig_13 = {
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
  },
  __name: 'Grid'
};
export function Grid(props) {
  const ref_Box = useRef(null);
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

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_13),
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
      display="grid"
      tag="div"
      ref={ref_Box}
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
    />
  );
}
const orig_14 = {
  deps: {
    getSpacingByKey: (value, propertyName = "padding", sequenceProps) => {
      const sequence = getSequence(sequenceProps);
      const stack = arrayzeValue(value);
      if (!stack)
        return;
      if ((0, import_utils18.isString)(value) && value.includes("calc")) {
        return { [propertyName]: value };
      }
      if (stack.length > 1) {
        let suffix = "";
        if (propertyName === "borderWidth") {
          propertyName = "border";
          suffix = "Width";
        }
        const directions = {
          2: ["Block", "Inline"],
          3: ["BlockStart", "Inline", "BlockEnd"],
          4: ["BlockStart", "InlineEnd", "BlockEnd", "InlineStart"]
        };
        const wrapSequenceValueByDirection = (direction, i) => getSequenceValuePropertyPair(
          stack[i],
          propertyName + direction + suffix,
          sequence
        );
        return directions[stack.length].map((dir, key) => wrapSequenceValueByDirection(dir, key));
      }
      return getSequenceValuePropertyPair(
        value,
        propertyName,
        sequence
      );
    }
  },
  props: {size: 'C1'},
  class: {
    size: ({ props, deps }) => {
      if (typeof props.size !== "string")
        return;
      const [height, width] = props.size.split(" ");
      return {
        ...deps.getSpacingByKey(height, "height"),
        ...deps.getSpacingByKey(width || height, "width")
      };
    }
  },
  __name: 'Gutter'
};
export function Gutter(props) {
  const ref_Box = useRef(null);
  function size({ props, deps }) {
    if (typeof props.size !== "string") return;
    const [height, width] = props.size.split(" ");
    return {
      ...deps.getSpacingByKey(height, "height"),
      ...deps.getSpacingByKey(width || height, "width"),
    };
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_14),
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
      size="C1"
      tag="div"
      ref={ref_Box}
      className={`${css(size(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_15 = {
  tag: 'h1',
  __name: 'H1'
};
export function H1(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_15),
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
    <Box tag="h1" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_16 = {
  tag: 'h2',
  __name: 'H2'
};
export function H2(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_16),
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
    <Box tag="h2" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_17 = {
  tag: 'h3',
  __name: 'H3'
};
export function H3(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_17),
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
    <Box tag="h3" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_18 = {
  tag: 'h4',
  __name: 'H4'
};
export function H4(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_18),
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
    <Box tag="h4" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_19 = {
  tag: 'h5',
  __name: 'H5'
};
export function H5(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_19),
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
    <Box tag="h5" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_20 = {
  tag: 'h6',
  __name: 'H6'
};
export function H6(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_20),
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
    <Box tag="h6" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_21 = {
  tag: 'h6',
  props: {
    fontSize: 'B',
    fontWeight: 500
  },
  __name: 'Headline'
};
export function Headline(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_21),
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
      fontSize="B"
      tag="h6"
      ref={ref_Box}
      fontWeight={500}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_22 = {
  props: {
    transition: 'C defaultBezier',
    transitionProperty: 'opacity, transform',
    opacity: 0.85,
    ':hover': {
      opacity: 0.9,
      transform: 'scale(1.015)'
    },
    ':active': {
      opacity: 1,
      transform: 'scale(1.015)'
    },
    '.active': {
      opacity: 1,
      transform: 'scale(1.015)',
      ':hover': {opacity: 1}
    }
  },
  __name: 'Hoverable'
};
export function Hoverable(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_22),
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
      transition="C defaultBezier"
      transitionProperty="opacity, transform"
      tag="div"
      ref={ref_Box}
      opacity={0.85}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_23 = {
  tag: 'hr',
  props: {margin: 'C1 0'},
  __name: 'Hr'
};
export function Hr(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_23),
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
      margin="C1 0"
      tag="hr"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_24 = {
  tag: 'iframe',
  props: {
    position: 'relative',
    minWidth: 'H',
    minHeight: 'H'
  },
  attr: {
    src: ({ props }) => props.src,
    loading: ({ props }) => props.loading,
    allowfullscreen: ({ props }) => props.allowfullscreen,
    frameborder: ({ props }) => props.frameborder,
    allow: ({ props }) => props.allow,
    referrerpolicy: ({ props }) => props.referrerpolicy
  },
  __name: 'Iframe'
};
export function Iframe(props) {
  const ref_Box = useRef(null);
  function attr_src({ props }) {
    return props.src;
  }

  function attr_loading({ props }) {
    return props.loading;
  }

  function attr_allowfullscreen({ props }) {
    return props.allowfullscreen;
  }

  function attr_frameborder({ props }) {
    return props.frameborder;
  }

  function attr_allow({ props }) {
    return props.allow;
  }

  function attr_referrerpolicy({ props }) {
    return props.referrerpolicy;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_24),
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
      position="relative"
      minWidth="H"
      minHeight="H"
      tag="iframe"
      ref={ref_Box}
      {...dobj.props}
      src={attr_src(dobj)}
      loading={attr_loading(dobj)}
      allowfullscreen={attr_allowfullscreen(dobj)}
      frameborder={attr_frameborder(dobj)}
      allow={attr_allow(dobj)}
      referrerpolicy={attr_referrerpolicy(dobj)}
      domqlElementObject={dobj}
    />
  );
}
const orig_25 = {
  class: {
    userSelect: ({ props }) => props.userSelect && { userSelect: props.userSelect },
    pointerEvents: ({ props }) => props.pointerEvents && { pointerEvents: props.pointerEvents },
    cursor: ({ props }) => props.cursor && { cursor: props.cursor }
  },
  __name: 'Interaction'
};
export function Interaction(props) {
  const ref_Box = useRef(null);
  function userSelect({ props }) {
    return (
      props.userSelect && {
        userSelect: props.userSelect,
      }
    );
  }

  function pointerEvents({ props }) {
    return (
      props.pointerEvents && {
        pointerEvents: props.pointerEvents,
      }
    );
  }

  function cursor({ props }) {
    return (
      props.cursor && {
        cursor: props.cursor,
      }
    );
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_25),
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
      tag="div"
      ref={ref_Box}
      className={`${css(userSelect(dobj))} ${css(pointerEvents(dobj))} ${css(
        cursor(dobj)
      )}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_26 = {
  tag: 'i',
  __name: 'Italic'
};
export function Italic(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_26),
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
    <Box tag="i" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_27 = {
  class: {
    case: (el, s) => {
      return {
        //
      };
    }
  },
  on: {
    beforeClassAssign: (element, s) => {
  const { props, class: className, context } = element;
  const CLASS_NAMES = {
    media: {},
    selector: {},
    case: {},
    variable: {}
  };
  if (!context)
    return;
  const globalTheme = context.designSystem.globalTheme;
  for (const key in props) {
    const setter = keySetters[key.slice(0, 1)];
    if (globalTheme) {
      if (key === "theme") {
        props.update({
          themeModifier: globalTheme
        }, {
          preventRecursive: true,
          isForced: true,
          preventDefineUpdate: true
        });
      } else if (key === "true")
        applyTrueProps(props[key], CLASS_NAMES, element);
    }
    if (setter)
      setter(key, props[key], CLASS_NAMES, element);
  }
  const parentProps = element.parent && element.parent.props;
  if (parentProps && parentProps.spacingRatio && parentProps.inheritSpacingRatio) {
    element.setProps({
      spacingRatio: parentProps.spacingRatio,
      inheritSpacingRatio: true
    }, {
      preventRecursive: true,
      isForced: true,
      preventDefineUpdate: true
    });
  }
  (0, import_utils2.overwriteShallow)(className, CLASS_NAMES);
}
  },
  __name: 'Media'
};
export function Media(props) {
  const ref_Box = useRef(null);
  function fn_case(el, s) {
    return {
      //
    };
  }

  function Media_onBeforeClassAssign(element, s) {
    const { props, class: className, context } = element;
    const CLASS_NAMES = {
      media: {},
      selector: {},
      case: {},
      variable: {},
    };
    if (!context) return;
    const globalTheme = context.designSystem.globalTheme;
    for (const key in props) {
      const setter = keySetters[key.slice(0, 1)];
      if (globalTheme) {
        if (key === "theme") {
          props.update(
            {
              themeModifier: globalTheme,
            },
            {
              preventRecursive: true,
              isForced: true,
              preventDefineUpdate: true,
            }
          );
        } else if (key === "true")
          applyTrueProps(props[key], CLASS_NAMES, element);
      }
      if (setter) setter(key, props[key], CLASS_NAMES, element);
    }
    const parentProps = element.parent && element.parent.props;
    if (
      parentProps &&
      parentProps.spacingRatio &&
      parentProps.inheritSpacingRatio
    ) {
      element.setProps(
        {
          spacingRatio: parentProps.spacingRatio,
          inheritSpacingRatio: true,
        },
        {
          preventRecursive: true,
          isForced: true,
          preventDefineUpdate: true,
        }
      );
    }
    (0, import_utils2.overwriteShallow)(className, CLASS_NAMES);
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_27),
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
      tag="div"
      ref={ref_Box}
      className={`${css(fn_case(dobj, s))}`}
      onBeforeClassAssign={(ev) => Media_onBeforeClassAssign(dobj, s)}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_28 = {
  class: {
    overflow: ({ props }) => props.overflow && { overflow: props.overflow }
  },
  __name: 'Overflow'
};
export function Overflow(props) {
  const ref_Box = useRef(null);
  function overflow({ props }) {
    return (
      props.overflow && {
        overflow: props.overflow,
      }
    );
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_28),
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
      tag="div"
      ref={ref_Box}
      className={`${css(overflow(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_29 = {tag: 'p', __name: 'P'};
export function P(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_29),
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
    <Box tag="p" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_30 = {
  deps: {
    getSystemTheme: ({ context, state }) => {
  const rootState = state && state.__root;
  return rootState && rootState.globalTheme ? rootState.globalTheme : context.designSystem && context.designSystem.globalTheme;
}
  },
  tag: 'picture',
  childExtend: {
    tag: 'source',
    attr: {
      media: (element) => {
        const { props, key, context, deps } = element;
        const { MEDIA } = context.designSystem;
        const globalTheme = deps.getSystemTheme(element);
        const mediaName = (props.media || key).slice(1);
        if (mediaName === globalTheme)
          return "(min-width: 0px)";
        else if (mediaName === "dark" || mediaName === "light")
          return "(max-width: 0px)";
        return MEDIA[mediaName];
      },
      srcset: ({ props }) => props.srcset
    }
  },
  Img: ({ props }) => ({
    width: "inherit",
    height: "inherit",
    src: props.src
  }),
  __name: 'Picture'
};
export function Picture(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  function attr_src({ props: props4 }) {
    return props4.src;
  }

  function attr_alt({ props: props4 }) {
    return props4.alt;
  }

  function attr_title({ props: props4 }) {
    return props4.title || props4.alt;
  }

  function attr_media(element) {
    const { props, key, context, deps } = element;
    const { MEDIA } = context.designSystem;
    const globalTheme = deps.getSystemTheme(element);
    const mediaName = (props.media || key).slice(1);
    if (mediaName === globalTheme) return "(min-width: 0px)";
    else if (mediaName === "dark" || mediaName === "light")
      return "(max-width: 0px)";
    return MEDIA[mediaName];
  }

  function attr_srcset({ props }) {
    return props.srcset;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_30),
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
  const dobj_Box = dobj["Img"]
  dobj_Box.node = ref_Box_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box tag="picture" ref={ref_Box} {...dobj.props} domqlElementObject={dobj}>
      <Box
        width="inherit"
        height="inherit"
        tag="img"
        ref={ref_Box_2}
        {...dobj_Box.props}
        src={attr_src(dobj_Box)}
        alt={attr_alt(dobj_Box)}
        title={attr_title(dobj_Box)}
        media={attr_media(dobj_Box)}
        srcset={attr_srcset(dobj_Box)}
        domqlElementObject={dobj_Box}
      />
    </Box>
  );
}
const orig_31 = {
  deps: {
    getSpacingByKey: (value, propertyName = "padding", sequenceProps) => {
      const sequence = getSequence(sequenceProps);
      const stack = arrayzeValue(value);
      if (!stack)
        return;
      if ((0, import_utils18.isString)(value) && value.includes("calc")) {
        return { [propertyName]: value };
      }
      if (stack.length > 1) {
        let suffix = "";
        if (propertyName === "borderWidth") {
          propertyName = "border";
          suffix = "Width";
        }
        const directions = {
          2: ["Block", "Inline"],
          3: ["BlockStart", "Inline", "BlockEnd"],
          4: ["BlockStart", "InlineEnd", "BlockEnd", "InlineStart"]
        };
        const wrapSequenceValueByDirection = (direction, i) => getSequenceValuePropertyPair(
          stack[i],
          propertyName + direction + suffix,
          sequence
        );
        return directions[stack.length].map((dir, key) => wrapSequenceValueByDirection(dir, key));
      }
      return getSequenceValuePropertyPair(
        value,
        propertyName,
        sequence
      );
    }
  },
  class: {
    position: ({ props }) => props.position && { position: props.position },
    inset: ({ props, deps }) => {
      const { inset } = props;
      if (typeof inset !== "string")
        return;
      return { inset: inset.split(" ").map((v) => deps.getSpacingByKey(v, "k").k).join(" ") };
    },
    left: ({ props, deps }) => deps.getSpacingByKey(props.left, "left"),
    top: ({ props, deps }) => deps.getSpacingByKey(props.top, "top"),
    right: ({ props, deps }) => deps.getSpacingByKey(props.right, "right"),
    bottom: ({ props, deps }) => deps.getSpacingByKey(props.bottom, "bottom")
  },
  __name: 'Position'
};
export function Position(props) {
  const ref_Box = useRef(null);
  function position({ props }) {
    return (
      props.position && {
        position: props.position,
      }
    );
  }

  function inset({ props, deps }) {
    const { inset } = props;
    if (typeof inset !== "string") return;
    return {
      inset: inset
        .split(" ")
        .map((v) => deps.getSpacingByKey(v, "k").k)
        .join(" "),
    };
  }

  function left({ props, deps }) {
    return deps.getSpacingByKey(props.left, "left");
  }

  function top({ props, deps }) {
    return deps.getSpacingByKey(props.top, "top");
  }

  function right({ props, deps }) {
    return deps.getSpacingByKey(props.right, "right");
  }

  function bottom({ props, deps }) {
    return deps.getSpacingByKey(props.bottom, "bottom");
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_31),
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
      tag="div"
      ref={ref_Box}
      className={`${css(position(dobj))} ${css(inset(dobj))} ${css(
        left(dobj)
      )} ${css(top(dobj))} ${css(right(dobj))} ${css(bottom(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_32 = {
  class: {
    content: ({ props }) => props.content && { content: props.content }
  },
  __name: 'Pseudo'
};
export function Pseudo(props) {
  const ref_Box = useRef(null);
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
    ...create({
      ...deepMerge(cleanProps, orig_32),
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
      tag="div"
      ref={ref_Box}
      className={`${css(content(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_33 = {
  extend: {
    class: {
      content: ({ props }) => props.content && { content: props.content }
    },
    __name: 'Pseudo'
  },
  deps: {
    exec: (param, element, state, context) => {
      if ((0, import_types.isFunction)(param)) {
        return param(
          element,
          state || element.state,
          context || element.context
        );
      }
      return param;
    },
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
    },
    getMediaColor: (value, globalTheme, config) => {
      const CONFIG22 = config || getActiveConfig3();
      if (!globalTheme)
        globalTheme = CONFIG22.globalTheme;
      if (!(0, import_utils9.isString)(value)) {
        if (CONFIG22.verbose)
          console.warn(value, "- type for color is not valid");
        return;
      }
      if (value.slice(0, 2) === "--")
        return `var(${value})`;
      const [name] = (0, import_utils9.isArray)(value) ? value : value.split(" ");
      const { COLOR: COLOR2, GRADIENT: GRADIENT2 } = CONFIG22;
      const val = COLOR2[name] || GRADIENT2[name];
      const isObj = (0, import_utils9.isObject)(val);
      if (isObj && val.value)
        return getColor2(value, `@${globalTheme}`, config);
      else if (isObj) {
        if (globalTheme)
          return getColor2(value, `@${globalTheme}`, config);
        else {
          const obj = {};
          for (const mediaName in val) {
            const query = CONFIG22.MEDIA[mediaName.slice(1)];
            const media = `@media screen and ${query}`;
            obj[media] = getColor2(value, mediaName, config);
          }
          return obj;
        }
      } else {
        if (CONFIG22.verbose)
          console.warn("Can't find color", value);
        return value;
      }
    },
    transformBorderRadius: (radius, props, propertyName) => {
  if (!(0, import_utils6.isString)(radius))
    return;
  return {
    borderRadius: radius.split(" ").map((v, k) => (0, import_scratch8.getSpacingBasedOnRatio)(props, propertyName, v)[propertyName]).join(" ")
  };
}
  },
  class: {
    shape: ({ props, deps }) => {
      const { shape } = props;
      return deps.exec(SHAPES[shape], { props, deps });
    },
    shapeDirection: ({ props }) => {
      const { shape, shapeDirection } = props;
      if (!shape || !shapeDirection)
        return;
      const shapeDir = SHAPES[shape + "Direction"];
      return shape && shapeDir ? shapeDir[shapeDirection || "left"] : null;
    },
    shapeDirectionColor: ({ props, deps }) => {
      const { background, backgroundColor } = props;
      const borderColor = {
        borderColor: deps.getMediaColor(background || backgroundColor)
      };
      return props.shapeDirection ? borderColor : null;
    },
    round: ({ props, key, deps, ...el }) => deps.transformBorderRadius(props.round || props.borderRadius, props, "round"),
    borderRadius: ({ props, key, deps, ...el }) => deps.transformBorderRadius(props.borderRadius || props.round, props, "borderRadius")
  },
  __name: 'Shape'
};
export function Shape(props) {
  const ref_Box = useRef(null);
  function shape({ props, deps }) {
    const { shape } = props;
    return deps.exec(SHAPES[shape], {
      props,
      deps,
    });
  }

  function shapeDirection({ props }) {
    const { shape, shapeDirection } = props;
    if (!shape || !shapeDirection) return;
    const shapeDir = SHAPES[shape + "Direction"];
    return shape && shapeDir ? shapeDir[shapeDirection || "left"] : null;
  }

  function shapeDirectionColor({ props, deps }) {
    const { background, backgroundColor } = props;
    const borderColor = {
      borderColor: deps.getMediaColor(background || backgroundColor),
    };
    return props.shapeDirection ? borderColor : null;
  }

  function round({ props, key, deps, ...el }) {
    return deps.transformBorderRadius(
      props.round || props.borderRadius,
      props,
      "round"
    );
  }

  function borderRadius({ props, key, deps, ...el }) {
    return deps.transformBorderRadius(
      props.borderRadius || props.round,
      props,
      "borderRadius"
    );
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
    ...create({
      ...deepMerge(cleanProps, orig_33),
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
      tag="div"
      ref={ref_Box}
      className={`${css(shape(dobj))} ${css(shapeDirection(dobj))} ${css(
        shapeDirectionColor(dobj)
      )} ${css(round(dobj))} ${css(borderRadius(dobj))} ${css(content(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_34 = {
  tag: 'span',
  __name: 'Span'
};
export function Span(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_34),
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
    <Box tag="span" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_35 = {
  tag: 'strong',
  props: {fontWeight: '700'},
  __name: 'Strong'
};
export function Strong(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_35),
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
      fontWeight="700"
      tag="strong"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_36 = {
  tag: 'span',
  props: {fontSize: 'Z1'},
  __name: 'Subhead'
};
export function Subhead(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_36),
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
      fontSize="Z1"
      tag="span"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_37 = {
  deps: {
    getFontSizeByKey: (value) => {
      const CONFIG22 = getActiveConfig3();
      const { TYPOGRAPHY: TYPOGRAPHY2 } = CONFIG22;
      return getSequenceValuePropertyPair(
        value,
        "fontSize",
        TYPOGRAPHY2
      );
    },
    getFontFamily: (key, factory) => {
      const CONFIG22 = getActiveConfig3();
      const { FONT_FAMILY: FONT_FAMILY2 } = CONFIG22;
      return getDefaultOrFirstKey(factory || FONT_FAMILY2, key);
    }
  },
  text: ({ key, props, state, deps }) => {
    if (props.text === true)
      return state && state[key] || props && props[key];
    return props.text;
  },
  class: {
    fontSize: (el) => {
      const { props, deps } = el;
      return props.fontSize ? deps.getFontSizeByKey(props.fontSize) : null;
    },
    fontFamily: ({ props, deps }) => props.fontFamily && {
      fontFamily: deps.getFontFamily(props.fontFamily) || props.fontFamily
    },
    lineHeight: ({ props }) => props.lineHeight && { lineHeight: props.lineHeight },
    textDecoration: ({ props }) => props.textDecoration && { textDecoration: props.textDecoration },
    textTransform: ({ props }) => props.textTransform && { textTransform: props.textTransform },
    whiteSpace: ({ props }) => props.whiteSpace && { whiteSpace: props.whiteSpace },
    letterSpacing: ({ props }) => props.letterSpacing && { letterSpacing: props.letterSpacing },
    textAlign: ({ props }) => props.textAlign && { textAlign: props.textAlign },
    fontWeight: ({ props }) => props.fontWeight && {
      fontWeight: props.fontWeight,
      fontVariationSettings: '"wght" ' + props.fontWeight
    }
  },
  __name: 'Text'
};
export function Text(props) {
  const ref_Box = useRef(null);
  function fontSize(el) {
    const { props, deps } = el;
    return props.fontSize ? deps.getFontSizeByKey(props.fontSize) : null;
  }

  function fontFamily({ props, deps }) {
    props.fontFamily && {
      fontFamily: deps.getFontFamily(props.fontFamily) || props.fontFamily,
    };
    return;
  }

  function lineHeight({ props }) {
    return (
      props.lineHeight && {
        lineHeight: props.lineHeight,
      }
    );
  }

  function textDecoration({ props }) {
    return (
      props.textDecoration && {
        textDecoration: props.textDecoration,
      }
    );
  }

  function textTransform({ props }) {
    return (
      props.textTransform && {
        textTransform: props.textTransform,
      }
    );
  }

  function whiteSpace({ props }) {
    return (
      props.whiteSpace && {
        whiteSpace: props.whiteSpace,
      }
    );
  }

  function letterSpacing({ props }) {
    return (
      props.letterSpacing && {
        letterSpacing: props.letterSpacing,
      }
    );
  }

  function textAlign({ props }) {
    return (
      props.textAlign && {
        textAlign: props.textAlign,
      }
    );
  }

  function fontWeight({ props }) {
    props.fontWeight && {
      fontWeight: props.fontWeight,
      fontVariationSettings: '"wght" ' + props.fontWeight,
    };
    return;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_37),
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
      tag="div"
      ref={ref_Box}
      className={`${css(fontSize(dobj))} ${css(fontFamily(dobj))} ${css(
        lineHeight(dobj)
      )} ${css(textDecoration(dobj))} ${css(textTransform(dobj))} ${css(
        whiteSpace(dobj)
      )} ${css(letterSpacing(dobj))} ${css(textAlign(dobj))} ${css(
        fontWeight(dobj)
      )}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_38 = {
  deps: {
    depth: {
      '4': {
        boxShadow: 'rgba(0,0,0,.10) 0 2em 4em'
      },
      '6': {
        boxShadow: 'rgba(0,0,0,.10) 0 3em 6em'
      },
      '10': {
        boxShadow: 'rgba(0,0,0,.10) 0 4em 10em'
      },
      '16': {
        boxShadow: 'rgba(0,0,0,.10) 0 8em 16em'
      },
      '26': {
        boxShadow: 'rgba(0,0,0,.10) 0 14em 26em'
      },
      '42': {
        boxShadow: 'rgba(0,0,0,.10) 0 20em 42em'
      }
    },
    getSystemTheme: ({ context, state }) => {
  const rootState = state && state.__root;
  return rootState && rootState.globalTheme ? rootState.globalTheme : context.designSystem && context.designSystem.globalTheme;
},
    getMediaTheme: (val, mod) => {
      const CONFIG22 = getActiveConfig3();
      if ((0, import_utils11.isString)(val) && val.slice(0, 2) === "--")
        val = getMediaTheme2(val.slice(2));
      if (!val || !(0, import_utils11.isString)(val)) {
        if (CONFIG22.verbose)
          console.warn(val, "- theme is not string");
        return;
      }
      const [name, ...modifier] = (0, import_utils11.isArray)(val) ? val : val.split(" ");
      let value = CONFIG22.THEME[name];
      if (value && (modifier || mod)) {
        value = findModifier(value, modifier.length ? modifier : mod);
      }
      const r = recursiveTheme(value);
      return r;
    },
    getMediaColor: (value, globalTheme, config) => {
      const CONFIG22 = config || getActiveConfig3();
      if (!globalTheme)
        globalTheme = CONFIG22.globalTheme;
      if (!(0, import_utils9.isString)(value)) {
        if (CONFIG22.verbose)
          console.warn(value, "- type for color is not valid");
        return;
      }
      if (value.slice(0, 2) === "--")
        return `var(${value})`;
      const [name] = (0, import_utils9.isArray)(value) ? value : value.split(" ");
      const { COLOR: COLOR2, GRADIENT: GRADIENT2 } = CONFIG22;
      const val = COLOR2[name] || GRADIENT2[name];
      const isObj = (0, import_utils9.isObject)(val);
      if (isObj && val.value)
        return getColor2(value, `@${globalTheme}`, config);
      else if (isObj) {
        if (globalTheme)
          return getColor2(value, `@${globalTheme}`, config);
        else {
          const obj = {};
          for (const mediaName in val) {
            const query = CONFIG22.MEDIA[mediaName.slice(1)];
            const media = `@media screen and ${query}`;
            obj[media] = getColor2(value, mediaName, config);
          }
          return obj;
        }
      } else {
        if (CONFIG22.verbose)
          console.warn("Can't find color", value);
        return value;
      }
    },
    transformTextStroke: (stroke) => {
      return stroke.split(", ").map((v) => {
        if (v.slice(0, 2) === "--")
          return `var(${v})`;
        if (v.includes("px"))
          return v;
        else if (getColor2(v))
          return getColor2(v);
        return v;
      }).join(" ");
    },
    transformShadow: (sh, globalTheme) => getShadow(sh, globalTheme),
    transformBoxShadow: (shadows) => shadows.split("|").map((shadow) => {
      return shadow.split(", ").map((v) => {
        v = v.trim();
        if (v.slice(0, 2) === "--")
          return `var(${v})`;
        if (getColor2(v).length > 2)
          return getColor2(v);
        if (v.includes("px") || v.slice(-2) === "em")
          return v;
        const arr = v.split(" ");
        if (!arr.length)
          return v;
        return arr.map((v2) => getSpacingByKey3(v2, "shadow").shadow).join(" ");
      }).join(" ");
    }).join(","),
    transformBorder: (border) => {
      const arr = border.split(", ");
      return arr.map((v) => {
        v = v.trim();
        if (v.slice(0, 2) === "--")
          return `var(${v})`;
        else if (isBorderStyle(v))
          return v || "solid";
        else if (v.slice(-2) === "px" || v.slice(-2) === "em")
          return v;
        else if (getColor2(v).length > 2)
          return getColor2(v);
        return getSpacingByKey3(v, "border").border;
      }).join(" ");
    },
    transformBackgroundImage: (backgroundImage, globalTheme) => {
      const CONFIG22 = getActiveConfig3();
      return backgroundImage.split(", ").map((v) => {
        if (v.slice(0, 2) === "--")
          return `var(${v})`;
        if (v.includes("url") || v.includes("gradient"))
          return v;
        else if (CONFIG22.GRADIENT[backgroundImage]) {
          return {
            backgroundImage: getMediaColor3(backgroundImage, globalTheme || CONFIG22.globalTheme)
          };
        } else if (v.includes("/") || v.includes("http"))
          return `url(${v})`;
        return v;
      }).join(" ");
    }
  },
  class: {
    depth: ({ props, deps }) => !(0, import_utils.isUndefined)(props.depth) && deps.depth[props.depth],
    theme: (element) => {
      const { props, deps } = element;
      const globalTheme = deps.getSystemTheme(element);
      if (!props.theme)
        return;
      const getMediaTheme2 = deps.getMediaTheme(props.theme, `@${props.themeModifier || globalTheme}`);
      return getMediaTheme2;
    },
    color: (element) => {
      const { props, deps } = element;
      const globalTheme = deps.getSystemTheme(element);
      if (!props.color)
        return;
      return {
        color: deps.getMediaColor(props.color, globalTheme)
      };
    },
    background: (element) => {
      const { props, deps } = element;
      const globalTheme = deps.getSystemTheme(element);
      if (!props.background)
        return;
      return {
        background: deps.getMediaColor(props.background, globalTheme)
      };
    },
    backgroundColor: (element) => {
      const { props, deps } = element;
      const globalTheme = deps.getSystemTheme(element);
      if (!props.backgroundColor)
        return;
      return {
        backgroundColor: deps.getMediaColor(props.backgroundColor, globalTheme)
      };
    },
    backgroundImage: (element) => {
      const { props, deps } = element;
      const globalTheme = deps.getSystemTheme(element);
      if (!props.backgroundImage)
        return;
      return {
        backgroundImage: deps.transformBackgroundImage(props.backgroundImage, globalTheme)
      };
    },
    backgroundSize: ({ props }) => !(0, import_utils.isUndefined)(props.backgroundSize) ? {
      backgroundSize: props.backgroundSize
    } : null,
    backgroundPosition: ({ props }) => !(0, import_utils.isUndefined)(props.backgroundPosition) ? {
      backgroundPosition: props.backgroundPosition
    } : null,
    textStroke: ({ props, deps }) => !(0, import_utils.isUndefined)(props.textStroke) ? {
      WebkitTextStroke: deps.transformTextStroke(props.textStroke)
    } : null,
    outline: ({ props, deps }) => !(0, import_utils.isUndefined)(props.outline) && {
      outline: deps.transformBorder(props.outline)
    },
    border: ({ props, deps }) => !(0, import_utils.isUndefined)(props.border) && {
      border: deps.transformBorder(props.border)
    },
    borderColor: (element) => {
      const { props, deps } = element;
      const globalTheme = deps.getSystemTheme(element);
      if (!props.borderColor)
        return;
      return {
        borderColor: deps.getMediaColor(props.borderColor, globalTheme)
      };
    },
    borderStyle: ({ props }) => !(0, import_utils.isUndefined)(props.borderStyle) && {
      borderStyle: props.borderStyle
    },
    borderLeft: ({ props, deps }) => !(0, import_utils.isUndefined)(props.borderLeft) && {
      borderLeft: deps.transformBorder(props.borderLeft)
    },
    borderTop: ({ props, deps }) => !(0, import_utils.isUndefined)(props.borderTop) && {
      borderTop: deps.transformBorder(props.borderTop)
    },
    borderRight: ({ props, deps }) => !(0, import_utils.isUndefined)(props.borderRight) && {
      borderRight: deps.transformBorder(props.borderRight)
    },
    borderBottom: ({ props, deps }) => !(0, import_utils.isUndefined)(props.borderBottom) && {
      borderBottom: deps.transformBorder(props.borderBottom)
    },
    shadow: (element) => {
      const { props, deps } = element;
      const globalTheme = deps.getSystemTheme(element);
      if (!props.backgroundImage)
        return;
      return {
        boxShadow: deps.transformShadow(props.backgroundImage, globalTheme)
      };
    },
    boxShadow: ({ props, deps }) => (0, import_utils.isString)(props.boxShadow) && {
      boxShadow: deps.transformBoxShadow(props.boxShadow)
    },
    textShadow: ({ props, deps }) => !(0, import_utils.isUndefined)(props.textShadow) && {
      textShadow: deps.transformBoxShadow(props.textShadow)
    },
    backdropFilter: ({ props, deps }) => !(0, import_utils.isUndefined)(props.backdropFilter) && {
      backdropFilter: props.backdropFilter
    },
    opacity: ({ props }) => !(0, import_utils.isUndefined)(props.opacity) && {
      opacity: props.opacity
    },
    visibility: ({ props }) => !(0, import_utils.isUndefined)(props.visibility) && {
      visibility: props.visibility
    },
    columnRule: ({ props, deps }) => !(0, import_utils.isUndefined)(props.columnRule) && {
      columnRule: deps.transformBorder(props.columnRule)
    },
    appearance: ({ props }) => !(0, import_utils.isUndefined)(props.appearance) && {
      appearance: props.appearance
    }
  },
  __name: 'Theme'
};
export function Theme(props) {
  const ref_Box = useRef(null);
  function depth({ props, deps }) {
    return (
      !(0, import_utils.isUndefined)(props.depth) && deps.depth[props.depth]
    );
  }

  function theme(element) {
    const { props, deps } = element;
    const globalTheme = deps.getSystemTheme(element);
    if (!props.theme) return;
    const getMediaTheme2 = deps.getMediaTheme(
      props.theme,
      `@${props.themeModifier || globalTheme}`
    );
    return getMediaTheme2;
  }

  function color(element) {
    const { props, deps } = element;
    const globalTheme = deps.getSystemTheme(element);
    if (!props.color) return;
    return {
      color: deps.getMediaColor(props.color, globalTheme),
    };
  }

  function background(element) {
    const { props, deps } = element;
    const globalTheme = deps.getSystemTheme(element);
    if (!props.background) return;
    return {
      background: deps.getMediaColor(props.background, globalTheme),
    };
  }

  function backgroundColor(element) {
    const { props, deps } = element;
    const globalTheme = deps.getSystemTheme(element);
    if (!props.backgroundColor) return;
    return {
      backgroundColor: deps.getMediaColor(props.backgroundColor, globalTheme),
    };
  }

  function backgroundImage(element) {
    const { props, deps } = element;
    const globalTheme = deps.getSystemTheme(element);
    if (!props.backgroundImage) return;
    return {
      backgroundImage: deps.transformBackgroundImage(
        props.backgroundImage,
        globalTheme
      ),
    };
  }

  function backgroundSize({ props }) {
    !(0, import_utils.isUndefined)(props.backgroundSize)
      ? {
          backgroundSize: props.backgroundSize,
        }
      : null;
    return;
  }

  function backgroundPosition({ props }) {
    !(0, import_utils.isUndefined)(props.backgroundPosition)
      ? {
          backgroundPosition: props.backgroundPosition,
        }
      : null;
    return;
  }

  function textStroke({ props, deps }) {
    !(0, import_utils.isUndefined)(props.textStroke)
      ? {
          WebkitTextStroke: deps.transformTextStroke(props.textStroke),
        }
      : null;
    return;
  }

  function outline({ props, deps }) {
    !(0, import_utils.isUndefined)(props.outline) && {
      outline: deps.transformBorder(props.outline),
    };
    return;
  }

  function border({ props, deps }) {
    !(0, import_utils.isUndefined)(props.border) && {
      border: deps.transformBorder(props.border),
    };
    return;
  }

  function borderColor(element) {
    const { props, deps } = element;
    const globalTheme = deps.getSystemTheme(element);
    if (!props.borderColor) return;
    return {
      borderColor: deps.getMediaColor(props.borderColor, globalTheme),
    };
  }

  function borderStyle({ props }) {
    !(0, import_utils.isUndefined)(props.borderStyle) && {
      borderStyle: props.borderStyle,
    };
    return;
  }

  function borderLeft({ props, deps }) {
    !(0, import_utils.isUndefined)(props.borderLeft) && {
      borderLeft: deps.transformBorder(props.borderLeft),
    };
    return;
  }

  function borderTop({ props, deps }) {
    !(0, import_utils.isUndefined)(props.borderTop) && {
      borderTop: deps.transformBorder(props.borderTop),
    };
    return;
  }

  function borderRight({ props, deps }) {
    !(0, import_utils.isUndefined)(props.borderRight) && {
      borderRight: deps.transformBorder(props.borderRight),
    };
    return;
  }

  function borderBottom({ props, deps }) {
    !(0, import_utils.isUndefined)(props.borderBottom) && {
      borderBottom: deps.transformBorder(props.borderBottom),
    };
    return;
  }

  function shadow(element) {
    const { props, deps } = element;
    const globalTheme = deps.getSystemTheme(element);
    if (!props.backgroundImage) return;
    return {
      boxShadow: deps.transformShadow(props.backgroundImage, globalTheme),
    };
  }

  function boxShadow({ props, deps }) {
    (0, import_utils.isString)(props.boxShadow) && {
      boxShadow: deps.transformBoxShadow(props.boxShadow),
    };
    return;
  }

  function textShadow({ props, deps }) {
    !(0, import_utils.isUndefined)(props.textShadow) && {
      textShadow: deps.transformBoxShadow(props.textShadow),
    };
    return;
  }

  function backdropFilter({ props, deps }) {
    !(0, import_utils.isUndefined)(props.backdropFilter) && {
      backdropFilter: props.backdropFilter,
    };
    return;
  }

  function opacity({ props }) {
    !(0, import_utils.isUndefined)(props.opacity) && {
      opacity: props.opacity,
    };
    return;
  }

  function visibility({ props }) {
    !(0, import_utils.isUndefined)(props.visibility) && {
      visibility: props.visibility,
    };
    return;
  }

  function columnRule({ props, deps }) {
    !(0, import_utils.isUndefined)(props.columnRule) && {
      columnRule: deps.transformBorder(props.columnRule),
    };
    return;
  }

  function appearance({ props }) {
    !(0, import_utils.isUndefined)(props.appearance) && {
      appearance: props.appearance,
    };
    return;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_38),
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
      tag="div"
      ref={ref_Box}
      className={`${css(depth(dobj))} ${css(theme(dobj))} ${css(
        color(dobj)
      )} ${css(background(dobj))} ${css(backgroundColor(dobj))} ${css(
        backgroundImage(dobj)
      )} ${css(backgroundSize(dobj))} ${css(backgroundPosition(dobj))} ${css(
        textStroke(dobj)
      )} ${css(outline(dobj))} ${css(border(dobj))} ${css(
        borderColor(dobj)
      )} ${css(borderStyle(dobj))} ${css(borderLeft(dobj))} ${css(
        borderTop(dobj)
      )} ${css(borderRight(dobj))} ${css(borderBottom(dobj))} ${css(
        shadow(dobj)
      )} ${css(boxShadow(dobj))} ${css(textShadow(dobj))} ${css(
        backdropFilter(dobj)
      )} ${css(opacity(dobj))} ${css(visibility(dobj))} ${css(
        columnRule(dobj)
      )} ${css(appearance(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_39 = {
  deps: {
    getTimingFunction: (value) => {
      const CONFIG22 = getActiveConfig3();
      const { TIMING: TIMING2 } = CONFIG22;
      return TIMING2[value] || TIMING2[toCamelCase(value)] || value;
    },
    splitTransition: (transition) => {
      const arr = transition.split(",");
      if (!arr.length)
        return;
      return arr.map(transformTransition).join(",");
    },
    transformDuration: (duration, props, propertyName) => {
      if (!(0, import_utils27.isString)(duration))
        return;
      return duration.split(",").map((v) => getTimingByKey2(v).timing || v).join(",");
    }
  },
  class: {
    transition: ({ props, deps }) => props.transition && {
      transition: deps.splitTransition(props.transition)
    },
    willChange: ({ props }) => props.willChange && {
      willChange: props.willChange
    },
    transitionDuration: ({ props, deps }) => props.transitionDuration && {
      transitionDuration: deps.transformDuration(props.transitionDuration)
    },
    transitionDelay: ({ props, deps }) => props.transitionDelay && {
      transitionDelay: deps.transformDuration(props.transitionDelay)
    },
    transitionTimingFunction: ({ props, deps }) => props.transitionTimingFunction && {
      transitionTimingFunction: deps.getTimingFunction(props.transitionTimingFunction)
    },
    transitionProperty: ({ props }) => props.transitionProperty && {
      transitionProperty: props.transitionProperty,
      willChange: props.transitionProperty
    }
  },
  __name: 'Timing'
};
export function Timing(props) {
  const ref_Box = useRef(null);
  function transition({ props, deps }) {
    props.transition && {
      transition: deps.splitTransition(props.transition),
    };
    return;
  }

  function willChange({ props }) {
    props.willChange && {
      willChange: props.willChange,
    };
    return;
  }

  function transitionDuration({ props, deps }) {
    props.transitionDuration && {
      transitionDuration: deps.transformDuration(props.transitionDuration),
    };
    return;
  }

  function transitionDelay({ props, deps }) {
    props.transitionDelay && {
      transitionDelay: deps.transformDuration(props.transitionDelay),
    };
    return;
  }

  function transitionTimingFunction({ props, deps }) {
    props.transitionTimingFunction && {
      transitionTimingFunction: deps.getTimingFunction(
        props.transitionTimingFunction
      ),
    };
    return;
  }

  function transitionProperty({ props }) {
    props.transitionProperty && {
      transitionProperty: props.transitionProperty,
      willChange: props.transitionProperty,
    };
    return;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_39),
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
      tag="div"
      ref={ref_Box}
      className={`${css(transition(dobj))} ${css(willChange(dobj))} ${css(
        transitionDuration(dobj)
      )} ${css(transitionDelay(dobj))} ${css(
        transitionTimingFunction(dobj)
      )} ${css(transitionProperty(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_40 = {
  tag: 'h5',
  __name: 'Title'
};
export function Title(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_40),
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
    <Box tag="h5" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_41 = {
  class: {
    transform: ({ props }) => props.transform && { transform: props.transform },
    transformOrigin: ({ props }) => props.transformOrigin && { transformOrigin: props.transformOrigin }
  },
  __name: 'Transform'
};
export function Transform(props) {
  const ref_Box = useRef(null);
  function transform({ props }) {
    return (
      props.transform && {
        transform: props.transform,
      }
    );
  }

  function transformOrigin({ props }) {
    return (
      props.transformOrigin && {
        transformOrigin: props.transformOrigin,
      }
    );
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_41),
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
      tag="div"
      ref={ref_Box}
      className={`${css(transform(dobj))} ${css(transformOrigin(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
const orig_42 = {
  tag: 'ul',
  childExtend: {tag: 'li'},
  __name: 'Ul'
};
export function Ul(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_42),
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
    <Box tag="ul" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_43 = {
  tag: 'u',
  __name: 'Underline'
};
export function Underline(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_43),
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
    <Box tag="u" ref={ref_Box} {...dobj.props} domqlElementObject={dobj} />
  );
}
const orig_44 = {
  class: {
    zIndex: ({ props }) => props.zIndex && { zIndex: props.zIndex }
  },
  __name: 'XYZ'
};
export function XYZ(props) {
  const ref_Box = useRef(null);
  function zIndex({ props }) {
    return (
      props.zIndex && {
        zIndex: props.zIndex,
      }
    );
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
      ...deepMerge(cleanProps, orig_44),
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
      tag="div"
      ref={ref_Box}
      className={`${css(zIndex(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}