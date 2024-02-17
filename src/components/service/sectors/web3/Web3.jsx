import React from 'react'
import '../../service.css'
import { useInView } from 'react-intersection-observer';
import { variantsForText } from '../../../animation/textAnimations/textAnim';
import {motion} from 'framer-motion'
import { variantsForCard } from '../../../animation/cardAnimations/cardAnim';
const Web3 = () => {
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
    <span>Web3 Development</span>
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
    Wizinoa specializes in Web3 development, harnessing the power of decentralized technologies. Our services encompass a wide range of blockchain platforms and decentralized applications (DApps) to redefine the digital landscape.
  </motion.div>
  <section className="service-holder  w-full">
    <motion.div ref={cardOneRef} className="service-box-one w-full  lg:w-[38%]" variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardOneStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">Smart Contract Development</div>
      <div className="service-box-para">Empower your applications with secure and autonomous smart contracts. Wizinoa crafts customized smart contract solutions tailored to your specific business needs.</div>
    </motion.div>
    <motion.div className="service-box-two w-full  lg:w-[60%]" ref={cardTwoRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardTwoStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">Decentralized Application (DApp) Development</div>
      <div className="service-box-para">Explore the potential of decentralized applications with Wizinoa. We design and develop innovative DApps that leverage blockchain technology for enhanced security and transparency.</div>
    </motion.div>
    <motion.div className="service-box-three w-full lg:w-full" ref={cardThreeRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardThreeStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition} >
      <div className="service-box-heading">Blockchain Integration</div>
      <div className="service-box-para">Integrate blockchain technology seamlessly into your existing systems. Wizinoa provides expertise in blockchain integration, ensuring interoperability and efficiency.</div>
    </motion.div>
    <motion.div className="service-box-four w-full    lg:w-[38%]" ref={cardFourRef} variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardFourStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}>
      <div className="service-box-heading">Tokenization Solutions</div>
      <div className="service-box-para">Unlock the potential of tokenization with Wizinoa. We offer comprehensive solutions for token creation, management, and utilization within your business ecosystem.</div>
    </motion.div>
    <motion.div className="service-box-five w-full lg:w-[60%]" ref={cardFiveRef}
      variants={variantsForCard} initial={variantsForCard.hide}
      animate={cardFiveStatus ? 'show' : 'hide'}
      transition={variantsForText.listTransition}
    >
      <div className="service-box-heading">Web3 Consulting</div>
      <div className="service-box-para">Navigate the complex world of Web3 with our expert consulting services. Wizinoa provides insights and guidance to help you make informed decisions in the decentralized space.</div>
    </motion.div>
  </section>
</div>

  )
}

export default Web3