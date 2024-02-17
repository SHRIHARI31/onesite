import React from 'react';
import './bottomFooter.css';
import { Link } from 'react-router-dom';

const sections = [
    {
        title: 'Services',
        links: [
            { label: 'Web development', to: 'service/webdeveopement' },
            { label: 'Software development', to: 'service/software' },
            { label: 'MobileApp development', to: 'service/mobileApp' },
            { label: 'Training & consulting', to: 'service/training' },
            { label: 'Web3 development', to: 'service/webthree' },
            { label: 'It consulting', to: 'service/consulting' },
            { label: 'Digital transformation', to: 'service/digitalTransformation' },
            { label: 'Digital marketing', to: 'service/digitalMarketing' },
        ],
    },
    {
        title: 'Solutions',
        links: [
            { label: 'ERP', to: 'solution/ERP' },
            { label: 'CRM', to: 'solution/CRM' },
            { label: 'Enterprise Application', to: 'solution/Enterprise-Application' },
            { label: 'Data analysis', to: 'solution/data-analysis' },
            { label: 'IT solution management', to: 'solution/it-solution-management' },
            { label: 'E-commerce', to: 'solution/e-commerce' },
            { label: 'supply chain', to: 'solution/supply-chain' },
            { label: 'web-portals', to: 'solution/web-portals' },
        ],
    },
    {
        title: 'Technology',
        links: [
            { label: 'Front-end', to: 'technology/front-end' },
            { label: 'Back-end', to: 'technology/back-end' },
            { label: 'Cross-platform', to: 'technology/crossplatform' },
            { label: 'Full stack', to: 'technology/fullstack' },
            { label: 'Devops & ML', to: 'technology/devops-&-ml' },
            { label: 'Ecommerce & CMS', to: 'technology/Ecommerce-cms' },
            { label: 'Block chain', to: 'technology/Block-chain' },
        ],
    },
    {
        title: 'Industry',
        links: [
            { label: 'MLM software', to: 'industry/MLM' },
            { label: 'Automation software', to: 'industry/Automation' },
            { label: 'Logistic software', to: 'industry/Logistic' },
            { label: 'Social media software', to: 'industry/social-media' },
            { label: 'Networking software', to: 'industry/Networking' },


        ],
    },
];

const socialMediaLinks = [
    { icon: 'facebook', url: 'https://img.icons8.com/?size=69&id=kREWnrP8lFKg&format=png', href: 'https://www.facebook.com/profile.php?id=61555702636646' },
    { icon: 'twitter', url: 'https://img.icons8.com/?size=80&id=KxHlias9AgZt&format=png', href: 'https://twitter.com/wizinoa2020' },
    { icon: 'linked-in', url: 'https://img.icons8.com/?size=80&id=MR3dZdlA53te&format=png', href: 'https://www.linkedin.com/company/wizinoa/' },
    { icon: 'instagram', url: 'https://img.icons8.com/?size=80&id=nj0Uj45LGUYh&format=png', href: 'https://www.instagram.com/wizinoa' },
    { icon: 'whatssapp',  url: 'https://img.icons8.com/?size=48&id=AltfLkFSP7XN&format=png', href: 'https://wa.me/message/IQC5YUQJND3FC1' },


];

const BottomFooter = () => {
    return (
        <>
            <div className='bottom-footer-body ' id='footer'>
                {sections.map((section, index) => (
                    <div key={index} className={`footer-domine footer-domain-${index + 1}`}>
                        <div className='footer-sub-heading'>{section.title}</div>
                        <ul className='footer-list-order'>
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <Link to={link.to}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className='footer-domine-five footer-domine'>
                    <div className='footer-sub-heading'>Social media</div>
                    <ul className='footer-list-order'>
                        <div className='footer-social-media-heading text-white'>Follow Us Stay Updated</div>
                        <div className='social-media-links'>
                            {socialMediaLinks.map((socialMedia, index) => (
                                <a href={socialMedia.href}><img key={index} src={socialMedia.url} alt={socialMedia.icon} className='soci-img' /></a>
                            ))}
                        </div>
                    </ul>
                    <div className='business'>
                        <div>
                            <span className='font-bold tracking-wide !text-inoa-red'>Business enquire: </span>
                            <span>+91 94426 57899</span>
                        </div>
                        <div>
                            <span className='font-bold tracking-wide !text-inoa-red'>For Job: </span>
                            <span>+91 94426 57899</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <div className=''>Copyright © 2024 WizInoa Private Limited. All Rights Reserved.</div>
            </div>
        </>
    );
};

export default BottomFooter;
