import { useContext } from 'react'
import { AppContext } from '../Context'

interface ComponentProps {
  submitFunction: () => void
}

const Stepper = ({ submitFunction }: ComponentProps): JSX.Element => {
  const { currentStep, setCurrentStep } = useContext(AppContext)

  function handlePreviousStep() {
    setCurrentStep((currentStep) => currentStep - 1)
  }

  return (
    <div
      className={`flex items-center bg-white p-4 md:static md:w-auto md:p-0 ${currentStep > 1 ? 'justify-between' : 'justify-end'}`}
    >
      {currentStep > 1 && (
        <button
          type='button'
          className='rounded-sm bg-transparent py-3 text-md font-normal text-grey hover:text-denim focus:text-denim md:py-0 md:text-lg'
          onClick={handlePreviousStep}
          aria-label='Go back to previous step'
        >
          Go Back
        </button>
      )}
      {currentStep < 4 ? (
        <button
          type='submit'
          onClick={submitFunction}
          className='hover:bg-blue rounded-sm bg-denim px-4 py-3 text-md font-normal text-white md:rounded-md md:px-6 md:py-4 md:text-lg'
          aria-label='Go to next step'
        >
          Next Step
        </button>
      ) : (
        <button
          type='submit'
          onClick={submitFunction}
          className='rounded-sm bg-purple px-4 py-3 text-md font-normal text-white hover:bg-lavender md:rounded-md md:px-8 md:py-4 md:text-lg'
        >
          Confirm
        </button>
      )}
    </div>
  )
}

export default Stepper
