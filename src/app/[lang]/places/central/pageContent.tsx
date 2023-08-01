'use client'

import { useTranslationFolder } from '@/hook/useStaticContent'
import { PlaceNavigation, HomeNavigation } from '@/components'
import { PlaceDetail } from '../north/pageContent'

const nCentralPlace = 6
export const centralPlaceData: any[] = []
for (let i = 1; i <= nCentralPlace; i++) {
  centralPlaceData.push([`centralPlace${i}`, `centralPlace${i}Explain`])
}
export default function CentralPlacesContent() {
  const { translation: tl } = useTranslationFolder('places')

  return (
    <div className='p-7'>
      <p className='text-7xl text-primary text-center p-4'>{tl.central}</p>
      <div className='mt-8 gap-12 grid grid-cols-2 text-secondary'>
        {centralPlaceData.map(([name, detail], index) => (
          <PlaceDetail
            key={name}
            imageSrc={name}
            name={tl[name]}
            detail={tl[detail]}
            index={index}
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
