import { useQuery } from 'react-query'
import { useLocale } from './useLocale'

export function useDynamicContent() {
  const locale = useLocale()
  return useQuery([locale], async () => {
    const res = await fetch('/api/content', {
      headers: {
        'x-locale': locale,
      },
    })
    if (!res.ok) {
      throw new Error('Network response was not ok')
    }
    return res.json()
  })
}
