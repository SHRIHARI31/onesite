import React from 'react'
import HireUs from './svg/HireUs'
import './contactPage.css'
import Card from './cards/Card'
import Marquee from 'react-fast-marquee'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router'

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const recruitData = [
        { jobTitle: 'React Developer', jobDescription: 'Develop responsive user interfaces using React.js and integrate with back-end services. Collaborate with the team to define and implement innovative solutions for the product direction.', button: 'Join Us' },
        { jobTitle: 'Digital Marketing', jobDescription: 'Plan and execute digital marketing campaigns, including SEO, SEM, email marketing, and social media advertising. Analyze and report on campaign performance to optimize strategies.', button: 'Join Us' },
        { jobTitle: 'MERN Stack Developer', jobDescription: 'Build scalable and efficient web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Collaborate with cross-functional teams to define, design, and ship new features.', button: 'Join Us' },
        { jobTitle: 'Human Resource ', jobDescription: 'Manage and coordinate HR functions, including recruitment, onboarding, employee relations, and performance management. Develop and implement HR policies and procedures.', button: 'Join Us' },
        { jobTitle: 'Django Developer', jobDescription: 'Design and implement server-side logic using Django framework. Collaborate with front-end developers to integrate user-facing elements using server-side logic.', button: 'Join Us' },
        { jobTitle: 'DevOps', jobDescription: 'Automate, optimize, and streamline the deployment and operations processes. Collaborate with development and IT teams to manage code releases and resolve issues in production.', button: 'Join Us' },
        { jobTitle: 'Full Stack Developer', jobDescription: 'Develop and maintain both front-end and back-end components of web applications. Collaborate with cross-functional teams to deliver high-quality software solutions.', button: 'Join Us' },
    ];

    return (
        <div className='bg-blue-100 relative '>
            <Helmet>
                <title>WizInoa: Job Recruitment</title>
                <meta name='description' content="Explore job recruitment opportunities at WizInoa. Join our team or find the perfect candidate for your organization." />
            </Helmet>

            <div className="contact-wiz-inoa w-full contact-page-body pt-11  font-poppins flex justify-center flex-wrap items-center md:gap-10    ">
                <div className="recruitment flex flex-col justify-center  md:w-[50%] gap-2 py-[15%]">
                    <div className="rec-heading text-lg text-center text-inoa-red mb-6  font-bold  capitalize md:text-3xl tracking-wide ">
                        WizInoa recruit
                    </div>
                    <div className="flex flex-col justify-center gap-4  bg-white p-10 rounded-md shadow-inner shadow-neutral-600/70">
                        <div className="wiz-small-heading md:text-lg  font-semibold tracking-wide  text-neutral-500">
                            Join Our Team at WizInoa!
                        </div>
                        <div className="rec-para text-neutral-600 text-sm md:text-base ">
                            At WizInoa, we are more than just an IT company - we are a team of innovators and problem-solvers dedicated to the digital transformation of businesses. We are currently looking for talented individuals who share our passion for technology and innovation.
                        </div>
                    </div>
                </div>
                <div className="w-[200px] md:w-[250px] svg-section py-5 md:py-0">
                    <HireUs />
                </div>

            </div>
            <div className="sec-two relative flex flex-col justify-center items-center h-fit mb-10">
                <div className='text-lg text-center text-inoa-red mb-6  font-bold  capitalize md:text-3xl tracking-wide '>We are hiring</div>
                <div className=" flex flex-wrap justify-center items-center  gap-5 ">
                    {recruitData.map((data, id = 0) => (
                        <Card  {...data} key={id + 1}></Card>
                    ))}

                </div>

            </div>

            <Outlet />

        </div>
    )
}

export default ContactPage