import iconThankYou from '../assets/images/icon-thank-you.svg'

const ThankYou = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 py-12 md:h-full'>
      <img src={iconThankYou} alt='' className='h-14 w-14 md:h-fit md:w-fit' />
      <h1 className='pb-1 text-heading-md font-bold text-denim md:text-heading-lg'>
        Thank you!
      </h1>
      <p className='text-center text-lg font-normal text-grey'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  )
}

export default ThankYou
