import React, { FunctionComponent } from 'react';
import MessageOverview from '../../MessageOverview';
import MessageInput from '../../MessageInput';

const Home: FunctionComponent = () => (
  <>
    <h2>Home page</h2>
    <p>Lorem ipsum</p>
    <h2>Chat</h2>
    <MessageOverview />
    <MessageInput />
  </>
);

export default Home;
