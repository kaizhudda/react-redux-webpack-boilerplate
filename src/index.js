import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history';
import Store from './store';
import App from './core';

ReactDOM.render(
  <Store>
    <Router history={history}>
      <App />
    </Router>
  </Store>,
  document.querySelector('#root')
);
