import React from 'react'
import DropDownController from '../../DropDownController'



const Itconsulting = () => {
  const itConsultingProps = {
    pageTitle: "Wizinoa: IT Consulting Services and Support in India",
    discriptionName: "service offers",
    descriptionContent: "Enhance your business with Wizinoa's expert IT services & consulting support. Reach out for tailored solutions today!",
    heading: 'IT Consulting',
    para: 'WizInoa specializes in comprehensive IT consulting services, providing strategic guidance and innovative solutions to optimize your technology infrastructure and drive business success.',
    svgSrc: 'https://www.svgrepo.com/show/530174/open-an-account.svg',
    smallHeading: 'Our IT consulting services cover a broad spectrum of areas, ensuring that your organization is equipped with the right technology strategies and solutions to meet its goals.',
    services: [
      { title: 'Strategic Technology Planning', description: 'Align your IT strategy with your business objectives through our strategic technology planning services, ensuring that technology investments drive long-term success.' },
      { title: 'Infrastructure Optimization', description: 'Optimize your IT infrastructure for efficiency and scalability with our infrastructure consulting, covering areas such as cloud solutions, network design, and security.' },
      { title: 'Cybersecurity Consulting', description: 'Safeguard your digital assets with our cybersecurity consulting services, implementing robust strategies to protect against cyber threats and ensure the integrity of your data.' },
      { title: 'Digital Transformation', description: 'Navigate the digital landscape with our digital transformation consulting, helping your organization leverage emerging technologies for improved processes, customer experiences, and overall growth.' },
      { title: 'IT Project Management', description: 'Ensure the success of your IT projects with our project management consulting, providing expert guidance in planning, execution, and delivery to meet timelines and objectives.' },
    ],
  };

  return (
    <div className=''>
      <DropDownController  {...itConsultingProps} />
    </div>
  )
}

export default Itconsulting