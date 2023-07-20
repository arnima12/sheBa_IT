import React from 'react';
import target from "../../../assets/target 1.png";
import 'animate.css';
const Banner = () => {
  return (
    <div className="container mx-auto px-12 xl:h-[500px] overflowX-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse rounded-3xl overflowX-hidden" style={{ background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)', margin: '0 -16px' }}>
        <img src={target} alt="banner" className="h-[420px] my-0 animate__animated animate__pulse animate__faster" />
        <div className="w-1/2 flex justify-center flex-col animate__animated animate__slideInDown">
          <h1 className="text-5xl font-bold text-white">Learn from The Best</h1>
          <p className="py-6 text-white text-justify">Master new skills and achieve your career goals with our comprehensive courses, interactive live classes, and personalized job preparation services. Join our online learning community today and take the first step towards a brighter future.</p>
          <div className="flex flex-row gap-4">
            <button className="flex gap-2 font-bold border-0 text-white text-[12px] px-6 py-4 rounded-lg items-center" style={{ backgroundColor: "rgba(76, 115, 255, 1)" }}>
              <div>
                Get Started
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </button>
            <button className="flex flex-row text-white text-[12px] px-4 py-4 gap-2 font-bold rounded-lg items-center border-[1px]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>Contact Us</div>
            </button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Banner;