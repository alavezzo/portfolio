import * as React from 'react';
import { theme } from './components/styles/theme';
import { ChakraProvider, ColorModeScript} from '@chakra-ui/react'


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

