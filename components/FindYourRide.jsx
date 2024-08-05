import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FindYourRide.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';


const FindYourRide = () => {

    const [pickupCity, setPickupCity] = useState('Ahmedabad');
    const [dropCity, setDropCity] = useState('Ahmedabad');
    const [pickupDate, setPickupDate] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }));
    const [pickupTime, setPickupTime] = useState('05:00');

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [selectedOption, setSelectedOption] = useState('Outstation Travel');


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="find-ride-section" data-aos='fade-up' data-aos-delay='200'>
            <div className="ride-categories">
                <div className="ride-category ">
                    <input
                        type="radio"
                        className="ride-category-input "
                        name="ride-category"
                        id="option-Local"
                        value="Local"
                        checked={selectedOption === 'Local'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Local" className="label">Local</label>
                </div>
                <div className="ride-category">
                    <input
                        type="radio"
                        className="ride-category-input"
                        name="ride-category"
                        id="option-Outstation Travel"
                        value="Outstation Travel"
                        checked={selectedOption === 'Outstation Travel'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Outstation Travel" className="label">Outstation Travel</label>
                </div>
                <div className="ride-category">
                    <input
                        type="radio"
                        className="ride-category-input"
                        name="ride-category"
                        id="option-Airport Transfer"
                        value="Airport Transfer"
                        checked={selectedOption === 'Airport Transfer'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Airport Transfer" className="label">Airport Transfer</label>
                </div>
                <div className="ride-category">
                    <input
                        type="radio"
                        className="ride-category-input"
                        name="ride-category"
                        id="option-Long Term Rentals"
                        value="Long Term Rentals"
                        checked={selectedOption === 'Long Term Rentals'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Long Term Rentals" className="label">Long Term Rentals</label>
                </div>
            </div>

            {selectedOption === 'Local' && <LocalRideSelect />}

            {selectedOption === 'Outstation Travel' &&
                <OutStationTravel
                    pickupCity={pickupCity}
                    setPickupCity={setPickupCity}
                    dropCity={dropCity}
                    setDropCity={setDropCity}
                    pickupTime={pickupTime}
                    setPickupTime={setPickupTime}
                    pickupDate={pickupDate}
                    setPickupDate={setPickupDate}
                />
            }

            {selectedOption === 'Airport Transfer' && <AirportTranfer />}

            {selectedOption === 'Long Term Rentals' && <LongTermRentals />}

            <a href="/outstation" className='offer hidden'>
                <img src="https://www.carzonrent.com/webcor/images/icons/percent-discount.svg" alt="" />
                Explore the all-new Customized Holiday Packages from Trip-C- Avail
                <span className="bg-red-400 items-center px-1"> 15% OFF </span>
                on your next Outstation Booking.
            </a>


            <button className="find-ride-btn">
                <a href={`/ridedetails?pickup-loc=${pickupCity}&drop-loc=${dropCity}&pickup-time=${pickupTime}&pickup-date=${pickupDate}`}>Find Your Ride</a>
            </button>
        </div>
    )
}

export default FindYourRide;










const LocalRideSelect = () => {

    const cities = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const timestamps = ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30"];
    const durations = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [carTypes, setCarTypes] = useState([
        {
            type: 'Budget',
            car: 'Swift Dezire',
            capacity: '4+ Seater'
        },
        {
            type: 'Premium',
            car: 'Crysta',
            capacity: '6+ Seater'
        },
        {
            type: 'Family',
            car: 'Ertiga',
            capacity: '6+ Seater'
        },
    ]);


    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }));
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection">
            <div className="ride-selection-detail rsd-one">
                <div className="city selection-header">
                    Pickup City
                </div>
                <div className="location-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input' placeholder='From Station' /> */}
                    <select className='input' name="city" id="">
                        {cities.map((city, index) => (
                            <option className='city-options' value={city} key={index}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="ride-selection-detail rsd-two">
                <div className="datepicker selection-header">
                    Pickup Date
                </div>
                <div className="date-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" className='h-[16px]' alt="" />
                    <DatePicker
                        className='input ml-2'
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                    />
                </div>
            </div>

            <div className="ride-selection-detail rsd-three">
                <div className="time selection-header">
                    Pickup Time
                </div>
                <div className="time-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/clocktime.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input' placeholder='To Station' /> */}
                    <select className='input' name="time" id="">
                        {timestamps.map((time, index) => (
                            <option className='city-options' value={time} key={index}>{time}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/* <div className="ride-selection-detail rsd-four">
                <div className="duration selection-header">
                    Package
                </div>
                <div className="package-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/packageicon.svg" className='h-[16px]' alt="" />
                    
                    <select className='input' name="duration" id="">
                        {durations.map((duration, index) => (
                            <option className='city-options' value={duration} key={index}>{duration} Hours</option>
                        ))}
                    </select>
                </div>
            </div> */}
        </div>
    )
}










const OutStationTravel = ({ pickupCity, setPickupCity, dropCity, setDropCity, pickupTime, setPickupTime, pickupDate, setPickupDate }) => {
    const citiesFrom = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const citiesTo = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const timestamps = ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30"];


    const handleCityChange = (event) => {
        const { name, value } = event.target;
        if (name === 'pickupCity') {
            setPickupCity(value);
        } else if (name === 'dropCity') {
            setDropCity(value);
        }
    };

    const handleTimeChange = (event) => {
        setPickupTime(event.target.value);
    };

    return (
        <>
            <div className="ride-selection">
                <div className="ride-selection-detail rsd-four">
                    <div className="duration selection-header">
                        Pickup Location
                    </div>
                    <div className="location-input">
                        <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                        <select className='input' name="pickupCity" value={pickupCity} onChange={handleCityChange}>
                            {citiesFrom.map((city, index) => (
                                <option className='city-options' value={city} key={index}>{city}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <i className="fa-solid fa-right-left text-slate-400"></i>
                <div className="ride-selection-detail rsd-four">
                    <div className="duration selection-header">
                        Drop Location
                    </div>
                    <div className="location-input">
                        <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                        <select className='input' name="dropCity" value={dropCity} onChange={handleCityChange}>
                            {citiesTo.map((city, index) => (
                                <option className='city-options' value={city} key={index}>{city}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="ride-selection-detail rsd-four">
                    <div className="duration selection-header">
                        Pickup Date
                    </div>
                    <div className="date-input">
                        <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" className='h-[16px]' alt="" />
                        <DatePicker
                            className='input ml-2'
                            selected={pickupDate}
                            onChange={date => setPickupDate(date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }))}
                        />
                    </div>
                </div>
                <div className="ride-selection-detail rsd-four">
                    <div className="duration selection-header">
                        Pickup Time
                    </div>
                    <div className="time-input">
                        <img src="https://www.carzonrent.com/webcor/images/icons/clocktime.svg" className='h-[16px]' alt="" />
                        <select className='input' name="pickupTime" value={pickupTime} onChange={handleTimeChange}>
                            {timestamps.map((time, index) => (
                                <option className='city-options' value={time} key={index}>{time}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}










const AirportTranfer = () => {
    const cities = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const timestamps = ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30"];
    const durations = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [carTypes, setCarTypes] = useState([
        {
            type: 'Budget',
            car: 'Swift Dezire',
            capacity: '4+ Seater'
        },
        {
            type: 'Premium',
            car: 'Crysta',
            capacity: '6+ Seater'
        },
        {
            type: 'Family',
            car: 'Ertiga',
            capacity: '6+ Seater'
        },
    ]);

    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }));
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection">
            <div className="ride-selection-detail rsd-one">
                <div className="city selection-header">
                    Pickup City
                </div>
                <div className="location-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input' placeholder='From Station' /> */}
                    <select className='input' name="city" id="">
                        {cities.map((city, index) => (
                            <option className='city-options' value={city} key={index}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="ride-selection-detail rsd-two">
                <div className="datepicker selection-header">
                    Pickup Date
                </div>
                <div className="date-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" className='h-[16px]' alt="" />
                    <DatePicker
                        className='input ml-2'
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                    />
                </div>
            </div>

            <div className="ride-selection-detail rsd-three">
                <div className="time selection-header">
                    Pickup Time
                </div>
                <div className="time-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/clocktime.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input' placeholder='To Station' /> */}
                    <select className='input' name="time" id="">
                        {timestamps.map((time, index) => (
                            <option className='city-options' value={time} key={index}>{time}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="ride-selection-detail rsd-four">
                <div className="duration selection-header">
                    Package
                </div>
                <div className="package-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/packageicon.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input' placeholder='To Station' /> */}
                    <select className='input' name="duration" id="">
                        {durations.map((duration, index) => (
                            <option className='city-options' value={duration} key={index}>{duration} Hours</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}










const LongTermRentals = () => {
    const cities = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const timestamps = ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30"];
    const durations = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const [carTypes, setCarTypes] = useState([
        {
            type: 'Budget',
            car: 'Swift Dezire',
            capacity: '4+ Seater'
        },
        {
            type: 'Premium',
            car: 'Crysta',
            capacity: '6+ Seater'
        },
        {
            type: 'Family',
            car: 'Ertiga',
            capacity: '6+ Seater'
        },
    ]);

    const [pickupDate, setPickupDate] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }));
    const [returnDate, setReturnDate] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }));
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection">
            <div className="ride-selection-detail rsd-one">
                <div className="city selection-header">
                    Pickup City
                </div>
                <div className="location-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input' placeholder='From Station' /> */}
                    <select className='input' name="city" id="">
                        {cities.map((city, index) => (
                            <option className='city-options' value={city} key={index}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="ride-selection-detail rsd-three">
                <div className="pickup-date selection-header">
                    Pickup Date
                </div>
                <div className="date-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" className='h-[16px]' alt="" />
                    <DatePicker
                        className='input ml-2'
                        selected={pickupDate}
                        onChange={date => setPickupDate(date)}
                    />
                </div>
            </div>

            <div className="ride-selection-detail rsd-four">
                <div className="return-date selection-header">
                    Return Date
                </div>
                <div className="date-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" className='h-[16px]' alt="" />
                    <DatePicker
                        className='input ml-2'
                        selected={returnDate}
                        onChange={date => setReturnDate(date)}
                    />
                </div>
            </div>

            <div className="ride-selection-detail rsd-three">
                <div className="time selection-header">
                    Pickup Time
                </div>
                <div className="time-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/clocktime.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input' placeholder='To Station' /> */}
                    <select className='input' name="time" id="">
                        {timestamps.map((time, index) => (
                            <option className='city-options' value={time} key={index}>{time}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}