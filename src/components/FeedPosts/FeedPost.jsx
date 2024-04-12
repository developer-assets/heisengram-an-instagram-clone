import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import img1 from '../../assets/images/img1.png'

const FeedPost = () => {
  return (
    <div>
      <PostHeader />
      <div>
        <img src={img1} alt="User Post" className='rounded' />
      </div>
      <PostFooter />
    </div>
  )
}

export default FeedPost