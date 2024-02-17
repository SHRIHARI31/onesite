import React, { useState } from 'react'
import '../testimonials.css'


const Card = (props) => {
    const [visible, setVisible] = useState(false)
    return (
        <>

            <div classNameName="card border relative ">

                <div className=" flex w-80  mt-10 px-2 flex-col rounded-xl bg-white relative bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r  bg-inoa-red">
                        <img src={props.clientImage} alt="" />
                    </div>
                    <div className="p-6  h-[150px]">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {props.clientName}
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            {props.clientDesignation}
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button data-ripple-light="true" type="button" className="select-none rounded-lg    bg-inoa-red py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-m shadow-red-300 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => setVisible(!visible)}>
                            Load comments <span className='absolute right-2 '>+</span>
                        </button>
                        <div onMouseLeave={() => setVisible(!visible)} className={`greets ${visible ? 'block' : 'hidden'} absolute top-0   left-0 right-0 w-full h-full overflow-y-scroll bg-white text-inoa-red p-5  z-[3] rounded-lg  `}>
                            {props.greets}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}



export default Card