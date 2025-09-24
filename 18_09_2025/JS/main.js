// Déclarations des booléens
let etreJourFiestaI3 = false;
let faireGris = true;

// Les valeurs truthy et falsy en JS 
//let test; // undefined ==> falsy
//let test = undefined; // ==> falsy
//let test = null; // ==> falsy aussi
//let test = ''; // ==> chaine vide ==> falsy
//let test = 0; //==> aussi considéré comme falsy
//let test = NaN; // aussi falsy
//let test = false; // aussi falsy

// ? les truthy 
//let test = 'pouet'; // ici truthy
//let test = -5; // truthy
//let test = 5; // ==> truthy
//let test = true; // ==> truthy
//let test = []; // ==> truthy (tableau vide mais il existe)
// let test = {}; // ==> objet vide mais truthy (car il existe)
// let test = new Date(); // ==> truthy

// ==> cela n'existe qu'en JS 

// if(test {}) ==> comme si c'était = true
if(test) {
    console.log(test + 'est truthy');
}

// Comme si j'avais écrit false
if(!test) {
    console.log(test + 'est falsy');
}

let user;
if(user === undefined || user === null || user === '') {
    throw new Error();
} else {

}

// ===> on doit pas mettre ce qui a au_dessus, on peut mettre :
if(!test) {
    console.log(test + ' est falsy');
}

// ! Comparaisons
// > et >=
console.log("5 > 2 = ", (5 > 2)); // true
console.log("2 > 5 = ", (2 > 5)); // false
console.log("5 > 5 = ", (5 > 5)); // false
console.log("5 >= 5 = ", (5 >= 5)); // true

// < et <=
console.log("5 < 2" + (5 < 2)); // 

console.clear();
// Subtilités
console.log("5 === 5" + (5 === 5)); // true
console.log("5 === 2" + (5 === 2)); // false
console.log("5 != 5 = " + (5 != 5)); // false 
console.log("5 != 2 = " + (5 != 2)); // true

// On oublie pas qu'on est en JS et que le JS c'ets magique (ou horrible)
console.log(" 5 == '5' =" + (5 == '5')); // true
console.log(" 1 == true =" + (1 == true)) // true

console.log("null >= 0 =" + (null >= 0)); // true
console.log("null <= 0 =" + (null<= 0)); // true
console.log("null <= 0 =" + (null == 0)); // false

// Attention le == et le !== font une conversion implicite.
// Par sécurité on tulise toujours l'égalité stricte
// === et !==
console.clear();
console.log("5 === '5' =" + (5 === '5')); // false
console.log("1 === true =" + (1 === true)); // true

// Opérateurs logiques
// '!' ==> négation
console.clear();
console.log(!true); //==> false comme réponse
console.log(((!5 < 2))); //false
console.log(!false); // true

// OU (||) ==> au moins 1 des conditions doit être vraie pour que la totalité de la condition soit vraie
let etreMalade = true;
let etreEnVacances = true;

let etreEnRepos = etreMalade || etreEnVacances;
console.log("On est en repos ? : " + etreEnRepos); // true

// ET (&&) ==> Les 2 conditions doivent etre vraies
let etreDimanche = false;
let faireBeau = false;

let allerALaPlage = etreDimanche && faireBeau;
console.log("Va-t-on à la plage?" + allerALaPlage);