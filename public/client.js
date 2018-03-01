$(function () {
  const socket = io();
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  socket.on('gameStateUpdate', function (gameState) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('playerCount').innerHTML = `Number of players: ${Object.keys(gameState).length}`;
    Object.keys(gameState).forEach((playerId) => {
      let player = gameState[playerId];
      ctx.fillStyle = player.colour;

      const rocket = new Image(20, 20);
      rocket.src = `./img/rocket-${player.position}.png`;

      switch (player.position) {
        case 'down':
          ctx.fillRect(player.x + 14, player.y, 5, 10);
          break;
        case 'up':
          ctx.fillRect(player.x + 13, player.y + 20, 5, 10);
          break;
        case 'left':
          ctx.fillRect(player.x + 22, player.y + 14, 10, 5);
          break;
        case 'right':
          ctx.fillRect(player.x, player.y + 13, 10, 5);
          break;
      }

      ctx.drawImage(rocket, player.x, player.y);
    })
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
