import React from 'react'
import Card from './Card'
import NewUser from './NewUser'
import Orders from './Orders'

function Content() {
  return (
    <>
    <div className='flex flex-col justify-center items-start gap-7'>

        <div className='flex justify-start items-center'>
            <strong className='text-3xl'>Analytics</strong>
        </div>
        <Card />

        <div className='flex justify-start items-center'>
            <strong className='text-xl'>New User</strong>
        </div>
        <NewUser />

        <div className='flex justify-start items-center'>
            <strong className='text-xl'>Recent Orders</strong>
        </div>
        <Orders />
    </div>
    </>
  )
}

export default Content