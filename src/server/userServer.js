const moment = require('moment');

const socket = require('./socket');
const io = socket.getIo();

module.exports = {
  addUser(socket, onlineUsers, userName, id) {
    const user = {
      id,
      userName,
    };

    onlineUsers.push(user);

    socket.emit('CONNECTED_USER', user);
    io.emit('UPDATE_USER_LIST', onlineUsers);

    return onlineUsers;
  },

  removeUser(onlineUsers, id) {
    const total = onlineUsers.length;

    const newList = onlineUsers.filter(user => user.id !== id);

    if (total != newList.length) {
      onlineUsers = newList;

      io.emit('UPDATE_USER_LIST', onlineUsers);
    }

    return onlineUsers;
  },
};
