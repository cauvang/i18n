'use client'

import { useRootPathname } from '@/hook/usePath'
import { useTranslationFolder } from '@/hook/useStaticContent'
import Link from 'next/link'
import Image from 'next/image'

export default function StaticContent() {
  const { translation: tl } = useTranslationFolder('home')
  const { rootPath } = useRootPathname()

  return (
    <div className='w-full'>
      <p>Below content is static.</p>
      <p className='text-7xl text-primary text-center p-4'>{tl.title}</p>
      <div className='flex flex-row mt-8'>
        <Image src='/images/vietnam-map.jpg' alt='' width={800} height={800} />
        <ul>
          <li>{tl.location}</li>
          <li>{tl.area}</li>
          <li>{tl.population}</li>
          <li>
            {tl.weather} <br />
            <span className='pl-4'>
              🔹 {tl.weatherNorth}
              <br />
              <span className='pl-10'>&nbsp; ⭐ {tl.weatherNorth1} 🌥</span>
              <br />
              <span className='pl-10'>&nbsp; ⭐ {tl.weatherNorth2} 🌞</span>
            </span>
            <br />
            <span className='pl-4'>
              🔹 {tl.weatherSouth}
              <br />
              <span className='pl-10'>&nbsp; ⭐ {tl.weatherSouth1} 🌞</span>
              <br />
              <span className='pl-10'>&nbsp; ⭐ {tl.weatherSouth2} 🌧</span>
            </span>
          </li>
          <li>
            &nbsp;
            <Link
              className='underline text-success'
              href={`${rootPath}/food`}
              locale={false}
            >
              {tl.listing1}
            </Link>
          </li>
          <li>
            &nbsp;
            <Link
              className='underline text-success'
              href={`${rootPath}/places`}
              locale={false}
            >
              {tl.listing2}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
