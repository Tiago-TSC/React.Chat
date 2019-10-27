import React from 'react';
import { useSelector } from 'react-redux';

import { ListDiv, UserGroup, UserItem } from './styles';

const UserList = () => {
  const onlineUsers = useSelector(({ users }) => users.onlineUsers);

  const userItems = onlineUsers.map(user => {
    return <UserItem key={user.id}>{user.userName}</UserItem>;
  });

  return (
    <ListDiv>
      <div>
        <center>
          <strong>Usuários online</strong>
        </center>
      </div>
      <UserGroup>{userItems}</UserGroup>
    </ListDiv>
  );
};

export default UserList;
