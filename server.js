const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const GAME_SIZE = 550;

const players = {};

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

function isInBounds(pos) {
  return pos >= 0 && pos <= GAME_SIZE
}

function isAcceptableVel(vel) {
  return vel >= -5 && vel <= 5
}

function movePlayer(id, x, y) {
  const newHeight = players[id].height + y;
  const newWidth = players[id].width + x;

  if (isInBounds(newHeight) && isInBounds(newWidth)) {
    players[id].height = newHeight;
    players[id].width = newWidth;
  } else {
    players[id].velX = 0;
    players[id].velY = 0;
  }
}

function accelPlayer(id, x, y) {
  const newVelX = players[id].velX + x;
  const newVelY = players[id].velY + y;

  if (isAcceptableVel(newVelX) && isAcceptableVel(newVelY)) {
    players[id].velX = newVelX;
    players[id].velY = newVelY;
  }
}

function stringToColour(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let colour = '#';

  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }

  return colour;
}

function gameLoop() {
  Object.keys(players).forEach((playerId) => {
    let player = players[playerId];
    movePlayer(playerId, player.velX, player.velY)
  });

  io.emit('gameStateUpdate', players);
}

io.on('connection', (socket) => {
  console.log('User connected: ', socket.id);

  players[socket.id] = {
    height: 0,
    width: 0,
    velX: 0,
    velY: 0,
    colour: stringToColour(socket.id),
    position: 'up'
  };

  socket.on('disconnect', () => {
    delete players[socket.id];
    io.emit('gameStateUpdate', players);
  });

  socket.on('up', () => {
    console.log('up message received from ', socket.id);
    players[socket.id].position = 'up';
    accelPlayer(socket.id, 0, -1);
  });

  socket.on('down', () => {
    console.log('down message received from ', socket.id);
    players[socket.id].position = 'down';
    accelPlayer(socket.id, 0, 1);
  });

  socket.on('left', () => {
    console.log('left message received from ', socket.id);
    players[socket.id].position = 'left';
    accelPlayer(socket.id, -1, 0);
  });

  socket.on('right', () => {
    console.log('right message received from ', socket.id);
    players[socket.id].position = 'right';
    accelPlayer(socket.id, 1, 0);
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');

  setInterval(gameLoop, 30);
});
