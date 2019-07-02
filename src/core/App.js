// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import React from 'react';
import Header from './header';
import Routes from '../routes';

import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default hot(module)(App);
