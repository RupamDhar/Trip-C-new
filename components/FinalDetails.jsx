import { useState } from 'react'
import React from 'react'
import { APILoader, PlacePicker } from '@googlemaps/extended-component-library/react';
// import './FinalDetails.css'

const FinalDetails = () => {

    const [mainDetail, setMainDetail] = useState('contact-and-pickup');

    const url = new URL(window.location.href); // Get the current URL
    const params = new URLSearchParams(url.search);
    const pickupLocation = params.get('pickup-loc');
    const dropLocation = params.get('drop-loc');
    const pickupTime = params.get('pickup-time');
    const pickupDate = params.get('pickup-date');
    const car = params.get('car');
    const rate = params.get('rate');

    console.log(`Pickup Location: ${pickupLocation}`);
    console.log(`Drop Location: ${dropLocation}`);
    console.log(`Pickup Time: ${pickupTime}`);
    console.log(`Pickup Date: ${pickupDate}`);

    return (
        <div className='final-details py-[40px] mt-[80px] min-h-screen flex justify-evenly sm-max:flex-col sm-max:items-center sm-max:py-[20px]'>
            <form className="main-details flex flex-col gap-[20px] w-[40%] h-fit p-[20px] shadow-[0px_5px_15px_rgb(172,_172,_172)] rounded-[20px] sm-max:w-full sm-max:mb-[20px] sm-max:rounded-[10px]">
                <UserDetails />
                {/* {mainDetail === 'contact-and-pickup' && <UserDetails setMainDetail={setMainDetail} />}
                {mainDetail === 'payment' && <Payment setMainDetail={setMainDetail} />} */}
            </form>

            <div className="side-details w-[38%] flex flex-col gap-[30px] sm-max:w-full">
                <div className="booking-details flex flex-col relative h-fit gap-[6px] pb-[20px] overflow-hidden rounded-[20px] shadow-[0px_5px_15px_rgb(172,_172,_172)]">
                    <div className="booking-detail-header mb-[14px] py-[10px] text-white text-center bg-[var(--theme-yellow)]">YOUR BOOKING DETAILS</div>
                    <div className="info p-[0_20px] flex sm-max:flex-col sm-max:items-start">
                        <span className='w-[150px] font-bold sm-max:w-auto text-[14px]'>Itinerary : </span>
                        {pickupLocation} &gt; {dropLocation==='Ahmedabad'?'':dropLocation}
                    </div>
                    <div className="info p-[0_20px] flex sm-max:flex-col sm-max:items-start">
                        <span className='w-[150px] font-bold sm-max:w-auto text-[14px]'>Pickup Date : </span>
                        {pickupDate} at {pickupTime}
                    </div>
                    <div className="info p-[0_20px] flex sm-max:flex-col sm-max:items-start">
                        <span className='w-[150px] font-bold sm-max:w-auto text-[14px]'>Car Type : </span>
                        {car}
                    </div>
                    <div className="info p-[0_20px] flex sm-max:flex-col sm-max:items-start">
                        <span className='w-[150px] font-bold sm-max:w-auto text-[14px]'>KMs Included : </span>
                        240 Kms
                    </div>
                    <div className="info p-[0_20px] flex sm-max:flex-col sm-max:items-start">
                        <span className='w-[150px] font-bold sm-max:w-auto text-[14px]'>Total Fare : </span>
                        Rs. {rate} per 80km
                    </div>
                </div>

                <div className="extra-details rounded-[20px] overflow-hidden shadow-[0px_5px_15px_rgb(172,_172,_172)]">
                    <TabsComponent />
                </div>
            </div>


        </div>
    )
}

const UserDetails = ({ setMainDetail }) => {

    const [formattedAddress, setFormattedAddress] = React.useState('');
    const handlePlaceChange = (e) => {
        setFormattedAddress(e.target.value?.formattedAddress ?? '');
    };
    const countries = [];

    return (
        <>
            <APILoader apiKey="API_KEY" solutionChannel="GMP_GCC_placepicker_v1" />
            {/* <div class="container">
                <PlacePicker country={countries} placeholder="Enter a place to see its address" onPlaceChange={handlePlaceChange} />
                <div className="result">
                    {formattedAddress}
                </div>
            </div> */}
            <div className="final-detail-header relative text-center my-[12px] text-[18px] font-bold border-t-2 border-b-2 border-[var(--theme-yellow)] sm-max:text-[16px]">
                CONTACT & PICKUP DETAILS
            </div>
            <div className="input-field flex sm-max:flex-col sm-max:items-start">
                <span className='flex items-center w-[55px] mx-[20px] text-[14px] font-semibold sm-max:w-auto sm-max:mb-[10px]'>NAME</span>
                <input required type="text" className="name final-detail-input flex-grow border-b border-[#e3e3e3] text-[14px] p-[4px] pl-[10px] sm-max:w-full" placeholder='Enter your name' />
            </div>
            <div className="input-field flex sm-max:flex-col sm-max:items-start">
                <span className='flex items-center w-[55px] mx-[20px] text-[14px] font-semibold sm-max:w-auto sm-max:mb-[10px]'>EMAIL</span>
                <input required type="text" className="email final-detail-input flex-grow border-b border-[#e3e3e3] text-[14px] p-[4px] pl-[10px] sm-max:w-full" placeholder='Enter your email address' />
            </div>
            <div className="input-field flex sm-max:flex-col sm-max:items-start">
                <span className='flex items-center w-[55px] mx-[20px] text-[14px] font-semibold sm-max:w-auto sm-max:mb-[10px]'>MOBILE</span>
                <input required type="number" className="mobile final-detail-input flex-grow border-b border-[#e3e3e3] text-[14px] p-[4px] pl-[10px] sm-max:w-full" placeholder='Enter your mobile number' />
            </div>
            <div className="input-field flex sm-max:flex-col sm-max:items-start">
                <span className='flex items-center w-[55px] mx-[20px] text-[14px] font-semibold sm-max:w-auto sm-max:mb-[10px]'>PICKUP</span>
                <input required type="text" className="pickup final-detail-input flex-grow border-b border-[#e3e3e3] text-[14px] p-[4px] pl-[10px] sm-max:w-full" placeholder='Enter your pickup address' />
                {/* <PlacePicker country={countries} className="pickup final-detail-input flex-grow border-b border-[#e3e3e3] text-[14px] p-[4px] pl-[10px] sm-max:w-full" placeholder="Enter a place to see its address" onPlaceChange={handlePlaceChange} /> */}
            </div>
            <div className="input-field flex sm-max:flex-col sm-max:items-start">
                <span className='flex items-center w-[55px] mx-[20px] text-[14px] font-semibold sm-max:w-auto sm-max:mb-[10px]'>DROP</span>
                <input required type="text" className="drop final-detail-input flex-grow border-b border-[#e3e3e3] text-[14px] p-[4px] pl-[10px] sm-max:w-full" placeholder='Enter your drop address' />
            </div>
            <button className='proceed-btn bg-[var(--theme-yellow)] text-white py-[8px] mt-[10px] rounded-[10px]' onClick={() => setMainDetail('payment')}>PROCEED</button>
        </>
    )
}


const TabContent = ({ activeTab }) => {
    switch (activeTab) {
        case 'inclusions':
            return (
                <div className="tab-content p-[1em] bg-white current">
                    <ul className="additional-details list-none p-0 m-0">
                        <li className='flex items-center mb-[1em]'>
                            <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/inclusions_icon1.png" alt="Base Fare and Fuel Charges" />
                            <h6>Base Fare and Fuel Charges</h6>
                        </li>
                        <li className='flex items-center mb-[1em]'>
                            <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/inclusions_icon2.png" alt="Driver Allowance" />
                            <h6>Driver Allowance</h6>
                        </li>
                        <li className='flex items-center mb-[1em]'>
                            <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/exclusions_icon1.png" alt="State Tax & Toll" />
                            <h6>State Tax & Toll</h6>
                        </li>
                        <li className='flex items-center mb-[1em]'>
                            <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/inclusions_icon3.png" alt="GST (5%)" />
                            <h6>GST (5%)</h6>
                        </li>
                    </ul>
                </div>
            );
        case 'exclusions':
            return (
                <div className="tab-content p-[1em] bg-white">
                    <ul className="additional-details list-none p-0 m-0">
                        <li className='flex items-center mb-[1em]'>
                            <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/exclusions_icon1.png" alt="Pay ₹13.5/km after 145 km" />
                            <h6>Pay ₹13.5/km after 145 km</h6>
                        </li>
                        <li className='flex items-center mb-[1em]'>
                            <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/exclusions_icon3.png" alt="Multiple pickups/drops" />
                            <h6>Multiple pickups/drops</h6>
                        </li>
                    </ul>
                </div>
            );
        case 'tc':
            return (
                <div className="tab-content p-[1em] bg-white">
                    <ul className="t-and-c flex flex-col justify-center gap-[10px] pl-[10px] list-disc sm-max:list-none sm-max:gap-[10px]" style={{ fontSize: '12px' }}>
                        <li className='flex items-center mb-[1em]'>Your Trip has a KM limit. If your usage exceeds this limit, you will be charged for the excess KM used.</li>
                        <li className='flex items-center mb-[1em]'>Your trip includes one pick up in Pick-up city and one drop to destination city. It does not include within city travel.</li>
                        <li className='flex items-center mb-[1em]'>If your Trip has Hill climbs, cab AC may be switched off during such climbs.</li>
                    </ul>
                </div>
            );
        default:
            return null;
    }
};

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState('inclusions');

    return (
        <div style={{ margin: '3% 2% !important' }}>
            <ul className="tabs flex list-none p-0 m-0 bg-[#f1f1f1] sm-max:border-b-2 sm-max:border-[var(--theme-yellow)]">
                <li
                    className={`tab-link ${activeTab === 'inclusions' ? 'flex-1 p-[1em] text-center cursor-pointer transition-colors duration-[0.3s] ease bg-[var(--theme-yellow)] text-white font-bold sm-max:p-[10px]' : 'flex-1 p-[1em] text-center cursor-pointer transition-colors duration-[0.3s] ease sm-max:p-[10px'}`}
                    onClick={() => setActiveTab('inclusions')}
                >
                    Inclusions
                </li>
                <li
                    className={`tab-link ${activeTab === 'exclusions' ? 'flex-1 p-[1em] text-center cursor-pointer transition-colors duration-[0.3s] ease bg-[var(--theme-yellow)] text-white font-bold sm-max:p-[10px]' : 'flex-1 p-[1em] text-center cursor-pointer transition-colors duration-[0.3s] ease sm-max:p-[10px'}`}
                    onClick={() => setActiveTab('exclusions')}
                >
                    Exclusions
                </li>
                <li
                    className={`tab-link ${activeTab === 'tc' ? 'flex-1 p-[1em] text-center cursor-pointer transition-colors duration-[0.3s] ease bg-[var(--theme-yellow)] text-white font-bold sm-max:p-[10px]' : 'flex-1 p-[1em] text-center cursor-pointer transition-colors duration-[0.3s] ease sm-max:p-[10px'}`}
                    onClick={() => setActiveTab('tc')}
                >
                    T&amp;C
                </li>
                <div className="clearfix"></div>
            </ul>
            <TabContent activeTab={activeTab} />
        </div>
    );
};


const Payment = ({ setMainDetail }) => {
    return (
        <>
            <div className="final-detail-header">
                PAYMENT DETAILS
                <button className='bg-[#dc635b] absolute right-0 px-2 text-white' onClick={() => setMainDetail('contact-and-pickup')}>
                    &lt;&lt; Back
                </button>
            </div>
            <div className="input-field flex sm-max:flex-col sm-max:items-start">
                <span className='flex items-center w-[55px] mx-[20px] text-[14px] font-semibold sm-max:w-auto sm-max:mb-[10px]'>NAME</span>
                <input type="text" className="name final-detail-input flex-grow border-b border-[#e3e3e3] text-[14px] p-[4px] pl-[10px] sm-max:w-full" placeholder='Enter your name' />
            </div>
            <div className="input-field flex sm-max:flex-col sm-max:items-start">
                <span className='flex items-center w-[55px] mx-[20px] text-[14px] font-semibold sm-max:w-auto sm-max:mb-[10px]'>EMAIL</span>
                <input type="text" className="email final-detail-input flex-grow border-b border-[#e3e3e3] text-[14px] p-[4px] pl-[10px] sm-max:w-full" placeholder='Enter your email address' />
            </div>
            <div className="input-field flex sm-max:flex-col sm-max:items-start">
                <span className='flex items-center w-[55px] mx-[20px] text-[14px] font-semibold sm-max:w-auto sm-max:mb-[10px]'>MOBILE</span>
                <input type="number" className="mobile final-detail-input flex-grow border-b border-[#e3e3e3] text-[14px] p-[4px] pl-[10px] sm-max:w-full" placeholder='Enter your mobile number' />
            </div>
            <div className="input-field flex sm-max:flex-col sm-max:items-start">
                <span className='flex items-center w-[55px] mx-[20px] text-[14px] font-semibold sm-max:w-auto sm-max:mb-[10px]'>PICKUP</span>
                <input type="text" className="pickup final-detail-input flex-grow border-b border-[#e3e3e3] text-[14px] p-[4px] pl-[10px] sm-max:w-full" placeholder='Enter your pickup address' />
            </div>
            <div className="input-field flex sm-max:flex-col sm-max:items-start">
                <span className='flex items-center w-[55px] mx-[20px] text-[14px] font-semibold sm-max:w-auto sm-max:mb-[10px]'>DROP</span>
                <input type="text" className="drop final-detail-input flex-grow border-b border-[#e3e3e3] text-[14px] p-[4px] pl-[10px] sm-max:w-full" placeholder='Enter your drop address' />
            </div>
            <button className='proceed-btn' onClick={() => setMainDetail('payment')}>PROCEED</button>
        </>
    )
}



export default FinalDetails
