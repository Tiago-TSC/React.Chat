import React from 'react';
import { Page, Content } from './styles';

import Top from '../Top/Top';
import UserList from '../Users/UserList';
import Footer from '../Footer/Footer';

const layout = props => {
  return (
    <Page>
      <Top />
      <Content>
        <UserList/>
      </Content>
      <Footer />
    </Page>
  );
};

export default layout;
