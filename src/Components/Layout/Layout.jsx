import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    
   <div className='sticky -bg-conic-0 top-0'>
  <Navbar />
  <Outlet />
  <Footer />
</div>
  )
}

export default Layout