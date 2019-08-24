import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

const App: FunctionComponent = () => (
  <HashRouter>
    <Routes/>
  </HashRouter>
);

export default hot(App);
