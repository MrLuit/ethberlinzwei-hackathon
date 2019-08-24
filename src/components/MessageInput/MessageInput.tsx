import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/messages';

const MessageInput: FunctionComponent = () => {
  const [message, setMessage] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    dispatch(addMessage(message));
    setMessage('');
  };

  return (
    <>
      <input type='text' onChange={handleChange} value={message} />
      <input type='submit' onClick={handleSend} />
    </>
  )
};

export default MessageInput;
