import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore()


ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'));
