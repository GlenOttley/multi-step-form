import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'
import { FormData } from './types'
import availablePlans from './data/availablePlans'

interface ComponentProps {
  children: ReactNode
}

export interface Context {
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export const AppContext = createContext<Context>({
  currentStep: 2,
  setCurrentStep: () => {},
  formData: {} as FormData,
  setFormData: () => {},
})

const Context = ({ children }: ComponentProps) => {
  const [currentStep, setCurrentStep] = useState<number>(2)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    plan: availablePlans[0],
    addOns: [],
    billing: 'monthly',
  } as FormData)

  return (
    <AppContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formData,
        setFormData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default Context
