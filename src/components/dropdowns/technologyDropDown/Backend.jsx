import React from 'react'
import DropDownController from '../DropDownController'

const Backend = () => {
    const backendDevelopmentProps = {
        pageTitle: "WizInoa: Backend Technology Solutions in Madurai - Software & Tools",
        descriptionName: "backend technology",
        descriptionContent: "Explore WizInoa's advanced backend technology solutions & software tools in Madurai. Enhance your digital infrastructure with customizable backend" ,
        heading: 'Backend Development Solutions',
        para: 'WizInoa excels in backend development, serving as your strategic partner in building robust server-side applications, managing databases, and ensuring seamless integration with frontend technologies.',
        svgSrc: 'https://www.svgrepo.com/show/492995/server-and-people.svg',
        smallHeading: 'Our backend development services encompass a variety of programming languages, frameworks, and databases to ensure scalable, secure, and high-performing server-side solutions.',
        services: [
            { title: 'Node.js Development', description: 'Leverage the power of JavaScript with our Node.js development services, building scalable and event-driven server-side applications.' },
            { title: 'Python Django Development', description: 'Create robust web applications with our Python Django development services, utilizing the Django framework for efficient and clean backend development.' },
            { title: 'Ruby on Rails Development', description: 'Optimize development speed with our Ruby on Rails services, providing a full-stack framework for building database-backed web applications.' },
            { title: 'Java Spring Boot Development', description: 'Ensure enterprise-level performance with our Java Spring Boot development services, building scalable and secure backend applications.' },
            { title: 'Database Management (SQL & NoSQL)', description: 'Utilize our expertise in database management, covering both SQL (e.g., PostgreSQL, MySQL) and NoSQL (e.g., MongoDB, Redis) databases for efficient data storage and retrieval.' },
        ],
    };

    return (
        <div><DropDownController {...backendDevelopmentProps} /></div>
    )
}

export default Backend