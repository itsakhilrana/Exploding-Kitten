import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import store from './store'
import theme from './theme';


ReactDOM.render(
  <Provider store={store}>
   <ThemeProvider theme={theme}>
   <App />
   </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

