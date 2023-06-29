'use client'

import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../../../public/lotties/error-404.json'

export function Page404Content() {
  return (
    <Lottie
      loop
      autoplay
      animationData={animationData}
      className='absolute inset-0 '
    />
  )
}
