# Portfolio de Junior Erville KOUMOU NDEYE

Portfolio personnel présentant mon parcours, mes compétences et mes projets en génie logiciel et administration réseau. Le site est statique, bilingue (français / anglais) et responsive.

**Site en ligne :** https://juniork1012.github.io/portfolio/

## Fonctionnalités

- Interface mobile-first, adaptée du téléphone à l'ordinateur
- Bascule français / anglais, avec mémorisation du choix
- Navigation accessible : menu mobile, focus visible, `aria-*`, respect de `prefers-reduced-motion`
- Aucune dépendance externe : pas de framework, pas de CDN, pas de traceur
- Politique de sécurité du contenu (CSP) restrictive

## Technologies

- HTML5, CSS3 (variables CSS, Grid, Flexbox), JavaScript natif
- Icônes [Lucide](https://lucide.dev) (licence ISC), intégrées en sprite SVG
- Police [Inter](https://rsms.me/inter/) (licence SIL OFL), auto-hébergée

## Structure

```
.
├── index.html
├── css/style.css
├── js/
│   ├── translations.js   # textes FR / EN
│   └── script.js         # menu mobile, langue, année du pied de page
└── assets/
    ├── documents/        # CV au format PDF
    ├── fonts/
    └── images/
```

## Lancer le projet en local

Aucune installation n'est nécessaire. Pour éviter les restrictions du navigateur sur les fichiers locaux, il vaut mieux passer par un petit serveur :

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Déploiement

Le site est publié avec GitHub Pages : **Settings → Pages → Deploy from a branch → `main` / `(root)`**.

## Modifier les textes

Tous les textes se trouvent dans `js/translations.js`. Pour ajouter un texte traduisible :

1. Ajouter l'attribut `data-i18n="ma-cle"` sur l'élément dans `index.html`.
2. Déclarer `ma-cle` dans les sections `fr` et `en` de `translations.js`.

## Licence

Le code source est publié sous licence MIT (voir `LICENSE`). Les contenus personnels (textes, photo, CV) ne sont pas couverts par cette licence.

## Contact

[GitHub](https://github.com/juniorK1012) · koumoujuniorerville@gmail.com