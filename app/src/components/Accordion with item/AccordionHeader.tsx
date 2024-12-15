// components/AccordionHeader.tsx
import { ReactNode } from 'react'

export interface AccordionHeaderProps {
  isOpen?: boolean
  onClick?: () => void
  children?: ReactNode
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  isOpen,
  onClick,
  children
}) => {
  console.log(isOpen ? 'true' : 'false')
  return (
    <div
      className='flex cursor-pointer items-center justify-between p-4'
      onClick={onClick}
    >
      <span>{children}</span>
      <span>{isOpen ? '-' : '+'}</span>
    </div>
  )
}

export default AccordionHeader
