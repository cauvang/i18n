import PlacesContent from './pageContent'
import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import { Props } from '../page'
import { Metadata } from 'next'

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict: any = await getDictionaryFile(params.lang)
  if (dict === null) return { title: 'Error', description: 'Error' }
  else
    return {
      title: dict.places.title,
      description: dict.places.title,
    }
}

export default function Places() {
  return <PlacesContent />
}
