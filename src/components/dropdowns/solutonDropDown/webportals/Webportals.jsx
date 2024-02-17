import React from 'react'
import DropDownController from '../../DropDownController'

const Webportals = () => {
  const webPortalsProps = {
    pageTitle: "WizInoa: Web Solutions in Madurai - Software & Tools",
    descriptionName: "web solutions",
    descriptionContent: "Explore WizInoa's advanced web solutions system & software tools in Madurai. Enhance your online presence with customizable web solutions tailored to"
    ,
    heading: 'Web Portal Solutions',
    para: 'WizInoa specializes in delivering dynamic web portal solutions, serving as your strategic partner in creating engaging online platforms, enhancing user experiences, and fostering collaboration across various stakeholders.',
    svgSrc: 'https://www.svgrepo.com/show/33947/black-hole.svg',
    smallHeading: 'Our web portal services cover a diverse range of functionalities, ensuring that your organization establishes effective communication channels, facilitates information sharing, and provides personalized experiences.',
    services: [
      { title: 'Custom Web Portal Development', description: 'Craft tailored web portals with our custom development services, addressing the unique needs of your organization and providing a user-friendly interface for seamless interactions.' },
      { title: 'Collaboration and Communication Portals', description: 'Enhance teamwork and communication with our collaboration portals, offering features such as document sharing, project management, and real-time collaboration for improved productivity.' },
      { title: 'Customer and Partner Portals', description: 'Strengthen relationships with customers and partners through dedicated portals, providing personalized experiences, account management, and access to relevant information and resources.' },
      { title: 'Knowledge and Learning Portals', description: 'Facilitate continuous learning with our knowledge portals, offering educational resources, training modules, and interactive content for employees, customers, or stakeholders.' },
      { title: 'Integrated Data Dashboards', description: 'Empower decision-makers with integrated data dashboards, providing real-time analytics, insights, and key performance indicators for efficient monitoring and decision-making within the portal.' },
    ],
  };

  return (
    <div><DropDownController {...webPortalsProps} /></div>
  )
}

export default Webportals