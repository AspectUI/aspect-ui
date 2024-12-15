import { Textarea } from '@/app/src/components/Textarea'
import React from 'react'

const TextareaDemo = () => {
  return (
    <div>
      <form>
        <Textarea
          label='Comments'
          placeholder='Enter your comments here'
          rows={4}
        />
        <Textarea
          label='Feedback'
          placeholder='Provide your feedback'
          error='This field is required'
        />
      </form>
    </div>
  )
}

export default TextareaDemo
