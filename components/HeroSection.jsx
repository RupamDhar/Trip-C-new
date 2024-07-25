import React, { useEffect, useState } from 'react'
import FindYourRide from './FindYourRide';
import OurServices from '../components/OurServices';
import CompanyStats from '../components/CompanyStats';
import SelfDrive from '../components/SelfDrive';
import TravelSolutions from '../components/TravelSolutions';
import TravelExperience from '../components/TravelExperience';
import WhyChooseUs from '../components/WhyChooseUs';
import './HeroSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true
        })
    })

    return (
        <div className='bg-[rgb(240,240,240)] box-border w-[100vw]'>
            <div className="hero-section">
                {/* <div className="hero-section-stats-wrapper flex justify-between mb-[55px] h-fit w-[80%] sm-max:flex-wrap sm-max:justify-evenly sm-max:w-full sm-max:mb-[30px]">
                    <div className="hero-section-stat border-r border-[#797979] flex-grow sm-max:border-none sm-max:flex-grow-0 s-one">
                        <div className="stat-header text-[30px] font-bold text-center text-[var(--theme-yellow)] sm-max:text-[18px]">24 Years</div>
                        <div className="stat-sub-header text-[18px] font-bold text-center sm-max:text-[14px]">Of Service Excellence</div>
                    </div>

                    <div className="hero-section-stat border-r border-[#797979] flex-grow sm-max:border-none sm-max:flex-grow-0 s-two">
                        <div className="stat-header text-[30px] font-bold text-center text-[var(--theme-yellow)] sm-max:text-[18px]">10 Million+</div>
                        <div className="stat-sub-header text-[18px] font-bold text-center sm-max:text-[14px]">Happy Customers</div>
                    </div>

                    <div className="hero-section-stat border-r border-[#797979]  flex-grow sm-max:border-none sm-max:flex-grow-0 s-three">
                        <div className="stat-header text-[30px] font-bold text-center text-[var(--theme-yellow)] sm-max:text-[18px]">600+</div>
                        <div className="stat-sub-header text-[18px] font-bold text-center sm-max:text-[14px]">Corporates Served</div>
                    </div>

                    <div className="hero-section-stat flex-grow sm-max:border-none sm-max:flex-grow-0 s-four">
                        <div className="stat-header text-[30px] font-bold text-center text-[var(--theme-yellow)] sm-max:text-[18px]">79+</div>
                        <div className="stat-sub-header text-[18px] font-bold text-center sm-max:text-[14px]">Servicing Cities</div>
                    </div>
                </div> */}
                <span className='text-[42px] text-[#222222] font-semibold mt-[-50px] sm-max:mt-[100px]' data-aos='fade-up'>Find Your Ride</span>
                <FindYourRide />
            </div>
            <TravelExperience />
            <TravelSolutions />
            <OurServices />
            <CompanyStats />
            {/* <SelfDrive /> */}
            <WhyChooseUs />
        </div>
    )
}


export default HeroSection
