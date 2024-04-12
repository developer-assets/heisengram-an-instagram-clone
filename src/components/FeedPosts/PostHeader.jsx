import React from 'react'

const PostHeader = ({username, pic}) => {
  return (
    <div className='flex justify-between mb-[6px]'>
      <div className='flex gap-1'>
        <img src={pic} alt="User Profile Picture" className='w-8 h-8 object-cover rounded-full' />
        <div className='flex gap-2 text-xs mt-[7px] ml-1'>
          <span className='font-semibold'> {username} </span>
          <span className='text-gray-500'> • 1w</span>
        </div>
      </div>
      <div className='text-xs text-blue-400 font-semibold mt-[7px] cursor-pointer hover:text-gray-200 duration-200'>
        <span>Unfollow</span>
      </div>
    </div>
  )
}

export default PostHeader