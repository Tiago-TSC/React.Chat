import React from 'react';

import { MessageHeaderContainer, UserName, DateTime } from './styles';

const MessageHeader = props => {
  return (
    <MessageHeaderContainer>
      <UserName>{props.userName}</UserName>
      <DateTime> - 25/09/2019 15:00:00</DateTime>
    </MessageHeaderContainer>
  );
};

export default MessageHeader;
