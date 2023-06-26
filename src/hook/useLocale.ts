import { usePathname } from 'next/navigation'
import { i18n } from '../i18n-config'

export function useLocale() {
  const pathname = usePathname()
  if (pathname === null) return i18n.defaultLocale
  if (pathname.includes('fr-ca')) return 'fr-ca'
  if (pathname.includes('vi')) return 'vi'
  return i18n.defaultLocale
}
