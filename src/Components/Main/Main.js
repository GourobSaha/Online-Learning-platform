import React from 'react';
import './Main.css'
import Courses from '../Courses/Courses';

const Main = () => {
    return (
        <div className='main-container'>
            <div className="course-container">
                <Courses></Courses>
            </div>
        </div>
    );
};

export default Main;