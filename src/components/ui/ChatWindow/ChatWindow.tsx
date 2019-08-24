import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledChatWindow = styled.div`
  padding: 25px;
  flex: 1;
`;

const ChatWindow: FunctionComponent = ({ children }) => (
  <StyledChatWindow>
    {children}
  </StyledChatWindow>
);

export default ChatWindow;
