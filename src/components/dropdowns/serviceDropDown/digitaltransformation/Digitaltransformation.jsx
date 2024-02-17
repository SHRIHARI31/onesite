import React from 'react'
import DropDownController from '../../DropDownController';


const Digitaltransformation = () => {
  const digitalTransformationProps = {
    pageTitle: "Wizinoa: Digital Transformation Services in Madurai",
    discriptionName: "service offers",
    descriptionContent: "Discover Wizinoa's top-notch digital transformation services in Madurai. Enhance your business with our transformative technologies and solutions.",
    heading: 'Digital Transformation',
    para: 'WizInoa is your partner in digital transformation, offering comprehensive solutions to modernize your business processes, enhance customer experiences, and drive innovation in the digital era.',
    svgSrc: 'https://www.svgrepo.com/show/530173/risk-assessment.svg',
    smallHeading: 'Our digital transformation services encompass a wide range of strategies and technologies, ensuring that your organization evolves and thrives in the rapidly changing digital landscape.',
    services: [
      { title: 'Strategic Digital Roadmap', description: 'Chart your digital future with our strategic digital roadmap services, creating a comprehensive plan to align technology initiatives with your business goals.' },
      { title: 'Process Automation', description: 'Optimize efficiency and reduce manual work with our process automation solutions, leveraging cutting-edge technologies to streamline workflows and enhance productivity.' },
      { title: 'Customer Experience Enhancement', description: 'Elevate customer satisfaction with our customer experience enhancement services, utilizing digital tools and insights to create personalized and engaging interactions.' },
      { title: 'Data Analytics and Insights', description: 'Harness the power of data with our data analytics and insights services, unlocking valuable information to make informed decisions and gain a competitive edge in the market.' },
      { title: 'Cloud Migration and Integration', description: 'Embrace the flexibility and scalability of the cloud with our cloud migration and integration services, ensuring a seamless transition and optimized performance for your digital infrastructure.' },
    ],
  };

  return (
    <div className='flex justify-center item-center'>
      <DropDownController {...digitalTransformationProps} />
    </div>
  )
}

export default Digitaltransformation