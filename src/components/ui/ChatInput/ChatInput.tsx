import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledChatInput = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid #d2d2d2;
  display: flex;
  flex-direction: row;
  background: #eef5fb;
`;

const ChatInput: FunctionComponent = ({ children }) => (
  <StyledChatInput>
    {children}
  </StyledChatInput>
);

export default ChatInput;
