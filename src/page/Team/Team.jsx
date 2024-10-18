import React, { useEffect } from 'react';
import './Team.css'
import TeamMember from '../../Components/TeamMember';
import LocomotiveScroll from 'locomotive-scroll';

const Team = () => {
    useEffect(() => {
        scroll = new LocomotiveScroll({
            smooth: true,
        })
    }, [])
    return (
        <div className='py-10 md:py-20 p-3 bg-[#1b1919] overflow-hidden' data-scroll-container>
            <div className="container" data-scroll-section>
                <div className="text-center" data-scroll data-scroll-speed='-0.08'>
                    <p className='font-extrabold tracking-wide mySub text-xl letter-spacing text-white'>Our Team</p>
                    <h4 className='myTitle text-2xl md:text-4xl py-4 text-white font-extrabold'>
                    Dedicated <span className='text-primaryColor'>Instructors and Wellness Experts</span>
                    </h4>
                </div>
                <div className='pt-20'>
                    <TeamMember></TeamMember>
                </div>
            </div>
        </div>
    );
};

export default Team;