import { useContext } from 'react'
import { AppContext } from '../Context'
import Stepper from './Stepper'
import AddOnButton from './AddOnButton'
import availableAddOns from '../data/availableAddOns'

const AddOns = (): JSX.Element => {
  const { setCurrentStep } = useContext(AppContext)

  function handleNextStep() {
    setCurrentStep((currentStep) => currentStep + 1)
  }
  return (
    <>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault()
          handleNextStep()
        }}
        aria-describedby='formDescription'
        className='h-full md:flex md:flex-col md:justify-between'
      >
        <fieldset>
          <legend className='mb-4 text-heading-md font-bold text-denim md:text-heading-lg'>
            Pick add-ons
          </legend>
          <span
            id='formDescription'
            className='mb-[22px] block text-lg text-grey'
          >
            Add-ons help enhance your gaming experience.
          </span>

          <div className='flex flex-col gap-4'>
            {availableAddOns.map((addOn) => (
              <AddOnButton addOn={addOn} key={addOn.name} />
            ))}
          </div>
        </fieldset>
        <div className='hidden md:block'>
          <Stepper submitFunction={handleNextStep} />
        </div>
      </form>
      <div className='fixed inset-x-0 bottom-0  md:hidden'>
        <Stepper submitFunction={handleNextStep} />
      </div>
    </>
  )
}

export default AddOns
