import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

const PageLayout = ({children}) => {
  const {pathname} = useLocation();


  return (
    <div>
      <div className='flex justify-center'>
        <div>
          {/* SideBar */}
          {pathname !== '/auth' && (
            <div className='w-[60px] md:w-[240px]'>
              <Sidebar />
            </div>
          )}
        </div>
        <div>
          {/* MainPage */}
          <div className='w-[calc(100vw-60px)] md:w-[calc(100vw-240px)]'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageLayout