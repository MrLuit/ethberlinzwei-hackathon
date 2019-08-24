import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';

const MessageOverview: FunctionComponent = () => {
  const messages = useSelector((store: ApplicationState) => store.messages.messages);

  console.log(messages);

  return (
    <>
      {messages.map((message, index) => (
        <p key={index}>
          {message}
        </p>
      ))}
    </>
  );
};

export default MessageOverview;
