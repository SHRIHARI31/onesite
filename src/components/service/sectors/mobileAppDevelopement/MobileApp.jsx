import React from 'react'
import '../../service.css'
import { useInView } from 'react-intersection-observer';
import { variantsForText } from '../../../animation/textAnimations/textAnim';
import {motion} from 'framer-motion'
import { variantsForCard } from '../../../animation/cardAnimations/cardAnim';
const MobileApp = () => {
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
    <span>Mobile App Development</span>
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
   WizInoa offers cutting-edge mobile applications with our expert mobile app development services. We leverage the latest technologies to create seamless and feature-rich apps that cater to your business needs.
  </motion.div>
  <section className="service-holder  w-full">
    <motion.div ref={cardOneRef} className="service-box-one w-full  lg:w-[38%]" variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardOneStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">iOS App Development</div>
      <div className="service-box-para">Unlock the potential of the Apple ecosystem with our iOS app development services. We create sleek and intuitive iOS applications tailored to your specifications.</div>
    </motion.div>
    <motion.div className="service-box-two w-full  lg:w-[60%]" ref={cardTwoRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardTwoStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">Android App Development</div>
      <div className="service-box-para">Reach a wider audience with our Android app development services. We design and develop scalable and user-friendly Android applications for diverse business needs.</div>
    </motion.div>
    <motion.div className="service-box-three w-full lg:w-full" ref={cardThreeRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardThreeStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition} >
      <div className="service-box-heading">Cross-Platform App Development</div>
      <div className="service-box-para">Optimize development time and costs with our cross-platform app development solutions. We use frameworks like React Native to build apps that work seamlessly across multiple platforms.</div>
    </motion.div>
    <motion.div className="service-box-four w-full    lg:w-[38%]" ref={cardFourRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardFourStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">Mobile App UI/UX Design</div>
      <div className="service-box-para">Enhance user satisfaction and engagement with our mobile app UI/UX design services. We focus on creating visually appealing and intuitive interfaces for a delightful user experience.</div>
    </motion.div>
    <motion.div className="service-box-five w-full lg:w-[60%]" ref={cardFiveRef}
      variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardFiveStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}
    >
      <div className="service-box-heading">Mobile App Maintenance</div>
      <div className="service-box-para">Ensure the smooth operation of your mobile apps with our maintenance services. We provide ongoing support, updates, and troubleshooting to keep your apps running flawlessly.</div>
    </motion.div>
  </section>
</div>

  )
}

export default MobileApp