import React, { useEffect } from 'react'
import './common.css'
import WrippleButton from '../buttons/wrippleButton/WrippleButton'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { variantsForText } from '../animation/textAnimations/textAnim'
import { variantForSvg } from '../animation/svgHider/svgHideAnim'
import { Helmet } from 'react-helmet-async'
import ContactModel from '../model/ContactModel'


const DropDownController = (props) => {
    const [model, setModel] = useState(false);
    const { ref: titleRef, inView: titleRefStatus } = useInView()
    const { ref: paraRef, inView: paraStatus } = useInView()
    const { ref: buttonRef, inView: buttonStatus } = useInView()
    const { ref: svgRef, inView: svgRefStatus } = useInView()
    const { ref: smallHeadingRef, inView: smallHeadingStatus } = useInView()
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>{props.pageTitle}</title>
                <meta name='description' content={props.descriptionContent} />
                <meta name='robots' content='index, follow' />
            </Helmet>
            <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: [.5, .6, 1], y: 0 }} transition={{ ease: "easeIn" }} exit={{ opacity: 0, y: -100 }} className='drop-down-body  h-fit w-full   flex flex-col    relative font-poppins '>
                <div className="background-seducer absolute w-full h-full bg-white/75"></div>
                <div className="home-overlay  h-fit absolute top-0 px-[15%]">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
                <div className="drop-down-header z-[3]  relative flex justify-center items-center gap-10 px-[10%]">

                    <div className="drop-down-heading-holder  lg:h-fit   justify-center py-[20%]   flex  flex-col gap-5 ">
                        <motion.div variants={variantsForText} initial={'hide'} animate={titleRefStatus ? 'show' : 'hide'} transition={variantsForText.listTransition} ref={titleRef} className="drop-down-heading  font-semibold text-base  md:text-lg lg:text-4xl text-inoa-red">{props.heading}</motion.div>
                        <motion.div variants={variantsForText} initial={'hide'} animate={paraStatus ? 'show' : 'hide'} transition={variantsForText.listTransition} ref={paraRef} className="drop-down-para  text-neutral-700  text-sm md:text-lg ">
                            {props.para}
                        </motion.div>
                        <div className="demo-button z-[888] capitalize">
                            <ContactModel />

                        </div>
                    </div>
                    <div variants={variantForSvg} initial={'hide'} animate={svgRefStatus ? 'show' : 'hide'} transition={variantForSvg.svgTransition} ref={svgRef} className="svg-section  w-full hidden lg:block justify-center">
                        <img src={props.svgSrc} alt="" width={'60%'} />
                    </div>
                </div>

                <div className="flex flex-col  z-[2]  justify-center items-center gap-2 bg-gray-200 pt-5">
                    <div ref={smallHeadingRef} variants={variantsForText} initial={'hide'} animate={smallHeadingStatus ? 'show' : 'hide'} transition={variantsForText.listTransition} className="lg:w-[50%] text-sm px-5 lg:px-0 text-center lg:text-xl py-10  flex  font-semibold text-inoa-red tracking-wider capitalize">
                        {props.smallHeading}
                    </div>
                    <section className="flex  bg-gray-200 flex-wrap justify-center items-center gap-10 w-full px-[10%] py-[5%]   ">
                        {
                            props.services.map((service, index) => (
                                <div key={index} className="w-full cursor-pointer hover:scale-105 transition-all
                             ease-in-out  rounded-md    ">
                                    <div className="p-10 rounded-md shadow-md bg-white  drop-sec  relative ">

                                        <div className="text-lg text-inoa-red tracking-wide font-bold mb-2 ">{service.title}</div>
                                        <div className="text-sm text-gray-700 tracking-wide   leading-6">{service.description}</div>
                                    </div>
                                </div>
                            ))
                        }

                    </section>
                </div>

            </motion.div>
        </>
    )
}

export default DropDownController