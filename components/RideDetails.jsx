import React, { useState } from 'react';
// import './RideDetails.css';


const rideInfos = [
    { car: 'Swift Dzire', rate: 2320, seater: '4', luggage: 1, ac: 'AC', img: "https://www.savaari.com/assets/img/cars/Savaari-Wagonr-Cab.jpg" },
    { car: 'Honda City', rate: 2720, seater: '4', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Crysta-Cab.jpg' },
    { car: 'Ertiga', rate: 3024, seater: '7 or 6', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Ertiga-Cab.jpg' },
    { car: 'Innova', rate: 3600, seater: '7 or 6', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Innova-Cab.jpg' },
    { car: 'Crysta', rate: 3920, seater: '7', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Crysta-Cab.jpg' },
    { car: 'Hycroos', rate: 4480, seater: '7', luggage: 1, ac: 'AC', img: 'hycroos.png' },
    { car: 'Fortuner', rate: 7488, seater: '7', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Crysta-Cab.jpg' },
    { car: 'Mercedes E', rate: 19500, seater: '4', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Mercedes-Cab.jpg' },
    { car: 'Mercedes S', rate: 19500, seater: '4', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Mercedes-Cab.jpg' },
    { car: 'Tempo No AC', rate: 3800, seater: '13', luggage: 1, ac: 'Non AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Tempo-Traveller-Cab.jpg' },
    { car: 'Tempo AC', rate: 4640, seater: '13', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Tempo-Traveller-Cab.jpg' }
];



const RideDetails = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [activeTab, setActiveTab] = useState(0); // State for active tab

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const pickupLocation = params.get('pickup-loc');
    const dropLocation = params.get('drop-loc');
    const pickupTime = params.get('pickup-time');
    const pickupDate = params.get('pickup-date');

    console.log(`Pickup Location: ${pickupLocation}`);
    console.log(`Drop Location: ${dropLocation}`);
    console.log(`Pickup Time: ${pickupTime}`);
    console.log(`Pickup Date: ${pickupDate}`);

    const handleDetailsClick = (index) => {
        setActiveModal(index === activeModal ? null : index);
        setActiveTab(0); // Reset to the first tab when modal is opened
    };

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className="ride-details-container bg-[#ededed] min-h-screen flex flex-col items-center py-[50px] mt-[80px] sm-max:py-[30px] sm-max:hidden">
                <span className="ride-information mb-[40px] text-[32px] font-bold text-[#797979] sm-max:text-[20px] sm-max:mb-[30px] sm-max:px-[20px] sm-max:text-center">
                    {`From ${pickupLocation} ${dropLocation === 'Ahmedabad' ? '' : `to ${dropLocation}`} on ${pickupDate} at ${pickupTime}`}
                </span>
                {rideInfos.map((rideInfo, index) => (
                    <div className="ride-details-wrapper w-full mb-[20px] flex flex-col items-center" key={index}>
                        <div className="ride-details shadow-md bg-white flex justify-between items-center h-[120px] w-[80%] px-[40px] rounded-[12px] sm-max:w-[90%] sm-max:px-[20px] sm-max:h-auto sm-max:flex-col sm-max:items-center">
                            <div className="main-item-group-1 flex">
                                <img src={rideInfo.img} className='h-[100%]' alt="" />
                                <span className='span-head text-[24px] font-semibold text-[#242424] sm-max:text-[20px]'>
                                    {rideInfo.car} <br />
                                    <span className='similar-text mt-[-30px] text-[12px] sm-max:mt-0 sm-max:text-[10px]'>Or Similar</span>
                                </span>
                            </div>

                            <div className="main-item-group-2 flex items-center gap-[60px] sm-max:mt-[10px] sm-max:flex-wrap sm-max:gap-[10px] sm-max:justify-center">
                                <div className="item-group flex flex-col gap-[10px] items-center text-center text-[14px] sm-max:text-[12px] 1">
                                    <i className="fa-solid fa-certificate fa-2x text-[#f78f25]"></i>
                                    Top Rated <br /> Chauffeurs
                                </div>

                                <div className="item-group flex flex-col gap-[10px] items-center text-center text-[14px] sm-max:text-[12px] 3" style={{ gap: '0' }}>
                                    <span className='text-[32px] text-[#f78f25] font-bold'>Rs. {rideInfo.rate}</span>
                                    Up to 80 km
                                    <span className={`text-[14px] text-[#f78f25] cursor-pointer`} onClick={() => handleDetailsClick(index)}>
                                        Details
                                    </span>
                                </div>

                                <button className='ride-select-btn h-fit px-[30px] py-[10px] bg-[#f78f25] rounded-[8px] text-white transition-all duration-[0.2s] ease-in-out sm-max:px-[20px] sm-max:py-[8px] sm-max:w-full hover:translate-y-[-5px] hover:shadow-[0_5px_5px_#b3b3b3]'>
                                    <a href={`/finaldetails?pickup-loc=${pickupLocation}&drop-loc=${dropLocation}&pickup-time=${pickupTime}&pickup-date=${pickupDate}&car=${rideInfo.car}&rate=${rideInfo.rate}`}>
                                        SELECT CAR
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className={`extra-info bg-white overflow-hidden mt-[-2px] h-fit w-[80%] shadow-md rounded-[20px] sm-max:w-full ${activeModal === index ? 'block' : 'hidden'}`}>
                            <div className="tabs flex border-b border-[#f78f25]">
                                <button
                                    className={`tab-btn px-4 py-2 font-semibold ${activeTab === 0 ? 'bg-[#f78f25] text-white' : 'bg-white text-[#797979]'} border-r`}
                                    onClick={() => handleTabClick(0)}
                                >
                                    Inclusions
                                </button>
                                <button
                                    className={`tab-btn px-4 py-2 font-semibold ${activeTab === 1 ? 'bg-[#f78f25] text-white' : 'bg-white text-[#797979]'} border-r`}
                                    onClick={() => handleTabClick(1)}
                                >
                                    Exclusions
                                </button>
                                <button
                                    className={`tab-btn px-4 py-2 font-semibold ${activeTab === 2 ? 'bg-[#f78f25] text-white' : 'bg-white text-[#797979]'} border-r`}
                                    onClick={() => handleTabClick(2)}
                                >
                                    Facilities
                                </button>
                                <button
                                    className={`tab-btn px-4 py-2 font-semibold ${activeTab === 3 ? 'bg-[#f78f25] text-white' : 'bg-white text-[#797979]'} `}
                                    onClick={() => handleTabClick(3)}
                                >
                                    T&C
                                </button>
                            </div>
                            <div className="tab-content p-4">
                                {activeTab === 0 && (
                                    <div className="tab-inclusions">
                                        <ul className="additional-details flex justify-evenly items-center list-none py-4 m-0">
                                            <li className='flex items-center'>
                                                <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/inclusions_icon1.png" alt="Base Fare and Fuel Charges" />
                                                <h6>Base Fare and Fuel Charges</h6>
                                            </li>
                                            <li className='flex items-center'>
                                                <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/inclusions_icon2.png" alt="Driver Allowance" />
                                                <h6>Driver Allowance</h6>
                                            </li>
                                            <li className='flex items-center'>
                                                <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/exclusions_icon1.png" alt="State Tax & Toll" />
                                                <h6>State Tax & Toll</h6>
                                            </li>
                                            <li className='flex items-center'>
                                                <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/inclusions_icon3.png" alt="GST (5%)" />
                                                <h6>GST (5%)</h6>
                                            </li>
                                        </ul>
                                    </div>
                                )}

                                {activeTab === 1 && (
                                    <div className="tab-exclusions">
                                        <ul className="additional-details flex justify-evenly items-center list-none p-0 m-0">
                                            <li className='flex items-center'>
                                                <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/exclusions_icon1.png" alt="Pay ₹13.5/km after 145 km" />
                                                <h6>Pay ₹13.5/km after 145 km</h6>
                                            </li>
                                            <li className='flex items-center'>
                                                <img className='mr-[1em] max-w-[24px]' src="https://www.savaari.com/assets/img/exclusions_icon3.png" alt="Multiple pickups/drops" />
                                                <h6>Multiple pickups/drops</h6>
                                            </li>
                                        </ul>
                                    </div>
                                )}

                                {activeTab === 2 && (
                                    <div className="tab-facilities">
                                        {/* Current detail info */}
                                        <div className="extra-info-content flex justify-center items-center gap-[50px] sm-max:gap-[20px]">
                                            <span className='flex items-center gap-2'>
                                                <img className='h-10' src="https://www.savaari.com/assets/img/facilities_icon1.png" alt="" />
                                                <span>{rideInfo.seater} Seater</span>
                                            </span>
                                            <span className='flex items-center gap-2'>
                                                <img className='h-10' src="https://www.savaari.com/assets/img/facilities_icon2.png" alt="" />
                                                <span>{rideInfo.luggage} Luggage</span>
                                            </span>
                                            <span className='flex items-center gap-2'>
                                                <img className='h-10' src="https://www.savaari.com/assets/img/facilities_icon3.png" alt="" />
                                                <span>{rideInfo.ac}</span>
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 3 && (
                                    <div className="tab-t&c">
                                        <ul className="t-and-c flex flex-col justify-center gap-[10px] pl-[10px] list-disc sm-max:list-none sm-max:gap-[10px]" style={{ fontSize: '12px', fontWeight:'600', color:'#797979', listStyleType:'disc' }}>
                                            <li className='flex items-center'>Your Trip has a KM limit. If your usage exceeds this limit, you will be charged for the excess KM used.</li>
                                            <li className='flex items-center'>Your trip includes one pick up in Pick-up city and one drop to destination city. It does not include within city travel.</li>
                                            <li className='flex items-center'>If your Trip has Hill climbs, cab AC may be switched off during such climbs.</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden sm-max:block">
                <RideDetailsMobile />
            </div>
        </>
    );
};




const RideDetailsMobile = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [activeTab, setActiveTab] = useState(0); // State for tab selection

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

    const handleDetailsClick = (index) => {
        setActiveModal(index === activeModal ? null : index);
    };

    return (
        <div className="ride-details-container min-h-screen flex flex-col items-center py-[50px] mt-[80px] sm-max:py-[30px] p-2">
            <span className="ride-information mb-[40px] text-[32px] font-bold text-[#797979] sm-max:text-[20px] sm-max:mb-[30px] sm-max:px-[20px] sm-max:text-center mb-6 text-xl font-bold text-gray-700">
                {`From ${pickupLocation} to ${dropLocation} on ${pickupDate} at ${pickupTime}`}
            </span>

            <div className="ride-detail-tab-container flex flex-wrap justify-center gap-2 mb-6">
                {rideInfos.map((rideInfo, index) => (
                    <div
                        key={index}
                        className={`tab p-1 cursor-pointer rounded-lg overflow-hidden border border-gray-900 transition-transform duration-300 ${activeTab === index ? 'border-[#f78f25]' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        <div className="img-container w-full flex justify-center"><img className='h-10 object-fit' src={rideInfo.img} alt={rideInfo.car} /></div>
                        <div className='text-center'>
                            <span className='block text-xs'>{rideInfo.car}</span>
                            <span className='block text-xs text-gray-600'>{`Rs. ${rideInfo.rate}`}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ride-details-wrapper w-full mb-[20px] flex flex-col items-center">
                {rideInfos[activeTab] && (
                    <div className="ride-details border-2 border-[#f78f25] rounded-lg p-4 flex flex-col flex-row items-center">
                        <div className="main-item-group-1 flex flex-row-reverse items-center justify-between w-full">
                            <img src={rideInfos[activeTab].img} className='h-36 object-cover' alt={rideInfos[activeTab].car} />
                            <span className='span-head text-[24px] font-semibold text-[#242424] sm-max:text-[20px] text-xl font-semibold'>
                                {rideInfos[activeTab].car} <br />
                                <span className='similar-text mt-[-30px] text-[12px] sm-max:mt-0 sm-max:text-[10px] text-sm text-gray-500'>Or Similar</span>
                            </span>
                        </div>

                        <div className="main-item-group-2 flex items-center gap-[60px] sm-max:mt-[10px] sm-max:flex-wrap sm-max:gap-[10px] sm-max:justify-center flex flex-row gap-6 text-center text-left">
                            <div className="item-group flex flex-col gap-[10px] items-center text-center text-[14px] sm-max:text-[12px] 1 mb-2">
                                <i className="fa-solid fa-certificate fa-2x text-[#f78f25]"></i>
                                <div>Top Rated <br /> Chauffeurs</div>
                            </div>

                            <div className="item-group flex flex-col gap-[10px] items-center text-center text-[14px] sm-max:text-[12px] 2 mb-2">
                                <i className="fa-solid fa-file-invoice fa-2x text-[#f78f25]"></i>
                                <div>Rs. 320 <br /> Toll Included</div>
                            </div>

                            <div className="item-group flex flex-col gap-[10px] items-center text-center text-[14px] sm-max:text-[12px] 3 mb-2">
                                <span className='text-xl text-[#f78f25] font-bold'>Rs. {rideInfos[activeTab].rate}</span>
                                <div>Up to 80 km</div>
                                <span className='text-sm text-[#f78f25] cursor-pointer' onClick={() => handleDetailsClick(activeTab)}>
                                    Details
                                </span>
                            </div>
                        </div>

                        <button className='ride-select-btn h-fit px-[30px] py-[10px] bg-[#f78f25] rounded-[8px] text-white transition-all duration-[0.2s] ease-in-out sm-max:px-[20px] sm-max:py-[8px] sm-max:w-full hover:translate-y-[-5px] hover:shadow-[0_5px_5px_#b3b3b3] mt-4 bg-[#f78f25] text-white py-2 px-4 rounded-lg hover:bg-[#b94b47]'>
                            <a href={`/finaldetails?pickup-loc=${pickupLocation}&drop-loc=${dropLocation}&pickup-time=${pickupTime}&pickup-date=${pickupDate}`}>SELECT CAR</a>
                        </button>
                    </div>
                )}

                <div className={`extra-info mt-[-2px] h-[100px] w-[80%] border-2 border-[#F3C31F] rounded-[20px] sm-max:w-full mt-4 border-2 border-[#f78f25] h-[fit-content] rounded-lg ${activeModal === activeTab ? 'block' : 'hidden'}`}>
                    <div className="extra-info-content flex justify-center items-center gap-[50px] p-[20px] h-full sm-max:gap-[20px] flex flex-col items-start gap-0">
                        {rideInfos[activeTab] && (
                            <>
                                <span className='flex items-center gap-2'>
                                    <img className='h-10' src="https://www.savaari.com/assets/img/facilities_icon1.png" alt="" />
                                    <span>{rideInfos[activeTab].seater} Seater</span>
                                </span>
                                <span className='flex items-center gap-2'>
                                    <img className='h-10' src="https://www.savaari.com/assets/img/facilities_icon2.png" alt="" />
                                    <span>{rideInfos[activeTab].luggage} Luggage</span>
                                </span>
                                <span className='flex items-center gap-2'>
                                    <img className='h-10' src="https://www.savaari.com/assets/img/facilities_icon3.png" alt="" />
                                    <span>{rideInfos[activeTab].ac}</span>
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default RideDetails;
