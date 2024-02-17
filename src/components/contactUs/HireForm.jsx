import React from 'react'
import WrippleButton from '../buttons/wrippleButton/WrippleButton'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const HireForm = () => {

    return (
        <div className='w-full flex flex-col   absolute z-[3] top-[50%] justify-center items-center  pb-10'>

            <div className={`w-[60%]  bg-gray-200 rounded-md p-4 shadow-sm shadow-black block`} >
                <div className="w-full flex flex-col ">
                    <div className="font-bold text-lg mb-2">Contact us</div>
                    <div className="text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam magni est impedit in quos vero nam laborum? Harum quod eum, nostrum!</div>
                    <form className="space-y-4">
                        <input type="text" placeholder='Name' className='w-full p-2 border border-gray-300 outline-none rounded-md' name='userName' />
                        <input type='mail' placeholder='Email' className='w-full p-2 border border-gray-300 outline-none rounded-md' name='userEmail' />
                        <input type="text" placeholder='Phone number' className='w-full p-2 border border-gray-300 outline-none rounded-md' name='userPhone' />
                        <input type="text" placeholder='Country' className='w-full p-2 border outline-none border-gray-300 rounded-md' name='userCountry' />
                        <textarea id="" cols="30" rows="2" placeholder='Comment' name='userComment' className='w-full p-2 outline-none border border-gray-300 rounded-md'></textarea>
                        <input type="text" placeholder='Your Whatsapp / Telegram / Skype' name='userSocialMedia' className='w-full p-2 border outline-none border-gray-300 rounded-md' />

                        <div className=" flex  flex-col gap-3 capitalize">
                            <div>Upload your resume here :</div>
                            <input type='file' /></div>
                        <div className="flex justify-center py-3 rounded-md">
                            <WrippleButton text='submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HireForm