import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop'

const Layout = () => {
  return (
    
   <div className='sticky -bg-conic-0 top-0'>
   <ScrollToTop />
  <Navbar />
  <Outlet />
  <Footer />
</div>
  )
}

export default Layout