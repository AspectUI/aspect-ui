'use client'
import { DatePicker } from '@/app/src/components/DatePicker/DatePicker'
import React from 'react'

const DatePickerDemo = () => {
  const handleDateChange = (dates: Date[]) => {
    console.log('Selected date:', dates)
  }
  return (
    <div className='flex justify-around'>
      {/* <h1 className='mb-4 text-2xl font-bold'>Date Picker Example</h1> */}
      <div className=''>
        <DatePicker onChange={handleDateChange} />
      </div>
      <div className=''>
        <DatePicker onChange={handleDateChange} isRange={true} />
      </div>
    </div>
  )
}

export default DatePickerDemo
