// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import { Locale } from '@/i18n-config'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { lang: string } }
) {
  const lang = params.lang

  const dict: any = await getDictionaryFile(lang as Locale)
  return NextResponse.json(dict)
}
