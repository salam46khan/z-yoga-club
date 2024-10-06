import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
import team3 from '../assets/img/team-3.jpg'

const TeamMember = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center gap-8 items-center'>
            <div className="team-card">
                <img className='h-full w-full object-cover' src={team1} alt="" />
                <div className='team-content'>
                    <h4 className='text-2xl myTitle text-primaryColor text-center'>
                        Rahim Ali
                    </h4>
                    <p className='font-bold text-xl text-center text-gray-300 py-2'>Meditation & Mindfulness Expert</p>
                    <div className='flex justify-center items-center gap-3'>
                        <a href='#' target='_blank' className='icon'>
                            <FaFacebookF className='text-2xl text-primaryColor' />
                        </a>
                        <a href='#' target='_blank' className='icon'>
                            <FaInstagram className='text-2xl text-primaryColor' />
                        </a>
                        <a href='#' target='_blank' className='icon'>
                            <FaXTwitter className='text-2xl text-primaryColor' />
                        </a>

                    </div>
                </div>
            </div>

            {/* team card 2  */}
            <div className="team-card">
                <img className='h-full w-full object-cover' src={team2} alt="" />
                <div className='team-content'>
                    <h4 className='text-2xl myTitle text-primaryColor text-center'>
                        Sara Khan
                    </h4>
                    <p className='font-bold text-xl text-center py-2 text-gray-300'>
                        Fitness & Wellness Coach
                    </p>
                    <div className='flex justify-center items-center gap-3'>
                        <a href='#' target='_blank' className='icon'>
                            <FaFacebookF className='text-2xl text-primaryColor' />
                        </a>
                        <a href='#' target='_blank' className='icon'>
                            <FaInstagram className='text-2xl text-primaryColor' />
                        </a>
                        <a href='#' target='_blank' className='icon'>
                            <FaXTwitter className='text-2xl text-primaryColor' />
                        </a>

                    </div>
                </div>
            </div>


            {/* team 3  */}
            <div className="team-card">
                <img className='h-full w-full object-cover' src={team3} alt="" />
                <div className='team-content'>
                    <h4 className='text-2xl myTitle text-primaryColor text-center'>
                        Zara Ahmed
                    </h4>
                    <p className='font-bold text-xl text-center py-2 text-gray-300'>
                        Yoga for Beginners Instructor
                    </p>
                    <div className='flex justify-center items-center gap-3'>
                        <a href='#' target='_blank' className='icon'>
                            <FaFacebookF className='text-2xl text-primaryColor' />
                        </a>
                        <a href='#' target='_blank' className='icon'>
                            <FaInstagram className='text-2xl text-primaryColor' />
                        </a>
                        <a href='#' target='_blank' className='icon'>
                            <FaXTwitter className='text-2xl text-primaryColor' />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;