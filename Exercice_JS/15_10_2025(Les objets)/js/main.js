const sacs = [
    {
        name: "sac Rose",
        image: "../images/sacs/sacs_rose.jpg",
        alt: "Image d'un sac rose",
        description : "Ce magnifique sac sera un cadeau que vous pourrez offrir messieurs à n'importe quelle occassion !",
        price: 105,
        promo: false,
        pricePromo: ''
    },
     {
        name: "sac Vert",
        image: "../images/sacs/sac_vert.jpg",
        alt: "Image d'un sac vert",
        description : "Ce sac a été fait totalement à la main, il est en pur cuir !!!",
        price: 200,
        promo: true,
        pricePromo: 180
    },
    {
        name: "sac Bleu",
        image: "../images/sacs/sac_bleu.jpg",
        alt: "Image d'un sac bleu",
        description : "Ce sac bleu est un plaisir pour les yeux, un toucher doux, allez-y, foncé !!!",
        price: 99,
        promo: false,
        pricePromo: ''
    },
    {
        name: "sac Beige",
        image: "../images/sacs/sac_beige.jpg",
        alt: "Image d'un sac beige",
        description : "Ce petit sac enchantera madame, un anniversaire, une fête, elle craquera !!!",
        price: 55,
        promo: true,
        pricePromo: 40
    },
]

/** Code pour l'affichage des sacs */
const container = document.querySelector(".container");

sacs.forEach((element, index) => {

    /** On va créer la div parente pour l'image */
    const product = document.createElement("div");
    product.classList.add("sac");

    container.append(product);

    /** On va créer la div image */
    const imageParent = document.createElement("div");
    imageParent.classList.add("image");
    /** On va aussi créer la div text */
    const infos = document.createElement("div");
    infos.classList.add("infos");

    /** Ici on va créer vraiment la balise img */
    const image = document.createElement("img");
    image.src = element.image;
    image.alt = element.alt;

    imageParent.appendChild(image);

    /** On va insérer le nom du produit */
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = `${element.name}`;

    /** On va insérer la description */
    const description = document.createElement("p");
    description.classList.add("text");

    /**On va insérer ses spans */
    const descriptionSpan1 = document.createElement("span");
    descriptionSpan1.classList.add("span1");
    descriptionSpan1.textContent = `Description :`;
    const descriptionSpan2 = document.createElement("span");
    descriptionSpan2.textContent = `${element.description}`;

    description.append(descriptionSpan1, descriptionSpan2);

    /** On va insérer le prix */
    const price = document.createElement("p");
    price.classList.add("price");

    /** On va insérer ses spans */
    const priceSpan1 = document.createElement("span");
    priceSpan1.classList.add("span1");
    priceSpan1.textContent = `Le prix :`;
    const priceSpan2 = document.createElement("span");
    priceSpan2.textContent = `${element.price} €`;

    price.append(priceSpan1, priceSpan2);

    /** Enfin afficher le prix si promotion il y a */
    /** Je l'ai mis avant car relié à l'élément précédent */
    const promoPrice = document.createElement("p");
    const promoPriceSpan1 = document.createElement("span");
    const promoPriceSpan2 = document.createElement("span");

    if(element.promo) {
        promoPrice.classList.add("promoPrice");
            /** On va insérer les spans */
            promoPriceSpan1.classList.add("span1");
            promoPriceSpan1.textContent = `Le prix en promotion est :`;
            promoPriceSpan2.textContent = `${element.pricePromo} €`;
    }

    promoPrice.append(promoPriceSpan1, promoPriceSpan2);

    infos.append(title, description, price, promoPrice);

    /** S'il y a une promo, on va insérer l'image */
    /** La constante doit être créer avant le "if" */
    const promo = document.createElement("img");

    if(element.promo) {
        promo.classList.add("promo");
        promo.src = "../images/promo/3252739.png";
    };

    product.append(imageParent, infos, promo);
});

