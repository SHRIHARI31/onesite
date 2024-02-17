import React from 'react'
import DropDownController from '../DropDownController'

const Fullstack = () => {
    const fullStackDevelopmentProps = {
        pageTitle: "WizInoa: Full-Stack Development Solutions in Madurai - Software & Tools",
        descriptionName: "full-stack development solutions",
        descriptionContent: "Explore WizInoa's advanced full-stack development solutions & software tools in Madurai. Enhance your digital projects with customizable full-stack development solutions tailored to your requirements."
        ,
        heading: 'Full-Stack Development Solutions',
        para: 'WizInoa is your end-to-end solution for full-stack development, serving as your strategic partner in crafting comprehensive web applications, from frontend interfaces to backend server logic and database management.',
        svgSrc: 'https://www.svgrepo.com/show/378837/node.svg',
        smallHeading: 'Our full-stack development services cover a wide spectrum of technologies, ensuring seamless integration and optimal performance across the entire web application.',
        services: [
            { title: 'Frontend Development (React, Vue.js, Angular)', description: 'Craft visually appealing and interactive user interfaces with our frontend development services, utilizing popular frameworks like React, Vue.js, or Angular for dynamic web applications.' },
            { title: 'Backend Development (Node.js, Python Django, Java Spring Boot)', description: 'Build robust server-side applications with our backend development services, leveraging technologies such as Node.js, Python Django, or Java Spring Boot for scalable and secure backend logic.' },
            { title: 'Database Management (SQL & NoSQL)', description: 'Efficiently manage data with our database management services, covering both SQL databases (e.g., PostgreSQL, MySQL) and NoSQL databases (e.g., MongoDB, Redis) for optimal data storage and retrieval.' },
            { title: 'Cross-Platform Development (React Native, Flutter, Xamarin)', description: 'Extend your application reach with our cross-platform development services, utilizing frameworks like React Native, Flutter, or Xamarin to create applications that run seamlessly across multiple platforms.' },
            { title: 'DevOps and Cloud Services', description: 'Ensure continuous integration and deployment with our DevOps services, utilizing cloud platforms such as AWS, Azure, or Google Cloud for scalable and reliable web applications.' },
        ],
    };

    return (
        <div><DropDownController {...fullStackDevelopmentProps} /></div>
    )
}

export default Fullstack