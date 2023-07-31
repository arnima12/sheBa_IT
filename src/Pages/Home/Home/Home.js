import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Courses from '../Courses/Courses';
import JobPreparation from '../JobPreparation/JobPreparation';
import VideoClass from '../VideoClasses/VideoClasses';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Courses/>
            <VideoClass/>
            <JobPreparation/>
        </div>
    );
};

export default Home;