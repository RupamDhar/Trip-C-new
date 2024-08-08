import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ setToggleForm }) => {
    const [activeTab, setActiveTab] = useState('login'); // Track active tab
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState(''); // Added for signup
    const [password, setPassword] = useState(''); // Added for signup

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

    return (
        <div className='login-form-container'>
            <div className="form-wrapper">
                <img src="/loginImg.jpg" className='form-img' alt="" />
                <div className="login-form">
                    <div className="close" onClick={() => setToggleForm(false)}>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <div className="tab-container">
                        <button
                            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
                            onClick={() => setActiveTab('login')}
                        >
                            Login
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
                            onClick={() => setActiveTab('signup')}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="form-content">
                        {activeTab === 'login' ? (
                            <>
                                <div className="login-info">
                                    <label htmlFor="phone-input">Phone</label>
                                    <input
                                        type="number"
                                        placeholder='Enter Phone number'
                                        value={phone}
                                        onChange={(e) => handleInputChange(e, setPhone)}
                                    />
                                </div>
                                <div className="login-info">
                                    <label htmlFor="email-input">Email</label>
                                    <input
                                        type="email"
                                        placeholder='Enter Email'
                                        value={email}
                                        onChange={(e) => handleInputChange(e, setEmail)}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="login-info">
                                    <label htmlFor="name-input">Name</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Name'
                                        value={name}
                                        onChange={(e) => handleInputChange(e, setName)}
                                    />
                                </div>
                                <div className="login-info">
                                    <label htmlFor="phone-input">Phone</label>
                                    <input
                                        type="number"
                                        placeholder='Enter Phone number'
                                        value={phone}
                                        onChange={(e) => handleInputChange(e, setPhone)}
                                    />
                                </div>
                                <div className="login-info">
                                    <label htmlFor="email-input">Email</label>
                                    <input
                                        type="email"
                                        placeholder='Enter Email'
                                        value={email}
                                        onChange={(e) => handleInputChange(e, setEmail)}
                                    />
                                </div>
                                <div className="login-info">
                                    <label htmlFor="password-input">Password</label>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
