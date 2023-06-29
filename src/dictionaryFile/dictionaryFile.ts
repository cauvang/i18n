import { Locale, i18n } from '@/i18n-config'

const dictionaries = {
  'en-us': () => import('./en.json').then((module) => module.default),
  'fr-ca': () => import('./fr.json').then((module) => module.default),
  vi: () => import('./vi.json').then((module) => module.default),
}

export const getDictionaryFile = async (locale: string) => {
  try {
    return dictionaries[(locale as Locale) || i18n.defaultLocale]()
  } catch (error) {
    return null
  }
}
