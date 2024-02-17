import React from 'react'
import DropDownController from '../DropDownController';

const Crossplatform = () => {
    const crossPlatformDevelopmentProps = {
        pageTitle: "WizInoa: Cross-Platform Solutions in Madurai - Software & Tools",
        descriptionName: "cross-platform solutions",
        descriptionContent: "Explore WizInoa's advanced cross-platform solutions & software tools in Madurai. Enhance your digital presence with customizable cross-platform solutions tailored to your requirements."
,        
        heading: 'Cross-Platform Development Solutions',
        para: 'WizInoa specializes in cross-platform development, serving as your strategic partner in creating applications that run seamlessly across various operating systems and devices.',
        svgSrc: 'https://www.svgrepo.com/show/261938/responsive.svg',
        smallHeading: 'Our cross-platform development services leverage versatile frameworks and technologies, ensuring efficient code reuse and consistent user experiences across different platforms.',
        services: [
            { title: 'React Native Development', description: 'Build native-like mobile applications for iOS and Android with our React Native development services, utilizing the power of React and JavaScript for efficient cross-platform development.' },
            { title: 'Flutter Development', description: 'Create visually stunning and high-performance applications with our Flutter development services, utilizing Dart programming language and the Flutter framework for cross-platform app development.' },
            { title: 'Xamarin Development', description: 'Leverage C# and the Xamarin framework for cross-platform development with our Xamarin development services, allowing you to share codebase efficiently between iOS and Android applications.' },
            { title: 'Electron Development', description: 'Extend your application reach to desktop platforms with our Electron development services, enabling the creation of cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript.' },
            { title: 'Unity Development', description: 'Develop interactive and cross-platform games or applications with our Unity development services, using the Unity engine for creating content that runs on various platforms including mobile, desktop, and AR/VR devices.' },
        ],
    };

    return (
        <div><DropDownController {...crossPlatformDevelopmentProps} /></div>
    )
}

export default Crossplatform