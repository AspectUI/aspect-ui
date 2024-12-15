import { Divider } from '@/app/src/components/Divider'
import React from 'react'

const DividerDemo = () => {
  return (
    <div className='space-y-4 p-4'>
      <Divider size='sm' />
      <Divider size='md' />
      <Divider size='lg' />
      <Divider size='xl' borderStyle='dotted' />
      <Divider size='2xl' borderStyle='dashed' />

      <Divider variant='start'>Left Align</Divider>
      <Divider variant='center'>Center Align</Divider>
      <Divider variant='end'>Right Align</Divider>

      <div className='flex h-40'>
        <Divider orientation='vertical' size='2xl' className='border-red-600' borderStyle='dotted' />
      </div>
    </div>
  )
}

export default DividerDemo
