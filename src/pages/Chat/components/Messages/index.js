import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { MessageGroup } from './styles';
import Message from './Message';

const Messages = () => {
  const messagesEndRef = useRef(null);

  const messages = useSelector(({ messages }) => messages.messages);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <MessageGroup>
      {messages.map(message => {
        const { id, userName, dateTime, text } = message;
        return <Message key={id} userName={userName} dateTime={dateTime} text={text} />;
      })}
      <div ref={messagesEndRef}></div>
    </MessageGroup>
  );
};

export default Messages;
