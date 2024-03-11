import React, { useRef, useContext } from 'react';
import { deepMerge } from '@domql/utils';

// domql stuff
import { createSkeleton } from '@symbo.ls/create';
import { exetuteClassPerComponent } from 'css-in-props';
import { exetuteAttrPerComponent } from 'attrs-in-props';

// smbls uikit
import { Flex, Svg as SvgD } from '@symbo.ls/atoms';
import { css } from '@emotion/css';

// react uikit
import { Box, SymbolsProvider } from '@symbo.ls/react';
import { Svg } from "@symbo.ls/react-atoms";

const orig = {
  extend: 'Flex',
  props: {
    align: 'center flex-end',
    gap: 'X2',
    margin: 'auto - -',
    padding: 'Y2 X2'
  },

  childExtend: {
    extend: 'Button',
    props: {
      textTransform: 'uppercase',
      background: 'transparent',
      '@dark': {
        theme: 'primary @dark .color-only'
      },
      '@light': {
        theme: 'primary @light .color-only'
      },
      '&': {
        padding: 'Z A'
      },
      ':hover': {
        theme: 'tertiary'
      },
      ':active': {
        background: 'white .1'
      }
    }
  },

  cancel: {
    text: 'cancel'
  },
  ok: {
    text: 'ok'
  }
};

export function DialogFooter(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Svg_2 = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props

  const dobj = createSkeleton({
    ...deepMerge({ props: restProps }, orig),
    context
  })

  dobj.node = ref_Box.current

  dobj.props = {
    ...dobj.props,
    ...props
  }
  const dobj_Box = dobj["cancel"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["ok"]
  dobj_Box_2.node = ref_Box_3.current
  const dobj_Svg = dobj["cancel"]["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Svg_2 = dobj["ok"]["Icon"]
  dobj_Svg_2.node = ref_Svg_2.current
  
  if (props.logElement) console.log(dobj)

  return (
    <Box
      align="center flex-end"
      gap="X2"
      margin="auto - -"
      padding="Y2 X2"
      display="flex"
      tag="div"
      ref={ref_Box}
      className={`${css(exetuteClassPerComponent(Flex, dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        fontSize="Z"
        textTransform="uppercase"
        background="transparent"
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
        ref={ref_Box_2}
        style={{
          appearance: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
        className={`${css(exetuteClassPerComponent(Flex, dobj))}`}
        {...dobj_Box.props}
        {...exetuteAttrPerComponent(Flex, dobj)}
        domqlElementObject={dobj_Box}
      >
        {show_Svg(dobj_Svg) ? (
          <Svg
            width="A"
            height="A"
            display="inline-block"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref_Svg}
            style={{
              fill: "currentColor",
              "*": {
                fill: "currentColor",
              },
            }}
            dangerouslySetInnerHTML={{ __html: SvgD.html(dobj_Svg) }}
            {...dobj_Svg.props}
            domqlElementObject={dobj_Svg}
          />
        ) : null}
      </Box>
      <Box
        fontSize="Z"
        textTransform="uppercase"
        background="transparent"
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
        ref={ref_Box_3}
        className={`${css(exetuteClassPerComponent(Flex, dobj))}`}
        {...dobj_Box_2.props}
        {...exetuteAttrPerComponent(Flex, dobj)}
        domqlElementObject={dobj_Box_2}
      >
        {show_Svg_2(dobj_Svg_2) ? (
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
            ref={ref_Svg_2}
            dangerouslySetInnerHTML={{ __html: SvgD.html(dobj_Svg_2) }}
            {...dobj_Svg_2.props}
            domqlElementObject={dobj_Svg_2}
          />
        ) : null}
      </Box>
    </Box>
  );
}
