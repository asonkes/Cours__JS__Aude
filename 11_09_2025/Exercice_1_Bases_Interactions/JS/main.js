const h1 = document.querySelector("h1");
console.log(h1);
console.error("Error brain not found : J'ai faim");
console.warn("Attention ça glisse");
console.debug("Permet d'afficher une erreur aussi");
//alert("Salut, comment tu vas ?");

//let ageUtilisateur = prompt("Donnes-moi ton âge !");
//console.log(ageUtilisateur);

//let confirmation = confirm("Vous vous avez bien" + ageUtilisateur + " ? ");
//console.log(confirmation);

//let confirmation = confirm(`Vous avez vien ${ageUtilisateur} ?`);
//console.log(confirmation);

/** ------------------------------------------------------------------------------- */
/** Exercice */
/**
 * Créer un nouveau dossier Exercice_1_Bases_Interactions
 * Créer un fichier html, un fichier js (et les relier)
 * Demander à l'utilisateur (avec prompt) et stocker dans des variables les infos suivantes le sunes après les autres
 * - prenom
 * - nom
 * - age
 * Puis à la fin, afficher (alert)
 * 'Enchanté [prénom] [nom], vous allez bientôt avoir [âge +1 ] ans'
 * Il y a un piège
 */

let prenomUtilisateur = prompt("Quel est votre prénom");
console.log(prenomUtilisateur);

let nomUtilisateur = prompt("Quel est votre nom");
console.log(nomUtilisateur);

let ageUtilisateur = prompt("Quel est votre âge ?");
console.log(ageUtilisateur);
ageUtilisateur++;



//alert("Bonjour " + prenomUtilisateur + " " + nomUtilisateur + " vous allez bientôt avoir " + ageUtilisateur + "ans");
alert(`Bonjour ${prenomUtilisateur} ${nomUtilisateur} vous allez bientôt avoir ${ageUtilisateur} ans`);

