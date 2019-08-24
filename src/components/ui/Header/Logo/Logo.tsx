import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  margin: 0;
`;

const Logo: FunctionComponent = () => (
  <StyledLogo>MyCryptroll</StyledLogo>
);

export default Logo;
