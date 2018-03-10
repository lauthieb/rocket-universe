$(function () {
  const socket = io();
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  socket.on('gameStateUpdate', function (gameState) {
    let playersScore = document.getElementById("playersScore");
    let rowCount = playersScore.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
        playersScore.deleteRow(i);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('playerName').innerHTML = `Welcome ${gameState.players[socket.id].name} !`;

    const star = new Image(gameState.star.width, gameState.star.height);
    star.src = `./img/star.png`;
    ctx.drawImage(star, gameState.star.x, gameState.star.y);

    Object.keys(gameState.players).forEach((playerId) => {
      let player = gameState.players[playerId];
      ctx.fillStyle = player.colour;

      const rocket = new Image(player.width, player.height);
      rocket.src = `${playerId === socket.id ?'./img/rocket-player':'./img/rocket'}-${player.position}.png`;

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

      let playerRow = playersScore.insertRow(1);
      let playerNameCell = playerRow.insertCell(0);
      playerNameCell.innerHTML = player.name;
      let playerScoreCell = playerRow.insertCell(1);
      playerScoreCell.innerHTML = player.score;
    });
  });

  $('html').keydown(e => {
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
