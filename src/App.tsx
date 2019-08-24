import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';
import { createStore } from './store/store';
import { Provider } from 'react-redux';
import { createNode } from './utils/libp2p';
import { createGlobalStyle } from 'styled-components';

const store = createStore();

const node = createNode().then(console.log).catch(console.error);
console.log(node);

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const App: FunctionComponent = () => (
  <Provider store={store}>
    <GlobalStyle />
    <HashRouter>
      <Routes/>
    </HashRouter>
  </Provider>
);

export default hot(App);
