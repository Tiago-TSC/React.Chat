import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { ListDiv, UserGroup, UserItem } from './styles';

const UserList = props => {
  const onlineUsers = useSelector(({users}) => users.onlineUsers)

  const userItems = onlineUsers.map(userName => {
    return <UserItem>{userName}</UserItem>;
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
