import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const StyledHeader = styled.header`
  width: 100%;
  height: 400px;
  max-height: 45%;
  background: #163150;
  color: white;
  padding: 25px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header: FunctionComponent = () => (
  <StyledHeader>
    <Logo />
    <Menu />
  </StyledHeader>
);

export default Header;
