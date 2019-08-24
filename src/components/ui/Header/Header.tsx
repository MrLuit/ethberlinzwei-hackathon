import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 250px;
  background: #163150;
`;

const Header: FunctionComponent = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
);

export default Header;
