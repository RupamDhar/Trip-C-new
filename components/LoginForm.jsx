import React, { useState } from 'react'
import './LoginForm.css'

const LoginForm = ({ setToggleForm }) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    function handleNameInput() {
        setName(event.target.value);
    }
    function handlePhoneInput() {
        setPhone(event.target.value);
    }

    function handleLoginSubmit() {
        console.log(name);
        console.log(phone);
    }

    return (
        <div className='login-form-container'>
            <div className="form-wrapper">
                <img src="/loginImg.jpg" className='form-img' alt="" />
                <div className="login-form">
                    <div className="close" onClick={() => setToggleForm(false)}>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <span className='text-[30px] font-semibold text-[#797979]'>Login / Sign Up</span>
                    <div className="login-info">
                        <label htmlFor="name-input">Name</label>
                        <input type="text" placeholder='Enter Name' value={name} onChange={handleNameInput}/>
                    </div>
                    <div className="login-info">
                        <label htmlFor="phone-input">Phone</label>
                        <input type="number" placeholder='Enter Phone number' value={phone} onChange={handlePhoneInput}/>
                    </div>
                    <button className='login-submit-btn' onClick={handleLoginSubmit}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
