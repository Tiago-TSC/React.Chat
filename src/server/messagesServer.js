const socket = require('./socket');
const io = socket.getIo();

module.exports = {
  receiveMessage(message) {
    io.emit('RECEIVE_MESSAGE', message);
  },
};
