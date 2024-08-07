import React from 'react'
// import './OurServices.css'

const OurServices = () => {
    return (
        <div className='our-services-section overflow-hidden flex flex-col items-center h-fit w-screen box-border py-[56px] pb-[100px]'>
            <h2 className="section-header pb-[20px] text-[42px] font-bold text-center sm-max:pb-[10px] sm-max:text-[22px]" style={{ color: '#384863' }}>Our Services</h2>

            {/* <div className="business services-section mb-[100px] w-[82%] sm-max:w-[95%]">
                <div className="sub-section-header mb-[45px] flex justify-between items-center text-[#343434] text-[30px] font-[700] sm-max:mb-[25px] sm-max:text-[18px]">
                    For Businesses
                    <span className='view-more text-[#7e7e7e] text-[20px] font-[600] cursor-pointer transition-all duration-[0.1s] ease-in-out hover:text-[var(--theme-yellow)] sm-max:text-[14px]'>View More &gt;</span>
                </div>
                <div className="category-card-wrapper overflow-hidden flex justify-evenly sm-max:flex-wrap sm-max:gap-[30px]">


                    <div className="category-card shadow-md p-2 min-h-[400px] mb-2 rounded-[20px] bg-white w-[360px] sm-max:w-full" data-aos='fade-left' data-aos-delay='300'>
                        <img className='h-[160px] w-[360px] rounded-2xl mb-[25px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto object-cover' src="https://img.freepik.com/premium-photo/electric-car-ev-charging-battery-charger-station_31965-127533.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355&semt=ais_user-customized" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[#dc635b] my-[10px] text-center text-[20px] font-[700]">Plug-EV</div>
                            <div className="category-card-body text-center text-[14px] font-[300] text-[#505050]">
                                Embrace Eco-friendly mobility with our electric cabs, paving the path to a greener tomorrow.
                            </div>
                            // <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a>
                        </div>
                    </div>

                    <div className="category-card shadow-md p-2 min-h-[400px] mb-2 rounded-[20px] bg-white w-[360px] sm-max:w-full" data-aos='fade-left' data-aos-delay='500'>
                        <img className='h-[160px] w-[360px] rounded-2xl mb-[25px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto object-cover' src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951409.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355&semt=sph" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[#dc635b] my-[10px] text-center text-[20px] font-[700]">Events</div>
                            <div className="category-card-body text-center text-[14px] font-[300] text-[#505050]">
                                Seamless corporate event transportation with reliable cabs, experienced drivers, and efficient planning.
                            </div>
                            // <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a>
                        </div>
                    </div>
                </div>
            </div> */}




            <div className="individuals services-section w-[90%] sm-max:w-[95%] mx-2">
                {/* <div className="sub-section-header mb-[45px] flex justify-between items-center text-[#343434] text-[30px] font-[700] sm-max:mb-[25px] sm-max:text-[18px]">
                    For Individuals
                    <span className='view-more text-[#7e7e7e] text-[20px] font-[600] cursor-pointer transition-all duration-[0.1s] ease-in-out hover:text-[var(--theme-yellow)] sm-max:text-[14px]'>View More &gt;</span>
                </div> */}
                <div className="category-card-wrapper overflow-hidden flex justify-between gap-[20px] sm-max:flex-wrap sm-max:gap-[30px]" data-aos='fade-left' data-aos-delay='100'>
                    <div className="category-card shadow-md p-2 min-h-[400px] mb-2 ml-2 rounded-[20px] bg-white w-[360px] sm-max:w-full" data-aos='fade-left' data-aos-delay='100'>
                        <img className='h-[160px] w-[360px] rounded-2xl mb-[5px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto object-cover' src="https://www.seahawktravels.in/assets/images/services/ets.jpg" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[#dc635b] my-[10px] text-center text-[20px] font-[700]">Local Transport</div>
                            <div className="category-card-body text-center text-[14px] font-[300] text-[#505050]">
                                Our comprehensive travel solutions ensure that every journey for your employees is both convenient and comfortable. Whether it's daily commutes or business trips, we prioritize seamless and efficient transport to enhance productivity and satisfaction as well as enjoyment.
                            </div>
                            {/* <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a> */}
                            <div className="our-services-points flex justify-around my-4">
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-hand-holding-heart fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>Flexible <br />Packages</span>
                                </div>
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-mobile-screen fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>Cab at your<br />Displosal</span>
                                </div>
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-location-dot fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>Multiple <br />Packages</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category-card shadow-md p-2 min-h-[400px] mb-2 rounded-[20px] bg-white w-[360px] sm-max:w-full">
                        <img className='h-[160px] w-[360px] rounded-2xl object-cover mb-[5px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto object-cover' src="https://etimg.etb2bimg.com/photo/106119642.cms" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[#dc635b] my-[10px] text-center text-[20px] font-[700]">Intercity Rides</div>
                            <div className="category-card-body text-center text-[14px] font-[300] text-[#505050]">
                                Experience seamless and luxurious transportation between cities, designed to meet your every need. Our service ensures that you travel in comfort and style, with attention to every detail. Our professional chauffeurs are dedicated to providing you with a smooth and enjoyable journey.
                            </div>
                            {/* <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a> */}
                            <div className="our-services-points flex justify-around my-4">
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-route fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>Multiple <br />Routes</span>
                                </div>
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-money-bill-wave fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>Lowest<br />Rates</span>
                                </div>
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-tag fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>All Inclusive <br />Prices</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category-card shadow-md p-2 min-h-[400px] mb-2 rounded-[20px] bg-white w-[360px] sm-max:w-full" data-aos='fade-left' data-aos-delay='300'>
                        <img className='h-[160px] w-[360px] rounded-2xl mb-[5px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto object-cover' src="https://pridetravels.in/wp-content/uploads/2018/02/Long-Term-Rentals.jpg" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[#dc635b] my-[10px] text-center text-[20px] font-[700]">Long Term Rentals</div>
                            <div className="category-card-body text-center text-[14px] font-[300] text-[#505050]">
                                Enjoy extended rentals customized for your long-term convenience and freedom. Experience unparalleled flexibility with our premium long-term rental services. Our vehicles are meticulously maintained and equipped to provide the utmost comfort for extended journeys.
                            </div>
                            {/* <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a> */}
                            <div className="our-services-points flex justify-around my-4">
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-hand-holding-heart fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>Flexible <br />Packages</span>
                                </div>
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-mobile-screen fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>Cab at your<br />Displosal</span>
                                </div>
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-location-dot fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>Multiple <br />Packages</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category-card shadow-md p-2 min-h-[400px] mb-2 mr-2 rounded-[20px] bg-white w-[360px] sm-max:w-full" data-aos='fade-left' data-aos-delay='500'>
                        <img className='h-[160px] object-cover w-[360px] rounded-2xl mb-[5px] sm-max:mb-[2px] sm-max:w-full sm-max:h-auto object-cover' src="https://thumbs.dreamstime.com/b/business-class-service-airport-business-class-transfer-airport-shuttle-business-class-service-airport-business-class-123388643.jpg" alt="" />
                        <div className="category-card-info">
                            <div className="category-card-header text-[#dc635b] my-[10px] text-center text-[20px] font-[700]">Airport Transfers</div>
                            <div className="category-card-body text-center text-[14px] font-[300] text-[#505050]">
                                Experience the epitome of convenience and comfort with our top-notch airport transportation services. From the moment you book with us, we ensure a smooth and stress-free journey to and from the airport. Our dedicated chauffeurs is committed to delivering a superior travel experience.
                            </div>
                            {/* <a href='#' className="category-card-href font-[700] text-[#f6c507] cursor-pointer">Learn More</a> */}
                            <div className="our-services-points flex justify-around my-4">
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-car fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>Reliability <br />Guaranteed</span>
                                </div>
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-money-bill-wave fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>Lowest<br />Rates</span>
                                </div>
                                <div className="service-point flex flex-col items-center justify-center">
                                    <i className="fa-solid fa-user-tie fa-2x text-[#dc635b] p-1"></i>
                                    <span className='text-center text-xs font-[600]'>Courteous <br />Chauffeurs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices
