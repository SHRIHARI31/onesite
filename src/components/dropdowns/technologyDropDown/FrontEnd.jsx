import React from 'react'
import DropDownController from '../DropDownController'

const FrontEnd = () => {
  const frontendDevelopmentProps = {
    pageTitle: "WizInoa: Front-End Technology Solutions in Madurai - Software & Tools",
    descriptionName: "front-end technology",
    descriptionContent: "Explore WizInoa's advanced front-end technology solutions & software tools in Madurai. Enhance your digital presence with customizable front-end technology solutions tailored to your requirements."
    ,
    heading: 'Frontend Development Solutions',
    para: 'WizInoa specializes in frontend development, serving as your strategic partner in crafting engaging and user-centric web applications, ensuring seamless user experiences, and bringing your digital vision to life.',
    svgSrc: 'https://www.svgrepo.com/show/439128/custom-elements.svg',
    smallHeading: 'Our frontend development services cover a diverse range of technologies and design principles, ensuring that your web applications are visually appealing, responsive, and aligned with the latest industry standards.',
    services: [
      { title: 'Responsive Web Design', description: 'Create user-friendly interfaces with our responsive web design services, ensuring optimal viewing experiences across various devices and screen sizes.' },
      { title: 'User Interface (UI) Development', description: 'Craft visually appealing and intuitive user interfaces with our UI development services, utilizing technologies such as React, Vue.js, or Angular for seamless and interactive user interactions.' },
      { title: 'Single Page Applications (SPA)', description: 'Build dynamic and fast-loading SPAs with our expertise, using frameworks like React or Vue.js along with state management tools like Redux or Vuex for a smooth user experience without page reloads.' },
      { title: 'Cross-Browser Compatibility', description: 'Ensure consistent performance across different browsers with our cross-browser compatibility services, optimizing your frontend for a wide range of web browsers and ensuring a consistent user experience using tools like Babel and PostCSS.' },
      { title: 'Progressive Web Apps (PWAs)', description: 'Enhance user engagement with PWAs, providing offline capabilities, push notifications, and a native-app-like experience through our progressive web app development services using technologies like Service Workers and Web App Manifest.' },
    ],
  };

  return (
    <div><DropDownController {...frontendDevelopmentProps} /></div>
  )
}

export default FrontEnd