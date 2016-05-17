/**
 * Created by troublesohard on 5/7/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { remote } from 'electron';


import App from './components/app';
import { accessToken } from './actions/access-token';
import { store } from './store/store';


store.dispatch(accessToken(remote.getGlobal('vkAccount').accessToken));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
