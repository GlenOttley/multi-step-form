import { useContext } from 'react'
import { AppContext } from '../Context'

const BillingToggle = (): JSX.Element => {
  const {
    formData: { billing },
    setFormData,
  } = useContext(AppContext)

  function toggleBilling() {
    billing === 'monthly'
      ? setFormData((prev) => ({ ...prev, billing: 'yearly' }))
      : setFormData((prev) => ({ ...prev, billing: 'monthly' }))
  }

  return (
    <div className='flex w-full items-center justify-center gap-6 py-[14px]'>
      <span aria-live='polite' id='billingStatus' className='sr-only'>
        {billing} billing selected
      </span>
      <span
        className={`text-md font-medium ${billing === 'monthly' ? 'text-denim' : 'text-grey'}`}
      >
        Monthly
      </span>

      <button
        type='button'
        aria-pressed={billing === 'yearly'}
        onClick={toggleBilling}
        aria-labelledby='billingStatus'
        className='switch group relative inline-block h-5 w-[38px]'
      >
        <span
          className={`absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-full bg-denim duration-300 
          before:absolute before:bottom-[4px] before:left-[4px] before:h-[12px] before:w-[12px] before:rounded-full before:bg-white 
          before:duration-300 before:content-[""] group-hover:before:bg-light-grey ${billing === 'yearly' && 'before:translate-x-[18px]'} `}
        />
      </button>
      <span
        className={`text-md font-medium ${billing === 'yearly' ? 'text-denim' : 'text-grey'}`}
      >
        Yearly
      </span>
    </div>
  )
}

export default BillingToggle
