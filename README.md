# Entrami

Des jeux pour passer du bon temps entre amis. Une plateforme multi-jeux à jouer en soirée, sur un seul téléphone.

## Jeux

- **Kidenou** : « Qui de nous… ? » Une personne lit la question à voix haute, tout le monde vote et débat.

## Stack

Vite · React 19 · TypeScript · Tailwind CSS v4 · React Router · i18next · Vitest

## Démarrer

```bash
npm install
npm run dev     # serveur de développement
npm test        # tests unitaires
npm run build   # build de production
```

## Ajouter un jeu

1. Créer `src/games/<id>/` avec un composant de jeu.
2. Créer `src/i18n/locales/fr/<id>.json` (`name`, `tagline`, `description`, `rules`…) et l'enregistrer dans `src/i18n/index.ts`.
3. Déclarer le jeu dans `src/games/registry.ts` : il apparaît sur l'accueil.

## Ajouter une langue

Copier `src/i18n/locales/fr/` vers `src/i18n/locales/<lng>/`, traduire, puis l'ajouter à `resources` dans `src/i18n/index.ts`.

## Persistance

Aucune base de données : les questions sont dans les fichiers de traduction, et les questions déjà posées sont mémorisées dans le `localStorage` du navigateur (une question ne revient pas tant que le paquet n'est pas terminé).
