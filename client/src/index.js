import * as React from 'react';
import { newColor } from './components/styles/theme';
import { ChakraProvider} from '@chakra-ui/react'


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={newColor}>
        <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

