'use client'

import { useTranslationFolder } from '@/hook/useStaticContent'
import { SampleContent } from './sampleContent'

export function StaticContent() {
  const { translation: tl } = useTranslationFolder('home')

  return (
    <div className='w-full'>
      <p>Below content is static.</p>

      <SampleContent tl={tl} />
    </div>
  )
}
