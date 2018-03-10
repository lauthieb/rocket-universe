// La taille du plateau en pixels
const GAME_SIZE = 550;

// L'objet contenant les joueurs
const players = {};

// L'objet qui représente l'étoile
const star = {x:0, y:0, height: 20, width: 20};

// La liste des noms de joueurs
const namePlayers = require('./public/name-players.json');

/**
 * Cette fonction vérifie que la position donnée est bien dans le canvas
 * @param pos
 * @returns {boolean}
 */
function isInBounds(pos) {
  return pos >= 0 && pos <= GAME_SIZE - 30;
}

/**
 * Cette fonction limite la vélocité à 5
 * @param pos
 * @returns {boolean}
 */
function isAcceptableVel(vel) {
  return vel >= -5 && vel <= 5;
}

/**
 * Cette fonction permet de faire bouger un joueur
 * @param pos
 * @returns {boolean}
 */
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

/**
 * Cette fonction permet de faire accélerer un joueur
 * @param pos
 * @returns {boolean}
 */
function accelPlayer(id, x, y) {
  const newVelX = players[id].velX + x;
  const newVelY = players[id].velY + y;

  if (isAcceptableVel(newVelX) && isAcceptableVel(newVelY)) {
    players[id].velX = newVelX;
    players[id].velY = newVelY;
  }
}

/**
 * Cette fonction transforme une chaîne de caractère en une couleur hexadécimale
 * @param pos
 * @returns {boolean}
 */
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

/**
 * Cette fonction permet de générer l'étoile
 */
function generateStar() {
    /**
     * TODO 1 : Générer les positions de l'étoile
     */
}

/**
 * Cette fonction permet de récupérer un nom pour le joueur
 * @returns {string}
 */
function nameOfPlayer() {
  return namePlayers[Math.floor(Math.random() * namePlayers.length)];
}

module.exports = {
  players: players,
  stringToColour: stringToColour,
  movePlayer: movePlayer,
  accelPlayer: accelPlayer,
  nameOfPlayer: nameOfPlayer,
  star: star,
  generateStar: generateStar
};