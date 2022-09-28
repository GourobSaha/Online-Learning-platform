import React from 'react';
import './Info.css'

const Info = ({info}) => {

    let totalTime = 0;
    let totalFee = 0;
    for(const course of info){
        totalTime = totalTime + course.time;
        totalFee = totalFee + course.fee;
    }

    return (
        <div className='info'>
            <div className='info-details'>
                <h2>Listed Course: {info.length}</h2>
                <h3>Course Details</h3>
                <h4>Time Duration: {totalTime} hours</h4>
                <h4>Total Fee: ${totalFee}</h4>
            </div>
        </div>
    );
};

export default Info;