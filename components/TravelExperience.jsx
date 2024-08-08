import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TravelExperience = () => {
  return (
    <div className="elevate-travel-experiences-section box-border overflow-hidden flex flex-col justify-center items-center h-fit w-screen py-[60px] pb-[0px] bg-white">
      <div className="relative w-screen h-[550px] sm:h-[300px]">
        <img 
          src="/top_ph002.png" 
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
        <div className="absolute top-10 w-full flex flex-col justify-center items-center text-center px-[20px] sm:px-[10px]">
          <h2 
            className="section-header w-fit pb-[20px] text-[32px] font-bold text-black sm:text-[22px] sm:pb-[10px] sm:mt-[-20px]" 
            data-aos='fade-up'
          >
            Elevate Your Travel Experience
          </h2>
          <p 
            className="w-[500px] text-[16px] px-2 leading-[30px] text-white sm:text-[16px] sm:w-full sm:leading-normal" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Unmatched Professionalism. <br className='sm:hidden'/> Impeccable Service. <br/> Your Perfect Chauffeur-Driven Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelExperience;
