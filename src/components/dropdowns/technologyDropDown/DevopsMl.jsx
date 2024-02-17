import React from 'react'
import DropDownController from '../DropDownController'

const DevopsMl = () => {
    const devOpsAndMLProps = {
        pageTitle: "WizInoa: DevOps & Machine Learning Solutions in Madurai - Software & Tools",
        descriptionName: "DevOps & Machine Learning solutions",
        descriptionContent: "Explore WizInoa's advanced DevOps & Machine Learning solutions and software tools in Madurai. Enhance your projects with customizable DevOps and Machine Learning solutions tailored to your requirements."

        ,
        heading: 'DevOps and Machine Learning Solutions',
        para: 'WizInoa offers comprehensive solutions in both DevOps and Machine Learning, serving as your strategic partner in optimizing development workflows, ensuring continuous integration and deployment, and leveraging machine learning for data-driven insights.',
        svgSrc: 'https://www.svgrepo.com/show/354004/linux-tux.svg',
        smallHeading: 'Our services in DevOps and Machine Learning cover a wide range of technologies, fostering collaboration, automation, and innovation in software development and data analysis.',
        services: [
            { title: 'DevOps Automation (Jenkins, GitLab CI/CD)', description: 'Streamline development workflows with our DevOps automation services, utilizing tools like Jenkins or GitLab CI/CD for continuous integration, deployment, and delivery.' },
            { title: 'Containerization and Orchestration (Docker, Kubernetes)', description: 'Ensure scalability and consistency in deployments with our containerization and orchestration services, leveraging technologies like Docker and Kubernetes for efficient container management.' },
            { title: 'Infrastructure as Code (Terraform, Ansible)', description: 'Automate infrastructure management with our Infrastructure as Code services, using tools like Terraform or Ansible to define and manage infrastructure in a declarative manner.' },
            { title: 'Machine Learning Development (TensorFlow, PyTorch)', description: 'Leverage the power of machine learning with our development services, utilizing frameworks like TensorFlow or PyTorch for building and deploying machine learning models.' },
            { title: 'Data Analytics and Visualization (Pandas, Matplotlib, Tableau)', description: 'Extract valuable insights from data with our data analytics and visualization services, using tools like Pandas, Matplotlib, or Tableau to analyze and present data in a meaningful way.' },
        ],
    };

    return (
        <div><DropDownController {...devOpsAndMLProps} /></div>
    )
}

export default DevopsMl