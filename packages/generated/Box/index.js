import React, { forwardRef, useRef, useContext } from 'react';
import { transformEmotion, transformClassname } from 'css-in-props';
import { useGlobalTheme, useSymbols } from '@symbo.ls/react-provider';
import { isArray, deepMerge } from '@domql/utils';
import { filterAttributesByTagName } from 'attrs-in-props';
import { createSync } from '@symbo.ls/create';
import { SymbolsProvider } from '@symbo.ls/react';

export const Box = forwardRef((props, ref) => {
  const context = useSymbols()
  const [theme, setTheme] = useGlobalTheme() // eslint-disable-line no-unused-vars

  const domqlElement = props.domqlElementObject || createSync({
    context
  }, { domqlOptions: { onlyResolveExtends: true } })

  const element = {
    ...domqlElement,
    context,
    node: ref,
    class: {}
  }
  const excludedProps = {}

  const transformedProps = transformClassname(props, context, undefined, excludedProps, element)
  const propsClass = transformEmotion(transformedProps)

  let {
    children,
    tag,
    className,
    text,
    innerRef,
    domqlElementObject,
    ...rest
  } = excludedProps

  const allowedAttributes = filterAttributesByTagName(tag, rest)

  if (props.text) {
    if (isArray(children)) children = children.concat(text)
    else children = [text]
  }

  return React.createElement(
    tag || 'div',
    {
      ...allowedAttributes,
      className: `${className ?? ''} ${propsClass}`,
      ref
    },
    children
  )
})
const orig = {
  props: {round: '100%'},
  __name: 'Circle'
};
export function Circle(props) {
  const ref_Box = useRef(null);

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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      round="100%"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}