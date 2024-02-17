import { easeInOut } from "framer-motion";
export const variantsForList = {
    hide: { opacity: 0, x: -50 },
    show: { opacity: [1], x: 0 },
    listTransition: { duration: 1, type: 'spring', stiffness: 150, damping: 30,ease: 'easeInOut' }
  
}