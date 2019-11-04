import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ListDiv, UserGroup, UserItem } from './styles';
import UsersService from '../../../../services/UsersService';

const UserList = () => {
  const dispatch = useDispatch();
  const onlineUsers = useSelector(({ users }) => users.onlineUsers);

  const usersService = new UsersService(dispatch);

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
