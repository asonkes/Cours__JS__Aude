// Les requêtes vers les API renvoient des promesses.
// Une requête peut mettre du temps à s'effectuer voire complètement échouer, nous aurons donc besoin de réagir seulement une fois la requête réussie ou échouée

//! Comment utilise-t-on une API ?
// Nous envoyons une requête (notre demande) à une API

// ? Une url (qui explicite ce qu'on demande)
    // * https://pokeapi/api/pokemon -> On veut gérer les pokemons
    // * https://pokeapi/api/berry -> On veut gérer les baies
// ? Verb
    // * GET (récupérer des données)
        // GET + https://pokeapi/api/pokemon -> accéder aux pokemon
    // * POST (envoyer des données)
        // POST + https://pokeapi/api/pokemon -> ajouter un pokemon
    // * PUT (modifier les données)
        // PUT + https://pokeapi/api/pokemon/42 -> modifier le pokemon n°42
    // * PATCH (modifier partiellement les données)
        // PATCH + https://pokeapi/api/pokemon/42 -> modifier un élément en particulier du pokemon n°42
    // * DELETE (supprimer des données)
        // DELETE + https://pokeapi/api/pokemon/42 -> supprimer le pokemon n°42

// ? Body (optionnel)
// Pour les requêtes qui envoient des informations vers l'API (POST, PUT, PATCH), les informations à envoyer (souvent venues d'un formulaire) seront envoyées dans le body de la requête

// ? Concernant l'url, elle est découpée en plusieurs parties
// - base de l'url 
    //* ex : https://pokeapi/api/pokemon
// - paramètres ou params (optionnels)
    // Permettra de cibler quelque chose en particulier (souvent un id)
    //* ex : https://pokeapi/api/pokemon/{:id}
    //* ex : https://pokeapi/api/pokemon/{:nom}
    //* ex : https://pokeapi/api/pokemon/1
    //* ex : https://pokeapi/api/pokemon/bulbasaur
// - query (optionnelle)
    // Permet de mettre en place des filtres. La query commence toujours par ? et chaque option est séparée d'un &
    //* ex : https://pokeapi/api/pokemon?offset=0&limit=20
        // -> Récupère 20 (limit) pokemons en partant du numero 0 (offset)
    //* ex : https://pokeapi/api/pokemon?offset=20&limit=20
        // -> Récupère 20 (limit) pokemons en partant du numero 20 (offset)

//-------------------------------------------------
// Faisons nos premières requêtes
const INPUT_PRENOM = document.getElementById('prenom');

const BTN_RECHERCHER = document.getElementById('rechercher');

const P_RESULTAT = document.getElementById('resultat');

// BTN_RECHERCHER.addEventListener('click', rechercheFetch);
BTN_RECHERCHER.addEventListener('click', rechercheAxios);

INPUT_PRENOM.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        // rechercheFetch();
        rechercheAxios();
    }
})

// En utilisant fetch
function rechercheFetch(){
    P_RESULTAT.textContent = '';

    let prenom = INPUT_PRENOM.value.trim();

    // Si pas de prénom, on affiche un message d'erreur
    if(!prenom){
        P_RESULTAT.textContent = 'Vous devez entrer un prénom pour effectuer la recherche';

    }
    // Si y'a un prénom, on lance la requête
    else {
        // Note : Si on ne précise rien, le fetch est d'office en GET
        fetch(`https://api.agify.io/?name=${prenom}&country_id=BE`)
            .then((response) => {
                // On est dans le cas où la requête s'est faite correctement
                console.info(response);

                // Cas où la requête s'est faite mais on a une erreur
                if(response.status === 422) {
                    P_RESULTAT.textContent = 'La requête est écrite avec les pieds, vérifiez son écriture';
                }

                // Cas où la requête s'est faite et est un grand succès
                if(response.status === 200) {
                    // Sur la réponse de la requête, nous avons accès une fonction json qui permet de récupérer le json que la requête aurait renvoyé
                    response.json()
                        .then((data) => {
                            console.log(data);
                            P_RESULTAT.textContent = `Basé sur le recensement de ${data.count} ${data.name} né•e•s en Belgique. Vous auriez ${data.age} ans.`;
                        })
                }
                
                
            })
            .catch((error) => {
                // On est dans le cas où la requête ne se fait pas correctement
                console.error(error);
                P_RESULTAT.textContent = 'Une erreur est survenue';
            })

    }
}

// En utilisant la librairie axios
function rechercheAxios() {
     P_RESULTAT.textContent = '';

    let prenom = INPUT_PRENOM.value.trim();

    // Si pas de prénom, on affiche un message d'erreur
    if(!prenom){
        P_RESULTAT.textContent = 'Vous devez entrer un prénom pour effectuer la recherche';

    }
    else {
        // Cette fois ci, on précise sur axios, le verb à utiliser
        axios.get(`https://api.agify.io/?nam=${prenom}&country_id=BE`)
            .then((response) => {
                console.log(response);
                // Avec axios, pas besoin d'effectuer la méthode json() pour récupérer les data, elles sont déjà mises dans l'objet response par axios

                if(response.status === 200){
                     P_RESULTAT.textContent = `Basé sur le recensement de ${response.data.count} ${response.data.name} né•e•s en Belgique. Vous auriez ${response.data.age} ans.`;
                }
                
                
            })
            .catch((error) => {
                console.error(error);
                // Avec axios, si notre requête fait une erreur (4XX Ou 5XX), on passera par ici plutôt que dans le then, comme ça on gère toutes nos erreurs au même endroit
                
                if(error.status === 422) {
                    P_RESULTAT.textContent = 'La requête est écrite avec les pieds, vérifiez son écriture';
                }
            })
    }
}
