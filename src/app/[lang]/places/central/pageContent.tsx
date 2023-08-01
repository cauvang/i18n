'use client'

import { useTranslationFolder } from '@/hook/useStaticContent'
import { PlaceNavigation, HomeNavigation } from '@/components'
import { PlaceDetail } from '../north/pageContent'

const nCentralPlace = 6
export const centralPlaceData: any[] = []
for (let i = 1; i <= nCentralPlace; i++) {
  centralPlaceData.push([`centralPlace${i}`, `centralPlace${i}Explain`])
}

function getFoodData(index: number) {
  const iStart = index === 0 ? 1 : index === 1 ? 8 : index === 2 ? 12 : 14
  const iEnd = index === 0 ? 7 : index === 1 ? 11 : index === 2 ? 13 : 14
  const data: any[] = []
  for (let i = iStart; i <= iEnd; i++) {
    data.push([`centralFood${i}`, `centralFood${i}Explain`])
  }
  return data
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
            data={getFoodData(index)}
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
