import React from 'react'
import { Link } from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants.jsx';
import { AiFillHome } from 'react-icons/ai';
import ProfilePic from '../../assets/images/profilepic.png'
import { BiLogOut } from 'react-icons/bi';

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} color='white' />,
      text: "Home",
      link: "/"
    },
    {
      icon: <SearchLogo />,
      text: "Search"
    },
    {
      icon: <NotificationsLogo className=" scale-105" />,
      text: "Notifications"
    },
    {
      icon: <CreatePostLogo />,
      text: "Create"
    },
    {
      icon: <img src={ProfilePic} alt="Profile Picture" className='h-[20px] w-[20px] scale-125 md:h-[26px] md:scale-100 object-cover md:w-[26px] border border-gray-100 rounded-full' />,
      text: "Profile",
      link: "/patrick"
    }
  ]


  return (
    <div className='h-screen border-r border-gray-700 fixed left-0 top-0 p-2 md:px-4'>
      <div className='flex flex-col gap-2 w-full h-full'>
        <Link to='/' className="pl-1 hidden md:block cursor-pointer" >
          <InstagramLogo />
        </Link>
        <Link to='/' className="block md:hidden mx-auto hover:scale-105 duration-200 cursor-pointer" >
          <InstagramMobileLogo />
        </Link>

        <div className='flex flex-col gap-6 mt-12'>
          {sidebarItems.map((item, index) => {
            return (
              <Link to={item.link || null} key={index} className="text-sm mx-auto md:mx-3 cursor-pointer flex duration-200 hover:bg-slate-800 py-2 px-4 rounded" >
                {item.icon}
                <span className="ml-8 mt-1 hidden md:flex">{item.text}</span>
              </Link>
            )
          })}
        </div>

        <div className=' mt-auto'>
          <Link to={"/auth"} className="text-sm mx-auto md:mx-3 cursor-pointer flex duration-200 hover:bg-slate-800 py-2 px-4 rounded" >
            <BiLogOut size={25} />
            <span className="ml-8 mt-1 hidden md:flex">Log Out</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
