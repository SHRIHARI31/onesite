import React from 'react'
import Lottie from 'lottie-react'
import Cheers from './cherrUpSvg.json'
const CherrUp = () => {
    return (
        <Lottie loop={true} animationData={Cheers} />
    )
}

export default CherrUp