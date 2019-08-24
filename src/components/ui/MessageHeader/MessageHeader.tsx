import React, { FunctionComponent } from 'react';
import { User } from '../../../store/users';
import styled from 'styled-components';
import trim from '../../../utils/trim';

interface Props {
  user: User;
  timestamp: number;
}

const StyledMessageHeader = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 0.7rem;
`;

const MessageHeader: FunctionComponent<Props> = ({ user, timestamp }) => (
  // TODO: Parse timestamp to actual time
  <StyledMessageHeader><span title={user.address}>{trim(user.address)}</span> | {timestamp}</StyledMessageHeader>
);

export default MessageHeader;
