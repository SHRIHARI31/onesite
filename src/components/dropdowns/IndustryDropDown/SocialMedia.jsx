import React from 'react'
import DropDownController from '../DropDownController'

const SocialMedia = () => {
    const socialMediaSoftwareProps = {
        pageTitle: "WizInoa: Social Media Software Solutions in Madurai - Software & Tools",
        descriptionName: "social media software solutions",
        descriptionContent: "Explore WizInoa's advanced social media software solutions and tools in Madurai. Enhance your online presence and engagement with customizable social media software tailored to your requirements."
        ,
        heading: 'Social Media Software Solutions',
        para: 'WizInoa specializes in social media software, serving as your strategic partner in creating engaging, scalable, and feature-rich platforms to enhance social interactions and brand presence.',
        svgSrc: 'https://www.svgrepo.com/show/477058/internet.svg',
        smallHeading: 'Our social media software services cover a diverse range of features, leveraging cutting-edge technologies to deliver seamless user experiences and effective social engagement.',
        services: [
            { title: 'User Profile and Authentication', description: 'Implement robust user profiles and authentication mechanisms, ensuring secure and personalized experiences for social media platform users.' },
            { title: 'Content Creation and Sharing', description: 'Facilitate content creation, sharing, and interaction with features like multimedia uploads, comments, and sharing functionalities to enhance user engagement.' },
            { title: 'Real-time Notifications', description: 'Enhance user engagement with real-time notifications for activities such as likes, comments, and friend requests, utilizing technologies for efficient push notifications.' },
            { title: 'Social Analytics and Insights', description: 'Implement social analytics tools to provide users and administrators with valuable insights into user behavior, content performance, and audience demographics.' },
            { title: 'Integration with Third-party APIs', description: 'Integrate with popular social media APIs for seamless sharing, authentication, and data synchronization, enhancing connectivity and user experience.' },
        ],
        techStack: [
            { title: 'Frontend Framework', description: 'Utilize modern frontend frameworks such as React or Vue.js for building responsive and interactive user interfaces.' },
            { title: 'Backend Development', description: 'Choose scalable backend technologies such as Node.js or Django for handling user data, interactions, and overall platform logic.' },
            { title: 'Database Management', description: 'Opt for database solutions like MongoDB or PostgreSQL for efficient storage and retrieval of user and content data.' },
            { title: 'Real-time Communication', description: 'Implement real-time communication using technologies like WebSocket for instant updates and notifications.' },
            { title: 'Cloud Services', description: 'Leverage cloud services like AWS or Azure for scalable and reliable infrastructure to handle varying levels of user activity.' },
        ],
    };

    return (
        <div><DropDownController {...socialMediaSoftwareProps} /></div>
    )
}

export default SocialMedia