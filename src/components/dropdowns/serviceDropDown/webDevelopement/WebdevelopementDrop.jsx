import React, { useEffect } from 'react'
import './web.css'
import DropDownController from '../../DropDownController'

const WebdevelopementDrop = () => {

    const webDevProps = {
        pageTitle: "Expert Web Development Services in Madurai | Wizinoa",
        discriptionName: "service offers",
        descriptionContent: "Wizinoa offers top-notch web development services in Madurai. Partner with our web development agency for professional website solutions.",
        heading: 'Web Development',
        para: 'WizInoa is a forward-thinking web application development company that specializes in creating innovative and user-friendly web and realtime business solutions.',

        svgSrc: 'https://www.svgrepo.com/show/489276/web.svg',
        smallHeading: 'Our Web development services encompass a wide range of technologies and platforms, delivering tailored solutions that streamline processes, enhance efficiency, and drive innovation for your business.',
        services: [
            { title: 'Custom Web Development', description: 'Uplift your digital business to new levels of triumph with our high-tech Web solutions to achieve desired outcomes.' },
            { title: 'Web Development Outsourcing', description: 'Discover the untapped potential of our Web outsourcing services, delivered by our skilled global talents, to expedite your projects and disentangle critical challenges.' },
            { title: 'Enterprise Web Development', description: 'Optimize the key facets of your organization with our enterprise Web solutions encompassing API integration and legacy Web modernization to propel your success in the global arena.' },
            { title: 'Web Product Outsourcing', description: 'Build a game-changing Web product with our end-to-end solutions and agile methodology to gain a competitive edge.' },
            { title: 'Web Integration Assurance', description: 'Embark on a journey to the digital era with our customized Web integration services, spanning from cutting-edge architectural design to flawless execution, guaranteeing a seamless transition that propels your business forward.' },

        ],
    };


    return (
        <div className='drop-down-body '>

            <DropDownController {...webDevProps} />
        </div>
    )
}

export default WebdevelopementDrop