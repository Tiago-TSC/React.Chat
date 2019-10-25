import React from 'react';

import { MessageGroup } from './styles';
import Message from './Message';

export default function Messages() {
  return (
    <MessageGroup>
      <Message userName={'Tiago'} />
      <Message userName={'Camila'} />
      <Message userName={'Vanessa'} />
      <Message userName={'Tiago'} />
      <Message userName={'Camila'} />
      <Message userName={'Vanessa'} />
      <Message userName={'Tiago'} />
      <Message userName={'Camila'} />
      <Message userName={'Vanessa'} />
    </MessageGroup>
  );
}
