import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@/app/src/components/Breadcrumb'
const BreadcrumbDemo = () => {
  return (
    <div>
      <Breadcrumb >
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Category</BreadcrumbItem>
        <BreadcrumbItem>Product</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbDemo
