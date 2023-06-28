'use client'

import DynamicContent from '@/components/dynamicContent'
import StaticContent from '@/components/staticContent'
import { useState } from 'react'

export default function HomePage() {
  const [contentType, setContentType] = useState('static')
  const activeButton = (isActive: boolean) =>
    isActive
      ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700'
      : ' hover:bg-offWhite text-grey font-bold py-2 px-4  '

  return (
    <main className='p-7'>
      <span className='bg-white shadow-btn-white p-0.5 inline-flex cursor-pointer rounded-full'>
        <button
          className={`rounded-full py-2 px-8 gap-2.5 ${activeButton(
            contentType === 'static'
          )}`}
          onClick={() => setContentType('static')}
        >
          Static Content
        </button>
        <button
          className={`rounded-full py-2 px-8 gap-2.5 ${activeButton(
            contentType === 'dynamic'
          )}`}
          onClick={() => setContentType('dynamic')}
        >
          Dynamic Content
        </button>
      </span>

      {contentType === 'dynamic' && <DynamicContent />}

      {contentType === 'static' && <StaticContent />}
    </main>
  )
}
