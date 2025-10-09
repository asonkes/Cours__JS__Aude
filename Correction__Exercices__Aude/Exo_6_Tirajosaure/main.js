//! Créer un tableau vide
// let dinosaures = new Array(10); //permet de créé un tableau de 10 cases vides

let dinosaures = [];

// ! Récupérer mes éléments html
const INPUT_DINO = document.getElementById('dino');
const SPAN_ERROR = document.getElementById('error');
const P_DINO_LIST = document.getElementById('dino-list');

const BTN_TIRAJOSAURE = document.getElementById('tirajosaure');
const P_DINO_SELECT = document.getElementById('dino-select');

INPUT_DINO.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        ajoutDino();
        P_DINO_SELECT.textContent = '';
    }
})

BTN_TIRAJOSAURE.addEventListener('click', () => {
    // S'il y a des valeurs dans notre tableau 
    if (dinosaures.length > 0) {
        // ['Petit-Pied', 'Denver', 'Casimir']
        // ! length -> taille du tableau
        let randomIndex = Math.floor(Math.random() * dinosaures.length);

        P_DINO_SELECT.textContent = `C'est ${dinosaures[randomIndex]} qui s'est pris la météorite ☄️`;

        // ! Pour supprimer dans un tableau : .splice()
        dinosaures.splice(randomIndex, 1);
        afficherDino();
    }else {
        P_DINO_SELECT.textContent = 'Remplissez d\'abord la liste de dinosaures';
    }
})



// ---------- Fonctions

function ajoutDino() {
    SPAN_ERROR.textContent = '';
    //? récupérer la valeur de l'input
    // * trim() s'utilise sur les string et permet de retirer les espaces inutiles à gauche et droite d'une chaine
    let nomDino = INPUT_DINO.value.trim();

    //? Vérifier si tout est ok
    if (nomDino !== '' && isNaN(nomDino)) {
        // ? si oui, ajouter dans le tableau + afficher le tableau
        // ! Ajout dans tableau
        dinosaures.push(nomDino);
        INPUT_DINO.value = '';
        afficherDino();

    }
    // ? si non, afficher un message d'erreur
    else {
        SPAN_ERROR.textContent = 'Veuillez entrer un nom';
    }
}

function afficherDino() {
    P_DINO_LIST.textContent = dinosaures.join(" | ");
}