import React from 'react';
import './Chat.scss';
import classnames from 'classnames';

const Chat = ( {who} ) => {
  return (
    <div className={classnames('Chat', who === 0 ? 'right' : 'left')}>
      <div className="bubble">
        안녕!
      </div>
    </div>
  );
};

export default Chat;