import React from 'react'
import { MdDashboard } from "react-icons/md";
import { LiaUserSolid } from "react-icons/lia";
import { MdHistoryEdu } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdReportGmailerrorred } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
function SideBar() {
  return (
    <>
    <div className='flex flex-col justify-start items-start w-full h-full gap-10 ms-2'>
        <div className='flex justify-center items-center text-center'>
            <strong className='text-3xl'><VscAccount /></strong>
        </div>
        <div className='flex flex-col justify-center gap-8 bg-white text-gray-500 border rounded-xl px-4 py-4 shadow-md shadow-black'>
            <a href="" className='flex justify-start gap-10 items-center'><MdDashboard  className='text-2xl'/> <i className='hidden xl:flex lg:flex md:flex'>Dashboard</i></a>
            <a href="" className='flex justify-start gap-10 items-center'><LiaUserSolid className='text-2xl' /> <i className='hidden xl:flex lg:flex md:flex'>Users</i></a>
            <a href="" className='flex justify-start gap-10 items-center'><MdHistoryEdu className='text-2xl' /> <i className='hidden xl:flex lg:flex md:flex'>History</i></a>
            <a href="" className='flex justify-start gap-10 items-center text-red-500'><IoAnalyticsSharp className='text-2xl' /> <i className='hidden xl:flex lg:flex md:flex'>Analytics</i></a>
            <a href="" className='flex justify-start gap-10 items-center'><MdOutlineLocalPostOffice className='text-2xl' /> <i className='hidden xl:flex lg:flex md:flex'>Tickets</i></a>
            <a href="" className='flex justify-start gap-10 items-center'><LiaClipboardListSolid className='text-2xl' /> <i className='hidden xl:flex lg:flex md:flex'>Sale List</i></a>
            <a href="" className='flex justify-start gap-10 items-center'><MdReportGmailerrorred className='text-2xl' /> <i className='hidden xl:flex lg:flex md:flex'>Reports</i></a>
            <a href="" className='flex justify-start gap-10 items-center'><IoSettingsOutline className='text-2xl' /> <i className='hidden xl:flex lg:flex md:flex'>Settings</i></a>
            <a href="" className='flex justify-start gap-10 items-center'><FaPlus className='text-2xl' /> <i className='hidden xl:flex lg:flex md:flex'>New Login</i></a>
            <a href="" className='flex justify-start gap-10 items-center text-black'><IoIosLogOut className='text-2xl' /> <i className='hidden xl:flex lg:flex md:flex'>Log Out</i></a>
        </div>
    </div>
    </>
  )
}

export default SideBar