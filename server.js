const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const engine = require('./engine.js');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

function gameLoop() {
  Object.keys(engine.players).forEach((playerId) => {
    let player = engine.players[playerId];

    if(engine.checkCollisionWithStar(player)){
      player.score++;
      engine.generateStar();
    }
    engine.movePlayer(playerId, player.velX, player.velY);
  });

  let playersSorted = {};
  Object.keys(engine.players)
      .sort((player1, player2) => engine.players[player1].score > engine.players[player2].score)
      .forEach(playerId => playersSorted[playerId] = engine.players[playerId]);

  io.emit('gameStateUpdate', {players: playersSorted, star: engine.star});
}

io.on('connection', (socket) => {
  console.log('User connected: ', socket.id);

  engine.players[socket.id] = {
    name: engine.nameOfPlayer(),
    score: 0,
    x: 0,
    y: 0,
    velX: 0,
    velY: 0,
    height: 20,
    width: 20,
    colour: engine.stringToColour(socket.id),
    position: 'up'
  };

  socket.on('disconnect', () => {
    delete engine.players[socket.id];
    io.emit('gameStateUpdate', engine.players);
  });

  socket.on('up', () => {
    console.log('up message received from ', socket.id);
    engine.players[socket.id].position = 'up';
    engine.accelPlayer(socket.id, 0, -1);
  });

  socket.on('down', () => {
    console.log('down message received from ', socket.id);
    engine.players[socket.id].position = 'down';
    engine.accelPlayer(socket.id, 0, 1);
  });

  socket.on('left', () => {
    console.log('left message received from ', socket.id);
    engine.players[socket.id].position = 'left';
    engine.accelPlayer(socket.id, -1, 0);
  });

  socket.on('right', () => {
    console.log('right message received from ', socket.id);
    engine.players[socket.id].position = 'right';
    engine.accelPlayer(socket.id, 1, 0);
  })
});

http.listen(process.env.PORT || 3000, () => {
  console.log('Server listening');

  engine.generateStar();

  setInterval(gameLoop, 30);
});
