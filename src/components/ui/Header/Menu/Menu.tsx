import React, { FunctionComponent } from 'react';
import SearchButton from '../../../SearchButton';
import styled from 'styled-components';

const StyledMenu = styled.div`
  display: flex;
  height: 100px;
  align-items: flex-end;
`;

const Menu: FunctionComponent = () => (
  <StyledMenu>
    <SearchButton />
  </StyledMenu>
);

export default Menu;
