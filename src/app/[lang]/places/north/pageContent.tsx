'use client'

import { useTranslationFolder } from '@/hook/useStaticContent'
import { IDetailProps } from '../../food/pageContent'
import Image from 'next/image'

export const PlaceDetail = ({ imageSrc, name, detail }: IDetailProps) => (
  <span>
    <p className='text-4xl text-secondaryUK'> ▪ {name}</p>
    <div className='relative w-full h-96 my-4'>
      <Image src={`/images/places/${imageSrc}.jpeg`} alt='' fill priority />
    </div>
    {detail}
  </span>
)

export default function NorthernPlacesContent() {
  const { translation: tl } = useTranslationFolder('places')
  const nPlace = 6
  const data: any[] = []
  for (let i = 1; i <= nPlace; i++) {
    data.push([`northPlace${i}`, `northPlace${i}Explain`])
  }

  return (
    <div className='p-7'>
      <p className='text-7xl text-primary text-center p-4'>{tl.north}</p>
      <div className='mt-8 gap-12 grid grid-cols-2 text-secondary'>
        {data.map(([name, detail]) => (
          <PlaceDetail
            key={name}
            imageSrc={name}
            name={tl[name]}
            detail={tl[detail]}
          />
        ))}
      </div>
    </div>
  )
}
