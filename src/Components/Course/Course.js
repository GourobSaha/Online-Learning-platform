import React from 'react';
import './Course.css'

const Course = (props) => {
    const{course, handleAddToList} = props
    const{name, picture, about, fee, time} = props.course;

    return (
        <div className='courses-design'>
            <img src={picture} alt="" />
            <h2>Course Name: {name}</h2>
            <p><small>{about}</small></p>
            <h3>${fee}</h3>
            <h3>Time Duration: {time} hours</h3>
            <div className='btn-add'>
                <button onClick={() => handleAddToList(course)}>Add to List</button>
            </div>
        </div>
    );
};

export default Course;