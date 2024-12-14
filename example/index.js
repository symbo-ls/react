// import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
// import { App } from "./App";
import { SymbolsProvider } from '@symbo.ls/react-provider'

// import { IconText } from './DompilerIconText';
// import { Button } from './DompilerButton';
// import { SquareButton } from './DompilerSquareButton';
// import { Flex } from '@symbo.ls/react';
// import { PortfolioItem } from './DompilerPortfolioItem';
// import { Checkbox } from './DompilerCheckbox';
// import { ButtonTwo } from './DompilerButton2';
// import { DropdownList } from './DompilerDropdown';
// import { IconText } from './IconText';
import { MyTry, Reuse, SmblsTestComp, Toko } from './MyComp'

const designSystem = {
  THEME: {
    document: {
      '@dark': {
        background: '#123'
      }
    }
  }
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  // <StrictMode>
  <SymbolsProvider>
    <SmblsTestComp />
    <Reuse>yooo 111</Reuse>
    {/* <Flex flow="column" gap="A" boxSize="100%" flexAlign="center center"> */}

    {/* <Button icon="logo" theme="primary">Button</Button>
        <IconText text="Hii" icon="logo" theme="secondary" />
        <SquareButton />
        <DropdownList />
        <PortfolioItem/>
        <ButtonTwo>12321</ButtonTwo> */}
    {/* <Checkbox/> */}
    {/* </Flex> */}
  </SymbolsProvider>
  // </StrictMode>
)
