'use client'

import { useTranslationFolder } from '@/hook/useStaticContent'
import { PlaceNavigation, HomeNavigation } from '@/components'
import { PlaceDetail } from '../north/pageContent'

const nSouthPlace = 4
export const southPlaceData: any[] = []
for (let i = 1; i <= nSouthPlace; i++) {
  southPlaceData.push([`southPlace${i}`, `southPlace${i}Explain`])
}

function getFoodData(index: number) {
  const iStart = index === 0 ? 1 : index === 1 ? 7 : index === 2 ? 12 : -1
  const iEnd = index === 0 ? 6 : index === 1 ? 11 : index === 2 ? 15 : -2
  const data: any[] = []
  for (let i = iStart; i <= iEnd; i++) {
    data.push([`southFood${i}`, `southFood${i}Explain`])
  }
  return data
}

export default function SouthPlacesContent() {
  const { translation: tl } = useTranslationFolder('places')

  return (
    <div className='p-7'>
      <p className='text-7xl text-primary text-center p-4'>{tl.south}</p>
      <div className='mt-8 gap-12 grid grid-cols-2 text-secondary'>
        {southPlaceData.map(([name, detail], index) => (
          <PlaceDetail
            key={name}
            imageSrc={name}
            name={tl[name]}
            detail={tl[detail]}
            index={index}
            link={name === 'southPlace1' ? tl.HCMLink : ''}
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
