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

## Persistance

Aucune base de données : les questions sont dans les fichiers de traduction, et les questions déjà posées sont mémorisées dans le `localStorage` du navigateur (une question ne revient pas tant que le paquet n'est pas terminé).
