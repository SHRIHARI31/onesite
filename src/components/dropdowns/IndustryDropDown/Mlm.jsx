import React from 'react'
import DropDownController from '../DropDownController'

const Mlm = () => {
  const mlmSoftwareProps = {
    pageTitle: "WizInoa: MLM Software Solutions in Madurai - Software & Tools",
    descriptionName: "MLM software solutions",
    descriptionContent: "Explore WizInoa's advanced MLM software solutions and tools in Madurai. Enhance your network marketing business with customizable MLM software tailored to your requirements."
    ,
    heading: 'MLM Software Solutions',
    para: 'WizInoa provides comprehensive MLM software solutions, serving as your strategic partner in managing and optimizing multi-level marketing business operations.',
    svgSrc: 'https://www.svgrepo.com/show/429840/business-chart-finance-8.svg',
    smallHeading: 'Our MLM software services cover a range of features to streamline user management, compensation plans, and network visualization for enhanced business efficiency.',
    services: [
      { title: 'User Management', description: 'Efficiently manage user accounts, track activities, and provide role-based access to various features within the MLM network.' },
      { title: 'Compensation Plans', description: 'Customize and implement diverse compensation plans such as Binary, Matrix, Unilevel, or Hybrid to meet the unique needs of your MLM business.' },
      { title: 'Genealogy Tree Visualization', description: 'Visualize network relationships and hierarchy through a genealogy tree, providing a clear overview of the structure within the MLM network.' },
      { title: 'Commission and Bonus Calculations', description: 'Automate commission and bonus calculations based on sales, downline activities, and the chosen compensation plan for accurate and transparent payouts.' },
      { title: 'E-Wallet Integration', description: 'Integrate e-wallet functionality to enable users to manage earnings, make transactions, and withdraw funds conveniently within the MLM platform.' },
    ],
  };

  return (
    <div><DropDownController  {...mlmSoftwareProps} /></div>
  )
}

export default Mlm