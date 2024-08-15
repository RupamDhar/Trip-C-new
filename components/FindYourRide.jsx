import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import './FindYourRide.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';


const FindYourRide = () => {

    const [pickupCity, setPickupCity] = useState('Ahmedabad');
    const [dropCity, setDropCity] = useState('Ahmedabad');
    const [pickupDate, setPickupDate] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', day: '2-digit', month: 'short' }));
    const [pickupTime, setPickupTime] = useState('05:00');
    const [ridePackage, setRidePackage] = useState(4); 

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        console.log(pickupCity);
        console.log(dropCity);
        console.log(pickupDate);
        console.log(pickupTime);
        console.log(ridePackage);
    })

    const [selectedOption, setSelectedOption] = useState('Outstation Travel');


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="find-ride-section relative flex flex-col items-center h-fit w-[90%] py-[30px] px-0 rounded-[20px] text-black bg-[#fcf5dc] shadow-[3px_4px_5px_rgba(0,_0,_0,_0.4)] sm-max:px-[15px] sm-max:py-[15px] sm-max:pb-[40px]" data-aos='fade-up' data-aos-delay='400'>
            <div className="ride-categories mb-[10px] w-full flex flex-wrap justify-center items-center gap-[40px] font-quicksand sm-max:flex-[0_0_25%] sm-max:gap-[5px] sm-max:p-[10px]">
                <div className="ride-category flex sm-max:grow items-center cursor-pointer sm-max:p-[5px] sm-max:w-[40%] sm-max:font-[11px] sm-max:bg-[#ececec] sm-max:rounded-[8px]">
                    <input
                        type="radio"
                        className="ride-category-input h-[30px] fill-yellow-500 text-yellow-500 bg-yellow-500 sm-max:bg-yellow-500 sm-max:text-yellow-500 sm-max:fill-yellow-500 "
                        name="ride-category"
                        id="option-Local"
                        value="Local"
                        checked={selectedOption === 'Local'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Local" className="label pl-[10px] text-[#797979] font-semibold cursor-pointer sm-max:text-[11px] sm-max:pl-[4px]">Local</label>
                </div>
                <div className="ride-category flex sm-max:grow items-center cursor-pointer sm-max:p-[5px] sm-max:w-[40%] sm-max:font-[11px] sm-max:bg-[#ececec] sm-max:rounded-[8px]">
                    <input
                        type="radio"
                        className="ride-category-input h-[30px] fill-yellow-500 text-yellow-500 bg-yellow-500 sm-max:bg-yellow-500 sm-max:text-yellow-500 sm-max:fill-yellow-500"
                        name="ride-category"
                        id="option-Outstation Travel"
                        value="Outstation Travel"
                        checked={selectedOption === 'Outstation Travel'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Outstation Travel" className="label pl-[10px] text-[#797979] font-semibold cursor-pointer sm-max:text-[11px] sm-max:pl-[4px]">Outstation Travel</label>
                </div>
                <div className="ride-category flex sm-max:grow items-center cursor-pointer sm-max:p-[5px] sm-max:w-[40%] sm-max:font-[11px] sm-max:bg-[#ececec] sm-max:rounded-[8px]">
                    <input
                        type="radio"
                        className="ride-category-input h-[30px] fill-yellow-500 text-yellow-500 bg-yellow-500 sm-max:bg-yellow-500 sm-max:text-yellow-500 sm-max:fill-yellow-500"
                        name="ride-category"
                        id="option-Airport Transfer"
                        value="Airport Transfer"
                        checked={selectedOption === 'Airport Transfer'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Airport Transfer" className="label pl-[10px] text-[#797979] font-semibold cursor-pointer sm-max:text-[11px] sm-max:pl-[4px]">Airport Transfer</label>
                </div>
                <div className="ride-category flex sm-max:grow items-center cursor-pointer sm-max:p-[5px] sm-max:w-[40%] sm-max:font-[11px] sm-max:bg-[#ececec] sm-max:rounded-[8px]">
                    <input
                        type="radio"
                        className="ride-category-input h-[30px] fill-yellow-500 text-yellow-500 bg-yellow-500 sm-max:bg-yellow-500 sm-max:text-yellow-500 sm-max:fill-yellow-500"
                        name="ride-category"
                        id="option-Long Term Rentals"
                        value="Long Term Rentals"
                        checked={selectedOption === 'Long Term Rentals'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="option-Long Term Rentals" className="label pl-[10px] text-[#797979] font-semibold cursor-pointer sm-max:text-[11px] sm-max:pl-[4px]">Long Term Rentals</label>
                </div>
            </div>

            {selectedOption === 'Local' &&
                <LocalRideSelect
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
                    ridePackage={ridePackage}
                    setRidePackage={setRidePackage}
                />
            }

            {selectedOption === 'Airport Transfer' &&
                <AirportTranfer
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

            {selectedOption === 'Long Term Rentals' &&
                <LongTermRentals
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

            <a href="/outstation" className='offer hidden'>
                <img src="https://www.carzonrent.com/webcor/images/icons/percent-discount.svg" alt="" />
                Explore the all-new Customized Holiday Packages from Trip-C- Avail
                <span className="bg-red-400 items-center px-1"> 15% OFF </span>
                on your next Outstation Booking.
            </a>


            <button className="find-ride-btn flex justify-center items-center gap-[10px] mb-[-60px] h-[55px] w-[210px] text-[18px] font-medium rounded-[10px] text-white bg-[var(--theme-yellow)] transition-all duration-[0.2s] ease-in-out hover:translate-y-[-5px] hover:shadow-[0_5px_5px_rgba(24,_24,_24,_0.85)] sm-max:w-[90%] sm-max:mb-0">
                <a href={`/ridedetails?pickup-loc=${pickupCity}&drop-loc=${dropCity}&pickup-time=${pickupTime}&pickup-date=${pickupDate}`}>Find Your Ride</a>
            </button>
        </div>
    )
}

export default FindYourRide;










const LocalRideSelect = ({ pickupCity, setPickupCity, dropCity, setDropCity, pickupTime, setPickupTime, pickupDate, setPickupDate }) => {

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
    const handleCityChange = (event) => {
        const { name, value } = event.target;
        setPickupCity(value);
    };
    const handleTimeChange = (event) => {
        setPickupTime(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection flex flex-wrap justify-evenly items-center w-[95%] h-fit p-[20px] rounded-[20px] text-black bg-[#fcf5dc] sm-max:h-fit sm-max:w-full sm-max:gap-[10px] sm-max:flex-col sm-max:shadow-none">
            <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-one">
                <div className="city selection-header ">
                    Pickup City
                </div>
                <div className="location-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input flex-grow ml-[10px] bg-white' placeholder='From Station' /> */}
                    <select className='input flex-grow ml-[10px] bg-white' name="city" value={pickupCity} onChange={handleCityChange}>
                        {cities.map((city, index) => (
                            <option className='city-options' value={city} key={index}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-two">
                <div className="datepicker selection-header ">
                    Pickup Date
                </div>
                <div className="date-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" className='h-[16px]' alt="" />
                    <DatePicker
                        dateFormat={'dd/MM/yyyy'}
                        className='input flex-grow ml-[10px] bg-white ml-2'
                        selected={pickupDate}
                        onChange={date => setPickupDate(date)}
                    />
                </div>
            </div>

            <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-three">
                <div className="time selection-header ">
                    Pickup At
                </div>
                <div className="time-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/clocktime.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input flex-grow ml-[10px] bg-white' placeholder='To Station' /> */}
                    <select className='input flex-grow ml-[10px] bg-white' name="time" value={pickupTime} onChange={handleTimeChange}>
                        {timestamps.map((time, index) => (
                            <option className='city-options' value={time} key={index}>{time}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/* <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-four">
                <div className="duration selection-header ">
                    Package
                </div>
                <div className="package-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/packageicon.svg" className='h-[16px]' alt="" />
                    
                    <select className='input flex-grow ml-[10px] bg-white' name="duration" id="">
                        {durations.map((duration, index) => (
                            <option className='city-options' value={duration} key={index}>{duration} Hours</option>
                        ))}
                    </select>
                </div>
            </div> */}
        </div>
    )
}










const OutStationTravel = ({ pickupCity, setPickupCity, dropCity, setDropCity, pickupTime, setPickupTime, pickupDate, setPickupDate, ridePackage, setRidePackage }) => {
    const citiesFrom = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const citiesTo = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune", "Lucknow"];
    const timestamps = ["05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30"];
    const durations = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


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

    const handlePackageChange = (event) => {
        setRidePackage(parseInt(event.target.value, 10));
    }

    return (
        <>
            <div className="ride-selection flex flex-wrap justify-evenly items-center w-[95%] h-fit p-[20px] rounded-[20px] text-black bg-[#fcf5dc] sm-max:h-fit sm-max:w-full sm-max:gap-[10px] sm-max:flex-col sm-max:shadow-none">
                <div className="ride-selection-detail h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-four">
                    <div className="duration selection-header ">
                        Pickup Location
                    </div>
                    <div className="location-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                        <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                        <select className='input flex-grow ml-[10px] bg-white' name="pickupCity" value={pickupCity} onChange={handleCityChange}>
                            {citiesFrom.map((city, index) => (
                                <option className='city-options' value={city} key={index}>{city}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <i className="fa-solid fa-right-left text-slate-400"></i>
                <div className="ride-selection-detail h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-four">
                    <div className="duration selection-header ">
                        Drop Location
                    </div>
                    <div className="location-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                        <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                        <select className='input flex-grow ml-[10px] bg-white' name="dropCity" value={dropCity} onChange={handleCityChange}>
                            {citiesTo.map((city, index) => (
                                <option className='city-options' value={city} key={index}>{city}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="ride-selection-detail h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-four">
                    <div className="duration selection-header ">
                        Pickup Date
                    </div>
                    <div className="date-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                        <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" className='h-[16px]' alt="" />
                        <DatePicker
                            dateFormat={'dd/MM/yyyy'}
                            className='inputml-[10px] bg-white ml-2'
                            selected={pickupDate}
                            onChange={date => setPickupDate(date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }))}
                        />
                    </div>
                </div>
                <div className="ride-selection-detail h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-four">
                    <div className="duration selection-header ">
                        Pickup At
                    </div>
                    <div className="time-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                        <img src="https://www.carzonrent.com/webcor/images/icons/clocktime.svg" className='h-[16px]' alt="" />
                        <select className='input flex-grow ml-[10px] bg-white' name="pickupTime" value={pickupTime} onChange={handleTimeChange}>
                            {timestamps.map((time, index) => (
                                <option className='city-options' value={time} key={index}>{time}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="ride-selection-detail h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-four">
                    <div className="duration selection-header ">
                        Package
                    </div>
                    <div className="package-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                        <img src="https://www.carzonrent.com/webcor/images/icons/packageicon.svg" className='h-[16px]' alt="" />
                        {/* <input type="text" className='input flex-grow ml-[10px] bg-white' placeholder='To Station' /> */}
                        <select className='input flex-grow ml-[10px] bg-white' name="duration" id="" onChange={handlePackageChange}>
                            {durations.map((duration, index) => (
                                <option className='city-options' value={duration} key={index}>{duration} Hours</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}










const AirportTranfer = ({ pickupCity, setPickupCity, dropCity, setDropCity, pickupTime, setPickupTime, pickupDate, setPickupDate }) => {
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
        <div className="ride-selection flex flex-wrap justify-evenly items-center w-[95%] h-fit p-[20px] rounded-[20px] text-black bg-[#fcf5dc] sm-max:h-fit sm-max:w-full sm-max:gap-[10px] sm-max:flex-col sm-max:shadow-none">
            <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-one">
                <div className="city selection-header ">
                    Pickup
                </div>
                <div className="location-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input flex-grow ml-[10px] bg-white' placeholder='From Station' /> */}
                    <select className='input flex-grow ml-[10px] bg-white' name="city" id="">
                        {cities.map((city, index) => (
                            <option className='city-options' value={city} key={index}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>
            
            <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-one">
                <div className="city selection-header ">
                    Drop
                </div>
                <div className="location-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input flex-grow ml-[10px] bg-white' placeholder='From Station' /> */}
                    <select className='input flex-grow ml-[10px] bg-white' name="city" id="">
                        {cities.map((city, index) => (
                            <option className='city-options' value={city} key={index}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-two">
                <div className="datepicker selection-header ">
                    Pickup Date
                </div>
                <div className="date-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" className='h-[16px]' alt="" />
                    <DatePicker
                        dateFormat={'dd/MM/yyyy'}
                        className='input flex-grow ml-[10px] bg-white ml-2'
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                    />
                </div>
            </div>

            <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-three">
                <div className="time selection-header ">
                    Pickup At
                </div>
                <div className="time-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/clocktime.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input flex-grow ml-[10px] bg-white' placeholder='To Station' /> */}
                    <select className='input flex-grow ml-[10px] bg-white' name="time" id="">
                        {timestamps.map((time, index) => (
                            <option className='city-options' value={time} key={index}>{time}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}










const LongTermRentals = ({ pickupCity, setPickupCity, dropCity, setDropCity, pickupTime, setPickupTime, pickupDate, setPickupDate }) => {
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

    // const [pickupDate, setPickupDate] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }));
    const [returnDate, setReturnDate] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }));
    const [selectedType, setSelectedType] = useState('');

    // Function to handle select change
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Find selected car type details
    const selectedCarType = carTypes.find((cartype) => cartype.type === selectedType);

    return (
        <div className="ride-selection flex flex-wrap justify-evenly items-center w-[95%] h-fit p-[20px] rounded-[20px] text-black bg-[#fcf5dc] sm-max:h-fit sm-max:w-full sm-max:gap-[10px] sm-max:flex-col sm-max:shadow-none">
            <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-one">
                <div className="city selection-header ">
                    Pickup City
                </div>
                <div className="location-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/maplocation.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input flex-grow ml-[10px] bg-white' placeholder='From Station' /> */}
                    <select className='input flex-grow ml-[10px] bg-white' name="city" id="">
                        {cities.map((city, index) => (
                            <option className='city-options' value={city} key={index}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-three">
                <div className="pickup-date selection-header ">
                    Pickup Date
                </div>
                <div className="date-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" className='h-[16px]' alt="" />
                    <DatePicker
                        dateFormat={'dd/MM/yyyy'}
                        className='input flex-grow ml-[10px] bg-white ml-2'
                        selected={pickupDate}
                        onChange={date => setPickupDate(date)}
                    />
                </div>
            </div>

            <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-four">
                <div className="return-date selection-header ">
                    Return Date
                </div>
                <div className="date-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/calenderyellowgredient.svg" className='h-[16px]' alt="" />
                    <DatePicker
                        dateFormat={'dd/MM/yyyy'}
                        className='input flex-grow ml-[10px] bg-white ml-2'
                        selected={returnDate}
                        onChange={date => setReturnDate(date)}
                    />
                </div>
            </div>

            <div className="ride-selection-detail w-[20%] h-fit p-[0_19px] flex-grow cursor-pointer sm-max:w-full sm-max:p-[5px_10px] sm-max:border sm-max:border-[#79797920] rsd-three">
                <div className="time selection-header ">
                    Pickup At
                </div>
                <div className="time-input flex justify-start items-center max-w-full p-[16px] rounded-[14px] border border-[#ececec] bg-white overflow-hidden sm-max:w-full">
                    <img src="https://www.carzonrent.com/webcor/images/icons/clocktime.svg" className='h-[16px]' alt="" />
                    {/* <input type="text" className='input flex-grow ml-[10px] bg-white' placeholder='To Station' /> */}
                    <select className='input flex-grow ml-[10px] bg-white' name="time" id="">
                        {timestamps.map((time, index) => (
                            <option className='city-options' value={time} key={index}>{time}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}