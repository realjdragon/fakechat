import React from 'react';
import Chat from './Chat';
import './ChatWindow.scss';

const ChatWindow = () => {
  return (
    <div className="ChatWindow">
      <Chat who="you" />
      <Chat who="me" />
      <Chat who="me" />
      <Chat who="you" />
      <Chat who="you" />
      <Chat who="me" />
      <Chat who="me" />
      <Chat who="me" />
      <Chat who="me" />
      <Chat who="me" />
      <Chat who="me" />
      <Chat who="me" />
    </div>
  );
};

export default ChatWindow;