import { useContext } from 'react'
import { AppContext } from './Context'
import SidebarMobile from './components/SidebarMobile'
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'

function App() {
  const { currentStep } = useContext(AppContext)

  return (
    <>
      <SidebarMobile />
      <main>
        {currentStep === 1 ? (
          <PersonalInfo />
        ) : currentStep === 2 ? (
          <SelectPlan />
        ) : (
          <h1>Step three</h1>
        )}
      </main>
    </>
  )
}

export default App
