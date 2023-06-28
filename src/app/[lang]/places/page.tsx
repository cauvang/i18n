import PlacesContent from './pageContent'
import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import { Props } from '../page'
import { Metadata } from 'next'
import { Locale } from '@/i18n-config'

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang
  const dict: any = await getDictionaryFile(lang as Locale)
  return {
    title: dict.places.title,
    description: dict.places.title,
  }
}

export default function Places() {
  return <PlacesContent />
}
