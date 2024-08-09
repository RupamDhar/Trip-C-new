import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { contactbanner, whatsapp, phone, contactusdetails, gmail, mappointer, instagram, linkedin, twitter, facebook } from '../src/assets';
import { containerClasses, headingClasses, gridClasses, inputClasses, buttonClasses } from './ContactFormUtils.js';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  
  return (
    <>
      <div
        className={containerClasses}
        style={{
          backgroundImage: `url('contactbanner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '700px',
        }}
      >
        <h1 className={headingClasses} style={{ color: 'white' }} data-aos="fade-down" data-delay="400">
          Contact Us <br />{' '}
          <span className="text-xl font-semibold text-gray-200">
            Need Assistance? Contact Us at +91 97437 73535
          </span>
        </h1>
      </div>
      
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 lg:p-8 space-y-8 lg:space-y-0 lg:space-x-32">
          {/* Form */}
          <div className="w-full lg:w-1/2 bg-gray-100 p-4 lg:p-8 rounded-lg">
            <form>
              <div className={gridClasses}>
                <div>
                  <label className="block text-gray-700 text-lg">First Name</label>
                  <input type="text" className={inputClasses} required />
                </div>
                <div>
                  <label className="block text-gray-700 text-lg">Last Name</label>
                  <input type="text" className={inputClasses} required />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg">Email</label>
                <input type="email" className={inputClasses} required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg">Phone Number</label>
                <input type="tel" className={inputClasses} required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg">Message</label>
                <textarea
                  placeholder="Enter Your Message"
                  className={inputClasses}
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className={buttonClasses}>
                  Submit Your Query
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/2">
            <img src='contactus.jpg' alt="" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
      
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 lg:p-8 space-y-8 lg:space-y-0 lg:space-x-32">

        {/* Image */}
        <div className="w-full lg:w-2/3">
            <img src='/contactusdetails.jpg' alt=""  className="w-full h-auto rounded-lg" />
          </div>

          {/* Contact Information */}
          <div className="w-full bg-gray-100 p-4 lg:p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl text-gray-900 font-extrabold mb-8">Contact Information</h2>
            <div className="space-y-10">
              <p className="flex items-center text-gray-800">
                <span className="mr-4">
                  <img src='/phone.png' className="w-8 h-8" alt="Phone" />
                </span>
                <span>+91 97400 04166, +91 97437 73535</span>
              </p>
              <p className="flex items-center text-gray-800 mt-10">
                <span className="mr-4">
                  <img src='/whatsapp.png' className="w-8 h-8" alt="WhatsApp" />
                </span>
                <span>+91 97400 04166</span>
              </p>
              <p className="flex items-center text-gray-800 mt-10">
                <span className="mr-4">
                  <img src='/gmail.png' className="w-8 h-8" alt="Email" />
                </span>
                <span>Tripcbooking05@gmail.com</span>
              </p>
              <p className="flex items-center text-gray-800 mt-10">
                <a href="https://maps.app.goo.gl/uRatwdFoNfzJaRJv9" className="mr-4">
                  <img src='/placeholder.png' className="w-8 h-8" alt="Map Pointer" />
                </a>
                <span>#157, First Floor, Keerthi Complex, BEML Layout, ITPL Main Road, Bangalore, India - 560066</span>
              </p>
            </div>
            <div className="flex gap-6 items-center mt-16">
              <a href="https://www.facebook.com" className="transition-transform transform hover:scale-110">
                <img src='/facebook.png' className="w-8 h-8" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com" className="transition-transform transform hover:scale-110">
                <img src='/instagram.png' className="w-8 h-8" alt="Instagram" />
              </a>
              <a href="https://www.twitter.com" className="transition-transform transform hover:scale-110">
                <img src='/twitter.png' className="w-8 h-8" alt="Twitter" />
              </a>
              <a href="https://www.linkedin.com" className="transition-transform transform hover:scale-110">
                <img src='/linkedin.png' className="w-8 h-8" alt="LinkedIn" />
              </a>
            </div>
          </div>
          
         
        </div>
      </div>
    </>
  );
};

export default ContactUs;
