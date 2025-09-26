// ! Exercice 1 : Gestion d'accès
const INPUT_AGE = document.getElementById('age');
const BTN_ENTRER = document.getElementById('entrer');
const P_RESULT_ACCES = document.getElementById('resultat-acces');

BTN_ENTRER.addEventListener('click', () => {
    const AGE = INPUT_AGE.valueAsNumber;

    //condition excluantes
    if (isNaN(AGE) || AGE < 0 || AGE > 130) {
        P_RESULT_ACCES.textContent = 'Petit malin, essaie plutôt de faire une valeur correcte 😡';
    } else if (AGE >= 18) {
        P_RESULT_ACCES.textContent = 'Bienvenue sur notre site d\'adultes où on parle mal des gros bébés cadums 💅🏻';
    } else {
        P_RESULT_ACCES.textContent = 'Retourne dans ta pousette espèce de gros bébé 👶🏻';
    }

    INPUT_AGE.value = '';
})

// ? Faire en sorte qu'à l'appui sur Entrée, notre code se déclenche également
// * Ce sera plus simple avec une fonction mais on va se débrouiller dans pour l'instant
// event, est un paramètre facultatif de la fonction déclenchée et représente l'évènement qui vient d'être entendu par le listener (il pourrait s'appeler n'importe comment, mais par convention on l'appelle e ou event)
INPUT_AGE.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        //Idéal : si notre vérification de l'âge avait été dans une fonction, on appelle la fonction
        // Pour l'instant on va tricher pour ne pas avoir à remettre tout le code d'au desus ici : En déclenchant le click de mon bouton manuellement
        BTN_ENTRER.click();
    }
})

// ! Exercice 2 : Année Bissextile
const INPUT_ANNEE = document.getElementById('annee');
const BTN_VERIFIER = document.getElementById('verifier');
const P_RESULTAT_BISS = document.getElementById('resultat-biss');

BTN_VERIFIER.addEventListener('click', () => {
    const ANNEE = INPUT_ANNEE.valueAsNumber;

    //! Attention, un && se fera toujours avant le || (si vous mettez des (), elles sont prioritaires)

    // 10 * 2 + 4 -> 10 * 2 va se faire avant puis on aura 20 + 4
    // 10 * (2 + 4 ) -> 2 - 4 va se faire avant, puis 10 + 6 -> 16
    // if(isNaN(ANNEE)){
    //     P_RESULTAT_BISS.textContent = 'Tu devrais tester avec une vraie date... je dis ça... je dis rien 🙄';
    // } else if( (ANNEE % 4 === 0 && ANNEE % 100 !== 0 ) || (ANNEE % 400 === 0) ){
    //     P_RESULTAT_BISS.textContent = `L'année ${ANNEE} est bissextile`;
    // }
    // else {
    //     P_RESULTAT_BISS.textContent = `L'année ${ANNEE} ,n'est pas bissextile`;
    // }

    // Possible aussi avec une ternaire mais plus compliquée à lire, pas le plus opti pour ce cas de figure
    if (isNaN(ANNEE)) {
        P_RESULTAT_BISS.textContent = 'Tu devrais tester avec une vraie date... je dis ça... je dis rien 🙄';
    }
    else {
        P_RESULTAT_BISS.textContent = `L'année ${ANNEE} ${((ANNEE % 4 === 0 && ANNEE % 100 !== 0) || (ANNEE % 400 === 0)) ? 'est' : 'n\est pas'} bissextile`;
    }

    INPUT_ANNEE.value = '';

})

INPUT_ANNEE.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        BTN_VERIFIER.click();
    }
})

// ! Exercice 3 : Distributeur de boissons
const INPUT_BOISSON = document.getElementById('choix-boisson');
const BTN_VALIDER = document.getElementById('valider');
const P_RESULT_BOISSON = document.getElementById('resultat-boisson');
const IMG_BOISSON = document.getElementById('image-boisson');

BTN_VALIDER.addEventListener('click', () => {
    const CHOIX_BOISSON = INPUT_BOISSON.valueAsNumber;

    switch (CHOIX_BOISSON) {
        case 453:
            P_RESULT_BOISSON.textContent = 'Votre café :';
            IMG_BOISSON.src = './images/cafe.png';
            break;
        case 312:
            P_RESULT_BOISSON.textContent = 'Votre cappuccino :';
            IMG_BOISSON.src = './images/cappuccino.png';
            break;
        case 265:
            P_RESULT_BOISSON.textContent = 'Votre thé :';
            IMG_BOISSON.src = './images/the.png';
            break;
        case 365:
            P_RESULT_BOISSON.textContent = 'Votre matcha :';
            IMG_BOISSON.src = './images/matcha.png';
            break;
        case 742:
            P_RESULT_BOISSON.textContent = 'Votre chocolat :';
            IMG_BOISSON.src = './images/chocolat-chaud.png';
            break;
        default:
            P_RESULT_BOISSON.textContent = 'Erreur : Code invalide';
            IMG_BOISSON.src = './images/error.png';
    }

    INPUT_BOISSON.value = '';

})

INPUT_BOISSON.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        BTN_VALIDER.click();
    }
})