//! Récupérer infos utilisateur
let prenom = prompt('Quel est votre prénom ?');
let nom = prompt('Quel est votre nom ?');
let age = prompt('Quel est votre âge ?');
// Solution : Il faut transformer age en un nombre
// Le plus propre :
let age2 = parseInt(age); //utiliser la méthode prévue pour transformer en entier

// Les cradingues
// en utilisant le casting explicite
let age3 = Number(age); 

// en rajoutant un + devant une chaine permet de la transformer en nombre //Beaucoup de développeurs n'aiment pas ce raccourcis car vite illisible dans un gros calcul par exemple
let age4 = +age; 

// en incrémentant directement age
age++; //++ est un opérateur qui rajoute 1 à la variable et comme cet opérateur n'est utilisable que sur les nombres, il y a un conversion implicite faite par js

//! Afficher
alert(`Enchanté ${prenom} ${nom}, vous allez bientôt avoir ${age2 + 1} ans`);

// La magie et les dingueries sur JS :
alert( ('b' + 'a' + + 'a' + 'a').toLowerCase() );