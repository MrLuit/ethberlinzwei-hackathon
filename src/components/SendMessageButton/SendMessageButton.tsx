import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-left: 1px solid #d2d2d2;
  outline: none;
  width: 100px;
  height: 100%;
  background: white;
  font-size: 1rem;
  background: #007896;
  color: white;
`;

const SendMessageButton: FunctionComponent = () => (
  <StyledButton>
    Send
  </StyledButton>
);

export default SendMessageButton;
