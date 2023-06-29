import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import FoodContent from './pageContent'
import { Props } from '../page'
import { Metadata } from 'next'

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict: any = await getDictionaryFile(params.lang)

  if (dict === null) return { title: 'Error', description: 'Error' }
  else
    return {
      title: dict.food.title,
      description: dict.food.title,
    }
}

export default function Food() {
  return <FoodContent />
}
