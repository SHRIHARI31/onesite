import React from 'react'
import DropDownController from '../../DropDownController'

const Hrm = () => {
  const crmSolutionsProps = {
    pageTitle: "WizInoa: CRM Solutions in Madurai - CRM Software & Tools",
    discriptionName: "solutions offers",
    descriptionContent: "Explore WizInoa's top-notch CRM system & software solutions in Madurai. Elevate your business with the best CRM services tailored to your needs.",
    heading: 'CRM Software Solutions',
    para: 'WizInoa specializes in delivering comprehensive CRM solutions tailored for various industries, serving as your partner in enhancing customer relationships, streamlining processes, and driving business growth.',
    svgSrc: 'https://www.svgrepo.com/show/493568/telework-2-people.svg',
    smallHeading: 'Our CRM services cover a wide range of industries, ensuring that your organization excels in managing customer interactions effectively.',
    services: [
      { title: 'Education CRM Software', description: 'Streamline student management, admissions, and communications with our education CRM software, enhancing student satisfaction and retention.' },
      { title: 'Tours & Travels CRM Solutions', description: 'Manage bookings, customer inquiries, and travel packages efficiently with our tours & travels CRM solutions, improving customer experiences and loyalty.' },
      { title: 'Real Estate CRM Systems', description: 'Optimize property listings, client communications, and sales processes with our real estate CRM systems, accelerating property sales and conversions.' },
      { title: 'Healthcare & Hospital CRM Software', description: 'Enhance patient relationships, appointment scheduling, and medical records management with our healthcare & hospital CRM software, improving patient care and satisfaction.' },
      { title: 'Logistics CRM Solutions', description: 'Optimize freight management, order tracking, and customer communications with our logistics CRM solutions, improving operational efficiency and customer service.' },
      { title: 'Event Management CRM', description: 'Streamline event planning, attendee management, and marketing efforts with our event management CRM, ensuring successful and memorable events.' },
      { title: 'Pharma CRM Software', description: 'Manage sales, marketing campaigns, and customer interactions effectively with our pharma CRM software, driving pharmaceutical sales and brand loyalty.' },
      { title: 'Hotel CRM Systems', description: 'Enhance guest relations, bookings, and loyalty programs with our hotel CRM systems, delivering personalized experiences and maximizing revenue.' },
      { title: 'Insurance CRM Solutions', description: 'Manage client policies, claims, and agent activities efficiently with our insurance CRM solutions, improving customer satisfaction and retention.' },
      { title: 'Manufacturers CRM Software', description: 'Optimize sales processes, supply chain management, and customer relationships with our manufacturers CRM software, increasing operational efficiency and profitability.' },
      { title: 'Lead Management Software (IT)', description: 'Capture, nurture, and convert leads effectively with our lead management software tailored for IT companies, maximizing sales opportunities and revenue growth.' },
      { title: 'CRM for Law Firms', description: 'Manage client relationships, case management, and legal documentation with our CRM for law firms, improving client satisfaction and operational efficiency.' },
      { title: 'Immigration CRM (Study Abroad)', description: 'Streamline student inquiries, visa processing, and documentation management with our immigration CRM tailored for study abroad agencies, enhancing student recruitment and retention.' },
      { title: 'Bookkeeper CRM Solutions', description: 'Simplify accounting processes, client communications, and financial reporting with our bookkeeper CRM solutions, improving efficiency and accuracy in financial management.' },
    ],
  };


  return (
    <div>
      <DropDownController {...crmSolutionsProps} />
    </div>
  )
}

export default Hrm