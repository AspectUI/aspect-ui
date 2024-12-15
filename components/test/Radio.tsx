'use client'
import { Radio } from '@/app/src/components/Radio'
import React, { useState } from 'react'

const RadioDemo = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }
  return (
    <div>
      <form>
        <Radio
          id='option1'
          name='radioGroup'
          value='option1'
          label='Option 1'
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <Radio
          id='option2'
          name='radioGroup'
          value='option2'
          label='Option 2'
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
      </form>
    </div>
  )
}

export default RadioDemo
