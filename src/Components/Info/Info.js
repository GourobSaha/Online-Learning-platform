import React, { useState } from 'react';
import './Info.css'
import profile from '../../Images/pp6.png';
import location from '../../Images/location-dot-solid.svg'

const Info = ({info}) => {
    const [timeBreak, setTimeBreak] = useState(0);

    let totalTime = 0;
    let totalFee = 0;
    for(const course of info){
        totalTime = totalTime + course.time;
        totalFee = totalFee + course.fee;
    }

    const handleBreakTime = (breakTime) => {
        console.log(breakTime);
        setTimeBreak(breakTime);
    }

    return (
        <div className='info'>
            <div className='info-details'>
                <div className='profile'>
                    <img src={profile} alt="" />
                    <div>
                        <h3>Gourob Saha Surjo</h3>
                        <p><small>Dhaka, Bangladesh</small></p>
                        <p>Add days to life. Not life to days.</p>
                    </div>
                </div>
                <div className='personal-info'>
                    <div>
                        <h3>59 kg</h3>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h3>5.6 ft</h3>
                        <p>Height</p>
                    </div>
                    <div>
                        <h3>22 yrs</h3>
                        <p>Age</p>
                    </div>
                </div>
                <h3>Add a Break</h3>
                <div className='btn-break'>
                    <button onClick={ () => {handleBreakTime(0.5)}}>0.5h</button>
                    <button onClick={ () => {handleBreakTime(1)}}>1h</button>
                    <button onClick={ () => {handleBreakTime(1.5)}}>1.5h</button>
                    <button onClick={ () => {handleBreakTime(2)}}>2h</button>
                    <button onClick={ () => {handleBreakTime(2.5)}}>2.5h</button>
                </div>
                <h3>Course Details</h3>
                <h4>Time Duration: {totalTime} hours</h4>
                <h4>Total Fee: ${totalFee}</h4>
                <h4>Break Duration: {timeBreak} hours</h4>
            </div>
        </div>
    );
};

export default Info;