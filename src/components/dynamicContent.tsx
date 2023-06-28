import { useDynamicContent } from '@/hook/useDynamicContent'
import SampleContent from './sampleContent'

export default function DynamicContent() {
  const { data: tl, isLoading } = useDynamicContent()

  return (
    <div className='w-full'>
      Below content is load from backend
      {isLoading && <p>Loading...</p>}
      {tl && <SampleContent tl={tl.home} />}
    </div>
  )
}
