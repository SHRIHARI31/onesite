import React from 'react'

const WrippleButton = ({ ...props }) => {
    return (
        <div className="relative inline-flex items-center shadow-sm shadow-black z-[1] active:scale-105  transition-all ease-in-out max-sm:scale-[0.7]
         justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-neutral-800/80 rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-inoa-red rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative text-lg tracking-wide font-poppins">{props.text}</span>
        </div>
    )
}

export default WrippleButton