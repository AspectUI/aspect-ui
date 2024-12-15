import { ProgressBar } from '@/app/src/components/ProgressBar'
import React from 'react'

const ProgressBarDemo = () => {
  return (
    <div>
      <ProgressBar value={60} duration={3} />
      <ProgressBar
        value={85}
        animateOnVisible
        duration={3}
        className=''
        containerClassName=''
        fillClassName=''
        contentClassName=''
      />
    </div>
  )
}

export default ProgressBarDemo
