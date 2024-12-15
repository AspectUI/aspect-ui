import { Alert } from '@/app/src/components/Alert'
import React from 'react'

const AlertDemo = () => {
  return (
    <div>
      <Alert className='bg-error-500 p-8 text-red-500' type='success'>
        Operation completed successfully!
      </Alert>
      <Alert type='warning'>Please be cautious with this action.</Alert>
      <Alert type='error'>
        An error occurred. Please try again. An error occurf Please try again.
      </Alert>
      <Alert type='info' closeable={false}>
        Here's some useful information.
      </Alert>
    </div>
  )
}

export default AlertDemo
