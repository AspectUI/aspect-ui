import { TabList, TabItem, Tabs, TabContent } from '@/app/src/components/Tabs'
import React from 'react'

const TabsDemo = () => {
  return (
    <div>
      <Tabs defaultActive='item-5' className='mx-auto max-w-xl'>
        <TabList>
          <TabItem value='item-5'>Figma</TabItem>
          <TabItem disabled={true} value='item-6'>Docs</TabItem>
          <TabItem value='item-7'>Blog</TabItem>
          <TabItem value='item-8'>Github</TabItem>
        </TabList>
        <TabContent value='item-5'>Figma content goes here...</TabContent>
        <TabContent value='item-6'>Docs content goes here...</TabContent>
        <TabContent value='item-7'>Blog content goes here...</TabContent>
        <TabContent value='item-8'>Github content goes here...</TabContent>
      </Tabs>
      <Tabs defaultActive='item-8' className='mx-auto max-w-xl'>
        <TabList>
          <TabItem value='item-5'>Figma</TabItem>
          <TabItem value='item-6'>Docs</TabItem>
          <TabItem value='item-7'>Blog</TabItem>
          <TabItem value='item-8'>Github</TabItem>
        </TabList>
        <TabContent value='item-5'>Figma content goes here...</TabContent>
        <TabContent value='item-6'>Docs content goes here...</TabContent>
        <TabContent value='item-7'>Blog content goes here...</TabContent>
        <TabContent value='item-8'>Github content goes here...</TabContent>
      </Tabs>
    </div>
  )
}

export default TabsDemo
