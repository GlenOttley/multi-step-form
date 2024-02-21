import { useContext } from 'react'
import { AppContext } from './Context'
import Sidebar from './components/Sidebar'
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'

function App() {
  const { currentStep } = useContext(AppContext)

  return (
    <div className='h-screen bg-bg px-4 md:flex md:items-center '>
      <div className='rounded-xl mx-auto w-full max-w-[940px] items-stretch bg-white md:flex md:justify-between md:p-4'>
        <Sidebar />

        {currentStep === 1 ? (
          <PersonalInfo />
        ) : currentStep === 2 ? (
          <SelectPlan />
        ) : (
          <h1>Step three</h1>
        )}
      </div>
    </div>
  )
}

export default App
