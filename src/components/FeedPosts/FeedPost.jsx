import React, { useEffect, useState } from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

const FeedPost = ({username, img, pic}) => {
  return (
    <div className='mb-20'>
      <PostHeader username={username} pic={pic} />
      <div>
        <img src={img} alt="User Post" className='rounded object-cover' />
      </div>
      <PostFooter username={username} />
    </div>
  )
}

export default FeedPost