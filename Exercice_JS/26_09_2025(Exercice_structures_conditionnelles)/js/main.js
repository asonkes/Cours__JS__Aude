/** On déclare les variables dont on a besoin */
const inputNumber = document.getElementById("input1");
const buttonNumber = document.getElementById("buttonNumber");
let input2Text = document.getElementById("input2");
let resultat = document.querySelector(".block3__text p span");
const buttonEasy = document.getElementById("buttonEasy");
const buttonMedium = document.getElementById("buttonMedium");
const buttonHard = document.getElementById("buttonHard");
const h1 = document.getElementById("title");

let minNumber;
let maxNumber;
let tentatives;
let maxTentatives;

/**********************************/
/** Ici c'est pour le mode facile */
/**********************************/
buttonEasy.addEventListener("click", () => {

/** On rend les autres boutons disabled */
buttonEasy.disabled = true;
buttonMedium.disabled = true;
buttonHard.disabled = true;

/** On définit le nombre minimum et maximum */
minNumber = 1;
maxNumber = 10;

/** Ici cela permet de créer un nombre aléatoire entre 1 et 10 */
let number =  Math.floor(Math.random() * maxNumber) + minNumber;
console.log(number);

/** Ici, on définit que le nombre de tentatives = 3 dés le départ*/
tentatives = 3;
maxTentatives = 3;

/** On remplace le nombre de tentatives par des emojis */
resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

    /** Evenement au click */
    buttonNumber.addEventListener("click", () => {

        /** Il faut récupérer la valeur de l'input */
        let input1Value = inputNumber.valueAsNumber;
        console.log(input1Value);

        /** Si pas un nombre, on prévient, que c'est pas un nombre */
        if(!isNaN(input1Value) && input1Value >= minNumber && input1Value <= maxNumber) {

            /** Si c'est un nombre */
            /** Si le nombre donné par le joueur === au nombre donné aléatoirement */
            if (input1Value === number) {

                input2Text.value = `Bravo, vous avez gagné 🎉​🎉​🎉​, le nombre était bien de ${input1Value}`;
                inputNumber.disabled = true;

            } else if (input1Value < number) {

                input2Text.value = `Le chiffre est au-dessus de : ${input1Value}`;
                tentatives--;
                /*resultat.textContent = tentatives;*/
                resultat.textContent = "".padEnd(tentatives * 2, "🦐").padEnd(maxTentatives * 2, "🍴");

                /** Si le nombre de tentatives est dépassé (3 max) */
                if(tentatives === 0) {
                    input2Text.value = `Désolée vous avez perdu !!! Le nombre de tentatives est dépassé !!! 😥​😥​😥​`;
                    inputNumber.disabled = true; 
                    resultat.textContent = "0";
                }

            } else if (input1Value > number){

                input2Text.value = `Le chiffre est en-dessous de : ${input1Value}`;
                tentatives--;
                /*resultat.textContent = tentatives;*/
                resultat.textContent = "".padEnd(tentatives * 2, "🦐").padEnd(maxTentatives * 2, "🍴");

                /** Si le nombre de tentatives est dépassé (3 max) */
                if(tentatives === 0) { 
                    input2Text.value = `Désolée vous avez perdu !!! Le nombre de tentatives est dépassé !!! 😥​😥​😥​`;
                    inputNumber.disabled = true;
                    resultat.textContent = "0";
                }
            }

        } else {
            input2Text.value = "Veuillez insérer un NOMBRE, C'est pas bien 😡​😡​😡 !!!​";
        }

        /** On vide l'input où on met le chiffre */
        document.getElementById("input1").value = '';
    })
})

/***********************************/
/** Ici, c'est pour le mode medium */
/***********************************/
buttonMedium.addEventListener("click", () => {

/** On rend les autres boutons disabled */
buttonEasy.disabled = true;
buttonMedium.disabled = true;
buttonHard.disabled = true; 

/** On définit le nombre minimum et maximum */
minNumber = 1;
maxNumber = 100;

/** Ici cela permet de créer un nombre aléatoire entre 1 et 100 */
let number = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
console.log(number);

/** Ici on va changer le nombre du placeholder */
inputNumber.placeholder = `Insérer un nombre de ${minNumber} à ${maxNumber}`;

/** On change le nombre dans le titre */
title.textContent = `Veuillez choisir un chiffre entre ${minNumber} et ${maxNumber} :`;

/** Ici, on définit que le nombre de tentatives = 3 dés le départ*/
tentatives = 10;
maxTentatives = 10;

resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

    /** Evenement au click */
    buttonNumber.addEventListener("click", () => {

        /** Il faut récupérer la valeur de l'input */
        let input1Value = inputNumber.valueAsNumber;
        console.log(input1Value);

        /** Si pas un nombre, on prévient, que c'est pas un nombre */
        if(!isNaN(input1Value) && input1Value >= minNumber && input1Value <= maxNumber) {

            /** Si c'est un nombre */
            /** Si le nombre donné par le joueur === au nombre donné aléatoirement */
            if (input1Value === number) {

                input2Text.value = `Bravo, vous avez gagné 🎉​🎉​🎉​, le nombre était bien de ${input1Value}`;
                inputNumber.disabled = true;

            } else if (input1Value < number) {

                input2Text.value = `Le chiffre est au-dessus de : ${input1Value}`;
                tentatives--;
                /** On remplace le nombre de tentatives par des emojis */
                resultat.textContent = "".padEnd(tentatives * 2, "🦐").padEnd(maxTentatives * 2, "🍴");

                /** Si le nombre de tentatives est dépassé (10 max) */
                if(tentatives === 0) {
                    input2Text.value = `Désolée vous avez perdu !!! Le nombre de tentatives est dépassé !!! 😥​😥​😥​`;
                    inputNumber.disabled = true;  
                    resultat.textContent = "0";
                }

            } else if (input1Value > number){

                input2Text.value = `Le chiffre est en-dessous de : ${input1Value}`;
                tentatives--;
                /** On remplace le nombre de tentatives par des emojis */
                resultat.textContent = "".padEnd(tentatives * 2, "🦐").padEnd(maxTentatives * 2, "🍴");
  
                /** Si le nombre de tentatives est dépassé (10 max) */
                if(tentatives === 0) { 
                    input2Text.value = `Désolée vous avez perdu !!! Le nombre de tentatives est dépassé !!! 😥​😥​😥​`;
                    inputNumber.disabled = true;
                    resultat.textContent = "0";
                }
            }

        } else {
            input2Text.value = "Veuillez insérer un NOMBRE, C'est pas bien 😡​😡​😡 !!!​";
        }

        /** On vide l'input où on met le chiffre */
        document.getElementById("input1").value = '';
    })
})


/**************************************/
/** Ici c'est pour le monde difficile */
/**************************************/
buttonHard.addEventListener("click", () => {

/** On rend les autres boutons disabled */
buttonEasy.disabled = true;
buttonMedium.disabled = true; 
buttonHard.disabled = true; 

/** On définit le nombre minimum et maximum */
minNumber = 1;
maxNumber = 1000;

/** Ici cela permet de créer un nombre aléatoire entre 1 et 1000 */
let number = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
console.log(number);

/** Ici on va changer le nombre du placeholder */
inputNumber.placeholder = `Insérer un nombre de ${minNumber} à ${maxNumber}`;

/** On change le nombre dans le titre */
title.textContent = `Veuillez choisir un chiffre entre ${minNumber} et ${maxNumber} :`;

/** Ici, on définit que le nombre de tentatives = 3 dés le départ*/
tentatives = 15;
maxTentatives = 15;

resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

    /** Evenement au click */
    buttonNumber.addEventListener("click", () => {

        /** Il faut récupérer la valeur de l'input */
        let input1Value = inputNumber.valueAsNumber;
        console.log(input1Value);

        /** Si pas un nombre, on prévient, que c'est pas un nombre */
        if(!isNaN(input1Value) && input1Value >= minNumber && input1Value <= maxNumber) {

            /** Si c'est un nombre */
            /** Si le nombre donné par le joueur === au nombre donné aléatoirement */
            if (input1Value === number) {

                input2Text.value = `Bravo, vous avez gagné 🎉​🎉​🎉​, le nombre était bien de ${input1Value}`;
                inputNumber.disabled = true;

            } else if (input1Value < number) {

                input2Text.value = `Le chiffre est au-dessus de : ${input1Value}`;
                tentatives--;
                /** On remplace le nombre de tentatives par des emojis */
                resultat.textContent = "".padEnd(tentatives * 2, "🦐").padEnd(maxTentatives * 2, "🍴");

                /** Si le nombre de tentatives est dépassé (15 max) */
                if(tentatives === 0) {
                    input2Text.value = `Désolée vous avez perdu !!! Le nombre de tentatives est dépassé !!! 😥​😥​😥​`;
                    inputNumber.disabled = true;  
                    resultat.textContent = "0";
                }

            } else if (input1Value > number){

                input2Text.value = `Le chiffre est en-dessous de : ${input1Value}`;
                tentatives--;
                /** On remplace le nombre de tentatives par des emojis */
                resultat.textContent = "".padEnd(tentatives * 2, "🦐").padEnd(maxTentatives * 2, "🍴");

                /** Si le nombre de tentatives est dépassé (3 max) */
                if(tentatives === 0) { 
                    input2Text.value = `Désolée vous avez perdu !!! Le nombre de tentatives est dépassé !!! 😥​😥​😥​`;
                    inputNumber.disabled = true;
                    resultat.textContent = "0";
                }
            }

        } else {
            input2Text.value = "Veuillez insérer un NOMBRE, C'est pas bien 😡​😡​😡 !!!​";
        }

        /** On vide l'input où on met le chiffre */
        document.getElementById("input1").value = '';
    })
})



/** On vide l'input où est affiché la phrase pour l'utilisateur au rechargement */
document.getElementById("input2").value = '';