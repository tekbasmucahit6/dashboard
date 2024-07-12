import React from 'react'

function Logo() {
  return (
    <div className='flex flex-col gap-10 justify-center items-center bg-white p-5 rounded-xl shadow-md shadow-black'>
        <img src={"../img/mucahittekbas.jpg"} className='w-72' alt="" />
        <strong>mücahit tekbaş</strong>
    </div>
  )
}

export default Logo