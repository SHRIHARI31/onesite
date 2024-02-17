import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router'
import FooterInput from '../components/footer/footerinput/FooterInput'
import Whatsapp from '../components/home/svg/Whatsapp'
import './Layout.css'
import BottomFooter from '../components/footer/bottomFooter/BottomFooter'

const Layout = () => {


    return (
        <div className='layout-body'>
            <Navbar />
            <Outlet />
            <Footer />
            <FooterInput />
            <BottomFooter />
            <Whatsapp />
        </div>
    )
}//we can put any component in top of the Outlet it will render the component to the virtual dom

export default Layout  //exporting for routing