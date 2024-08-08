import React, { useState } from 'react';
// import './LoginForm.css';

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
        <div className='login-form-container absolute top-0 left-0 flex justify-center items-center h-screen w-screen bg-[rgba(0,0,0,0.5)]'>
            <div className="form-wrapper relative flex h-fit w-[30vw] relative flex sm-max:h-[60vh] sm-max:w-auto h-fit w-[30vw]">
                {/* <img src="/loginImg.jpg" className='form-img' alt="" /> */}
                <div className="login-form relative flex flex-col gap-[20px] justify-center items-center p-[20px] h-full w-full bg-[aliceblue]">
                    <div className="close absolute top-[8px] right-[12px] w-full text-right cursor-pointer" onClick={() => setToggleForm(false)}>
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <img src="/Trip-C_logo.jpeg" className='h-[60px] shadow-md' alt="" />
                    <span className='text-[32px] font-bold'>{activeTab === 'login' ? 'LOGIN' : 'SIGN UP'}</span>
                    <div className="form-content w-full">
                        {activeTab === 'login' ? (
                            <>
                                <div className="login-info flex justify-between items-center h-[40px] w-full mb-[15px]">
                                    {/* <label htmlFor="phone-input">Phone</label> */}
                                    <input
                                    className='flex-grow h-full px-[10px] border border-[rgb(139,139,139)] rounded-[10px] bg-[#ececec] focus:outline-none'
                                        type="number"
                                        placeholder='Enter Phone number'
                                        value={phone}
                                        onChange={(e) => handleInputChange(e, setPhone)}
                                    />
                                </div>
                                <div className="login-info flex justify-between items-center h-[40px] w-full mb-[15px]">
                                    {/* <label htmlFor="password-input">Password</label> */}
                                    <input
                                    className='flex-grow h-full px-[10px] border border-[rgb(139,139,139)] rounded-[10px] bg-[#ececec] focus:outline-none'
                                        type="password"
                                        placeholder='Enter Password'
                                        value={password}
                                        onChange={(e) => handleInputChange(e, setPassword)}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="login-info flex justify-between items-center h-[40px] w-full mb-[15px]">
                                    {/* <label htmlFor="name-input">Name</label> */}
                                    <input
                                    className='flex-grow h-full px-[10px] border border-[rgb(139,139,139)] rounded-[10px] bg-[#ececec] focus:outline-none'
                                        type="text"
                                        placeholder='Enter Name'
                                        value={name}
                                        onChange={(e) => handleInputChange(e, setName)}
                                    />
                                </div>
                                <div className="login-info flex justify-between items-center h-[40px] w-full mb-[15px]">
                                    {/* <label htmlFor="phone-input">Phone</label> */}
                                    <input
                                    className='flex-grow h-full px-[10px] border border-[rgb(139,139,139)] rounded-[10px] bg-[#ececec] focus:outline-none'
                                        type="number"
                                        placeholder='Enter Phone number'
                                        value={phone}
                                        onChange={(e) => handleInputChange(e, setPhone)}
                                    />
                                </div>
                                <div className="login-info flex justify-between items-center h-[40px] w-full mb-[15px]">
                                    {/* <label htmlFor="email-input">Email</label> */}
                                    <input
                                    className='flex-grow h-full px-[10px] border border-[rgb(139,139,139)] rounded-[10px] bg-[#ececec] focus:outline-none'
                                        type="email"
                                        placeholder='Enter Email'
                                        value={email}
                                        onChange={(e) => handleInputChange(e, setEmail)}
                                    />
                                </div>
                                <div className="login-info flex justify-between items-center h-[40px] w-full mb-[15px]">
                                    {/* <label htmlFor="password-input">Password</label> */}
                                    <input
                                    className='flex-grow h-full px-[10px] border border-[rgb(139,139,139)] rounded-[10px] bg-[#ececec] focus:outline-none'
                                        type="password"
                                        placeholder='Enter Password'
                                        value={password}
                                        onChange={(e) => handleInputChange(e, setPassword)}
                                    />
                                </div>
                            </>
                        )}
                        <button className='login-submit-btn h-[45px] w-full border-2 border-[var(--theme-yellow)] font-semibold text-white bg-[var(--theme-yellow)] transition-all duration-200 ease-in-out hover:bg-white hover:text-[var(--theme-yellow)]' onClick={handleSubmit}>
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
