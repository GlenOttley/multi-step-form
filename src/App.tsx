import { useContext } from 'react'
import { AppContext } from './Context'
import Sidebar from './components/Sidebar'
import PersonalInfo from './components/PersonalInfo'
import Plan from './components/Plan'
import AddOns from './components/AddOns'
import FinishingUp from './components/FinishingUp'

function App() {
  const { currentStep } = useContext(AppContext)

  return (
    <div className='h-screen bg-bg px-4 md:flex md:items-center '>
      <div className='mx-auto w-full max-w-[940px] items-stretch rounded-xl bg-white md:flex md:justify-between md:p-4'>
        <Sidebar />
        <main className='relative top-[99px] mx-auto rounded-lg bg-white px-6 py-8 md:top-0 md:mt-0  md:rounded-none md:bg-transparent md:px-0 md:pl-4 md:pt-10 '>
          {currentStep === 1 ? (
            <PersonalInfo />
          ) : currentStep === 2 ? (
            <Plan />
          ) : currentStep === 3 ? (
            <AddOns />
          ) : (
            <FinishingUp />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
