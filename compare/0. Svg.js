// Original: DOMQL
const useSVGSymbol = icon => `<use xlink:href="#${icon}" />`
const original = {
  tag: 'svg',
  props: {
    style: { '*': { fill: 'currentColor' } }
  },
  attr: {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink'
  },
  html: ({ props, context }) => {
    const { designSystem, utils } = context
    const SVG = designSystem && designSystem.SVG
    const useSvgSprite = props.spriteId || (context.designSystem && context.designSystem.useSvgSprite)

    if (!useSvgSprite && props.src) return props.src

    const spriteId = props.spriteId
    if (spriteId) return useSVGSymbol(spriteId)

    const symbolId = Symbol.for(props.src)
    let SVGKey = SVG[symbolId]
    if (SVGKey && SVG[SVGKey]) return useSVGSymbol(SVGKey)

    SVGKey = SVG[symbolId] = Math.random()
    if (props.src) {
      utils.init({
        svg: { [SVGKey]: props.src }
      }, {
        document: context.document,
        emotion: context.emotion
      })
    }

    return useSVGSymbol(SVGKey)
  }
}

// Converted: React
import * as React from "react";
import { useRef, useContext } from "react";
import { createSkeleton } from "@symbo.ls/create";
import { Box, SymbolsProvider } from "@symbo.ls/react";

export default function Svg(props) {
  const context = useContext(SymbolsProvider);
  const ref = useRef(null);
  
  const { domqlElementObject, ...props } = props
  const dobj = domqlElementObject || createSkeleton({
    extend: [{ props }, original],
    context
  })

  dobj.node = ref.current

  return (
    <Box
      tag="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      ref={ref}
      dangerouslySetInnerHTML={{ __html: original.html(dobj) }}
      domqlElementObject={dobj}
      {...dobj.props}
    />
  );
}
