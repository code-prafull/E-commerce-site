import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { FaList, FaPlus, FaShoppingBag } from "react-icons/fa";

function Nav() {
    let navigate = useNavigate()
    let {serverUrl} = useContext(authDataContext)
    let {getAdmin} = useContext(adminDataContext)
    let [showMobileMenu, setShowMobileMenu] = useState(false)

    const logOut = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout", {withCredentials:true})
            console.log(result.data)
            toast.success("LogOut Successfully")
            getAdmin()
            navigate("/login")

        } catch (error) {
            console.log(error)
            toast.error("LogOut Failed")
        }
        
    }
  return (
    <>
      <div className='w-full h-[80px] bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg z-50 fixed top-0 flex items-center justify-between px-6'>
        <div className='flex items-center justify-start gap-4'>
          {/* Hamburger menu for mobile - moved to the left */}
          <div className='md:hidden flex items-center justify-center'>
            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className='text-white hover:text-blue-400 transition-colors'>
              {showMobileMenu ? <RxCross2 className='w-8 h-8' /> : <GiHamburgerMenu className='w-8 h-8' />}
            </button>
          </div>
          
          <div className='flex items-center gap-3 cursor-pointer' onClick={()=>navigate("/")}>
            <img src={logo} alt="OneCart Admin" className='w-10 h-10 object-contain' />
            <h1 className='text-2xl font-bold text-white'>OneCart Admin</h1>
          </div>
        </div>
        
        {/* Mobile menu */}
        {showMobileMenu && (
          <div className='absolute top-[80px] left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg md:hidden z-50'>
            <ul className='flex flex-col items-start justify-center py-4'>
              <li className='w-full text-left px-6 py-3 hover:bg-gray-700 transition-colors'>
                <button 
                  className='text-lg font-medium text-white' 
                  onClick={() => {navigate("/"); setShowMobileMenu(false)}}
                >
                  Dashboard
                </button>
              </li>
              <li className='w-full text-left px-6 py-3 hover:bg-gray-700 transition-colors'>
                <button 
                  className='text-lg font-medium text-white' 
                  onClick={() => {navigate("/add"); setShowMobileMenu(false)}}
                >
                  Add Items
                </button>
              </li>
              <li className='w-full text-left px-6 py-3 hover:bg-gray-700 transition-colors'>
                <button 
                  className='text-lg font-medium text-white' 
                  onClick={() => {navigate("/lists"); setShowMobileMenu(false)}}
                >
                  List Items
                </button>
              </li>
              <li className='w-full text-left px-6 py-3 hover:bg-gray-700 transition-colors'>
                <button 
                  className='text-lg font-medium text-white' 
                  onClick={() => {navigate("/orders"); setShowMobileMenu(false)}}
                >
                  View Orders
                </button>
              </li>
              <li className='w-full text-left px-6 py-3 hover:bg-gray-700 transition-colors border-t border-gray-700 mt-2'>
                <button 
                  className='text-lg font-medium text-red-400' 
                  onClick={() => {logOut(); setShowMobileMenu(false)}}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
        
        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center justify-center flex-1 max-w-2xl'>
          <ul className='flex items-center justify-center gap-6'>
            <li>
              <button 
                className='text-lg font-medium text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-700'
                onClick={()=>navigate("/")}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button 
                className='text-lg font-medium text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-700'
                onClick={()=>navigate("/add")}
              >
                Add Items
              </button>
            </li>
            <li>
              <button 
                className='text-lg font-medium text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-700'
                onClick={()=>navigate("/lists")}
              >
                List Items
              </button>
            </li>
            <li>
              <button 
                className='text-lg font-medium text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-700'
                onClick={()=>navigate("/orders")}
              >
                View Orders
              </button>
            </li>
          </ul>
        </div>
        
        {/* Logout Button */}
        <button 
          className='text-lg font-medium bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors hidden md:block'
          onClick={logOut}
        >
          Logout
        </button>
      </div>
      
      {/* Bottom Navigation for Mobile - Fixed at bottom */}
      <div className='w-full h-16 flex items-center justify-between px-4 text-sm fixed bottom-0 left-0 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700 md:hidden z-50'>
        <button className='flex flex-col items-center justify-center text-white' onClick={()=>navigate("/")}>
          <IoMdHome className='w-6 h-6' />
          <span className='text-xs mt-1'>Home</span>
        </button>
        <button className='flex flex-col items-center justify-center text-white' onClick={()=>navigate("/add")}>
          <FaPlus className='w-6 h-6' />
          <span className='text-xs mt-1'>Add</span>
        </button>
        <button className='flex flex-col items-center justify-center text-white' onClick={()=>navigate("/lists")}>
          <FaList className='w-6 h-6' />
          <span className='text-xs mt-1'>Lists</span>
        </button>
        <button className='flex flex-col items-center justify-center text-white' onClick={()=>navigate("/orders")}>
          <FaShoppingBag className='w-6 h-6' />
          <span className='text-xs mt-1'>Orders</span>
        </button>
      </div>
    </>
  )
}

export default Nav