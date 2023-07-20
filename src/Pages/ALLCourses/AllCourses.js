import React, { useEffect, useState } from 'react';
import AllCourse from './AllCourse';
const AllCourses = () => {
    const [allCourses,setAllCourses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then(response => response.json())
      .then(data => setAllCourses(data))
       },[])
    return (
        <div className="container mx-auto mt-8 px-4 py-[30px] sm:px-5 md:px-10 lg:px-20 xl:px-[70px]">
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {allCourses.map(allCourse => <AllCourse key={allCourse._id} allCourse={allCourse} />)}
           </div>

            </div>
    );
};

export default AllCourses;