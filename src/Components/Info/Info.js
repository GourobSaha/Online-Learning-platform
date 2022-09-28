import React from 'react';
import './Info.css'
import profile from '../../Images/pp6.png';
import location from '../../Images/location-dot-solid.svg'

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
                    <button>0.5</button>
                    <button>1</button>
                    <button>1.5</button>
                    <button>2</button>
                    <button>2.5</button>
                </div>
                <h3>Course Details</h3>
                <h4>Time Duration: {totalTime} hours</h4>
                <h4>Total Fee: ${totalFee}</h4>
                <h4>Break Duration:</h4>
            </div>
        </div>
    );
};

export default Info;