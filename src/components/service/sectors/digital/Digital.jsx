import React from 'react'
import '../../service.css'
import { useInView } from 'react-intersection-observer';
import { variantsForText } from '../../../animation/textAnimations/textAnim';
import {motion} from 'framer-motion'
import { variantsForCard } from '../../../animation/cardAnimations/cardAnim';
const Digital = () => {
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
    <span>Digital Transformation Services</span>
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
    Transform your business with cutting-edge digital solutions from WizInoa. Our digital transformation services leverage advanced technologies to enhance efficiency, streamline processes, and propel your organization into the future.
  </motion.div>
  <section className="service-holder  w-full">
    <motion.div ref={cardOneRef} className="service-box-one w-full  lg:w-[38%]" variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardOneStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">Strategic Planning</div>
      <div className="service-box-para">Craft a roadmap for success with WizInoa's strategic planning services. We align digital initiatives with business objectives for a seamless transformation journey.</div>
    </motion.div>
    <motion.div className="service-box-two w-full  lg:w-[60%]" ref={cardTwoRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardTwoStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">Technology Integration</div>
      <div className="service-box-para">Integrate the latest technologies into your operations with WizInoa. We facilitate smooth technology transitions to enhance your business capabilities.</div>
    </motion.div>
    <motion.div className="service-box-three w-full lg:w-full" ref={cardThreeRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardThreeStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition} >
      <div className="service-box-heading">Data Analytics</div>
      <div className="service-box-para">Unlock actionable insights with WizInoa's data analytics services. Leverage data to make informed decisions and drive innovation in your digital transformation journey.</div>
    </motion.div>
    <motion.div className="service-box-four w-full    lg:w-[38%]" ref={cardFourRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardFourStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">Change Management</div>
      <div className="service-box-para">Navigate organizational change effectively with WizInoa. Our change management services ensure a smooth transition for your team and stakeholders.</div>
    </motion.div>
    <motion.div className="service-box-five w-full lg:w-[60%]" ref={cardFiveRef}
      variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardFiveStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}
    >
      <div className="service-box-heading">Digital Innovation</div>
      <div className="service-box-para">Drive innovation with WizInoa's digital transformation solutions. Embrace new technologies and stay ahead of the competition in the evolving digital landscape.</div>
    </motion.div>
  </section>
</div>

  )
}

export default Digital