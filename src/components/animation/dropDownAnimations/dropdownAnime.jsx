import { easeInOut } from "framer-motion";

export const variantsForDropDowns ={
    hide: {  opacity:0 , },
    show: { opacity:1,},
    dropTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30,ease: 'easeInOut'},
   
} 