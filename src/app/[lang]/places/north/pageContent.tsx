'use client'

import { useTranslationFolder } from '@/hook/useStaticContent'
import { PlaceNavigation, HomeNavigation, DisplayFood } from '@/components'
import Image from 'next/image'
import { useState } from 'react'

export interface IPlaceDetailProps {
  imageSrc: string
  name: string
  detail: string
  link?: string
  index: number
  data: any[]
}

export const PlaceDetail = ({
  link,
  imageSrc,
  name,
  detail,
  data,
}: IPlaceDetailProps) => {
  const [showFood, setShowFood] = useState(false)

  return (
    <>
      <span>
        <p
          className={`text-4xl text-secondaryUK  ${
            data.length !== 0 ? 'cursor-pointer' : ''
          } `}
          onClick={() => setShowFood(data.length !== 0)}
        >
          ▪ {name}
        </p>
        <div className='relative w-full h-96 my-4'>
          <Image
            src={`/images/places/${imageSrc}.jpeg`}
            alt=''
            fill
            className='object-cover'
          />
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

function getFoodData(index: number) {
  const iStart = index === 0 ? 1 : index === 1 ? 8 : index === 2 ? 12 : -1
  const iEnd = index === 0 ? 7 : index === 1 ? 11 : index === 2 ? 13 : -2
  const data: any[] = []
  for (let i = iStart; i <= iEnd; i++) {
    data.push([`northFood${i}`, `northFood${i}Explain`])
  }
  return data
}

export default function NorthernPlacesContent() {
  const { translation: tl } = useTranslationFolder('places')

  return (
    <div className='p-7'>
      <p className='text-7xl text-primary text-center p-4'>{tl.north}</p>
      <div className='mt-8 gap-12 grid grid-cols-2 text-secondary'>
        {northPlaceData.map(([name, detail], index) => {
          return (
            <PlaceDetail
              key={name}
              imageSrc={name}
              name={tl[name]}
              detail={tl[detail]}
              index={index}
              link={name === 'northPlace1' ? tl.HaNoiLink : ''}
              data={getFoodData(index)}
            />
          )
        })}
      </div>

      <div className='mt-24 flex items-center justify-between'>
        <PlaceNavigation />
        <HomeNavigation />
      </div>
    </div>
  )
}
