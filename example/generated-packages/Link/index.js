import * as React from "react";
import { Box, SymbolsProvider } from "@symbo.ls/react";
import { useRef, useContext } from "react";
import { create } from "@symbo.ls/create";
import { deepMerge } from "@domql/utils";

const orig = {
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
  },
  __name: 'Link'
};

export function Link(props) {
  const ref_Box = useRef(null);
  function attr_href(el) {
    const { context: ctx } = el;
    const { exec: exec2 } = ctx.utils;
    return exec2(el.props.href, el) || exec2(el.props, el).href;
  }

  function attr_target({ props }) {
    return props.target;
  }

  function attr_aria_label({ props }) {
    return props.aria ? props.aria.label : props.text;
  }

  function attr_draggable({ props }) {
    return props.draggable;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
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
      fontWeight="bold"
      textDecoration="none"
      color="currentColor"
      border="none"
      outline="solid, 0, blue .3"
      tag="a"
      ref={ref_Box}
      aria={{}}
      {...dobj.props}
      href={attr_href(dobj)}
      target={attr_target(dobj)}
      aria-label={attr_aria_label(dobj)}
      draggable={attr_draggable(dobj)}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    />
  );
}

const orig_2 = {
  extend: [
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
      },
      __name: 'Link'
    },
    {
      on: {
        click: (event, el) => {
      const { props, context: ctx } = el;
      const { href } = props;
      if (!href)
        return;
      const { utils, snippets, routerOptions } = ctx;
      const root = el.__ref.__root;
      const linkIsExternal = href.includes("http://") || href.includes("https://") || href.includes("mailto:") || href.includes("tel:");
      const options = props.routerOptions || routerOptions || {
        scrollToOptions: { behaviour: "instant" }
      };
      if (href && !linkIsExternal) {
        (snippets.router || utils.router || import_router.router)(href, root, {}, options);
        event.preventDefault();
      }
    }
      }
    }
  ],
  __name: 'RouteLink'
};

export function RouteLink(props) {
  const ref_Box = useRef(null);
  function RouteLink_onClick(event, el) {
    const { props, context: ctx } = el;
    const { href } = props;
    if (!href) return;
    const { utils, snippets, routerOptions } = ctx;
    const root = el.__ref.__root;
    const linkIsExternal =
      href.includes("http://") ||
      href.includes("https://") ||
      href.includes("mailto:") ||
      href.includes("tel:");
    const options = props.routerOptions ||
      routerOptions || {
        scrollToOptions: {
          behaviour: "instant",
        },
      };
    if (href && !linkIsExternal) {
      (snippets.router || utils.router || import_router.router)(
        href,
        root,
        {},
        options
      );
      event.preventDefault();
    }
  }

  function attr_href(el) {
    const { context: ctx } = el;
    const { exec: exec2 } = ctx.utils;
    return exec2(el.props.href, el) || exec2(el.props, el).href;
  }

  function attr_target({ props }) {
    return props.target;
  }

  function attr_aria_label({ props }) {
    return props.aria ? props.aria.label : props.text;
  }

  function attr_draggable({ props }) {
    return props.draggable;
  }

  function attr_placeholder({ props }) {
    return props.placeholder;
  }

  function attr_tabIndex({ props }) {
    return props.tabIndex;
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
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

  return (
    <Box
      fontWeight="bold"
      textDecoration="none"
      color="currentColor"
      border="none"
      outline="solid, 0, blue .3"
      tag="a"
      ref={ref_Box}
      aria={{}}
      onClick={(ev) => RouteLink_onClick(event, dobj)}
      {...dobj.props}
      href={attr_href(dobj)}
      target={attr_target(dobj)}
      aria-label={attr_aria_label(dobj)}
      draggable={attr_draggable(dobj)}
      placeholder={attr_placeholder(dobj)}
      tabIndex={attr_tabIndex(dobj)}
      domqlElementObject={dobj}
    />
  );
}

const orig_3 = {
  on: {
    click: (event, el) => {
      const { props, context: ctx } = el;
      const { href } = props;
      if (!href)
        return;
      const { utils, snippets, routerOptions } = ctx;
      const root = el.__ref.__root;
      const linkIsExternal = href.includes("http://") || href.includes("https://") || href.includes("mailto:") || href.includes("tel:");
      const options = props.routerOptions || routerOptions || {
        scrollToOptions: { behaviour: "instant" }
      };
      if (href && !linkIsExternal) {
        (snippets.router || utils.router || import_router.router)(href, root, {}, options);
        event.preventDefault();
      }
    }
  },
  __name: 'RouterLink'
};

export function RouterLink(props) {
  const ref_Box = useRef(null);
  function RouterLink_onClick(event, el) {
    const { props, context: ctx } = el;
    const { href } = props;
    if (!href) return;
    const { utils, snippets, routerOptions } = ctx;
    const root = el.__ref.__root;
    const linkIsExternal =
      href.includes("http://") ||
      href.includes("https://") ||
      href.includes("mailto:") ||
      href.includes("tel:");
    const options = props.routerOptions ||
      routerOptions || {
        scrollToOptions: {
          behaviour: "instant",
        },
      };
    if (href && !linkIsExternal) {
      (snippets.router || utils.router || import_router.router)(
        href,
        root,
        {},
        options
      );
      event.preventDefault();
    }
  }

  const context = useContext(SymbolsProvider);
  
  const { domqlElementObject, children, ...restProps } = props
  const cleanProps = deepMerge({}, { props: restProps }, ['domqlElementObject', 'children'])
  const dobj = {
    ...create({
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
      tag="div"
      ref={ref_Box}
      onClick={(ev) => RouterLink_onClick(event, dobj)}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  );
}
