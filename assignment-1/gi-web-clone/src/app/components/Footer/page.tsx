import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaMessage, FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='footer md:justify-between md:flex bg-gray-200 p-10 w-full'>
      <div>
        <h3 className='font-bold text-2xl mb-5'>Core Courses</h3>
        <ul>
            <li className='my-2 text-gray-600'>Programming Fundementals</li>
            <li className='my-2 text-gray-600'>Web2 Using Next.js</li>
            <li className='my-2 text-gray-600'>Earn as you learn</li>
        </ul>
      </div>
      <div>
        <h3 className='font-bold text-2xl mb-5 '>Advance Courses</h3>
        <ul>
            <li className='my-2 text-gray-600'>Web3 and Metaverse</li>
            <li className='my-2 text-gray-600'>Cloud Native Computing</li>
            <li className='my-2 text-gray-600'>Artifficiall Intelligence(AI) and Deep Learning</li>
            <li className='my-2 text-gray-600'>Ambient Computing and IOT</li>
            <li className='my-2 text-gray-600'>Genomics and Bioinformatics</li>
            <li className='my-2 text-gray-600'>Network Programmability and Automation</li>
        </ul>
      </div>
      <div className='mr-44'>
        <h3 className='font-bold text-2xl mb-5 text-center'>Social Links</h3>
        <ul className="flex gap-8 text-2xl">
        <FaFacebook className='text-blue-800 font-bold'/>
        <FaYoutube className='text-red-600 font-bold' />
        <FaTwitter className='text-blue-800 font-bold'/>
        <FaInstagram className='text-pink-800 font-bold'/>
        <FaTiktok/>
        </ul>
        <p className='my-7 text-blue-500 underline text-lg flex'><span className='mx-2 mt-2'><FaMessage/></span>education@governorsindh.com</p>
      </div>
    </div>
  )
}

export default Footer
