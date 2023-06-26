'use client'
import { useEffect, useState } from 'react'
import { useLocale } from './useLocale'
import { getDictionaryFolder } from '@/dictionaryFolder/dictionaryFolder'
import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'

export function useTranslationFolder(ns: string) {
  const [translation, setTranslation] = useState<any>({})
  const locale = useLocale()
  useEffect(() => {
    const getLocale = async () => {
      const data = await getDictionaryFolder(locale)
      setTranslation(await data()[ns])
    }
    getLocale()
  }, [locale, ns])
  return { translation }
}

export function useTranslationFile(ns: string) {
  const [translation, setTranslation] = useState<any>()
  const locale = useLocale()
  useEffect(() => {
    const getLocale = async () => {
      const data: any = await getDictionaryFile(locale)
      setTranslation(data[ns])
    }
    getLocale()
  }, [locale, ns])
  return { translation }
}
