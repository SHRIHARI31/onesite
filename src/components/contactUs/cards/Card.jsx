import React from 'react'
import WrippleButton from '../../buttons/wrippleButton/WrippleButton'
import { Link } from 'react-router-dom'

const Card = (props) => {

    return (
        <div className='flex flex-col  w-fit md:w-[300px]  mx:[100px] bg-neutral-700 hover:bg-inoa-red/95 mx-2 rounded-md  justify-center items-center  px-2'>
            <div className=' pt-3 font-bold text-blue-100 tracking-wide py-10 mt-4 text-xl'>{props.jobTitle}</div>
            <div className="card-body px-3 flex justify-center item-center flex-col h-[200px] ">
                <div className="text-sm text-blue-100">{props.jobDescription}</div>
                <button className=" py-3 text-blue-100 my-4  text-xl rounded-md">
                    <Link to='/contact-us'><WrippleButton text={props.button} /></Link>
                </button>

            </div>

        </div>
    )
}

export default Card