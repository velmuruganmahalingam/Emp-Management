import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home"; // Create this component
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;