import { Masonry } from '@/app/src/components/Masonry'
import React from 'react'

const MasonryDemo: React.FC = () => {
  const items = [
    { id: 1, height: 100, color: 'bg-red-500' },
    { id: 7, height: 210, color: 'bg-indigo-500' },
    { id: 2, height: 150, color: 'bg-blue-500' },
    { id: 3, height: 200, color: 'bg-green-500' },
    { id: 5, height: 180, color: 'bg-purple-500' },
    { id: 6, height: 130, color: 'bg-pink-500' },
    { id: 8, height: 160, color: 'bg-gray-500' },
    { id: 4, height: 120, color: 'bg-yellow-500' }
  ]

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-2xl font-bold'>Masonry Layout Example</h1>
      <Masonry columnCount={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={2}>
        {items.map(item => (
          <div
            key={item.id}
            className={`w-full ${item.color} flex items-center justify-center rounded-md border border-dashed`}
            style={{ height: `${item.height}px` }}
          >
            Item {item.id}
          </div>
        ))}
      </Masonry>
      <Masonry columnCount={{ sm: 1, md: 2, lg: 3, xl: 3 }} gap={2} className='resize-x overflow-hidden'>
        <img src='https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <img src='https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <img src='https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <img src='https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <img src='https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <img src='https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <img src='https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <img src='https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <img src='https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <img src='https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <img src='https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <img src='https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </Masonry>
    </div>
  )
}

export default MasonryDemo
