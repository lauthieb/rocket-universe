$(function () {
  const socket = io();
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  socket.on('gameStateUpdate', function (gameState) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('playerCount').innerHTML = "Number of players: " + Object.keys(gameState).length;
    Object.keys(gameState).forEach((playerId) => {
      let player = gameState[playerId];
      ctx.fillStyle = player.colour;

      const img = new Image(20, 20);
      img.src = './rocket.png';

      ctx.fillRect(player.width+13, player.height+20, 5, 10);
      ctx.drawImage(img, player.width, player.height);
    })
  });

  $('html').keydown(e => {
    console.log(e);

    switch (e.key) {
      case "ArrowDown":
        socket.emit('down');
        break;
      case "ArrowUp":
        socket.emit('up');
        break;
      case "ArrowLeft":
        socket.emit('left');
        break;
      case "ArrowRight":
        socket.emit('right');
        break;
    }
  })
});
