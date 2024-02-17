import React, { useEffect, useRef } from 'react'
import './service.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Webdevelopement from './sectors/WebDevelopment/Webdevelopement';
import MobileApp from './sectors/mobileAppDevelopement/MobileApp';
import Training from './sectors/Training/Training';
import Metaverse from './sectors/metaverse/Metaverse';
import Web3 from './sectors/web3/Web3';
import COnsulting from './sectors/consulting/COnsulting';
import Digital from './sectors/digital/Digital';
import Marketing from './sectors/marketing/Marketing';
import { useInView } from 'react-intersection-observer';
import { variantsForText } from '../animation/textAnimations/textAnim';
import { variantsForList } from '../animation/slideAnimations/listAnim';
import { variantsForCard } from '../animation/cardAnimations/cardAnim';
const Service = () => {
  const { ref: myRef, inView: elementVisible } = useInView();
  const { ref: myRefTwo, inView: elementVisibleTwo } = useInView();
  const { ref: myRefThree, inView: elementVisibleThree } = useInView()
  const { ref: listRef, inView: elementVisibleList } = useInView()
  const { ref: listTwoRef, inView: listTwoStatus } = useInView()
  const { ref: myListThree, inView: listThreeStatus } = useInView()
  const { ref: myRefFour, inView: listFourStatus } = useInView()
  const { ref: listFiveRef, inView: listFiveStatus } = useInView()
  const { ref: listSixRef, inView: listSixStatus } = useInView()
  const { ref: listSevenRef, inView: listSevenStatus } = useInView()

  /*card refs */

  const { ref: cardOneRef, inView: cardOneStatus } = useInView()
  const { ref: cardTwoRef, inView: cardTwoStatus } = useInView()
  const { ref: cardThreeRef, inView: cardThreeStatus } = useInView()
  const { ref: cardFourRef, inView: cardFourStatus } = useInView()
  const { ref: cardFiveRef, inView: cardFiveStatus } = useInView()

  /*------------------*/
  const [state, setState] = useState(1);
  const stateController = (num) => {
    setState(num);
  }




  return (
    <>
      <div className='service-body' id='service'
      >
        <div className="md:service-overlay">


        </div>
        <div className="services-domain-one">
          <motion.div className={`title-card`} ref={myRef}
            variants={variantsForText}
            initial={variantsForText.hide}
            animate={elementVisible ? variantsForText.show : variantsForText.hide}
            transition={variantsForText.textTransition}
          >

            <div className="services-heading w-full">Services </div>
            <div className="services-title w-full">No Matter Whatever Your Need, We Build</div>
          </motion.div>
          <ul className='services-ul  w-full' >
            <motion.li ref={listRef} variants={variantsForList} initial={variantsForList.hide} animate={elementVisibleList ? variantsForList.show : variantsForList.hide}
              transition={variantsForList.listTransition}
            ><button className={state === 1 ? 'text-inoa-red duration-200 ease-in-out transition-all' : ''} onClick={() => stateController(1)}>Software Development</button></motion.li>
            <motion.li ref={listTwoRef} variants={variantsForList} initial={variantsForList.hide} animate={listTwoStatus ? variantsForList.show : variantsForList.hide}
              transition={variantsForList.listTransition}><button className={state === 3 ? 'text-inoa-red duration-200 ease-in-out transition-all' : ''} onClick={() => stateController(3)}>Mobile App Development</button></motion.li>
            <motion.li ref={myListThree} variants={variantsForList} initial={variantsForList.hide} animate={listThreeStatus ? variantsForList.show : variantsForList.hide}
              transition={variantsForList.listTransition} ><button className={state === 4 ? 'text-inoa-red  duration-200 ease-in-out transition-all' : ''} onClick={() => stateController(4)} >Training and Consulting</button></motion.li>
            <motion.li ref={myRefFour} variants={variantsForList} initial={'hide'} animate={listFourStatus ? 'show' : 'hide'} transition={variantsForList.listTransition} ><button className={state === 6 ? 'text-inoa-red duration-200 ease-in-out transition-all' : ''} onClick={() => stateController(6)}>Web3 Development</button></motion.li>
            <motion.li ref={listFiveRef} variants={variantsForList} initial={'hide'} animate={listFiveStatus ? 'show' : 'hide'} transition={variantsForList.listTransition}><button className={state === 7 ? 'text-inoa-red  duration-200 ease-in-out transition-all' : ''} onClick={() => stateController(7)}>IT Consulting</button></motion.li>

            <motion.li ref={listSevenRef} variants={variantsForList} initial={'hide'} animate={listSevenStatus ? 'show' : 'hide'} transition={variantsForList.listTransition}><button className={state === 9 ? 'text-inoa-red duration-200 ease-in-out transition-all' : ''} onClick={() => stateController(9)}>Digital Marketing</button>
            </motion.li>
          </ul>
        </div>
        <div className={`services-domain-two ${state === 1 ? 'visible' : 'hidden'}`}>
          <motion.div className="domain-two-heading  w-full" ref={myRefTwo} variants={variantsForText} initial={variantsForText.hide}
            animate={elementVisibleTwo ? variantsForText.show : variantsForText.hide}
            transition={variantsForText.textTransition}>
            <span>Software Development</span>
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
            Elevate your digital endeavors with WizInoa's comprehensive software development services. We cover a diverse range of technologies and platforms, delivering tailored solutions to streamline processes, enhance efficiency, and drive innovation for your business.
          </motion.div>
          <section className="service-holder  w-full">
            <motion.div ref={cardOneRef} className="service-box-one w-full  lg:w-[38%]" variants={variantsForCard} initial={variantsForCard.hide}
              animate={cardOneStatus ? 'show' : 'hide'}
              transition={variantsForText.listTransition}>
              <div className="service-box-heading">Custom Software Development</div>
              <div className="service-box-para">Elevate your digital business to new heights of success with our cutting-edge software solutions, tailored to achieve your desired outcomes.</div>
            </motion.div>
            <motion.div className="service-box-two w-full  lg:w-[60%]" ref={cardTwoRef} variants={variantsForCard} initial={variantsForCard.hide}
              animate={cardTwoStatus ? 'show' : 'hide'}
              transition={variantsForText.listTransition}>
              <div className="service-box-heading">Software Development Outsourcing</div>
              <div className="service-box-para">Explore the untapped potential of our software outsourcing services, delivered by our skilled global talents, to accelerate your projects and overcome critical challenges.</div>
            </motion.div>
            <motion.div className="service-box-three w-full lg:w-full" ref={cardThreeRef} variants={variantsForCard} initial={variantsForCard.hide}
              animate={cardThreeStatus ? 'show' : 'hide'}
              transition={variantsForText.listTransition} >
              <div className="service-box-heading">Enterprise Software Development</div>
              <div className="service-box-para">Optimize key facets of your organization with our enterprise software solutions, covering API integration and legacy software modernization, to propel your success on the global stage.</div>
            </motion.div>
            <motion.div className="service-box-four w-full    lg:w-[38%]" ref={cardFourRef} variants={variantsForCard} initial={variantsForCard.hide}
              animate={cardFourStatus ? 'show' : 'hide'}
              transition={variantsForText.listTransition}>
              <div className="service-box-heading">Software Product Outsourcing</div>
              <div className="service-box-para">Build a game-changing software product with our end-to-end solutions and agile methodology to gain a competitive edge.</div>
            </motion.div>
            <motion.div className="service-box-five w-full lg:w-[60%]" ref={cardFiveRef}
              variants={variantsForCard} initial={variantsForCard.hide}
              animate={cardFiveStatus ? 'show' : 'hide'}
              transition={variantsForText.listTransition}
            >
              <div className="service-box-heading">Software Integration Assurance</div>
              <div className="service-box-para">Embark on a journey to the digital era with our customized software integration services, spanning from cutting-edge architectural design to flawless execution, guaranteeing a seamless transition that propels your business forward.</div>
            </motion.div>
          </section>
        </div>

        {state === 2 && <Webdevelopement />}
        {state === 3 && <MobileApp />}
        {state === 4 && <Training />}
        {state === 5 && <Metaverse />}
        {state === 6 && <Web3 />}
        {state === 7 && <COnsulting />}
        {state === 8 && <Digital />}
        {state === 9 && <Marketing />}
      </div>
    </>
  )
}

export default Service