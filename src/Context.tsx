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
}

export interface Context {
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
  formData: FormData
  setFormData: Dispatch<SetStateAction<FormData>>
}

export const AppContext = createContext<Context>({
  currentStep: 1,
  setCurrentStep: () => {},
  formData: {} as FormData,
  setFormData: () => {},
})

const Context = ({ children }: ComponentProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [formData, setFormData] = useState<FormData>({} as FormData)

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
