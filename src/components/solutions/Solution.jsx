import React from 'react'
import './solutions.css'

import SolutionCard from './solutionCard/SolutionCard'
import SolutionAnim from './anim/lottie/SolutionAnim'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { variantsForText } from '../animation/textAnimations/textAnim'
import { variantForSvg } from '../animation/svgHider/svgHideAnim'


const Solution = () => {
    const { ref: headingRef, inView: headingStatus } = useInView();
    const { ref: subHeadingRef, inView: subHeadingStatus } = useInView()
    const { ref: paraRef, inView: paraStatus } = useInView()
    const { ref: svgRef, inView: svgStatus } = useInView()
    const { ref: boxOneRef, inView: boxOneStatus } = useInView();
    const { ref: boxTwoRef, inView: boxTwoStatus } = useInView();
    const { ref: boxThreeRef, inView: boxThreeStatus } = useInView();
    const { ref: boxFourRef, inView: boxFourStatus } = useInView();
    const { ref: boxFiveRef, inView: boxFiveStatus } = useInView();
    const { ref: boxSixRef, inView: boxSixStatus } = useInView();
    const { ref: boxSevenRef, inView: boxSevenStatus } = useInView();
    const { ref: boxEightRef, inView: boxEightStatus } = useInView();
    const { ref: boxNineRef, inView: boxNineStatus } = useInView();

    const solutionData = [
        {
            name: "ERP",
            className: "md:hover-lg",
            ref: boxOneRef,
            inView: boxOneStatus,
            variantsForCard: {
                hide: { opacity: 0, y: -50 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], y: 0 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }

        },
        {
            name: "CRM",
            className: "md:hover-lg",
            ref: boxTwoRef,
            inView: boxTwoStatus,
            variantsForCard: {
                hide: { scale: .2, opacity: 0 },
                show: { scale: [1], opacity: [.3, .4, .5, .6, .8, 1] },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: "HR software",
            className: "md:hover-lg",
            ref: boxThreeRef,
            inView: boxThreeStatus,
            variantsForCard: {
                hide: { opacity: 0, y: 50 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], y: 0 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: "Enterprise Application",
            className: "md:hover-lg",
            ref: boxFourRef,
            inView: boxFourStatus,
            variantsForCard: {
                hide: { opacity: 0, y: -50 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], y: 0 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: "Data Analysis",
            className: "md:hover-lg",
            ref: boxFiveRef,
            inView: boxFiveStatus,
            variantsForCard: {
                hide: { scale: .2, opacity: 0 },
                show: { scale: [1], opacity: [.3, .4, .5, .6, .8, 1] },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: "IT Service Management",
            className: "md:hover-lg",
            ref: boxSixRef,
            inView: boxSixStatus,
            variantsForCard: {
                hide: { opacity: 0, y: 50 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], y: 0 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: "E-commerce",
            className: "md:hover-lg",
            ref: boxSevenRef,
            inView: boxSevenStatus,
            variantsForCard: {
                hide: { opacity: 0, y: -50 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], y: 0 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: "Supply Chain",
            className: "md:hover-lg",
            ref: boxEightRef,
            inView: boxEightStatus,
            variantsForCard: {
                hide: { scale: .2, opacity: 0 },
                show: { scale: [1], opacity: [.3, .4, .5, .6, .8, 1] },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: "Web portals",
            className: "md:hover-lg",
            ref: boxNineRef,
            inView: boxNineStatus,
            variantsForCard: {
                hide: { opacity: 0, y: 50 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], y: 0 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
    ];

    return (
        <div className='solution-body w-full' id='solution'>
            <div className="solution-overlay px-[20%] absolute w-full h-full bg-slate-200/80 top-0 ">




            </div>
            <div className="solution-content-section relative">

                <div className="solution-content-holder w-full">
                    <motion.div className="solution-heading   absolute-div" ref={headingRef} variants={variantsForText} initial={'hide'} animate={headingStatus ? 'show' : 'hide'}
                        transition={variantsForText.listTransition}>
                        <div className="flex flex-col justify-center items-center py-10">
                            <span className='span-one opacity-30'>Soluti<span className='o'>o</span>ns</span>
                            <span className="technology-heading-two pt-6">Solutions</span>
                        </div>
                    </motion.div>
                    <motion.div className="solution-sub-heading" ref={subHeadingRef} variants={variantsForText} initial={'hide'}
                        animate={subHeadingStatus ? 'show' : 'hide'} transition={variantsForText.listTransition}>
                        Collaborative Approach,Tailored Solution, Exceptional Result.
                    </motion.div>
                    <motion.div className="solution-para" ref={paraRef} variants={variantsForText} initial={'hide'}
                        animate={paraStatus ? 'show' : 'hide'} transition={variantsForText.listTransition}>
                        Our collaborative approach involves understanding your unique needs to provide tailored solutions that deliver exceptional results, guided by expertise, open communication, and a commitment to your success.
                    </motion.div>

                </div>
                <ul className="solution-items">
                    {solutionData.map((item, id) => {
                        return (
                            <SolutionCard {...item} key={id} />
                        )
                    })}

                </ul>
                <motion.div className="soln-anim hidden lg:block p-10 absolute top-[40%] right-0 w-[500px]" ref={svgRef} variants={variantForSvg}
                    initial={'hide'} animate={svgStatus ? 'show' : 'hide'} transition={variantForSvg} >
                    <SolutionAnim />
                </motion.div>
            </div>
        </div >
    )
}

export default Solution