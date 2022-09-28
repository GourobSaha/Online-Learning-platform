import React, { useEffect, useState } from 'react';
import './Courses.css'
import Course from '../Course/Course';
import Info from '../Info/Info';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    const handleAddToList = (course) => {
        console.log(course);
        const newInfo = [...info, course];
        setInfo(newInfo);
    }

    return (
        <div className='courses-info'>
            <div className='course-container'>
                {
                    courses.map(course => <Course
                        key = {course.id}
                        course = {course}
                        handleAddToList = {handleAddToList}
                    ></Course>) 
                }
            </div>
            <div className='info-container'>
                <Info info = {info}></Info>
            </div>
        </div>
        
    );
};

export default Courses;