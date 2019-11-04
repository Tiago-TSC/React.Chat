const moment = require('moment');

module.exports = {
  addUser(io, onlineUsers, userName) {
    onlineUsers.push({
      id: `${userName}${moment().valueOf()}`,
      userName,
    });

    io.emit('UPDATE_USER_LIST', onlineUsers);

    return onlineUsers;
  },

  removeUser(io, onlineUsers, userName) {
    const newList = onlineUsers.filter(
      user => user.userName.toLowerCase() !== userName.toLowerCase(),
    );

    onlineUsers = newList;

    io.emit('UPDATE_USER_LIST', onlineUsers);

    return onlineUsers;
  },
};
