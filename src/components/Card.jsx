import React from 'react'

function Card() {
  return (
    <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-10'>

            {/* ilk kart başlangıç */}
            <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row justify-center items-center border rounded-xl shadow-md shadow-black w-[250px] py-10 bg-white gap-10'>
                <div className='flex flex-col justify-center items-center'>
                    <i>Total Sales</i>
                    <strong className='text-xl'>$64.300</strong>
                </div>
                <div className='border-4 border-green-600 rounded-full p-3'>
                    <i>+81</i>
                </div>
            </div>
            {/* ilk kart bitiş */}
            {/* ikinci kart başlangıç */}
            <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row justify-center items-center border rounded-xl shadow-md shadow-black w-[250px] py-10 bg-white gap-10'>
                <div className='flex flex-col justify-center items-center'>
                    <i>Site Visit</i>
                    <strong className='text-xl'>300.000</strong>
                </div>
                <div className='border-4 border-red-600 rounded-full p-3'>
                    <i>+20</i>
                </div>
            </div>
            {/* ikinci kart bitiş */}
            {/* ikinci kart başlangıç */}
            <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row justify-center items-center border rounded-xl shadow-md shadow-black w-[250px] py-10 bg-white gap-10'>
                <div className='flex flex-col justify-center items-center'>
                    <i>Searches</i>
                    <strong className='text-xl'>22.200</strong>
                </div>
                <div className='border-4 border-blue-600 rounded-full p-3'>
                    <i>+60</i>
                </div>
            </div>
            {/* ikinci kart bitiş */}
        </div>
  )
}

export default Card