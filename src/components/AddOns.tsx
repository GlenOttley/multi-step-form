import { useContext, ChangeEvent } from 'react'
import { AppContext, AddOn } from '../Context'
import Stepper from './Stepper'

// TODO add monthly/yearly toggle
const AddOns = (): JSX.Element => {
  const {
    formData: { addOns },
    setFormData,
  } = useContext(AppContext)

  function handleCheckbox(e: ChangeEvent<HTMLInputElement>) {
    const selectedAddOn = e.target.value as AddOn
    if (!addOns.includes(selectedAddOn)) {
      setFormData((current) => ({
        ...current,
        addOns: [...addOns, selectedAddOn],
      }))
    } else {
      setFormData((current) => ({
        ...current,
        addOns: addOns.filter((addOn) => addOn !== selectedAddOn),
      }))
    }
  }

  function handleNextStep() {
    console.log(addOns)
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
            Pick add-ons
          </legend>
          <span
            id='formDescription'
            className='mb-[22px] block text-lg text-grey'
          >
            Add-ons help enhance your gaming experience.
          </span>

          <div className='flex flex-col gap-4'>
            <label
              htmlFor='onlineService'
              className={`rounded-md flex cursor-pointer items-center gap-4 border border-border-color px-4 py-3 focus-within:border-purple focus-within:ring-purple hover:border-purple 
                ${addOns.includes('onlineService') && 'border-purple bg-very-light-grey'} `}
            >
              <input
                type='checkbox'
                name='add-ons'
                id='onlineService'
                value='onlineService'
                className='h-5 w-5 rounded-sm accent-purple'
                onChange={handleCheckbox}
                checked={addOns.includes('onlineService')}
              />
              <div className='flex w-full items-center justify-between'>
                <div className='flex flex-col justify-center gap-1'>
                  <span className='text-md font-medium text-denim'>
                    Online Service
                  </span>
                  <span className='text-sm font-normal text-grey'>
                    Access to multiplayer games
                  </span>
                </div>
                <span className='text-sm font-normal text-purple'>+$1/mo</span>
              </div>
            </label>
            <label
              htmlFor='largerStorage'
              className={`rounded-md flex cursor-pointer items-center gap-4 border border-border-color px-4 py-3 focus-within:border-purple focus-within:ring-purple hover:border-purple 
                ${addOns.includes('largerStorage') && 'border-purple bg-very-light-grey'} `}
            >
              <input
                type='checkbox'
                name='add-ons'
                id='largerStorage'
                value='largerStorage'
                className='h-5 w-5 rounded-sm accent-purple'
                onChange={handleCheckbox}
                checked={addOns.includes('largerStorage')}
              />
              <div className='flex w-full items-center justify-between'>
                <div className='flex flex-col justify-center gap-1'>
                  <span className='text-md font-medium text-denim'>
                    Larger Storage
                  </span>
                  <span className='text-sm font-normal text-grey'>
                    Extra 1TB of cloud save
                  </span>
                </div>
                <span className='text-sm font-normal text-purple'>+$2/mo</span>
              </div>
            </label>
            <label
              htmlFor='customizableProfile'
              className={`rounded-md flex cursor-pointer items-center gap-4 border border-border-color px-4 py-3 focus-within:border-purple focus-within:ring-purple hover:border-purple 
                ${addOns.includes('customizableProfile') && 'border-purple bg-very-light-grey'} `}
            >
              <input
                type='checkbox'
                name='add-ons'
                id='customizableProfile'
                value='customizableProfile'
                className='h-5 w-5 rounded-sm accent-purple'
                onChange={handleCheckbox}
                checked={addOns.includes('customizableProfile')}
              />
              <div className='flex w-full items-center justify-between'>
                <div className='flex flex-col justify-center gap-1'>
                  <span className='text-md font-medium text-denim'>
                    Customizable Profile
                  </span>
                  <span className='text-sm font-normal text-grey'>
                    Custom theme on your profile
                  </span>
                </div>
                <span className='text-sm font-normal text-purple'>+$2/mo</span>
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

export default AddOns
