import { CircularProgressBar } from '@/app/src/components/CircularProgressBar'
import React from 'react'

const CircularProgressDemo = () => {
  return (
    <div>
      <CircularProgressBar
        value={85}
        duration={3}
        strokeColor='red'
        strokeFillColor='blue'
        className='text-red-600 size-24'
        hideValue={true}
        
      >
      </CircularProgressBar>
      <CircularProgressBar value={85} onVisible={true} duration={3} />
    </div>
  )
}

export default CircularProgressDemo
