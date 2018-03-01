$(function () {
  const socket = io();
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  socket.on('gameStateUpdate', function (gameState) {
    /**
     * TODO 1:
     * Efface l'ensemble du canvas
     */

    document.getElementById('playerCount').innerHTML = `Number of players: ${Object.keys(gameState).length}`;

    /**
     * TODO 2:
     * Dessinons les fusées !
     */
  });

  $('html').keydown(e => {
    console.log(e);

    switch (e.key) {
      case 'ArrowDown':
        socket.emit('down');
        break;
      case 'ArrowUp':
        socket.emit('up');
        break;
      case 'ArrowLeft':
        socket.emit('left');
        break;
      case 'ArrowRight':
        socket.emit('right');
        break;
    }
  })
});
