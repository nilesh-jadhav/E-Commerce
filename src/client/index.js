import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../shared/store/configureStore';

import App from './App';
import '../shared/routes';

const history = createHistory();

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__initialData__;
const store = configureStore(preloadedState);
delete window.__initialData__;

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
