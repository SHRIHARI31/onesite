import React from 'react'
import '../../service.css'
import { useInView } from 'react-intersection-observer';
import { variantsForText } from '../../../animation/textAnimations/textAnim';
import {motion} from 'framer-motion'
import { variantsForCard } from '../../../animation/cardAnimations/cardAnim';
const Marketing = () => {
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
      <span>Digital Marketing Services</span>
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
      Elevate your brand with effective Digital Marketing solutions from WizInoa. Our services are designed to boost your online presence, engage your audience, and drive business growth through strategic marketing strategies.
    </motion.div>
    <section className="service-holder  w-full">
      <motion.div ref={cardOneRef} className="service-box-one w-full  lg:w-[38%]" variants={variantsForCard} initial={variantsForCard.hide}
        animate={cardOneStatus ? 'show' : 'hide'}
        transition={variantsForText.listTransition}>
        <div className="service-box-heading">SEO Optimization</div>
        <div className="service-box-para">Improve your website's visibility on search engines with WizInoa's SEO optimization services. Enhance your rankings and attract organic traffic.</div>
      </motion.div>
      <motion.div className="service-box-two w-full  lg:w-[60%]" ref={cardTwoRef} variants={variantsForCard} initial={variantsForCard.hide}
        animate={cardTwoStatus ? 'show' : 'hide'}
        transition={variantsForText.listTransition}>
        <div className="service-box-heading">Social Media Marketing</div>
        <div className="service-box-para">Connect with your audience on social media platforms through impactful campaigns and strategies crafted by WizInoa's Social Media Marketing experts.</div>
      </motion.div>
      <motion.div className="service-box-three w-full lg:w-full" ref={cardThreeRef} variants={variantsForCard} initial={variantsForCard.hide}
        animate={cardThreeStatus ? 'show' : 'hide'}
        transition={variantsForText.listTransition} >
        <div className="service-box-heading">Content Marketing</div>
        <div className="service-box-para">Drive engagement and build brand authority with compelling content. WizInoa's Content Marketing services ensure your message resonates with your target audience.</div>
      </motion.div>
      <motion.div className="service-box-four w-full    lg:w-[38%]" ref={cardFourRef} variants={variantsForCard} initial={variantsForCard.hide}
        animate={cardFourStatus ? 'show' : 'hide'}
        transition={variantsForText.listTransition}>
        <div className="service-box-heading">Email Marketing</div>
        <div className="service-box-para">Create impactful email campaigns to nurture leads and convert prospects into customers. WizInoa's Email Marketing strategies drive results.</div>
      </motion.div>
      <motion.div className="service-box-five w-full lg:w-[60%]" ref={cardFiveRef}
        variants={variantsForCard} initial={variantsForCard.hide}
        animate={cardFiveStatus ? 'show' : 'hide'}
        transition={variantsForText.listTransition}
      >
        <div className="service-box-heading">Online Advertising</div>
        <div className="service-box-para">Maximize your reach and conversions through targeted online advertising campaigns. WizInoa's expertise ensures optimal results for your digital marketing investment.</div>
      </motion.div>
    </section>
  </div>
  
  )
}

export default Marketing