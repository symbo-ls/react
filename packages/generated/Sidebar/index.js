import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
import { css } from "@emotion/css";

const orig = {
  aside: 'aside',
  nav: {
    style: {a: {cursor: 'pointer'}},
    childExtend: {
      extend: {
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
      props: {icon: ''},
      glyph: {
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
        }
      }
    }
  },
  __name: 'Sidebar'
};

export function Sidebar(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);

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
  const dobj_Box = dobj["aside"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["nav"]
  dobj_Box_2.node = ref_Box_3.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box tag="div" ref={ref_Box} {...dobj.props} domqlElementObject={dobj}>
      <Box
        tag="aside"
        ref={ref_Box_2}
        {...dobj_Box.props}
        domqlElementObject={dobj_Box}
      />
      <Box
        tag="nav"
        ref={ref_Box_3}
        className={`${css({
          a: {
            cursor: "pointer",
          },
        })}`}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
    </Box>
  );
}
