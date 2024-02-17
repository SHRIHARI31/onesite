import React from 'react'
import './titleOne.css'

const sectionsData = [
  {
    heading: 'Customer Relationship Management Software (CRM)',
    body: 'Our CRM software is designed to help businesses manage their customer interactions and relationships effectively. Our team of seasoned developers and strategists brings a wealth of experience and expertise to every CRM project. We stay at the forefront of technological advancements to ensure that our clients benefit from the latest innovations in software development.',
    imageSrc: 'https://www.svgrepo.com/show/530178/customer-service.svg',
  },
  {
    heading: 'Human Resource Management Software (HRMS)',
    body: 'Our HRMS solution is tailored to recognize the uniqueness of each business. We provide custom-made HRMS solutions that align with your specific requirements. Our software solutions are scalable, adapting to the evolving needs of your organization as it grows.',
    imageSrc: 'https://www.svgrepo.com/show/493038/boss-asking-for-a-large-amount-of-work-female.svg',
  },
  {
    heading: 'Enterprise Resource Planning (ERP)',
    body: 'WizInoa is committed to delivering reliable, high-quality ERP software solutions. Our dedicated support team ensures that you receive prompt assistance whenever you need it, guaranteeing uninterrupted operations for your business.',
    imageSrc: 'https://www.svgrepo.com/show/423687/shopping-cart-ecommerce.svg',
  },
  {
    heading: 'Multi-Level Marketing (MLM)',
    body: 'Our MLM solutions prioritize understanding your business objectives and goals. Our client-centric approach means that your success is our success. We forge lasting partnerships, working collaboratively to achieve mutual growth and prosperity.',
    imageSrc: 'https://www.svgrepo.com/show/489250/multi-select.svg',
  },
  {
    heading: 'Blockchain Application (WEB3)',
    body: 'Our blockchain applications are designed to prioritize understanding your business objectives and goals. Our client-centric approach means that your success is our success. We forge lasting partnerships, working collaboratively to achieve mutual growth and prosperity.',
    imageSrc: 'https://www.svgrepo.com/show/428658/ethereum-crypto-cryptocurrency-2.svg',
  },
  {
    heading: 'Cross-Platform (Flutter && React Native)',
    body: 'Our cross-platform solutions prioritize understanding your business objectives and goals. Our client-centric approach means that your success is our success. We forge lasting partnerships, working collaboratively to achieve mutual growth and prosperity.',
    imageSrc: 'https://www.svgrepo.com/show/454707/responsif-seo-website.svg',
  },
];




const TitleOne = () => {
  return (
    <div className='title-two skewer'>
      <div className="why-we-body flex  px-[10%] flex-col">
        {sectionsData.map((section, index) => (
          <div key={index} className="why-we-defenition">
            <div className="defenetion-heading   tracking-wide py-5">
              {section.heading}
            </div>
            <div className="def-body">
              <img src={section.imageSrc} className='project-img ' alt="" />
              <div className="why-we-para text-white">
                {section.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleOne;
