// Système d'indices : retient d'une page à l'autre les indices trouvés par le joueur.
// Ils sont stockés dans le navigateur (localStorage) sous forme d'une liste de noms.
const CLE = "hors-texte-indices";

function lireIndices() {
    return JSON.parse(localStorage.getItem(CLE)) || [];
}

function ajouterIndice(nom) {
    const indices = lireIndices();
    if (!indices.includes(nom)) {
        indices.push(nom);
        localStorage.setItem(CLE, JSON.stringify(indices));
    }
}

// Accueil (data-nouvelle-partie) : une nouvelle partie efface les indices
if (document.body.hasAttribute("data-nouvelle-partie")) {
    localStorage.removeItem(CLE);
}

// Page qui donne un indice dès qu'on y arrive (scène 03 : data-indice="tourne")
if (document.body.dataset.indice) {
    ajouterIndice(document.body.dataset.indice);
}

// Élément qui donne un indice quand on clique dessus (scène 02 : la feuille)
document.querySelectorAll("[data-indice-clic]").forEach(function (element) {
    element.addEventListener("click", function () {
        ajouterIndice(element.dataset.indiceClic);
    });
});

// Scène 07 : si au moins un indice a été trouvé, la classe « indice-trouve »
// affiche la vraie fin (le CSS s'occupe de montrer ou cacher les éléments)
if (lireIndices().length > 0) {
    document.body.classList.add("indice-trouve");
}
