# Symbols React
React hooks to use [smbls](https://github.com/symbo-ls/smbls)

### Creating component and reusing

```javascript
import * as React from 'react'
import { jsx } from 'react/jsx-runtime'
import { Box } from '@symbo.ls/react-box'
import { useSymbolsContext } from '@symbo.ls/react-provider'

export const SmblsTestComp = React.forwardRef((...args) => {
  const [props, ref, key] = args

  const orig = {
    extend: ['Flex'],

    props,

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
  
    Flex: {
      align: 'flex-start',
      gap: 'Y2',
      '@tabletS': {
        fontSize: 'Z2',
      },
      '@mobileS': {
        fontSize: 'Z1',
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
      text="just text"
      H1={{ text: 'yo!'}}
      Yo={{ hide: true }}
      Notification={{ theme: 'document', Flex: { Title: { text: 'My name is!'  } }}}
      Yoyo={{ text: '1111 123' }}
      >something</SmblsTestComp>
  </>
}
```


### Context provider to init Symbols
```javascript
import React from 'react'
import { render } from 'react-dom'
import { SymbolsProvider } from '@symbo.ls/react-provider'
import { SmblsTestComp } from './MyComp'

render(
  <SymbolsProvider>
    <SmblsTestComp />
  </SymbolsProvider>,
  document.getElementById('root')
)
```
