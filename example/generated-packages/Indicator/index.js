import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { create } from "@symbo.ls/create";
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
    padding: 'Y1',
    boxSize: 'fit-content fit-content',
    round: '100%',
    theme: 'primary'
  },
  Icon: {
    extend: {
      extend: {
        tag: 'svg',
        deps: {
          init: (config, options = SET_OPTIONS) => {
  const emotion2 = options.emotion || emotion;
  const resultConfig = mergeWithLocalFile(config || {});
  const conf = (0, import_scratch7.set)({
    verbose: options.verbose,
    useReset: options.useReset,
    useFontImport: options.useFontImport,
    useVariable: options.useVariable,
    useSvgSprite: options.useSvgSprite,
    useDocumentTheme: options.useDocumentTheme,
    useIconSprite: options.useIconSprite,
    ...resultConfig
  }, { newConfig: options.newConfig });
  const FontFace = (0, import_scratch7.getFontFaceString)(conf.FONT);
  const useReset = conf.useReset;
  const useVariable = conf.useVariable;
  const useFontImport = conf.useFontImport;
  const useSvgSprite = conf.useSvgSprite;
  const hasSvgs = config.svg || config.SVG;
  const useIconSprite = conf.useIconSprite;
  const hasIcons = config.icons || config.ICONS;
  if (useFontImport)
    emotion2.injectGlobal(FontFace);
  if (useVariable)
    emotion2.injectGlobal({ ":root": conf.CSS_VARS });
  if (useReset)
    emotion2.injectGlobal(conf.RESET);
  if (hasSvgs)
    (0, import_scratch7.appendSVGSprite)(hasSvgs, { document: options.document });
  else if (useSvgSprite)
    (0, import_scratch7.appendSVGSprite)(conf.SVG, { document: options.document });
  if (hasIcons)
    (0, import_scratch7.appendIconsSprite)(hasIcons, { document: options.document });
  else if (useIconSprite)
    (0, import_scratch7.appendIconsSprite)(conf.ICONS, { document: options.document });
  return conf;
}
        },
        props: {
          style: {
            '*': {fill: 'currentColor'}
          }
        },
        attr: {
          xmlns: 'http://www.w3.org/2000/svg',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink'
        },
        html: ({ key, props, context, deps, ...el }) => {
    const { designSystem } = context;
    const SVG = designSystem && designSystem.SVG;
    const useSvgSprite = props.spriteId || context.designSystem && context.designSystem.useSvgSprite;
    if (!useSvgSprite && props.src)
      return props.src;
    const useSVGSymbol = (icon) => `<use xlink:href="#${icon}" />`;
    const spriteId = props.spriteId;
    if (spriteId)
      return useSVGSymbol(spriteId);
    const symbolId = Symbol.for(props.src);
    let SVGKey = SVG[symbolId];
    if (SVGKey && SVG[SVGKey])
      return useSVGSymbol(SVGKey);
    SVGKey = SVG[symbolId] = Math.random();
    if (props.src) {
      deps.init({
        svg: { [SVGKey]: props.src }
      }, {
        document: context.document,
        emotion: context.emotion
      });
    }
    return useSVGSymbol(SVGKey);
  }
      },
      deps: {
        isString: (arg) => typeof arg === "string"
      },
      props: ({ key, props, parent, context, deps }) => {
    const { ICONS, useIconSprite, verbose } = context && context.designSystem;
    const { toCamelCase } = context && context.utils;
    const iconName = props.name || props.icon || key;
    const camelCase = toCamelCase(deps.isString(iconName) ? iconName : key);
    const isArray3 = camelCase.split(/([a-z])([A-Z])/g);
    let activeIconName;
    if (props.active) {
      activeIconName = props[".active"].name || props[".active"].icon;
    }
    if (parent && parent.props && parent.props.active && parent.props[".active"] && parent.props[".active"].icon) {
      activeIconName = parent.props[".active"].icon.name || parent.props[".active"].icon.icon || parent.props[".active"].icon;
    }
    let validIconName;
    if (ICONS[activeIconName])
      validIconName = activeIconName;
    if (ICONS[camelCase])
      validIconName = camelCase;
    else if (ICONS[isArray3[0] + isArray3[1]])
      validIconName = isArray3[0] + isArray3[1];
    else if (ICONS[isArray3[0]])
      validIconName = isArray3[0];
    else {
      if (verbose)
        console.warn("Can't find icon:", iconName, validIconName);
    }
    const iconFromLibrary = ICONS[validIconName];
    const directSrc = parent && parent.props && parent.props.src || props.src;
    return {
      width: "A",
      height: "A",
      display: "inline-block",
      spriteId: useIconSprite && validIconName,
      src: iconFromLibrary || directSrc || ICONS.noIcon,
      style: { fill: "currentColor" }
    };
  },
      attr: {viewBox: '0 0 24 24'}
    },
    props: {
      name: 'check',
      fontSize: 'B1'
    }
  },
  __name: 'CheckIndicator'
};

export function CheckIndicator(props) {
  const ref_Box = useRef(null);
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

  function html({ key, props, context, deps, ...el }) {
    const { designSystem } = context;
    const SVG = designSystem && designSystem.SVG;
    const useSvgSprite =
      props.spriteId ||
      (context.designSystem && context.designSystem.useSvgSprite);
    if (!useSvgSprite && props.src) return props.src;
    const useSVGSymbol = (icon) => `<use xlink:href="#${icon}" />`;
    const spriteId = props.spriteId;
    if (spriteId) return useSVGSymbol(spriteId);
    const symbolId = Symbol.for(props.src);
    let SVGKey = SVG[symbolId];
    if (SVGKey && SVG[SVGKey]) return useSVGSymbol(SVGKey);
    SVGKey = SVG[symbolId] = Math.random();
    if (props.src) {
      deps.init(
        {
          svg: {
            [SVGKey]: props.src,
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
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      padding="Y1"
      boxSize="fit-content fit-content"
      round="100%"
      theme="primary"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Svg
        name="check"
        fontSize="B1"
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
    align: 'center flex-start',
    gap: 'Z'
  },
  CheckIndicator: {},
  Caption: {
    text: 'Step',
    fontWeight: '400',
    fontSize: 'Z2'
  },
  __name: 'CheckIndicatorWithLabel'
};

export function CheckIndicatorWithLabel(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
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
  const dobj_Box = dobj["CheckIndicator"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Caption"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Svg = dobj["CheckIndicator"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      align="center flex-start"
      gap="Z"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        padding="X"
        boxSize="fit-content fit-content"
        round="100%"
        theme="primary"
        fontSize="X"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
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
        text="Step"
        fontWeight="400"
        fontSize="Z2"
        tag="caption"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
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
  },
  __name: 'CountIndicator'
};

export function CountIndicator(props) {
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
    <Box
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
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}

const orig_4 = {
  props: {
    padding: 'Z+V',
    theme: 'tertiary',
    boxSize: 'fit-content',
    round: '100%',
    ':after': {
      content: '""',
      boxSize: 'Z',
      background: 'white',
      display: 'block',
      round: '100%'
    }
  },
  __name: 'RadioIndicator'
};

export function RadioIndicator(props) {
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
      padding="Z+V"
      theme="tertiary"
      boxSize="fit-content"
      round="100%"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}

const orig_5 = {
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
    gap: 'Z'
  },
  RadioIndicator: {},
  Caption: {
    text: 'Step',
    fontWeight: '500',
    fontSize: 'Z2'
  },
  __name: 'RadioIndicatorWithLabel'
};

export function RadioIndicatorWithLabel(props) {
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
  const dobj_Box = dobj["RadioIndicator"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["Caption"]
  dobj_Box_2.node = ref_Box_3.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      align="center flex-start"
      gap="Z"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        padding="Z"
        theme="primary"
        boxSize="fit-content"
        round="100%"
        tag="div"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        text="Step"
        fontWeight="500"
        fontSize="Z2"
        tag="caption"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
    </Box>
  );
}

const orig_6 = {
  props: {
    boxSize: 'Z+V',
    background: 'green2',
    round: '100%',
    border: 'solid, gray',
    borderWidth: '2px'
  },
  __name: 'StatusIndicator'
};

export function StatusIndicator(props) {
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
    <Box
      boxSize="Z+V"
      background="green2"
      round="100%"
      border="solid, gray"
      borderWidth="2px"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    />
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
      padding: 'Y1',
      boxSize: 'fit-content fit-content',
      round: '100%',
      theme: 'primary'
    },
    Icon: {
      extend: {
        extend: {
          tag: 'svg',
          deps: {
            init: (config, options = SET_OPTIONS) => {
  const emotion2 = options.emotion || emotion;
  const resultConfig = mergeWithLocalFile(config || {});
  const conf = (0, import_scratch7.set)({
    verbose: options.verbose,
    useReset: options.useReset,
    useFontImport: options.useFontImport,
    useVariable: options.useVariable,
    useSvgSprite: options.useSvgSprite,
    useDocumentTheme: options.useDocumentTheme,
    useIconSprite: options.useIconSprite,
    ...resultConfig
  }, { newConfig: options.newConfig });
  const FontFace = (0, import_scratch7.getFontFaceString)(conf.FONT);
  const useReset = conf.useReset;
  const useVariable = conf.useVariable;
  const useFontImport = conf.useFontImport;
  const useSvgSprite = conf.useSvgSprite;
  const hasSvgs = config.svg || config.SVG;
  const useIconSprite = conf.useIconSprite;
  const hasIcons = config.icons || config.ICONS;
  if (useFontImport)
    emotion2.injectGlobal(FontFace);
  if (useVariable)
    emotion2.injectGlobal({ ":root": conf.CSS_VARS });
  if (useReset)
    emotion2.injectGlobal(conf.RESET);
  if (hasSvgs)
    (0, import_scratch7.appendSVGSprite)(hasSvgs, { document: options.document });
  else if (useSvgSprite)
    (0, import_scratch7.appendSVGSprite)(conf.SVG, { document: options.document });
  if (hasIcons)
    (0, import_scratch7.appendIconsSprite)(hasIcons, { document: options.document });
  else if (useIconSprite)
    (0, import_scratch7.appendIconsSprite)(conf.ICONS, { document: options.document });
  return conf;
}
          },
          props: {
            style: {
              '*': {fill: 'currentColor'}
            }
          },
          attr: {
            xmlns: 'http://www.w3.org/2000/svg',
            'xmlns:xlink': 'http://www.w3.org/1999/xlink'
          },
          html: ({ key, props, context, deps, ...el }) => {
    const { designSystem } = context;
    const SVG = designSystem && designSystem.SVG;
    const useSvgSprite = props.spriteId || context.designSystem && context.designSystem.useSvgSprite;
    if (!useSvgSprite && props.src)
      return props.src;
    const useSVGSymbol = (icon) => `<use xlink:href="#${icon}" />`;
    const spriteId = props.spriteId;
    if (spriteId)
      return useSVGSymbol(spriteId);
    const symbolId = Symbol.for(props.src);
    let SVGKey = SVG[symbolId];
    if (SVGKey && SVG[SVGKey])
      return useSVGSymbol(SVGKey);
    SVGKey = SVG[symbolId] = Math.random();
    if (props.src) {
      deps.init({
        svg: { [SVGKey]: props.src }
      }, {
        document: context.document,
        emotion: context.emotion
      });
    }
    return useSVGSymbol(SVGKey);
  }
        },
        deps: {
          isString: (arg) => typeof arg === "string"
        },
        props: ({ key, props, parent, context, deps }) => {
    const { ICONS, useIconSprite, verbose } = context && context.designSystem;
    const { toCamelCase } = context && context.utils;
    const iconName = props.name || props.icon || key;
    const camelCase = toCamelCase(deps.isString(iconName) ? iconName : key);
    const isArray3 = camelCase.split(/([a-z])([A-Z])/g);
    let activeIconName;
    if (props.active) {
      activeIconName = props[".active"].name || props[".active"].icon;
    }
    if (parent && parent.props && parent.props.active && parent.props[".active"] && parent.props[".active"].icon) {
      activeIconName = parent.props[".active"].icon.name || parent.props[".active"].icon.icon || parent.props[".active"].icon;
    }
    let validIconName;
    if (ICONS[activeIconName])
      validIconName = activeIconName;
    if (ICONS[camelCase])
      validIconName = camelCase;
    else if (ICONS[isArray3[0] + isArray3[1]])
      validIconName = isArray3[0] + isArray3[1];
    else if (ICONS[isArray3[0]])
      validIconName = isArray3[0];
    else {
      if (verbose)
        console.warn("Can't find icon:", iconName, validIconName);
    }
    const iconFromLibrary = ICONS[validIconName];
    const directSrc = parent && parent.props && parent.props.src || props.src;
    return {
      width: "A",
      height: "A",
      display: "inline-block",
      spriteId: useIconSprite && validIconName,
      src: iconFromLibrary || directSrc || ICONS.noIcon,
      style: { fill: "currentColor" }
    };
  },
        attr: {viewBox: '0 0 24 24'}
      },
      props: {
        name: 'check',
        fontSize: 'B1'
      }
    },
    __name: 'CheckIndicator'
  },
  props: {
    theme: 'success',
    padding: 'X+V2',
    fontSize: 'G2'
  },
  __name: 'SuccessIndicator'
};

export function SuccessIndicator(props) {
  const ref_Box = useRef(null);
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

  function html({ key, props, context, deps, ...el }) {
    const { designSystem } = context;
    const SVG = designSystem && designSystem.SVG;
    const useSvgSprite =
      props.spriteId ||
      (context.designSystem && context.designSystem.useSvgSprite);
    if (!useSvgSprite && props.src) return props.src;
    const useSVGSymbol = (icon) => `<use xlink:href="#${icon}" />`;
    const spriteId = props.spriteId;
    if (spriteId) return useSVGSymbol(spriteId);
    const symbolId = Symbol.for(props.src);
    let SVGKey = SVG[symbolId];
    if (SVGKey && SVG[SVGKey]) return useSVGSymbol(SVGKey);
    SVGKey = SVG[symbolId] = Math.random();
    if (props.src) {
      deps.init(
        {
          svg: {
            [SVGKey]: props.src,
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
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      theme="success"
      padding="X+V2"
      fontSize="G2"
      boxSize="fit-content fit-content"
      round="100%"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Svg
        name="check"
        fontSize="B1"
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
  );
}
