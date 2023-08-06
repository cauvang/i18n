import { useRootPathname } from '@/hook/usePath'
import { useTranslationFolder } from '@/hook/useStaticContent'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const activeLink = (url: string, pathname: string | null) => {
  return pathname === url ? 'text-pink pointer-events-none' : ''
}

export function FoodNavigation() {
  const { rootPath } = useRootPathname()
  const pathName = usePathname()
  const { translation: tl } = useTranslationFolder('food')

  return (
    <div className='flex flex-col text-success'>
      <Link
        href={`${rootPath}/food/north`}
        locale={false}
        className={activeLink(`${rootPath}/food/north`, pathName)}
      >
        ▪ {tl.north}
      </Link>

      <Link
        href={`${rootPath}/food/central`}
        locale={false}
        className={activeLink(`${rootPath}/food/central`, pathName)}
      >
        ▪ {tl.central}
      </Link>

      <Link
        href={`${rootPath}/food/south`}
        locale={false}
        className={activeLink(`${rootPath}/food/south`, pathName)}
      >
        ▪ {tl.south}
      </Link>
    </div>
  )
}
