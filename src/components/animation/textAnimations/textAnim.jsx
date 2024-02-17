import { easeInOut } from "framer-motion";

export const variantsForText = {
    hide: { opacity: 0, y: 30 },
    show: { opacity: [0.3,0.6,1], y: 0 },
    listTransition: { duration: 0.5, type: 'spring', stiffness: 150, damping: 30,ease: 'easeInOut' }
}