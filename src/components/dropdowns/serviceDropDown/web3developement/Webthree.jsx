import React from 'react'
import DropDownController from '../../DropDownController'


const Webthree = () => {
  const web3DevProps = {
    pageTitle: "Leading Web3 Development Company in Madurai | Wizinoa",
    discriptionName: "service offers",
    descriptionContent: "Wizinoa offers top-notch Web3 development services in Madurai. Transform your business with our expert Web3 solutions.",
    heading: 'Modern Web3 Development',
    para: 'WizInoa is at the forefront of modern Web3 development, specializing in creating innovative and decentralized solutions for the blockchain-powered era.',
    svgSrc: 'https://www.svgrepo.com/show/530660/genetic-algorithm.svg',
    smallHeading: 'Our Web3 development services embrace the latest blockchain technologies, delivering tailored solutions that empower decentralized applications, enhance security, and drive innovation in the decentralized web.',
    services: [
      { title: 'Smart Contract Development', description: 'Transform your business with our expertise in smart contract development, leveraging blockchain platforms like Ethereum or Binance Smart Chain for decentralized and trustless transactions.' },
      { title: 'Decentralized App (DApp) Development', description: 'Explore the potential of decentralized applications with our DApp development services, utilizing technologies such as IPFS and integrating with blockchain networks to ensure transparency and immutability.' },
      { title: 'Blockchain Integration', description: 'Optimize your business processes with our blockchain integration services, connecting your applications to blockchain networks for enhanced security, traceability, and data integrity.' },
      { title: 'Web3 Product Development', description: 'Build groundbreaking Web3 products with our end-to-end solutions and agile methodologies, utilizing decentralized technologies to provide users with more control over their data and interactions.' },
      { title: 'Blockchain Consulting', description: 'Navigate the complexities of the decentralized world with our blockchain consulting services, providing insights and strategies to leverage the potential of blockchain technology for your business.' },
    ],
  };

  return (
    <div className=''>
      <DropDownController {...web3DevProps} />
    </div>
  )
}

export default Webthree