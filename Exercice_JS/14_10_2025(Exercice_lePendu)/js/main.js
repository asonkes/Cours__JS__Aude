/** On va initialiser les variables dont on a besoin */
/** Le tableau des mots */
const tab = ["lion", "tigre", "elephant", "ane", "chevreuil", "blaireau"];

/** Les éléments du DOM */
const input = document.querySelector(".text input");

/** On initialise la variable du bouton "jouer" */
const button = document.getElementById("button1");

/** Ici on va initialiser la variable pour le bouton "reinitialiser" */
const button2 = document.getElementById("button2");

/** On initialise le nbr min et max, même sans valeur */
let nbrMin;
let nbrMax;

/** On définit le nombre de tentatives accordées */
let tentatives = 5;

/** On définit un compteur pour le nombre de parties perdues ou gagnées */
let count = 0;

/** Il permet de voir le nombre de fois que la lettre a été trouvé */
let compteur = 0;

/** Permet de voir le nombre de lettre trouvées */
let nbrLettresTrouvées = 0;

// On vérifie si la lettre a déjà été proposée
let lettresProposees = [];

let randomNumber = generateRandomNumber();
let motFind = generateHiddenWord();

/**On doit sortir les tableaux de la fonction "playGame(), au sinon à chaque appel de la fonction, il refait la même chose avec un tableau de nouveau rien qu'avec des "_" */
/** On récupère le mot à trouver et on le convertit en tableau */
/** Ici comme réappelle le tableau pour la réinitialisation ==> mettre let, pas const */
let tabMot = motFind.split("");
console.log(tabMot);

/** On remplace le tableau par des caractères "_" */
/** Pas utiliser "fill" car remplace le tableau d'origine */
/** Ici comme réappelle le tableau pour la réinitialisation ==> mettre let, pas const */
let tabMotCache = Array(tabMot.length).fill(" _ ");
console.log(tabMotCache);

/** On fait ici l'évènement au click */
button.addEventListener("click", (event) => {
  event.preventDefault();
  playGame();
});

/** On fait ici l'évènement au clavier */
/** Question Aude, ça pose problème pour le click alors ??? */

input.addEventListener("keyup", (event) => {
  event.preventDefault();

  /** Ici on vérifie grace à ça, que lorsqu'on clique sur "enter", l'évènement se déclenche */
  /** Au sinon, c'est lorsqu'on clique sur la touche directement et ça, ca pose problème */
  if (event.key == "Enter") {
    playGame();
  }
});

button2.addEventListener("click", () => {
  /** On réactive l'input et le bouton pour relancer une nouvelle partie */
  input.disabled = false;
  button.disabled = false;

  /** On va initialiser le message quand la partie est perdue */
  const winYesNo = document.querySelector(".winYesNo");

  /** On supprime le message d'erreur avec remove */
  if (winYesNo) {
    winYesNo.remove();
  }

  /** On va supprimer du coup le titre et le le tableau */
  const text = document.querySelector("#mot p");
  const span = document.querySelector("#mot span");

  text.remove();
  span.remove();

  // Du coup ici cela permet de réafficher le titre  et le span
  randomNumber = generateRandomNumber();
  motFind = generateHiddenWord();
});

function playGame() {
  /** Ici cela permet que s'il y eu une erreur avant */
  /** Qd on tape une lettre, l'erreur disparaisse */
  const error = document.querySelector(".error");
  if (error) {
    error.remove();
  }

  /** On doit initialiser la valeur de l'input */
  /** On enleve les espaces devant et derrière le mot */
  const inputValue = input.value.trim().toLowerCase();
  console.log(inputValue);

  // On vérifie que la valeur entrée dans l'input soit valide
  if (!isNaN(inputValue) || inputValue === "") {
    errorText();

    /** Ici il faut remettre le code pour vider l'input car avec le return
     * Ne va pas plus bas !!! */
    document.querySelector(".text input").value = "";

    /** Il faut mettre le return au sinon, il continue à lire la suite du code */
    /** Et donc il enlève une tentative */
    return;
  }

  /** On récupère le span présent dans mon html */
  const spanText = document.querySelector("#mot span");

  /** On définit à la base que la lettre proposée est fausse */
  let lettreProposee = false;

  if (lettresProposees.includes(inputValue)) {
    const errorLettre = document.createElement("p");
    errorLettre.classList.add("error");
    errorLettre.textContent = `Vous avez déjà proposé la lettre "${inputValue}" !`;
    input.insertAdjacentElement("afterend", errorLettre);
    return;
  } else {
    lettresProposees.push(inputValue);
  }

  for (let i = 0; i < tabMot.length; i++) {
    if (inputValue === tabMot[i]) {
      lettreProposee = true;
      tabMotCache.splice(i, 1, inputValue);
      console.log(tabMotCache);
      nbrLettresTrouvées++;
    }

    spanText.textContent = tabMotCache.join(" ");
  }

  /** Ici on va diminuer le nombre de tentative */
  if (lettreProposee === false) {
    console.log("La lettre ne fait pas partie du mot");
    tentatives--;
    console.log("Le nombre de tentatives est de : ", tentatives);

    let spanH2 = document.querySelector("h2 #span2");
    spanH2.textContent = `${tentatives} tentatives.`;
  }

  /** Ici on va voir quand est-ce que le mot est trouvé */
  if (lettreProposee) {
    compteur = nbrLettresTrouvées;
    console.log("Le compteur des lettres trouvées est de : ", compteur);
    console.log("Vous avez trouvé une lettre, bravo !!!");

    if (compteur === tabMot.length) {
      console.log("vous avez gagné bravo :) !!!");

      /** On désactive l'input et le bouton pour que l'utilisateur ne puisse plus jouer puisqu'il a gagné */
      input.disabled = true;
      button.disabled = true;

      /** On affiche le texte, comme quoi la partie est gagnée */
      generateTextWinGame();
      console.log("Nombre de tentatives gagnées :", count);

      countWinParty();
      count++;
    }
  }

  /** Si les tentatives sont épuisées, on perd */
  if (tentatives === 0) {
    /** On désactive l'input et le bouton pour que l'utilisateur ne puisse plus jouer */
    input.disabled = true;
    button.disabled = true;

    /** On affiche le texte, comme quoi la partie est perdue */
    generateTextLostGame();
    console.log("Nombre de tentatives perdues :", count);

    countLostParty();
    count++;
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
  let random = Math.floor(Math.random() * (nbrMax - nbrMin)) + nbrMin;
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
  for (let i = 0; i < motText.length; i++) {
    span.textContent += ` _ `;
  }

  /** Ici, on utilise "append" et pas "appendchild" car on va créer plusieurs éléments */
  mot.append(text, span);

  return motText;
}

function errorText() {
  const error = document.querySelector(".error");
  if (error) {
    return;
  }

  /** On va créer l'élément pour afficher le texte erreur */
  const errorElement = document.createElement("p");
  errorElement.classList.add("error");
  errorElement.textContent = `* Vous vous êtes trompé, insérez un MOT !!!`;

  /** Ici on insère l'élément après l'input */
  input.insertAdjacentElement("afterend", errorElement);
}

function generateTextLostGame() {
  /** On va générer le texte si on a perdu ou gagner la partie */
  const winYesNo = document.createElement("p");
  winYesNo.classList.add("winYesNo");
  winYesNo.textContent = `Désolée, vous avez perdu, nous sommes désolée 🥹​🥹​🥹​ !!!`;
  button.insertAdjacentElement("afterend", winYesNo);
}

function generateTextWinGame() {
  /** On va générer le texte si on a perdu ou gagner la partie */
  const winYesNo = document.createElement("p");
  winYesNo.classList.add("winYesNo");
  winYesNo.textContent = `Bravo, vous avez gagné la partie 🥳​🥳​🥳​​ !!!`;
  button.insertAdjacentElement("afterend", winYesNo);
}

function countLostParty() {
  /** On va afficher le nombre de tentatives perdues */
  const textCount = document.querySelector("#text2 .span2");
  count++;
  textCount.textContent = `${count}`;
}

function countWinParty() {
  /** On va afficher le nombre de tentatives perdues */
  const textCount = document.querySelector("#text1 .span2");
  count++;
  textCount.textContent = `${count}`;
}
