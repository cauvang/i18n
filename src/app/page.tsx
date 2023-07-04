import HomePage from './[lang]/home/pageContent'

export const metadata = {
  applicationName: 'Internationalization Example',
  title: {
    default: 'Home page', //should change to title of default language
    template: '%s - PWA App',
  },

  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },

  icons: {
    shortcut: '/favicon.ico',
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
}

export default function Home() {
  return <HomePage />
}
