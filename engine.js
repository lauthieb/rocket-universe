const GAME_SIZE = 550;
const players = {};

function isInBounds(pos) {
  return pos >= 0 && pos <= GAME_SIZE - 30;
}

function isAcceptableVel(vel) {
  return vel >= -5 && vel <= 5;
}

function movePlayer(id, x, y) {
  const newX = players[id].x + x;
  const newY = players[id].y + y;

  if (isInBounds(newX) && isInBounds(newY)) {
    players[id].x = newX;
    players[id].y = newY;
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

module.exports = {
  players: players,
  stringToColour: stringToColour,
  movePlayer: movePlayer,
  accelPlayer: accelPlayer
};