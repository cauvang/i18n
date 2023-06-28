import { useDynamicContent } from '@/hook/useDynamicContent'
import Link from 'next/link'
import Image from 'next/image'
import { useRootPathname } from '@/hook/usePath'

export default function DynamicContent() {
  const { data: tl, isLoading } = useDynamicContent()
  const { rootPath } = useRootPathname()

  return (
    <div className='w-full'>
      Below content is load from backend
      {isLoading && <p>Loading...</p>}
      {tl && (
        <>
          <p className='text-7xl text-primary text-center p-4'>
            {tl.home.title}
          </p>
          <div className='flex flex-row mt-8'>
            <Image
              src='/images/vietnam-map.jpg'
              alt=''
              width={800}
              height={800}
            />
            <ul>
              <li>{tl.home.location}</li>
              <li>{tl.home.area}</li>
              <li>{tl.home.population}</li>
              <li>
                {tl.home.weather} <br />
                <span className='pl-4'>
                  🔹 {tl.home.weatherNorth}
                  <br />
                  <span className='pl-10'>
                    &nbsp; ⭐ {tl.home.weatherNorth1} 🌥
                  </span>
                  <br />
                  <span className='pl-10'>
                    &nbsp; ⭐ {tl.home.weatherNorth2} 🌞
                  </span>
                </span>
                <br />
                <span className='pl-4'>
                  🔹 {tl.home.weatherSouth}
                  <br />
                  <span className='pl-10'>
                    &nbsp; ⭐ {tl.home.weatherSouth1} 🌞
                  </span>
                  <br />
                  <span className='pl-10'>
                    &nbsp; ⭐ {tl.home.weatherSouth2} 🌧
                  </span>
                </span>
              </li>
              <li>
                &nbsp;
                <Link
                  className='underline text-success'
                  href={`${rootPath}/food`}
                  locale={false}
                >
                  {tl.home.listing1}
                </Link>
              </li>
              <li>
                &nbsp;
                <Link
                  className='underline text-success'
                  href={`${rootPath}/places`}
                  locale={false}
                >
                  {tl.home.listing2}
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}
