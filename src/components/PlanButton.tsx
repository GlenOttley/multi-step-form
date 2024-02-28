import { useContext } from 'react'
import { AppContext } from '../Context'
import { Plan } from '../types'

interface ComponentProps {
  plan: Plan
}
const PlanButton = ({ plan }: ComponentProps): JSX.Element => {
  const { name, title, monthlyCost, yearlyCost, iconSrc } = plan
  const { formData, setFormData } = useContext(AppContext)
  const { plan: selectedPlan, billing } = formData

  return (
    <div className='w-full'>
      <input
        type='radio'
        name='plan'
        id={name}
        className='peer pointer-events-none fixed opacity-0'
        onChange={() => setFormData((prev) => ({ ...prev, plan }))}
        checked={selectedPlan.name === name}
        autoFocus={selectedPlan.name === name}
      />
      <label
        htmlFor={name}
        className='flex cursor-pointer gap-[14px] rounded-md border border-border-color p-4 peer-checked:border-purple peer-checked:bg-very-light-grey peer-focus-visible:ring peer-focus-visible:ring-purple md:flex-col md:gap-10'
      >
        <img src={iconSrc} alt='' className='self-start pt-1' />
        <div className='flex flex-col justify-center'>
          <span className='pb-1 text-lg font-medium text-denim '>{title}</span>
          <span className='text-md font-normal text-grey'>
            {billing === 'monthly' ? `$${monthlyCost}/mo` : `$${yearlyCost}/yr`}
          </span>
          <span
            className={`pt-[6px] text-sm font-normal text-denim ${billing === 'monthly' ? 'hidden' : 'block'}`}
          >
            2 months free
          </span>
        </div>
      </label>
    </div>
  )
}

export default PlanButton
