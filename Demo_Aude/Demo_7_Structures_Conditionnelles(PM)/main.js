//!---------------------------------
//! LES STRUCTURES CONDITIONNELLES
//!---------------------------------

//? Le if (SI)
// s'écrit souvent if...else (SI...SINON...)

//? 1) Le if else simple
const INPUT_NB1 = document.getElementById('nb1');
const BTN_VALIDER1 = document.getElementById('valider1');
const P_RESULTAT1 = document.getElementById('resultat1');

BTN_VALIDER1.addEventListener('click', () => {
    let nombreATester = INPUT_NB1.valueAsNumber;

    // Si le nombre est pair
        //Afficher qu'il l'est dans le P
    // Sinon
        //Afficher qu'il ne l'est pas dans le P

    // En Pseudo-code ça donnerait :
    // SI nombreATester MOD 2 VAUT 0
        // ECRIRE("Pair")
    // SINON 
        // ECRIRE("Impair")

    // Pour savoir si un nombre est pair, il faut qu'il soit entièrement divisible par 2, donc que le modulo du nombre par 2 vale 0
    if( nombreATester % 2 === 0){

        P_RESULTAT1.textContent = `Le nombre ${nombreATester} est pair`;

    } else {

        P_RESULTAT1.textContent = `Le nombre ${nombreATester} est impair`;
    }
});

//? 2) Le if else if else (SI SINON SI SINON)
const INPUT_NB2 = document.getElementById('nb2');
const BTN_VALIDER2 = document.getElementById('valider2');
const P_RESULTAT2 = document.getElementById('resultat2');

BTN_VALIDER2.addEventListener('click', () => {

    let nombreATester = INPUT_NB2.valueAsNumber;

    //Si mon nombre n'est pas vraiment un nombre
    if( isNaN(nombreATester) ){

        P_RESULTAT2.textContent = "Veuillez entrer un nombre ! 😡";

    } else if( nombreATester % 2 === 0 ) {

        P_RESULTAT2.textContent = `Le nombre ${nombreATester} est pair`;

    } else {

        P_RESULTAT2.textContent = `Le nombre ${nombreATester} est impair`;
    }
})

//? 3) Le if à ne pas faire
const P_RESULTAT3 = document.getElementById('resultat3');

// Créer une variable avec la date du jour
const DATE_DU_JOUR = new Date();
// Je récupère le jour de la semaine de la date du jour
const JOUR_SEMAINE = DATE_DU_JOUR.getDay();
// La valeur qu'on a récupéré est un nombre entre 0 et 6
// 0 correspondant au dimanche et 6 au samedi

// si dimanche
if(JOUR_SEMAINE === 0){

    P_RESULTAT3.textContent = "C'est dimanche, c'est le weekend !";

} else if(JOUR_SEMAINE === 1) {

    P_RESULTAT3.textContent = "C'est lundi, c'est le début de la semaine";

} else if(JOUR_SEMAINE === 2 ) {

    P_RESULTAT3.textContent = "C'est mardi, c'est le début de la semaine";

} else if(JOUR_SEMAINE === 3) {

    P_RESULTAT3.textContent = "C'est mercredi, c'est le milieu de la semaine (mais le morceau de la semaine qui est chiant)";

} else if(JOUR_SEMAINE === 4) {
    
    P_RESULTAT3.textContent = "C'est jeudi, c'est bientôt le weekend";

} else if(JOUR_SEMAINE === 5) {
    
    P_RESULTAT3.textContent = "C'est vendredi, c'est ce soir le weekend";

} else {

    P_RESULTAT3.textContent = "C'est samedi, c'est le weekend !";

}
 
// On évite les if else if else if else if à l'infini. En général, on tolère 2 else if
// if else if else if else -> encore ok, au dessus, on fera plutôt...

// ? Le switch 


// ? La ternaire
// ? Le coalesce
