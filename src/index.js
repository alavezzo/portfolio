import * as React from 'react';
import { newColor } from './components/styles/theme';
import { ChakraProvider, ChakraModeScript } from '@chakra-ui/react'


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={newColor}>
      {/* <ChakraModeScript initialColorMode="light"></ChakraModeScript> */}
        <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

