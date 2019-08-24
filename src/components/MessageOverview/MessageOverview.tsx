import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';
import ChatBubble from '../ui/ChatBubble';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  padding: 25px;
`;

const MessageOverview: FunctionComponent = () => {
  const messages = useSelector((store: ApplicationState) => store.messages.messages);

  return (
    <Container>
      {messages.map((message, index) => (
        <ChatBubble key={index} user={message.sender} messages={[message.content]} isSelf={message.isSelf} timestamp={message.timestamp} />
      ))}
    </Container>
  );
};

export default MessageOverview;
