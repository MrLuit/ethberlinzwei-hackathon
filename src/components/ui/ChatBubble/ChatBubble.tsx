import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { User } from '../../../store/users';
import Blockie from './Blockie';

interface Props {
  user: User;
  messages: string[];
  isSelf: boolean;
}

const StyledChatBubble = styled.div<{ isSelf: boolean }>`
  display: flex;
  flex-direction: ${({ isSelf }) => isSelf ? 'row-reverse' : 'row'};
  margin-bottom: 15px;
`;

const StyledChatBubbleContent = styled.div`
  background: #e9e9e9;
  border-radius: 5px;
  padding: 0 15px;
  margin: 0 15px;
`;

const ChatBubble: FunctionComponent<Props> = ({ user, messages, isSelf }) => (
  <StyledChatBubble isSelf={isSelf}>
    <Blockie address={user.address} />
    <StyledChatBubbleContent>
      {messages.map(message => <p>{message}</p>)}
    </StyledChatBubbleContent>
  </StyledChatBubble>
);

export default ChatBubble;
