'use client'

import { useRootPathname } from '@/hook/usePath'
import { useTranslationFolder } from '@/hook/useStaticContent'
import Image from 'next/image'
import Link from 'next/link'

export default function PlacesContent() {
  const { translation: tl } = useTranslationFolder('places')
  const { rootPath } = useRootPathname()

  return (
    <div className='p-7'>
      <p className='text-7xl text-primary text-center p-4'>{tl.title}</p>
      <div className='grid grid-cols-2'>
        <Image src='images/location.avif' alt='' width={500} height={500} />
        <div className='flex flex-col text-success mt-24'>
          <Link href={`${rootPath}/places/north`} locale={false}>
            ▪ {tl.north}
          </Link>
          <p className='ml-4 text-secondary'>🌸 {tl.northPlace1}</p>
          <p className='ml-4 text-secondary'>🌸 {tl.northPlace2}</p>
          <p className='ml-4 text-secondary'>🌸 {tl.northPlace3}</p>
          <Link href={`${rootPath}/places/central`} locale={false}>
            ▪ {tl.central}
          </Link>
          <Link href={`${rootPath}/places/south`} locale={false}>
            ▪ {tl.south}
          </Link>
        </div>
      </div>
    </div>
  )
}
