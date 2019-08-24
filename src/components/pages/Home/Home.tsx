import React, { FunctionComponent } from 'react';
import ChatBox from '../../ChatBox';
import Header from '../../ui/Header';
import ChatWindow from '../../ui/ChatWindow';
import ChatContainer from '../../ui/ChatContainer';
import ChatInput from '../../ui/ChatInput/ChatInput';
import MessageInput from '../../MessageInput';
import SendMessageButton from '../../SendMessageButton';
import EmoteInput from '../../EmoteInput';

const Home: FunctionComponent = () => (
  <>
    <Header/>
    <ChatContainer>
      <ChatWindow>
        <ChatBox/>
      </ChatWindow>
      <ChatInput>
        <EmoteInput />
        <MessageInput />
        <SendMessageButton />
      </ChatInput>
    </ChatContainer>
  </>
);

export default Home;
