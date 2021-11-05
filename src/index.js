import { ChakraProvider } from '@chakra-ui/provider';

import theme from './theme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
   <ChakraProvider theme={theme}>
      <App />
   </ChakraProvider>,
   document.getElementById('root')
);


