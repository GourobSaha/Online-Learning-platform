import React, { useEffect, useState } from 'react';
import './Courses.css'
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className='course-container'>
           {
                courses.map(course => <Course
                    key={course.id}
                    course = {course}
                ></Course>) 
           }
        </div>
    );
};

export default Courses;