import React from 'react'
import './RideDetails.css'

const RideDetails = () => {

    const rideInfos = [
        {
            car: 'Swift Dzire',
            rate: 2320
        },
        {
            car: 'Honda City',
            rate: 2720
        },
        {
            car: 'Ertiga',
            rate: 3024
        },
        {
            car: 'Innova',
            rate: 3600
        },
        {
            car: 'Innova Crysta',
            rate: 3920
        },
        {
            car: 'Innova Hycroos',
            rate: 4480
        },
        {
            car: 'Fortuner',
            rate: 7488
        },
        {
            car: 'BMW M5 Series',
            rate: 19500
        },
        {
            car: 'Tempo Traveler Non AC',
            rate: 3800
        },
        {
            car: 'Tempo Traveler AC',
            rate: 4640
        },
    ]


    return (
        <div className="ride-details-container">
            {rideInfos.map((rideInfo, index) => (
                <div className="ride-details">
                    <div className="main-item-group-1 flex">
                        <img src="https://www.savaari.com/assets/img/cars/Savaari-Wagonr-Cab.jpg" alt="" />
                        <span className='span-head'>{rideInfo.car} <br />
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
                            <span className='text-[14px] text-[#dc635b]'>Details</span>
                        </div>

                        <button className='ride-select-btn'>
                            <a href="/finaldetails">SELECT</a>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RideDetails
