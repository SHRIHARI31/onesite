import React from 'react'

import './mobile.css'
import DropDownController from '../../DropDownController'
const Mobile = () => {
  const mobileAppDevProps = {
    pageTitle: "Top-Rated App Development Company in Madurai | Wizinoa",
    discriptionName: "service offers",
    descriptionContent: "Wizinoa is a leading application development company in Madurai. Trusted by businesses for creating innovative mobile applications.",
    heading: 'Mobile App Development',
    para: 'WizInoa excels in forward-thinking mobile app development, specializing in creating innovative and user-friendly mobile solutions for diverse platforms and technologies.',
    svgSrc: 'https://www.svgrepo.com/show/452155/android.svg',
    smallHeading: 'Our mobile app development services cover a broad spectrum of technologies, delivering tailored solutions that enhance user experiences, streamline processes, and drive innovation for your business.',
    services: [
      { title: 'Native App Development', description: 'Elevate your digital presence with our high-quality native app solutions, leveraging platform-specific technologies like Swift for iOS and Kotlin/Java for Android.' },
      { title: 'Cross-Platform App Development', description: 'Explore the versatility of cross-platform development with frameworks like React Native or Flutter, ensuring cost-effectiveness and wider audience reach.' },
      { title: 'Enterprise Mobile App Development', description: 'Optimize your business processes with our enterprise mobile app solutions, incorporating API integration and legacy system modernization for global success.' },
      { title: 'Mobile App Outsourcing', description: 'Unleash the potential of our mobile app outsourcing services, delivered by skilled global talents, to accelerate your projects and overcome critical challenges.' },
      { title: 'Mobile App Integration Assurance', description: 'Embark on a digital journey with our customized mobile app integration services, ensuring seamless transitions and cutting-edge architectural design for your business advancement.' },
    ],
  };

  return (
    <div>
      <div className="mobile-abouts ">
        <DropDownController {...mobileAppDevProps} />
      </div>
    </div>
  )
}

export default Mobile