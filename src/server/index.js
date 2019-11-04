const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const { addUser, removeUser } = require('./userServer');

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
    onlineUsers = addUser(io, onlineUsers, payload.userName);
  });

  socket.on('REMOVE_USER', payload => {
    onlineUsers = removeUser(io, onlineUsers, payload.userName);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
