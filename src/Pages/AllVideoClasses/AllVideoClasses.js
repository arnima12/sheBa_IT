import React, { useEffect, useState } from 'react';
import AllVideoClass from './AllVideoClass';
import { Link } from 'react-router-dom';

const AllVideoClasses = () => {
    const [allVideoClasses,setAllVideoClasses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/liveClasses')
      .then(response => response.json())
      .then(data => setAllVideoClasses(data))
       },[])
    return (
        <div className="container mx-auto mt-8 px-4 py-[30px] sm:px-5 md:px-10 lg:px-20 xl:px-[70px]">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {allVideoClasses.map(allVideoClass =><AllVideoClass key={allVideoClass._id} allVideoClass={allVideoClass}/>)}
           </div>
           {/* <div className="flex justify-center mt-8">
           <button className="flex gap-2 font-bold border-0 text-white text-[12px] px-6 py-4 rounded-lg items-center" style={{ background:"linear-gradient(135deg, #92FFC0 0%, #002661 100%)",}}>
           <div>
                See All Classes 
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
           </button>
           </div> */}
       
            </div>
    );
};

export default AllVideoClasses;