/** On initialise les input */
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

/** On initialise les boutons */
const btnMore = document.getElementById("btnMore");
const btnbefore = document.getElementById("btnBefore");
const btnTime = document.getElementById("btnTime");
const btnDivided = document.getElementById("btnDivided");
const btnPercentage = document.getElementById("btnPercentage");
const btnReinitialiser = document.getElementById("reinitialiser");

/** On initialise la valeur insérée dans les 2ers input */

/** Le bouton au (+) */
btnMore.addEventListener("click", () => {
    let input1Value = Number(input1.value);
    let input2Value = Number(input2.value);
    let input3Value = Number(input1Value + input2Value);

    input3.value = input3Value.toFixed(2);
    // Bon aussi si je mets input3.placeholder. 
    // Différence ???
})

/** Le bouton au (-) */
btnBefore.addEventListener("click", () => {
    let input1Value = Number(input1.value);
    let input2Value = Number(input2.value);
    let input3Value = Number(input1Value - input2Value);

    input3.value = input3Value.toFixed(2);
})

/** Le bouton au (*) */
btnTime.addEventListener("click", () => {
    let input1Value = Number(input1.value);
    let input2Value = Number(input2.value);
    let input3Value = Number(input1Value * input2Value);
    
    input3.value = input3Value.toFixed(2);
})

/** Le bouton au (/) */
btnDivided.addEventListener("click", () => {
    let input1Value = Number(input1.value);
    let input2Value = Number(input2.value);
    let input3Value = Number(input1Value / input2Value);
    
    input3.value = input3Value.toFixed(2);
})

/** Le bouton au (%) */
btnPercentage.addEventListener("click", () => {
    let input1Value = Number(input1.value);
    let input2Value = Number(input2.value);
    let input3Value = Number(input1Value % input2Value);
    
    input3.value = input3Value.toFixed(2);
})

btnReinitialiser.addEventListener("click", () => {
    document.getElementById("input1").value = '';
    document.getElementById("input2").value = '';
    document.getElementById("input3").value = '';
})