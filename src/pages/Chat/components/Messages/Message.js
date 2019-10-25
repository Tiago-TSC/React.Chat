import React from 'react';

import { MessageContainer, Text } from './styles';
import MessageHeader from './MessageHeader';

const Message = props => {
  return (
    <MessageContainer>
      <MessageHeader userName={props.userName} dateTime={props.dateTime} />
      <Text>{props.text}</Text>
    </MessageContainer>
  );
};

export default Message;
