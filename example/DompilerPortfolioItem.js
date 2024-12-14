import * as React from 'react'
import { jsx } from 'react/jsx-runtime'
import { useRef, useContext } from 'react'
import { SymbolsProvider, title, paragraph, Hr, Flex, Link } from '@symbo.ls/react'
import { createSkeleton } from 'smbls'
const orig = {
  extend: ['Flex', 'Link'],
  state: { title: 'asd', url: 'asd', description: 'asddsadsa' },
  props: ({ state }) => {
    return ({
      flexFlow: 'column',
      gap: 'B',
      padding: '0 B2',
      href: state.url,
      color: 'currentColor',
      ':last-child': {
        style: {
          hr: {
            display: 'none'
          }
        }
      },
      target: '_blank',
      $href: {
        style: {
          cursor: 'pointer'
        },
        ':hover': {
          style: {
            h6: {
              textDecoration: 'underline'
            }
          }
        }
      }
    })
  },
  childExtend: {
    props: {
      margin: '0'
    }
  },
  title: {
    tag: 'h6',
    props: {
      fontWeight: 600
    },
    text: ({ state }) => {
      return state.title
    }
  },
  paragraph: {
    props: {
      fontWeight: 400
    },
    text: ({ state }) => {
      return state.description
    }
  },
  Hr: {
    margin: '0 -B2'
  }
}

export const PortfolioItem = React.forwardRef((defProps, defRef) => {
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
  console.log(dobj)
  dobj.node = ref.current
  const ref_title = defRef || useRef(null)
  const dobj_title = dobj.title
  dobj_title.node = ref_title.current
  const ref_paragraph = defRef || useRef(null)
  const dobj_paragraph = dobj.paragraph
  dobj_paragraph.node = ref_paragraph.current
  const ref_Hr = defRef || useRef(null)
  const dobj_Hr = dobj.Hr
  dobj_Hr.node = ref_Hr.current
  return jsx(Flex, {
    innerRef: ref,
    domqlElementObject: dobj,
    ...Link.props,
    ...Link.attr,
    ...dobj.props
    // type: dobj.attr.type(dobj, dobj.state, dobj.context),
  })
})
