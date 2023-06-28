import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import HomePage from './home/pageContent'

import { Metadata, ResolvingMetadata } from 'next'
import { Locale } from '@/i18n-config'

// type Props = {
//   params: { lang: string }
// }

// // set dynamic metadata
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const dict: any = await getDictionaryFile(params.lang as Locale)

//   return {
//     title: dict.home.title,
//     description: dict.home.title,
//   }
// }

// export default function Home({ params }: Props) {
//   return <HomePage />
// }

export default function Home() {
  return <HomePage />
}
