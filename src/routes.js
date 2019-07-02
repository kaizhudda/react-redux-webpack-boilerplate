import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Redirect to="/" />
  </Switch>
);

export default Routes; 
