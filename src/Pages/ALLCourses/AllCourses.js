
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AllCourses = () => {
  const [videos, setvideos] = useState([]);
  const {user} = useContext(AuthContext)
  useEffect(() => {
    fetchvideos();
  }, []);

  const fetchvideos = async () => {
    try {
      const response = await axios.get('https://sheba-it-server-0876.onrender.com/videos'); // Assuming your backend API is accessible at /videoss
      setvideos(response.data);
    } catch (error) {
      console.error('Error fetching videoss:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      {videos.map((videos) => (
        <div key={videos._id} className="shadow-2xl h-[350px] rounded-2xl">
          <div className="flex justify-end mr-4 mt-4 ">
            <div className="text-white px-4 py-2 rounded-lg" style={{ background: 'linear-gradient(135deg, #92FFC0 0%, #002661 100%)' }}>
              Best Seller
            </div>
          </div>
          <div className="flex flex-col justify-center px-16 py-8">
            <h3 className="font-semibold text-3xl text-justify">{videos.name}</h3>
            <div className="flex text-center text-xs font-semibold mt-2">
              <p></p>
              <p className="text-amber-500">{videos.star}</p>
              <p></p>
            </div>
            <p className="font-normal text-xs">By <span className="underline"> {videos.person}</span></p>
            <p className="mt-8 text-3xl font-semibold">{videos.price} BDT</p>
            
            {user?.uid ?
            <>
                
                <Link to={`/videos/${videos._id}`}>

              <button className="text-white px-4 py-2 rounded-lg" style={{ background: 'linear-gradient(135deg, #92FFC0 0%, #002661 100%)', color: "white" }}>View details</button>
            </Link>
            </>
            :
            <Link to="/signIn"><button className="text-white px-4 py-2 text-[14px] font-normal rounded-lg" style={{ backgroundColor: "rgba(31, 84, 117, 1)" }}>
            View Details
          </button></Link>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCourses;
