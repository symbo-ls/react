import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { SymbolsProvider } from '../src/Provider';

import { Button } from './Dompiler';
import { Flex } from '@symbo.ls/react';

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
  <StrictMode>
    <SymbolsProvider globalTheme="dark">
      <Flex boxSize="100%" flexAlign="center center">
        <Button theme="primary">Hi</Button>
      </Flex>
    </SymbolsProvider>
  </StrictMode>
);
