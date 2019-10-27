import React from 'react';
import { useSelector } from 'react-redux';

import { MessageGroup } from './styles';
import Message from './Message';

const Messages = () => {
  const messages = useSelector(({ messages }) => messages.messages);

  return (
    <MessageGroup>
      {messages.map(message => {
        const { id, userName, dateTime, text } = message;
        return <Message key={id} userName={userName} dateTime={dateTime} text={text} />;
      })}
    </MessageGroup>
  );
};

export default Messages;
