import React from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import HeaderProfile from './HeaderProfile';

const ChatContainer = () => {
  return (
    <div>
      <HeaderProfile />
      <ChatWindow />
      <ChatInput />
    </div>
  );
};

export default ChatContainer;