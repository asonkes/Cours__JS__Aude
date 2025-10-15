/** On initialise les variables dont on a besoin */
/** La variable pour l'input */
let input = document.getElementById("input");
/** La variable pour le bouton */
const button = document.getElementById("button");
const text = document.querySelector(".text");

/** JS pour afficher l'élément au début */
let tab = [
  "Maine Coon Noir",
  "Maine Coon Blanc",
  "Maine Coon Roux",
  "Maine Coon Bleu",
  "Maine Coon Crème",
  "Maine Coon Black Silver",
];

/** On récupère la variable 'liste' */
const list = document.querySelector(".list");

/** On récupère l'élément parent pour la création du nouvel élément */
const container = document.querySelector(".container");

createTab();

button.addEventListener("click", () => {
  /** La variable pour récupérer la valeur de l'input */
  let inputValue = input.value.trim();
  console.log(inputValue);

  /** Ici on fait en sorte avec le "if" de bloquer l'ajout de données */
  // Tant que c'est un nombre
  // Tant que la valeur ajoutée est vide
  // Ici !isNan ==> c'est pour bloquer l'ajout d'un nombre
  if (inputValue === "" || !isNaN(inputValue)) {
    removeError();

    /** Création du nouvel élément pour afficher que l'input ets vide au click*/
    const nouvelElement = document.createElement("p");
    nouvelElement.classList.add("text");
    nouvelElement.textContent = `Vous avez oublié de mettre une valeur 😡​😡​😡​ !!!`;

    container.appendChild(nouvelElement);
  } else {
    removeError();

    /** La variable pour récupérer la valeur de l'input */
    /** On récupère de nouveau la valeur car au sinon l'ordinateur dans ce cas ne connait pas la valeur */
    inputValue = input.value.trim();
    console.log(inputValue);

    let note = tab.push(inputValue);

    createTab();

    console.log(note);
  }

  document.getElementById("input").value = "";
});

////////////////////////////////////////////////////////////////
/// Evenement au click pour supprimer un élément du tableau ////
////////////////////////////////////////////////////////////////

/** Récupérer la variable qd on clique sur la poubelle */
// const spans = document.querySelectorAll("span");

// /** Récupérer la variable "li" */
// let li = document.querySelectorAll("li");

// spans.forEach((span, index) => {
//     span.addEventListener("click", () => {
//         li[index].remove();
//     })
// })

////////////////////////////////////////////////////////////////
///////////////////////Fonctions ///////////////////////////////
////////////////////////////////////////////////////////////////
function removeError() {
  /** On est obligé de réassigner la variable, car pas encore créé */
  const text = document.querySelector(".text");
  if (text) {
    text.remove();
  }
}

function createTab() {
  let notes = tab;
  console.log(tab);

  list.innerHTML = "";

  for (let i = 0; i < tab.length; i++) {
    let nouvelElement = document.createElement("li");
    nouvelElement.innerHTML = `${notes[i]}`;

    let nouveauSpan = document.createElement("span");
    nouveauSpan.innerHTML = "🗑️";
    nouveauSpan.addEventListener("click", () => {
      /** A cause de ca, il supprime des éléments qui ont pas le bon index */  
      tab.splice(i, 1);

      /** Ici refaire le tableau car là, il a les bons index et il le recréé */
      createTab();
    })

    nouvelElement.appendChild(nouveauSpan);


    list.appendChild(nouvelElement);
  }
}
