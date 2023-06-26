'use client'

import { useRootPathname } from '@/hook/usePath'
import { useTranslationFolder } from '@/hook/useStaticContent'
import Link from 'next/link'

export default function HomePage() {
  const { translation: tl } = useTranslationFolder('home')
  const { rootPath } = useRootPathname()

  return (
    <main className='flex min-h-screen  p-24'>
      <h1>{tl.title}</h1>

      <nav className=''>
        <ul className='text-xl flex flex-col content-center md:flex-row'>
          <li className='md:mr-10 text-center mb-12 md:mb-0'>
            <Link href={`${rootPath}/food`} locale={false}>
              {tl.listing1}
            </Link>
          </li>
          <li className='text-center'>
            <Link href={`${rootPath}/places`} locale={false}>
              {tl.listing2}
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
