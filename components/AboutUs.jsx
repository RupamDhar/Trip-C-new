import React from 'react';
import {aboutusbanner,carbackground,carbackground2,medal} from '../src/assets';
import { FaBuilding, FaSmile, FaHandshake, FaCity, FaCar } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </div>
      <div className="w-full h-16 px-6 md:px-20">
        <a href="#" className="text-gray-500 text-sm mr-5">
          Home
        </a>
        <span>
          <i className="fa-solid fa-angles-right"></i>
        </span>
        <a href="#" className="text-cyan-400 font-medium text-sm ml-5">
          About Us
        </a>
      </div>

      <div
        className="w-full relative"
        style={{
          backgroundImage: `url(${aboutusbanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px',  // Ensure minimum height for the background container
        }}
      >
        <h1 className="text-red-500 text-4xl md:text-5xl font-semibold absolute top-1/2 left-6 md:left-32 transform -translate-y-1/2 mb-6 md:mb-12">
        Where Elegance <br /> Meets Excellence
        </h1>
      </div>


      <div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-16 lg:overflow-visible lg:px-0">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-span-1 lg:pr-8">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl">
                About TRIP-C
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-500">
                At Trip-C.com, we believe that travel should be an enriching and enjoyable experience.
                Founded in [Year], we have been dedicated to providing top-quality travel services to
                our clients.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-500">
              Our mission is to make travel easy, affordable, and accessible for everyone.
                Our team of experienced professionals is passionate about travel and committed to
                delivering exceptional service. Meet our team and learn more about the people who
                make Trip-C.com the preferred choice for travelers around the world.
              </p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-1 lg:sticky lg:top-4">
            <img
              className="w-full h-auto max-w-none rounded-xl"
              src="https://www.carzonrent.com/webcor/images/pageimg/aboutus-banner.png"
              alt="About Us"
            />
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-16 lg:overflow-visible lg:px-0">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mt-12 lg:mt-0 lg:col-span-1 lg:sticky lg:top-4">
            <img
              className="w-full h-auto max-w-none rounded-xl"
              src="https://www.carzonrent.com/webcor/images/pageimg/booking-procedure.png"
              alt="How We Work"
            />
          </div>
          <div className="lg:col-span-1 lg:pr-8">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl">
              Why Choose Us? 
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-500">
              Reliable Services: We offer a range of services tailored to your needs, ensuring a 
              smooth and hassle-free travel experience.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-500">
              Experienced Team: Our team of professionals is dedicated to providing the best 
              possible service.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-500">
              Customer Satisfaction: We prioritize your comfort and satisfaction, with a focus on 
              delivering exceptional value.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-black text-red-500 py-8 md:py-16" style={{
        backgroundImage: `url(${carbackground2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',  // Set a minimum height to ensure content fits within
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">Our Journey So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaBuilding className="text-yellow-500 text-4xl md:text-6xl mb-4" />
              <p className="text-lg md:text-xl font-semibold">Founded in 2000</p>
            </div>
            <div className="flex flex-col items-center">
              <FaSmile className="text-yellow-500 text-4xl md:text-6xl mb-4" />
              <p className="text-lg md:text-xl font-semibold">10M+ Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHandshake className="text-yellow-500 text-4xl md:text-6xl mb-4" />
              <p className="text-lg md:text-xl font-semibold">600+ Brands Served</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCity className="text-yellow-500 text-4xl md:text-6xl mb-4" />
              <p className="text-lg md:text-xl font-semibold">79+ Cities Served</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCar className="text-yellow-500 text-4xl md:text-6xl mb-4" />
              <p className="text-lg md:text-xl font-semibold">Plug - Ev Mobility Solutions</p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default AboutUs;
