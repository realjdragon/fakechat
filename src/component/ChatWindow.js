import React, { useEffect, useRef } from 'react';
import Chat from './Chat';
import './ChatWindow.scss';

const ChatWindow = ({ messages }) => {
  const chatList = messages.map(message => <Chat sender={message.sender} message={message.message} key={message.id} />);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    // 메시지 입력할 때마다 스크롤 내리기
    // 나중에는 삭제 수정도 해야해서 사실 이런 식으로 처리하면 안 됨
    // 분명히 고치게 될 거임
    const chatWindow = document.querySelector('.ChatWindow');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });

  return (
    <div className="ChatWindow">
      {chatList}
    </div>
  );
};

export default ChatWindow;