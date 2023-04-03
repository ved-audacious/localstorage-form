import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Navbar'


const Mainpage = () => {
  return (
    <div>
      <div>
      <Header/>
      <Outlet/>
      <Footer/>
      
      </div>
    </div>
  )
}

export default Mainpage
