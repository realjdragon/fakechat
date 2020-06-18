import React from 'react';
import './Chat.scss';
import classnames from 'classnames';

const Chat = ( { sender, message } ) => {

  return (
    <div className={classnames('Chat', sender === 0 ? 'right' : 'left')}>
      <div className="bubble">
        { message }
      </div>
    </div>
  );
};

export default React.memo(Chat);