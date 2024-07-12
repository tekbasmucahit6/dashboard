import React from 'react'

function Orders() {
  return (
    <div className='flex justify-center items-center w-full bg-white border shadow-md shadow-black rounded-xl text-center'>
        <table className='table-auto border-separate border-spacing-x-8 border-spacing-y-3'>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Course Number</th>
                    <th>Payment</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>javascript</th>
                    <th>854312</th>
                    <th>1200$</th>
                    <th>active</th>
                </tr>
                <tr>
                    <th>react</th>
                    <th>854312</th>
                    <th>1500$</th>
                    <th>active</th>
                </tr>
                <tr>
                    <th>tailwindcss</th>
                    <th>854312</th>
                    <th>200$</th>
                    <th>active</th>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Orders