const express = require('express');
const http = require('http');

const socket = require('./socket');

const app = express();

const server = http.createServer(app);
const io = socket.init(server);

const { addUser, removeUser } = require('./userServer');
const { receiveMessage } = require('./messagesServer');

const port = process.env.PORT || 7777;
const routes = require('./routes');

app.use(routes);

let onlineUsers = [];

io.on('connection', socket => {
  console.log('Novo cliente conectado.');

  socket.on('ADD_USER', payload => {
    onlineUsers = addUser(socket, onlineUsers, payload.userName, socket.id);
  });

  socket.on('REMOVE_USER', payload => {
    onlineUsers = removeUser(onlineUsers, payload.id);
  });

  socket.on('SEND_MESSAGE', payload => {
    receiveMessage(payload);
  });

  socket.on('disconnect', () => {
    onlineUsers = removeUser(onlineUsers, socket.id);
    console.log('Cliente desconectado.');
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
