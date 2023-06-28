import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import FoodContent from './pageContent'
import { Props } from '../page'
import { Metadata } from 'next'
import { Locale } from '@/i18n-config'

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang
  const dict: any = await getDictionaryFile(lang as Locale)
  return {
    title: dict.food.title,
    description: dict.food.title,
  }
}

export default function Food() {
  return <FoodContent />
}
