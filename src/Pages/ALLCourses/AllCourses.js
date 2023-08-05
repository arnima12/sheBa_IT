
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Allvideoss = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchvideos();
  }, []);

  const fetchvideos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/videos'); // Assuming your backend API is accessible at /videoss
      setvideos(response.data);
    } catch (error) {
      console.error('Error fetching videoss:', error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
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
            <Link to={`/videos/${videos._id}`}>
              <button className="text-white px-4 py-2 rounded-lg" style={{ background: 'linear-gradient(135deg, #92FFC0 0%, #002661 100%)', color: "white" }}>View videos</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Allvideoss;
