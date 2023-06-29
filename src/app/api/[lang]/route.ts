// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Props } from '@/app/[lang]/page'
import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: Props) {
  const dict: any = await getDictionaryFile(params.lang)
  return NextResponse.json(dict)
}
