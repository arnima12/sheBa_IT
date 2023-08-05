import React, { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [profile, setProfile] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
console.log(user)

// useEffect(() => {
//   // Fetch the user's profile data after the component mounts
//   const fetchProfileData = async () => {
//     try {
//       const response = await fetch(`https://sheba-it-server-0876.onrender.com/signup/${user.id}`);
//       if (response.ok) {
//         const data = await response.json();
//         setProfileData(data);
//       } else {
//         console.error('Failed to fetch profile data:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching profile data:', error);
//     }
//   };

//   fetchProfileData();
// }, [user.id]); 

// ... Rest of your profile component code
const handleImageChange = (event) => {
    // Handle image change logic here
    const imageFile = event.target.files[0];
    // Do something with the image file, like uploading it to the server
    // and set the image URL using setImageUrl
  };

  const handleCameraClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  const addSection = () => {
    setShowForm(true);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // Add the new section with the provided title and summary to the profile array
    setProfile([
      ...profile,
      {
        _id: Date.now().toString(), // Generate a unique ID (you can use any logic)
        title,
        summary,
      },
    ]);
    setTitle('');
    setSummary('');
    setFormSubmitted(true);
    setShowForm(false);
  };

  return (
    <div className="font-jost">
      <div className="grid grid-cols-2 place-content-start">
        <div class="hero bg-base-100">
          <div class="hero-content flex-col lg:flex-row">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          {/* Camera icon to trigger file selection */}
          <button type="button" onClick={handleCameraClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
</svg>

          </button>
            <div className="card-body">
              <h2 className="card-title">{user.displayName}</h2>
              <p>Product Designer </p>

              <div className="flex items-center gap-[26px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <p className="font-medium text-[14px]">Address</p>
              </div>
              <div className="flex items-center gap-[26px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <p className="font-medium text-[14px]">+8801724877440</p>
              </div>
              <div className="flex items-center gap-[26px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <p className="font-medium text-[14px]">{user.email}</p>
              </div>

              <button
                className="btn"
                style={{
                  background:
            "linear-gradient(135deg, #92FFC0 0%, #002661 100%)",
                  borderRadius: "8px",
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    <div className="font-jost container mx-auto mt-8 px-4 py-[30px] sm:px-5 md:px-10 lg:px-20 xl:px-[100px]">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {formSubmitted && (
        profile.map((pro)=><div key={pro._id} >
          <div className="card bg-base-100 shadow-xl rounded-box w-[500px]">
          <div className="card-body">
          <p className="card-title font-semibold text-2xl">{pro.title}</p>
          <p >{pro.summary}</p>
          </div>
          </div>
        </div>)
      )}
      </div>
      <button
        className="text-white px-4 py-2 rounded-lg mt-8"
        style={{
          background:
            "linear-gradient(135deg, #92FFC0 0%, #002661 100%)",
        }}
        onClick={addSection}
      >
        Add new section
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="flex flex-col m-8">
          <input
            type="text"
            placeholder={"Title"}
            value={title}
            onChange={handleTitleChange}
            className="h-16 w-48 px-4 mb-4"
          />
          <input
            type="text"
            placeholder={"Summary"}
            value={summary}
            onChange={handleSummaryChange}
            className="h-16 w-48 px-4"
          />
          <div className="flex justify-start mt-4">
          <button className="px-4 py-2 text-white rounded-lg" style={{ backgroundColor: "rgba(31, 84, 117, 1)" }} type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
    </div>
  );
};

export default Profile;
