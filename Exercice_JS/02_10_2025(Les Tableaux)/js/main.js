/** On initialise les variables dont on a besoin */
const form = document.getElementById("form");

let prenoms = [];
let prenom = document.getElementById("prenom");
const button1 = document.getElementById("button1");
let textInfos = document.querySelector(".textInfos");

const button2 = document.getElementById("button2");
let textIndex = document.getElementById("textIndex");
let minNumber;
let maxNumber; 

button1.addEventListener("click", (event) => {
    /** On enlève le rechargement automatique de la page */
    event.preventDefault();

    /** On récupère la value de l'input */
    /** trim() permet d'enlever les espaces */
    let prenomValue = prenom.value.trim();

    if(prenomValue !== "") {
        writeTab();
    } else {
        writeError();
    }

    document.getElementById("prenom").value = "";
    //textInfos.classList.remove("textInfos");
    //textInfos.textContent = "";
})


//////////////////////////////////////////////
/** Pour l'évènement qd on tape sur "ENTER" */
//////////////////////////////////////////////
button1.addEventListener("keyup", (event) => {
    /** On enlève le rechargement automatique de la page */
    event.preventDefault();

    if(prenomValue !== "") {
        console.log(textInfos);
        writeTab();
    } else {
        console.log(textInfos);
        writeError();
    }

    document.getElementById("prenom").value = "";
})

//////////////////////////////////////////////////////
/** Pour l'évènement qd on tape sur "TIRER AU SORT" */
//////////////////////////////////////////////////////
button2.addEventListener("click", (event) => {
    /** ON enlève le rechargement automatique de la page */
    event.preventDefault();

    minNumber = 0;
    maxNumber = prenoms.length;

    /** Normalement :  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber */
    /** Mais j'ai enlevé le +1 car amène des erreurs je crois, à vérifier !!! */
    number = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    console.log("Le chiffre aléatoire est de :", number);

    textIndex.classList.add("active");
    textIndex.textContent = `Félicitations ${prenoms[number]}, tu t'occuperas de la maison toute la semaine.`;

    /** Ici normalement, le nom de la personne au sort doit être supprimée */
    /** Le tableau se met à jour en console.log */
    /** Faut le mettre à jour visuellement sur la page */
    prenoms.splice(prenoms[number], 1);
    console.log(prenoms);

    textTableau.textContent = `${prenoms}`;



})




//////////////////////////////////////////////////
/** Création de fonctions pour diminuer le code */
//////////////////////////////////////////////////
function writeTab() {
    let prenomValue = prenom.value.trim();
    prenoms.push(prenomValue);
    /** On va créer un élément pour le tableau */
    let textTableau = document.getElementById("textTableau");
    /** On lui ajoute son contenu */
    textTableau.textContent = prenoms.join(" | ");
}

function writeError() {
    /** On va recréer un élément pour préciser que l'input est vide */
    let textInfos = document.createElement("p"); 
    /** On lui ajoute une classe */
    textInfos.classList.add("textInfos");
    /** On insère le texte */
    textInfos.textContent = `Vous avez oublié d'insérer un prénom, c'est vide 😡​!`;
    console.log(textInfos.textContent);
    /** On ajoute le contenu */
    form.appendChild(textInfos);
}