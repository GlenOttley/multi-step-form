import { useContext } from 'react'
import { AppContext } from '../Context'
import Stepper from './Stepper'

const FinishingUp = (): JSX.Element => {
  const {
    formData: { addOns, billing, plan },
    setCurrentStep,
  } = useContext(AppContext)

  function calculateTotal(): number {
    return billing === 'monthly'
      ? plan.monthlyCost +
          (addOns?.reduce((sum, addOn) => sum + addOn.monthlyCost, 0) ?? 0)
      : plan.yearlyCost +
          (addOns?.reduce((sum, addOn) => sum + addOn.yearlyCost, 0) ?? 0)
  }

  function handleNextStep() {
    setCurrentStep((prev) => prev + 1)
  }

  return (
    <>
      <div
        aria-describedby='formDescription'
        className='h-full md:flex md:flex-col md:justify-between'
      >
        <div>
          <h1 className='mb-4 text-heading-md font-bold text-denim md:text-heading-lg'>
            Finishing Up
          </h1>
          <span
            id='formDescription'
            className='mb-[22px] block text-lg text-grey'
          >
            Double-check everything looks OK before confirming.
          </span>
          <div className='mb-6 flex flex-col p-4'>
            <div className='flex items-center justify-between border-b-[1px] border-grey border-opacity-20 pb-3'>
              <div className='flex flex-col items-start gap-1'>
                <span className='text-md font-medium capitalize text-denim md:text-lg'>
                  {plan.title} ({billing})
                </span>
                <button
                  className='text-md font-normal text-grey underline hover:text-purple active:text-purple'
                  onClick={() => setCurrentStep(2)}
                  aria-label='Change plan'
                >
                  Change
                </button>
              </div>
              <span className='text-md font-bold text-denim md:text-lg'>
                {billing === 'monthly'
                  ? `$${plan.monthlyCost}/mo`
                  : `$${plan.yearlyCost}/yr`}{' '}
              </span>
            </div>
            <div className='flex flex-col gap-3 pt-4'>
              {addOns.map((addOn) => (
                <div className='flex justify-between'>
                  <span className='text-md font-normal text-grey'>
                    {addOn.title}
                  </span>
                  <span className='text-md font-normal text-denim'>
                    {billing === 'monthly'
                      ? `+$${addOn.monthlyCost}/mo`
                      : `+$${addOn.yearlyCost}/yr`}{' '}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className='flex items-center justify-between px-4'>
            <span className='text-md font-normal text-grey'>
              Total (per {billing === 'monthly' ? 'month' : 'year'})
            </span>
            <span className='text-lg font-bold text-purple md:text-[20px]'>
              ${calculateTotal()}/{billing === 'monthly' ? 'mo' : 'yr'}
            </span>
          </div>
        </div>
        <div className='hidden md:block'>
          <Stepper submitFunction={handleNextStep} />
        </div>
      </div>
      <div className='fixed inset-x-0 bottom-0 md:hidden'>
        <Stepper submitFunction={handleNextStep} />
      </div>
    </>
  )
}

export default FinishingUp
