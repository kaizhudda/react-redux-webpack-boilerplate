import { hot } from 'react-hot-loader';
import React from 'react';
import Header from './header';
import Routes from '../routes';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};

export default hot(module)(App);
