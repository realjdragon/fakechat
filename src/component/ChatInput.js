import React, { useState } from 'react';
import './ChatInput.scss';

const ChatInput = ({ onInsert }) => {
  const [myMessage, setMyMessage] = useState('');
  const [yourMessage, setYourMessage] = useState('');

  return (
    <div className="ChatInput">
      <div className="input-box">
        <span>👉</span>
        <form onSubmit={(e) => {e.preventDefault(); onInsert(myMessage, 0); setMyMessage('');}}>
          <input
            placeholder="My Message"
            name="myMessage"
            value={myMessage}
            onChange={(e) => setMyMessage(e.target.value)}
            type="text"/>
          <button>Send</button>
        </form>
      </div>
      <div className="input-box">
        <span>👈</span>
        <form onSubmit={(e) => {e.preventDefault(); onInsert(yourMessage, 1); setYourMessage('');}}>
          <input
            placeholder="Your Message"
            name="yourMessage"
            value={yourMessage}
            onChange={(e) => setYourMessage(e.target.value)}
            type="text"/>
            <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;