const geckos = require('@geckos.io/server').default;
const { iceServers } = require('@geckos.io/server');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const io = geckos({
  iceServers: process.env.NODE_ENV === 'production' ? iceServers : [],
});
io.addServer(server);
io.onConnection((channel) => {
  console.debug('onConnection', channel.id);
});

server.listen(3001, () => {
  console.log('Express is listening on http://localhost:' + 3001);
});
