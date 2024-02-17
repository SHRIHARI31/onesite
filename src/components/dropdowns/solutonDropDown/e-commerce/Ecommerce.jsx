import React from 'react'
import DropDownController from '../../DropDownController'

const Ecommerce = () => {
  const ecommerceSolutionsProps = {
    pageTitle: "WizInoa: E-commerce Solutions in Madurai - Software & Tools",
    descriptionName: "e-commerce solutions",
    descriptionContent: "Explore WizInoa's advanced e-commerce solutions system & software tools in Madurai. Enhance your online business with customizable e-commerce solutions tailored to your requirements."
    ,
    heading: 'E-commerce Solutions',
    para: 'WizInoa specializes in providing comprehensive e-commerce solutions, serving as your strategic partner in establishing a robust online presence, enhancing customer experiences, and driving success in the digital marketplace.',
    svgSrc: 'https://www.svgrepo.com/show/283531/placeholder-commerce-and-shopping.svg',
    smallHeading: 'Our e-commerce services cover a diverse range of functionalities, ensuring that your online business thrives by leveraging cutting-edge technologies and user-centric strategies.',
    services: [
      { title: 'E-commerce Website Development', description: 'Craft a compelling online storefront with our e-commerce website development services, utilizing the latest technologies and design trends to create a seamless and engaging user experience.' },
      { title: 'Payment Gateway Integration', description: 'Facilitate secure and seamless transactions with our payment gateway integration solutions, ensuring a smooth checkout process and boosting customer trust in your e-commerce platform.' },
      { title: 'Inventory Management Systems', description: 'Optimize your product management processes with our inventory management systems, providing real-time tracking and efficient handling of stock levels to prevent overstock or stockouts.' },
      { title: 'Customer Relationship Management (CRM)', description: 'Enhance customer interactions and loyalty with our CRM solutions tailored for e-commerce, offering personalized communication, order tracking, and targeted marketing campaigns.' },
      { title: 'E-commerce Analytics and Insights', description: 'Gain actionable insights into user behavior and sales patterns with our e-commerce analytics solutions, enabling data-driven decision-making for continuous improvement and growth.' },
    ],
  };

  return (
    <div><DropDownController {...ecommerceSolutionsProps} /></div>
  )
}

export default Ecommerce