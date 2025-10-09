///////////////////////////////////////////////////////////////////////
// ___________________________ Avec WHILE ___________________________//
///////////////////////////////////////////////////////////////////////

//let prenom = prompt('Entrez votre prénom');

// Tant que le prénom est un nombre ou s'il est vide
while(!isNan(prenom) || prenom.trim() === '') {
    // On affiche un message et on redemande à l'utilisateur d'entrer un nom
    console.log ('Vous n\'avez pas entré un nom valide');
    // ! Attention , on fera toujours en sorte de changer la valeur de la variable utilisée dans la condition sinon, 
    // On est coincé dans la boucle pour toujours

    // prenom = prompt('Entre votre prénom);
}

alert('Bienvenue' + prenom);
// while(true) {
    // boucle infirnie parfaite ==> crash
// }

///////////////////////////////////////////////////////////////////////
// ________________________ Avec do WHILE ___________________________//
///////////////////////////////////////////////////////////////////////
let prenom;
do {
    prenom = prompt('Entrez un prénom');
} while(!isNan(prenom) || prenom.trim() === '');
alert('Bienvenue' + prenom);

// Attention, le do... while se fera toujours au moins 1 fois, même si la condition de départ, n'ets pas respectée

let compteur = 1;
while(compteur <= 3) {
    console.log(compteur);
    compteur++;
}

///////////////////////////////////////////////////////////////////////
// __________________________ Avec un FOR ___________________________//
///////////////////////////////////////////////////////////////////////

// Il est utilisé pour (l'initialisation des variables; condition de séjour; pas d'incrémentation)
//for(let i = 0; i < 10; i++) {
    //console.log(i);
//}

// On ca créer un tableau
let courses = ["Patates", "carottes", "PQ", "Poulet"];
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);

// On peut réutiliser le "i" dans un autre tableau
// On initialise "i" dans le "for", donc il n'existe que là
for(let i = 0; i < courses.length; i++) {
    // Va afficher le nom des éléments du tableau
    console.log(i);

    // Va afficher l'index des éléments dans le tableau
    console.log(courses[i]);
}

// Ici "i" n'existe pas
console.log(i)

/// Autre exemple ///
let notes = [];
let nombreEtudiants = 4;
for (let i = 0; i < notes.length; i++) {
    // Ici on fait {i+1} ==> pour que le numéro de l'élève commence par "1"
    let note = prompt(`Entrez la note de l'élève n'° {i+1}`);
    notes.push(note);
}

alert(notes);

//////////////////////////////////////////////////////////////////////
// _________________ Avec un FOR PLUS SYMPAS________________________//
//////////////////////////////////////////////////////////////////////
// Ils ne sont utilisés que pour des tableaux déjà remplis
let vetements = ['salopette', 'Robe', 'chaussette', 'Pantalon'];

// for in (il affiche les indices et les vetements)
// Mais on doit pas déclarer la variable
// Pas incrémenter etc
// L'ordinateur le fait pour nous
for(let indice in vetements) {
    // La variable indice peut s'appeler comme on veut mais elle contiendra les différents indices de chacun des éléments
    console.log(`Vêtements n°{parseInt(indice) +1} : ${vetements[indice]}`);
}

// for of (on récupère la valeur, pa sl'indice)
for(let vetement of vetements) {
    // La variable vetement peut s'appeller comme on veut mais elle contiendra les différentes valeurs de chacun des éléments
    console.log(vetement);

    // Ici, on peut avoir accès à l'indice de la valeur
}

// for each
// array.forEach(valeur, indice, array => {}) 

// Utilisé comme un for of
vetements.forEach(vetement => {
    console.log(vetement);
})

// Utilisé à demi-potentiel (valeur + indice)
vetements.forEach((vetement, indice) => {
    console.log(indice + " : " + vetement);
})

// Utilisé à full potentiel (très très peu utilisé) 
// La 3eme valeur (vetementsInitiaux) se sera 
vetements.forEach((vetement, indice, vetementsIntitiaux) => {
    console.log(indice + " : " + vetement);
    console.log(vetementsIntitiaux); // représente le tableau sur lequel le forEach est utilisé
})

// Pour l'instant on n'a pas appris à créer de l'html proprement donc on va se contenter de "innerhtml"
const UL_TRAINERS = document.getElementById('trainers');
const favTrainers = ['Gavin', 'Aurélien', 'Mélanie'];

for(let trainer of favTrainers) {
    // Ici on a pas mis le "+", donc le nouveau nom va remplacer l'ancien
    // Donc on verra juste le dernier
    UL_TRAINERS.innerHTML = `<li>${trainer}</li>`;

    // Ici, je mets le "+", donc chaque fois qu'il y a un nom, on rajoute le suivant au précédent
    UL_TRAINERS.innerHTML += `<li>${trainer}</li>`;
}

favTrainers.forEach(trainer => {
    // Ici, je mets le "+", donc chaque fois qu'il y a un nom, on rajoute le suivant au précédent
    UL_TRAINERS.innerHTML += `<li>${trainer}</li>`;
})

