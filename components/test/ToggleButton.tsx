'use client'

import { Toggle } from '@/app/src/components/ToggleButton'
import { ToggleButton } from '@/app/src/components/ToggleButton'
import { ToggleButtonGroup } from '@/app/src/components/ToggleButton'
import React from 'react'

const ToggleButtonDemo = () => {
  const handleSingleChange = (value: string | string[]) => {
    console.log('Single selection:', value)
  }
  const handleChange = (value: string, selected: boolean) => {
    console.log(
      `Button ${value} is now ${selected ? 'selected' : 'unselected'}`
    )
  }
  const handleMultipleChange = (value: string | string[]) => {
    console.log('Multiple selection:', value)
  }
  return (
    <div>
      <h1 className='mb-4 text-3xl font-bold'>Toggle Button Examples</h1>

      <h2 className='mb-2 mt-6 text-xl font-semibold'>
        Single Selection Group
      </h2>
      <ToggleButtonGroup type='single' outline={true} onChange={handleSingleChange}>
        <ToggleButton value='option1'>Option 1</ToggleButton>
        <ToggleButton value='option2'>Option 2</ToggleButton>
        <ToggleButton value='option3'>Option 3</ToggleButton>
      </ToggleButtonGroup>

      <h2 className='mb-2 mt-6 text-xl font-semibold'>
        Multiple Selection Group
      </h2>
      <ToggleButtonGroup type='multiple' disabled outline={true} onChange={handleMultipleChange}>
        <ToggleButton value='option1'>Option 1</ToggleButton>
        <ToggleButton value='option2'>Option 2</ToggleButton>
        <ToggleButton value='option3'>Option 3</ToggleButton>
      </ToggleButtonGroup>
      <Toggle value='option1' outline={true} onChange={handleChange}>
        Option 1
      </Toggle>
      <Toggle value='option2' onChange={handleChange}>
        Option 2
      </Toggle>
      <Toggle value='option3' onChange={handleChange}>
        Option 3
      </Toggle>
    </div>
  )
}

export default ToggleButtonDemo
