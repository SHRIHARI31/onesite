import React from 'react';
import { motion } from 'framer-motion';

const SolutionCard = React.forwardRef((props, ref) => {
  return (
    <motion.li className={props.className} ref={ref} variants={props.variantsForCard} initial={props.variantsForCard.hide} 
    animate={props.inView ? props.variantsForCard.show : props.variantsForCard.hide} transition={props.variantsForCard.listTransition} >
      {props.name}
    </motion.li>
  );
});

export default SolutionCard;
