import React, { useEffect, useState } from 'react';
import Course from './Course';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();
const Courses = () => {
  const [courses,setCourses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/videos')
      .then(response => response.json())
      .then(data => setCourses(data))
       },[])
    return (
        <div className="container mx-auto mt-8 px-4 py-[30px] sm:px-5 md:px-10 lg:px-20 xl:px-[70px]" data-aos="fade-up-left">
            <h2 className="text-4xl text-center font-bold mb-6">Popular Courses</h2>
            <div className=" flex justify-center mb-10">
            <p className="text-center w-[420px]">Unlock your potential with our popular courses and take your career to the next level</p>
            </div>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {courses.slice(0, 3).map(course => <Course key={course._id} course={course} />)}
           </div>
           <Link to ="allCourses">
           <div className="flex justify-center mt-8">
           <button className="flex gap-2 font-bold border-0 text-white text-[12px] px-6 py-4 rounded-lg items-center" style={{ background: 'linear-gradient(135deg, #92FFC0 0%, #002661 100%)'}}>
           <div>
                See All Courses 
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
           </button>
           </div>
           </Link>
        
            </div>
    );
};

export default Courses;