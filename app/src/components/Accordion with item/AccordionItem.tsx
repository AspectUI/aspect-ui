import React, { ReactNode } from 'react'
import AccordionHeader from './AccordionHeader'
import AccordionContent from './AccordionContent'
import { AccordionHeaderProps } from './AccordionHeader'
import { AccordionContentProps } from './AccordionContent'

export interface AccordionItemProps {
  isOpen?: boolean
  onToggle?: () => void
  children?: ReactNode
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  isOpen,
  onToggle,
  children
}) => {
  return (
    <div className='rounded-md border border-gray-200'>
      {children &&
        React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            if (child.type === AccordionHeader) {
              // Ensure type safety by casting child to the correct type
              return React.cloneElement(
                child as React.ReactElement<AccordionHeaderProps>,
                { isOpen, onClick: onToggle }
              )
            }
            if (child.type === AccordionContent) {
              return React.cloneElement(
                child as React.ReactElement<AccordionContentProps>,
                { isOpen }
              )
            }
          }
          return child
        })}
    </div>
  )
}

AccordionItem.displayName = 'AccordionItem'
export default AccordionItem
