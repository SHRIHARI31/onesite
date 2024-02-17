import React from 'react'
import DropDownController from '../../DropDownController'



const Trainings = () => {
  const trainingConsultingProps = {
    pageTitle: "Expert Training and Consulting Services Madurai | Wizinoa",
    discriptionName: "service offers",
    descriptionContent: "Wizinoa offers top-tier  training and consulting services in India. Elevate your business with our expertise.",
    heading: 'Training and Consulting',
    para: 'WizInoa specializes in providing cutting-edge training and consulting services, empowering businesses with the knowledge and expertise needed for success in today\'s dynamic landscape.',
    svgSrc: 'https://www.svgrepo.com/show/324100/online-education-elearning-training-video-course-laptop.svg',
    smallHeading: 'Our training and consulting services cover a wide array of topics, ensuring your team is equipped with the skills and insights necessary to navigate challenges and drive innovation.',
    services: [
      { title: 'Customized Training Programs', description: 'Elevate your teams capabilities with our tailor-made training programs, designed to address specific needs and goals within your organization.' },
      { title: 'Strategic Consulting', description: 'Gain a competitive edge with our strategic consulting services, providing valuable insights and guidance to optimize your business processes and decision-making.' },
      { title: 'Technology Workshops', description: 'Stay ahead in the tech landscape with our technology workshops, keeping your team updated on the latest industry trends and advancements.' },
      { title: 'Business Process Consulting', description: 'Optimize your organizational workflows with our business process consulting, identifying areas for improvement and implementing effective solutions.' },
      { title: 'Leadership Development', description: 'Invest in the growth of your leadership team through our leadership development programs, fostering skills essential for navigating today\'s dynamic business environment.' },
    ],
  };

  return (
    <div className='w-full flex justify-center item-center  '>
      <DropDownController {...trainingConsultingProps} />
    </div>
  )
}

export default Trainings