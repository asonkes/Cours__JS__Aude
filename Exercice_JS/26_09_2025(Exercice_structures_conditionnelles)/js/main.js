/** On déclare les variables dont on a besoin */
const inputNumber = document.getElementById("input1");
const buttonNumber = document.getElementById("buttonNumber");
let input2Text = document.getElementById("input2");
let resultat = document.querySelector(".block3__text p span");
const buttonEasy = document.getElementById("buttonEasy");
const buttonMedium = document.getElementById("buttonMedium");
const buttonHard = document.getElementById("buttonHard");

/**********************************/
/** Ici c'est pour le mode facile */
/**********************************/
buttonEasy.addEventListener("click", () => {

/** On rend les autres boutons disabled */
buttonMedium.disabled = true;
buttonHard.disabled = true; 

/** Ici cela permet de créer un nombre aléatoire entre 1 et 10 */
let number =  Math.floor(Math.random() * 10) + 1;
console.log(number);

/** Ici, on définit que le nombre de tentatives = 3 dés le départ*/
let tentatives = 3;
/** On remplace le nombre de tentatives par des emojis */
resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

    /** Evenement au click */
    buttonNumber.addEventListener("click", () => {

        /** Il faut récupérer la valeur de l'input */
        let input1Value = inputNumber.valueAsNumber;
        console.log(input1Value);

        /** Si pas un nombre, on prévient, que c'est pas un nombre */
        if(!isNaN(input1Value)) {

            /** Si c'est un nombre */
            /** Si le nombre donné par le joueur === au nombre donné aléatoirement */
            if (input1Value === number) {

                input2Text.value = `Bravo, vous avez gagné 🎉​🎉​🎉​, le nombre était bien de ${input1Value}`;
                inputNumber.disabled = true;

            } else if (input1Value < number) {

                input2Text.value = `Le chiffre est au-dessus de : ${input1Value}`;
                tentatives--;
                /*resultat.textContent = tentatives;*/
                resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

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
                resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

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
buttonHard.disabled = true; 

/** Ici cela permet de créer un nombre aléatoire entre 1 et 100 */
let number = Math.floor(Math.random() * (100 - 1)) + 1;
console.log(number);

/** Ici, on définit que le nombre de tentatives = 3 dés le départ*/
let tentatives = 10;
resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

    /** Evenement au click */
    buttonNumber.addEventListener("click", () => {

        /** Il faut récupérer la valeur de l'input */
        let input1Value = inputNumber.valueAsNumber;
        console.log(input1Value);

        /** Si pas un nombre, on prévient, que c'est pas un nombre */
        if(!isNaN(input1Value)) {

            /** Si c'est un nombre */
            /** Si le nombre donné par le joueur === au nombre donné aléatoirement */
            if (input1Value === number) {

                input2Text.value = `Bravo, vous avez gagné 🎉​🎉​🎉​, le nombre était bien de ${input1Value}`;
                inputNumber.disabled = true;

            } else if (input1Value < number) {

                input2Text.value = `Le chiffre est au-dessus de : ${input1Value}`;
                tentatives--;
                resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

                /** Si le nombre de tentatives est dépassé (10 max) */
                if(tentatives === 0) {
                    input2Text.value = `Désolée vous avez perdu !!! Le nombre de tentatives est dépassé !!! 😥​😥​😥​`;
                    inputNumber.disabled = true;  
                    resultat.textContent = "0";
                }

            } else if (input1Value > number){

                input2Text.value = `Le chiffre est en-dessous de : ${input1Value}`;
                tentatives--;
                resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

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

/** Ici cela permet de créer un nombre aléatoire entre 1 et 1000 */
let number = Math.floor(Math.random() * (1000 - 1)) + 1;
console.log(number);

/** Ici, on définit que le nombre de tentatives = 3 dés le départ*/
let tentatives = 15;
resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

    /** Evenement au click */
    buttonNumber.addEventListener("click", () => {

        /** Il faut récupérer la valeur de l'input */
        let input1Value = inputNumber.valueAsNumber;
        console.log(input1Value);

        /** Si pas un nombre, on prévient, que c'est pas un nombre */
        if(!isNaN(input1Value)) {

            /** Si c'est un nombre */
            /** Si le nombre donné par le joueur === au nombre donné aléatoirement */
            if (input1Value === number) {

                input2Text.value = `Bravo, vous avez gagné 🎉​🎉​🎉​, le nombre était bien de ${input1Value}`;
                inputNumber.disabled = true;

            } else if (input1Value < number) {

                input2Text.value = `Le chiffre est au-dessus de : ${input1Value}`;
                tentatives--;
                resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

                /** Si le nombre de tentatives est dépassé (15 max) */
                if(tentatives === 0) {
                    input2Text.value = `Désolée vous avez perdu !!! Le nombre de tentatives est dépassé !!! 😥​😥​😥​`;
                    inputNumber.disabled = true;  
                    resultat.textContent = "0";
                }

            } else if (input1Value > number){

                input2Text.value = `Le chiffre est en-dessous de : ${input1Value}`;
                tentatives--;
                resultat.textContent = ( "".padEnd(tentatives * 2 , '🦐')  );

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