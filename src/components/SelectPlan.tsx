import { useContext } from 'react'
import { AppContext } from '../Context'
import Stepper from './Stepper'

const SelectPlan = (): JSX.Element => {
  const { formData } = useContext(AppContext)

  function handleNextStep() {
    console.log(formData)
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
        className='md:rounded-none mx-auto my-[99px] rounded-lg bg-white px-6 py-8 drop-shadow-md md:mt-0 md:bg-transparent md:px-0 md:pl-4 md:pt-10 md:drop-shadow-none '
      >
        <fieldset>
          <legend className='mb-4 text-heading-md text-denim'>
            Personal info
          </legend>
          <span
            id='formDescription'
            className='mb-[22px] block text-lg text-grey'
          >
            Please provide your name, email address, and phone number.
          </span>
        </fieldset>
        <div className='hidden md:block'>
          <Stepper submitFunction={handleNextStep} />
        </div>
      </form>
      <div className='md:hidden'>
        <Stepper submitFunction={handleNextStep} />
      </div>
    </>
  )
}

export default SelectPlan
