$(function () {
  const socket = io();

  socket.on('gameStateUpdate', (gameState) => {
    document.getElementById('playerCount').innerHTML = `Number of players: ${Object.keys(gameState).length}`;
  });

  $('html').keydown(e => {
    switch (e.key) {
      case 'ArrowDown':
        /**
         * TODO 3:
         * Appeler le serveur avec la bonne direction
         */
        break;
      case 'ArrowUp':
        /**
         * TODO 3:
         * Appeler le serveur avec la bonne direction
         */
        break;
      case 'ArrowLeft':
        /**
         * TODO 3:
         * Appeler le serveur avec la bonne direction
         */
        break;
      case 'ArrowRight':
        /**
         * TODO 3:
         * Appeler le serveur avec la bonne direction
         */
        break;
    }
  })
});
