import React from 'react';
import course from "../../../assets/star 1.png";
import live from "../../../assets/star 1 (1).png";
import job from "../../../assets/star 1 (2).png";
import device from "../../../assets/star 1 (3).png";
import certificate from "../../../assets/star 1 (4).png";
import "./Services.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Services = () => {
    return (
        <div className="container mx-auto mt-8 px-4 py-[30px] sm:px-5 md:px-10 lg:px-20 xl:px-[70px] overflow-hidden" data-aos="fade-up-right">
            <h2 className="text-4xl text-center font-bold mb-6">Why Us?</h2>
            <div className=" flex justify-center mb-10">
            <p className="text-center w-[420px]">Expert instructors, interactive learning, comprehensive curriculum, job preparation, accessible anytime, anywhere.</p>
            </div>
            <div className="zigzag-section">
            <div className="card star">
                <img src={course} alt="star"/>
                <p className="mx-10 my-4 font-bold">Comprehensive courses by industry experts</p>
            </div>
            <div className="card star">
                <img src={live} alt="star"/>
                <p className="mx-10 my-4 font-bold">Live classes with personalized attention</p>
            </div>
            <div className="card star">
                <img src={job} alt="star"/>
                <p className="mx-10 my-4 font-bold">Job preparation with career guidance</p>
            </div>
            <div className="card star">
                <img src={device} alt="star"/>
                <p className="mx-10 my-4 font-bold">Accessible on any device, anytime</p>
            </div>
            <div className="card star">
                <img src={certificate} alt="star"/>
                <p className="mx-10 my-4 font-bold">Certificate of completion for each course</p>
            </div>
            </div>
        </div>
    );
};

export default Services;