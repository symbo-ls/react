import { isString, deepMerge } from '@domql/utils';
import { Svg, Text, Flex } from '@symbo.ls/react-atoms';
import  * as D  from '@symbo.ls/icon';
import '@symbo.ls/icon';
import React, { useRef, useContext } from 'react';
import { Box, SymbolsProvider } from '@symbo.ls/react';
import { createSync } from '@symbo.ls/create';
import { css } from '@emotion/css';

export const Icon = (props) => {
  const { name, iconModifier, ...restProps } = props
  return (
    <Svg {...restProps}>
      {name ? <use xlinkHref={`#${name}${iconModifier}`} /> : props.children}
    </Svg>
  )
}
Icon.defaultProps = {
  iconModifier: '',
  width: 'A',
  height: 'A',
  display: 'inline-block',
  style: { fill: 'currentColor' }
}
export const IconText = (props) => {
  const iconName = props.icon || props.name
  const iconModifier = props.iconModifier || ''
  const iconPosition = props.iconPosition || 'start'
  const IconComponent = <Icon name={iconName} iconModifier={iconModifier} />

  return (
    <Flex tag={props.tag} alignItems='center' {...props}>
      {iconName && iconPosition === 'start' ? IconComponent : null}
      {props.children}
      {iconName && iconPosition === 'end' ? IconComponent : null}
    </Flex>
  )
}
IconText.defaultProps = D.IconText.props
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
    theme: 'tertiary',
    boxSize: 'C1',
    align: 'center center',
    round: 'Z'
  },
  Icon: {
    fontSize: 'B',
    margin: 'auto',
    icon: 'file'
  },
  __name: 'FileIcon'
};
export function FileIcon(props) {
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
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      theme="tertiary"
      boxSize="C1"
      align="center center"
      round="Z"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Svg
        fontSize="B"
        margin="auto"
        icon="file"
        width="A"
        height="A"
        display="inline-block"
        spriteId="file"
        src='<symbol id="file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></symbol>'
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