import React from 'react'
import DropDownController from '../../DropDownController'

const SupplyChain = () => {
  const supplyChainSolutionsProps = {
    pageTitle: "WizInoa: Supply Chain Solutions in Madurai - Software & Tools",
    descriptionName: "supply chain solutions",
    descriptionContent: "Explore WizInoa's advanced supply chain solutions system & software tools in Madurai. Enhance your logistics and supply chain management with customizable solutions tailored to your requirements."
    ,
    heading: 'Supply Chain Solutions',
    para: 'WizInoa specializes in providing robust supply chain solutions, serving as your strategic partner in optimizing logistics, enhancing visibility, and driving efficiency across your entire supply chain network.',
    svgSrc: 'https://www.svgrepo.com/show/219283/broken-link-chain.svg',
    smallHeading: 'Our supply chain services cover a diverse range of functionalities, ensuring that your organization achieves seamless coordination, reduces costs, and improves overall supply chain performance.',
    services: [
      { title: 'Supply Chain Visibility', description: 'Enhance visibility into your supply chain operations with our solutions, providing real-time tracking, monitoring, and analytics to optimize decision-making and mitigate risks.' },
      { title: 'Warehouse Management Systems (WMS)', description: 'Optimize warehouse operations with our WMS solutions, streamlining inventory management, order fulfillment, and overall warehouse efficiency for a more agile supply chain.' },
      { title: 'Transportation Management Systems (TMS)', description: 'Improve transportation planning and execution with our TMS solutions, ensuring optimal route optimization, cost efficiency, and timely delivery of goods across the supply chain.' },
      { title: 'Demand Forecasting and Planning', description: 'Optimize inventory levels and reduce stockouts with our demand forecasting and planning solutions, leveraging data-driven insights to anticipate market demands and trends.' },
      { title: 'Supplier Relationship Management (SRM)', description: 'Strengthen relationships with suppliers through our SRM solutions, facilitating effective collaboration, communication, and performance tracking for a resilient and efficient supply chain network.' },
    ],
  };

  return (
    <div><DropDownController {...supplyChainSolutionsProps} /></div>
  )
}

export default SupplyChain