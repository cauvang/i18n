'use client'

import { useTranslationFolder } from '@/hook/useStaticContent'

export default function PlacesContent() {
  const { translation: tl } = useTranslationFolder('places')

  return <h1>{tl?.title}</h1>
}
