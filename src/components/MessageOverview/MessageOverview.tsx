import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';
import ChatBubble from '../ui/ChatBubble';

const MessageOverview: FunctionComponent = () => {
  const messages = useSelector((store: ApplicationState) => store.messages.messages);

  return (
    <>
      {messages.map((message, index) => (
        <ChatBubble key={index} user={message.sender} messages={[message.content]} isSelf={message.isSelf} timestamp={message.timestamp} />
      ))}
    </>
  );
};

export default MessageOverview;
