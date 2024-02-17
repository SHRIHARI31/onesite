import React, { useState } from 'react'
import './portfolio.css'

import TitleTwo from './titleTwo/TitleTwo'
import { motion } from 'framer-motion'

import TitleOne from './titleOne/TitleOne'
import { variantsForText } from '../animation/textAnimations/textAnim'
import { useInView } from 'react-intersection-observer'

const Portfolio = () => {
    const [state, setState] = useState(1)
    const { ref: cardOneRef, inView: cardOneStatus } = useInView()
    const { ref: cardTwoRef, inView: cardTwoStatus } = useInView()
    const { ref: cardThreeRef, inView: cardThreeStatus } = useInView()
    const { ref: cardFourRef, inView: cardFourStatus } = useInView()
    const { ref: cardFiveRef, inView: cardFiveStatus } = useInView()
    const { ref: cardSixRef, inView: cardSixStatus } = useInView()
    return (
        <div className='portfolio-body' id='portfolio'>
            <nav className="portfolio-nav">


            </nav>
            <div className="navigation">
                <div className='nav-item'><button onClick={() => setState(1)} className={`blog-btn ${state === 1 ? 'wrapper' : ''}`}>Achievements</button></div>
                <div className='nav-item'><button onClick={() => setState(2)} className={`blog-btn ${state === 2 ? 'wrapper' : ''}`}>Projects</button></div>
                <div className='nav-item'><button onClick={() => setState(3)} className={`blog-btn ${state === 3 ? 'wrapper' : ''}`}>Why wizInoa ?</button></div>
                
            </div>
            <div className="portfolio-segment-body">

                <div className={`Achievements skewer ${state === 1 ? 'visible' : 'hidden'}`}  >
                    <div className="cards-holder">
                        <motion.div className="cards" variants={variantsForText} initial={'hide'}
                            animate={cardOneStatus ? 'show' : 'hide'} transition={variantsForText.listTransition} ref={cardOneRef}>
                            <img src="https://www.svgrepo.com/show/489667/computer.svg" alt="" className='title-svg' />
                            <div className="title-heading">Software Development</div>
                            <div className="title-para">
                                Our software development services encompass a wide range of technologies and platforms, delivering tailored solutions that streamline processes, enhance efficiency, and drive innovation for your business.
                            </div>
                        </motion.div>
                        <motion.div className="cards" variants={variantsForText} initial={'hide'}
                            animate={cardTwoStatus ? 'show' : 'hide'} transition={variantsForText.listTransition} ref={cardTwoRef}>
                            <img src="https://www.svgrepo.com/show/343854/digital-marketing-promotion-advertising.svg" alt="" className='title-svg' />
                            <div className="title-heading">Digital Marketing</div>
                            <div className="title-para">Our digital marketing services employ cutting-edge strategies to maximize online visibility, engage target audiences, and drive conversion rates. We help businesses build their brand and achieve impactful results in the digital.</div>
                        </motion.div>
                        <motion.div className="cards" variants={variantsForText} initial={'hide'}
                            animate={cardThreeStatus ? 'show' : 'hide'} transition={variantsForText.listTransition} ref={cardThreeRef}
                        >
                            <img src="https://www.svgrepo.com/show/206746/human-cannonball-playground.svg" alt="" className='title-svg' />
                            <div className="title-heading">HR Services</div>
                            <div className="title-para">
                                Our comprehensive HR services cover all aspects of human resources, including recruitment, employee management, payroll, benefits administration, and compliance, enabling businesses to optimize their workforce and foster a productive and engaged work</div>
                        </motion.div>
                        <motion.div className="cards" variants={variantsForText} initial={'hide'}
                            animate={cardFourStatus ? 'show' : 'hide'} transition={variantsForText.listTransition} ref={cardFourRef}>
                            <img src="https://www.svgrepo.com/show/324134/task-list-menu-document.svg" alt="" className='title-svg' />
                            <div className="title-heading">Auditing</div>
                            <div className="title-para">
                                Our auditing services provide a meticulous examination of your financial records, systems, and processes to ensure accuracy, compliance, and identify areas for improvement, offering valuable insights for informed decision-making and growth.
                            </div>
                        </motion.div>
                        <motion.div className="cards" variants={variantsForText} initial={'hide'}
                            animate={cardFiveStatus ? 'show' : 'hide'} transition={variantsForText.listTransition} ref={cardFiveRef}>
                            <img src="https://www.svgrepo.com/show/398447/teacher.svg" alt="" className='title-svg' />
                            <div className="title-heading">
                                Training and Development</div>
                            <div className="title-para">
                                Our training and internship programs offer valuable learning opportunities for individuals to enhance their skills and gain practical experience in various fields, equipping them for successful careers and supporting businesses in nurturing talent.
                            </div>
                        </motion.div>
                        <motion.div className="cards" variants={variantsForText} initial={'hide'}
                            animate={cardSixStatus ? 'show' : 'hide'} transition={variantsForText.listTransition} ref={cardSixRef}>
                            <img src="https://www.svgrepo.com/show/131600/certificate.svg" alt="" className='title-svg' />
                            <div className="title-heading">Certification Courses</div>
                            <div className="title-para">
                                Certification Courses
                                Certified courses include Soft Skills, Leadership Training, Aptitude Training, and Table Etiquettes. Enhance your expertise with these valuable programs, recognized for their quality and relevance. Boost your career prospects today!</div>
                        </motion.div></div>

                </div>


                {
                    state === 2 ? <TitleOne /> : ""
                }
                {
                    state === 3 ? <TitleTwo /> : ""
                }
               
                {
                    state === 5 ? <TitleFour /> : ""
                }

            </div>



        </div>
    )
}

export default Portfolio