// Donc on commence à déclarer les variables :
// ==> ok tu mets pasla value ici
let note = document.getElementById("note");
let pourboire = document.getElementById("pourboire");
let nbDePersonnes = document.getElementById("nbDePersonnes");


// On récupère le bouton
const btn_calculer = document.getElementById("calculer");

btn_calculer.addEventListener("click", (event) => {
    event.preventDefault();

    // On récupère les values de l'utilisateur
    // On transforme en "number"
    let noteValue = Number(note.value);
    let pourboireValue = Number(pourboire.value);
    let nbDePersonnes__value = Number(nbDePersonnes.value);

    // On fait les calculs ici, + lisible
    let pourboire = (noteValue * (pourboireValue / 100));
    let total = noteValue + pourboire;
    let totalParPers = total / nbDePersonnes__value;

    // On intègre les valeurs dans l'autre block
    let montantPourboire = document.querySelector("#item1 span");
    // Et ici, on termine en limitant à la 2eme décimale
    montantPourboire.textContent = `${pourboire.toFixed(2)} €`;

    let montantTotal = document.querySelector("#item3 span");
    montantTotal.textContent = `${total.toFixed(2)} €`;

    let montantPersonne = document.querySelector('#item2 span');
    montantPersonne.textContent = `${totalParPers.toFixed(2)} €`;
    console.log(montantPersonne);
  
})

// Tout fonctionne
// Maintenant, on rafraichit
const refresh = document.getElementById("reinitialiser");
refresh.addEventListener("click", (event) => {
    event.preventDefault();
    
    // On réinitialise les input dans le form
    const form = document.getElementById("form").reset();

    // On sélectionne la variable
    let span1 = document.querySelector("#item1 span");
    // Et on reinitilise la balise et par défaut on remet, comme un placeholder...
    span1.textContent = "00.00€";

    let span2 = document.querySelector("#item2 span");
    span2.textContent = "00.00€";

    let span3 = document.querySelector("#item3 span");
    span3.textContent = "00.00€";




 
})






