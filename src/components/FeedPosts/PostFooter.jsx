import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';

const PostFooter = ({username}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if(liked){
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };


  return (
    <div>
      <div className='flex justify-start my-2 gap-3'>
        <div onClick={handleLike} className='cursor-pointer'>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </div>
        <div className='cursor-pointer'>
          <CommentLogo />
        </div>
      </div>
      <div>
        <p className='text-xs mb-4'> {likes} likes </p>
      </div>
      <div className='text-xs'>
        <p className='font-semibold'> {username} <span className='font-normal ml-4'>Feeling good</span></p>
        <p className='text-gray-500 mt-2'>View all 1,000 comments</p>
      </div>
      <div className='gap-2 py-2 flex justify-between w-full border border-gray-800 rounded-md mt-3'>
        <input className='bg-transparent w-full border-none outline-none px-5 focus:outline-none text-xs focus:border-b-2 focus:border-blue-400' type="text" placeholder="Add a comment..." />
        <a className='text-blue-400 cursor-pointer mr-4 text-xs hover:text-gray-200'>Send</a>
      </div>
    </div>
  )
}

export default PostFooter