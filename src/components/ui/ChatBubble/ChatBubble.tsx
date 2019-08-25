import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { User } from '../../../store/users';
import Blockie from './Blockie';
import BoxImage from './BoxImage';
import MessageHeader from '../MessageHeader';

interface Props {
  user: User;
  messages: string[];
  isSelf: boolean;
  timestamp: number;
}

const StyledChatBubble = styled.div<{ isSelf: boolean }>`
  display: flex;
  flex-direction: ${({ isSelf }) => isSelf ? 'row-reverse' : 'row'};
  margin-bottom: 15px;
`;

const StyledChatBubbleContent = styled.div<{ isSelf: boolean }>`
  background: ${({ isSelf }) => isSelf ? '#007896' : '#f1f5f6'}; // eef5fb
  border-radius: 5px;
  padding: 0 15px;
  margin: 0 15px;
  color: ${({ isSelf }) => isSelf ? 'white' : 'black'};
`;

const StyledChatText = styled.p`
`;

const ChatBubble: FunctionComponent<Props> = ({ user, messages, isSelf, timestamp }) => (
  <>
    <MessageHeader user={user} timestamp={timestamp} isSelf={isSelf} />
    <StyledChatBubble isSelf={isSelf}>
      {window.ethereum ?
        <BoxImage address={user.address} /> :
        <Blockie address={user.address} />
      }
      <StyledChatBubbleContent isSelf={isSelf}>
        {messages.map((message, index) => <StyledChatText key={index}>{message}</StyledChatText>)}
      </StyledChatBubbleContent>
    </StyledChatBubble>
  </>
);

export default ChatBubble;