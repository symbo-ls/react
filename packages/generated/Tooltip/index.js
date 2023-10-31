import * as React from "react";
import { Box, P, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";
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
    background: 'black',
    color: 'white',
    flow: 'column',
    shape: 'tooltip',
    shapeDirection: 'left',
    padding: 'Z1 A',
    round: 'Y2',
    width: 'fit-content',
    minWidth: 'D2',
    maxWidth: 'F2',
    gap: 'X',
    textAlign: 'center'
  },
  attr: {tooltip: true},
  Title: {
    if: ({ parent, props }) => (0, import_utils8.isDefined)(parent.props.title) || props.text,
    props: ({ parent }) => ({
      width: "fit-content",
      fontWeight: 500,
      color: "gray12",
      text: parent.props.title
    })
  },
  P: {
    if: ({ parent, props }) => (0, import_utils8.isDefined)(parent.props.description) || props.text,
    props: ({ parent }) => ({
      width: "fit-content",
      fontSize: "Z2",
      margin: "0",
      color: "gray6",
      fontWeight: "400",
      text: parent.props.description
    })
  },
  __name: 'Tooltip'
};

export function Tooltip(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_P = useRef(null);
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

  function show_Box({ parent, props }) {
    return (0, import_utils8.isDefined)(parent.props.title) || props.text;
  }

  function show_P({ parent, props }) {
    return (0, import_utils8.isDefined)(parent.props.description) || props.text;
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
  const dobj_Box = dobj["Title"]
  dobj_Box.node = ref_Box_2.current
  const dobj_P = dobj["P"]
  dobj_P.node = ref_P.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      background="black"
      color="white"
      flow="column"
      shape="tooltip"
      shapeDirection="left"
      padding="Z1 A"
      round="Y2"
      width="fit-content"
      minWidth="D2"
      maxWidth="F2"
      gap="X"
      textAlign="center"
      display="flex"
      tag="div"
      tooltip="true"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      {show_Box(dobj_Box) ? (
        <Box
          width="fit-content"
          color="gray12"
          tag="div"
          ref={ref_Box_2}
          fontWeight={500}
          {...dobj_Box.props}
          domqlElementObject={dobj_Box}
        />
      ) : null}
      {show_P(dobj_P) ? (
        <P
          width="fit-content"
          fontSize="Z2"
          margin="0"
          color="gray6"
          fontWeight="400"
          ref={ref_P}
          {...dobj_P.props}
          domqlElementObject={dobj_P}
        />
      ) : null}
    </Box>
  );
}

const orig_2 = {
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
      background: 'black',
      color: 'white',
      flow: 'column',
      shape: 'tooltip',
      shapeDirection: 'left',
      padding: 'Z1 A',
      round: 'Y2',
      width: 'fit-content',
      minWidth: 'D2',
      maxWidth: 'F2',
      gap: 'X',
      textAlign: 'center'
    },
    attr: {tooltip: true},
    Title: {
      if: ({ parent, props }) => (0, import_utils8.isDefined)(parent.props.title) || props.text,
      props: ({ parent }) => ({
      width: "fit-content",
      fontWeight: 500,
      color: "gray12",
      text: parent.props.title
    })
    },
    P: {
      if: ({ parent, props }) => (0, import_utils8.isDefined)(parent.props.description) || props.text,
      props: ({ parent }) => ({
      width: "fit-content",
      fontSize: "Z2",
      margin: "0",
      color: "gray6",
      fontWeight: "400",
      text: parent.props.description
    })
    },
    __name: 'Tooltip'
  },
  props: ({ props }) => ({
    position: "absolute",
    pointerEvents: "none",
    opacity: "0",
    visibility: "hidden",
    transition: "C defaultBezier opacity, C defaultBezier visibility, B defaultBezier transform",
    ...props.shapeDirection === "top" ? {
      top: "112%",
      left: "50%",
      transform: "translate3d(-50%,10%,0)",
      ".active": {
        transform: "translate3d(-50%,0,0)",
        opacity: 1,
        visibility: "visible"
      }
    } : props.shapeDirection === "right" ? {
      transform: "translate3d(10%,-50%,0)",
      right: "112%",
      top: "50%",
      ".active": {
        transform: "translate3d(0%,-50%,0)",
        opacity: 1,
        visibility: "visible"
      }
    } : props.shapeDirection === "bottom" ? {
      transform: "translate3d(-50%,-10%,0)",
      bottom: "112%",
      left: "50%",
      ".active": {
        transform: "translate3d(-50%,0,0)",
        opacity: 1,
        visibility: "visible"
      }
    } : {
      transform: "translate3d(10%,-50%,0)",
      left: "112%",
      top: "50%",
      ".active": {
        transform: "translate3d(0%,-50%,0)",
        opacity: 1,
        visibility: "visible"
      }
    }
  }),
  __name: 'TooltipHidden'
};

export function TooltipHidden(props) {
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

  function show_Box({ parent, props }) {
    return (0, import_utils8.isDefined)(parent.props.title) || props.text;
  }

  function show_Box_2({ parent, props }) {
    return (0, import_utils8.isDefined)(parent.props.description) || props.text;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...createSync({
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
  const dobj_Box = dobj["Title"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["P"]
  dobj_Box_2.node = ref_Box_3.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      position="absolute"
      pointerEvents="none"
      opacity="0"
      visibility="hidden"
      transition="C defaultBezier opacity, C defaultBezier visibility, B defaultBezier transform"
      transform="translate3d(10%,-50%,0)"
      left="112%"
      top="50%"
      background="black"
      color="white"
      flow="column"
      shape="tooltip"
      shapeDirection="left"
      padding="Z1 A"
      round="Y2"
      width="fit-content"
      minWidth="D2"
      maxWidth="F2"
      gap="X"
      textAlign="center"
      display="flex"
      tag="div"
      tooltip="true"
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      {show_Box(dobj_Box) ? (
        <Box
          width="fit-content"
          color="gray12"
          tag="div"
          ref={ref_Box_2}
          fontWeight={500}
          {...dobj_Box.props}
          domqlElementObject={dobj_Box}
        />
      ) : null}
      {show_Box_2(dobj_Box_2) ? (
        <Box
          width="fit-content"
          fontSize="Z2"
          margin="0"
          color="gray6"
          fontWeight="400"
          tag="p"
          ref={ref_Box_3}
          {...dobj_Box_2.props}
          domqlElementObject={dobj_Box_2}
        />
      ) : null}
    </Box>
  );
}

const orig_3 = {
  props: ({ Tooltip: Tooltip2, TooltipHidden: TooltipHidden2 }) => {
    const TooltipElem = Tooltip2 || TooltipHidden2;
    const TooltipActive = TooltipElem && TooltipElem.props[".active"];
    return {
      position: "relative",
      zIndex: 999,
      style: {
        "&:hover, &:focus-visible": {
          zIndex: 1e3,
          "& [tooltip]": TooltipActive || {
            transform: "translate3d(-50%,0,0)",
            opacity: 1,
            visibility: "visible"
          }
        }
      }
    };
  },
  __name: 'TooltipParent'
};

export function TooltipParent(props) {
  const ref_Box = useRef(null);

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...createSync({
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
      position="relative"
      tag="div"
      ref={ref_Box}
      zIndex={999}
      style={{
        "&:hover, &:focus-visible": {
          zIndex: 1000,
          "& [tooltip]": {
            transform: "translate3d(-50%,0,0)",
            opacity: 1,
            visibility: "visible",
          },
        },
      }}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
