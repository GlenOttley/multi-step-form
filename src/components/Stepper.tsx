import { useContext } from 'react'
import { AppContext } from '../Context'

const Stepper = (): JSX.Element => {
  const { currentStep, setCurrentStep } = useContext(AppContext)

  function handlePreviousStep() {
    setCurrentStep((currentStep) => currentStep - 1)
  }

  return (
    <div className='relative bottom-0 flex justify-between bg-white p-4'>
      {currentStep > 1 && (
        <button
          type='button'
          className='rounded-sm bg-transparent px-4 py-3 text-md font-normal text-denim'
          onClick={handlePreviousStep}
        >
          Go Back
        </button>
      )}
      <button
        type='submit'
        className='rounded-sm bg-denim px-4 py-3 text-md font-normal text-white'
      >
        Next Step
      </button>
    </div>
  )
}

export default Stepper
