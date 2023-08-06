import { useRootPathname } from '@/hook/usePath'
import { useTranslationFolder } from '@/hook/useStaticContent'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { activeLink } from './foodNavigation'

export function PlaceNavigation() {
  const { rootPath } = useRootPathname()
  const pathName = usePathname()
  const { translation: tl } = useTranslationFolder('places')

  return (
    <div className='flex flex-col text-success'>
      <Link
        href={`${rootPath}/places/north`}
        locale={false}
        className={activeLink(`${rootPath}/places/north`, pathName)}
      >
        ▪ {tl.north}
      </Link>

      <Link
        href={`${rootPath}/places/central`}
        locale={false}
        className={activeLink(`${rootPath}/places/central`, pathName)}
      >
        ▪ {tl.central}
      </Link>

      <Link
        href={`${rootPath}/places/south`}
        locale={false}
        className={activeLink(`${rootPath}/places/south`, pathName)}
      >
        ▪ {tl.south}
      </Link>
    </div>
  )
}
