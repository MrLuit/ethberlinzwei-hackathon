import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  margin: auto;
  margin-top: -125px;
  background: white;
  max-width: 1000px;
  width: 100%;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.4);
  border-radius: 5px 5px 0 0;
`;

const ChatContainer: FunctionComponent = ({ children }) => (
  <StyledChatContainer>
    {children}
  </StyledChatContainer>
);

export default ChatContainer;
