import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ setToggleForm }) => {
    const [activeTab, setActiveTab] = useState('login'); // Track active tab
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleInputChange(event, setter) {
        setter(event.target.value);
    }

    function handleSubmit() {
        if (activeTab === 'login') {
            console.log('Login:', { phone });
        } else {
            console.log('Signup:', { name, phone, email, password });
        }
    }

    function toggleTab() {
        setActiveTab(activeTab === 'login' ? 'signup' : 'login');
    }

    return (
        <div className='login-form-container'>
            <div className="form-wrapper">
                {/* <img src="/loginImg.jpg" className='form-img' alt="" /> */}
                <div className="login-form">
                    <div className="close" onClick={() => setToggleForm(false)}>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <img src="/Trip-C_logo.jpeg" className='h-[60px] shadow-md' alt="" />
                    <span className='text-[32px] font-bold'>{activeTab === 'login' ? 'LOGIN' : 'SIGN UP'}</span>
                    <div className="form-content">
                        {activeTab === 'login' ? (
                            <>
                                <div className="login-info">
                                    {/* <label htmlFor="phone-input">Phone</label> */}
                                    <input
                                        type="number"
                                        placeholder='Enter Phone number'
                                        value={phone}
                                        onChange={(e) => handleInputChange(e, setPhone)}
                                    />
                                </div>
                                <div className="login-info">
                                    {/* <label htmlFor="password-input">Password</label> */}
                                    <input
                                        type="password"
                                        placeholder='Enter Password'
                                        value={password}
                                        onChange={(e) => handleInputChange(e, setPassword)}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="login-info">
                                    {/* <label htmlFor="name-input">Name</label> */}
                                    <input
                                        type="text"
                                        placeholder='Enter Name'
                                        value={name}
                                        onChange={(e) => handleInputChange(e, setName)}
                                    />
                                </div>
                                <div className="login-info">
                                    {/* <label htmlFor="phone-input">Phone</label> */}
                                    <input
                                        type="number"
                                        placeholder='Enter Phone number'
                                        value={phone}
                                        onChange={(e) => handleInputChange(e, setPhone)}
                                    />
                                </div>
                                <div className="login-info">
                                    {/* <label htmlFor="email-input">Email</label> */}
                                    <input
                                        type="email"
                                        placeholder='Enter Email'
                                        value={email}
                                        onChange={(e) => handleInputChange(e, setEmail)}
                                    />
                                </div>
                                <div className="login-info">
                                    {/* <label htmlFor="password-input">Password</label> */}
                                    <input
                                        type="password"
                                        placeholder='Enter Password'
                                        value={password}
                                        onChange={(e) => handleInputChange(e, setPassword)}
                                    />
                                </div>
                            </>
                        )}
                        <button className='login-submit-btn' onClick={handleSubmit}>
                            {activeTab === 'login' ? 'LOGIN' : 'SIGN UP'}
                        </button>
                        <div className="register-question text-black flex justify-center mt-5 cursor-pointer">
                            {activeTab === 'login' ? (
                                <>
                                    Don't have an account? <a className='text-[#dc635b] ml-1' onClick={toggleTab}>Sign Up</a>
                                </>
                            ) : (
                                <>
                                    Already have an account? <a className='text-[#dc635b] ml-1' onClick={toggleTab}>Login</a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
