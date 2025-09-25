// On déclare le bouton
const button = document.getElementById("button");

button.addEventListener("click", (event) => {
    event.preventDefault();

    // On reprend les valeurs des différents "input"
    // nom
    let firstname = document.getElementById("firstname").value;
    // prenom
    let lastname = document.getElementById("lastname").value;
    // age
    let age = document.getElementById("age").valueAsNumber;
    age++
    // url
    let url = document.getElementById("url").value;

    // On déclare la balise p
    let text = document.querySelector(".container2__block2--text .text");

    // Ici on ajoute le texte dans la balise p avec "textContent"
    text.textContent = `Bonjour, je m'appelle ${firstname} ${lastname} et je vais avoir ${age} ans`;

    // Ici on va s'occuper de l'image
    let image = document.querySelector(".container2__block2--image .image");
    image.src = url;
    image.alt = `avatar de ${firstname}`;

    /* On est obligé de renommer l'élément, pk??? */
    /* Car si on fait firstname ='' ==> c'est une copie donc oui la valeur se vide mais la copie */
    /* Pas l'élément en lui-même, donc on doit vider le parent. */
    /* Et comme j'ai mis "value" sur le parent, je dois le renommer */
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("age").value = '';
    document.getElementById("url").value = '';
})

// 2eme évènement au "click", on change le thème (en sombre)
const btnDarkTheme = document.getElementById("darkTheme");
const body = document.querySelector("body");
let text = document.querySelector(".container2__block2--text .text");

btnDarkTheme.addEventListener("click", () => {
    body.classList.add("darkTheme");
    text.classList.add("changeColorText");

    // Permet quand on clique ici, d'enlever le style personnalisé du thème personnalisé
    body.removeAttribute("style");
    text.removeAttribute("style");
})

// 3eme évènement au "click", on remet le thème en clair
const btnLightTheme = document.getElementById("lightTheme");
btnLightTheme.addEventListener("click", () => {
    body.classList.remove("darkTheme");
    text.classList.remove("changeColorText");

    // Permet quand on clique ici, d'enlever le style personnalisé du thème personnalisé
    body.removeAttribute("style");
    text.removeAttribute("style");
})

// 4eme évènement au "click", on met un thème personnalisé
const btnCustomTheme = document.getElementById("customTheme");
btnCustomTheme.addEventListener("click", () => {
    
    /* On change la couleur du background */
    let colorTheme = prompt("Quelle couleur voulez-vous pour votre thème ?");
    console.log(colorTheme);

    body.style.backgroundImage = "none";
    body.style.backgroundColor = `${colorTheme}`;

    let colorText = prompt("Quelle couleur désirez-vous pour votre texte ?");
    console.log(colorText);

    text.style.color = `${colorText}`;
 })

