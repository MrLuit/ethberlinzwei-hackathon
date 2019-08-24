import React, { FunctionComponent } from 'react';
import CheckConnection from '../CheckConnection';
import MessageOverview from '../MessageOverview';

const ChatBox: FunctionComponent = () => (
  <CheckConnection>
    <MessageOverview/>
  </CheckConnection>
);

export default ChatBox;
