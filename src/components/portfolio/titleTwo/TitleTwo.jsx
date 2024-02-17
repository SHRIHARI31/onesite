import React from 'react';
import './titleTwo.css';


const sectionsData = [
  {
    heading: 'Expertise and Innovation',
    body: 'Our team of seasoned developers and strategists brings a wealth of experience and expertise to every project. We stay at the forefront of technological advancements to ensure that our clients benefit from the latest innovations in software development.',
    imageSrc: 'https://www.svgrepo.com/show/263143/light-bulb-idea.svg',
  },
  {
    heading: 'Customization and Scalability',
    body: 'Recognizing the uniqueness of each business, we provide tailor-made solutions that align with your specific requirements. Our software solutions are scalable, adapting to the evolving needs of your organization as it grows.',
    imageSrc: 'https://www.svgrepo.com/show/530614/map.svg',
  },
  {
    heading: 'Reliability and Support',
    body: 'WizInoa is committed to delivering reliable, high-quality software solutions. Our dedicated support team ensures that you receive prompt assistance whenever you need it, guaranteeing uninterrupted operations for your business.',
    imageSrc: 'https://www.svgrepo.com/show/530172/help.svg',
  },
  {
    heading: 'Client-Centric Approach',
    body: 'We prioritize understanding your business objectives and goals. Our client-centric approach means that your success is our success. We forge lasting partnerships, working collaboratively to achieve mutual growth and prosperity.',
    imageSrc: 'https://www.svgrepo.com/show/356875/mind-map.svg',
  },
];

const TitleTwo = () => {
  return (
    <div className='title-two skewer'>
      <div className="why-we-body flex  px-[10%] flex-col">
        {sectionsData.map((section, index) => (
          <div key={index} className="why-we-defenition">
            <div className="defenetion-heading   tracking-wide py-5">
              {section.heading}
            </div>
            <div className="def-body">
              <img src={section.imageSrc} alt="" />
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

export default TitleTwo;
