import React from 'react'

function NewUser() {
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 justify-center items-center gap-10 w-full bg-white border shadow-md shadow-black rounded-xl p-5 text-center'>
        {/* ilk user başlangıç */}
            <div className='flex flex-col justify-center items-center gap-3'>
                <div >
                    <img src={"../img/mucahittekbas.jpg"} className='w-32' alt="" />
                </div>
                <div className='text-blue-600'>
                    <i>mücahit tekbaş</i>
                </div>
            </div>
        {/* ilk user bitiş */}

        {/* ikinci user başlangıç */}
        <div className='flex flex-col justify-center items-center gap-3'>
                <div>
                    <img src={"../img/mucahittekbas.jpg"} className='w-32' alt="" />
                </div>
                <div className='text-blue-600'>
                    <i>mücahit tekbaş</i>
                </div>
            </div>
        {/* ikinci user bitiş */}

        {/* üçüncü user başlangıç */}
        <div className='flex flex-col justify-center items-center gap-3'>
                <div>
                    <img src={"../img/mucahittekbas.jpg"} className='w-32' alt="" />
                </div>
                <div className='text-blue-600'>
                    <i>mücahit tekbaş</i>
                </div>
            </div>
        {/* üçüncü user bitiş */}

         {/* new user başlangıç */}
         <div className='flex flex-col justify-center items-center gap-3'>
                <div>
                    <img src={"../img/mucahittekbas.jpg"} className='w-32' alt="" />
                </div>
                <div className='text-blue-600'>
                    <i>mücahit tekbaş</i>
                </div>
            </div>
        {/* new user bitiş */}
    </div>
  )
}

export default NewUser