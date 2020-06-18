import React, { useState } from 'react';
import './ChatInput.scss';

const ChatInput = () => {
const [myMessage, setMyMessage] = useState('');
const [yourMessage, setYourMessage] = useState('');

  return (
    <div className="ChatInput">
      <div className="input-box">
        <span>👉</span>
        <input
          placeholder="메시지"
          name="myMessage"
          value={myMessage}
          onChange={(e) => setMyMessage(e.target.value)}
          type="text"/>
        <button>전송</button>
      </div>
      <div className="input-box">
        <span>👈</span>
        <input
        placeholder="메시지"
          name="yourMessage"
          value={yourMessage}
          onChange={(e) => setYourMessage(e.target.value)}
          type="text"/>
        <button>전송</button>
      </div>
    </div>
  );
};

export default ChatInput;