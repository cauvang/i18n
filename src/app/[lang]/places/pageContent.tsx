'use client'

import { useRootPathname } from '@/hook/usePath'
import { useTranslationFolder } from '@/hook/useStaticContent'
import Link from 'next/link'
import { northPlaceData } from './north/pageContent'
import { southPlaceData } from './south/pageContent'
import { centralPlaceData } from './central/pageContent'
import { HomeNavigation } from '@/components'
import Image from 'next/image'

const RegionDetail = ({ region, data }: { region: string; data: any[] }) => {
  const { rootPath } = useRootPathname()
  const { translation: tl } = useTranslationFolder('places')

  return (
    <>
      <Link href={`${rootPath}/places/${region}`} locale={false}>
        ▪ {tl[region]}
      </Link>

      {data.map(([name]) => (
        <p key={name} className='ml-4 text-secondary'>
          🌸 {tl[name]}
        </p>
      ))}
    </>
  )
}

export default function PlacesContent() {
  const { translation: tl } = useTranslationFolder('places')

  return (
    <div className='p-7'>
      <p className='text-7xl text-primary text-center p-4'>{tl.title}</p>
      <div className='flex mt-8 items-center justify-center'>
        <Image src='/images/location.avif' alt='' width={550} height={550} />
        <div className='flex flex-col text-success ml-16'>
          <RegionDetail region='north' data={northPlaceData} />
          <RegionDetail region='central' data={centralPlaceData} />
          <RegionDetail region='south' data={southPlaceData} />
        </div>
      </div>

      <div className='mt-24 flex place-content-end '>
        <HomeNavigation />
      </div>
    </div>
  )
}
