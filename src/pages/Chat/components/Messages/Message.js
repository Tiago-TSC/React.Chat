import React from 'react';

import { MessageContainer, Text } from './styles';
import MessageHeader from './MessageHeader';

const Message = props => {
  return (
    <MessageContainer>
      <MessageHeader userName={props.userName} />
      <Text>
        texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
        texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
        texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
        texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
        texto texto texto texto{' '}
      </Text>
    </MessageContainer>
  );
};

export default Message;
