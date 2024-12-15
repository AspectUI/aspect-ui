import { Modal, ModalAction, ModalContent } from '@/app/src/components/Modal'
import React from 'react'

const ModalDemo = () => {
  return (
    <div>
      <Modal>
        <ModalAction>Open Modal</ModalAction>
        <ModalContent>
          <div className='border p-4 rounded-md bg-primary-100 text-primary-800'>
            <h2 className='mb-2 text-2xl font-bold'>Modal Title</h2>
            <p className='mb-4'>This is the modal content.</p>
            <ModalAction>Close</ModalAction>
          </div>
        </ModalContent>
      </Modal>
      <Modal>
        <ModalAction>Open Modal2</ModalAction>
        <ModalContent>
          <h2 className='mb-2 text-2xl font-bold'>Modal Title2</h2>
          <p className='mb-4'>This is the modal content 2.</p>
          <ModalAction>Close2</ModalAction>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ModalDemo
