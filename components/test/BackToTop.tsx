import { BackToTop } from '@/app/src/components/BackToTop'
import React from 'react'

const BackToTopDemo = () => {
  return (
    <div>
      <div id='hello' className='h-[100vh] w-full bg-red-300'></div>
      <div id='hello1' className='h-[100vh] w-full bg-red-600'></div>
      <a href='#hello'>hello</a>
      <BackToTop />
      {/* <BackToTop threshold={500} smooth={false}>
        <span className='text-sm'>Top</span>
      </BackToTop> */}
    </div>
  )
}

export default BackToTopDemo
