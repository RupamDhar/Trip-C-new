import React from 'react';
import { contactbanner, whatsapp, phone, gmail, mappointer, instagram, linkedin, twitter, facebook } from '../src/assets';
import { containerClasses, headingClasses, gridClasses, inputClasses, buttonClasses } from './ContactFormUtils.js';

const ContactForm = () => {
  return (
    <>
      <div
        className={`${containerClasses}`}
        style={{
          backgroundImage: `url(${contactbanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '420px',  // Ensure minimum height for the background container
        }}
      >
        <h1 className={`${headingClasses}`}>
          Contact Us <br />{' '}
          <span className="text-xl font-semibold text-black">
            Any questions or remarks? Call us at +91 97437 73535
          </span>
        </h1>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto p-8 space-y-8 md:space-y-0 md:space-x-8">
          {/* Contact Information */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl text-gray-800 font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center mt-16" style={{ marginBottom: "45px" }}>
                <span className="text-green-500 mr-4">
                  <img src={phone} className="w-8 h-8" alt="" />
                </span>
                +91 97400 04166 ,+91 97437 73535
              </p>
              <p className="flex items-center" style={{ marginBottom: "45px" }}>
                <span className="text-yellow-500 mr-4">
                  <img src={whatsapp} className="w-8 h-8" alt="" />
                </span>
                +91 97400 04166
              </p>
              <p className="flex items-center" style={{ marginBottom: "45px" }}>
                <span className="text-red-500 mr-4">
                  <img src={gmail} className="w-8 h-8" alt="" />
                </span>
                Tripcbooking05@gmail.com
              </p>
              <p className="flex items-center">
                <a href='https://maps.app.goo.gl/uRatwdFoNfzJaRJv9' className="text-yellow-500 mr-4">
                  <img src={mappointer} className="w-10 h-8" alt="" />
                </a>
                #157,First Floor, Keerthi Complex BEML Layout, ITPL Main Road Bangalore,India -560066.
              </p>
            </div>
            <div className='flex gap-9 items-center mt-12'>
              <a href="https://www.facebook.com" className="relative">
                <img src={facebook} className="w-8 h-8 hover:opacity-70 transition-opacity duration-300" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com" className="relative">
                <img src={instagram} className="w-8 h-8 hover:opacity-70 transition-opacity duration-300" alt="Instagram" />
              </a>
              <a href="https://www.twitter.com" className="relative">
                <img src={twitter} className="w-8 h-8 hover:opacity-70 transition-opacity duration-300" alt="Twitter" />
              </a>
              <a href="https://www.linkedin.com" className="relative">
                <img src={linkedin} className="w-8 h-8 hover:opacity-70 transition-opacity duration-300" alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg">
            <form>
              <div className={`${gridClasses}`}>
                <div>
                  <label className="block text-gray-700 text-lg">First Name</label>
                  <input type="text" className={`${inputClasses}`} required />
                </div>
                <div>
                  <label className="block text-gray-700 text-lg">Last Name</label>
                  <input type="text" className={`${inputClasses}`} required />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg">Email</label>
                <input type="email" className={`${inputClasses}`} required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg">Phone Number</label>
                <input type="tel" className={`${inputClasses}`} required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg">Message</label>
                <textarea
                  placeholder="Enter Your Message"
                  className={`${inputClasses}`}
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className={`${buttonClasses}`}>
                  Submit Your Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
