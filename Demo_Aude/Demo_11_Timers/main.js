const DIV_WELCOME = document.getElementById('welcome');
const DIV_HOME = document.getElementById('home');

// Pour effectuer une action UNE SEULE fois après un certain temps
setTimeout(() => {
    // Va cacher l'arc en ciel et afficher notre page après 3000ms donc 2s
    DIV_HOME.classList.remove('hidden');
    DIV_HOME.classList.add('show');
    
    DIV_WELCOME.classList.add('hidden');

}, 3000);


// Répète une actione TOUTES les Xms 
// ici, on affiche i dans la console toutes les 1s tout en l'augmentant de 1 à chaque fois
let i = 0;
setInterval(() => {
    i++; //augmenter i de 1
    console.log(i); //affiche i   
}, 1000) 


// Toutes les secondes, on augmente de 1 le nombre de bisounours
const SPAN_NB = document.getElementById('nb');
const BTN_EXTERMINATE = document.getElementById('boum');

let timer = setInterval( () => { 
    SPAN_NB.textContent++ 
}, 1000)


BTN_EXTERMINATE.addEventListener('click', () => {
    SPAN_NB.textContent = 0;
    clearInterval(timer); //va stopper le setInterval qui se trouve dans la variable timer
})