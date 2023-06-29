import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import PlacesContent from '../[lang]/places/pageContent'
import { Props } from '../[lang]/page'
import { Metadata } from 'next'

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict: any = await getDictionaryFile(params.lang)

  return {
    title: dict.places.title,
    description: dict.places.title,
  }
}

export default function Places() {
  return <PlacesContent />
}
