import React from 'react'
import { motion } from 'framer-motion'
const IndustryCard = React.forwardRef((props, ref) => {
    return (
        <>
            <motion.div ref={ref} variants={props.variantsForCard} initial={props.variantsForCard.hide}
                animate={props.inView ? props.variantsForCard.show : props.variantsForCard.hide}
                transition={props.variantsForCard.listTransition}

            ><img src={props.imgUrl} alt="" className={props.className} /><div>{props.name}</div></motion.div>
        </>


    )
})

export default IndustryCard