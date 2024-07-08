import React from 'react';
import MessageComposer from './MessageComposer';

const ChatWindow: React.FC = () => {


  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div>

        <MessageComposer />
      </div>
    </div>
  );
};

export default ChatWindow;
