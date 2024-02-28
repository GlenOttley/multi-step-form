export interface AddOn {
    name: string
    title: string
    description: string
    monthlyCost: number
    yearlyCost: number
  }
  
  export interface Plan {
    name: string
    title: string
    iconSrc: string
    monthlyCost: number
    yearlyCost: number
  }
  
  export interface FormData {
    name: string
    email: string
    phone: string
    plan: Plan
    addOns: Array<AddOn>
    billing: 'monthly' | 'yearly'
  }