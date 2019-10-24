import React from 'react';

import { Page, Content } from './styles';

import Top from './components/Top';
import UserList from './components/Users/UserList';
import Footer from './components/Footer';

export default function Chat() {
  return (
    <Page>
    <Top />
    <Content>
      <UserList/>
    </Content>
    <Footer />
  </Page>
  );
}
