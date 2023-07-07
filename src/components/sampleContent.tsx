'use client'

import { useRootPathname } from '@/hook/usePath'
import Image from 'next/image'
import Link from 'next/link'

export default function SampleContent({ tl }: { tl: any }) {
  const { rootPath } = useRootPathname()
  return (
    <>
      <p className='text-7xl text-primary text-center p-4'>{tl.title}</p>
      <div className='flex flex-row mt-8'>
        <Image
          src='images/vietnam-map.jpg'
          alt=''
          width={800}
          height={800}
          priority
        />
        <ul>
          <li>{tl.location}</li>
          <li>{tl.area}</li>
          <li className='text-pink text-bold text-40'>{tl.population}</li>
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
    </>
  )
}
