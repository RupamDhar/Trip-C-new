import React, { useRef } from 'react';
// import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -carouselRef.current.clientWidth / 4, // Adjust the scroll amount to show 4 items
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: carouselRef.current.clientWidth / 4, // Adjust the scroll amount to show 4 items
            behavior: 'smooth'
        });
    };

    return (
        <div className='why-choose-us-section flex justify-center my-[60px] h-fit w-screen box-border'>
            <div className="why-choose-us w-[80%] sm-max:w-[95%]">
                <h2 className="why-choose-us-header mb-[10px] text-[30px] font-bold text-[#343434]">Why Choose Us?</h2>
                <div className="carousel-container relative flex items-center">
                    <button className="carousel-btn absolute top-1/2 transform -translate-y-1/2 bg-white border border-[#ddd] rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer z-10 text-[20px] shadow-md left absolute top-1/2 transform -translate-y-1/2 bg-white border border-[#ddd] rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer z-10 text-[20px] shadow-md -right-[20px] sm-max:-right-[0px]" onClick={scrollRight}>
                        <i className="fa-solid fa-greater-than"></i>
                    </button>
                    <div className="carousel-wrapper flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide" ref={carouselRef}>
                        <div className="carousel-element relative flex-none w-[25%] box-border snap-start sm-max:w-full">
                            <img className='w-full' src="https://www.carzonrent.com/webcor/images/banner/trainnedchauffeuer.png" alt="Element 1" />
                            <div className="carousel-text absolute bottom-[15px] w-full text-center text-[26px] text-white font-bold">Verified Chauffeurs</div>
                        </div>
                        <div className="carousel-element relative flex-none w-[25%] box-border snap-start sm-max:w-full">
                            <img className='w-full' src="https://www.carzonrent.com/webcor/images/banner/outstationtravels.png" alt="Element 5" />
                            <div className="carousel-text absolute bottom-[15px] w-full text-center text-[26px] text-white font-bold">24*7 Customer Support</div>
                        </div>
                        <div className="carousel-element relative flex-none w-[25%] box-border snap-start sm-max:w-full">
                            <img className='w-full' src="https://www.carzonrent.com/webcor/images/banner/airporttransfer.png" alt="Element 2" />
                            <div className="carousel-text absolute bottom-[15px] w-full text-center text-[26px] text-white font-bold">Live Location Tracking</div>
                        </div>
                        <div className="carousel-element relative flex-none w-[25%] box-border snap-start sm-max:w-full">
                            <img className='w-full' src="https://www.carzonrent.com/webcor/images/banner/nosurgepricing.png" alt="Element 3" />
                            <div className="carousel-text absolute bottom-[15px] w-full text-center text-[26px] text-white font-bold">Transparent Billing</div>
                        </div>
                        <div className="carousel-element relative flex-none w-[25%] box-border snap-start sm-max:w-full">
                            <img className='w-full' src="https://www.carzonrent.com/webcor/images/banner/airporttransfer.png" alt="Element 4" />
                            <div className="carousel-text absolute bottom-[15px] w-full text-center text-[26px] text-white font-bold">Carousel Text</div>
                        </div>
                    </div>
                    <button className="carousel-btn absolute top-1/2 transform -translate-y-1/2 bg-white border border-[#ddd] rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer z-10 text-[20px] shadow-md right " onClick={scrollLeft}>
                    <i className="fa-solid fa-less-than"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;