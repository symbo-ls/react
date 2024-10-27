import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { create } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";

const orig = {
  tag: 'video',
  childExtend: {
    tag: 'source',
    attr: {
      src: ({ props }) => props.src,
      controls: ({ props }) => props.controls
    }
  },
  props: {controls: true},
  attr: {
    src: ({ props }) => props.src,
    autoplay: ({ props }) => props.autoplay,
    loop: ({ props }) => props.loop,
    poster: ({ props }) => props.poster,
    muted: ({ props }) => props.muted,
    preload: ({ props }) => props.preload,
    controls: ({ props }) => props.controls
  },
  __name: 'Video'
};

export function Video(props) {
  const ref_Box = useRef(null);
  function attr_src({ props }) {
    return props.src;
  }

  function attr_autoplay({ props }) {
    return props.autoplay;
  }

  function attr_loop({ props }) {
    return props.loop;
  }

  function attr_poster({ props }) {
    return props.poster;
  }

  function attr_muted({ props }) {
    return props.muted;
  }

  function attr_preload({ props }) {
    return props.preload;
  }

  function attr_controls({ props }) {
    return props.controls;
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
      tag="video"
      ref={ref_Box}
      {...dobj.props}
      src={attr_src(dobj)}
      autoplay={attr_autoplay(dobj)}
      loop={attr_loop(dobj)}
      poster={attr_poster(dobj)}
      muted={attr_muted(dobj)}
      preload={attr_preload(dobj)}
      controls={attr_controls(dobj)}
      domqlElementObject={dobj}
    />
  );
}
