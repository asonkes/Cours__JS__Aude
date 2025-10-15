//! Les boucles
//! 2 types
// ? TANT QUE (condition ok) FAIRE (quelque chose)
// ? while(condition){} 
// ? FAIRE (quelque chose) TANT QUE (condition ok)
// ? do{}while(condition)
// * On utilise le tant que quand on veut répéter une action plusieurs fois mais le nombre de fois est inconnu est peut varier (ex: un jeu, la lecture d'un fichier)

// let prenom = prompt('Entrez votre prénom');

//tant que le prénom est un nombre ou qu'il est vide
// while(!isNaN(prenom) || prenom.trim() === '') {
//     // on affiche un message et on redemande à l'utilisateur d'entrer un nom
//     console.log('Vous n\'avez pas entré un nom valide');
//     prenom = prompt('Entrez votre  prénom');
//     // ! Attention, on fera toujours en sorte de changer la valeur de la variable utilisée dans la condition sinon, on est coincé dans la boucle pour toujours
// }

// alert('Bienvenue ' + prenom); //code lu à la sortie de la boucle

// while(true){
    // boucle infinie parfaite -> crash
// }

//* avec do...while
// let prenom;
// do {
//     prenom = prompt('Entrez un prénom');
    
// }while(!isNaN(prenom) || prenom.trim() === '');
// alert('Bienvenue ' + prenom);

// ! Attention, le do...while se fera toujours au moins 1 fois, même si la condition de départ, n'est pas respectée

let compteur = 5;
// while(compteur <= 3 ){
//     console.log(compteur);
//     compteur++;
// }

// do {
//     console.log(compteur);
//     compteur++;
// }while(compteur <= 3)


// ? ------------------------------
// ? POUR VALEUR ALLANT DE X à Y, PAR PAS DE Z, FAIRE
// ? for(let i = 0; i < 10, i++) {}
// * On utlise le pour quand on sait exactement combien de fois on doit répéter l'action (ex: faire quelque chose sur chaque valeur d'un tableau)
// POUR(INITIALISATION VARIABLE; CONDITION DE SEJOUR; PAS D'INCREMENTATION)

// for(let i = 0; i < 10; i++){
//     console.log(i); // va afficher 0 -> 9
// }

let courses = ['Patates', 'Carottes', 'PQ', 'Poulet', 'Ail'];
for(let i = 0; i < courses.length; i++){
    console.log(i);
    console.log(courses[i].toUpperCase());
}

let notes = [];
let nombreEtudiants = 4;
// for(let i = 0; i < nombreEtudiants; i++ ){
//     let note = prompt(`Entrez la note de l'élève n°${ i+1 }`);
//     notes.push(note);
// }

// alert(notes);

// ? ------------------------------
// ? les for plus sympas
// ! Ne sont utilisés que sur des tableaux déjà remplis

let vetements = ['Salopette', 'Robe', 'Chaussette', 'Pantalon'];

// ? for in (récupérer indice de chaque élément)
console.clear();
console.log("FOR IN")

for(let indice in vetements){
    // la variable indice peut s'appeler comme on veut mais elle contiendra les différents indice de chacun des éléments
    console.log(`Vêtement n°${parseInt(indice) + 1} : ${vetements[indice]}`);
}

// ? for of
console.log("FOR OF ")

for(let vetement of vetements){
    // la variable vetement peut s'appelle comme on veut mais elle contiendra les différentes valeurs de chacun des éléments
    console.log(vetement);
    // ! plus moyen d'avoir l'indice de la valeur
}

// ? for each
//array.forEach( (valeur, indice, array) => {} )

// utilisé comme un for of (valeur)
console.log("FOR EACH");

vetements.forEach( (vetement) => {
    console.log( vetement.toUpperCase() );
})

// utilisé à demi potentiel (valeur + indice)
vetements.forEach( (vetement, indice) => {
    console.log(indice + ' : ' + vetement);
})

// utilisé à full potentiel (très très très peu utilisé)
console.clear();
vetements.forEach( (vetement, indice, vetementsInitiaux) => {
    console.log(indice + ' : ' + vetement);
    console.log(vetementsInitiaux); //représente le tableau sur lequel le forEach est utilisé
})

// ! Pour l'instant on n'a pas appris à créer de l'html proprement donc on va se contenter de .innerHtml

const UL_TRAINERS = document.getElementById('trainers');

const favTrainers = ['Gavin', 'Aurélien', 'Mélanie', 'Quentin', 'Khun'];

// for(let trainer of favTrainers) {
//     //UL_TRAINERS.innerHTML = UL_TRAINERS.innerHTML + `<li>${trainer}</li>`;
//     UL_TRAINERS.innerHTML += `<li>${trainer}</li>`;
// }

favTrainers.forEach((trainer) => {
    UL_TRAINERS.innerHTML += `<li>${trainer}</li>`;
});

