const juices = [
    {
        name : 'La Constante',
        description : 'Un jus à base d\'oranges pressées',
        image : './images/orange_juice.PNG',
        price : 4.5,
        promo : true,
        promoPrice : 3.8
    }, 
    {
        name : 'La Condition',
        description : 'Un jus à base de cerises bien sucrées',
        image : './images/cherry_juice.PNG',
        price : 5.5,
        promo : false,
        promoPrice : 4.8
    },
    {
        name : 'Le Bug',
        description : 'Un jus à base d\'horribles kiwis',
        image : './images/kiwi_juice.PNG',
        price : 10.5,
        promo : false,
        promoPrice : 9.5
    }
];

const DIV_CARDS = document.getElementById('cards');

juices.forEach((juice) => {
    // Je créé la carte d'un jus
    const DIV_CARD = document.createElement('div');
    DIV_CARD.classList.add('card');

    // Je créé le haut de ma carte
    const DIV_TOP_CARD = document.createElement('div');
    DIV_TOP_CARD.classList.add('top-card');

    const IMG = document.createElement('img');
    IMG.src = juice.image;
    IMG.alt = 'Bouteille du jus ' + juice.name;

    const DIV_SHADOW = document.createElement('div');
    DIV_SHADOW.classList.add('shadow');

    // On ajoute l'image et l'ombre dans le haut de la carte
    DIV_TOP_CARD.append(IMG, DIV_SHADOW);
    // On ajoute le haut de la carte dans la carte
    DIV_CARD.append(DIV_TOP_CARD);


    //On s'occupe maintenant du dessous de la carte
    const DIV_BOT_CARD = document.createElement('div');
    DIV_BOT_CARD.classList.add('bot-card');

    const H3_NAME = document.createElement('h3');
    H3_NAME.textContent = juice.name;

    const P_DESCRIPTION = document.createElement('p');
    P_DESCRIPTION.classList.add('desc');
    P_DESCRIPTION.textContent = juice.description;

    const DIV_PRICE = document.createElement('div');
    DIV_PRICE.classList.add('price');

    //On ajoute tout dans le bas de la carte
    DIV_BOT_CARD.append(H3_NAME, P_DESCRIPTION, DIV_PRICE);

    // On s'occupe du prix
    if(juice.promo){
        const P_PRICE = document.createElement('p');
        P_PRICE.textContent = juice.promoPrice.toFixed(2) + ' €';

        const P_OLD_PRICE = document.createElement('p');
        P_OLD_PRICE.classList.add('promo');
        P_OLD_PRICE.textContent = juice.price.toFixed(2) + ' €';

        DIV_PRICE.append(P_PRICE, P_OLD_PRICE);

        // Gestion pastille
        const DIV_PROMO = document.createElement('div');
        DIV_PROMO.classList.add('pastille');
        DIV_PROMO.textContent = '%';

        DIV_CARD.append(DIV_PROMO);
    }
    else {
        const P_PRICE = document.createElement('p');
        P_PRICE.textContent = juice.price.toFixed(2) + ' €';

        DIV_PRICE.append(P_PRICE);
    }

    //On ajoute le bas de la carte à la carte
    DIV_CARD.append(DIV_BOT_CARD);

    //On ajoute la carte dans le container de toutes les cartes
    DIV_CARDS.append(DIV_CARD);
});

