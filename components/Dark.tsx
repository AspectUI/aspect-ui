'use client'
import React from 'react'
import { UseThemeSwitcher } from './UseThemeSwitcher'

const Dark = () => {
  const [mode, setMode] = UseThemeSwitcher()
  return (
    <div className='fixed top-4 left-4'>
      <button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className={`cursor-pointer flex items-center justify-center size-10 border border-primary-900 dark:border-primary-200 rounded-full p-1 bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-200 hover:text-primary-900 dark:hover:text-primary-100`}
      >
        {mode === 'dark' ? 'D' : 'L'}
      </button>
    </div>
  )
}

export default Dark
