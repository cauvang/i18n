import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import { i18n } from '@/i18n-config'
import { useRouter } from 'next/navigation'

const activeButton = (isActive: boolean) =>
  isActive
    ? 'bg-blue-500 hover:bg-blue-700 text-white border border-blue-700'
    : ' hover:bg-offWhite text-grey'

export function DropDownList() {
  const router = useRouter()

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='py-2 px-4 gap-2.5 font-bold inline-flex w-full justify-center rounded-md bg-white  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
          Languages
          <Image alt='' src='/images/down.png' width={32} height={32} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {i18n.locales.map((locale) => (
              <Menu.Item key={locale}>
                {({ active }) => (
                  <button
                    className={`${activeButton(
                      active
                    )}  px-4 py-2 text-sm w-full`}
                    onClick={() => {
                      router.push(`${locale}/`)
                    }}
                  >
                    {locale}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
