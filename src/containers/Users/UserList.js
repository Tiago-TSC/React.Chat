import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ListDiv, UserGroup, UserItem } from './styles';

const UserList = props => {
  const { onlineUsers } = props;

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

const mapStateToProps = state => {
  return {
    onlineUsers: state.users.onlineUsers,
  };
};

export default connect(mapStateToProps)(UserList);
