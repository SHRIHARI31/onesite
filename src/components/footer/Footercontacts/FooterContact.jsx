import React from 'react'
import './footercontact.css'
import WrippleButton from '../../buttons/wrippleButton/WrippleButton'
import { useState } from 'react'




const Contact = () => {
    const [values, setValues] = useState({ name: '', email: '', phone: '', comment: '' })
    const [error, setError] = useState({ name: '', email: '', phone: '', comment: '' })
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: [e.target.value] })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.name === "") {
            setError({ ...values, name: 'field empty !' })
        }
        if (values.email === "") {
            setError({ ...values, email: 'field empty !' })
        }
        if (values.phone === "") {
            setError({ ...values, phone: 'field empty !' })
        }
        if (values.comment === "") {
            setError({ ...values, comment: 'field empty !' })
        }
    }
    return (
        <div className="contact-us " >

            <div className="contact-body w-full">

                <div className="contact-heading">Contact us</div>
                <div className="contact-para">
                    WizInoa, a prominent IT company, provides tailored solutions for diverse needs. Our contact section ensures seamless communication for inquiries and support. </div>

                <form action="" className="contact-form" onSubmit={handleSubmit}>
                    <div className=" w-full md:grid md:gap-5 md:grid-cols-2">
                        <div className="input-name input-div">
                            <input type="text" value={values.name} onChange={handleChange} placeholder='Name' className='input-name input-getter' name='name' />
                            <span className='error-msg'></span>
                        </div>
                        <div className="input-email input-div">
                            <input type='mail' value={values.email} onChange={handleChange} placeholder='Email' className='input-mail input-getter' name='email' />
                            <span className='error-msg'></span>
                        </div>
                        <div className="input-phone input-div">
                            <input type="text" value={values.phone} onChange={handleChange} placeholder='Phone number' className='input-phone input-getter' name='phone' />
                            <span className='error-msg'></span>
                        </div>

                        <div className="comment input-div">
                            <textarea id="" value={values.comment} onChange={handleChange} cols="27" rows="2" placeholder='Comment' name='comment' className='comment-getter h-[50px]' draggable='false' ></textarea>
                            <span className='error-msg'></span>
                        </div>
                    </div>
                    <div className="button-div max-sm:justify-center  py-3 rounded-md ">
                        <button className='cursor-pointer' type='submit'> <WrippleButton text='submit' /></button>

                    </div>
                </form>


            </div>
        </div>
    )
}

export default Contact