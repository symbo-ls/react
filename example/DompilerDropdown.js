import * as React from 'react'
import { jsx } from 'react/jsx-runtime'
import { useRef, useContext } from 'react'
import { SymbolsProvider, Box, Flex } from '@symbo.ls/react'
import { createSkeleton } from 'smbls'
const orig = {
  extend: 'Flex',
  attr: {
    dropdown: true
  },
  props: {
    padding: '0 Y',
    maxHeight: 'G',
    flow: 'column',
    theme: 'quaternary',
    overflow: 'hidden auto',
    style: {
      listStyleType: 'none'
    },
    transition: 'B defaultBezier',
    transitionProperty: 'transform, opacity, visibility',
    '.hidden': {
      transform: 'translate3d(0,10%,0)',
      opacity: 0,
      visibility: 'hidden'
    }
  },
  One: {
    extend: {
      extend: 'Button',
      state: {
      },
      props: ({ key, state }) => {
        return ({
          active: state.active === key,
          position: 'relative',
          round: '0',
          align: 'center flex-end',
          flow: 'row-reverse',
          padding: 'Z2 C Z2 Y2',
          margin: '0',
          gap: 'Y2',
          theme: 'quaternary .child',
          ':hover': {
            style: {
              svg: {
                opacity: '0.5'
              }
            }
          },
          Icon: {
            active: state.active === key,
            name: 'checkmark',
            opacity: '0.1',
            '.active': {
              opacity: '1'
            }
          },
          ':not(:first-child)': {
            '@dark': {
              border: 'gray4 .65, solid'
            },
            '@light': {
              border: 'gray11, solid'
            },
            borderWidth: '1px 0 0'
          }
        })
      }
    }
  },
  one: {
    extend: {
      extend: 'Button',
      state: {
      },
      props: ({ key, state }) => {
        return ({
          active: state.active === key,
          position: 'relative',
          round: '0',
          align: 'center flex-end',
          flow: 'row-reverse',
          padding: 'Z2 C Z2 Y2',
          margin: '0',
          gap: 'Y2',
          theme: 'quaternary .child',
          ':hover': {
            style: {
              svg: {
                opacity: '0.5'
              }
            }
          },
          Icon: {
            active: state.active === key,
            name: 'checkmark',
            opacity: '0.1',
            '.active': {
              opacity: '1'
            }
          },
          ':not(:first-child)': {
            '@dark': {
              border: 'gray4 .65, solid'
            },
            '@light': {
              border: 'gray11, solid'
            },
            borderWidth: '1px 0 0'
          }
        })
      }
    }
  },
  two: {
    extend: {
      extend: 'Button',
      state: {
      },
      props: ({ key, state }) => {
        return ({
          active: state.active === key,
          position: 'relative',
          round: '0',
          align: 'center flex-end',
          flow: 'row-reverse',
          padding: 'Z2 C Z2 Y2',
          margin: '0',
          gap: 'Y2',
          theme: 'quaternary .child',
          ':hover': {
            style: {
              svg: {
                opacity: '0.5'
              }
            }
          },
          Icon: {
            active: state.active === key,
            name: 'checkmark',
            opacity: '0.1',
            '.active': {
              opacity: '1'
            }
          },
          ':not(:first-child)': {
            '@dark': {
              border: 'gray4 .65, solid'
            },
            '@light': {
              border: 'gray11, solid'
            },
            borderWidth: '1px 0 0'
          }
        })
      }
    },
    three: {
    }
  }
}
export const DropdownList = React.forwardRef((defProps, defRef) => {
  const defcontext = useContext(SymbolsProvider)
  const ref = defRef || useRef(null)
  const { domqlElementObject, ...props } = defProps
  let dobj
  try {
    dobj = domqlElementObject || createSkeleton({
      extend: [{
        props
      }, orig],
      context: defcontext
    })
  } catch (e) {
    console.log(e)
  }
  const dobj_one = dobj.One
  const ref_one = dobj_one.ref
  const dobj_two = dobj.two
  const ref_two = dobj_two.ref
  dobj.node = ref.current
  return jsx(Flex, {
    ref,
    domqlElementObject: dobj,
    ...dobj.props,
    children: [jsx(Box, {
      ref: ref_one,
      domqlElementObject: dobj_one,
      text: 213231312,
      ...dobj_one.props
    }), jsx(Box, {
      ref: ref_two,
      domqlElementObject: dobj_two,
      text: 213231312,
      ...dobj_two.props
    })],
    padding: '0 Y',
    maxHeight: 'G',
    flow: 'column',
    theme: 'quaternary',
    overflow: 'hidden auto',
    style: {
      listStyleType: 'none'
    },
    transition: 'B defaultBezier',
    transitionProperty: 'transform, opacity, visibility',
    '.hidden': {
      transform: 'translate3d(0,10%,0)',
      opacity: 0,
      visibility: 'hidden'
    }
  })
})
