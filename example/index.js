// import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
// import { App } from "./App";
import { SymbolsProvider } from '../src/Provider'

// import { IconText } from './DompilerIconText';
// import { Button } from './DompilerButton';
// import { SquareButton } from './DompilerSquareButton';
// import { Flex } from '@symbo.ls/react';
// import { PortfolioItem } from './DompilerPortfolioItem';
// import { Checkbox } from './DompilerCheckbox';
// import { ButtonTwo } from './DompilerButton2';
// import { DropdownList } from './DompilerDropdown';
import { MyTry } from './MyTry'
// import { IconText } from './IconText';

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  // <StrictMode>
  <SymbolsProvider>
    <MyTry />
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
