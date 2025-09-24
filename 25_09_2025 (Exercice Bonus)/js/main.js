/** On initialise les input */
let input1 = document.getElementById("input1");
console.log(input1);

let input2 = document.getElementById("input2");
console.log(input2);

/** On initialise les boutons */
const btnMore = document.getElementById("btnMore");
console.log(btnMore);

const btnbefore = document.getElementById("btnBefore");
console.log(btnbefore);

const btnTime = document.getElementById("btnTime");
console.log(btnTime);

const btnDivided = document.getElementById("btnDivided");
console.log(btnDivided);

const btnPercentage = document.getElementById("btnPercentage");
console.log(btnPercentage);

/** On initialise la valeur insérée dans les 2ers input */

/** Le bouton au (+) */
btnMore.addEventListener("click", () => {
    let input1Value = Number(input1.value);
    console.log(input1Value);

    let input2Value = Number(input2.value);
    console.log(input2Value);

    let input3 = document.getElementById("input3");
    console.log(input3);

    let input3Value = Number(input1Value + input2Value);
    console.log(input3Value);

    input3.textContent = input3Value;
})

/** Le bouton au (-) */
btnBefore.addEventListener("click", () => {
    let input1Value = Number(input1.value);
    console.log(input1Value);

    let input2Value = Number(input2.value);
    console.log(input2Value);

    let input3 = Number(input1Value - input2Value);
    console.log(input3);
})

/** Le bouton au (*) */
btnTime.addEventListener("click", () => {
    let input1Value = Number(input1.value);
    console.log(input1Value);

    let input2Value = Number(input2.value);
    console.log(input2Value);

    let input3 = Number(input1Value * input2Value);
    console.log(input3);
})

/** Le bouton au (/) */
btnDivided.addEventListener("click", () => {
    let input1Value = Number(input1.value);
    console.log(input1Value);

    let input2Value = Number(input2.value);
    console.log(input2Value);

    let input3 = Number(input1Value / input2Value);
    console.log(input3);
})

/** Le bouton au (%) */
btnPercentage.addEventListener("click", () => {
    let input1Value = Number(input1.value);
    console.log(input1Value);

    let input2Value = Number(input2.value);
    console.log(input2Value);

    let input3 = Number(input1Value % input2Value);
    console.log(input3);
})