import { useContext } from 'react'
import { AppContext } from '../Context'

const Sidebar = (): JSX.Element => {
  const { currentStep } = useContext(AppContext)

  return (
    <header className='absolute inset-0 w-screen md:static md:w-auto'>
      <div className='h-[172px] bg-sidebar-mobile bg-cover md:h-[568px] md:w-[274px] md:bg-sidebar-desktop'>
        <nav>
          <ul className='flex justify-center gap-4 py-8 md:flex-col md:gap-8 md:px-8 md:py-10'>
            <li className='flex items-center gap-4'>
              <span
                className={` flex h-[33px] w-[33px] items-center justify-center rounded-full border ${
                  currentStep === 1
                    ? 'border-sky-blue bg-sky-blue text-denim'
                    : 'border-white bg-transparent text-white'
                }`}
              >
                1
              </span>
              <div className='hidden flex-col md:flex'>
                <span className='text-sm text-light-blue'>STEP 1</span>
                <span className='text-md font-bold text-white'>YOUR INFO</span>
              </div>
            </li>

            <li className='flex items-center gap-4'>
              <span
                className={`flex h-[33px] w-[33px] items-center justify-center rounded-full border ${
                  currentStep === 2
                    ? 'border-sky-blue bg-sky-blue text-denim'
                    : 'border-white bg-transparent text-white'
                }`}
              >
                2
              </span>
              <div className='hidden flex-col md:flex'>
                <span className='text-sm text-light-blue'>STEP 2</span>
                <span className='text-md font-bold text-white'>
                  SELECT PLAN
                </span>
              </div>
            </li>

            <li className='flex items-center gap-4'>
              <span
                className={`flex h-[33px] w-[33px] items-center justify-center rounded-full border ${
                  currentStep === 3
                    ? 'border-sky-blue bg-sky-blue text-denim'
                    : 'border-white bg-transparent text-white'
                }`}
              >
                3
              </span>
              <div className='hidden flex-col md:flex'>
                <span className='text-sm text-light-blue'>STEP 3</span>
                <span className='text-md font-bold text-white'>ADD-ONS</span>
              </div>
            </li>

            <li className='flex items-center gap-4'>
              <span
                className={`flex h-[33px] w-[33px] items-center justify-center rounded-full border ${
                  currentStep >= 4
                    ? 'border-sky-blue bg-sky-blue text-denim'
                    : 'border-white bg-transparent text-white'
                }`}
              >
                4
              </span>
              <div className='hidden flex-col md:flex'>
                <span className='text-sm text-light-blue'>STEP 4</span>
                <span className='text-md font-bold text-white'>SUMMARY</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Sidebar
