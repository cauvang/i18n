'use client'

import { useTranslationFolder } from '@/hook/useStaticContent'
import { FoodDetail } from '../pageContent'
import { FoodNavigation, HomeNavigation } from '@/components'

export default function NorthernFoodContent() {
  const { translation: tl } = useTranslationFolder('food')
  const nFood = 13
  const data: any[] = []
  for (let i = 1; i <= nFood; i++) {
    data.push([`northFood${i}`, `northFood${i}Explain`])
  }

  return (
    <div className='p-7'>
      <p className='text-7xl text-primary text-center p-4'>{tl.northFood}</p>
      <div className='mt-8 gap-12 grid grid-cols-2 text-secondary'>
        {data.map(([name, detail]) => (
          <FoodDetail
            key={name}
            imageSrc={name}
            name={tl[name]}
            detail={tl[detail]}
          />
        ))}
      </div>

      <div className='mt-24 flex items-center justify-between'>
        <FoodNavigation />

        <HomeNavigation />
      </div>
    </div>
  )
}
