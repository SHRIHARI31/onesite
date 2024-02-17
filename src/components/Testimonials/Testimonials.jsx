import React, { useEffect, useState } from 'react'
import './testimonials.css'
import Card from './Card/Card'
import { testiMonialData } from './data/testimonidata'
import CherrUp from './anim/CherrUp'
import Marquee from 'react-fast-marquee'

const Testimonials = () => {


    return (
        <div className='testimonial-div relative '>
            <div className="test-lay absolute w-full h-full top-0 bg-white/70 z-0"></div>
            <div className="heading-div  z-10">
                <h1 className=' md:text-3xl  text-xl lg:text-5xl  font-bold text-inoa-red   py-3 px-5 rounded-md '>Testimonials</h1>
            </div>


            <div className='flex  flex-wrap py-[5%]  justify-around '>
                {testiMonialData.map((item, key = 0) => (
                    <Card {...item} key={key + 1} />
                ))}
            </div>



        </div>
    )
}

export default Testimonials