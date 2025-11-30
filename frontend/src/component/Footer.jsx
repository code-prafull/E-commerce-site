import React from 'react'
import logo from "../assets/LOGO11.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <div className='w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white pb-15'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Company Info */}
        <div className='space-y-4'>
          <div className='flex items-center gap-3  '>
            <img src={logo} alt="OneCart Logo" className='w-20 rounded-full' />
            <h2 className='text-2xl font-bold'>MYSHA</h2>
          </div>
          <p className='text-gray-300 text-sm leading-relaxed'>
            Your trusted online shopping destination with top-quality products, amazing deals, and fast delivery.
          </p>
          {/* Social Media Icons */}
          <div className='flex gap-4 mt-4'>
            {/* <a href="#" className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors'>
              <FaFacebookF /> */}
            {/* </a> */}
            {/* <a href="#" className='w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center hover:bg-sky-600 transition-colors'>
              <FaTwitter /> */}
            {/* </a> */}
            <a href="https://www.instagram.com/mysha_clothes_2908?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-colors'>
              <FaInstagram />
            </a>
            {/* <a href="#" className='w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-900 transition-colors'>
              <FaLinkedinIn />
            </a> */}
          </div>
        </div>

        {/* Quick Links */}
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold border-b border-gray-700 pb-2'>Quick Links</h3>
          <ul className='space-y-2'>
            <li><a href="/about" className='text-gray-300 hover:text-white transition-colors'>About Us</a></li>
            <li><a href="/collection" className='text-gray-300 hover:text-white transition-colors'>Collections</a></li>
            <li><a href="/contact" className='text-gray-300 hover:text-white transition-colors'>Contact</a></li>
            <li><a href="/order" className='text-gray-300 hover:text-white transition-colors'>My Orders</a></li>
            <li><a href="/cart" className='text-gray-300 hover:text-white transition-colors'>Cart</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold border-b border-gray-700 pb-2'>Customer Service</h3>
          <ul className='space-y-2'>
            <li><a href="#" className='text-gray-300 hover:text-white transition-colors'>FAQs</a></li>
            <li><a href="#" className='text-gray-300 hover:text-white transition-colors'>Shipping Policy</a></li>
            <li><a href="#" className='text-gray-300 hover:text-white transition-colors'>Returns & Exchanges</a></li>
            <li><a href="#" className='text-gray-300 hover:text-white transition-colors'>Privacy Policy</a></li>
            <li><a href="#" className='text-gray-300 hover:text-white transition-colors'>Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold border-b border-gray-700 pb-2'>Contact Us</h3>
          <ul className='space-y-3'>
            <li className='flex items-start gap-3'>
              <MdLocationOn className='text-xl text-blue-400 mt-1' />
              <span className='text-gray-300'>SATNA (M.P)</span>
            </li>
            <li className='flex items-center gap-3'>
              <MdPhone className='text-xl text-green-400' />
              <span className='text-gray-300'>+91-9203370779</span>
            </li>
            <li className='flex items-center gap-3'>
              <MdEmail className='text-xl text-red-400' />
              <span className='text-gray-300'>myshaclothes2908@gmail.com</span>
            </li>
          </ul>
          
          {/* Newsletter Signup */}
          <div className='mt-4'>
            <h4 className='font-medium mb-2'>Subscribe to Newsletter</h4>
            <div className='flex'>
              <input 
                type="email" 
                placeholder="Your email" 
                className='px-3 py-2 text-gray-800 rounded-l text-sm w-full focus:outline-none'
              />
              <button className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r text-sm transition-colors'>
                <a href="https://www.instagram.com/mysha_clothes_2908?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Join</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-700 py-6'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-400 text-sm'>
            &copy; 2025 Mysha. All Rights Reserved.
          </p>
          <div className='flex gap-6 text-gray-400 text-sm'>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer