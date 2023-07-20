import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Courses from '../Courses/Courses';
import LiveClasses from '../LiveClass/LiveClasses';
import JobPreparation from '../JobPreparation/JobPreparation';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Courses/>
            <LiveClasses/>
            <JobPreparation/>
        </div>
    );
};

export default Home;