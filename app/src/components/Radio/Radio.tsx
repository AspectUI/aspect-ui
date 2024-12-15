// ./app/src/components/Radio/Radio.tsx
'use client'

import React from 'react'

interface RadioProps {
  id: string
  name: string
  value: string
  label: string
  checked?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  label,
  checked,
  onChange
}) => {
  return (
    <div className='flex items-center'>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className='form-radio h-5 w-5 text-blue-600'
      />
      <label htmlFor={id} className='ml-2 text-gray-700'>
        {label}
      </label>
    </div>
  )
}
