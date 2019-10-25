import React from 'react';
import { Page, Content } from './styles';

import Top from './components/Top';
import UserList from './components/Users/UserList';
import Messages from './components/Messages';
import Footer from './components/Footer';

const Chat = () => {
  return (
    <Page>
      <Top />
      <Content>
        <UserList />
        <Messages />
      </Content>
      <Footer />
    </Page>
  );
};

export default Chat;
