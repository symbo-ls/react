// Original: DOMQL
const original = {
  extend: 'Svg',
  props: ({ key, props, parent, context }) => {
    const { ICONS, useIconSprite, verbose } = context && context.designSystem
    const { toCamelCase } = context && context.utils
    const iconName = props.name || props.icon || key
    const camelCase = toCamelCase(isString(iconName) ? iconName : key)

    const isArray = camelCase.split(/([a-z])([A-Z])/g)

    let activeIconName
    if (props.active) {
      activeIconName = props['.active'].name || props['.active'].icon
    }
    if (
      parent &&
      parent.props &&
      parent.props.active &&
      parent.props['.active'] &&
      parent.props['.active'].icon
    ) {
      activeIconName = parent.props['.active'].icon.name || parent.props['.active'].icon.icon || parent.props['.active'].icon
    }

    let validIconName
    if (ICONS[activeIconName]) validIconName = activeIconName
    if (ICONS[camelCase]) validIconName = camelCase
    else if (ICONS[isArray[0] + isArray[1]]) validIconName = isArray[0] + isArray[1]
    else if (ICONS[isArray[0]]) validIconName = isArray[0]
    else {
      if (verbose) console.warn('Can\'t find icon:', iconName, validIconName)
    }

    const iconFromLibrary = ICONS[validIconName]
    const directSrc = (parent && parent.props && parent.props.src) || props.src

    return {
      width: 'A',
      height: 'A',
      display: 'inline-block',
      spriteId: useIconSprite && validIconName,
      src: iconFromLibrary || directSrc || ICONS.noIcon,
      style: { fill: 'currentColor' }
    }
  },
  attr: { viewBox: '0 0 24 24' }
}

// Converted: React
import * as React from "react";
import { useRef, useContext } from "react";
import { createSkeleton } from "@symbo.ls/create";
import { SymbolsProvider } from "@symbo.ls/react";

import { Svg } from "./0. Svg";

export default function Icon(props) {
  const context = useContext(SymbolsProvider);
  const ref = useRef(null);
  
  const { domqlElementObject, ...props } = props
  const dobj = domqlElementObject || createSkeleton({
    extend: [{ props }, original],
    context
  })

  dobj.node = ref.current

  return (
    <Svg
      width="A"
      height="A"
      display="inline-block"
      viewBox="0 0 24 24"
      ref={ref}
      domqlElementObject={dobj}
      {...dobj.props}
    />
  );
}