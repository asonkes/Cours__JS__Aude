/** Exercice 1 : Accès au site */
const input1 = document.getElementById("input1");
const button1 = document.getElementById("button1");
const text2 = document.getElementById("text2");

button1.addEventListener("click", () => {
    /** On récupère la value de l'input */
    let input1Value = input1.valueAsNumber;
    console.log(input1Value);

    if(!isNaN(input1Value)) {

        // Math.floor ==> arrondit à l'entier inférieur
        if((Math.floor(input1Value)) >= 18) {

             text2.textContent = "Bienvenue sur notre site destiné aux adultes adultants 👀​.";

        } else if ((input1Value.toFixed()) >= 0) {

            text2.textContent = "Hop Hop, que faites vous ici 🔞​";

        } else {

            text2.textContent = "Héléla, vous avez un âge négatif ??? Rentrer un âge positif 😡​";

        }
    } else {

         text2.textContent = "Vous avez n'avez pas rentré de chiffre!!!  😡​";   
    }

    document.getElementById("input1").value = '';
})

/** Exercice 2: Entrée une année */
const input2 = document.getElementById("input2");
console.log(input2);

const button2 = document.getElementById("button2");
console.log(button2);

const text3 = document.getElementById("text3");
console.log(text3);

button2.addEventListener("click", () => {
    /* On va chercher la valeur de l'input */
    let input2Value = input2.valueAsNumber;
    console.log(input2Value);

    /** Question, vois readme !!! */
    if(!isNaN(input2Value)) {
        
        if((((input2Value % 4) === 0) && ((input2Value % 100) != 0)) || ((input2Value % 400) === 0)) {
            text3.textContent = "On a une année bissextile 🎉​🎉​🎉​ !!!​";
        } else {
            text3.textContent = "On n'a pas une année bissextile 🥹​🥹​🥹​ !!!​"; 
        }
    } else {
        text3.textContent = "Vous avez n'avez pas rentré de chiffre!!! 😡​";
    }

    document.getElementById("input2").value = '';
})


/** Exercice 3: Quelle boisson Désirez-vous ??? */

const input3 = document.getElementById("input3");
const button3 = document.getElementById("button3");
let image3 = document.getElementById("image3");
let span3 = document.getElementById("span3");

button3.addEventListener("click", () => {
    /* On va chercher la valeur de l'input */
    //let input3Value = Number(input3.value);
    let input3Value = Number(input3.value);

    switch(input3Value) {
        case 542 : 
            image3.src = "../images/boissons/boisson-lactee-au-cafe.jpg";
            span3.textContent = "café";
        break;
        case 421: 
            image3.src = "../images/boissons/the-infusion-minceur-boisson-regime-minceur.jpg";
            span3.textContent = "thé";
        break;
        case 623 : 
            image3.src = "../images/boissons/cafe-noisette-1.jpg";
            span3.textContent = "café aux noisettes";
        break;
        default:
        span3.textContent = "Vous avez tapez le mauvais chiffre ! 😡​ Aucune boisson ne correspond ! Recommencez ​😉​"
    }

    document.getElementById("input3").value = '';
})
