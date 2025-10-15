//! Les objets
//! -------------------------

// ! Déclaration
const trainer1 = {
    // nomPropriété : valeur de cette propriété
    // chaque propriété doit avoir un nom unique
    lastname: 'Beurive',
    firstname: 'Aude',
    birthdate: new Date('1989-10-16'),
    category: 'Dev',
    // on restera simple pour nos premiers objets mais pour la démo, gardez en tête qu'un objet peut contenir 
    // une propriété qui est un tableau
    hobbies: ['Dessin', 'Regarder Twitch Art', 'Journaling'],
    // une propriété qui est un objet
    address: {
        number: 2,
        street: 'rue des canards',
        zipcode: 1212,
        city: 'KwakCity'
    },
    // une propriété qui contient un tableau d'objets
    pets: [
        {
            name: 'Taylor',
            type: 'Chien'
        },
        {
            name: 'Soup',
            type: 'Chat'
        }
    ]

}

// ! Accéder à une propriété
console.log(trainer1);
console.log(trainer1.firstname);
console.log(trainer1.lastname.toUpperCase());
// Pour accéder à une propriété qui contient un tableau
console.log(trainer1.hobbies[0])
// Pour accéder à une propriété qui contient un objet où l'on souhaite consulter une des propriétés de cet objet
console.log(trainer1.address.street);
console.log(trainer1.pets[0].name);

// ! Afficher un objet dans la page html

// ? V1
// Attention, si vous essayez d'afficher tout un objet dans une balise html, vous aurez [object Object] affiché dans la page puisqu'on ne peut y afficher que du texte
const DIV_TRAINER1_V1 = document.getElementById('trainer1-v1');

DIV_TRAINER1_V1.textContent = trainer1;

// ? V2
const DIV_TRAINER1_V2 = document.getElementById('trainer1-v2');

// note : .toLocaleDateString(locale) s'utilise uniquement sur les objets Date et permet de formater la date avec la locale de notre choix 
// fr : JJ/MM/AAAA
// en : MM/JJ/AAAA
DIV_TRAINER1_V2.innerHTML = `
    Nom : ${trainer1.lastname} <br>
    Prenom : ${trainer1.firstname} <br>
    Date de naissance : ${trainer1.birthdate.toLocaleDateString('fr')} <br>
    Adresse : ${trainer1.address.number} ${trainer1.address.street} ${trainer1.address.zipcode} ${trainer1.address.city}
    `;

// ? V3
const DIV_TRAINER1_V3 = document.getElementById('trainer1-v3');

// * Version 💩
DIV_TRAINER1_V3.innerHTML = `
    <p><span class="desc">Nom : </span><span>${trainer1.lastname}</span> </p>
    <p><span class="desc">Prénom : </span><span>${trainer1.firstname}</span> </p>
    <p><span class="desc">Date de naissance : </span><span>${trainer1.birthdate.toLocaleDateString('fr')}</span></p>
    <br>
`;

// * Version 🧼

// création du paragraphe pour les infos du nom
const P_LASTNAME = document.createElement('p');

// création du span pour afficher Nom :
const SPAN_LASTNAME_DESC = document.createElement('span');
SPAN_LASTNAME_DESC.textContent = 'Nom : ';
SPAN_LASTNAME_DESC.classList.add('desc');

// création du deuxième span pour mettre la valeur contenue dans formateur
const SPAN_LASTNAME = document.createElement('span');
SPAN_LASTNAME.textContent = trainer1.lastname;

// ajout des deux span dans le paragraphe du nom
P_LASTNAME.append(SPAN_LASTNAME_DESC, SPAN_LASTNAME);

// ajout du paragraphe nom dans la div
DIV_TRAINER1_V3.append(P_LASTNAME);

// Todo : faire les autres mais on a la flemme

//! Exemple plus concret 
//!----------------------------------

// Tableau avec plusieurs objets qui représentent un contact
// Un contact aura toujours une propriété lastname, firstname, email, avatar et favorite
// Attention à ne pas faire de faute de typo dans vos propriétés, ils doivent tous avoir les mêmes
const contacts = [
    {
        lastname: 'Onyme',
        firstname: 'Anne',
        email: 'anne.onyme@qui.be',
        avatar: './anne_onyme.png',
        favorite: true
    },
    {
        lastname: 'Javel',
        firstname: 'Aude',
        email: 'aude.javel@eau.be',
        avatar: './aude_javel.png',
        favorite: false
    },
    {
        lastname : 'Nupied',
        firstname : 'Eva',
        email : 'eva.nupied@berk.be',
        avatar : './eva_nupied.png',
        favorite : true
    }
]

const TBODY_CONTACTS = document.getElementById('contacts');

// On va parcourir chaque contact de notre tableau de contacts, pour créer une ligne à ajouter dans notre HTML
contacts.forEach((contact, index) => {

    // * Pour ajouter 1 contact :
    // ? Créer une ligne <tr>
    const TR = document.createElement('tr');

    // ? Créer une première <td> avec dedans l'image <img>
    const TD_AVATAR = document.createElement('td');
    const IMG_AVATAR = document.createElement('img');
    IMG_AVATAR.src = contact.avatar;
    IMG_AVATAR.alt = "avatar de " + contact.firstname;
    TD_AVATAR.append(IMG_AVATAR); //ajout de l'image dans la <td>

    // ? Créer une <td> avec le nom
    const TD_LASTNAME = document.createElement('td');
    TD_LASTNAME.textContent = contact.lastname;

    // ? Créer une <td> avec le prénom
    const TD_FIRSTNAME = document.createElement('td');
    TD_FIRSTNAME.textContent = contact.firstname;

    // ? Créer une <td> avec l'email
    const TD_EMAIL = document.createElement('td');
    TD_EMAIL.textContent = contact.email;

    // ? Créer une <td> avec un truc pour savoir si on a un contact favori ou non
    const TD_FAVORITE = document.createElement('td');
    const ICON = document.createElement('i');
    ICON.classList.add('fa-solid', 'fa-heart');
    // Si le contact est favori, on rajoute la classe qui va mettre l'icone en rouge
    if(contact.favorite){
        ICON.classList.add('favorite');
    }
    TD_FAVORITE.append(ICON);

    // ? Ajouter toutes les <td> à la <tr>
    TR.append(TD_AVATAR, TD_LASTNAME, TD_FIRSTNAME, TD_EMAIL, TD_FAVORITE);
    // ? Ajouter la <tr> dans le <tbody>
    TBODY_CONTACTS.append(TR);
})


