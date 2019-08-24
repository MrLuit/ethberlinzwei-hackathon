import React, { FunctionComponent } from 'react';
import { User } from '../../../store/users';
import styled from 'styled-components';
import trim from '../../../utils/trim';

interface Props {
  user: User;
  timestamp: number;
  isSelf: boolean;
}

const StyledMessageHeader = styled.p<{ isSelf: boolean }>`
  margin: 0;
  margin-bottom: 8px;
  font-size: 0.7rem;
  text-align: ${({ isSelf }) => isSelf ? 'right' : 'left'};
`;

const MessageHeader: FunctionComponent<Props> = ({ user, timestamp, isSelf }) => (
  // TODO: Parse timestamp to actual time
  <StyledMessageHeader isSelf={isSelf}><span title={user.address}>{trim(user.address)}</span> | {timestamp}</StyledMessageHeader>
);

export default MessageHeader;
