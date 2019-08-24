import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/icons/search.svg';

const StyledIcon = styled.img`
  width: 25px;
`;

const SearchButton: FunctionComponent = () => (
  <StyledIcon src={searchIcon} />
);

export default SearchButton;
