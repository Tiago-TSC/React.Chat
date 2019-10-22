import React from 'react';
import styled from 'styled-components';

import Top from '../Top/Top';
import UserList from '../Users/UserList';
import Footer from '../Footer/Footer';

const Page = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0;
  width: 100%;
  height: 500px;
`;

const Content = styled.div`
  position: fixed;
  flex: 1;
  margin: 62px 10px 10px 10px;
  border: 1px solid;
`;

const layout = props => {
  return (
    <Page>
      <Top />
      <Content>
        <UserList />
      </Content>
      <Footer />
    </Page>
  );
};

export default layout;
