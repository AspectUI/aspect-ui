import {
  Tooltip,
  TooltipAction,
  TooltipContent
} from '@/app/src/components/Tooltip/Tooltip'
import React from 'react'

const TooltipDemo = () => {
  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>Tooltip Example</h1>
      <div className='space-x-4'>
        <Tooltip direction='right' showOnClick>
          <TooltipAction>Right</TooltipAction>
          <TooltipContent>
            <p className='text-body1 font-medium'>
              Tooltips - Title here
            </p>
          </TooltipContent>
        </Tooltip>
        <Tooltip direction='top'>
          <TooltipAction>Top</TooltipAction>
          <TooltipContent>
            <p className='text-body-5 font-medium text-black'>
              Tooltips - Title here
            </p>
          </TooltipContent>
        </Tooltip>
        <Tooltip direction='bottom'>
          <TooltipAction>Bottom</TooltipAction>
          <TooltipContent>
            <p className='text-body-5 font-medium text-black'>
              Tooltips - Title here
            </p>
          </TooltipContent>
        </Tooltip>
        <Tooltip direction='left'>
          <TooltipAction>Left</TooltipAction>
          <TooltipContent>
            <p className='text-body-5 font-medium text-black'>
              Tooltips - Title here
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export default TooltipDemo
