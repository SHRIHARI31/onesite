import React from 'react'
import DropDownController from '../../DropDownController'
const Erp = () => {
  const erpSoftwareProps = {
    pageTitle: "WizInoa: ERP Solutions in Madurai - ERP Software & Tools",
    discriptionName: "solutions offers",
    descriptionContent: "Explore WizInoa's top-notch ERP system & software solutions in Madurai. Elevate your business with the best CRM services tailored to your needs.",
    heading: 'ERP Software Solutions',
    para: 'WizInoa specializes in delivering comprehensive ERP software solutions, serving as your partner in transforming business processes, enhancing operational efficiency, and fostering innovation across your enterprise.',
    svgSrc: 'https://www.svgrepo.com/show/493535/graph-and-people.svg',
    smallHeading: 'Our ERP software services cover a broad spectrum of functionalities, ensuring that your organization evolves and excels in managing resources and information effectively.',
    services: [
      { title: 'Strategic ERP Implementation', description: 'Chart the course for efficient operations with our strategic ERP implementation services, tailoring a comprehensive plan to align technology solutions with your organizational goals.' },
      { title: 'Process Automation and Optimization', description: 'Enhance operational efficiency and reduce manual efforts with our process automation and optimization solutions, leveraging cutting-edge technologies to streamline workflows and boost productivity.' },
      { title: 'Customer Relationship Management (CRM)', description: 'Strengthen customer relationships with our CRM solutions, providing tools and insights to enhance customer interactions, satisfaction, and loyalty.' },
      { title: 'Data Analytics for Informed Decision-Making', description: 'Leverage the power of data with our ERP data analytics services, unlocking valuable insights for informed decision-making and gaining a competitive edge in the market.' },
      { title: 'ERP Cloud Migration and Integration', description: 'Embrace the benefits of cloud technology with our ERP cloud migration and integration services, ensuring a seamless transition and optimized performance for your enterprise resource planning infrastructure.' },
      { title: 'Human Resource Management (HRM)', description: 'Optimize your workforce management with our HRM solutions, streamlining HR processes and maximizing employee productivity and satisfaction.' },
      { title: 'Billing Software Solutions', description: 'Simplify billing processes and improve revenue management with our billing software solutions, ensuring accuracy, efficiency, and compliance.' },
      { title: 'Sales Management Solutions', description: 'Drive sales growth and enhance customer engagement with our sales management solutions, empowering your sales team with effective tools and insights.' },
      { title: 'Inventory Management', description: 'Efficiently manage inventory levels, reduce costs, and improve order fulfillment with our inventory management solutions, optimizing supply chain operations.' },
      { title: 'Supply Chain Management', description: 'Optimize your supply chain processes, from procurement to delivery, with our supply chain management solutions, ensuring transparency, efficiency, and responsiveness.' },
      { title: 'Delivery Methods Optimization', description: 'Enhance delivery operations and customer satisfaction with our delivery methods optimization solutions, leveraging data and technology to optimize routes, schedules, and logistics.' },
    ],
  };
  

  return (
    <div>
      <DropDownController {...erpSoftwareProps} />
    </div>
  )
}

export default Erp