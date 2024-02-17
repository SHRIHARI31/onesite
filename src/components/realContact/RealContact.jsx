import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import './realContact.css'
const RealContact = () => {

    useEffect(() => {
        scrollTo(0, 0)
    }, [])
    return (
        <div className=' real-contact-body bg-blue-100'>
            <Helmet>
                <title>WizInoa: Contact</title>
                <meta name='description' content="Explore WizInoa's contact information. Get in touch with us for inquiries, support, or collaboration opportunities."></meta>
            </Helmet>
            <motion.div className=" h-full   w-full  bg-blue-400/70 py-10   md:px-6" initial={{ opacity: 0, y: -100 }} animate={{ opacity: [.5, .6, 1], y: 0 }} transition={{ ease: "easeIn" }} exit={{ opacity: 0, y: -100 }}>
                <section className="mb-20 text-center">
                    <div className="mx-auto max-sm:w-[95%] max-w-[700px] md:px-3 " >
                        <h2 className="mb-12 text-2xl md:text-3xl lg:text-5xl font-bold text-white">Contact us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div className="bg-white  hover:bg-white/70 rounded-lg shadow-lg p-6">
                                <h3 className=" max-sm:text-xl text-2xl font-bold mb-4 text-black">Apply for a Job</h3>
                                <form>
                                    <div className="mb-4">
                                        <input type="text" className="w-full rounded border border-black py-2 px-3" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="email" className="w-full rounded border border-black py-2 px-3" placeholder="Your Email" />
                                    </div>
                                    <div className="mb-4">
                                        <textarea className="w-full rounded border border-black py-2 px-3" rows="3" placeholder="Your Message"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-inoa-red text-white py-2 px-4 rounded hover:bg-red-600">Submit</button>
                                </form>
                            </div>

                            <div className="bg-white rounded-lg hover:bg-white/70  shadow-lg p-6">
                                <h3 className="max-sm:text-xl text-2xl font-bold mb-4 text-black">Apply as a Customer</h3>
                                <form>
                                    <div className="mb-4">
                                        <input type="text" className="w-full rounded border border-black py-2 px-3" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="email" className="w-full rounded border border-black py-2 px-3" placeholder="Your Email" />
                                    </div>
                                    <div className="mb-4">
                                        <textarea className="w-full rounded border border-black py-2 px-3" rows="3" placeholder="Your Message"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-inoa-red text-white py-2 px-4 rounded hover:bg-red-600">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>

        </div>
    )
}

export default RealContact