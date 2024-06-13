import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Button } from './Dompiler';
import { SymbolsProvider } from '../src/Provider';

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
  // <StrictMode>
    // <App />
    <SymbolsProvider globalTheme="dark">
      <Button theme="primary">123</Button>
    </SymbolsProvider>
  // </StrictMode>
);
