'use client'

import DynamicContent from '@/components/dynamicContent'
import StaticContent from '@/components/staticContent'
import { useState } from 'react'

export default function HomePage() {
  const [contentType, setContentType] = useState('static')
  const activeButton = (isActive: boolean) =>
    isActive
      ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
      : 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded'

  return (
    <main className='p-7'>
      <button
        className={activeButton(contentType === 'static')}
        onClick={() => setContentType('static')}
      >
        Static Content
      </button>
      <button
        className={activeButton(contentType === 'dynamic')}
        onClick={() => setContentType('dynamic')}
      >
        Dynamic Content
      </button>

      {contentType === 'dynamic' && <DynamicContent />}

      {contentType === 'static' && <StaticContent />}
    </main>
  )
}
