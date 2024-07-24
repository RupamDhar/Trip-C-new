import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TravelExperience = () => {
  useEffect(() => {
    // const skills = document.querySelectorAll('.offering-img');

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry, index) => {
    //     setTimeout(() => {
    //       if (entry.isIntersecting) entry.target.classList.remove('opacity-0', 'scale-0');
    //     }, 100 * index);
    //   });
    // }, { threshold: 1 });

    // skills.forEach(skill => observer.observe(skill));
  }, []);

  return (
    <div className="elevate-travel-experiences-section flex flex-col justify-center items-center h-fit w-screen py-[60px] pb-[70px] box-border bg-[#dc635b]">
      <h2 className='section-header pb-[20px] text-[42px] font-bold text-black text-center sm-max:pb-[10px] sm-max:text-[22px]' data-aos='fade-up'>Elevate Your Travel Experience</h2>
      <p className='w-[500px] text-[20px] leading-[30px] text-center text-[white] sm-max:text-[16px] sm-max:w-full sm-max:leading-normal' data-aos="fade-up" data-aos-delay="200">
        Unmatched Professionalism. Impeccable Service. <br className='sm-max:hidden' /> Your Perfect Chauffeur-Driven Experience
      </p>
      <div className="travel-experience-offerings w-screen mt-[40px] flex justify-center items-center gap-[35px] sm-max:flex-col sm-max:p-[10px] sm-max:gap-[10px]">
        <div className="travel-experience-offerings-left h-[100%] w-[500px] sm-max:w-[100%] sm-max:h-fit" >
          <img src="https://img.freepik.com/premium-photo/attractive-business-woman-working-her-laptop-back-sit-car-way-meeting-side-view-beautiful-confident-woman-coat-working-laptop-while-sitting-car_168991-823.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355&semt=ais_user-customized" className='offering-img left rounded-lg sm-max:h-[100%] sm-max:w-[100%]' alt=""  data-aos="fade-right" data-aos-delay="100"/>
        </div>
        <div className="travel-experience-offerings-right flex flex-col justify-between w-fit gap-[30px] sm-max:gap-[10px]">
          <img src="https://img.freepik.com/free-photo/close-up-clock-with-time-change_23-2149241173.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355&semt=ais_user-customized" className='offering-img right rounded-lg h-[260px] w-[465px] sm-max:h-auto sm-max:w-[100%]' alt=""  data-aos="fade-left" data-aos-delay="100"/>
          <img src="https://img.freepik.com/premium-photo/businessman-hand-price-down-cost-reduction-concept-cost-down-puppet-master-hand-controlling-stock-market_106035-2803.jpg?uid=P77132068&ga=GA1.1.1678051510.1721624355" className='offering-img right rounded-lg h-[260px] w-[465px] sm-max:h-auto sm-max:w-[100%]' alt=""  data-aos="fade-left" data-aos-delay="200"/>
        </div>
      </div>
    </div>
  );
};

export default TravelExperience;
