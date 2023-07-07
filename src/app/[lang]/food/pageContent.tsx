'use client'

import { useRootPathname } from '@/hook/usePath'
import { useTranslationFolder } from '@/hook/useStaticContent'
import Image from 'next/image'
import Link from 'next/link'

export interface IDetailProps {
  imageSrc: string
  name: string
  detail: string
}
export const FoodDetail = ({ imageSrc, name, detail }: IDetailProps) => (
  <span>
    <p className='text-4xl text-secondaryUK  h-24'> ▪ {name}</p>
    <div className='relative w-ful h-96 my-4'>
      <Image src={`/images/food/${imageSrc}.jpeg`} alt='' fill />
    </div>
    {detail}
  </span>
)
const BeverageDetail = ({ imageSrc, name, detail }: IDetailProps) => (
  <span className='text-secondary'>
    <p className='text-4xl text-secondaryUK  h-24'> ▪ {name}</p>
    <Image
      className='my-4'
      src={`/images/food/${imageSrc}.jpeg`}
      alt=''
      width={400}
      height={400}
    />
    {detail}
  </span>
)

export default function FoodContent() {
  const { translation: tl } = useTranslationFolder('food')
  const { rootPath } = useRootPathname()
  const nFoodBeverage = 4
  const foodData: any[] = []
  for (let i = 1; i <= nFoodBeverage; i++) {
    foodData.push([`food${i}`, `food${i}Explain`])
  }
  const beverageData: any[] = []
  for (let i = 1; i <= nFoodBeverage; i++) {
    beverageData.push([`beverage${i}`, `beverage${i}Explain`])
  }
  return (
    <div className='p-7'>
      <p className='text-7xl text-primary text-center p-4'>{tl.title}</p>
      <div className='mt-8 gap-12 grid grid-cols-4 text-secondary'>
        {foodData.map(([name, detail]) => (
          <FoodDetail
            key={name}
            imageSrc={name}
            name={tl[name]}
            detail={tl[detail]}
          />
        ))}

        {beverageData.map(([name, detail]) => (
          <BeverageDetail
            key={name}
            imageSrc={name}
            name={tl[name]}
            detail={tl[detail]}
          />
        ))}
      </div>

      <div className='flex flex-col text-success mt-24'>
        <Link href={`${rootPath}/food/north`} locale={false}>
          ▪ {tl.north}
        </Link>

        <Link href={`${rootPath}/food/south`} locale={false}>
          ▪ {tl.south}
        </Link>

        <Link href={`${rootPath}/food/central`} locale={false}>
          ▪ {tl.central}
        </Link>
      </div>
    </div>
  )
}