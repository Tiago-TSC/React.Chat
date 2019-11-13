const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const { addUser, removeUser } = require('./userServer');
const { receiveMessage } = require('./messagesServer');

const port = process.env.PORT || 7777;
const routes = require('./routes');

const app = express();
app.use(routes);

const server = http.createServer(app);

const io = socketIo(server);

let onlineUsers = [];

io.on('connection', socket => {
  console.log('Novo cliente conectado.');

  socket.on('ADD_USER', payload => {
    onlineUsers = addUser(io, socket, onlineUsers, payload.userName, socket.id);
  });

  socket.on('REMOVE_USER', payload => {
    onlineUsers = removeUser(io, onlineUsers, payload.id);
  });

  socket.on('SEND_MESSAGE', payload => {
    receiveMessage(io, payload);
  });

  socket.on('disconnect', () => {
    onlineUsers = removeUser(io, onlineUsers, socket.id);
    console.log('Cliente desconectado.');
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
