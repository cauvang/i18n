export const i18n = {
  defaultLocale: 'en-us',
  locales: ['vi', 'en-us', 'fr-ca'],
  localeDetection: false,
} as const
export type Locale = (typeof i18n)['locales'][number]
