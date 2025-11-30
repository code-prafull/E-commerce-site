import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    let navigate = useNavigate()
    let [showSidebar, setShowSidebar] = useState(false)
    
  return (
    <>
        {/* Hamburger menu for mobile - positioned on the left */}
        <div className='md:hidden fixed top-[80px] left-0 z-10'>
            <button 
                onClick={() => setShowSidebar(!showSidebar)} 
                className='bg-[#2c7b89] text-white p-2 rounded-r-lg'
            >
                {showSidebar ? <RxCross2 className='w-[20px] h-[20px]' /> : <GiHamburgerMenu className='w-[20px] h-[20px]' />}
            </button>
        </div>
        
        {/* Sidebar */}
        <div className={`w-[18%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0 top-0 md:block ${showSidebar ? 'block' : 'hidden'}`}>
            <div className='flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]'>
                <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]' onClick={()=>{navigate('/add'); setShowSidebar(false)}}>
                    <IoIosAddCircleOutline className='w-[20px] h-[20px]'/>
                    <p className='hidden md:block'>Add Items</p>
                </div>
                <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]' onClick={()=>{navigate('/lists'); setShowSidebar(false)}}>
                    <FaRegListAlt className='w-[20px] h-[20px]'/>
                    <p className='hidden md:block'>List Items</p>
                </div>
                <div className='flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]' onClick={()=>{navigate('/orders'); setShowSidebar(false)}}>
                    <SiTicktick className='w-[20px] h-[20px]'/>
                    <p className='hidden md:block'>View Orders</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar