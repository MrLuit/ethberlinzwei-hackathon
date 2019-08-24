import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledChatWindow = styled.div`
  flex: 1;
  position: relative;
`;

const ChatWindow: FunctionComponent = ({ children }) => (
  <StyledChatWindow>
    {children}
  </StyledChatWindow>
);

export default ChatWindow;
