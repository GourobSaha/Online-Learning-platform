import React from 'react';
import './Course.css'

const Course = (props) => {

    const{name, id, picture, about, fee, time} = props.course;

    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default Course;