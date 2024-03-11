import React, { useRef, useContext } from 'react';
import { deepMerge } from '@domql/utils';

// domql stuff
import { createSkeleton } from '@symbo.ls/create';
import { exetuteClassPerComponent } from 'css-in-props';

// original smbls uikit
// usable to reuse components content
import { Flex } from '@symbo.ls/atoms';
import { css } from '@emotion/css';

// reusing other generated react components
// '@symbo.ls/react' is symlinked to '../', so technically Box is '../Box'
// so as this file should be in packages, relative would be 'packages/generated/...'
import { Box, SymbolsProvider } from '@symbo.ls/react'; 

// original domql component code
const orig = {
  tag: 'nav',
  extend: 'Flex',
  childExtend: 'SquareButton'
}

export function ButtonSet(props) {
  // hooks that handle react API
  // Most domql functionalities match React API, so we simply
  // during the compilation rewrite it the React way
  const ref_Box = useRef(null);
  const context = useContext(SymbolsProvider);
  
  // compared to original domql component, after we run in create function, 
  // it mutates the object and puts in computed design system properties and 
  // some domql enabled API that react does not have
  // 
  // when we run `createSkeleton` instead of `create`, DOMQL skips rendering part
  // and simply retuns the schemed tree that it needs to function.
  const { domqlElementObject, children, ...restProps } = props
  const dobj = createSkeleton({
    ...deepMerge({ props: restProps }, orig),
    context
  })

  // Since DOM nodes are handled by React, and `dobj` does not have DOM nodes, 
  // we remap and reassing nodes to the domql tree. It's usable for example in
  // events like onClick(event, element) => element.node // >> accessing node inside element.
  dobj.node = ref_Box.current
  dobj.props = { ...dobj.props, ...props }
  
  // To be able to debug how domql object looks like
  if (props.logElement) console.log(dobj)

  // Kalduna mistakenly used `Box` component, as it should be `Flex` from original objects extend.
  // `Flex` component has related properties inside and would not require passing `className`,
  return (
    <Box
      display="flex"
      tag="nav"
      ref={ref_Box}
      // old way
      // className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`} 
      className={`${css(exetuteClassPerComponent(Flex, dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );

  // Every component whether is handmade or generated returns `Box`. So Flex itself returns `Box`.
  // More correct would be this, as `Flex` is already wrapping `Box` anyways.
  return (
    <Flex
      tag="nav"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );

  // In case we have array of extend, like ['Buttom', 'Flex'], it would take first one 
  // as the returning component and pass data from the second one as properties.
  // As in react its impossible to merge two components, we do this workaround to act like merge.
  return (
    <Button
      tag="nav"
      ref={ref_Box}
      {...dobj.props}
      className={`${css(exetuteClassPerComponent(Flex, dobj))}`} // inherited from Flex
      domqlElementObject={dobj}
    />
  )
}