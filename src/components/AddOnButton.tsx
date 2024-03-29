import { useContext } from 'react'
import { AppContext } from '../Context'
import { AddOn } from '../types'

interface ComponentProps {
  addOn: AddOn
}

const AddOns = ({ addOn }: ComponentProps): JSX.Element => {
  const { name, title, description, monthlyCost, yearlyCost } = addOn

  const {
    formData: { addOns: SelectedAddOns, billing },
    setFormData,
  } = useContext(AppContext)

  const addOnSelected = SelectedAddOns.some((addOn) => addOn.name === name)

  function handleCheckbox() {
    if (!addOnSelected) {
      setFormData((current) => ({
        ...current,
        addOns: [...current.addOns, addOn],
      }))
    } else {
      setFormData((current) => ({
        ...current,
        addOns: current.addOns.filter(
          (currentAddOn) => currentAddOn.name !== addOn.name,
        ),
      }))
    }
  }

  return (
    <label
      htmlFor={name}
      className={`flex cursor-pointer items-center gap-4 rounded-md border border-border-color px-4 py-3 focus-within:border-purple focus-within:ring-purple hover:border-purple md:px-6 md:py-4 
                ${addOnSelected && 'border-purple bg-very-light-grey'} `}
    >
      <input
        type='checkbox'
        name='add-ons'
        id={name}
        value={name}
        className='h-5 w-5 rounded-sm accent-purple'
        onChange={handleCheckbox}
        checked={addOnSelected}
        autoFocus={name === 'onlineService'}
      />
      <div className='flex w-full items-center justify-between'>
        <div className='flex flex-col justify-center gap-1 md:gap-2'>
          <span className='text-md font-medium text-denim md:text-lg'>
            {title}
          </span>
          <span className='text-sm font-normal text-grey md:text-md'>
            {description}
          </span>
        </div>
        <span className='text-sm font-normal text-purple md:text-md'>
          {billing === 'monthly' ? `+$${monthlyCost}/mo` : `+$${yearlyCost}/yr`}
        </span>
      </div>
    </label>
  )
}

export default AddOns
