# Hors-Texte

Jeu d'aventure textuel à choix multiples, réalisé pour le TP Initiation Web (HTML / CSS).

Le joueur traverse un mur et se retrouve dans les Backrooms : des couloirs jaunes, des bureaux vides, des piscines, un parking sans fin… Au fil des pages, des indices laissent comprendre que ces lieux ne sont pas réels : les Backrooms sont un livre, et chaque niveau en est un chapitre.

## Lancer le jeu

Ouvrir `index.html` dans un navigateur. Aucune installation n'est nécessaire.

## Structure du projet

```
├── index.html              # Page d'accueil
├── style.css               # Feuille de style (unique pour tout le site)
├── script.js               # Système d'indices (bonus JavaScript)
├── pages/
│   ├── scene01.html … scene10.html
├── assets/
│   ├── backgrounds/        # Images de fond des scènes
│   ├── icons/
│   └── sounds/
├── arbre-navigation.pdf    # Arbre de navigation
└── README.md
```

## L'histoire

- 10 scènes + la page d'accueil
- 3 fins : une mauvaise fin (scène 08), une fin en boucle (scène 09) et la vraie fin (scène 10)
- 2 boucles : rebrousser chemin dans le parking (04 → 01) et rouvrir le livre (09 → 01)

Le détail des liens entre les pages est dans `arbre-navigation.pdf`.

## Fonctionnalités

- **Boutons de choix personnalisés** en forme de panneaux de sortie de secours, avec des icônes Font Awesome. Le choix dangereux de la scène 06 a un bouton rouge.
- **Une image de fond par scène**, déclarée dans `style.css` avec une classe sur le `<body>` (`fond-01`, `fond-02`…).
- **La feuille de la scène 02** : on peut la ramasser et la lire en grand. Fait en CSS uniquement, avec le sélecteur `:target`.
- **Le mot « TOURNE » de la scène 03** : des lettres d'encre qui remontent à la surface de l'eau (animation CSS avec `@keyframes` et `animation-delay`).
- **L'évolution visuelle** : dans les scènes 07 et 10, il n'y a plus de photo, la carte devient une page de livre.
- **Le système d'indices** (`script.js`) : ramasser la feuille (scène 02) ou voir le mot TOURNE (scène 03) enregistre un indice dans le navigateur (`localStorage`). À la scène 07, la vraie fin n'est proposée que si le joueur a trouvé au moins un indice. Les indices sont effacés quand on revient à l'accueil.

## Crédits

- Images : [Unsplash](https://unsplash.com) (licence Unsplash)
  - Accueil : [salle vide aux plafonniers](https://unsplash.com/fr/photos/chambre-avec-plafonniers-allumes-jXrsi4j1vA8)
  - Scènes 01 et 09 : [couloir aux murs jaunes](https://unsplash.com/fr/photos/un-long-couloir-avec-des-murs-jaunes-et-un-sol-rouge-et-blanc-aXYiV2mW0BI)
  - Scène 02 : [allée de bureaux](https://unsplash.com/fr/photos/chaises-roulantes-noires-vides-dans-les-cabines-2zZp12ChxhU)
  - Scène 03 : [salle carrelée inondée](https://unsplash.com/fr/photos/une-piece-vide-texturee-avec-de-leau-sur-le-sol-74Vbll_Eexo)
  - Scène 04 : [parking souterrain](https://unsplash.com/fr/photos/un-parking-vide-avec-une-voiture-garee-dedans-yyxf7U5KQ78)
  - Scène 05 : [escalier en béton](https://unsplash.com/fr/photos/un-escalier-avec-un-eclairage-moderne-oKsEZ15z0eY)
  - Scènes 06 et 08 : [salle de jeux abandonnée](https://unsplash.com/fr/photos/une-salle-de-jeux-pour-enfants-dans-le-batiment-abandonne-du-centre-psychiatrique-de-rockland-zpbpB4edB70)
- Icônes : [Font Awesome](https://fontawesome.com) (version gratuite)
