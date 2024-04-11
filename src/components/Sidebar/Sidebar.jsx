import React from 'react'
import { Link } from 'react-router-dom'
import { InstagramLogo, InstagramMobileLogo } from '../../assets/constants.jsx';

const Sidebar = () => {
  return (
    <div className='h-screen border-r border-gray-700 sticky left-0 top-0 p-2 md:px-4'>
      <div className='flex flex-col gap-2 w-full h-full'>
        <Link to='/' className="pl-1 hidden md:block cursor-pointer" >
          <InstagramLogo />
        </Link>
        <Link to='/' className="block md:hidden mx-auto hover:scale-105 duration-200 cursor-pointer" >
          <InstagramMobileLogo />
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
