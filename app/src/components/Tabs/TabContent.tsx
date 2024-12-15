'use client'

import React, { ReactNode } from 'react'
import { useTabs } from './TabsContext'
import { cn } from '../../utils/cn'

interface TabContentProps {
  children: ReactNode
  value: string
  className?: string
}

export const TabContent: React.FC<TabContentProps> = ({ children, value, className = "", ...rest }) => {
  const { activeTab } = useTabs()

  if (activeTab !== value) return null

  return <div className={cn('text-primary-800 dark:text-primary-200 ', className)} {...rest}>{children}</div>
}
