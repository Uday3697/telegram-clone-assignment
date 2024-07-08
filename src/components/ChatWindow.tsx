import React from 'react';
import MessageComposer from './MessageComposer';

const ChatWindow: React.FC = () => {


  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <MessageComposer />
    </div>
  );
};

export default ChatWindow;
