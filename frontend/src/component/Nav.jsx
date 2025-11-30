import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { userDataContext } from '../context/UserContext';
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { authDataContext } from '../context/authContext';
import { shopDataContext } from '../context/ShopContext';
import logo11 from '../assets/LOGO11.png'

function Nav() {
    let {userData} = useContext(userDataContext)
    let {serverUrl} = useContext(authDataContext)
    let {showSearch,setShowSearch,search,setSearch,getCartCount} = useContext(shopDataContext)
    let [showProfile,setShowProfile] = useState(false)
    let [showMobileMenu, setShowMobileMenu] = useState(false)
    let navigate = useNavigate()


    const handleLogout = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout" , {withCredentials:true})
            console.log(result.data)
           
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
        
    }
  return (
    <>
      <div className='w-full h-[80px] bg-black/70 backdrop-blur-sm z-50 fixed top-0 flex items-center justify-between px-6 border-b border-white/10'>
        {/* Logo Section */}
        <div className='flex items-center justify-start gap-4'>
          {/* Hamburger menu for mobile - moved to the left */}
          <div className='md:hidden flex items-center justify-center'>
            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className='text-white hover:text-blue-400 transition-colors'>
              {showMobileMenu ? <RxCross2 className='w-8 h-8' /> : <GiHamburgerMenu className='w-8 h-8' />}
            </button>
          </div>
          
          <div className='flex items-center gap-3 cursor-pointer' onClick={()=>navigate("/")}>
            <img src={logo11} alt="OneCart Logo" className='w-12 h-12 object-contain' />
            <h1 className='text-2xl font-bold text-white hidden sm:block'>𝓂𝓎𝓈𝒽𝒶</h1>
          </div>
        </div>
        
        {/* Mobile menu */}
        {showMobileMenu && (
          <div className='absolute top-[80px] left-0 w-full bg-black/90 backdrop-blur-sm md:hidden z-50'>
            <ul className='flex flex-col items-start justify-center py-4'>
              <li className='w-full text-left px-6 py-3 hover:bg-white/5 transition-colors'>
                <button className='text-lg font-medium text-white' onClick={() => {navigate("/"); setShowMobileMenu(false)}}>HOME</button>
              </li>
              <li className='w-full text-left px-6 py-3 hover:bg-white/5 transition-colors'>
                <button className='text-lg font-medium text-white' onClick={() => {navigate("/collection"); setShowMobileMenu(false)}}>COLLECTIONS</button>
              </li>
              <li className='w-full text-left px-6 py-3 hover:bg-white/5 transition-colors'>
                <button className='text-lg font-medium text-white' onClick={() => {navigate("/about"); setShowMobileMenu(false)}}>ABOUT</button>
              </li>
              <li className='w-full text-left px-6 py-3 hover:bg-white/5 transition-colors'>
                <button className='text-lg font-medium text-white' onClick={() => {navigate("/contact"); setShowMobileMenu(false)}}>CONTACT</button>
              </li>
              {/* Show login/signup options when user is not logged in */}
              {!userData && (
                <>
                  <li className='w-full text-left px-6 py-3 hover:bg-white/5 transition-colors border-t border-white/10 mt-2'>
                    <button className='text-lg font-medium text-white' onClick={() => {navigate("/login"); setShowMobileMenu(false)}}>LOGIN</button>
                  </li>
                  <li className='w-full text-left px-6 py-3 hover:bg-white/5 transition-colors'>
                    <button className='text-lg font-medium text-white' onClick={() => {navigate("/signup"); setShowMobileMenu(false)}}>SIGN UP</button>
                  </li>
                </>
              )}
              {/* Show logout option when user is logged in */}
              {userData && (
                <li className='w-full text-left px-6 py-3 hover:bg-white/5 transition-colors border-t border-white/10 mt-2'>
                  <button className='text-lg font-medium text-red-400' onClick={() => {handleLogout(); setShowMobileMenu(false)}}>LOGOUT</button>
                </li>
              )}
            </ul>
          </div>
        )}
        
        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center justify-center flex-1 max-w-2xl'>
          <ul className='flex items-center justify-center gap-8'>
            <li>
              <button 
                className='text-lg font-medium text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/5'
                onClick={()=>navigate("/")}
              >
                HOME
              </button>
            </li>
            <li>
              <button 
                className='text-lg font-medium text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/5'
                onClick={()=>navigate("/collection")}
              >
                COLLECTIONS
              </button>
            </li>
            <li>
              <button 
                className='text-lg font-medium text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/5'
                onClick={()=>navigate("/about")}
              >
                ABOUT
              </button>
            </li>
            <li>
              <button 
                className='text-lg font-medium text-white hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/5'
                onClick={()=>navigate("/contact")}
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
        
        {/* Right Side Icons */}
        <div className='flex items-center justify-end gap-5'>
          <div className='relative'>
            {!showSearch ? (
              <IoSearchCircleOutline className='w-9 h-9 text-white cursor-pointer hover:text-blue-400 transition-colors' 
                onClick={()=>{setShowSearch(prev=>!prev);navigate("/collection")}} />
            ) : (
              <IoSearchCircleSharp className='w-9 h-9 text-white cursor-pointer hover:text-blue-400 transition-colors' 
                onClick={()=>setShowSearch(prev=>!prev)} />
            )}
          </div>
          
          <div className='relative'>
            {!userData ? (
              <FaCircleUser className='w-7 h-7 text-white cursor-pointer hover:text-blue-400 transition-colors' 
                onClick={()=>navigate("/login")} />
            ) : (
              <div className='w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors'
                onClick={()=>setShowProfile(prev=>!prev)}>
                {userData?.name?.slice(0,1)?.toUpperCase() || 'U'}
              </div>
            )}
          </div>
          
          <div className='relative'>
            <MdOutlineShoppingCart className='w-7 h-7 text-white cursor-pointer hover:text-blue-400 transition-colors hidden md:block' 
              onClick={()=>navigate("/cart")} />
            {getCartCount() > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                {getCartCount()}
              </span>
            )}
          </div>
        </div>
        
        {/* Search Bar */}
        {showSearch && (
          <div className='absolute top-[80px] left-0 w-full bg-black/90 backdrop-blur-sm z-40 px-6 py-4'>
            <input 
              type="text" 
              className='w-full md:w-1/2 lg:w-1/3 mx-auto block px-6 py-3 bg-white/20 text-white border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-white/70'
              placeholder='Search products...'
              onChange={(e)=>{setSearch(e.target.value)}}
              value={search}
            />
          </div>
        )}
        
        {/* Profile Dropdown */}
        {showProfile && userData && (
          <div className='absolute w-60 bg-black/90 backdrop-blur-sm shadow-xl top-[90%] right-4 border border-white/20 rounded-xl z-50 py-2'>
            <ul className='flex flex-col text-base'>
              <li>
                <button 
                  className='w-full text-left px-6 py-3 hover:bg-white/5 transition-colors text-white font-medium'
                  onClick={()=>{handleLogout();setShowProfile(false)}}
                >
                  Logout
                </button>
              </li>
              <li>
                <button 
                  className='w-full text-left px-6 py-3 hover:bg-white/5 transition-colors text-white font-medium'
                  onClick={()=>{navigate("/order");setShowProfile(false)}}
                >
                  My Orders
                </button>
              </li>
              <li>
                <button 
                  className='w-full text-left px-6 py-3 hover:bg-white/5 transition-colors text-white font-medium'
                  onClick={() => {
                    // Redirect to admin panel
                    window.location.href = 'http://localhost:5175';
                  }}
                >
                  Admin Panel
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Bottom Navigation for Mobile - Fixed at bottom */}
      <div className='w-full h-16 flex items-center justify-between px-4 text-sm fixed bottom-0 left-0 bg-black/90 backdrop-blur-sm border-t border-white/10 md:hidden z-50'>
        <button className='flex flex-col items-center justify-center text-white' onClick={()=>navigate("/")}>
          <IoMdHome className='w-6 h-6' />
          <span className='text-xs mt-1'>Home</span>
        </button>
        <button className='flex flex-col items-center justify-center text-white' onClick={()=>navigate("/collection")}>
          <HiOutlineCollection className='w-6 h-6' />
          <span className='text-xs mt-1'>Shop</span>
        </button>
        <button className='flex flex-col items-center justify-center text-white' onClick={()=>navigate("/contact")}>
          <MdContacts className='w-6 h-6' />
          <span className='text-xs mt-1'>Contact</span>
        </button>
        <button className='flex flex-col items-center justify-center text-white relative' onClick={()=>navigate("/cart")}>
          <MdOutlineShoppingCart className='w-6 h-6' />
          {getCartCount() > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center'>
              {getCartCount()}
            </span>
          )}
          <span className='text-xs mt-1'>Cart</span>
        </button>
      </div>
    </>
  )
}

export default Nav