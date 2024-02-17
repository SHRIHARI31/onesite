import { easeInOut } from "framer-motion";
export const variantForSvg = {

    hide: { opacity: 0, y: 75 },
    show: { opacity: [0.3, 0.6, 1], y: 0 },
    svgTransition: { duration: 1, type: 'spring', stiffness: 320, damping: 100, ease: 'easeInOut' }

}