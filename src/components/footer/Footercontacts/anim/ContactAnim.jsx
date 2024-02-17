import React from 'react'
import Lottie from 'lottie-react'
import contact from './contact.json'
const ContactAnim = () => {
  return (
    <Lottie animationData={contact} loop={true}/>
  )
}

export default ContactAnim