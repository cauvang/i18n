import { useEffect } from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
}

export const Overlay = ({ children, className = '' }: Props) => {
  useEffect(() => {
    document.querySelector('html')?.setAttribute('class', 'has-overlay')
    return () => {
      document.querySelector('html')?.setAttribute('class', '')
    }
  }, [])

  return (
    <div
      className={`fixed z-100 top-0 left-0 right-0 bottom-0 h-full w-full bg-stone-100/[.70]  ${className}`}
    >
      {children}
    </div>
  )
}
