import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import common from './locales/fr/common.json'
import legal from './locales/fr/legal.json'
import kidenou from './locales/fr/kidenou.json'

export const defaultNS = 'common'

// Pour ajouter une langue : créer locales/<lng>/ avec les mêmes fichiers puis l'enregistrer ici.
export const resources = {
  fr: { common, kidenou, legal },
} as const

void i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  defaultNS,
  interpolation: { escapeValue: false },
  returnObjects: true,
})

document.documentElement.lang = i18n.language

export default i18n
