import React from 'react'
import { motion } from 'framer-motion'
import '../technologies.css'
const TechCard = React.forwardRef((props, ref) => {
  return (
    <motion.div ref={ref} variants={props.variantsForCard}
      animate={props.inView ? props.variantsForCard.show : props.variantsForCard.hide}
      initial={props.variantsForCard.hide}
      transition={props.variantsForCard.listTransition}
    ><button><div>
      <div className="heading-div  text-xl   "> {props.name}</div>
      {props.sub.map((item, key = 0) => (
        <div className='tech-item  text-white' key={key + 1}>{item.tech}</div>
      ))}
    </div></button></motion.div>
  )
})

export default TechCard
