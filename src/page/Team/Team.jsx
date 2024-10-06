import React from 'react';
import './Team.css'
import TeamMember from '../../Components/TeamMember';

const Team = () => {
    return (
        <div className='py-10 md:py-20 p-3 bg-[#1b1919]'>
            <div className="container">
                <div className="text-center">
                    <p className='font-extrabold tracking-wide mySub text-xl letter-spacing text-white'>Our Team</p>
                    <h4 className='myTitle text-2xl md:text-4xl py-4 text-white font-extrabold'>
                    Dedicated <span className='text-primaryColor'>Instructors and Wellness Experts</span>
                    </h4>
                </div>
                <div className='pt-8'>
                    <TeamMember></TeamMember>
                </div>
            </div>
        </div>
    );
};

export default Team;