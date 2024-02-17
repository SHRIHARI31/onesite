import { easeInOut } from "framer-motion";
export const variantsForCard = {
    hide: { scale:.2, opacity:0 },
    show: { scale: [1], opacity:[.3,.4,.5,.6,.8,1]},
    listTransition: { duration: '.5s', type: 'spring', stiffness: 200, damping: 30 ,ease: 'easeInOut'}
}