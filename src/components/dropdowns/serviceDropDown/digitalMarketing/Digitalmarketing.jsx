import React from 'react'
import DropDownController from '../../DropDownController'


const Digitalmarketing = () => {
  const digitalMarketingProps = {
    pageTitle: "Expert Digital Marketing Services in India | Wizinoa",
    discriptionName: "service offers",
    descriptionContent: "Wizinoa offers top-notch digital marketing solutions in India. Elevate your online presence with our SEO services in Madurai.",
    heading: 'Digital Marketing',
    para: 'WizInoa excels in crafting dynamic digital marketing strategies, helping businesses establish a strong online presence, connect with their target audience, and drive meaningful engagement in the digital landscape.',
    svgSrc: 'https://www.svgrepo.com/show/530179/stock-movement.svg',
    smallHeading: 'Our digital marketing services leverage the latest trends and platforms, ensuring that your brand stands out in the crowded digital space and achieves measurable success.',
    services: [
      { title: 'Strategic Digital Campaigns', description: 'Boost your brand visibility with our strategic digital campaigns, tailored to reach and resonate with your target audience across various online channels.' },
      { title: 'Social Media Management', description: 'Engage and grow your audience on social media platforms with our social media management services, utilizing creative content and targeted strategies for maximum impact.' },
      { title: 'Search Engine Optimization (SEO)', description: 'Improve your online visibility and rankings with our SEO services, optimizing your website to appear prominently in search engine results and attract organic traffic.' },
      { title: 'Pay-Per-Click (PPC) Advertising', description: 'Drive immediate traffic and conversions with our PPC advertising services, creating targeted campaigns on platforms like Google Ads for optimal results.' },
      { title: 'Content Marketing', description: 'Establish authority and connect with your audience through compelling content with our content marketing services, tailored to resonate with your brand message and goals.' },
    ],
  };

  return (
    <div className=''>
      <DropDownController {...digitalMarketingProps} />
    </div>
  )
}

export default Digitalmarketing