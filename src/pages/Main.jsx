import React from 'react'
import SideBar from '../components/SideBar'
import Content from '../components/Content'
import RightBar from '../components/RightBar'

function Main() {
  return (
    <div className='grid grid-flow-col-dense grid-cols-12 h-screen w-screen gap-11 py-5 justify-between'>
        <div className='col-span-3 xl:col-span-2 lg:col-span-3 md:col-span-5'>
            <SideBar />
        </div>

        <div className='col-span-9 xl:col-span-7 lg:col-span-6 md:col-span-7'>
            <Content />
        </div>

        <div className='xl:col-span-3 lg:col-span-3'>
          <RightBar />
        </div>
    </div>
  )
}

export default Main