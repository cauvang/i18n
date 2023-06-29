import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import FoodContent from '../[lang]/food/pageContent'
import { Props } from '../[lang]/page'
import { Metadata } from 'next'

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict: any = await getDictionaryFile(params.lang)

  return {
    title: dict.food.title,
    description: dict.food.title,
  }
}

export default function Food() {
  return <FoodContent />
}
