// // import React, { useState } from 'react';

// // const Video = () => {
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [videoFile, setVideoFile] = useState(null);
// //   // Add other state variables for additional fields
// //   // const [name, setName] = useState('');
// //   // const [ratings, setRatings] = useState(0);
// //   // const [star, setStar] = useState('');
// //   // const [person, setPerson] = useState('');
// //   // const [people, setPeople] = useState('');
// //   // const [contentPreview, setContentPreview] = useState('');
// //   // const [price, setPrice] = useState('');
// //   // const [link, setLink] = useState('');
// //   // const [courseDescription, setCourseDescription] = useState('');

// //   const handleTitleChange = (event) => {
// //     setTitle(event.target.value);
// //   };

// //   const handleDescriptionChange = (event) => {
// //     setDescription(event.target.value);
// //   };

// //   const handleVideoFileChange = (event) => {
// //     setVideoFile(event.target.files[0]);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     const formData = new FormData();
// //     formData.append('title', title);
// //     formData.append('description', description);
// //     formData.append('video', videoFile);
   

// //     fetch('http://localhost:5000/videos', {
// //       method: 'POST',
// //       body: formData,
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log('Video uploaded successfully', data);
// //         // Optionally, you can show a success message or perform any other actions
// //       })
// //       .catch((error) => {
// //         console.error('Error uploading video', error);
// //         // Handle the error appropriately
// //       });
// //   };

// //   return (
// //     <div>
// //       <h2>Upload Video</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label htmlFor="title">Title:</label>
// //         <input type="text" id="title" name="title" value={title} onChange={handleTitleChange} required />

// //         <label htmlFor="description">Description:</label>
// //         <textarea id="description" name="description" value={description} onChange={handleDescriptionChange} required />

// //         <label htmlFor="video">Choose a video file:</label>
// //         <input type="file" id="video" name="video" accept="video/*" onChange={handleVideoFileChange} required />


// //         <button type="submit">Upload Video</button>
// //       </form>

// //       {/* Display the video */}
// //       <h2>Video Preview</h2>
// //       {videoFile && (
// //         <video width="320" height="240" controls>
// //           <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
// //           Your browser does not support the video tag.
// //         </video>
// //       )}
// //     </div>
// //   );
// // };

// // export default Video;

// import React, { useState } from 'react';

// const Video = () => {
//   const [name, setName] = useState('');
//   const [videoFiles, setVideoFiles] = useState([]); // State to hold an array of selected video files

//   const handleTitleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleVideoFileChange = (event) => {
//     const files = event.target.files;
//     // Convert FileList to an array and update the videoFiles state
//     setVideoFiles(Array.from(files));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('title', name);

//     // Append all selected video files to the formData
//     for (let i = 0; i < videoFiles.length; i++) {
//       formData.append('videos', videoFiles[i]);
//     }

//     fetch('http://localhost:5000/videos', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Videos uploaded successfully', data);
//         // Optionally, you can show a success message or perform any other actions
//       })
//       .catch((error) => {
//         console.error('Error uploading videos', error);
//         // Handle the error appropriately
//       });
//   };
//   return (
//     <div>
//       <h2>Upload Videos</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title:</label>
//         <input type="text" id="name" name="name" value={name} onChange={handleTitleChange} required />

//         {/* Update file input to accept multiple videos */}
//         <label htmlFor="videos">Choose video files:</label>
//         <input type="file" id="videos" name="videos" accept="video/*" onChange={handleVideoFileChange} multiple required />

//         <button type="submit">Upload Videos</button>
//       </form>

//       {/* Display the video previews */}
//       <h2>Video Previews</h2>
//       {videoFiles.length > 0 && (
//         <div>
//           {videoFiles.map((file, index) => (
//             <div key={index}>
//               <p>Video {index + 1}</p>
//               <video width="320" height="240" controls>
//                 <source src={URL.createObjectURL(file)} type={file.type} />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Video;
