import { forwardRef } from 'react'
import { FormData } from '../types'

interface ComponentProps {
  field: keyof FormData
  value: string
  label: string
  placeholder: string
  errors: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = forwardRef<HTMLInputElement, ComponentProps>(
  (
    { field, value, label, placeholder, errors, handleChange }: ComponentProps,
    ref,
  ) => {
    return (
      <>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
              <label htmlFor={field} className='text-sm font-normal text-denim'>
                {label}
              </label>
              <span
                className='text-md font-bold text-red-errors'
                hidden={!errors.length}
                id={`${field}Error`}
              >
                {errors}
              </span>
            </div>
            <input
              ref={ref}
              value={value}
              onChange={handleChange}
              type='text'
              id={field}
              name={field}
              placeholder={placeholder}
              aria-invalid={errors.length > 0}
              aria-describedby={`${field}Error`}
              className={`rounded-sm border px-4 py-3 outline-none placeholder:text-md placeholder:font-medium
                        placeholder:text-grey focus:border-purple ${errors.length ? 'border-red-errors' : 'border-border-color'}`}
            />
          </div>
        </div>
      </>
    )
  },
)

export default TextInput
