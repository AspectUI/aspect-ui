// ./app/src/components/Sidebar/SidebarContainer.tsx
'use client'

import React, { ReactNode } from 'react'

interface SidebarContainerProps {
  children: ReactNode
}

export const SidebarContainer: React.FC<SidebarContainerProps> = ({
  children
}) => {
  return <div className='flex-grow overflow-y-auto my-2 space-y-1'>{children}</div>
}
