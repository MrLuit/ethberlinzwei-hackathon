import React, { ChangeEvent, KeyboardEvent, FunctionComponent } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/store';
import { sendMessage, setCurrentMessage } from '../../store/messages';

const StyledMessageInput = styled.input`
  border: none;
  outline: none;
  height: 100%;
  flex: 1;
  padding: 15px;
  box-sizing: border-box;
  font-size: 1rem;
  background: #eef5fb;
`;

const MessageInput: FunctionComponent = () => {
  const message = useSelector((store: ApplicationState) => store.messages.currentMessage);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentMessage(event.target.value));
  };

  const handleSend = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(setCurrentMessage(''));
      dispatch(sendMessage({
        sender: {
          address: '0x4e2579b6D1513B0A6EDb536a151c62909fc8c257'
        },
        content: message,
        isSelf: true,
        timestamp: +new Date()
      }));
    }
  };

  return (
    <>
      <StyledMessageInput type='text' onChange={handleChange} onKeyDown={handleSend} value={message}/>
    </>
  );
};

export default MessageInput;
