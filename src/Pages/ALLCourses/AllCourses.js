import React, { useEffect, useState } from "react";
import AllCourse from "./AllCourse";

const AllCourses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(true); // Initially show all courses

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((response) => response.json())
      .then((data) => {
        setAllCourses(data);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setShowAll(false); // Set showAll to false when searching
  };

  const handleShowAll = () => {
    setSearchQuery(""); // Clear the search query
    setShowAll(true); // Set showAll to true to display all courses
  };

  // Filter the courses based on the search query
  const filteredCourses = allCourses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const coursesToShow = showAll ? allCourses : filteredCourses;

  return (
    <div className="container mx-auto mt-8 px-4 py-[30px] sm:px-5 md:px-10 lg:px-20 xl:px-[70px]">
      <div className="flex gap-[40.63px] justify-center items-center">
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Type here to search"
            className="input input-bordered w-full max-w-xs"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <button className="btn btn-primary" onClick={handleShowAll}>
          Show All
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {coursesToShow.map((course) => (
          <AllCourse key={course._id} allCourse={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
