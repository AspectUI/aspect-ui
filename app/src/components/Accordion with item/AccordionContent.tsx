// components/AccordionContent.tsx
import { ReactNode } from 'react'

export interface AccordionContentProps {
  isOpen?: boolean
  children?: ReactNode
}

const AccordionContent: React.FC<AccordionContentProps> = ({
  isOpen,
  children
}) => {
  return (
    <div
      className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 p-4' : 'invisible max-h-0 p-0'}`}
    >
      {children}
    </div>
  )
}

export default AccordionContent
