'use client'
import { Pagination } from '@/app/src/components/Pagination'
import React, { useState } from 'react'

const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    console.log(`Current Page: ${page}`)
  }

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Pagination Example</h1>
      <Pagination
        count={10}
        defaultPage={6}
        boundaryCount={2}
        siblingCount={1}
        showFirstLast={true}
        showNextPrev={true}
        numberType='roman'
        onChange={handlePageChange}
      />
      <Pagination
        count={10}
        defaultPage={6}
        boundaryCount={2}
        siblingCount={0}
        showFirstLast={true}
        showNextPrev={true}
        numberType='custom'
        numbers={['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০']}
        onChange={handlePageChange}
      />

      {/* <Pagination
        count={20}
        defaultPage={6}
        boundaryCount={2}
        siblingCount={2}
        showFirstLast={true}
        showNextPrev={true}
        onChange={handlePageChange}
      /> */}
      <p>Current Page: {currentPage}</p>
    </div>
  )
}

export default PaginationDemo
