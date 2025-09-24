// Base de l'intéraction avec le DOM

// On cherche en partant de l'id
// CONSTANTE ==> majuscule
const EX1 = document.getElementById("exemple-1");
console.log(EX1);

// Exemple ici, où, on est obligé de mettre du style, plutôt que de passer par le CSS normal
const BTN_COMBIEN = document.getElementById("BTN_COMBIEN");
console.log(BTN_COMBIEN);

BTN_COMBIEN.addEventListener("click", () => {
    const jauge = document.getElementById("jauge");
    console.log(jauge); 

    let note = prompt("Tu me mets combien en Javascript ?");

    // Rajouté ici, car de base ne peut pas dépasser 100 et être en-dessous de 0 (pas vu au cours)
    // Pas mettre '&&' ==> car ça veut dire qu'il doit être en-dessous de 0 ET ne pas dépasser 100
    // Et toujours penser avec un WHILE à l'inverse
    while(note <= 0 || note > 100) {
        note = prompt("Tu me mets combien en Javascript ?");
    }

    jauge.style.width = note + '%';
})


// ici, on voit label, input 
const BTN_VALIDER = document.getElementById("valider");
console.log(BTN_VALIDER);

BTN_VALIDER.addEventListener("click", () => {
    const INPUT_TECHNO = document.getElementById("techno");
    console.log(INPUT_TECHNO);

    const P_RESULTAT = document.getElementById("resultat");
    console.log(P_RESULTAT);

    let techno = INPUT_TECHNO.value;
    console.log(techno);

    P_RESULTAT.textContent = `Oh tu aimes  ${techno} ???? Moi aussi hiihih`;

    // On vide l'input après le click
    INPUT_TECHNO.value = '';

})

