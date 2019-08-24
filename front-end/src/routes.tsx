import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route path='/' component={Home}/>
  </Switch>
);

export default Routes;
