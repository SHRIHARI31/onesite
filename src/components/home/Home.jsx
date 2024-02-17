
import './home.css'
import '../fonts/fonts.css'
import WrippleButton from '../buttons/wrippleButton/WrippleButton'
import TargetAnim from './anim/lottie/TargetAnim'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { variantForSvg } from '../animation/svgHider/svgHideAnim'
import Service from '../service/Service'
import Solution from '../solutions/Solution'
import Technologies from '../technology/Technologies'
import Industire from '../industires/Industire'
import Portfolio from '../portfolio/portfolio'
import Testimonials from '../Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import AboutUs from '../about/AboutUs'
import ContactModel from '../model/ContactModel'
import { variantsForText } from '../animation/textAnimations/textAnim'
import { variantsForList } from '../animation/slideAnimations/listAnim'




const Home = () => {
  const { ref: mySvgRef, inView: mySvgInView } = useInView()
  const { ref: headingRef, inView: myHeadingInView } = useInView()
  const { ref: buttonRef, inView: myButtonInView } = useInView()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Helmet>
        <title>Wizinoa: IT Solutions Partner |Top IT Company in Madurai</title>
      </Helmet>
      <div className='home-body' id='home'>
        <div className="new-overlay  absolute  top-0  bottom-0 left-0 w-full lg:h-screen h-full bg-white/80"></div>
        <div className="header-content" >
          <motion.h1 ref={headingRef} variants={variantsForList} initial={variantsForList.hide} animate={myHeadingInView ? 'show' : 'hide'}
            transition={variantsForList.listTransition}
            className='header-heading'>Cutting-Edge Solutions: IT Solutions, Digital marketing, HR and Auditing services,Training and Developement</motion.h1>
          <motion.div ref={buttonRef} variants={variantsForText} animate={myButtonInView ? 'show' : 'hide'} transition={variantsForList.listTransition} initial={'hide'}><ContactModel /></motion.div>
        </div>
        <motion.div ref={mySvgRef} className="home-anim-content" variants={variantForSvg} initial={variantForSvg.hide} animate={mySvgInView ? variantForSvg.show : variantForSvg.hide} transition={variantForSvg.svgTransition}>
          <TargetAnim />
        </motion.div>

      </div >
      <AboutUs />
      <Service />
      <Solution />
      <Technologies />
      <Industire />
      <Testimonials />
      <Portfolio />


    </>
  )
}

export default Home