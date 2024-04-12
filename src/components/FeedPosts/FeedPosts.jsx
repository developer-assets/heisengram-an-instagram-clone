import React from 'react'
import FeedPost from './FeedPost'
import { useState, useEffect } from 'react';

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, []);


  return (
    <div className='max-w-sm md:max-w-[420px] px-5 py-2 mt-14 mx-auto'>
      {isLoading && [0,1,2,3].map((idx) => (
        <div key={idx} className='gap-20 align-top mb-20'>
          <div className='animate-pulse w-full rounded-md'>
            <div className='flex justify-between'>
              <div className='flex justify-start'>
                <div className='h-12 w-12 rounded-full bg-gray-800'></div>
                <div className='h-5 ml-3 mt-[14px] w-32 rounded bg-gray-800'></div>
              </div>
              <div className='h-5 w-16 mt-[14px] rounded bg-gray-800'></div>
            </div>
            <div className='h-96 mt-2 mb-3 rounded-md bg-gray-800'></div>
            <div className='h-8 mt-2 mb-3 rounded-md bg-gray-800'></div>
            <div className='h-8 mt-2 mb-3 rounded-md bg-gray-800'></div>
          </div>
        </div>
      ))}

      {!isLoading && (
        <div>
          <FeedPost username="patrick" img="https://raw.githubusercontent.com/developer-assets/heisengram-an-instagram-clone/main/src/assets/images/img1.png" pic="https://raw.githubusercontent.com/developer-assets/heisengram-an-instagram-clone/main/src/assets/images/img1.png" />
          <FeedPost username="tony" img="https://raw.githubusercontent.com/developer-assets/heisengram-an-instagram-clone/main/src/assets/images/img2.png" pic="https://raw.githubusercontent.com/developer-assets/heisengram-an-instagram-clone/main/src/assets/images/img2.png" />
          <FeedPost username="missy_" img="https://raw.githubusercontent.com/developer-assets/heisengram-an-instagram-clone/main/src/assets/images/img3.png" pic="https://raw.githubusercontent.com/developer-assets/heisengram-an-instagram-clone/main/src/assets/images/img3.png" />
          <FeedPost username="heavens" img="https://raw.githubusercontent.com/developer-assets/heisengram-an-instagram-clone/main/src/assets/images/img4.png" pic="https://raw.githubusercontent.com/developer-assets/heisengram-an-instagram-clone/main/src/assets/images/img4.png" />
        </div>
      )}
    </div>
  )
}

export default FeedPosts