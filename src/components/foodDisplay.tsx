import Image from 'next/image'
import { useTranslationFolder } from '@/hook/useStaticContent'
import { FoodDetail } from '@/app/[lang]/food/pageContent'
import { FormOverlay } from './formOverlay'

interface DisplayFoodProps {
  isOpen: boolean
  onClose: () => void
  data: any[]
  link?: string
  index: number
}

export function DisplayFood({
  link,
  data,
  isOpen,
  onClose,
  index,
}: DisplayFoodProps) {
  const { translation: tl } = useTranslationFolder('food')

  return (
    <FormOverlay isOpen={isOpen} onClose={onClose}>
      <div className='  gap-12 h-full pt-6 pb-20 px-14 absolute  overflow-y-auto'>
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
    </FormOverlay>
  )
}
