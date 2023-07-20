import React, { useEffect, useState } from 'react';
import AllLiveClass from './AllLiveClass';

const LiveClasses = () => {
    const [allLiveClasses,setAllLiveClasses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/liveClasses')
      .then(response => response.json())
      .then(data => setAllLiveClasses(data))
       },[])
    return (
        <div className="container mx-auto mt-8 px-4 py-[30px] sm:px-5 md:px-10 lg:px-20 xl:px-[70px]">
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {allLiveClasses.map(allLiveClass =><AllLiveClass key={allLiveClass._id} allLiveClass={allLiveClass}/>)}
           </div>
           
            </div>
    );
};

export default LiveClasses;