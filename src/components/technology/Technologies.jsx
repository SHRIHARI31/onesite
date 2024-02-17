import React from 'react'
import './technologies.css'
import { useInView } from 'react-intersection-observer'
import TechCard from './techCards/TechCard'
import IndustryAnime from './anim/IndustryAnime'
import { motion } from 'framer-motion'
import { variantsForText } from '../animation/textAnimations/textAnim'
import { variantForSvg } from '../animation/svgHider/svgHideAnim'

const Technologies = () => {
    const { ref: boxOneRef, inView: boxOneStatus } = useInView();
    const { ref: boxTwoRef, inView: boxTwoStatus } = useInView();
    const { ref: boxThreeRef, inView: boxThreeStatus } = useInView();
    const { ref: boxFourRef, inView: boxFourStatus } = useInView();
    const { ref: boxFiveRef, inView: boxFiveStatus } = useInView();
    const { ref: boxSixRef, inView: boxSixStatus } = useInView();
    const { ref: boxSevenRef, inView: boxSevenStatus } = useInView();

    const { ref: bigHeadingRef, inView: bigHeadingView } = useInView();

    const { ref: paraOneRef, inView: paraOneView } = useInView();

    const { ref: paraTwoRef, inView: paraTwoView } = useInView();
    const { ref: svgRef, inView: svgRefView } = useInView();

    const technologies = [
        {
            name: 'Front-end',
            ref: boxOneRef,
            sub: [
                { tech: 'React' },
                { tech: 'Vue' },
                { tech: 'Angular' },
                { tech: 'Svelte' },
            ],
            inView: boxOneStatus,
            variantsForCard: {
                hide: { opacity: 0, scale: 0 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], scale: 1 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: 'Back-end',
            ref: boxTwoRef,
            sub: [
                { tech: 'Node.js' },
                { tech: 'Django' },
                { tech: 'Ruby on Rails' },
                { tech: 'ASP.NET' },

            ],
            inView: boxTwoStatus,
            variantsForCard: {
                hide: { opacity: 0, scale: 0 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], scale: 1 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: 'Mobility',
            ref: boxThreeRef,
            sub: [
                { tech: 'React Native' },
                { tech: 'Flutter' },
                { tech: 'Ionic' },
                { tech: 'Xamarin' },
            ],
            inView: boxThreeStatus,
            variantsForCard: {
                hide: { opacity: 0, scale: 0 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], scale: 1 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: 'Block-chain',
            ref: boxFourRef,
            sub: [
                { tech: 'Ethereum' },
                { tech: 'Hyperledger Fabric' },
                { tech: 'Ripple' },
                { tech: 'EOSIO' },
            ],
            inView: boxFourStatus,
            variantsForCard: {
                hide: { opacity: 0, scale: 0 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], scale: 1 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: 'Devops & ML',
            ref: boxFiveRef,
            sub: [
                { tech: 'Docker' },
                { tech: 'Kubernetes' },
                { tech: 'Jenkins' },
                { tech: 'Ansible' },

            ],
            inView: boxFiveStatus,
            variantsForCard: {
                hide: { opacity: 0, scale: 0 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], scale: 1 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: 'E-commerce & CMS',
            ref: boxSixRef,
            sub: [
                { tech: 'Magento' },
                { tech: 'Shopify' },
                { tech: 'WooCommerce' },
                { tech: 'Drupal' },

            ],
            inView: boxSixStatus,
            variantsForCard: {
                hide: { opacity: 0, scale: 0 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], scale: 1 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            name: 'Full Stack',
            ref: boxSevenRef,
            sub: [
                { tech: 'MEAN Stack' },
                { tech: 'MERN Stack' },
                { tech: 'LAMP Stack' },
                { tech: 'Django Stack' },
                { tech: 'Ruby on Rails Stack' },
            ],
            inView: boxSevenStatus,
            variantsForCard: {
                hide: { opacity: 0, scale: 0 },
                show: { opacity: [.3, .4, .5, .6, .8, 1], scale: 1 },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        }
    ];

    return (
        <div className='technology-body relative' id='technology'>

            <div className="techlay absolute w-full h-full bg-white/70"></div>
            <div className="tech-div relative h-fit    z-[3]">

                <motion.div className="technology-heading pb-5" ref={bigHeadingRef} variants={variantsForText} initial={'hide'}
                    animate={bigHeadingView ? 'show' : 'hide'} transition={variantsForText.listTransition}>
                    <span className='span-one !text-inoa-red'>Technol<span className='o'>o</span>gies we use</span>
                    <span className="technology-heading-two">Technologies we use</span></motion.div>
                <div className='tech-center-div    w-full'>
                    <motion.p className='tech-para text-center w-full' ref={paraOneRef} variants={variantsForText} initial={'hide'}
                        animate={paraOneView ? 'show' : 'hide'} transition={variantsForText.listTransition}>Our collaborative approach involves understanding <br />
                        your unique needs to provide tailored solutions that deliver.</motion.p>
                    <motion.p className='tech-sub-heading text-center w-full' ref={paraTwoRef} variants={variantsForText} initial={'hide'} animate={paraTwoView ? 'show' : 'hide'} transition={variantsForText.listTransition}>
                        Leverage our in-depth technical expertise to bring your stunning ideas to Life.
                    </motion.p>
                </div>
                <div className="technology  relative">
                    <div className="tech-holder overflow-x-hidden">
                        {
                            technologies.map((item, id = 0) => {
                                return <TechCard {...item} key={id + 1} />
                            })
                        }
                    </div>
                    <motion.div className="tech-animator  hidden lg:flex top-[10%]  h-fit absolute right-0 w-[300px] " ref={svgRef} variants={variantForSvg}
                        initial={'hide'} animate={svgRefView ? 'show' : 'hide'} transition={variantForSvg.svgTransition}>
                        <img src="https://www.svgrepo.com/show/474868/idea.svg" alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Technologies
