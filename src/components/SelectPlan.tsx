import { useContext } from 'react'
import { AppContext } from '../Context'
import Stepper from './Stepper'

const SelectPlan = (): JSX.Element => {
  const { formData } = useContext(AppContext)

  function handleNextStep(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form
      noValidate
      onSubmit={handleNextStep}
      aria-describedby='formDescription'
    >
      <div className='bg-bg px-4'>
        <section className='relative -top-[74px] rounded-lg bg-white px-6 py-8 drop-shadow-md'>
          <div>
            <fieldset>
              <legend className='mb-4 text-heading-md text-denim'>
                Select your plan
              </legend>
              <span
                id='formDescription'
                className='mb-[22px] block text-lg text-grey'
              >
                You have the option of monthly or yearly billing.
              </span>
            </fieldset>
          </div>
        </section>
      </div>

      <Stepper />
    </form>
  )
}

export default SelectPlan
