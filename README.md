# rocket-universe

Le jeu où les fusées doivent attraper les étoiles ! Développé avec Express.js & Socket.io 🚀

## step-2 : Les fusées bougent !

Hello ! Tout d'abord bravo d'être arrivé jusqu'ici !

Pour cette partie, nous allons manipuler que la partie client !

Afin de ne pas perdre trop de temps dans la partie manipulation de canvas HTML5, nous allons te guider pour cette étape !

### TODO 1 : On efface l'ensemble canvas dès la mise à jour !

Afin d'effacer l'ensemble du canvas dès lors que le plateau se met à jour, il suffit d'écrire :
``ctx.clearRect(0, 0, canvas.width, canvas.height);``

### TODO 2 : Dessine-moi des fusées !

Maintenant, il faut boucler sur l'ensemble de l'état actuel du jeu et pour chaque joueur, nous allons dessiner sa fusée !

```
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
});
```

Ce code n'est pas compliqué à comprendre, retenez simplement que l'on dessine chaque joueur à sa position actuelle lors de la mise à jour et que la fusée sera dans le sens de sa direction.

### Testons maintenant !

Lancez simplement ``npm start`` et rendez-vous sur [http://localhost:3000](http://localhost:3000)

Ca y'est, votre fusée bouge ! Si vous ouvrez un deuxième navigateur, vous les verrez bouger simultanément ! 

Tout est bon ? Passez à l'ultime étape avec git checkout step-3 !
