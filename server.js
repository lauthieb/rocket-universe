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
    engine.movePlayer(playerId, player.velX, player.velY)
  });

  io.emit('gameStateUpdate', engine.players);
}

io.on('connection', (socket) => {
  console.log('User connected: ', socket.id);

  // Création d'un nouveau joueur
  engine.players[socket.id] = {
    x: 0,
    y: 0,
    velX: 0,
    velY: 0,
    colour: engine.stringToColour(socket.id),
    position: 'up'
  };

  /**
   * TODO 1:
   * Supprimer le joueur lorsque quelqu'un se déconnecte
   * Puis, prévenir le client afin qu'il se mette à jour
   */

  socket.on('up', () => {
    console.log('up message received from ', socket.id);

    /**
     * TODO 2:
     * Changer la position du player correspondant
     */
    engine.accelPlayer(socket.id, 0, -1);
  });

  socket.on('down', () => {
    console.log('down message received from ', socket.id);

    /**
     * TODO 2:
     * Changer la position du player correspondant
     */
    engine.accelPlayer(socket.id, 0, 1);
  });

  socket.on('left', () => {
    console.log('left message received from ', socket.id);

    /**
     * TODO 2:
     * Changer la position du player correspondant
     */
    engine.accelPlayer(socket.id, -1, 0);
  });

  socket.on('right', () => {
    console.log('right message received from ', socket.id);

    /**
     * TODO 2:
     * Changer la position du player correspondant
     */
    engine.accelPlayer(socket.id, 1, 0);
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');

  setInterval(gameLoop, 30);
});
