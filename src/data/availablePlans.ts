import { Plan } from '../types'
import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'

const availablePlans: Plan[] = [
  {
    name: 'arcade',
    title: 'Arcade',
    monthlyCost: 9,
    yearlyCost: 90,
    iconSrc: iconArcade,
  },

  {
    name: 'advanced',
    title: 'Advanced',
    monthlyCost: 12,
    yearlyCost: 120,
    iconSrc: iconAdvanced,
  },

  {
    name: 'pro',
    title: 'Pro',
    monthlyCost: 15,
    yearlyCost: 150,
    iconSrc: iconPro,
  },
]
export default availablePlans
