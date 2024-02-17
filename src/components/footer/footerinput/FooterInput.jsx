import React from 'react'
import './footerinput.css'
import logo from '../../navbar/img/whitelogo.svg'
const FooterInput = () => {
    return (
        <div className='footer-input-body'>
            <img src={logo} className='it-img ' alt="" loading='lazy' />
            <div className="address-div ">
                <div className="address-heading">
                    visit us
                </div>
                <address className='company-address tracking-wide'>No 76, Athikulam Main Road, Pudhur Vandipathai Road,
                    Reserve Line Post, Madurai-625014</address>
            </div>
            <div className="input-div">
                <h4 className='address-heading'>For updates</h4>
                <label htmlFor="" className='news-letter-heading tracking-wide'>Subscribe or news letter to get more technology updates</label>
                <div className="input-section">
                    <input type="text" className='input-footer-input' placeholder='Enter your mail' />
                    <button type='button' className='click-btn'><img src="https://www.svgrepo.com/show/292053/right-arrow-next.svg" alt="" className='click-btn-img' /></button>
                </div>
            </div>
        </div>
    )
}

export default FooterInput