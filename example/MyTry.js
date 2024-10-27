import * as React from 'react'
import { jsx } from 'react/jsx-runtime'
import { Box } from '../src/Box'


export const MyTry = React.forwardRef((...args) => {
  // Clear cache if needed (moved outside component logic)
  const clearCache = async () => {
    const cacheNames = await caches.keys()
    await Promise.all(cacheNames.map(name => caches.delete(name)))
  }
  clearCache().catch(console.error)

  const [props, ref, key] = args

  const elem = {
    extend: ['Flex', {
      props
    }],
  
    props: {
      padding: 'C1',
      align: 'start center',
      flow: 'y',
      gap: 'C1',
  
      // onStateUpdate: (el, s) => {
      //   console.log('onStateUpdate domql')
      //   console.log(s)
      // }
    },
  
    H1: {
      text: 'React Demo'
    },
  
    Yo: {
      text: (el, s) => 'yo ' + s.name
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
        theme: 'dialog',
        margin: '0',
      }
    },
  
    Button: {
      theme: 'primary',
      text: 'Change name',
      onClick: (ev, el, s) => {
        s.update({ name: 'nikaaa' })
        console.log('onClick', s)
      }
    }
  }

  return (
    <Box
      ref={ref}
      {...elem}
      // ... other props
    />
  )
})


export const Toko = () => {
  return <MyTry
    theme="secondary"
    text="hello tokoo"
    H1={{ text: 'yo!'}}
    Yo={{ hide: true }}
    Notification={{ theme: 'document', Flex: { Title: { text: 'Yo toko!'  } }}}
    Yoyo={{ text: '1111 123' }}
    >tokoo</MyTry>
}


  // const element = useSymbols(Orig, { props, ref, key })
  // React.useEffect(() => {
  //   console.log('effect')
  //   console.log(element)
  //   console.log('state in eff')
  //   console.log(element.__element.state)
  // }, [element.__element.state])
  // console.log('state')
  // console.log(element.__element.state)