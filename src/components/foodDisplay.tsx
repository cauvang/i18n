import Image from 'next/image'
import { Overlay } from './overlay'
import { useTranslationFolder } from '@/hook/useStaticContent'
import { FoodDetail } from '@/app/[lang]/food/pageContent'

interface DisplayFoodProps {
  isOpen: boolean
  onClose: () => void
  data: any[]
  link?: string
}

export function DisplayFood({ link, data, isOpen, onClose }: DisplayFoodProps) {
  const { translation: tl } = useTranslationFolder('food')

  if (!isOpen) return <></>

  return (
    <Overlay>
      <div className='bg-white gap-12 w-1/2 h-full pt-6 pb-20 px-14 absolute right-0 rounded-tl-4xl overflow-y-auto'>
        <div className='relative  w-6 h-6 mb-6 float-right'>
          <Image
            src='/images/closeIcon.svg'
            alt='close'
            fill
            onClick={onClose}
            className='absolute top-0 right-0  cursor-pointer'
          />
        </div>

        <a href={link} target='_blank' rel='noopener noreferrer'>
          {link}
        </a>

        <div className='mt-8 gap-12 grid grid-cols-2'>
          {data.map(([name, detail]) => (
            <FoodDetail
              key={name}
              imageSrc={name}
              name={tl[name]}
              detail={tl[detail]}
              className='!text-3xl '
            />
          ))}
        </div>
      </div>
    </Overlay>
  )
}
