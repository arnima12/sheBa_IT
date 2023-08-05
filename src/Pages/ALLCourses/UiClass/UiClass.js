import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import { BiSolidDiscount } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
const UiClass = () => {
  const { id } = useParams();
  // const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  
  const convertCourseOutlineToArray = (outline) => {
    if (!outline || typeof outline !== 'object') {
      return [];
    }

    return Object.entries(outline);
  };
  useEffect(() => {
    // Fetch the list of videos from the backend
    axios.get(`http://localhost:5000/videos/${id}`)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  // useEffect(() => {
  //   fetchCourseDetails();
  // }, []);

  // const fetchCourseDetails = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:5000/videos/${id}`);
  //     setCourse(response.data);
  //   } catch (error) {
  //     console.error('Error fetching course details:', error);
  //   }
  // };

  // if (!course) {
  //   return <div>Loading...</div>;
  // }
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownStyle = {
    // borderRadius: "10%",
    background: "linear-gradient(135deg, #92FFC0 0%, #002661 100%)",
    color: "white",
    padding: "15px",
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
   
  
  
    <div className="">
      <div className='mb-5 col-span-2'>
      <div className="grid grid-cols-3 gap-8">
      <div key={videos._id} className="shadow-2xl rounded-2xl mb-5 col-span-2">
     
     <div className="flex justify-end mr-4 mt-4 ">
       <div className="text-white px-4 py-2 rounded-lg" style={{ background: 'linear-gradient(135deg, #92FFC0 0%, #002661 100%)' }}>
         Best Seller
       </div>
     </div>
     <div className="flex flex-col justify-center px-16 py-8">
       <h3 className="font-semibold text-3xl text-justify">{videos.name}
       </h3>
       <div className="flex text-center text-xs font-semibold mt-2">
         <p></p>
         <p className="text-amber-500">{videos.star}</p>
         <p></p>
       </div>
       <p className="font-normal text-xs">By <span className="underline">{videos.person}</span></p>
       <p className="mt-8 text-3xl font-semibold">{videos.price} BDT</p>

       {/* Course Description */}
       <div className="mt-4">
         <h4 className="font-semibold text-lg">Course Description:</h4>
         <p className="text-sm mt-2">{videos.Course_description}</p>
       </div>

       {/* Course Outline */}
       <div className="mt-4">
         <h4 className="font-semibold text-lg">Course Preview :</h4>
         <p className="text-sm mt-2">{videos.Content_Preview}</p>




       </div>
       {/* <div className='mt-4'>
     <h4>Course outline</h4>
     {Array.isArray(videos.Course_outline) && (
       <ul className="list-disc list-inside text-sm mt-2">
         {videos.Course_outline.map((item, index) => (
           <li key={index}>{item}</li>
         ))}
       </ul>
     )}
   </div> */}
       <div className='mt-4'>
         <h4>Course outline </h4>
         <ul className="list-disc list-inside text-sm mt-2">
           {convertCourseOutlineToArray(videos.Course_outline).map(([key, value], index) => (
             <li key={index}>
               <strong>{key}: </strong> {value}
             </li>
           ))}
         </ul>
       </div>
     </div>
   </div>
   <div className="shadow-2xl rounded-2xl border-1 h-[420px] flex flex-col justify-center">
 
   <div className="p-4 text-xl">
   <ul className="flex items-center gap-4"><AiOutlineCheckCircle/>3 months study plan</ul>
   <ul className="flex items-center gap-4"><AiOutlineCheckCircle/> 12 module</ul>
   <ul className="flex items-center gap-4"><AiOutlineCheckCircle/> 32 recorded video</ul>
   <ul className="flex items-center gap-4"><AiOutlineCheckCircle/> 5 projects</ul>
   <ul className="flex items-center gap-4"><AiOutlineCheckCircle/> Freelancing Guideline</ul>
   <ul className="flex items-center gap-4"><AiOutlineCheckCircle/> Certification</ul>
   </div>
 
 <div className="flex gap-8 text-4xl font-bold p-4">
   <div>
     {videos.price} BDT
   </div>
   <div>
     <BiSolidDiscount style={{fontSize:"70px" , marginTop: "-20%"}}/>
   </div>
   <div>
   <BsFillShareFill/>
   </div>
 </div>
 <div className="flex flex-col items-center">
 <button className="text-white px-4 py-2 rounded-lg mb-8 w-[200px]" style={{ background: 'linear-gradient(135deg, #92FFC0 0%, #002661 100%)', color: "white" }}>Enroll Now</button>
 <button className="text-black px-4 py-2 rounded-lg w-[200px] border-2" style={{ "borderColor": "rgba(31, 84, 117, 1)" }}>Add to wishlist</button>
 </div>
</div>
      </div>
      {/* video-container  */}
      <div className="card card-side bg-base-100 shadow-xl ">
        <div className="card-body">
          
            <div className="flex space-x-12 ">
              <span style={dropdownStyle} className='p-4 rounded-[50%]'> 1</span>

              <h2 className="card-title">{videos.name}</h2>
              <h2 className="card-title" style={{ color: "#2833FF", fontWeight: "bold " }}>            Free
              </h2>

            </div>
            <div className="flex" style={{ marginLeft: "6%" }}>
              <div style={{ marginRight: "30px" }}>  <p> <span style={{ marginRight: "10px" }}>1</span> video </p></div>
              <div style={{ marginRight: "30px" }}>
                <p> <span style={{ marginRight: "10px" }}>2</span> Assignment </p>
              </div>
              <div style={{ marginRight: "30px" }}>
                <p> <span style={{ marginRight: "10px" }}>1</span> Test </p>

              </div>


            </div>
          
          <div style={{ marginTop: "-5%" }}>
            <div className="card-actions justify-end mt-0 items-center">
              <MdOutlineArrowDropDownCircle onClick={toggleDropdown} style={{ fontSize: "50px" }} />
              {showDropdown && (
                <div key={videos._id} className="w-1/4 p-2">
                  <ReactPlayer
                    url={`http://localhost:5000/videos/${videos.video}`}
                    controls
                    width="100%"
                    height="auto"
                  />

                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      {convertCourseOutlineToArray(videos.Course_outline).map(([key, value], index) => (
        <div key={index} className="card card-side bg-base-100 shadow-xl mt-0">
          <div className="card-body">
            <div className="flex space-x-12 ">
                <span style={dropdownStyle} className='p-4 rounded-[50%]'> {index+2}</span>
<h2 className="card-title">{value}</h2>
                <h2 className="card-title" style={{ color: "#2833FF", fontWeight: "bold " }}>            Premium
                </h2>
</div>
              <div className="flex" style={{ marginLeft: "6%" }}>
                <div style={{ marginRight: "30px" }}>  <p> <span style={{ marginRight: "10px" }}>1</span> video </p></div>
                <div style={{ marginRight: "30px" }}>
                  <p> <span style={{ marginRight: "10px" }}>2</span> Assignment </p>
                </div>
                <div style={{ marginRight: "30px" }}>
                  <p> <span style={{ marginRight: "10px" }}>1</span> Test </p>
</div>
              </div>
           
            {/* <div style={{ marginTop: "-5%" }}>
              <div className="card-actions justify-end mt-0 items-center">
                <MdOutlineArrowDropDownCircle onClick={toggleDropdown} style={{ fontSize: "50px" }} /> 
                {showDropdown && (
                  <div key={videos._id} className="w-1/4 p-2">
                    <ReactPlayer
                      url={`http://localhost:5000/videos/${videos.video}`}
                      controls
                      width="100%"
                      height="auto"
                    />

                  </div>
                )}
              </div>
            </div> */}

          </div>
        </div>
      ))}


      {/* <div key={videos._id} className="w-1/4 p-2">
        <ReactPlayer
          url={`http://localhost:5000/videos/${videos.video}`}
          controls
          width="100%"
          height="auto"
        />
        <a
          href={`http://localhost:5000/videos/${videos.video}`}
          download
          className="btn mt-2"
        >
          Download
        </a>
      </div> */}

    </div>
    
    </div>
  );
};

export default UiClass;