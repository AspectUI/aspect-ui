'use client'
import { Checkbox } from '@/app/src/components/Checkbox'
import React, { useState } from 'react'

const CheckboxDemo = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div>
      <Checkbox
        label='I agree to the terms and conditions'
        checked={isChecked}
        onChange={setIsChecked}
        // variant='circle'
      />
    </div>
  )
}

export default CheckboxDemo
