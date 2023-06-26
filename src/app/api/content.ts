// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDictionaryFile } from '@/dictionaryFile/dictionaryFile'
import { Locale } from '@/i18n-config'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const locale = req.headers['x-locale'] as Locale
  const dict: any = await getDictionaryFile(locale)
  res.status(200).json(dict)
}
