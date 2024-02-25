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
      className={` flex items-center bg-white p-4 md:static md:w-auto md:p-0 ${currentStep > 1 ? 'justify-between' : 'justify-end'}`}
    >
      {currentStep > 1 && (
        <button
          type='button'
          className='rounded-sm bg-transparent py-3 text-md font-normal text-grey md:py-0'
          onClick={handlePreviousStep}
        >
          Go Back
        </button>
      )}
      <button
        type='submit'
        onClick={submitFunction}
        className='rounded-sm bg-denim px-4 py-3 text-md font-normal text-white '
      >
        Next Step
      </button>
    </div>
  )
}

export default Stepper
