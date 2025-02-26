import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='flex justify-around pt-10'>
      <div className='text-2xl text-blue-900 font-semibold'>Logo</div>
      <div className='text-1xl text-blue-600 font-semibold gap-1 flex'>
        <ul className='flex flex-row gap-5 justify-between'>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to='/about' end>About</NavLink></li>
          <li><NavLink to='/contact' end>Contact</NavLink></li>
        </ul>
      </div>
      <div><button className='border-2 pl-8 pr-8 pt-1 pb-1 bg-slate-600 text-white font-semibold text-1xl hover:bg-slate-500 hover:text-black'>Login</button></div>
    </div>
  )
}

export default Header
