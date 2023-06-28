import { Locale, i18n } from '@/i18n-config'

const dictionaries: any = {
  'en-us': () => ({
    home: import('./en/home.json').then((module) => module.default),
    food: import('./en/food.json').then((module) => module.default),
    places: import('./en/places.json').then((module) => module.default),
  }),
  'fr-ca': () => ({
    home: import('./fr/home.json').then((module) => module.default),
    food: import('./fr/food.json').then((module) => module.default),
    places: import('./fr/places.json').then((module) => module.default),
  }),
  vi: () => ({
    home: import('./vi/home.json').then((module) => module.default),
    food: import('./vi/food.json').then((module) => module.default),
    places: import('./vi/places.json').then((module) => module.default),
  }),
}

export const getDictionaryFolder = async (locale: Locale) =>
  dictionaries[locale || i18n.defaultLocale]
