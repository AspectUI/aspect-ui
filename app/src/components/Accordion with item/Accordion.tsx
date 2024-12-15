// Accordion.tsx
'use client'

import {
  useState,
  ReactNode,
  useEffect,
  Children,
  isValidElement,
  cloneElement
} from 'react'
import AccordionItem, { AccordionItemProps } from './AccordionItem'
import AccordionHeader from './AccordionHeader'
import AccordionContent from './AccordionContent'

interface AccordionProps {
  items?: { title: ReactNode; content: ReactNode }[] // Optional items array
  active?: number // The initially open item (1-indexed)
  multiple?: boolean // Whether to allow multiple items to be open
  children?: ReactNode // Allow direct child AccordionItem components
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
  active = 0,
  children
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  useEffect(() => {
    if (active > 0 && items && active <= items.length) {
      setOpenIndexes([active - 1])
    }
  }, [active, items?.length])

  const handleToggle = (index: number) => {
    if (multiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter(i => i !== index))
      } else {
        setOpenIndexes([...openIndexes, index])
      }
    } else {
      setOpenIndexes(openIndexes[0] === index ? [] : [index])
    }
  }

  const renderAccordionItem = (
    itemTitle: ReactNode,
    itemContent: ReactNode,
    index: number
  ) => (
    <AccordionItem
      key={index}
      isOpen={openIndexes.includes(index)}
      onToggle={() => handleToggle(index)}
    >
      <AccordionHeader>{itemTitle}</AccordionHeader>
      <AccordionContent>{itemContent}</AccordionContent>
    </AccordionItem>
  )

  // If items are provided, render from items prop
  if (items) {
    return (
      <div className='space-y-4'>
        {items.map((item, index) =>
          renderAccordionItem(item.title, item.content, index)
        )}
      </div>
    )
  }

  // Render children if no items are provided
  const processedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child) && child.type === AccordionItem) {
      console.log(child)
      return cloneElement(child as React.ReactElement<AccordionItemProps>, {
        isOpen: openIndexes.includes(index),
        onToggle: () => handleToggle(index)
      })
    }
    return null
  })

  return <div className='space-y-4'>{processedChildren}</div>
}

export default Accordion
