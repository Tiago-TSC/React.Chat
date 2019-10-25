import React from 'react';

import { MessageHeaderContainer, UserName, DateTime } from './styles';

const MessageHeader = props => {
  return (
    <MessageHeaderContainer>
      <UserName>{props.userName}</UserName>
      <DateTime> - {props.dateTime}</DateTime>
    </MessageHeaderContainer>
  );
};

export default MessageHeader;
