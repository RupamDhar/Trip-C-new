import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TravelExperience = () => {
  return (
    <div className="elevate-travel-experiences-section box-border overflow-hidden flex flex-col justify-center items-center h-fit w-screen py-[0px] pb-[0px] bg-white">
      <div className="relative w-screen h-[600px]">
        <img
          src="/travelexp.jpg"
          className="absolute inset-0 object-cover w-full h-full sm-max:hidden"
          alt=""
          data-aos="fade-right"
          data-aos-delay="100"
        />
        <img
          src="https://w0.peakpx.com/wallpaper/304/687/HD-wallpaper-mclaren-car-vehicles-thumbnail.jpg"
          className="absolute inset-0 object-cover w-full h-full hidden sm-max:block"
          alt=""
          data-aos="fade-right"
          data-aos-delay="100"
        />
        <div className="absolute top-10 w-full flex flex-col justify-center items-center text-center px-[20px] sm-max:px-[10px]">
          <h2
            className="section-header w-fit pb-[20px] text-[40px] font-bold text-black sm-max:text-[22px] sm-max:pb-[10px] sm-max:mt-[-20px]"
            data-aos='fade-up'
          >
            Elevate Your Travel Experience
          </h2>
          <p
            className="w-[500px] text-[16px] px-2 leading-[30px] text-black sm-max:text-[16px] sm-max:w-full sm-max:leading-normal"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Unmatched Professionalism. <br className='sm-max:hidden' /> Impeccable Service. <br /> Your Perfect Chauffeur-Driven Experience
          </p>
          <a href='/contactus' className='mt-4 py-3 px-12 bg-[#dc635b] rounded-lg text-white font-semibold border-[#dc635b] border-2 hover:text-[#dc635b] hover:bg-[#00000085] transition-all duration-200 ease-in-out'>
            ENQUIRE
          </a>
        </div>
      </div>
    </div>
  );
};

export default TravelExperience;
