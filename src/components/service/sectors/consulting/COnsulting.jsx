import React from 'react'
import '../../service.css'
import { useInView } from 'react-intersection-observer';
import { variantsForText } from '../../../animation/textAnimations/textAnim';
import {motion} from 'framer-motion'
import { variantsForCard } from '../../../animation/cardAnimations/cardAnim';
const COnsulting = () => {
  const { ref: myRefTwo, inView: elementVisibleTwo } = useInView();
  const { ref: cardOneRef, inView: cardOneStatus } = useInView()
  const { ref: cardTwoRef, inView: cardTwoStatus } = useInView()
  const { ref: cardThreeRef, inView: cardThreeStatus } = useInView()
  const { ref: cardFourRef, inView: cardFourStatus } = useInView()
  const { ref: cardFiveRef, inView: cardFiveStatus } = useInView()
  const { ref: myRefThree, inView: elementVisibleThree } = useInView()
  return (
    <div className={`services-domain-two`}>
    <motion.div className="domain-two-heading  w-full" ref={myRefTwo} variants={variantsForText} initial={variantsForText.hide}
      animate={elementVisibleTwo ? variantsForText.show : variantsForText.hide}
      transition={variantsForText.textTransition}>
      <span>IT Service and Consulting</span>
      <span>
        <img src="https://www.svgrepo.com/show/528381/map-arrow-right.svg" alt="" className='arrow-right hidden lg:block' />
      </span>
    </motion.div>
    <motion.div className="service-sub-heading  w-full" ref={myRefThree}
      variants={variantsForText}
      initial={variantsForText.hide}
      animate={elementVisibleThree ? variantsForText.show : variantsForText.hide}
      transition={variantsForText.textTransition}
    >
      Wizinoa provides comprehensive IT services and consulting to help businesses thrive in the digital landscape. Our expertise spans a wide range of technologies, ensuring tailored solutions that optimize processes and drive innovation.
    </motion.div>
    <section className="service-holder  w-full">
      <motion.div ref={cardOneRef} className="service-box-one w-full  lg:w-[38%]" variants={variantsForCard} initial={variantsForCard.hide}
        animate={cardOneStatus ? 'show' : 'hide'}
        transition={variantsForText.listTransition}>
        <div className="service-box-heading">Managed IT Services</div>
        <div className="service-box-para">Elevate your business operations with Wizinoa's managed IT services. We provide proactive support, maintenance, and monitoring to ensure optimal performance and security.</div>
      </motion.div>
      <motion.div className="service-box-two w-full  lg:w-[60%]" ref={cardTwoRef} variants={variantsForCard} initial={variantsForCard.hide}
        animate={cardTwoStatus ? 'show' : 'hide'}
        transition={variantsForText.listTransition}>
        <div className="service-box-heading">IT Consulting</div>
        <div className="service-box-para">Gain strategic insights with Wizinoa's IT consulting services. Our experts analyze your IT infrastructure, providing recommendations and solutions to align technology with your business goals.</div>
      </motion.div>
      <motion.div className="service-box-three w-full lg:w-full" ref={cardThreeRef} variants={variantsForCard} initial={variantsForCard.hide}
        animate={cardThreeStatus ? 'show' : 'hide'}
        transition={variantsForText.listTransition} >
        <div className="service-box-heading">Cybersecurity Solutions</div>
        <div className="service-box-para">Protect your business from cyber threats with Wizinoa's cybersecurity solutions. We implement robust security measures and conduct assessments to ensure a resilient IT environment.</div>
      </motion.div>
      <motion.div className="service-box-four w-full    lg:w-[38%]" ref={cardFourRef} variants={variantsForCard} initial={variantsForCard.hide}
        animate={cardFourStatus ? 'show' : 'hide'}
        transition={variantsForText.listTransition}>
        <div className="service-box-heading">Cloud Computing Services</div>
        <div className="service-box-para">Optimize your IT infrastructure with Wizinoa's cloud computing services. We design and implement scalable cloud solutions tailored to your business requirements.</div>
      </motion.div>
      <motion.div className="service-box-five w-full lg:w-[60%]" ref={cardFiveRef}
        variants={variantsForCard} initial={variantsForCard.hide}
        animate={cardFiveStatus ? 'show' : 'hide'}
        transition={variantsForText.listTransition}
      >
        <div className="service-box-heading">IT Infrastructure Management</div>
        <div className="service-box-para">Ensure the efficiency of your IT infrastructure with Wizinoa's management services. We handle hardware, software, and network components for seamless operations.</div>
      </motion.div>
    </section>
  </div>
  
  )
}

export default COnsulting