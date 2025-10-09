/** On initialise les variables dont on a besoin */
const form = document.getElementById("form");

let prenoms = [];
let prenom = document.getElementById("prenom");
const button1 = document.getElementById("button1");

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

    if (prenomValue !== "") {
        writeTab();

        // On récupère au cas où où, on a plusieurs erreurs, donc tableau
        // Et c'est dans le cas où si on met qq'chose de juste, il faut qd même enlever l'erreur
        let textInfos = document.querySelectorAll(".textInfos");
        textInfos.forEach((info) => { info.remove() })
    } else {
        writeError();
    }

    document.getElementById("prenom").value = "";
})


//////////////////////////////////////////////
/** Pour l'évènement qd on tape sur "ENTER" */
//////////////////////////////////////////////
button1.addEventListener("keyup", (event) => {
    /** On enlève le rechargement automatique de la page */
    event.preventDefault();

    if (prenomValue !== "") {
        writeTab();

        // On récupère au cas où où, on a plusieurs erreurs, donc tableau
        // Et c'est dans le cas où si on met qq'chose de juste, il faut qd même enlever l'erreur
        let textInfos = document.querySelectorAll(".textInfos");
        textInfos.forEach((info) => { info.remove() })
    } else {
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
    if (prenoms.length === 0) {
        textTableau.textContent = `Il n'y a plus de prénoms dans le tableau`;
        button2.disabled = true;
        return;
    }

    // C'est un return donc il faut réaffecter le number à une variable
    // On doit pas mettre number en paramètre, car tu n'as besoin d'aucune données pour calculer le random
    // à la base.
    let number = random();

    textIndex.classList.add("active");
    textIndex.textContent = `Félicitations ${prenoms[number]}, tu t'occuperas de la maison toute la semaine.`;

    /** Ici normalement, le nom de la personne au sort doit être supprimée */
    prenoms.splice(number, 1);

    /** En console.log(résultat juste), on touche plus au splice() */
    console.log(prenoms);

    textTableau.textContent = prenoms.join(" | ");
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
    // Ca permet de vider l'erreur s'il y en a une d'abord d'abord
    // Ce n'est pas une vaeur ==> objet
    let textInfosToDelete = document.querySelectorAll(".textInfos");
    textInfosToDelete.forEach((info) => { info.remove() })

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

function random() {
    minNumber = 0;
    maxNumber = prenoms.length;

    /** Normalement :  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber */
    /** Mais j'ai enlevé le +1 car amène des erreurs je crois, à vérifier !!! */
    number = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    console.log("Le chiffre aléatoire est de :", number);

    return number;
}