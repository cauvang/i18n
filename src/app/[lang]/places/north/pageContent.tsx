'use client'

import { useTranslationFolder } from '@/hook/useStaticContent'
import { PlaceNavigation, HomeNavigation, DisplayFood } from '@/components'
import Image from 'next/image'
import { IDetailProps } from '../../food/pageContent'
import { useState } from 'react'

export const PlaceDetail = ({ link, imageSrc, name, detail }: IDetailProps) => {
  const [showFood, setShowFood] = useState(false)

  const iStart = imageSrc === 'northPlace1' ? 1 : 8
  const iEnd = imageSrc === 'northPlace1' ? 7 : 10
  const data: any[] = []
  for (let i = iStart; i <= iEnd; i++) {
    data.push([`northFood${i}`, `northFood${i}Explain`])
  }

  return (
    <>
      <span>
        <p
          className='text-4xl text-secondaryUK cursor-pointer'
          onClick={() => setShowFood(true)}
        >
          ▪ {name}
        </p>
        <div className='relative w-full h-96 my-4'>
          <Image src={`/images/places/${imageSrc}.jpeg`} alt='' fill priority />
        </div>
        {detail}
      </span>

      <DisplayFood
        link={link}
        data={data}
        isOpen={showFood}
        onClose={() => setShowFood(false)}
      />
    </>
  )
}

const nNorthPlace = 6
export const northPlaceData: any[] = []
for (let i = 1; i <= nNorthPlace; i++) {
  northPlaceData.push([`northPlace${i}`, `northPlace${i}Explain`])
}
export default function NorthernPlacesContent() {
  const { translation: tl } = useTranslationFolder('places')

  return (
    <div className='p-7'>
      <p className='text-7xl text-primary text-center p-4'>{tl.north}</p>
      <div className='mt-8 gap-12 grid grid-cols-2 text-secondary'>
        {northPlaceData.map(([name, detail]) => (
          <PlaceDetail
            key={name}
            imageSrc={name}
            name={tl[name]}
            detail={tl[detail]}
            link={name === 'northPlace1' ? tl.HaNoiLink : ''}
          />
        ))}
      </div>

      <div className='mt-24 flex items-center justify-between'>
        <PlaceNavigation />
        <HomeNavigation />
      </div>
    </div>
  )
}
