import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  AvatarImage
} from '@/app/src/components/Avatar'
import React from 'react'

const AvatarDemo = () => {
  return (
    <div>
      <div className='mb-10 flex gap-4'>
        <Avatar className='border'>
          <AvatarImage
            src='https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?cs=srgb&dl=pexels-manei-3211476.jpg&fm=jpg&w=640&h=640'
            altText='Avatar 1'
          />
          <AvatarBadge status='success' iconEnabled />
        </Avatar>
        <Avatar className='border'>
          <AvatarImage
            src='https://images.pexels.com/photos/3211477/pexels-photo-3211477.jpeg?cs=srgb&dl=pexels-manei-3211477.jpg&fm=jpg&w=640&h=640'
            altText='Avatar 2'
          />
          <AvatarBadge type='counter' counter={5} />
        </Avatar>
        <Avatar className='border'>
          <AvatarImage
            src='https://images.pexels.com/photos/3211479/pexels-photo-3211479.jpeg?cs=srgb&dl=pexels-manei-3211479.jpg&fm=jpg&w=640&h=640'
            altText='Avatar 3'
          />
          <AvatarBadge type='counter' counter={5} />
        </Avatar>
        <Avatar className='border'>
          <AvatarImage name='Nafis Mahmud Ayon' />
          <AvatarBadge type='counter' counter={5} />
        </Avatar>
        <Avatar className='border' />
      </div>
      <AvatarGroup>
        <Avatar className='border'>
          <AvatarImage
            src='https://images.pexels.com/photos/3211479/pexels-photo-3211479.jpeg?cs=srgb&dl=pexels-manei-3211479.jpg&fm=jpg&w=640&h=640'
            altText='Avatar 3'
          />
        </Avatar>
        <Avatar className='border'>
          <AvatarImage name='Nafis Mahmud Ayon' />
        </Avatar>
        <Avatar className='border' />
      </AvatarGroup>
    </div>
  )
}

export default AvatarDemo
