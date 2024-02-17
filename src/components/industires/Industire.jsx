import React from 'react'
import './industrie.css'
import IndustryCard from './card/IndustryCard'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import { variantsForText } from '../animation/textAnimations/textAnim';
import { variantForSvg } from '../animation/svgHider/svgHideAnim'

const Industire = () => {

    const { ref, inView } = useInView();
    const { imgRef, imgInView } = useInView()
    const { ref: boxOneRef, inView: boxOneStatus } = useInView();
    const { ref: boxTwoRef, inView: boxTwoStatus } = useInView();
    const { ref: boxThreeRef, inView: boxThreeStatus } = useInView();
    const { ref: boxFourRef, inView: boxFourStatus } = useInView();
    const { ref: boxFiveRef, inView: boxFiveStatus } = useInView();
    const { ref: boxSixRef, inView: boxSixStatus } = useInView();


    const industriCardData = [
        {
            imgUrl: "https://www.svgrepo.com/show/343884/ecommerce-online-shopping.svg",
            alt: "",
            className: "in-img",
            name: "E-commerce",
            ref: boxOneRef,
            inView: boxOneStatus,
            variantsForCard: {
                hide: { scale: .2, opacity: 0 },
                show: { scale: [1], opacity: [.3, .4, .5, .6, .8, 1] },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }

        },

        {
            imgUrl: "https://www.svgrepo.com/show/302050/settings-tools-and-utensils.svg",
            alt: "",
            className: "in-img",
            name: "Automation software",
            ref: boxTwoRef,
            inView: boxTwoStatus,
            variantsForCard: {
                hide: { scale: .2, opacity: 0 },
                show: { scale: [1], opacity: [.3, .4, .5, .6, .8, 1] },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },

        {
            imgUrl: "https://www.svgrepo.com/show/281186/link-chain.svg",
            alt: "",
            className: "in-img",
            name: "Supply chain",
            ref: boxThreeRef,
            inView: boxThreeStatus,
            variantsForCard: {
                hide: { scale: .2, opacity: 0 },
                show: { scale: [1], opacity: [.3, .4, .5, .6, .8, 1] },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            imgUrl:
                "https://www.svgrepo.com/show/293098/logistics-delivery-warehouse.svg",
            alt: "",
            className: "in-img",
            name: "Logistics software",
            ref: boxFourRef,
            inView: boxFourStatus,
            variantsForCard: {
                hide: { scale: .2, opacity: 0 },
                show: { scale: [1], opacity: [.3, .4, .5, .6, .8, 1] },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
        {
            imgUrl: "https://www.svgrepo.com/show/285872/tv-player-entertainment.svg",
            alt: "",
            className: "in-img",
            name: "Media software",
            ref: boxFiveRef,
            inView: boxFiveStatus,
            variantsForCard: {
                hide: { scale: .2, opacity: 0 },
                show: { scale: [1], opacity: [.3, .4, .5, .6, .8, 1] },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },

        {
            imgUrl: "https://www.svgrepo.com/show/295807/networking-network.svg",
            alt: "",
            className: "in-img",
            name: "Networking",
            ref: boxSixRef,
            inView: boxSixStatus,
            variantsForCard: {
                hide: { scale: .2, opacity: 0 },
                show: { scale: [1], opacity: [.3, .4, .5, .6, .8, 1] },
                listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 }
            }
        },
    ];

    return (
        <div className='industire-body relative' id='industry'>
            <div className="absolute w-full h-full top-0 left-0  bg-white/60 z-[0]"></div>
            <motion.div className="industire-topic" ref={ref} variants={variantsForText}
                initial={'hide'} animate={inView ? 'show' : 'hide'} transition={variantsForText.listTransition} >

                <div className="industire-topic-heading inoa-red">Industries</div>

                <div className="industire-sub-heading">Transforming Industries to Become Smarter and Safer</div>
                <div className="industire-para">
                    At wizInoa, We Overcome Some of the World's Biggest Challenges by Building Great Digital Products.
                </div>
            </motion.div>
            <div className="industry-card-body ">

                <div className="industiri-images">

                    {
                        industriCardData.map((item, id) => {
                            return <IndustryCard {...item} key={id} />
                        })
                    }
                </div>

                <motion.img src="https://www.svgrepo.com/show/476818/world-map.svg"

                    className='absolute maps hidden lg:block top-[45%] right-40 w-[400px]' alt="" />

            </div>
        </div>
    )
}

export default Industire