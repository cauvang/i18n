import HomePage from './[lang]/home/pageContent'

export const metadata = {
  applicationName: 'Internationalization Example',
  // title: {
  //   default: 'Internationalization With static page',
  //   template: '%s - PWA App',
  // },

  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
}

export default function Home() {
  return <HomePage />
}
