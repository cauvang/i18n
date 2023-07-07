'use client'

import DropDownList from '@/components/dropdown'
import DynamicContent from '@/components/dynamicContent'
import StaticContent from '@/components/staticContent'
import { useRootPathname } from '@/hook/usePath'
import { notFound } from 'next/navigation'
import { useState } from 'react'

export default function HomePage() {
  const [contentType, setContentType] = useState('static')
  const activeButton = (isActive: boolean) =>
    isActive
      ? 'bg-blue-500 hover:bg-blue-700 text-white border border-blue-700'
      : ' hover:bg-offWhite text-grey'

  const { pathName, isHavingLocale } = useRootPathname()
  if (process.env.NODE_ENV === 'development') {
    if (!isHavingLocale && pathName != '/') return notFound()
  }

  return (
    <main className='p-7'>
      <div className='flex justify-between'>
        <span className='bg-white shadow-btn-white p-0.5 inline-flex cursor-pointer rounded-full'>
          <button
            className={`rounded-full py-2 px-4 gap-2.5 font-bold ${activeButton(
              contentType === 'static'
            )}`}
            onClick={() => setContentType('static')}
          >
            Static Content
          </button>
          <button
            className={`rounded-full py-2 px-4 gap-2.5 ${activeButton(
              contentType === 'dynamic'
            )}`}
            onClick={() => setContentType('dynamic')}
          >
            Dynamic Content
          </button>
        </span>

        <DropDownList />
      </div>

      {contentType === 'dynamic' && <DynamicContent />}

      {contentType === 'static' && <StaticContent />}
    </main>
  )
}
