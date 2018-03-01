# rocket-universe

Le jeu où les fusées doivent attraper les étoiles ! Développé avec Express.js &amp; Socket.io 🚀

## step-1 : Hey directions !

Bienvenue dans cette première étape astronaute ! Prêt à conquérir l'espace ?

Avant de t'attaquer aux différents TODO, nous allons t'expliquer l'arborescence applicative !

* package.json : c'est ici que tu retrouves les dépendances utiles au projet
* engine.js : c'est le moteur du jeu, à ne pas toucher ! Il est composé de fonctions qui nous seront utiles par la suite !
* index.html : c'est la page affichée lorsque tu te rendras sur [http://localhost:3000](http://localhost:3000)
* public/img : l'ensemble des images utiles au projet
* public/styles.css : l'ensemble des styles appliqués côté client
* public/client.js : c'est ici que tu retrouves toute la logique côté navigateur
* server.js : c'est là que tu retrouves le code serveur

Voilà, tu connais maintenant l'architecture globale de notre jeu, nous t'invitons à lire les commentaires présents dans le code afin de mieux comprendre chaque partie du code déjà généré !
N'hésite pas si tu as des questions, nous sommes présents pour te répondre également !

### TODO 1 : Déconnexion d'un utilisateur (server.js)

Comme tu as pu le voir dans la partie cours, il est possible d'agir côté serveur dès lors qu'une personne se déconnecte.

Indice : utilise la fonction ``delete`` offerte par JavaScript ;)

Enfin, n'oublie pas de prévenir le client afin qu'il puisse agir après cete déconnexion !

### TODO 2 : Changement de direction (server.js)

Ok, très simple ! Que faire lorsque le client te prévient que l'utilisateur a cliqué en haut ? Et bien tu changes la position du joueur vers 'up' !
Voici les différentes valeurs : 'up', 'down', 'left' et 'right'. N'hésite pas à abuser du ``console.log``. A toi de jouer !

### TODO 3 : Changement de direction (client.js)

Il ne te reste plus qu'à appeler le serveur dès lors qu'un utilisateur clique sur une des flèches.

### Testons maintenant !

N'oubliez pas le fameux ``npm install`` afin d'obtenir les dépendances utiles au projet.

Ensuite, lancez simplement ``npm start`` et rendez-vous sur [http://localhost:3000](http://localhost:3000)

Maintenant, vous avez simplement à appuyer sur les flèches, vérifier que le serveur reçoit bien des messages de ce type :

```
User connected:  DvcDJSmC1gjGPf17AAAB
down message received from  DvcDJSmC1gjGPf17AAAB
up message received from  DvcDJSmC1gjGPf17AAAB
left message received from  DvcDJSmC1gjGPf17AAAB
right message received from  DvcDJSmC1gjGPf17AAAB
right message received from  DvcDJSmC1gjGPf17AAAB
down message received from  DvcDJSmC1gjGPf17AAAB
up message received from  DvcDJSmC1gjGPf17AAAB
left message received from  DvcDJSmC1gjGPf17AAAB
```

Ensuite, n'hésitez pas à vérifier en ouvrant une autre fenêtre, que le nombre de joueurs s'incrémente côté client et lorsque vous fermez un onglet il redevient à la valeur précédente.

Tout est bon ? Passez à l'étape 2 avec ``git checkout step-2`` !