import React from 'react'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
      <div className=''>
      <div className="h-10 bg-[#38215A] flex justify-end items-center pr-4 text-white text-sm">
        USA: (469) 781-8845
      </div>
    <div className='bg-transpraint h-ato flex justify-between'>
        <div className='h-32 w-48 pl-5 pt-4'><img src={logo} alt="" /></div>
        <div className='flex pt-10 pr-5'>
            <ul className='flex justify-between text-white gap-5 cursor-pointer'>
                <li>SERVICE</li>
                <li>ENTERPRISE</li>
                <li>ABOUT US</li>
                <li>OUR WORK</li>
                <li>RESOURCES</li>
                <li>CAREERS</li>
                <li>CONTACT US</li>
            </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar


// bg-{#38215A}