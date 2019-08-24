import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';
import { createStore } from './store/store';
import { Provider } from 'react-redux';

const store = createStore();

import { createNode } from './utils/libp2p';

const node = createNode().then(console.log).catch(console.error);
console.log(node);

const App: FunctionComponent = () => (
  <Provider store={store}>
    <HashRouter>
      <Routes/>
    </HashRouter>
  </Provider>
);

export default hot(App);
