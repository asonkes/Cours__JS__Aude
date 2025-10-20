const UL = document.getElementById('trainers');

const trainers = [];

// Avant qu'on utilise la promesse
//getTrainers(); //cette fonction rempli le tableau après 1 seconde
//showTrainers(); //donc quand cette fonction est exécutée, le tableau n'est pas encore rempli
// résultat -> Visuellement nada mais quand on regarde le tableau trainers dans la console, il est bien rempli

const DIV_SPINNER = document.getElementById('spinner');

DIV_SPINNER.classList.remove('hidden');
getTrainersWithPromise()
    .then((res) => { 
        //Dans le .then, on gère le cas où la promesse s'est tenue correctement (resolve)
        //res contient le résultat de la promesse qui s'est tenue correctement
        // Dans notre cas, nous n'avons rien qui nous intéresse dans res, mais si notre promesse est tenue correctement, on va afficher les formateurs
        showTrainers();
    })
    .catch((error) => {
        // catch est la fonction déclenchée si la promesse n'est pas tenue (donc si elle a été reject)
        // error contiendra ce qui a été envoyé dans reject
        document.getElementById('error').textContent = error.message;
    } )
    .finally(() => {
        // Se fera que la promesse soit tenue ou pas
        DIV_SPINNER.classList.add('hidden');
    })

function getTrainers() {
    // On va simuler le fait qu'une API prend du temps à répondre
    setTimeout(() => {
        trainers.push('Aude', 'Sonia', 'Julie', 'Aurélien')

    } , 1000)
}

// Une promesse en javascript, c'est un objet qui possède 2 fonctions, une qui s'exécute en cas de réussite de la promesse et une qui s'exécute en cas d'échec de la promesse
// En gros, une fonction qui renvoie une promesse peut soit tenir ou non sa promesse
function getTrainersWithPromise() {
    // resolve représente la fonction a exécuter si la promesse est tenue
    // reject représente la fonction a exécuter si la promesse échoue
    // Ces deux variables (callback = variable qui contient une fonction) peuvent s'appeler comme vous voulez, mais souvent on les appelle resolve & reject
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //on génère un nombre entre 1 et 2
            let rand = Math.floor(Math.random() * 2 + 1);
            if(rand === 1) {
                trainers.push('Aude', 'Sonia', 'Julie', 'Aurélien');
                resolve(true); //permet d'indiquer que la promesse est tenue et dans les paramètres, on envoie ce qu'on veut
            }
            else {
                //si la promesse ne peut être tenue, on déclenche la fonction reject avec le motif du rejet (souvent, une erreur)
                reject(new Error('Une erreur est survenue'))
            }
        }, 2000)
    });
}

function showTrainers() {

    trainers.forEach( (trainer) => {
        const LI = document.createElement('li');
        LI.textContent = trainer;
        UL.append(LI);
    });
}
