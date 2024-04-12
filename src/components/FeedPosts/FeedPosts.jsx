import React from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  return (
    <div className='max-w-sm md:max-w-[420px] px-5 py-2 mt-14 mx-auto'>
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </div>
  )
}

export default FeedPosts