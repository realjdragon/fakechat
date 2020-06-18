import React, { useState, useRef, useCallback } from 'react';
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

  const nextId = useRef(18);

  const onInsert = useCallback(
    (message, sender) => {
      if (message.trim() === '') return;
      const newMessage = {
        id: nextId.current,
        sender,
        message
      };
      setMessages(messages => [...messages, newMessage]);
      nextId.current += 1;
    },
    [],
  );

  return (
    <div>
      <HeaderProfile />
      <ChatWindow messages={messages}/>
      <ChatInput onInsert={onInsert}/>
    </div>
  );
};

export default ChatContainer;