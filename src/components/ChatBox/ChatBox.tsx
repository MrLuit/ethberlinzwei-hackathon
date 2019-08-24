import React, { FunctionComponent } from 'react';
import CheckConnection from '../CheckConnection';
import MessageOverview from '../MessageOverview';
import MessageInput from '../MessageInput';

const ChatBox: FunctionComponent = () => (
  <CheckConnection>
    <MessageOverview/>
    <MessageInput/>
  </CheckConnection>
);

export default ChatBox;
