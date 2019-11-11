module.exports = {
  receiveMessage(io, message) {
    io.emit('RECEIVE_MESSAGE', message);
  },
};
