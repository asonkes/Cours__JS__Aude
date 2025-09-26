// ! 1) Identifier et récupérer les éléments dont on a besoin pour l'exercice
const INPUT_NOTE = document.getElementById('note');
const INPUT_POURCENT_POURBOIRE = document.getElementById('pourcent');
const INPUT_NB_PERSONNE = document.getElementById('nbPers');

const BTN_VALIDER = document.getElementById('valider');

const P_MTN_POURBOIRE = document.getElementById('mtn-pourboire');
const P_MTN_TOTAL = document.getElementById('mtn-total');
const P_MTN_PAR_PERS = document.getElementById('mtn-par-pers');

const BTN_RESET = document.getElementById('reset');

// ! 2) Rajouter l'évènement sur le bouton
BTN_VALIDER.addEventListener('click', () => {
    
    // ! 3) Faire nos calculs et mettre dans la page
    // ? Récupérer ce qu'il y a input
    let note = INPUT_NOTE.valueAsNumber;
    let pourcentPourboire = INPUT_POURCENT_POURBOIRE.valueAsNumber;
    let nbPersonnes = INPUT_NB_PERSONNE.valueAsNumber;

    // ? Faire nos calculs
    let pourboire = (note * pourcentPourboire) / 100;
    let total = note + pourboire;
    let totalParPersonne = total / nbPersonnes;

    // ? Afficher dans la page
    P_MTN_POURBOIRE.textContent = pourboire.toFixed(2) + ' €';
    P_MTN_TOTAL.textContent = total.toFixed(2) + ' €';
    P_MTN_PAR_PERS.textContent = totalParPersonne.toFixed(2) + ' €';

});

BTN_RESET.addEventListener('click', () => {
    // INPUT_NOTE.value = '';
    // INPUT_POURCENT_POURBOIRE.value = '';
    // INPUT_NB_PERSONNE.value = '';

    // ou
    // document.getElementById('form').reset();

    // spoilet : partie formulaire
    // ou
    // document.forms[0].reset();
    // ou
    document.forms.splitForm.reset();

    P_MTN_POURBOIRE.textContent = '0.00 €';
    P_MTN_TOTAL.textContent = '0.00 €';
    P_MTN_PAR_PERS.textContent = '0.00 €';
});