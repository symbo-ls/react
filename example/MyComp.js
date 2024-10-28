import * as React from 'react'
import { jsx } from 'react/jsx-runtime'
import { Box } from '@symbo.ls/react-box'
import { useSymbolsContext } from '@symbo.ls/react-provider'
import { User } from '@symbo.ls/user'

export const Main = () => {
  const name = 'toko'
  const [svtate, setSvtate] = React.useState()
  return (
    <div className='primary pl6' onClick={e => setSvtate}>{svtate}</div>
  )
}

export const Svinchy = () => {
  const name = 'toko'
  const [svtate, setSvtate] = React.useState()
  return (
    <Main onClick={e => setSvtate}>{svtate}</Main>
  )
}

export const SmblsTestComp = React.forwardRef((...args) => {
  // Clear cache if needed (moved outside component logic)
  const clearCache = async () => {
    const cacheNames = await caches.keys()
    await Promise.all(cacheNames.map(name => caches.delete(name)))
  }
  clearCache().catch(console.error)

  const [props, ref, key] = args

  const orig = {
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
      text: (el, s) => 'My name is ' + s.name
    },
  
    Notification: {
      IconText: {
        icon: 'smile'
      }
    },
  
    Field: {
      Input: {
        placeholder: 'Your name is',
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
    <Box {...orig} />
  )
})

export const Reuse = () => {
  return <>
    <Box extends="Button" text="123 yoyo" />
    <SmblsTestComp
      theme="secondary"
      text="yo anything"
      H1={{ text: 'yo!'}}
      Yo={{ hide: true }}
      Notification={{ theme: 'document', Flex: { Title: { text: 'My name is!'  } }}}
      Yoyo={{ text: '1111 123' }}
      >something</SmblsTestComp>
  </>
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