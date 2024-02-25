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

interface FormData {
  name: string
  email: string
  phone: string
  plan: 'arcade' | 'advanced' | 'pro'
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
    plan: 'arcade',
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