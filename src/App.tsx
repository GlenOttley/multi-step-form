import { useContext } from 'react'
import { AppContext } from './Context'
import Sidebar from './components/Sidebar'
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import AddOns from './components/AddOns'
import FinishingUp from './components/FinishingUp'
import ThankYou from './components/ThankYou'

function App() {
  const { currentStep } = useContext(AppContext)

  return (
    <div className='min-h-screen bg-bg px-4 pb-4 md:flex md:items-center'>
      <div className='mx-auto w-full max-w-[940px] items-stretch rounded-xl bg-white md:flex md:justify-between md:p-4'>
        <Sidebar />
        <main className='relative mx-auto mt-[99px] w-full rounded-lg bg-white px-6 py-8 shadow-md md:top-0 md:mt-0 md:max-w-[450px] md:rounded-none md:bg-transparent md:px-0 md:pb-4 md:pl-4 md:pt-10 '>
          {currentStep === 1 ? (
            <PersonalInfo />
          ) : currentStep === 2 ? (
            <SelectPlan />
          ) : currentStep === 3 ? (
            <AddOns />
          ) : currentStep === 4 ? (
            <FinishingUp />
          ) : (
            currentStep === 5 && <ThankYou />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
