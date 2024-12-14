import React, { useRef, useContext } from 'react'
import * as D from '@symbo.ls/button'
import { IconText } from '@symbo.ls/react-icon'
import { Box, SymbolsProvider } from '@symbo.ls/react'
import { create } from '@symbo.ls/create'
import { deepMerge } from '@domql/utils'
import { css } from '@emotion/css'
import { Svg } from '@symbo.ls/react-atoms'

export const Button = (props) => <IconText tag='button' {...props} />
Button.defaultProps = D.Button.props

const orig = {
  tag: 'nav',
  extend: {
    props: { display: 'flex' },
    class: {
      flow: ({ props }) => props.flow && { flexFlow: props.flow },
      wrap: ({ props }) => props.wrap && { flexWrap: props.wrap },
      align: ({ props }) => {
        if (typeof props.align !== 'string') { return }
        const [alignItems, justifyContent] = props.align.split(' ')
        return { alignItems, justifyContent }
      }
    }
  },
  childExtend: {
    extend: {
      extend: {
        extend: [
          {
            extend: {
              props: { display: 'flex' },
              class: {
                flow: ({ props }) => props.flow && { flexFlow: props.flow },
                wrap: ({ props }) => props.wrap && { flexWrap: props.wrap },
                align: ({ props }) => {
                  if (typeof props.align !== 'string') { return }
                  const [alignItems, justifyContent] = props.align.split(' ')
                  return { alignItems, justifyContent }
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
                const doesExist = parent.props.icon || parent.props.Icon || props.name || props.icon
                return doesExist
              }
            },
            text: ({ props }) => props.text,
            '.reversed': {
              props: { flow: 'row-reverse' }
            },
            '.vertical': {
              props: { flow: 'column' }
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
      props: {
        theme: 'primary',
        boxSize: 'fit-content',
        padding: 'Z2 A2',
        round: 'Z1',
        gap: 'X1',
        position: 'relative'
      },
      Icon: {
        props: { fontSize: 'B1' }
      },
      caption: {
        props: {
          text: 'Button',
          line_height: '1em',
          fontSize: 'Z2',
          letterSpacing: '.005em'
        }
      }
    },
    props: {
      Icon: { name: 'smile' },
      boxSize: 'fit-content fit-content',
      padding: 'Z2',
      theme: 'tertiary'
    },
    caption: null
  },
  __name: 'ButtonSet'
}

export function ButtonSet (props) {
  const ref_Box = useRef(null)
  function flow ({ props }) {
    return (
      props.flow && {
        flexFlow: props.flow
      }
    )
  }

  function wrap ({ props }) {
    return (
      props.wrap && {
        flexWrap: props.wrap
      }
    )
  }

  function align ({ props }) {
    if (typeof props.align !== 'string') return
    const [alignItems, justifyContent] = props.align.split(' ')
    return {
      alignItems,
      justifyContent
    }
  }

  const context = useContext(SymbolsProvider)

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

  if (props.logElement) { console.log(dobj) }

  return (
    <Box
      display='flex'
      tag='nav'
      ref={ref_Box}
      className={`${css(flow(dobj))} ${css(wrap(dobj))} ${css(align(dobj))}`}
      {...dobj.props}
      domqlElementObject={dobj}
    />
  )
}
