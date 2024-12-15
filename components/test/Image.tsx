import { Image } from '@/app/src/components/Image'
import React from 'react'

const ImageDemo = () => {
  return (
    <div className='size-40 p-8'>
      <Image
        src='https://images.pexels.com/photos/365668/pexels-photo-365668.jpeg'
        alt='Sample image'
        caption='ffdf'
        width='auto'
        height='auto'
        lightbox={true}
        lightboxProps={{
          src: 'https://images.pexels.com/photos/365669/pexels-photo-365669.jpeg',
          alt: 'Sample image'
        }}
        objectFit='contain'
      />
    </div>
  )
}

export default ImageDemo
