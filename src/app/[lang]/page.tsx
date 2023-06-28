import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import HomePage from './home/pageContent'
import { Metadata } from 'next'
import { Locale } from '@/i18n-config'

export interface Props {
  params: { lang: string }
}

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang
  const dict: any = await getDictionaryFile(lang as Locale)
  return {
    title: dict.home.title,
    description: dict.home.title,
  }
}

export default function Home({ params }: Props) {
  return <HomePage />
}
