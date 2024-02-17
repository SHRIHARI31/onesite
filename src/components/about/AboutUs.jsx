import React from 'react'
import './aboutUs.css'
import logo from '../navbar/img/companyLogo.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { variantsForText } from '../animation/textAnimations/textAnim'
import { variantsForList } from '../animation/slideAnimations/listAnim'
import { variantForSvg } from '../animation/svgHider/svgHideAnim'
import { useState } from 'react'



const AboutUs = () => {
    const { ref: headingRef, inView: headingStatus } = useInView()
    const { ref: paraRef, inView: paraStatus } = useInView()
    const { ref: bigParaRef, inView: bigParaStatus } = useInView()
    const { ref: bigParaRefTwo, inView: bigParaStatusTwo } = useInView()
    const { ref: bigParaRefThree, inView: bigParaStatusThree } = useInView()
    const { ref: svgRef, inView: svgStatus } = useInView()
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='about-us-body tracking-wide overflow-hidden  relative font-poppins px-[5%] md:px-[10%] flex  justify-center items-center flex-col  gap-5 py-[10%] '>
            <div className="about-us-overlay absolute w-full z-0 h-full bg-white/80"></div>
            <div
                className="about-us-header flex flex-col gap-10 z-[3]">
                <motion.div className="about-us-heading text-center text-xl md:text-3xl lg:text-5xl text-inoa-red font-semibold" ref={headingRef} variants={variantsForText} initial={'hide'} animate={headingStatus ? 'show' : 'hide'}
                    transition={variantsForText.listTransition}>About Us</motion.div>

            </div>
            <div className="about-us-stomach flex justify-around flex-wrap z-[3]  py-[1%]">
                <div className="about-us-content  flex flex-col gap-5 md:w-[50%]  ">
                    <motion.div ref={bigParaRef} variants={variantsForList} initial={'hide'} animate={bigParaStatus ? 'show' : 'hide'}
                        transition={variantsForList.listTransition} className="about-us-heading  max-sm:text-base text-xl  px-5 text-inoa-red rounded-md py-4 shadow-md  bg-white    ">
                        Engaging New Audiences Through Smart Approach
                        The startup story behind WizInoa, a name you must know, began with a spark of an idea, igniting wonders in our lives.
                    </motion.div>
                    <motion.div ref={bigParaRefTwo} variants={variantForSvg} initial={'hide'} animate={bigParaStatusTwo ? 'show' : 'hide'}
                        transition={variantsForList.listTransition} className=" text-neutral-800  px-5 tracking-wide">
                        <button onClick={() => setIsOpen(!isOpen)} className={` text-sm  text-center  lg:text-xl hover:scale-105 shadow-md ${isOpen ? ' bg-white text-inoa-red' : 'bg-inoa-red text-white'}   w-[200px]  py-5 rounded-lg   transition-all duration-300 relative`}>Our vision
                            <span className='absolute right-4'>+</span></button>
                        <motion.div className={`vision py-3 px-4 transition-all  shadow-md  duration-200 text-left ${isOpen ? 'block' : 'hidden'} text-white bg-inoa-red my-5 rounded-lg`}>
                            In the heart of the digital era, WizInoa, an IT company, envisions a world where technology and innovation harmoniously blend. We strive to be the beacon that guides businesses through the labyrinth of the digital world. Our mission is to empower businesses, big and small, with cutting-edge software solutions
                        </motion.div>
                    </motion.div>
                    
                    <motion.div ref={bigParaRefThree} variants={variantsForList} initial={'hide'} animate={bigParaStatusThree ? 'show' : 'hide'}
                        transition={variantsForList.listTransition} className="about-us-heading  max-sm:text-base text-xl  f px-5 text-white rounded-md py-4 shadow-md   bg-neutral-600    ">
                        At WizInoa, we don’t just dream of the future, we build it. Our vision is to be a beacon of innovation, leading the way in the ever-evolving landscape of information technology
                    </motion.div>
                </div>
                <div className="about-us-img   justify-center max-sm:p-5  items-center  md:w-[50%] md:flex">
                    <motion.div ref={svgRef} variants={variantForSvg} initial={'hide'} animate={svgStatus ? 'show' : 'hide'}
                        transition={variantForSvg.svgTransition}
                        className="svg-div  bg-neutral-600  max-sm:w-[60%] p-5 rounded-2xl w-[300px]">
                        <img src={logo} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs