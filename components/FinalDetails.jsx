import { useState } from 'react'
import React from 'react'
import { APILoader, PlacePicker } from '@googlemaps/extended-component-library/react';
import './FinalDetails.css'

const FinalDetails = () => {

    const [mainDetail, setMainDetail] = useState('contact-and-pickup');

    const url = new URL(window.location.href); // Get the current URL
    const params = new URLSearchParams(url.search);
    const pickupLocation = params.get('pickup-loc');
    const dropLocation = params.get('drop-loc');
    const pickupTime = params.get('pickup-time');
    const pickupDate = params.get('pickup-date');

    console.log(`Pickup Location: ${pickupLocation}`);
    console.log(`Drop Location: ${dropLocation}`);
    console.log(`Pickup Time: ${pickupTime}`);
    console.log(`Pickup Date: ${pickupDate}`);

    return (
        <div className='final-details'>
            <div className="main-details">
                <UserDetails />
                {/* {mainDetail === 'contact-and-pickup' && <UserDetails setMainDetail={setMainDetail} />}
                {mainDetail === 'payment' && <Payment setMainDetail={setMainDetail} />} */}
            </div>

            <div className="side-details">
                <div className="booking-details">
                    <div className="booking-detail-header">YOUR BOOKING DETAILS</div>
                    <div className="info">
                        <span>Itinerary : </span>
                        {pickupLocation} &gt; {dropLocation}
                    </div>
                    <div className="info">
                        <span>Pickup Date : </span>
                        {pickupDate} at {pickupTime}
                    </div>
                    <div className="info">
                        <span>Car Type : </span>
                        Toyota Innova Crysta
                    </div>
                    <div className="info">
                        <span>KMs Included : </span>
                        240 Kms
                    </div>
                    <div className="info">
                        <span>Total Fare : </span>
                        Rs. {(240 / 80) * 2320}
                    </div>
                </div>

                <div className="extra-details">
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
            <div className="final-detail-header">
                CONTACT & PICKUP DETAILS
            </div>
            <div className="input-field">
                <span>NAME</span>
                <input type="text" className="name final-detail-input" placeholder='Enter your name' />
            </div>
            <div className="input-field">
                <span>EMAIL</span>
                <input type="text" className="email final-detail-input" placeholder='Enter your email address' />
            </div>
            <div className="input-field">
                <span>MOBILE</span>
                <input type="number" className="mobile final-detail-input" placeholder='Enter your mobile number' />
            </div>
            <div className="input-field">
                <span>PICKUP</span>
                {/* <input type="text" className="pickup final-detail-input" placeholder='Enter your pickup address' /> */}
                <PlacePicker country={countries} className="pickup final-detail-input" placeholder="Enter a place to see its address" onPlaceChange={handlePlaceChange} />
            </div>
            <div className="input-field">
                <span>DROP</span>
                <input type="text" className="drop final-detail-input" placeholder='Enter your drop address' />
            </div>
            <button className='proceed-btn' onClick={() => setMainDetail('payment')}>PROCEED</button>
        </>
    )
}


const TabContent = ({ activeTab }) => {
    switch (activeTab) {
        case 'inclusions':
            return (
                <div className="tab-content current">
                    <ul className="additional-details">
                        <li>
                            <img src="https://www.savaari.com/assets/img/inclusions_icon1.png" alt="Base Fare and Fuel Charges" />
                            <h6>Base Fare and Fuel Charges</h6>
                        </li>
                        <li>
                            <img src="https://www.savaari.com/assets/img/inclusions_icon2.png" alt="Driver Allowance" />
                            <h6>Driver Allowance</h6>
                        </li>
                        <li>
                            <img src="https://www.savaari.com/assets/img/exclusions_icon1.png" alt="State Tax & Toll" />
                            <h6>State Tax & Toll</h6>
                        </li>
                        <li>
                            <img src="https://www.savaari.com/assets/img/inclusions_icon3.png" alt="GST (5%)" />
                            <h6>GST (5%)</h6>
                        </li>
                    </ul>
                </div>
            );
        case 'exclusions':
            return (
                <div className="tab-content">
                    <ul className="additional-details">
                        <li>
                            <img src="https://www.savaari.com/assets/img/exclusions_icon1.png" alt="Pay ₹13.5/km after 145 km" />
                            <h6>Pay ₹13.5/km after 145 km</h6>
                        </li>
                        <li>
                            <img src="https://www.savaari.com/assets/img/exclusions_icon3.png" alt="Multiple pickups/drops" />
                            <h6>Multiple pickups/drops</h6>
                        </li>
                    </ul>
                </div>
            );
        case 'tc':
            return (
                <div className="tab-content">
                    <ul className="t-and-c " style={{ fontSize: '12px' }}>
                        <li>Your Trip has a KM limit. If your usage exceeds this limit, you will be charged for the excess KM used.</li>
                        <li>Your trip includes one pick up in Pick-up city and one drop to destination city. It does not include within city travel.</li>
                        <li>If your Trip has Hill climbs, cab AC may be switched off during such climbs.</li>
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
            <ul className="tabs">
                <li
                    className={`tab-link ${activeTab === 'inclusions' ? 'current' : ''}`}
                    onClick={() => setActiveTab('inclusions')}
                >
                    Inclusions
                </li>
                <li
                    className={`tab-link ${activeTab === 'exclusions' ? 'current' : ''}`}
                    onClick={() => setActiveTab('exclusions')}
                >
                    Exclusions
                </li>
                <li
                    className={`tab-link ${activeTab === 'tc' ? 'current' : ''}`}
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
            <div className="input-field">
                <span>NAME</span>
                <input type="text" className="name final-detail-input" placeholder='Enter your name' />
            </div>
            <div className="input-field">
                <span>EMAIL</span>
                <input type="text" className="email final-detail-input" placeholder='Enter your email address' />
            </div>
            <div className="input-field">
                <span>MOBILE</span>
                <input type="number" className="mobile final-detail-input" placeholder='Enter your mobile number' />
            </div>
            <div className="input-field">
                <span>PICKUP</span>
                <input type="text" className="pickup final-detail-input" placeholder='Enter your pickup address' />
            </div>
            <div className="input-field">
                <span>DROP</span>
                <input type="text" className="drop final-detail-input" placeholder='Enter your drop address' />
            </div>
            <button className='proceed-btn' onClick={() => setMainDetail('payment')}>PROCEED</button>
        </>
    )
}



export default FinalDetails
