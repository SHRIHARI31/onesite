import React, { useContext } from 'react'
import '../absoluter.css'
import { useState } from 'react'
import { TogglerContext } from '../navcontext/navContext'
import Subnav from './Subnav'


const SideBar = () => {

    const {state,setState} = useContext(TogglerContext)
    
    return (
        <div className={`side-bar ${state ? 'visible' : 'hidden'}`}>
            <div className="closer " onClick={() => {
                setState(!state)
            }}>
                <img src="https://www.svgrepo.com/show/273966/close.svg" alt="" className='close-img' />    
            </div>
            <Subnav/>
        </div>
    )
}

export default SideBar