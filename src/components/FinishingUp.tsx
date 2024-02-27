import { useContext } from 'react'
import { AppContext } from '../Context'
import Stepper from './Stepper'

const FinishingUp = (): JSX.Element => {
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
        className='h-full md:flex md:flex-col md:justify-between'
      >
        <fieldset>
          <legend className='mb-4 text-heading-md font-bold text-denim'>
            Finishing Up
          </legend>
          <span
            id='formDescription'
            className='mb-[22px] block text-lg text-grey'
          >
            Double-check everything looks OK before confirming.
          </span>
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

export default FinishingUp
