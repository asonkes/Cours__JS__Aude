/** On va initialiser les variables dont on a besoin */
/** Le tableau des mots */
const tab = ["lion", "tigre", "elephant", "ane", "chevreuil", "blaireau"];

/** On doit initialiser la variable de l'input */
const input = document.querySelector(".text input");

/** On initialise la variable du bouton "jouer" */
const button = document.getElementById("button1");

/** On initialise le nbr min et max, même sans valeur */
let nbrMin;
let nbrMax;

/** On définit le nombre de tentatives accordées */
let tentatives = 5;

/** On définit un compteur pour le nombre de parties perdues ou gagnées */
let count = 0;

const randomNumber = generateRandomNumber();
const motFind = generateHiddenWord();

/**On doit sortir les tableaux de la fonction "playGame(), au sinon à chaque appel de la fonction, il refait la même chose avec un tableau de nouveau rien qu'avec des "_" */
/** On récupère le mot à trouver et on le convertit en tableau */
const tabMot = motFind.split("");
console.log(tabMot);

/** On remplace le tableau par des caractères "_" */
/** Pas utiliser "fill" car remplace le tableau d'origine */
const tabMotCache = Array(tabMot.length).fill(" _ ");
console.log(tabMotCache);

/** On fait ici l'évènement au click */
button.addEventListener("click", (event) => {
    event.preventDefault();

    playGame();
})

/** On fait ici l'évènement au clavier */
/** Question Aude, ça pose problème pour le click alors ??? */
 
input.addEventListener("keyup", (event) => {
    event.preventDefault();

    /** Ici on vérifie grace à ça, que lorsqu'on clique sur "enter", l'évènement se déclenche */
    /** Au sinon, c'est lorsqu'on clique sur la touche directement et ça, ca pose problème */
    if(event.key == 'Enter'){
        playGame();
    }
})

function playGame() {
    /** Ici cela permet que s'il y eu une erreur avant */
    /** Qd on tape une lettre, l'erreur disparaisse */
    const error = document.querySelector(".error");
    if(error) {
        error.remove();
    }

    /** On doit initialiser la valeur de l'input */
    /** On enleve les espaces devant et derrière le mot */
    const inputValue = input.value.trim().toLowerCase();
    console.log(inputValue);


    // On vérifie que la valeur entrée dans l'input soit valide
    if(!isNaN(inputValue) || inputValue === '') {
         errorText();
    }

    /** On récupère le span présent dans mon html */
    const spanText = document.querySelector("#mot span");

    /** On définit à la base que la lettre proposée est fausse */
    let lettreProposee = false;
     
    for(let i=0; i < tabMot.length; i++) {

        if(inputValue === tabMot[i]) {
            lettreProposee = true;

            tabMotCache.splice(i, 1, inputValue);

            console.log(tabMotCache);

            /** Pour demain, ici pourrait mettre (if... i == tabMot.length ==> tu as gagné et rendre l'input désactivé) */
            /*
            if(tabMot.length === tabMot.length) {
                console.log("Vous avez trouvé tous les mots");
                
            }*/
        }
        spanText.textContent = tabMotCache.join(" ");
    }

        /** Ici on va diminuer le nombre de tentative */
        if(lettreProposee === false) {
            console.log("La lettre ne fait pas partie du mot");
            tentatives--;
            console.log("Le nombre de tentatives est de : ", tentatives);
        }

        /** Si les tentatives sont épuisées, on perd */
        if(tentatives === 0) {
            /** On désactive l'input */
            input.disabled = true;
            button.disabled = true;

            /** On affiche le texte, comme quoi la partie est perdue */
            generateTextIfWinOrLostGame();

            count++;
            console.log("Nombre de tentatives perdues :", count);

            /** On va afficher le nombre de tentatives perdues */
            const textCount = document.querySelector("#text2 .span1");

            const span2 = document.createElement("span");
            span2.classList.add("span2");
            span2.textContent = ` ${count} `;

            textCount.insertAdjacentElement('afterend',span2);
        }

    document.querySelector(".text input").value = "";
}

/////////////////////////////
/** Création des fonctions */
/////////////////////////////
function generateRandomNumber() {

    /** on doit initialiser le nombre minimum et maximum */
    nbrMin = 0;
    nbrMax = tab.length;

    /** Création du mot aléatoire */
    let random = Math.floor(Math.random() * (nbrMax - nbrMin + 1)) + nbrMin;
    console.log("nombre aléatoire :", random);

    return random;
}

function generateHiddenWord() {

    /** On doit afficher le mot de la liste selon le nombre aléatoire */
    let motText = tab[randomNumber];
    console.log("le mot est :", motText);

    /** On initialise l'élément dans lequel on va afficher le texte */
    const mot = document.getElementById("mot");

    // On va créer les éléments enfants
    const text = document.createElement("p");
    const span = document.createElement("span");

    // On va insérer le texte dans l'élément "p"
    text.textContent = `Le mot à découvrir est : `;

    // On va insérer le texte dans l'élément "span"
    for(let i = 0; i < motText.length; i++) {
        span.textContent += ` _ `;
    }

    /** Ici, on utilise "append" et pas "appendchild" car on va créer plusieurs éléments */
    mot.append(text, span);

    return motText;
}

function errorText() {

    const error = document.querySelector(".error");
    if(error) {
        return;
    }

    /** On va créer l'élément pour afficher le texte erreur */
    const errorElement = document.createElement("p");
    errorElement.classList.add('error');
    errorElement.textContent = `* Vous vous êtes trompé, insérez un MOT !!!`;

    /** Ici on insère l'élément après l'input */
    input.insertAdjacentElement('afterend', errorElement);
}

function generateTextIfWinOrLostGame() {

    /** On va générer le texte si on a perdu ou gagner la partie */
    const winYesNo = document.createElement("p");
    winYesNo.classList.add("winYesNo");   
    winYesNo.textContent = `Désolée, vous avez perdu, nous sommes désolée 🥹​🥹​🥹​ !!!`;
    button.insertAdjacentElement('afterend', winYesNo);
}