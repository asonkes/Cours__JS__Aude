/** On initialise les variables dont on a besoin */
/** La variable poru l'input */
const input = document.getElementById("input");
/** La variable pour le bouton */
const button = document.getElementById("button");

const tab = ["Maine Coon Noir", "Maine Coon Blanc", "Maine Coon Roux", "Maine Coon Bleu", "Miane Coon Crème", "Maine Coon écaille de Tortue"];

button.addEventListener("click", () => {
    /** La variable pour récupérer la valeur de l'input */
    let inputValue = input.value;
    /** On récupère l'élément parent pour la création du nouvel élément */
    const container = document.querySelector(".container");

    /** Ici on fait en sorte avec le while de bloqué l'ajout de données */
    // Tant que c'est un nombre
    // Tant que la valeur ajoutée est vide
    if (inputValue === "") {
        const nouvelElement = document.createElement("p");
        nouvelElement.classList.add("text");
        nouvelElement.textContent=`Vous avez oublié de mettre une valeur 😡​😡​😡​ !!!`;
        container.appendChild(nouvelElement);
        console.log(inputValue);
    } else {
        const list = document.querySelector(".list");
        console.log(list);

        /** La variable pour afficher le tableau */
        list.innerhtml = `${tab}`; 

        console.log("Vous avez entré une valeur correcte");
    }
})

