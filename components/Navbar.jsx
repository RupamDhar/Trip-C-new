import React, { useState } from 'react';
import './Navbar.css';
// import { a } from 'react-router-dom';
import LoginForm from './LoginForm';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [toggleForm, setToggleForm] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="carzonrent-navbar">
            <div className="left-logo">
                <img src="/Trip-C_logo.jpeg" alt="" />
            </div>
            <div className="nav-interact">
                <div className="nav-hrefs-wrapper">
                    <a href='/' className="nav-hrefs">
                        {/* <img src="https://www.carzonrent.com/webcor/images/icons/discount-icon.svg" alt="Discount Icon" /> */}
                        <i className="fa-solid fa-percent flex justify-center items-center text-white h-[25px] w-[25px] bg-[#dc635b] rounded-[50%]"></i>
                        Travel Packages
                    </a>
                    <div className="nav-hrefs">
                        Business Solutions
                        <div className="biz-sol-modal">
                            <ul className="biz-sol-list">
                                <li className="biz-sol-list-item"><a href="/corporatetravels">Corporate Travels</a></li>
                                <li className="biz-sol-list-item"><a href="/smetravels">SME Travels</a></li>
                                <li className="biz-sol-list-item"><a href="/aviationtravelsolutions">Aviation Travel Solutions</a></li>
                                <li className="biz-sol-list-item"><a href="/govpsutravel">Gov & PSU's Travel</a></li>
                                <li className="biz-sol-list-item"><a href="/hospitalitytravel">Hospitality Travel</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-hrefs">
                        Services
                        <div className="services-modal">
                            <div className="services-for-biz">
                                <h2>
                                    <img src="https://www.carzonrent.com/webcor/images/icons/forbusiness.svg" alt="For Business Icon" />
                                    For Business
                                </h2>
                                <ul className="service-for-biz-list">
                                    <li className="service-for-biz-list-item">ETS</li>
                                    <li className="service-for-biz-list-item">Plugs</li>
                                    <li className="service-for-biz-list-item">Events</li>
                                    <li className="service-for-biz-list-item">Expats</li>
                                    <li className="service-for-biz-list-item">Long Term Rentals</li>
                                </ul>
                            </div>
                            <div className="services-for-individual">
                                <h2>
                                    <img src="https://www.carzonrent.com/webcor/images/icons/forindividuals.svg" alt="For Individuals Icon" />
                                    For Individuals
                                </h2>
                                <ul className="service-for-individual-list">
                                    <li className="service-for-individual-list-item">Airport Transfers</li>
                                    <li className="service-for-individual-list-item">Long Term Rentals</li>
                                    <li className="service-for-individual-list-item">Outstation Travel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav-hrefs">Blog</div>
                    <div className="nav-hrefs"><a href="/aboutus">About Us</a></div>
                    <div className="nav-hrefs"><a href="/contactus">Contact Us</a></div>
                </div>
            </div>


            <i className="fa-solid fa-bars hamburg-icon" onClick={toggleMobileMenu}></i>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-close" onClick={toggleMobileMenu}>×</div>
                <div className="nav-hrefs-wrapper">
                    <a href='/' className="nav-hrefs">Travel Packages</a>
                    <div className="nav-hrefs">
                        Business Solutions
                        <div className="biz-sol-modal">
                            <ul className="biz-sol-list">
                                <li className="biz-sol-list-item"><a href="/corporatetravels">Corporate Travels</a></li>
                                <li className="biz-sol-list-item"><a href="/smetravels">SME Travels</a></li>
                                <li className="biz-sol-list-item"><a href="/aviationtravelsolutions">Aviation Travel Solutions</a></li>
                                <li className="biz-sol-list-item"><a href="/govpsutravel">Gov & PSU's Travel</a></li>
                                <li className="biz-sol-list-item"><a href="/hospitalitytravel">Hospitality Travel</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-hrefs">
                        Services
                        <div className="services-modal">
                            <div className="services-for-biz">
                                <h2>
                                    <img src="https://www.carzonrent.com/webcor/images/icons/forbusiness.svg" alt="For Business Icon" />
                                    For Business
                                </h2>
                                <ul className="service-for-biz-list">
                                    <li className="service-for-biz-list-item">ETS</li>
                                    <li className="service-for-biz-list-item">Plugs</li>
                                    <li className="service-for-biz-list-item">Events</li>
                                    <li className="service-for-biz-list-item">Expats</li>
                                    <li className="service-for-biz-list-item">Long Term Rentals</li>
                                </ul>
                            </div>
                            <div className="services-for-individual">
                                <h2>
                                    <img src="https://www.carzonrent.com/webcor/images/icons/forindividuals.svg" alt="For Individuals Icon" />
                                    For Individuals
                                </h2>
                                <ul className="service-for-individual-list">
                                    <li className="service-for-individual-list-item">Airport Transfers</li>
                                    <li className="service-for-individual-list-item">Long Term Rentals</li>
                                    <li className="service-for-individual-list-item">Outstation Travel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav-hrefs">Blog</div>
                    <div className="nav-hrefs"><a href="/aboutus">About Us</a></div>
                    <div className="nav-hrefs"><a href="/contactus">Contact Us</a></div>
                </div>
            </div>
            <div className="login-signup-btn" onClick={()=>setToggleForm(!toggleForm)}>
                <i className="fa-solid fa-user"></i>
                <span className='sm-max:hidden'>Login/SignUp</span>
            </div>

            {toggleForm && <LoginForm setToggleForm={setToggleForm}/>}

        </div>
    );
};

export default Navbar;
