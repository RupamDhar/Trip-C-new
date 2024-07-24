import React from 'react'
// import './SelfDrive.css'

const SelfDrive = () => {
    return (
        <div className='self-drive-section py-[95px] sm-max:hidden'>
            <div className="section-header pb-[20px] text-[42px] font-bold text-center sm-max:pb-[10px] sm-max:text-[22px]">Myles- Self Drive & Subscription</div>
            <div className="banner-section relative">
                <img src="https://www.carzonrent.com/webcor/images/banner/selfdrivebannerimg.png" alt="" />
                <div className="banner-info-wrapper absolute top-0 h-full w-full flex justify-center items-center">
                    <div className="banner-info w-full flex justify-around items-center gap-[100px]">
                        <div className="banner-info-text text-white text-[24px] font-semibold">
                            <span className="banner-info-header text-[36px] font-extrabold">
                                Looking for a <br />Self Drive Rental?
                            </span> <br />
                            Find the best self drive cars for you.
                        </div>
                        <button className="banner-info-btn h-fit w-fit px-[42px] py-[12px] text-[20px] font-bold border-2 border-[var(--theme-yellow)] rounded-[10px] text-[#191f1a] bg-[var(--theme-yellow)] transition-all duration-[0.15s] ease-in-out hover:bg-[rgba(0,0,0,0.5)] hover:text-[var(--theme-yellow)]">Click to Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelfDrive
