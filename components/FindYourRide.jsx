import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FindYourRide.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FindYourRide = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [selectedOption, setSelectedOption] = useState('Outstation Travel');


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="find-ride-section" data-aos='fade-up' data-aos-delay='200'>
            <div className="ride-categories hidden">
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

            <OutStationTravel />

            <a href="/outstation" className='offer hidden'>
                <img src="https://www.carzonrent.com/webcor/images/icons/percent-discount.svg" alt="" />
                Explore the all-new Customized Holiday Packages from Trip-C- Avail
                <span className="bg-red-400 items-center px-1"> 15% OFF </span>
                on your next Outstation Booking.
            </a>

            <button className='find-ride-btn hidden'>
                <img src="	https://www.carzonrent.com/webcor/images/icons/searchiconblack.svg" alt="" />
                Find Your Ride
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

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection  flex flex-wrap justify-center items-center w-full h-[130px] rounded-lg shadow-md text-black bg-white sm-max:shadow-none sm-max:h-[fit-content] sm-max:gap-2">
            <div className="ride-selection-detail rsd-one">
                <div className="city selection-header text-xs font-bold text-center flex gap-2 mb-2 font-semibold text-[#7e7e7e]">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/maplocation.svg" alt="" />
                    City
                </div>
                <select className='bg-white city-select text-2xl font-bold sm-max:text-[16px]' name="city" id="">
                    {cities.map((city, index) => (
                        <option className='city-options' value={city} key={index}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail rsd-two">
                <div className="datepicker selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" alt="" />
                    Pickup Date
                </div>
                <DatePicker
                    className='date-picker text-2xl font-bold sm-max:text-[16px] w-32'
                    selected={selectedDate}
                    dateFormat='dd MMM, yy'
                    onChange={date => setSelectedDate(date)}
                />
            </div>

            <div className="ride-selection-detail rsd-three">
                <div className="time selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/clocktime.svg" alt="" />
                    Pickup Time
                </div>
                <select className='bg-white time-select text-2xl font-bold sm-max:text-[16px]' name="time" id="">
                    {timestamps.map((time, index) => (
                        <option className='time-options text-base font-bold' value={time} key={index}>{time}</option>
                    ))}
                </select>
            </div>
            <div className="ride-selection-detail rsd-four">
                <div className="duration selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/packageicon.svg" alt="" />
                    Package
                </div>
                <select className='bg-white duration-select  text-2xl font-bold sm-max:text-[16px]' name="duration" id="">
                    {durations.map((duration, index) => (
                        <option className='duration-options text-base font-bold' value={duration} key={index}>{duration} Hours</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail rsd-five">
                <div className="cartype selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/cartypegredient.svg" alt="" />
                    Car Type
                </div>
                <select className='bg-white cartype-select text-2xl font-bold sm-max:text-[16px]' name="cartype" onChange={handleSelectChange} value={selectedType}>
                    <option value="">Select Type</option>
                    {carTypes.map((cartype, index) => (
                        <option className='cartype-options text-base font-bold' value={cartype.type} key={index}>
                            {cartype.type}
                        </option>
                    ))}
                </select>
                {selectedCarType && (
                    <div className='detail-sub-info flex justify-between items-center'>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.car}</span>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.capacity}</span>
                    </div>
                )}
            </div>
        </div>
    )
}










const OutStationTravel = () => {
    const citiesFrom = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const citiesTo = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    // ["Agra", "Aligarh", "Ambala", "Bareilly", "Bijnor", "Bulandshahr", "Chandigarh", "Dehradun", "Faridabad", "Ghaziabad", "Gurgaon", "Haridwar", "Karnal", "Kurukshetra", "Meerut", "Moradabad", "Muzaffarnagar", "Noida", "Panipat", "Roorkee", "Saharanpur", "Sonipat", "Yamunanagar", "Zirakpur"];

    const timestamps = ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30"];
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

    const [pickupDate, setPickupDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <>
            <div className="ride-selection">
                <div className="location-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input' placeholder='From Station' /> */}
                    <select className='input' name="city" id="">
                        {citiesFrom.map((city, index) => (
                            <option className='city-options' value={city} key={index}>{city}</option>
                        ))}
                    </select>
                </div>
                <i className="fa-solid fa-right-left text-slate-400"></i>
                <div className="location-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input' placeholder='To Station' /> */}
                    <select className='input' name="city" id="">
                        {citiesTo.map((city, index) => (
                            <option className='city-options' value={city} key={index}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className="date-input">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" className='h-[16px]' alt="" />
                    <DatePicker
                        className='input ml-2'
                        selected={pickupDate}
                        onChange={date => setPickupDate(date)}
                    />
                </div>
                <button className="find-ride-btn">Find Your Ride</button>
            </div>
        </>
    )
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

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection  flex flex-wrap justify-center items-center w-full h-32 rounded-lg shadow-md text-black bg-white sm-max:shadow-none sm-max:h-[fit-content] sm-max:gap-2">
            <div className="ride-selection-detail rsd-one">
                <div className="city selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/maplocation.svg" alt="" />
                    City
                </div>
                <select className='bg-white city-select text-2xl font-bold sm-max:text-[16px]' name="city" id="">
                    {cities.map((city, index) => (
                        <option className='city-options' value={city} key={index}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail rsd-two">
                <div className="datepicker selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" alt="" />
                    Pickup Date
                </div>
                <DatePicker
                    className='date-picker text-2xl font-bold sm-max:text-[16px] w-32 text-2xl font-bold sm-max:text-[16px]'
                    selected={selectedDate}
                    dateFormat='dd MMM, yy'
                    onChange={date => setSelectedDate(date)}
                />
            </div>

            <div className="ride-selection-detail rsd-three">
                <div className="time selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/clocktime.svg" alt="" />
                    Pickup Time
                </div>
                <select className='bg-white time-select text-2xl font-bold sm-max:text-[16px]' name="time" id="">
                    {timestamps.map((time, index) => (
                        <option className='time-options' value={time} key={index}>{time}</option>
                    ))}
                </select>
            </div>
            <div className="ride-selection-detail rsd-four">
                <div className="duration selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/packageicon.svg" alt="" />
                    Package
                </div>
                <select className='bg-white duration-select  text-2xl font-bold sm-max:text-[16px]' name="duration" id="">
                    {durations.map((duration, index) => (
                        <option className='duration-options' value={duration} key={index}>{duration} Hours</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail rsd-five">
                <div className="cartype selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/cartypegredient.svg" alt="" />
                    Car Type
                </div>
                <select className='bg-white cartype-select text-2xl font-bold sm-max:text-[16px]' name="cartype" onChange={handleSelectChange} value={selectedType}>
                    <option value="">Select Type</option>
                    {carTypes.map((cartype, index) => (
                        <option className='cartype-options text-base font-bold' value={cartype.type} key={index}>
                            {cartype.type}
                        </option>
                    ))}
                </select>
                {selectedCarType && (
                    <div className='detail-sub-info flex justify-between items-center'>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.car}</span>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.capacity}</span>
                    </div>
                )}
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

    const [pickupDate, setPickupDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection  flex flex-wrap justify-center items-center w-full h-32 rounded-lg shadow-md text-black bg-white sm-max:shadow-none sm-max:h-[fit-content] sm-max:gap-2">
            <div className="ride-selection-detail rsd-one">
                <div className="city selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/maplocation.svg" alt="" />
                    City
                </div>
                <select className='bg-white city-select text-2xl font-bold sm-max:text-[16px]' name="city" id="">
                    {cities.map((city, index) => (
                        <option className='city-options' value={city} key={index}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail rsd-three">
                <div className="pickup-date selection-header">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" alt="" />
                    Pickup Date
                </div>
                <DatePicker
                    className='date-picker text-2xl font-bold sm-max:text-[16px] w-32 text-2xl font-bold sm-max:text-[16px]'
                    selected={pickupDate}
                    dateFormat='dd MMM, yy'
                    onChange={date => setPickupDate(date)}
                />
            </div>

            <div className="ride-selection-detail rsd-four">
                <div className="return-date selection-header">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" alt="" />
                    Return Date
                </div>
                <DatePicker
                    className='date-picker text-2xl font-bold sm-max:text-[16px] w-32 text-2xl font-bold sm-max:text-[16px]'
                    selected={returnDate}
                    dateFormat='dd MMM, yy'
                    onChange={date => setReturnDate(date)}
                />
            </div>

            <div className="ride-selection-detail rsd-three">
                <div className="time selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/clocktime.svg" alt="" />
                    Pickup Time
                </div>
                <select className='bg-white time-select text-2xl font-bold sm-max:text-[16px]' name="time" id="">
                    {timestamps.map((time, index) => (
                        <option className='time-options' value={time} key={index}>{time}</option>
                    ))}
                </select>
            </div>

            <div className="ride-selection-detail rsd-five">
                <div className="cartype selection-header">
                    <img src="	https://www.carzonrent.com/webcor/images/icons/cartypegredient.svg" alt="" />
                    Car Type
                </div>
                <select className='bg-white cartype-select text-2xl font-bold sm-max:text-[16px]' name="cartype" onChange={handleSelectChange} value={selectedType}>
                    <option value="">Select Type</option>
                    {carTypes.map((cartype, index) => (
                        <option className='cartype-options text-base font-bold' value={cartype.type} key={index}>
                            {cartype.type}
                        </option>
                    ))}
                </select>
                {selectedCarType && (
                    <div className='detail-sub-info flex justify-between items-center'>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.car}</span>
                        <span className='car-info text-xs font-semibold text-gray-600 mt-2'>{selectedCarType.capacity}</span>
                    </div>
                )}
            </div>
        </div>
    )
}