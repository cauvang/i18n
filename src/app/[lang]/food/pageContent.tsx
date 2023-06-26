'use client'

import { useTranslationFolder } from '@/hook/useStaticContent'

export default function FoodContent() {
  const { translation: tl } = useTranslationFolder('food')

  return <h1>{tl.title}</h1>
}
