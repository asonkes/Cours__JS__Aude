/** On déclare les variables dont on a besoin */
const inputNumber = document.getElementById("input1");
const buttonNumber = document.getElementById("buttonNumber");
let input2Text = document.getElementById("input2");
let resultat = document.querySelector("block3__text p span");

let tentatives = 3;
console.log("Le nombre de tentatives qui reste sont de : ", tentatives);
tentatives.textContent = 

let number =  Math.floor(Math.random() * 10) + 1;
console.log(number);

/** Evenement au click */
buttonNumber.addEventListener("click", () => {

    /** Il faut récupérer la valeur de l'input */
    let input1Value = inputNumber.valueAsNumber;
    console.log(input1Value);

    if(!isNaN(input1Value)) {

        if (input1Value === number) {

            input2Text.value = `Bravo, vous avez gagné 🎉​🎉​🎉​, le nombre était bien ${input1Value}`;

            inputNumber.disabled = true;

        } else if (input1Value < number) {

            input2Text.value = `Le chiffre est au-dessus de : ${input1Value}`;

            tentatives--;
            console.log("Le nombre de tentatives qui reste sont de : ", tentatives);

        } else if (input1Value > number){

            input2Text.value = `Le chiffre est en-dess0us de : ${input1Value}`;
            tentatives--;

            console.log("Le nombre de tentatives qui reste sont de : ", tentatives);

        }

    } else {

        input2Text.value = "Veuillez insérer un NOMBRE, C'est pas bien 😡​😡​😡 !!!​";
    }

    document.getElementById("input1").value = '';
})