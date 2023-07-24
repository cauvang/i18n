'use client'

import { useTranslationFolder } from '@/hook/useStaticContent'
import { PlaceNavigation, HomeNavigation } from '@/components'
import { PlaceDetail } from '../north/pageContent'

const nSouthPlace = 4
export const southPlaceData: any[] = []
for (let i = 1; i <= nSouthPlace; i++) {
  southPlaceData.push([`southPlace${i}`, `southPlace${i}Explain`])
}
export default function SouthPlacesContent() {
  const { translation: tl } = useTranslationFolder('places')

  return (
    <div className='p-7'>
      <p className='text-7xl text-primary text-center p-4'>{tl.south}</p>
      <div className='mt-8 gap-12 grid grid-cols-2 text-secondary'>
        {southPlaceData.map(([name, detail]) => (
          <PlaceDetail
            key={name}
            imageSrc={name}
            name={tl[name]}
            detail={tl[detail]}
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
