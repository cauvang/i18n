'use client'
import React from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface IForm {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
  className?: string
}

export const FormOverlay = ({
  children,
  isOpen,
  onClose,
  className = '',
}: IForm) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500'
                enterFrom='translate-y-full'
                enterTo='translate-y-0'
                leave='transform transition ease-in-out duration-500'
                leaveFrom='translate-y-0'
                leaveTo='translate-y-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen '>
                  <div
                    className={`flex h-full flex-col bg-offWhite shadow-xl ${className}`}
                  >
                    <div className='w-full h-6 pr-[30px]  pt-4 '>
                      <div className='relative h-6 w-6 float-right'>
                        <Image
                          src='/images/closeIcon.svg'
                          alt=''
                          fill
                          onClick={onClose}
                          className='cursor-pointer'
                        />
                      </div>
                    </div>
                    <div className='relative flex-1 mt-6 '>{children}</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
