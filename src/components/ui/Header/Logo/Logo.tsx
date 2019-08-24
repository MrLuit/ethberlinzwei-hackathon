import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import logo from '../../../../assets/logo.svg';

const StyledLogo = styled.img`
  margin: 0;
  height: 100px;
`;

const Logo: FunctionComponent = () => (
  <StyledLogo src={logo} alt='ShoutBox'/>
);

export default Logo;
