import React from 'react';
import './ChatInput.scss';

const ChatInput = () => {
  return (
    <div className="ChatInput">
      <div className="input-box">
        <span>👉</span>
        <input type="text"/>
        <button>전송</button>
      </div>
      <div className="input-box">
        <span>👈</span>
        <input type="text"/>
        <button>전송</button>
      </div>
    </div>
  );
};

export default ChatInput;