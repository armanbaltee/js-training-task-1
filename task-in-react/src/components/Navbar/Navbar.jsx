import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around pt-5 bg-blue-700 pb-5 text-white'>
      <div className='text-3xl font-semibold'>Logo</div>
      <div className='flex'>
        <ul className='flex justify-between gap-8 font-mono text-lg text-center'>
            <li>Home</li>
            <li>Service</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
      </div>
      <div>
        <button className=' p-2 rounded-lg bg-white text-blue-900 shadow-lg font-mono '>Contact us</button>
      </div>
    </div>
  )
}

export default Navbar
