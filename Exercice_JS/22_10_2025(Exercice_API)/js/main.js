/** On va initialiser les variables dont on a besoin */
/** On initialise la valeur de l'input */
const input = document.querySelector("input");

/** On initialise le bouton */
const button = document.querySelector("button");

button.addEventListener("click", () => {
  /** ON initialise la valeur de l'input */
  let motATrouver = input.value.trim();
  console.log(motATrouver);

  rechercheAxios(motATrouver);
});

function rechercheAxios(motATrouver) {
  if (motATrouver === "") {
    console.log("Vous devez rentrer un mot pour trouver une blague !!!");
  } else {
    // Forcing : Création d'une instance particulière de axios qui n'accepte que le json en retour
    const axiosInstance = axios.create({
      headers: { Accept: "application/json" },
    });

    axiosInstance
      .get(`https://icanhazdadjoke.com/search?term=${motATrouver}`)

      .then((response) => {
        console.log(response.data.results);
      })

      .catch((error) => {
        console.log(error);
      });
  }
}
