import * as React from 'react'
import { jsx } from 'react/jsx-runtime'
import { useSymbols, createComponent, useGlobalState, useRoot, StateWatcher } from '../src/Provider'
import { Box } from '../src/Box'

const Orig = {
  extend: 'Flex',

  props: {
    padding: 'C1',
    align: 'start center',
    flow: 'y',
    gap: 'C1'

    // onStateUpdate: (el, s) => {
    //   console.log('onStateUpdate domql')
    //   console.log(s)
    // }
  },

  H1: {
    text: 'React Demo'
  },

  Yo: {
    text: (el, s) => console.log('text',s) || 'yo ' + s.name
  },

  Notification: {
    IconText: {
      icon: 'smile'
    }
  },

  Field: {
    Input: {
      placeholder: 'Your name',
      defaultValue: el => el.state.name
    },
    onInput: (ev, el, s) => {
      s.update({ name: ev.target.value })
      console.log('onInput', s)
    }
  },

  Box: {
    extend: [
      'Flex',
    ],
    props: {
      align: 'flex-start',
      gap: 'Y2',
      '@tabletS': {
        fontSize: 'Z2',
      },
      '@mobileS': {
        fontSize: 'Z1',
      },
    },
    Avatar: {},
    P: {
      text: 'Can you please review the latest design?',
      padding: 'Z1 A',
      round: 'A',
      theme: 'dialog-elevated',
      margin: '0',
    }
  },

  Button: {
    Icon: { name: 'smile' },
    theme: 'primary',
    text: 'Change name',
    onClick: (ev, el, s) => {
      s.update({ name: 'nikaaa' })
      console.log('onClick', s)
    }
  }
}

export const MyTry = React.forwardRef((...args) => {
  // Clear cache if needed (moved outside component logic)
  const clearCache = async () => {
    const cacheNames = await caches.keys()
    await Promise.all(cacheNames.map(name => caches.delete(name)))
  }
  clearCache().catch(console.error)

  const [props, ref, key] = args
  // const element = useSymbols(Orig, { props, ref, key })
  // React.useEffect(() => {
  //   console.log('effect')
  //   console.log(element)
  //   console.log('state in eff')
  //   console.log(element.__element.state)
  // }, [element.__element.state])
  // console.log('state')
  // console.log(element.__element.state)
  return (
    <StateWatcher
      ref={ref}
      orig={Orig}
      // ... other props
    />
  )
})
