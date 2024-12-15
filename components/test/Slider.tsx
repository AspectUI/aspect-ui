'use client'
import { Slider } from '@/app/src/components/Slider'
import React, { useState } from 'react'

const SliderDemo = () => {
  const [sliderValue, useSliderValue] = useState([55]) 
  const [sliderValues, useSliderValues] = useState([33, 75]) 
  const handleSingleSliderChange = (values: number[]) => {
    console.log('Single slider value:', values[0])
    useSliderValue(values)
  }

  const handleRangeSliderChange = (values: number[]) => {
    console.log('Range slider values:', values)
    useSliderValues(values)
  }
  return (
    <div>
      <div>
        <h2 className='mb-2 text-lg font-semibold'>Single Value Slider</h2>
        <Slider
          min={0}
          max={100}
          defaultValue={[55]}
          step={1.5}
          onChange={handleSingleSliderChange}
        />
      </div>
<p>{sliderValue}</p>
<p>{sliderValues}</p>

      <div>
        <h2 className='mb-2 text-lg font-semibold'>Range Slider</h2>
        <Slider
          min={0}
          max={100}
          defaultValue={[33, 75]}
          onChange={handleRangeSliderChange}
        />
      </div>
    </div>
  )
}

export default SliderDemo
