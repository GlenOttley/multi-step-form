import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'

interface ComponentProps {
  children: ReactNode
}

export type AddOn =
  | 'onlineService'
  | 'largerStorage'
  | 'customizableProfile'
  | undefined

interface FormData {
  name: string
  email: string
  phone: string
  plan: 'arcade' | 'advanced' | 'pro'
  addOns: Array<AddOn>
}

export interface Context {
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export const AppContext = createContext<Context>({
  currentStep: 4,
  setCurrentStep: () => {},
  formData: {} as FormData,
  setFormData: () => {},
})

const Context = ({ children }: ComponentProps) => {
  const [currentStep, setCurrentStep] = useState<number>(4)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    addOns: [],
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
