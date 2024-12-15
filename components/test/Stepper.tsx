'use client'
import {
  Stepper,
  StepperItem,
  useStepper
} from '@/app/src/components/Stepper/Stepper'
import React from 'react'

const StepperDemo = () => {
  const StepContent: React.FC = () => {
    const { activeStep, setActiveStep, totalSteps } = useStepper()

    return (
      <div>
        <p>Current step: {activeStep + 1}</p>
        <button
          onClick={() =>
            setActiveStep(Math.min(activeStep + 1, totalSteps - 1))
          }
        >
          Next Step
        </button>
      </div>
    )
  }
  return (
    <div>
      <Stepper initialStep={0}>
        <StepperItem icon={1} label='Step 1'>
          <StepContent />
        </StepperItem>
        <StepperItem icon={2} label='Step 2'>
          <StepContent />
        </StepperItem>
        <StepperItem icon={3} label='Step 3'>
          <StepContent />
        </StepperItem>
      </Stepper>
    </div>
  )
}

export default StepperDemo
