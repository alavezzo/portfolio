import * as React from 'react';

import { ChakraProvider, ChakraModeScript } from '@chakra-ui/react'


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <ChakraModeScript initialColorMode="light"></ChakraModeScript> */}
        <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

