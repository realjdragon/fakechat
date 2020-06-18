import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import HeaderProfile from './HeaderProfile';

const ChatContainer = () => {
  const createDummyMessage = () => {
    const array = [];
    for (let i = 0; i < 18; i++) {
      array.push({
        id: i,
        sender: i%3,
        message: 'hi guys'
      });
    }
    return array;
  };

  const [messages, setMessages] = useState(createDummyMessage());

  return (
    <div>
      <HeaderProfile />
      <ChatWindow messages={messages}/>
      <ChatInput />
    </div>
  );
};

export default ChatContainer;