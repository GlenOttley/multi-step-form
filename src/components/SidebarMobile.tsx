import { useContext } from 'react'
import { AppContext } from '../Context'

const SidebarMobile = (): JSX.Element => {
  const { currentStep } = useContext(AppContext)

  return (
    <header>
      <div className='h-[172px] bg-sidebar-mobile bg-cover'>
        <nav>
          <ul className='flex justify-center gap-4 py-8'>
            <li
              className={`flex h-[33px] w-[33px] items-center justify-center rounded-full border ${
                currentStep === 1
                  ? 'border-sky-blue bg-sky-blue text-denim'
                  : 'border-white bg-transparent text-white'
              }`}
            >
              1
            </li>
            <li
              className={`flex h-[33px] w-[33px] items-center justify-center rounded-full border ${
                currentStep === 2
                  ? 'border-sky-blue bg-sky-blue text-denim'
                  : 'border-white bg-transparent text-white'
              }`}
            >
              2
            </li>
            <li
              className={`flex h-[33px] w-[33px] items-center justify-center rounded-full border ${
                currentStep === 3
                  ? 'border-sky-blue bg-sky-blue text-denim'
                  : 'border-white bg-transparent text-white'
              }`}
            >
              3
            </li>
            <li
              className={`flex h-[33px] w-[33px] items-center justify-center rounded-full border ${
                currentStep === 4
                  ? 'border-sky-blue bg-sky-blue text-denim'
                  : 'border-white bg-transparent text-white'
              }`}
            >
              4
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SidebarMobile
