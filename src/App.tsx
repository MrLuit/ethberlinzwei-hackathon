import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';
import { createStore } from './store/store';
import { Provider } from 'react-redux';

const store = createStore();

const App: FunctionComponent = () => (
  <Provider store={store}>
    <HashRouter>
      <Routes/>
    </HashRouter>
  </Provider>
);

export default hot(App);
