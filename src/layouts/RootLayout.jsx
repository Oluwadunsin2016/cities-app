import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div  className="min-h-screen">
           <Navbar />
           {/* <div className="px-4 sm:px-6 py-16"> */}
           <div>
           <Outlet/>
           </div>
           <Footer/>
    </div>
  )
}

export default RootLayout