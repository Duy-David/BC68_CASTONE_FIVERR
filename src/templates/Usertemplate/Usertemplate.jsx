import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Banner from '../../component/Banner/Banner'
import HomePage from '../../pages/Home/HomePage'

const Usertemplate = () => {
  return (
    <>
        <Header/>
        <main>
          {/*  */}
          <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Usertemplate