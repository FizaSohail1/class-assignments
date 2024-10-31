'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../public/logo.png'
import { FaBars } from 'react-icons/fa';
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=''>
      <nav className='bg-[#204c8a] flex items-center justify-between md:h-[75px] h-full z-40 sticky top-0 p-4'>
        <div className='mt-24 ml-4 '>
        <Image src={Logo} alt="logo" height={150} width={120} />
      </div>
        <h1 className='hidden md:block mx-auto text-gray-300 font-bold text-center text-lg md:text-2xl'>
          Tuition Free Education Program on Latest Technologies
        </h1>
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-white text-2xl'>
            <FaBars/>
          </button>
        </div>

        <ul className={`list-none md:flex space-x-8 text-lg text-white md:mr-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center absolute md:static top-[75px] left-0 w-full md:w-auto bg-[#204c8a] p-4 md:p-0 transition-all duration-300 ease-in-out z-20`}>
          <li className='font-semibold md:ml-4'>Home</li>
          <li>Apply</li>
          <li>Jobs</li>
          <li>Result</li>
          <li className='relative'>
            <div className='cursor-pointer flex gap-2' onClick={toggleDropdown}>
              Courses <FaChevronDown className='mt-2'/>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
             <div className='absolute bg-white text-black mt-2 right-0 p-4 w-64 rounded shadow-lg z-30'>
             <h3 className='font-bold text-lg mb-2'>Core Courses</h3>
             <ul>
               <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Programming Fundamentals</li>
               <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Web2 Using NextJS</li>
               <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Earn as You Learn</li>
             </ul>
             <h3 className='font-bold text-lg mt-4 mb-2'>Advanced Courses</h3>
             <ul>
               <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Web 3 and Metaverse</li>
               <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Cloud-Native Computing</li>
               <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Artificial Intelligence and Deep Learning</li>
               <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Network Programmability and Automation</li>
             </ul>
           </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
