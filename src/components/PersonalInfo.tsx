import { useState, useRef, useContext, ChangeEvent, useEffect } from 'react'
import { AppContext } from '../Context'
import Stepper from './Stepper'
import TextInput from './TextInput'

const PersonalInfo = (): JSX.Element => {
  const { setCurrentStep, formData, setFormData } = useContext(AppContext)

  const initialErrors = {
    name: '',
    email: '',
    phone: '',
  }

  const [name, setName] = useState(formData.name ?? '')
  const [email, setEmail] = useState(formData.email ?? '')
  const [phone, setPhone] = useState(formData.phone ?? '')
  const [errors, setErrors] = useState(initialErrors)

  const nameFieldRef = useRef<HTMLInputElement>(null)
  const emailFieldRef = useRef<HTMLInputElement>(null)
  const phoneFieldRef = useRef<HTMLInputElement>(null)

  function handleNextStep() {
    if (validate()) {
      setFormData((prev) => ({
        ...prev,
        name,
        email,
        phone,
      }))
      setCurrentStep((currentStep) => currentStep + 1)
    }
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '')

    const size = input.length
    if (size > 0) {
      input = '(' + input
    }
    if (size > 3) {
      input = input.slice(0, 4) + ') ' + input.slice(4, 11)
    }
    if (size > 6) {
      input = input.slice(0, 9) + ' ' + input.slice(9)
    }
    setPhone(input)
  }

  function validate() {
    setErrors(initialErrors)

    let isValid = true

    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'This field is required',
      }))
      nameFieldRef.current?.focus()
      isValid = false
    }

    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'This field is required',
      }))
      if (isValid) {
        emailFieldRef.current?.focus()
      }
      isValid = false
    }

    if (!phone) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'This field is required',
      }))
      if (isValid) {
        phoneFieldRef.current?.focus()
      }
      isValid = false
    }

    if (phone.length < 14) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Please enter a 10 digit number',
      }))
      if (isValid) {
        phoneFieldRef.current?.focus()
      }
      isValid = false
    }

    return isValid
  }

  useEffect(() => {
    nameFieldRef.current?.focus()
  }, [])

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
          <legend>
            <h1 className='mb-4 text-heading-md font-bold text-denim md:text-heading-lg'>
              Personal info
            </h1>
          </legend>
          <span
            id='formDescription'
            className='mb-[22px] block text-lg text-grey'
          >
            Please provide your name, email address, and phone number.
          </span>
          <div className='flex flex-col gap-4'>
            <TextInput
              ref={nameFieldRef}
              field='name'
              value={name}
              label='Name'
              placeholder='e.g. Stephen King'
              errors={errors.name}
              handleChange={(e) => setName(e.target.value)}
            />
            <TextInput
              ref={emailFieldRef}
              field='email'
              value={email}
              label='Email Address'
              placeholder='e.g. stephenking@lorem.com'
              errors={errors.email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              ref={phoneFieldRef}
              field='phone'
              value={phone}
              label='Phone Number'
              placeholder='e.g. (123) 456 7890'
              errors={errors.phone}
              handleChange={handlePhoneChange}
            />

            {/* repetitive markup, delete after TextInput component has been properly tested */}
            {/* <div>
              <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='name'
                    className='text-sm font-normal text-denim'
                  >
                    Name
                  </label>
                  <span
                    className='text-md font-bold text-red-errors'
                    hidden={!errors.name.length}
                    id='nameError'
                  >
                    {errors.name}
                  </span>
                </div>
                <input
                  ref={nameFieldRef}
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                  type='text'
                  id='name'
                  name='name'
                  placeholder='e.g. Stephen King'
                  aria-invalid={errors.name.length > 0}
                  aria-describedby='nameError'
                  className={`rounded-sm border px-4 py-3 outline-none placeholder:text-md placeholder:font-medium
                          placeholder:text-grey focus:border-purple ${errors.name.length ? 'border-red-errors' : 'border-border-color'}`}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='email'
                    className='text-sm font-normal text-denim'
                  >
                    Email Address
                  </label>
                  <span
                    className='text-md font-bold text-red-errors'
                    hidden={!errors.email.length}
                    id='emailError'
                  >
                    {errors.email}
                  </span>
                </div>
                <input
                  ref={emailFieldRef}
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  type='email'
                  id='email'
                  name='email'
                  placeholder='e.g. stephenking@lorem.com'
                  aria-invalid={errors.email.length > 0}
                  aria-describedby='emailError'
                  className={`rounded-sm border px-4 py-3 outline-none placeholder:text-md placeholder:font-medium
                          placeholder:text-grey focus:border-purple ${errors.email.length ? 'border-red-errors' : 'border-border-color'}`}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='phone'
                    className='text-sm font-normal text-denim'
                  >
                    Phone Number
                  </label>
                  <span
                    className='text-md font-bold text-red-errors'
                    hidden={!errors.phone.length}
                    id='phoneError'
                  >
                    {errors.phone}
                  </span>
                </div>
                <input
                  ref={phoneFieldRef}
                  value={phone}
                  onChange={handlePhoneChange}
                  type='tel'
                  id='phone'
                  name='phone'
                  placeholder='e.g. (123) 456 7890'
                  aria-invalid={errors.phone.length > 0}
                  aria-describedby='phoneError'
                  className={`rounded-sm border px-4 py-3 outline-none placeholder:text-md placeholder:font-medium
                          placeholder:text-grey focus:border-purple ${errors.phone.length ? 'border-red-errors' : 'border-border-color'}`}
                />
              </div>
            </div> */}
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

export default PersonalInfo
