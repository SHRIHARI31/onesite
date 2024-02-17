import React from 'react'
import '../../service.css'
import { useInView } from 'react-intersection-observer';
import { variantsForText } from '../../../animation/textAnimations/textAnim';
import {motion} from 'framer-motion'
import { variantsForCard } from '../../../animation/cardAnimations/cardAnim';
const Training = () => {
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
    <span>Training and Consulting</span>
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
    Wizinoa offers comprehensive training and consulting services. Our expertise spans a wide range of technologies and platforms, delivering tailored solutions that streamline processes, enhance efficiency, and drive innovation for your business.
  </motion.div>
  <section className="service-holder  w-full">
    <motion.div ref={cardOneRef} className="service-box-one w-full  lg:w-[38%]" variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardOneStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">Custom Training Programs</div>
      <div className="service-box-para">Elevate your team's skills with our custom training programs. We design and deliver high-tech training solutions to achieve optimal outcomes for your organization.</div>
    </motion.div>
    <motion.div className="service-box-two w-full  lg:w-[60%]" ref={cardTwoRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardTwoStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">Consulting Services</div>
      <div className="service-box-para">Tap into the untapped potential of our consulting services. Our skilled global talents are ready to expedite your projects and disentangle critical challenges, ensuring success in the competitive business landscape.</div>
    </motion.div>
    <motion.div className="service-box-three w-full lg:w-full" ref={cardThreeRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardThreeStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition} >
      <div className="service-box-heading">Enterprise Solutions</div>
      <div className="service-box-para">Optimize the key facets of your organization with our enterprise solutions, including API integration and legacy system modernization. Propel your success in the global arena with Wizinoa.</div>
    </motion.div>
    <motion.div className="service-box-four w-full    lg:w-[38%]" ref={cardFourRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardFourStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">Strategic Outsourcing</div>
      <div className="service-box-para">Leverage Wizinoa's end-to-end solutions and agile methodology for strategic outsourcing. Build a competitive edge with game-changing solutions for your business.</div>
    </motion.div>
    <motion.div className="service-box-five w-full lg:w-[60%]" ref={cardFiveRef}
      variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardFiveStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}
    >
      <div className="service-box-heading">Integration Excellence</div>
      <div className="service-box-para">Embark on a journey to the digital era with Wizinoa's customized integration services. From cutting-edge architectural design to flawless execution, guarantee a seamless transition that propels your business forward.</div>
    </motion.div>
  </section>
</div>

  )
}

export default Training