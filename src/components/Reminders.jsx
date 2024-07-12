import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Reminders() {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <div className='flex flex-col justify-center items-center gap-10'>
            <a href="https://github.com/tekbasmucahit6">
                <div className='flex justify-between items-center bg-white border rounded-xl shadow-md shadow-black w-[200px] px-4 py-3'>
                    <strong className='text-3xl text-black'><FaGithub /></strong>
                    <i>Github</i>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/mucahit-tekbas/">
                <div className='flex justify-between items-center bg-white border rounded-xl shadow-md shadow-black w-[200px] px-4 py-3'>
                    <strong className='text-3xl text-black'><FaLinkedin /></strong>
                    <i>linkedin</i>
                </div>
            </a>
            <a href="https://www.instagram.com/mucahitxtekbs/">
                <div className='flex justify-between items-center bg-white border rounded-xl shadow-md shadow-black w-[200px] px-4 py-3'>
                    <strong className='text-3xl text-black'><FaInstagram /></strong>
                    <i>Github</i>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Reminders