import React from 'react'

import './software.css'
import DropDownController from '../../DropDownController'

const Software = () => {
  const softwareDevProps = {
    pageTitle: "Wizinoa: Top Software Development Company in Madurai",
    discriptionName: "service offers",
    descriptionContent: "Choose Wizinoa, the leading software development agency in Madurai, for the best software development services. Trust our expertise for your projects.",
    heading: 'Software Development',
    para: 'WizInoa is a forward-thinking software development company that specializes in creating innovative and user-friendly software solutions for web and real-time business applications.',
    svgSrc: 'https://www.svgrepo.com/show/474936/parallel-tasks.svg',
    smallHeading: 'Our software development services encompass a wide range of technologies and platforms, delivering tailored solutions that streamline processes, enhance efficiency, and drive innovation for your business.',
    services: [
      { title: 'Custom Software Development', description: 'Uplift your digital business to new levels of triumph with our high-tech software solutions to achieve desired outcomes.' },
      { title: 'Software Development Outsourcing', description: 'Discover the untapped potential of our software outsourcing services, delivered by our skilled global talents, to expedite your projects and disentangle critical challenges.' },
      { title: 'Enterprise Software Development', description: 'Optimize the key facets of your organization with our enterprise software solutions encompassing API integration and legacy software modernization to propel your success in the global arena.' },
      { title: 'Software Product Outsourcing', description: 'Build a game-changing software product with our end-to-end solutions and agile methodology to gain a competitive edge.' },
      { title: 'Software Integration Assurance', description: 'Embark on a journey to the digital era with our customized software integration services, spanning from cutting-edge architectural design to flawless execution, guaranteeing a seamless transition that propels your business forward.' },
    ],
  };


  return (
    <div >
      <DropDownController {...softwareDevProps} />
    </div>
  )
}

export default Software