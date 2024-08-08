import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CorporateTravels from '../components/CorporateTravels';
import SMETravels from '../components/SMETravels';
import AviationTravelSolutions from '../components/AviationTravelSolutions';
import GovPSUTravel from '../components/Gov&PSUTravel';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactUs';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import './App.css';
import HospitalityTravel from '../components/HospitalityTravel';
import ScrollToTop from '../components/ScrollToTop';
import RideDetails from '../components/RideDetails';
import FinalDetails from '../components/FinalDetails';
import { Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={<HeroSection />} />
                <Route path='/corporatetravels' element={<CorporateTravels />} />
                <Route path='/smetravels' element={<SMETravels />} />
                <Route path='/aviationtravelsolutions' element={<AviationTravelSolutions />} />
                <Route path='/govpsutravel' element={<GovPSUTravel />} />
                <Route path='/hospitalitytravel' element={<HospitalityTravel/>} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/contactus' element={<ContactForm />} />
                <Route path='/ridedetails' element={<RideDetails />} />
                <Route path='/finaldetails' element={<FinalDetails />} />
            </Routes>

            {/* About Us */}
            {/* <div className="about-us-wrapper h-fit w-screen box-border flex justify-center">
                <div className="about-us w-[80%] sm-max:w-[95%]">
                    <div className="about-us-header mb-[10px] text-[30px] font-bold text-[#343434] sm-max:text-[22px] sm-max:pb-[10px]">About Us</div>
                    <div className="about-us-body mb-[20px] text-[#797979]">
                        C is India's leading premium mobility solution provider, covering 79 cities nationwide, founded to revolutionize personal ground transportation. Pioneers of smart mobility, we offer reliable, tech-driven, business class solutions for seamless travel experiences.
                    </div>
                    <Link to="/aboutus"><button className='read-more-btn px-[25px] py-[10px] border border-red-400 rounded-full text-red-400 transition-all duration-[0.15s] ease-in-out sm-max:w-full hover:bg-red-400 hover:text-black'>Read More</button></Link>
                </div>
            </div> */}

            
            <Faq />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
