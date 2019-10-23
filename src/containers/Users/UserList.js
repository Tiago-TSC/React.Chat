import React, { useState } from 'react';
import { ListDiv, UserGroup, UserItem } from './styles';

const UserList = props => {
  return (
    <ListDiv>
      <div>
        <center>
          <strong>Usuários online</strong>
        </center>
      </div>
      <UserGroup>
        <UserItem>Usuário 1</UserItem>
        <UserItem>Usuário 2</UserItem>
        <UserItem>Usuário 3</UserItem>
        <UserItem>Usuário 4</UserItem>
      </UserGroup>
    </ListDiv>
  );
};

export default UserList;
