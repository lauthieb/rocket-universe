# rocket-universe

Le jeu où les fusées doivent attraper les étoiles ! Développé avec Express.js & Socket.io 🚀

## step-3 : Attrapons les étoiles !

Wow ! Tu es un vrai expert !

Maintenant que nos fusées bougent, allons aux conquêtes des étoiles !

Afin de te guider pendant ton périple, nous t'avons fourni un tableau de bord avec les différentes fusées présentes dans l'espace et le nombre d'étoiles qu'ils ont conquis !

## TODO 1 : Fais-moi apparaitre une étoile !

### Premièrement, plongeons au sein de "engine.js" !

Jusqu'ici, nous n'avions pas eu besoin d'ouvrir ce fichier, mais un jour ou l'autre, il le faut ! "engine.js" est tout simplement le moteur du jeu, il possède ainsi les objets et les méthodes utiles au fonctionnement.

Compléte la fonction ```generateStar()``` afin de générer les positions de l'étoile.
Des petites indications pour t'aider : tu trouveras dans le fichier, l'objet ```const star``` qui représente l'étoile, et la constante ```const GAME_SIZE``` qui donne la taille du plateau de jeu.

Et voilà, nous en avons déjà fini dans ce moteur, il n'y avait rien de méchant n'est-ce pas ?

### Maintenant, direction côté front !

Ici c'est simple, il suffit juste que tu dessines l'image dans le canvas.
Pour t'éviter de perdre du temps à chercher une image dans ta conquête, tu en trouveras une à cet emplacement : "public/img/star.png".

## TODO 2 : Attrapons les étoiles !

Maintenant, nous pensons que tu as les compétences et l'expérience pour t'en sortir seul. Et oui, il faut bien prendre son envol un jour ou l'autre !

Bon d'accord, voici une dernière aide pour te guider : 
Vérifie dans la game loop si une fusée est entrée en collision avec l'étoile (Aide : [2D collision detection](https://developer.mozilla.org/fr/docs/Games/Techniques/2D_collision_detection)). Si c'est le cas, incrémente le score de la fusée concernée et génère une nouvelle étoile :smile:

Bon courage pilote !
