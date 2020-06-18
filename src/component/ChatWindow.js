import React from 'react';
import Chat from './Chat';
import './ChatWindow.scss';

const ChatWindow = ({ messages }) => {
  const chatList = messages.map(message => <Chat who={message.sender} key={message.key} />);

  return (
    <div className="ChatWindow">
      {chatList}
    </div>
  );
};

export default ChatWindow;