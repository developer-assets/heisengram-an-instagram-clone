import React from 'react'
import FeedPosts from '../../components/FeedPosts/FeedPosts'

const HomePage = () => {
  return (
    <div className='mx-auto max-w-7xl grid lg:grid-cols-3 gap-4'>
      <div className='col-span-2'>
        <FeedPosts />
      </div>

      <div className='hidden lg:flex'>

      </div>
    </div>
  )
}

export default HomePage