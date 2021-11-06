import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { store } from './store/store';


import { ChakraProvider } from '@chakra-ui/provider';
import theme from './theme';


ReactDOM.render(
   <ChakraProvider theme={theme}>
      <Provider store={store}>
         <App />
      </Provider>
   </ChakraProvider>,
   document.getElementById('root')
);


