import React from 'react'
import { useState } from 'react';
import WrippleButton from '../buttons/wrippleButton/WrippleButton';
const ContactModel = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)} ><WrippleButton text='Get Demo' /></button>
            {showModal ? (
                <>
                    <div
                        className="justify-center   w-full items-center top-20 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1000] outline-none focus:outline-none"
                    >

                        <div className="relative max-sm:w-[98%] md:w-[60%]  lg:w-[40%] my-6 mx-auto ">
                            {/*content*/}
                            <form className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start  w-full justify-between bg-inoa-red text-white p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="md:text-3xl font-semibold">
                                        Contact us
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto form-section w-full">

                                    <div class="mb-4">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                            Name
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="mobile">
                                            Mobile Number
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="tel" placeholder="Mobile Number" />
                                    </div>
                                    <div class="mb-6">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                            Email Address
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" />
                                    </div>

                                    <div class="mb-6">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                            Comment
                                        </label>
                                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" />
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex gap-5 py-4 items-center justify-center border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className=""
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <WrippleButton text={'close'} />
                                    </button>
                                    <button
                                        className=""
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <WrippleButton text={'Submit'} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"  ></div>
                </>
            ) : null}

        </>
    )
}

export default ContactModel