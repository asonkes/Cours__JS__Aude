const INPUT_PRODUCT = document.getElementById('product');
const BTN_ADD = document.getElementById('add');
const SPAN_ERROR = document.getElementById('error');
const UL_PRODUCTS = document.getElementById('list');

const products = ['patates', 'steack', 'pommes'];

//#region Type de boucles
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

for (let product of products) {
    console.log(product);
    // ! Je n'ai que la valeur
}

products.forEach((product, index) => {
    console.log(index + ' : ' + product);
})
//#endregion

// showProductsV1();
showProductsV2();

BTN_ADD.addEventListener('click', addProduct)

INPUT_PRODUCT.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addProduct();
    }
})

/**
 * Fonction qui vérifie si l'ajout du produit dans la liste est possible et l'ajoute
 */
function addProduct() {
    SPAN_ERROR.textContent = '';
    // .trim() s'utilise sur les chaines de caractère et permet d'enlever tous les espaces inutiles à gauche et à droite de la chaine
    // .toLowerCase() permet de mettre tout en minuscule
    const productName = INPUT_PRODUCT.value.trim().toLowerCase();

    if (productName !== '' && isNaN(productName)) {

        //tableau.includes(termeRecherché) renvoie un booléen pour vous dire si le thème recherché se trouve ou non dans le tableau
        if (products.includes(productName)) {
            SPAN_ERROR.textContent = 'Ce produit est déjà dans la liste';
        }
        else {
            products.push(productName);
            // showProductsV1();
            showProductsV2();
        }

    }
    else {
        SPAN_ERROR.textContent = 'Format invalide';
    }

    INPUT_PRODUCT.value = '';

}

/**
 * Fonction qui permet d'afficher le tableau de produits dans la page
 */
function showProductsV1() {
    UL_PRODUCTS.innerHTML = '';
    products.forEach((product, index) => {

        UL_PRODUCTS.innerHTML += `<li><span>${product}</span> <button onclick="deleteProduct(${index})">🗑️</button></li>`;
    })
}

/**
 * Fonction qui permet d'afficher le tableau de produits dans la page (mais version propre)
 */
function showProductsV2(){
    UL_PRODUCTS.innerHTML = '';

    products.forEach((product, index) => {

        // ! Créer des éléments HTML
        const LI = document.createElement('li');
        const SPAN = document.createElement('span');
        SPAN.textContent = product;
        const BUTTON = document.createElement('button');
        BUTTON.textContent = '🗑️';
        BUTTON.addEventListener('click', () => {
            deleteProduct(index);
        });

        // ! Ajouter un élément HTML dans un autre
        // ElementHTMLParent.appendChild(ElementHTMLEnfant);
        // ? inconvénient du appendChild -> Je ne peux ajouter qu'un seul enfant
        // LI.appendChild(SPAN);
        // LI.appendChild(BUTTON);
        // ou alors
        // ElementHTMLParent.append(Enfant1, Enfant2, ...)
        // append permet d'ajouter plusieurs éléments html enfants d'un coup
        LI.append(SPAN, BUTTON);
        UL_PRODUCTS.append(LI);

    })



}

/**
 * Supprimer le produit qui se trouve à l'indice renseigné
 * @param {number} indice 
 */
function deleteProduct(indice) {
    products.splice(indice, 1);
    // showProductsV1();
    showProductsV2();
    
}
