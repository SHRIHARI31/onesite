import React from 'react'
import DropDownController from '../DropDownController'

const EcommerceCms = () => {
    const ecommerceAndCMSProps = {
        pageTitle: "WizInoa: E-commerce & CMS Solutions in Madurai - Software & Tools",
        descriptionName: "e-commerce & CMS solutions",
        descriptionContent: "Explore WizInoa's advanced e-commerce & CMS solutions and software tools in Madurai. Enhance your online presence with customizable e-commerce and CMS solutions tailored to your requirements."

        ,
        heading: 'E-commerce and CMS Solutions',
        para: 'WizInoa provides comprehensive solutions for E-commerce and Content Management Systems, serving as your strategic partner in creating robust online stores, managing content, and enhancing digital experiences.',
        svgSrc: 'https://www.svgrepo.com/show/157232/market-trends.svg',
        smallHeading: 'Our services in E-commerce and CMS cover a wide range of technologies, ensuring a seamless integration between online retail and content management for a dynamic and engaging digital presence.',
        services: [
            { title: 'E-commerce Platform Development (Magento, Shopify)', description: 'Craft powerful and scalable e-commerce platforms with our development services, utilizing platforms like Magento or Shopify for creating feature-rich online stores.' },
            { title: 'Custom CMS Development (WordPress, Joomla)', description: 'Build tailored Content Management Systems with our custom CMS development services, using popular frameworks like WordPress or Joomla for efficient content creation, publishing, and management.' },
            { title: 'Payment Gateway Integration', description: 'Facilitate secure and seamless transactions with our payment gateway integration solutions, ensuring a smooth checkout process and boosting customer trust in your e-commerce platform.' },
            { title: 'Responsive Web Design', description: 'Create user-friendly interfaces with our responsive web design services, ensuring optimal viewing experiences across various devices and screen sizes.' },
            { title: 'Content Personalization and SEO Optimization', description: 'Enhance user engagement with personalized content and optimize for search engines with our CMS services, ensuring visibility and discoverability of your online content.' },
        ],
    };

    return (
        <div><DropDownController {...ecommerceAndCMSProps} /></div>
    )
}

export default EcommerceCms