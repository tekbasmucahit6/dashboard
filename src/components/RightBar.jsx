import React from 'react'
import Logo from './Logo'
import Reminders from './Reminders'

function RightBar() {
  return (
    <div className='flex flex-col justify-center items-center gap-7'>
        <div className='flex justify-center items-center'>
            <strong>Who Are We</strong>
        </div>
        <Logo />

        <div className='flex justify-center items-center'>
            <strong>Reminders</strong>
        </div>
        <Reminders />
    </div>
  )
}

export default RightBar