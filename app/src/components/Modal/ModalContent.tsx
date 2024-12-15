'use client'

import { forwardRef, HTMLAttributes, Ref } from 'react'
import { useModal } from './ModalContext'
import { cn } from '../../utils/cn'
import { AnimatePresence, MotionProps, motion } from 'framer-motion'
import { ModalPortal } from './ModalPortal'

// interface ModalContentProps {
//   children: ReactNode
//   className?: string
// }

type ModalContentProps = HTMLAttributes<HTMLDivElement> & MotionProps

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(({ children, className = '', ...rest }, ref: Ref<HTMLDivElement>) => {
  const { isOpen } = useModal()

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <ModalPortal>
        <motion.div className={cn('aspect-ui-modal', className)} {...rest} ref={ref}
          initial={{ scale: 0.5, opacity: 0, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, type: 'spring', damping: 25, stiffness: 500 }}
          exit={{ opacity: 0.5, scale: 0.5, y: 40 }}>
          {children}
        </motion.div>
      </ModalPortal>
    </AnimatePresence>
  )
})
