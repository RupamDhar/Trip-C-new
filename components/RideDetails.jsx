import React, { useState } from 'react';
import './RideDetails.css';

const RideDetails = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [selectedRide, setSelectedRide] = useState(null); // Added state for selected ride

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

    const rideInfos = [
        { car: 'Swift Dzire', rate: 2320, seater: '4', luggage: 1, ac: 'AC', img: "https://www.savaari.com/assets/img/cars/Savaari-Wagonr-Cab.jpg" },
        { car: 'Honda City', rate: 2720, seater: '4', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Crysta-Cab.jpg' },
        { car: 'Ertiga', rate: 3024, seater: '7 or 6', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Ertiga-Cab.jpg' },
        { car: 'Innova', rate: 3600, seater: '7 or 6', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Innova-Cab.jpg' },
        { car: 'Innova Crysta', rate: 3920, seater: '7', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Crysta-Cab.jpg' },
        { car: 'Innova Hycroos', rate: 4480, seater: '7', luggage: 1, ac: 'AC', img: 'hycroos.png' },
        { car: 'Fortuner', rate: 7488, seater: '7', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Crysta-Cab.jpg' },
        { car: 'Mercedes E-Class', rate: 19500, seater: '4', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Mercedes-Cab.jpg' },
        { car: 'Mercedes S-Class', rate: 19500, seater: '4', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Mercedes-Cab.jpg' },
        { car: 'Tempo Traveler No AC', rate: 3800, seater: '13', luggage: 1, ac: 'Non AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Tempo-Traveller-Cab.jpg' },
        { car: 'Tempo Traveler AC', rate: 4640, seater: '13', luggage: 1, ac: 'AC', img: 'https://www.savaari.com/assets/img/cars/Savaari-Tempo-Traveller-Cab.jpg' }
    ];

    const handleDetailsClick = (index) => {
        setActiveModal(index === activeModal ? null : index);
        setSelectedRide(index); // Update selected ride
    };

    return (
        <>
            <div className="ride-details-container sm-max:hidden">
                <span className="ride-information">
                    {`From ${pickupLocation} ${dropLocation === 'Ahmedabad' ? '' : `to ${dropLocation}`} on ${pickupDate} at ${pickupTime}`}
                </span>
                {rideInfos.map((rideInfo, index) => (
                    <div className="ride-details-wrapper" key={index}>
                        <div className="ride-details">
                            <div className="main-item-group-1 flex">
                                <img src={rideInfo.img} className='h-[100%]' alt="" />
                                <span className='span-head'>
                                    {rideInfo.car} <br />
                                    <span className='similar-text'>Or Similar</span>
                                </span>
                            </div>

                            <div className="main-item-group-2">
                                <div className="item-group 1">
                                    <i className="fa-solid fa-certificate fa-2x text-[#dc635b]"></i>
                                    Top Rated <br /> Chauffeurs
                                </div>

                                <div className="item-group 2">
                                    <i className="fa-solid fa-file-invoice fa-2x text-[#dc635b]"></i>
                                    Rs. 320 <br /> Toll Included
                                </div>

                                <div className="item-group 3" style={{ gap: '0' }}>
                                    <span className='text-[32px] text-[#dc635b] font-bold'>Rs. {rideInfo.rate}</span>
                                    Up to 80 km
                                    <span className={`text-[14px] text-[#dc635b] cursor-pointer`} onClick={() => handleDetailsClick(index)}>
                                        Details
                                    </span>
                                </div>

                                <button className='ride-select-btn'>
                                    <a href={`/finaldetails?pickup-loc=${pickupLocation}&drop-loc=${dropLocation}&pickup-time=${pickupTime}&pickup-date=${pickupDate}&car=${rideInfo.car}&rate=${rideInfo.rate}`}>
                                        SELECT CAR
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className={`extra-info ${activeModal === index ? 'show' : 'hidden'}`}>
                            <div className="extra-info-content">
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
                    </div>
                ))}
            </div>

            <div className="sm-max:block">
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

    const handleDetailsClick = (index) => {
        setActiveModal(index === activeModal ? null : index);
    };

    return (
        <div className="ride-details-container p-2">
            <span className="ride-information mb-6 text-xl font-bold text-gray-700">
                {`From ${pickupLocation} to ${dropLocation} on ${pickupDate} at ${pickupTime}`}
            </span>

            <div className="tab-container flex flex-wrap justify-center gap-2 mb-6">
                {rideInfos.map((rideInfo, index) => (
                    <div
                        key={index}
                        className={`tab p-1 cursor-pointer rounded-lg overflow-hidden border border-gray-900 transition-transform duration-300 ${activeTab === index ? 'border-[#dc635b]' : ''}`}
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

            <div className="ride-details-wrapper">
                {rideInfos[activeTab] && (
                    <div className="ride-details border-2 border-[#dc635b] rounded-lg p-4 flex flex-col flex-row items-center">
                        <div className="main-item-group-1 flex flex-row-reverse items-center justify-between w-full">
                            <img src='https://www.savaari.com/assets/img/cars/Savaari-Wagonr-Cab.jpg' className='h-32 h-40 object-cover' alt={rideInfos[activeTab].car} />
                            <span className='span-head text-xl font-semibold'>
                                {rideInfos[activeTab].car} <br />
                                <span className='similar-text text-sm text-gray-500'>Or Similar</span>
                            </span>
                        </div>

                        <div className="main-item-group-2 flex flex-row gap-6 text-center text-left">
                            <div className="item-group 1 mb-2">
                                <i className="fa-solid fa-certificate fa-2x text-[#dc635b]"></i>
                                <div>Top Rated <br /> Chauffeurs</div>
                            </div>

                            <div className="item-group 2 mb-2">
                                <i className="fa-solid fa-file-invoice fa-2x text-[#dc635b]"></i>
                                <div>Rs. 320 <br /> Toll Included</div>
                            </div>

                            <div className="item-group 3 mb-2">
                                <span className='text-xl text-[#dc635b] font-bold'>Rs. {rideInfos[activeTab].rate}</span>
                                <div>Up to 80 km</div>
                                <span className='text-sm text-[#dc635b] cursor-pointer' onClick={() => handleDetailsClick(activeTab)}>
                                    Details
                                </span>
                            </div>
                        </div>

                        <button className='ride-select-btn mt-4 bg-[#dc635b] text-white py-2 px-4 rounded-lg hover:bg-[#b94b47]'>
                            <a href={`/finaldetails?pickup-loc=${pickupLocation}&drop-loc=${dropLocation}&pickup-time=${pickupTime}&pickup-date=${pickupDate}`}>SELECT CAR</a>
                        </button>
                    </div>
                )}

                <div className={`extra-info mt-4 border-2 border-[#dc635b] h-[fit-content] rounded-lg ${activeModal === activeTab ? 'block' : 'hidden'}`}>
                    <div className="extra-info-content flex flex-col items-start gap-0">
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
