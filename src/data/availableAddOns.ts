import { AddOn } from '../types'

const availableAddOns: AddOn[] = [
    {
      name: 'onlineService',
      title: 'Online Service',
      description: 'Access to multiplayer games',
      monthlyCost: 1,
      yearlyCost: 10,
    },
    {
      name: 'largerStorage',
      title: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      monthlyCost: 2,
      yearlyCost: 20,
    },
    {
      name: 'customizableProfile',
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      monthlyCost: 2,
      yearlyCost: 20,
    },
  ]
 
  export default availableAddOns