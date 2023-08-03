import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
const AllCourse = ({allCourse}) => {
    const { _id,name, star, ratings, people, person, price,link } = allCourse;
    useEffect(() => {
        fetch('http://localhost:5000/courses')
          .then(response => response.json())
          .then(data => console.log(data))
           },[])
    return (
        <div className="shadow-2xl h-[350px] rounded-2xl ">
            
            <div className="flex justify-end mr-4 mt-4 ">
                    <div className="text-white px-4 py-2 rounded-lg" style={{ background: 'linear-gradient(135deg, #92FFC0 0%, #002661 100%)' }}>
                    Best Seller 
                    </div>
                </div>
                <div className="flex flex-col justify-center px-16 py-8">
            <h3 className="font-semibold text-3xl text-justify">{name.split(" ")[0]}
      <br />
      {name.split(" ")[1]}</h3>
            <div className="flex text-center text-xs font-semibold mt-2">
               <p>{ratings}</p>
                <p className="text-amber-500">{star}</p>
                <p>({people})</p>
            </div>
            <p className="font-normal text-xs">By <span className="underline">{person}</span></p>
            <p className="mt-8 text-3xl font-semibold">{price} BDT</p>
            <Link to={`/courses/${_id}`}>
          <button className="bg-white">View Course</button>
        </Link>
            </div>
        </div>
    );
};

export default AllCourse;