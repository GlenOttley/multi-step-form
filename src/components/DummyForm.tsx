const DummyForm = () => {
  return (
    <form action='' aria-labelledby='legend'>
      <fieldset aria-required='true' role='radiogroup'>
        <legend id='legend'>What type of vehicle do you drive?</legend>
        <input
          type='checkbox'
          id='vehicle1'
          name='vehicle1'
          value='Bike'
          className='peer'
        />
        <label htmlFor='vehicle1'> I have a bike</label>
        <br />
        <input
          type='checkbox'
          id='vehicle2'
          name='vehicle2'
          value='Car'
          className='peer'
        />
        <label htmlFor='vehicle2'> I have a car</label>
        <br />
        <input
          type='checkbox'
          id='vehicle3'
          name='vehicle3'
          value='Boat'
          className='peer'
        />
        <label htmlFor='vehicle3'> I have a boat</label>
        <br />
      </fieldset>
    </form>
  )
}

export default DummyForm
