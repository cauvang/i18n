import { useDynamicContent } from '@/hook/useDynamicContent'
import { SampleContent } from './sampleContent'

export function DynamicContent() {
  const { data: tl, isLoading } = useDynamicContent()

  return (
    <div className='w-full'>
      Below content is load from backend
      {isLoading && <p>Loading...</p>}
      {tl && <SampleContent tl={tl.home} />}
    </div>
  )
}
