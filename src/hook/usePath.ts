import { usePathname } from 'next/navigation'
import { i18n } from '../i18n-config'

export function useRootPathname() {
  const pathName = usePathname()
  const segments = pathName === null ? '/' : pathName.split('/')
  const isHavingLocale =
    pathName == null
      ? false
      : i18n.locales.some((ele) => pathName.includes(ele))

  return {
    pathName,
    isHavingLocale,
    rootPath: isHavingLocale ? segments[0] + '/' + segments[1] : segments[0],
  }
}
