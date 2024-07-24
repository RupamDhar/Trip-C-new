import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-900">
            <div className="container mx-auto py-12 sm-max:px-2 px-8">
                <div className="flex justify-around sm-max:grid sm-max:grid-cols-1 sm-max:grid-cols-2 sm-max:grid-cols-3 gap-y-8">
                    {/* Quick Links */}
                    <div className="footer-widget">
                        <div className="widget-title">
                            <h4 className="text-xl font-bold mb-4 sm-max:text-[16px]">Quick Links</h4>
                        </div>
                        <div className="widget-content">
                            <ul className="footer-links sm-max:text-[12px]">
                                <li><a href="/" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Home</a></li>
                                <li><a href="/about-us" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">About Us</a></li>
                                <li><a href="/faqs" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">FAQ’s</a></li>
                                <li><a href="/blog" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Blog</a></li>
                                <li><a href="/media" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Media Center</a></li>
                                <li><a href="/contact-us" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Terms & Policies */}
                    <div className="footer-widget">
                        <div className="widget-title">
                            <h4 className="text-xl font-bold mb-4 sm-max:text-[16px]">Terms & Policies</h4>
                        </div>
                        <div className="widget-content">
                            <ul className="footer-links sm-max:text-[12px]">
                                <li><a href="/terms-of-use" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Term & Conditions</a></li>
                                <li><a href="/privacy-policy" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Privacy policies</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Car Rental Cities */}
                    <div className="footer-widget">
                        <div className="widget-title">
                            <h4 className="text-xl font-bold mb-4 sm-max:text-[16px]">Car Rental Cities</h4>
                        </div>
                        <div className="widget-content">
                            <ul className="footer-links sm-max:text-[12px]">
                                <li><a href="/car-rental-delhi" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Delhi</a></li>
                                <li><a href="/car-rental-bangalore" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Bangalore</a></li>
                                <li><a href="/car-rental-mumbai" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Mumbai</a></li>
                                <li><a href="/car-rental-hyderabad" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Hyderabad</a></li>
                                <li><a href="/car-rental-chennai" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Chennai</a></li>
                                <li><a href="/car-rental-pune" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Pune</a></li>
                                <li><a href="/car-rental-kolkata" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Kolkata</a></li>
                                <li><a href="/car-rental-ahmedabad" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Ahmedabad</a></li>
                                <li><a href="/car-rental-jaipur" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Jaipur</a></li>
                                <li><a href="/car-rental-vishakhapatnam" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Vishakhapatnam</a></li>
                                <li><a href="/car-rental-noida" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Noida</a></li>
                                <li><a href="/car-rental-gurgaon" className="text-gray-700 hover:text-yellow-500 transition-colors duration-150">Gurgaon</a></li>
                            </ul>
                        </div>  
                    </div>

                    {/* Placeholder */}
                    {/* <div className="footer-widget w-auto inline-block">
                        <div className="widget-title">
                            <h4 className="text-xl font-bold mb-4 sm-max:text-[16px] text-white">Placeholder</h4>
                        </div>
                        <div className="widget-content">
                            <ul className="footer-links sm-max:text-[12px]">
                            </ul>
                        </div>
                    </div> */}
                </div>

                {/* Footer Bottom */}
                <div className="flex justify-around border-t border-gray-200 mt-8 pt-8 flex-row sm-max:flex-col sm-max:gap-4 items-center justify-between">
                    <div className="footer-logo mb-4 sm-max:mb-0">
                        <img src="https://www.carzonrent.com/webcor/images/icons/Carzonrent.svg" alt="Carzonrent logo" className="footer-logo-img h-5" />
                    </div>
                    <div className="social-media mb-4 sm-max:mb-0">
                        <ul className="social-media-links flex gap-4">
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/carzonrent"><img src="https://www.carzonrent.com/webcor/images/icons/facebook_icon.svg" className='h-[32px] sm-max:h-[16px]' alt="Facebook" /></a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/carzonrentin/?hl=hi"><img src="https://www.carzonrent.com/webcor/images/icons/instagram.svg" className='h-[32px] sm-max:h-[16px]' alt="Instagram" /></a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CarzonrentIN"><img src="https://www.carzonrent.com/webcor/images/icons/twitter.svg" className='h-[32px] sm-max:h-[16px]' alt="Twitter" /></a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/carzonrent-india-pvt-ltd"><img src="https://www.carzonrent.com/webcor/images/icons/linkedin.svg" className='h-[32px] sm-max:h-[16px]' alt="LinkedIn" /></a></li>
                        </ul>
                    </div>
                    <div className="contact-info">
                        <a href="tel:011-4184 1212" className="phone-link flex items-center text-gray-700 hover:text-yellow-500 transition-colors duration-150">
                            <img src="https://www.carzonrent.com/webcor/images/icons/mobile phone solid.svg" className="phone-icon h-5 mr-2" alt="Phone Icon" />
                            43083000
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
