import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import emoteIcon from '../../assets/icons/emote.svg';

const StyledEmoteInput = styled.div`
  margin: 15px 0 15px 15px;
  padding-right: 15px;
  border-right: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
`;

const StyledEmoteIcon = styled.img`
  width: 25px;
`;

const EmoteInput: FunctionComponent = () => (
  <StyledEmoteInput>
    <StyledEmoteIcon src={emoteIcon} />
  </StyledEmoteInput>
);

export default EmoteInput;
