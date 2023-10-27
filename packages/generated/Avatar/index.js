import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { createSync } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";

const orig = {
  extend: {
    tag: 'img',
    attr: {
      src: ({ props }) => props.src,
      alt: ({ props }) => props.alt,
      title: ({ props }) => props.title || props.alt
    }
  },
  props: ({ key, props }) => ({
    display: "block",
    avatarType: "initials",
    borderRadius: "100%",
    boxSize: "C+X C+X",
    src: `https://api.dicebear.com/7.x/${props.avatarType || "initials"}/svg?seed=${props.key || key || "no-avatar"}`
  }),
  __name: 'Avatar'
};

export function Avatar(props) {
  const ref_Box = useRef(null);
  function attr_src({ props }) {
    return props.src;
  }

  function attr_alt({ props }) {
    return props.alt;
  }

  function attr_title({ props }) {
    return props.title || props.alt;
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
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      display="block"
      avatarType="initials"
      borderRadius="100%"
      boxSize="C+X C+X"
      src="https://api.dicebear.com/7.x/initials/svg?seed=44"
      tag="img"
      ref={ref_Box}
      {...dobj.props}
      src={attr_src(dobj)}
      alt={attr_alt(dobj)}
      title={attr_title(dobj)}
      domqlElementObject={dobj}
    />
  );
}

import { css } from "@emotion/css";

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
    childProps: {
      '@light': {
        border: 'X, var(--theme-document-light-background), solid'
      },
      '@dark': {
        border: 'X, var(--theme-document-dark-background), solid'
      },
      ':not(:last-child)': {margin: '0 -Y2 0 0'}
    }
  },
  childExtend: {
    extend: {
      tag: 'img',
      attr: {
        src: ({ props }) => props.src,
        alt: ({ props }) => props.alt,
        title: ({ props }) => props.title || props.alt
      }
    },
    props: ({ key, props }) => ({
    display: "block",
    avatarType: "initials",
    borderRadius: "100%",
    boxSize: "C+X C+X",
    src: `https://api.dicebear.com/7.x/${props.avatarType || "initials"}/svg?seed=${props.key || key || "no-avatar"}`
  }),
    __name: 'Avatar'
  },
  $setPropsCollection: ({ props }) => props.options,
  __name: 'AvatarBundle'
};

export function AvatarBundle(props) {
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

  function props_filter({ props }) {
    return props.options;
  }

  function setPropsCollection(parent2, childExtend, childrenOverrides) {
    if (!childrenOverrides || childrenOverrides.length === 0) return [];
    return childrenOverrides
      .map((value2) => ({
        props:
          value2 !== null && typeof value2 === "object"
            ? value2
            : {
                value: value2,
              },
      }))
      .map((ovr, idx) => ({
        key: idx.toString(),
        tag: childExtend.tag ?? "div",
        context: childExtend.context ?? parent2.context,
        state: childExtend.state,
        // NOTE: props skipped deliberately
        parent: parent2,
        ...ovr,
      }));
  }

  function attr_src({ props }) {
    return props.src;
  }

  function attr_alt({ props }) {
    return props.alt;
  }

  function attr_title({ props }) {
    return props.title || props.alt;
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
  
  if (props.logElement)
    console.log(dobj)
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      display="flex"
      tag="div"
      ref={ref_Box}
      childProps={{
        "@light": {
          border: "X, var(--theme-document-light-background), solid",
        },
        "@dark": {
          border: "X, var(--theme-document-dark-background), solid",
        },
        ":not(:last-child)": {
          margin: "0 -Y2 0 0",
        },
      }}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      {setPropsCollection(dobj, dobj["childExtend"], props_filter(dobj))?.map(
        (item) => (
          <Box
            display="block"
            avatarType="initials"
            borderRadius="100%"
            boxSize="C+X C+X"
            src="https://api.dicebear.com/7.x/initials/svg?seed=46"
            tag="img"
            {...dobj.props}
            src={attr_src(dobj)}
            alt={attr_alt(dobj)}
            title={attr_title(dobj)}
            domqlElementObject={dobj}
          />
        )
      )}
    </Box>
  );
}

import { Select } from "@symbo.ls/react";
import { useState } from "react";
import { Svg } from "@symbo.ls/react-atoms";

const orig_3 = {
  extend: {
    extend: [
      {
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
          align: 'center center',
          lineHeight: 1
        },
        Icon: {
          props: ({ parent, props }) => ({ icon: parent.props.icon }),
          if: ({ parent, props }) => {
      const doesExist = parent.props.icon || parent.props.Icon || props.name || props.icon;
      return doesExist;
    }
        },
        text: ({ props }) => props.text,
        '.reversed': {
          props: {flow: 'row-reverse'}
        },
        '.vertical': {
          props: {flow: 'column'}
        }
      },
      {
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
        tag: 'button',
        props: {
          fontSize: 'A',
          type: 'button',
          border: 'none',
          textDecoration: 'none',
          lineHeight: '1',
          whiteSpace: 'nowrap',
          fontFamily: 'inherit',
          style: {
            appearance: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit'
          }
        },
        attr: {
          type: ({ props }) => props.type
        }
      }
    ],
    tag: 'button',
    props: {
      fontSize: 'A',
      type: 'button',
      border: 'none',
      display: 'inline-flex',
      align: 'center center',
      textDecoration: 'none',
      lineHeight: '1',
      whiteSpace: 'nowrap',
      padding: 'Z A1',
      fontFamily: 'inherit',
      round: 'C2'
    },
    attr: {
      type: ({ props }) => props.type
    }
  },
  tag: 'label',
  state: {key: 'am'},
  props: {
    round: 'C',
    width: 'fit-content',
    gap: 'Y',
    padding: 'W2 A W2 W2',
    theme: 'tertiary',
    position: 'relative',
    cursor: 'pointer'
  },
  Avatar: {
    props: ({ state }) => ({
      key: state.key,
      boxSize: "B1",
      pointerEvents: "none"
    })
  },
  Select: {
    props: {
      outline: 'none',
      pointerEvents: 'All',
      appearance: 'none',
      border: 'none',
      width: '100%',
      height: '100%',
      background: 'none',
      color: 'currentColor',
      fontSize: 'A',
      lineHeight: 1,
      margin: '0 0 0 -B1+X',
      padding: '0 A 0 B1+X',
      ':focus-visible': {outline: 'none'}
    },
    childExtend: {tag: 'option'},
    $setPropsCollection: ({ parent, state }) => {
      if (!parent.props.options)
        return [];
      return parent.props.options.map((v) => {
        if (v.text === state.key)
          return { ...v, selected: true };
        return v;
      });
    },
    on: {
      change: (ev, { state }) => {
        console.log(state.key);
        state.update({ key: ev.target.value });
      }
    }
  },
  Icon: {name: 'arrowDown'},
  __name: 'AvatarChooser'
};

export function AvatarChooser(props) {
  const ref_Box = useRef(null);
  const ref_Avatar = useRef(null);
  const ref_Select = useRef(null);
  const ref_Svg = useRef(null);
  const ref_Box_2 = useRef(null);
  const [key, setKey] = useState(() => "am");

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

  function attr_type({ props }) {
    return props.type;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
  }

  function attr_src({ props: props4 }) {
    return props4.src;
  }

  function attr_alt({ props: props4 }) {
    return props4.alt;
  }

  function attr_title({ props: props4 }) {
    return props4.title || props4.alt;
  }

  function Select_onChange(ev, { state }) {
    console.log(state.key);
    setKey(ev.target.value);
    return;
  }

  function props_filter({ parent, state }) {
    if (!parent.props.options) return [];
    return parent.props.options.map((v) => {
      if (v.text === state.key)
        return {
          ...v,
          selected: true,
        };
      return v;
    });
  }

  function setPropsCollection(parent2, childExtend, childrenOverrides) {
    if (!childrenOverrides || childrenOverrides.length === 0) return [];
    return childrenOverrides
      .map((value2) => ({
        props:
          value2 !== null && typeof value2 === "object"
            ? value2
            : {
                value: value2,
              },
      }))
      .map((ovr, idx) => ({
        key: idx.toString(),
        tag: childExtend.tag ?? "div",
        context: childExtend.context ?? parent2.context,
        state: childExtend.state,
        // NOTE: props skipped deliberately
        parent: parent2,
        ...ovr,
      }));
  }

  function attr_value({ props: props4 }) {
    return props4.value;
  }

  function attr_selected({ props: props4 }) {
    return props4.selected;
  }

  function attr_disabled({ props: props4 }) {
    return props4.disabled;
  }

  function attr_name({ props: props4 }) {
    return props4.name;
  }

  function attr_placeholder_2({ props: props4 }) {
    return props4.placeholder;
  }

  function attr_tabIndex_2({ props: props4 }) {
    return props4.tabIndex;
  }

  function show_Svg({ parent, props }) {
    const doesExist =
      parent.props.icon || parent.props.Icon || props.name || props.icon;
    return doesExist;
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
  dobj.state.key = key
  const dobj_Avatar = dobj["Avatar"]
  dobj_Avatar.node = ref_Avatar.current
  const dobj_Select = dobj["Select"]
  dobj_Select.node = ref_Select.current
  
  if (props.logElement)
    console.log(dobj)
  const dobj_Svg = dobj["Icon"]
  dobj_Svg.node = ref_Svg.current
  const dobj_Box = dobj["Icon"]["name"]
  dobj_Box.node = ref_Box_2.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      round="C"
      width="fit-content"
      gap="Y"
      padding="W2 A W2 W2"
      theme="tertiary"
      position="relative"
      cursor="pointer"
      fontSize="A"
      type="button"
      border="none"
      display="inline-flex"
      align="center center"
      textDecoration="none"
      lineHeight="1"
      whiteSpace="nowrap"
      fontFamily="inherit"
      outline="solid, 0, blue .3"
      tag="label"
      ref={ref_Box}
      style={{
        appearance: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
      }}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      type={attr_type(dobj)}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    >
      <Avatar
        key="am"
        boxSize="B1"
        pointerEvents="none"
        display="block"
        avatarType="initials"
        borderRadius="100%"
        src="https://api.dicebear.com/7.x/initials/svg?seed=am"
        ref={ref_Avatar}
        {...dobj_Avatar.props}
        src={attr_src(dobj_Avatar)}
        alt={attr_alt(dobj_Avatar)}
        title={attr_title(dobj_Avatar)}
        domqlElementObject={dobj_Avatar}
      />
      <Select
        outline="none"
        pointerEvents="All"
        appearance="none"
        border="none"
        width="100%"
        height="100%"
        background="none"
        color="currentColor"
        fontSize="A"
        margin="0 0 0 -B1+X"
        padding="0 A 0 B1+X"
        boxSizing="border-box"
        cursor="pointer"
        ref={ref_Select}
        lineHeight={1}
        onChange={(ev) => Select_onChange(ev, dobj_Select)}
        {...dobj_Select.props}
        name={attr_name(dobj_Select)}
        disabled={attr_disabled(dobj_Select)}
        placeholder={attr_placeholder_2(dobj_Select)}
        tabIndex={attr_tabIndex_2(dobj_Select)}
        domqlElementObject={dobj_Select}
      >
        {setPropsCollection(
          dobj_Select,
          dobj["Select"]["childExtend"],
          props_filter(dobj_Select)
        )?.map((item) => (
          <Box
            value=""
            selected=""
            disabled=""
            tag="option"
            {...dobj.props}
            value={attr_value(dobj)}
            selected={attr_selected(dobj)}
            disabled={attr_disabled(dobj)}
            domqlElementObject={dobj}
          />
        ))}
      </Select>
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
          dangerouslySetInnerHTML={{ __html: html(dobj_Svg) }}
          {...dobj_Svg.props}
          domqlElementObject={dobj_Svg}
        >
          <Box
            tag="string"
            ref={ref_Box_2}
            {...dobj_Box.props}
            domqlElementObject={dobj_Box}
          />
        </Svg>
      ) : null}
    </Box>
  );
}

const orig_4 = {
  props: {
    boxSize: 'fit-content',
    position: 'relative',
    round: '100%'
  },
  Avatar: {},
  StatusIndicator: {
    position: 'absolute',
    bottom: 'V',
    right: '0'
  },
  __name: 'AvatarIndicator'
};

export function AvatarIndicator(props) {
  const ref_Box = useRef(null);
  const ref_Box_2 = useRef(null);
  const ref_Box_3 = useRef(null);
  function attr_src({ props: props4 }) {
    return props4.src;
  }

  function attr_alt({ props: props4 }) {
    return props4.alt;
  }

  function attr_title({ props: props4 }) {
    return props4.title || props4.alt;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...createSync({
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
  const dobj_Box = dobj["Avatar"]
  dobj_Box.node = ref_Box_2.current
  const dobj_Box_2 = dobj["StatusIndicator"]
  dobj_Box_2.node = ref_Box_3.current
  
  if (props.logElement)
    console.log(dobj)

  return (
    <Box
      boxSize="fit-content"
      position="relative"
      round="100%"
      tag="div"
      ref={ref_Box}
      {...dobj.props}
      domqlElementObject={dobj}
    >
      <Box
        display="block"
        avatarType="initials"
        borderRadius="100%"
        boxSize="C+X C+X"
        src="https://api.dicebear.com/7.x/initials/svg?seed=Avatar"
        tag="img"
        ref={ref_Box_2}
        {...dobj_Box.props}
        src={attr_src(dobj_Box)}
        alt={attr_alt(dobj_Box)}
        title={attr_title(dobj_Box)}
        domqlElementObject={dobj_Box}
      />
      <Box
        position="absolute"
        bottom="V"
        right="0"
        boxSize="Z"
        background="green2"
        round="100%"
        border="solid, black 0"
        borderWidth="1px"
        tag="div"
        ref={ref_Box_3}
        {...dobj_Box_2.props}
        domqlElementObject={dobj_Box_2}
      />
    </Box>
  );
}
