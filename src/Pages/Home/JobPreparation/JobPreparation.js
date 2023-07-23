import React from 'react';
import CV from "../../../assets/CV.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const JobPreparation = () => {
    const handleUpload = () => {
        console.log("hello")
    }
    return (
        <div className="container mx-auto mt-8 px-4 py-[30px] sm:px-5 md:px-10 lg:px-20 xl:px-[100px]" data-aos="fade-up">
            <h2 className="text-4xl text-center font-bold mb-6">Job preparation</h2>
            <div className=" flex justify-center mb-10">
                <p className="text-center w-[420px]">Get the competitive edge in your job search with our expert guidance and personalized support.</p>
            </div>
            <div className="mt-8 pl-16 py-10 bg-slate-800 h-[250px] rounded-3xl relative">

                <h2 className="text-white text-3xl font-semibold">Upload or Create your CV</h2>
                <p className="text-white w-[320px] mt-4 text-xs">Craft a winning CV and showcase your skills and achievements to stand out in a competitive job market.</p>
               
                <div className="flex gap-4">
                    <button className="flex gap-2 font-bold border-0 text-white text-[12px] px-6 py-2 rounded-lg items-center mt-8" style={{ background: 'linear-gradient(135deg, #92FFC0 0%, #002661 100%)' }} onClick={handleUpload}>
                        <p>Upload CV</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button className="font-bold border-2 text-white text-[12px] px-6 py-2 rounded-lg mt-8 ">
                        <p>Create a CV</p>
                    </button>
                </div>
                
                <div className="absolute right-2 -top-24 hidden lg:block">
                <img src={CV} alt="docs" className="h-[350px]"/>
            </div>
            </div>
            
        </div>
    );
};

export default JobPreparation;