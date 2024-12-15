import { Typography } from '@/app/src/components/Typography'
import React from 'react'

const TypographyDemo = () => {
  return (
    <div>
      <Typography variant='display1' className='bg-primary-100 text-primary-800 hover:bg-primary-200 hover:text-primary-900 dark:bg-primary-900 dark:text-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-100'>This is a heading 1</Typography>
      <Typography variant='display2' className='text-warning-500'>This is a heading 1</Typography>
      <Typography variant='h2'>This is a heading 2</Typography>
      <Typography variant='body1'>This is body text</Typography>
      <Typography variant='caption' className='text-gray-500'>
        This is a caption
      </Typography>
    </div>
  )
}

export default TypographyDemo
