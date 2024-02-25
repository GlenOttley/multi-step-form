import { ChangeEvent, MouseEventHandler, useContext } from 'react'
import { AppContext } from '../Context'
import Stepper from './Stepper'
import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'

const SelectPlan = (): JSX.Element => {
  const { formData, setFormData } = useContext(AppContext)
  const { plan } = formData

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
          <legend className='mb-4 text-heading-md text-denim'>
            Select your plan
          </legend>
          <span
            id='formDescription'
            className='mb-[22px] block text-lg text-grey'
          >
            You have the options of monthly or yearly billing.
          </span>

          <div className='flex flex-col gap-4'>
            <label
              htmlFor='arcade'
              className={`rounded-md flex cursor-pointer items-center gap-[14px] border p-4 ${plan == 'arcade' ? 'border-purple' : 'border-light-grey'}`}
            >
              <input
                type='radio'
                name='plan'
                id='arcade'
                // className='sr-only'
                onChange={() =>
                  setFormData((prev) => ({ ...prev, plan: 'arcade' }))
                }
              />
              <img src={iconArcade} alt='' />
              <div className='flex flex-col justify-center'>
                <span className='text-lg font-medium text-denim'>Arcade</span>
                <span className='text-md font-normal text-grey'>$9/mo</span>
              </div>
            </label>

            <label
              htmlFor='advanced'
              className={`rounded-md flex cursor-pointer items-center gap-[14px] border p-4 ${plan == 'advanced' ? 'border-purple' : 'border-light-grey'}`}
            >
              <input
                type='radio'
                name='plan'
                id='advanced'
                // className='sr-only'
                onChange={() =>
                  setFormData((prev) => ({ ...prev, plan: 'advanced' }))
                }
              />
              <img src={iconAdvanced} alt='' />
              <div className='flex flex-col justify-center'>
                <span className='text-lg font-medium text-denim'>Advanced</span>
                <span className='text-md font-normal text-grey'>$12/mo</span>
              </div>
            </label>

            <label
              htmlFor='pro'
              className={`rounded-md flex cursor-pointer items-center gap-[14px] border p-4 ${plan == 'pro' ? 'border-purple' : 'border-light-grey'}`}
            >
              <input
                type='radio'
                name='plan'
                id='pro'
                // className='sr-only'
                onChange={() =>
                  setFormData((prev) => ({ ...prev, plan: 'pro' }))
                }
              />
              <img src={iconPro} alt='' />
              <div className='flex flex-col justify-center'>
                <span className='text-lg font-medium text-denim'>Pro</span>
                <span className='text-md font-normal text-grey'>$15/mo</span>
              </div>
            </label>
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

export default SelectPlan
