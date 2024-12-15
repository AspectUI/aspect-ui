'use client'
import { SplideSlide } from '@splidejs/react-splide'

interface SliderItemProps {
  children: React.ReactNode
  className?: string
}

export const SliderItem: React.FC<SliderItemProps> = ({
  children,
  className
}) => {
  return (
    <SplideSlide className={`mx-auto ${className}`}>{children}</SplideSlide>
  )
}
