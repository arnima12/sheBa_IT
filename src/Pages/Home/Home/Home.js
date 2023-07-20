import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Courses from '../Courses/Courses';
import JobPreparation from '../JobPreparation/JobPreparation';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Courses/>
            <JobPreparation/>
        </div>
    );
};

export default Home;