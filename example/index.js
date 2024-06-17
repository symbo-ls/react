import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { SymbolsProvider } from '../src/Provider';

import { Button } from './Dompiler';
import { Flex } from '@symbo.ls/react';
import { IconText } from './IconText';

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
  <StrictMode>
    <SymbolsProvider globalTheme="dark">
      <Flex flow="column" gap="A" boxSize="100%" flexAlign="center center">
        <Button icon="logo" theme="primary">Button</Button>
        <IconText text="Hii" icon="logo" theme="primary" />
      </Flex>
    </SymbolsProvider>
  </StrictMode>
);
