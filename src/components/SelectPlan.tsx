import { useContext } from 'react'
import { AppContext } from '../Context'
import Stepper from './Stepper'
import BillingToggle from './BillingToggle'
import PlanButton from './PlanButton'
import availablePlans from '../data/availablePlans'

const SelectPlan = (): JSX.Element => {
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
        <div>
          <fieldset className='mb-6'>
            <legend>
              <h1 className='mb-4 text-heading-md font-bold text-denim md:text-heading-lg'>
                Select your plan
              </h1>
            </legend>
            <span
              id='formDescription'
              className='mb-[22px] block text-lg text-grey'
            >
              You have the options of monthly or yearly billing.
            </span>
            <div className='flex flex-col gap-4 md:flex-row '>
              {availablePlans.map((plan) => (
                <PlanButton plan={plan} key={plan.name} />
              ))}
            </div>
          </fieldset>
          <BillingToggle />
        </div>
        <div className='hidden md:block'>
          <Stepper submitFunction={handleNextStep} />
        </div>
      </form>
      <div className='fixed inset-x-0 bottom-0 md:hidden'>
        <Stepper submitFunction={handleNextStep} />
      </div>
    </>
  )
}

export default SelectPlan
