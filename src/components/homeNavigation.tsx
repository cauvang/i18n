import Link from 'next/link'
import Image from 'next/image'
import { useTranslationFolder } from '@/hook/useStaticContent'
import { useRootPathname } from '@/hook/usePath'

export function HomeNavigation() {
  const { rootPath } = useRootPathname()

  const { translation: tl } = useTranslationFolder('home')
  return (
    <Link href={`${rootPath}/`} className='flex items-center'>
      <Image width='36' height='36' alt='home' src='/images/home.jpeg' />
      {tl.home}
    </Link>
  )
}
