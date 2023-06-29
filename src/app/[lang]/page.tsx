import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import HomePage from './home/pageContent'
import { Metadata } from 'next'

export interface Props {
  params: { lang: string }
}

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict: any = await getDictionaryFile(params.lang)

  if (dict === null) return { title: 'Error', description: 'Error' }
  else
    return {
      title: dict.home.title,
      description: dict.home.title,
    }
}

export default function Home() {
  return <HomePage />
}
